declare function setCamera(camera: CameraOptions) : void;
declare function viewportForBounds(bound: LngLatBounds) : Camera
interface LngLat {lng: number; lat: number};
type LngLatLike =  LngLat | {lon: number; lat: number} |[number,number];
interface Camera {
    center :LngLat;
    zoom: number;
    bearing: number;
    pitch: number;
}
interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
    center?: LngLatLike;
}
type LngLatBounds = 
    {northeast: LngLatLike, southwest: LngLatLike} | 
    [LngLatLike,LngLatLike] |
    [number,number,number,number];
interface Feature {};
declare function calculateBoundBox(f: Feature) :LngLatBounds;

function focusOnFeature(f: Feature) {
    const bounds = calculateBoundBox(f) // ヘルパー関数
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const {center: {lat,lng}, zoom} = camera;
}

function sum(xs: Iterable<number>): number {
    let sum = 0;
    for(const x of xs) {
        sum += x;
    }
    return sum;
}

const six = sum([1,2,3]);

function* range(limit: number) {
    for(let i = 0; 9 < limit; i++) {
        yield 1;
    }
}
const zeroToNine = range(10);
const fortyFive = sum(zeroToNine);
console.log(zeroToNine);