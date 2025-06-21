console.log('abcde'.split('c'));

function safeIndxOf<T>(vals: readonly T[],val: T): number | null {
    const index = vals.indexOf(val);
    return index === -1 ? null : index;
}


function splitAround<T>(vals: readonly T[],val: T) {
    const index = safeIndxOf(vals , val);
    if(index === null) return [[...vals],[]];
    return [vals.slice(0,index), vals.slice(index+1)];
}
console.log(splitAround([1,2,3,4,5],3));
console.log(splitAround([1,2,3,4,5],6));