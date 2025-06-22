function hasAKeyThatEndWithZ(o: Record<string,any>) {
    for(const key in o) {
        if(key.endsWith('z')) {
            console.log(key,o[key]);
            return true;
        }
        return false;
    }
}

type Fn0 = () => any;
type Fn1 = (arg: any) => any;
type Fn2 = (...args:any[]) => any;