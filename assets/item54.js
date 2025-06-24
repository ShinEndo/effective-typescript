"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check1 = {
    id: 'subscribe',
    checked: true,
    // value: 'yes',
    'data-listIds': 'all-the-lists',
};
const check2 = {
    id: 'subscribe',
    checked: true,
    // listIds: 'all-the-lists',
};
const img = document.querySelector('img#spectacular-sunset');
const img02 = document.querySelector('div#spectacular-sunset img');
function camelCase(term) {
    return term.replace(/_([a-z])/g, (m) => m[1].toUpperCase());
}
function objectToCamel(obj) {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
        out[camelCase(k)] = v;
    }
    return out;
}
const snake = { foo_bar: 12 };
const camel = objectToCamel(snake);
const val = camel.fooBar;
