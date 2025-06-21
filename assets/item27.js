"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchPages() {
    return __awaiter(this, void 0, void 0, function* () {
        const [response1, response2, response3] = yield Promise.all([
            fetch('url1'), fetch('url2'), fetch('url3')
        ]);
        console.log(response1, response2, response3);
    });
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
function fetchWithTimeout(url, timeoutMs) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.race([fetch(url), timeout(timeoutMs)]);
    });
}
function getNumber() {
    return __awaiter(this, void 0, void 0, function* () { return 42; });
}
const getNumber02 = () => __awaiter(void 0, void 0, void 0, function* () { return 42; });
const getNumber03 = () => Promise.resolve(42);
const _cache = {};
function fetchWithCache(url) {
    return __awaiter(this, void 0, void 0, function* () {
        if (url in _cache) {
            return _cache[url];
        }
        const response = yield fetch(url);
        const text = yield response.text();
        _cache[url] = text;
        return text;
    });
}
let requestStatus;
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        requestStatus = 'loading';
        const profile = yield fetchWithCache(`/user/${userId}`);
        requestStatus = 'success';
    });
}
function getJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const jsonPromise = response.json();
        return jsonPromise;
    });
}
