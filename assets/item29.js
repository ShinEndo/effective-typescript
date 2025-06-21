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
function renderPage(state) {
    const { currentPage } = state;
    const requestState = state.requests[currentPage];
    switch (requestState.state) {
        case 'pending':
            return `Loading ${currentPage}...`;
        case 'error':
            return `Error! Unable to load ${currentPage}: ${requestState.error}`;
        case 'ok':
            return `<h1>${currentPage}</h1>\n${requestState.pageText}`;
    }
}
function changePage(state, newPage) {
    return __awaiter(this, void 0, void 0, function* () {
        state.requests[newPage] = { state: 'pending' };
        state.currentPage = newPage;
        try {
            const response = yield fetch(getUrlForPage(newPage));
            if (!response.ok) {
                throw new Error(`Error! Unable to load ${newPage}: ${response.statusText}`);
            }
            const pageText = yield response.text();
            state.requests[newPage] = { state: 'ok', pageText };
        }
        catch (e) {
            state.requests[newPage] = { state: 'error', error: '' + e };
        }
    });
}
