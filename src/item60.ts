const obj = {
    one: 'uno',
    two: 'dos',
    three: 'tres',
};
for(const kStr in obj){
    const k = kStr as keyof typeof obj;
    const v = obj[k];
}

interface ABC {
    a: string;
    b: string;
    c: number;
}
function foo(abc: ABC) {
    for(const [k,v] of Object.entries(abc)){
        console.log(v);
    }
}