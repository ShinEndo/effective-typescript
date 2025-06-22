"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async () => {
    const berry = await fetchAPI('/seed/strawberry');
    // const seed: Seed = await fetchAPI<SeedAPI,'/seeds'>('/seeds');
};
async () => {
    const fetcher = new ApiFetcher();
    const berry = await fetcher.fetch('/seed/strawberry');
    // fetcher.fetch('/seed/chiken');
    // const seed: Seed = await fetcher.fetch('/seeds');
};
getDate('dec', 25);
getDate02('dec')(25);
async () => {
    const fetchSeedAPI = fetchAPI02();
    const berry = await fetchSeedAPI('/seed/strawberry');
    // const seed: Seed = await fetchSeedAPI('/seeds');
};
