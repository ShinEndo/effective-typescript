type AbsolutePath = string & {_brand: 'abs'};
function listAbsolutePath(path: AbsolutePath) {
    // ...
}
function isAbsolutePath(path: string): path is AbsolutePath{
    return path.startsWith('/');
}
function f(path: string) {
    if(isAbsolutePath(path)) {
        listAbsolutePath(path);
    }
    // listAbsolutePath(path);
}

type Meters = number & {_brand: 'meters'};
type Seconds = number & {_brand: 'seconds'};
const merters = (m:number) => m as Meters;
const seconds = (s:number) => s as Seconds;
const oneKm = merters(1000);
const oneMin = seconds(60);