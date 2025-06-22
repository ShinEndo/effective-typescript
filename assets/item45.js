"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPeak = fetchPeak;
async function checkedfetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Unable to fetch! ${response.statusText}`);
    }
    return response.json();
}
async function fetchPeak(peakId) {
    const maybePeak = checkedfetchJSON(`/api/mountain.peaks/${peakId}`);
    if (!maybePeak || typeof maybePeak !== 'object' || !('firstAscentYear' in maybePeak)) {
        throw new Error(`Invalid mountain peak: ${JSON.stringify(maybePeak)}`);
    }
    return checkedfetchJSON(`/api/mountain.peaks/${peakId}`);
}
const sevenPeaks = [
    'aconcagua', 'denali', 'elbrus', 'everest', 'kilimanjaro', 'vinson', 'wilhelm'
];
async function getPeaksbyHeight() {
    const peaks = await Promise.all(sevenPeaks.map(fetchPeak));
    return peaks.toSorted((a, b) => b.elevationMeters - a.elevationMeters);
}
