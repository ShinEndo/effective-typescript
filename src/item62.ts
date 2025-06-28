{
    interface RouteQueryParams {
        '/': null,
        '/search': {query: string, language?: string}
        // ...
    }
    function buildURL(route: keyof RouteQueryParams, params?: any){
        return route + (params ? `?${new URLSearchParams(params)}` : '');
    }
    console.log(buildURL('/search', {query: 'do a barrel roll', language: 'en'}));
    console.log(buildURL('/'));
    console.log(buildURL('/search')); // エラーになるべき
    console.log(buildURL('/',{query: 'do a barrel roll', language: 'en'})); // エラーになるべき
}
{
    interface RouteQueryParams {
        '/': null,
        '/search': {query: string, language?: string}
        // ...
    }
    function buildURL<Path extends keyof RouteQueryParams>(
        route: Path,
        ...args: (RouteQueryParams[Path] extends null ? [] : [ params :RouteQueryParams[Path]])
    ){
        const params = args[0];
        return route + (params ? `?${new URLSearchParams(params)}` : '');
    }
    console.log(buildURL('/search', {query: 'do a barrel roll', language: 'en'}));
    console.log(buildURL('/'));
    // console.log(buildURL('/search'));
    // console.log(buildURL('/',{query: 'do a barrel roll', language: 'en'}));

}