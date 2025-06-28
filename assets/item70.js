"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseCSV(contents) {
    if (typeof contents === 'object') {
        // Bufferの場合
        return parseCSV(contents.toString('utf-8'));
    }
    return [{ column: '' }];
}
