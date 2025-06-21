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
Object.defineProperty(exports, "__esModule", { value: true });
() => __awaiter(void 0, void 0, void 0, function* () {
    const berry = yield fetchAPI('/seed/strawberry');
    // const seed: Seed = await fetchAPI<SeedAPI,'/seeds'>('/seeds');
});
() => __awaiter(void 0, void 0, void 0, function* () {
    const fetcher = new ApiFetcher();
    const berry = yield fetcher.fetch('/seed/strawberry');
    // fetcher.fetch('/seed/chiken');
    // const seed: Seed = await fetcher.fetch('/seeds');
});
getDate('dec', 25);
getDate02('dec')(25);
() => __awaiter(void 0, void 0, void 0, function* () {
    const fetchSeedAPI = fetchAPI02();
    const berry = yield fetchSeedAPI('/seed/strawberry');
    // const seed: Seed = await fetchSeedAPI('/seeds');
});
