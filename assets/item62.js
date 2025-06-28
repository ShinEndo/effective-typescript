"use strict";
{
    function buildURL(route, params) {
        return route + (params ? `?${new URLSearchParams(params)}` : '');
    }
    console.log(buildURL('/search', { query: 'do a barrel roll', language: 'en' }));
    console.log(buildURL('/'));
    console.log(buildURL('/search')); // エラーになるべき
    console.log(buildURL('/', { query: 'do a barrel roll', language: 'en' })); // エラーになるべき
}
{
    function buildURL(route, ...args) {
        const params = args[0];
        return route + (params ? `?${new URLSearchParams(params)}` : '');
    }
    console.log(buildURL('/search', { query: 'do a barrel roll', language: 'en' }));
    console.log(buildURL('/'));
    // console.log(buildURL('/search'));
    // console.log(buildURL('/',{query: 'do a barrel roll', language: 'en'}));
}
