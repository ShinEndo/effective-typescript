interface MountainPeak {
    name: string;
    continent: string;
    elevationMeters: number;
    firstAscentYear: number;
}
async function checkedfetchJSON(url: string) : Promise<MountainPeak> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Unable to fetch! ${response.statusText}`);
    }
    return response.json();
}
export async function fetchPeak(peakId: string): Promise<MountainPeak>{
    const maybePeak = checkedfetchJSON(`/api/mountain.peaks/${peakId}`);
    if(!maybePeak || typeof maybePeak !== 'object' || !('firstAscentYear' in maybePeak)) {
        throw new Error(`Invalid mountain peak: ${JSON.stringify(maybePeak)}`);
    }
    return checkedfetchJSON(`/api/mountain.peaks/${peakId}`) as Promise<MountainPeak>;
}

const sevenPeaks = [
    'aconcagua', 'denali', 'elbrus', 'everest', 'kilimanjaro', 'vinson', 'wilhelm'
];
async function getPeaksbyHeight(): Promise<MountainPeak[]>{
    const peaks = await Promise.all(sevenPeaks.map(fetchPeak));
    return peaks.toSorted((a,b) => b.elevationMeters - a.elevationMeters);
}