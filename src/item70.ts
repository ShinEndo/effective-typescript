export interface CsvBuffer {
    toString(encoding?: string):string;
}
function parseCSV(contents: string | CsvBuffer): {[column: string]: string}[] {
    if(typeof contents === 'object') {
        // Bufferの場合
        return parseCSV(contents.toString('utf-8'));
    }
    return [{column: ''}];
}


