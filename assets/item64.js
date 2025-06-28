"use strict";
function listAbsolutePath(path) {
    // ...
}
function isAbsolutePath(path) {
    return path.startsWith('/');
}
function f(path) {
    if (isAbsolutePath(path)) {
        listAbsolutePath(path);
    }
    // listAbsolutePath(path);
}
const merters = (m) => m;
const seconds = (s) => s;
const oneKm = merters(1000);
const oneMin = seconds(60);
