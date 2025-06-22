"use strict";
async function fetchPages() {
    const [response1, response2, response3] = await Promise.all([
        fetch('url1'), fetch('url2'), fetch('url3')
    ]);
    console.log(response1, response2, response3);
}
function fetchPagesWithCallbacks() {
    let numDone = 0;
    const responses = [];
    const done = () => {
        const [response1, response2, response3] = responses;
        // ...
    };
    const urls = ['url1', 'url2', 'ulr3'];
    urls.forEach((url, i) => {
        fetchURL(url, r => {
            responses[i] = url;
            numDone++;
            if (numDone === urls.length)
                done();
        });
    });
}
function timeout(timeoutMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('timeout'), timeoutMs);
    });
}
async function fetchWithTimeout(url, timeoutMs) {
    return Promise.race([fetch(url), timeout(timeoutMs)]);
}
async function getNumber() { return 42; }
const getNumber02 = async () => 42;
const getNumber03 = () => Promise.resolve(42);
const _cache = {};
async function fetchWithCache(url) {
    if (url in _cache) {
        return _cache[url];
    }
    const response = await fetch(url);
    const text = await response.text();
    _cache[url] = text;
    return text;
}
let requestStatus;
async function getUser(userId) {
    requestStatus = 'loading';
    const profile = await fetchWithCache(`/user/${userId}`);
    requestStatus = 'success';
}
async function getJSON(url) {
    const response = await fetch(url);
    const jsonPromise = response.json();
    return jsonPromise;
}
