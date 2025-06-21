export interface Seed {
	name: string;
	type: string;
}
export interface SeedAPI {
	'/seeds': Seed[];
	'/seed/apple': Seed;
	'/seed/strawberry': Seed;
	// ...
}

declare function fetchAPI<API, Path extends keyof API>(path: Path): Promise<API[Path]>;

async () => {
	const berry = await fetchAPI<SeedAPI,'/seed/strawberry'>('/seed/strawberry');
	// const seed: Seed = await fetchAPI<SeedAPI,'/seeds'>('/seeds');
}

declare class ApiFetcher<API> {
	fetch<Path extends keyof API>(path:Path): Promise<API[Path]>
}

async () => {
	const fetcher = new ApiFetcher<SeedAPI>();
	const berry = await fetcher.fetch('/seed/strawberry');
	// fetcher.fetch('/seed/chiken');
	// const seed: Seed = await fetcher.fetch('/seeds');
}

declare function getDate(mon: string, day: number) : Date;
getDate('dec', 25);

declare function getDate02(mon:string): (day:number) => Date;
getDate02('dec')(25);

declare function fetchAPI02<API>():
	<Path extends keyof API>(path: Path) => Promise<API[Path]>;

async () => {
	const fetchSeedAPI = fetchAPI02<SeedAPI>();
	const berry = await fetchSeedAPI('/seed/strawberry');
	// const seed: Seed = await fetchSeedAPI('/seeds');
}

