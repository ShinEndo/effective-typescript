"use strict";
{
    //     function panTo(where: [number,number]) {
    //         return where;
    //     }
    //     const loc = [10,20] as const;
    //     panTo(loc);
}
{
    function panTo(where) {
        return where;
    }
    const loc = [10, 20];
    panTo(loc);
}
{
    function complain(language) {
        /* ... */
    }
    complain({ language: "TypeScript", organization: "Microsoft" });
    // const ts = {
    //     language: 'TypeScript',
    //     organization: 'Microsost',
    // };
    // complain(ts);
    const ts = {
        language: "TypeScript",
        organization: "Microsost",
    };
    complain(ts);
}
{
    function callWithRandomNumbers(fn) {
        fn(Math.random(), Math.random());
    }
    callWithRandomNumbers((a, b) => {
        console.log(a + b);
    });
    // const fn = (a,b) => {console.log(a+b)};
    // callWithRandomNumbers(fn);
    const fn = (a, b) => {
        console.log(a + b);
    };
    callWithRandomNumbers(fn);
}
