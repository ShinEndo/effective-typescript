{
    //     function panTo(where: [number,number]) {
    //         return where;
    //     }
    //     const loc = [10,20] as const;
    //     panTo(loc);
}
{
    function panTo(where: readonly [number, number]) {
        return where;
    }

    const loc = [10, 20] as const;
    panTo(loc);
}
{
    type Language = "JavaScript" | "TypeScript" | "Python";
    interface GovernedLanguage {
        language: Language;
        organization: string;
    }
    function complain(language: GovernedLanguage) {
        /* ... */
    }

    complain({ language: "TypeScript", organization: "Microsoft" });
    // const ts = {
    //     language: 'TypeScript',
    //     organization: 'Microsost',
    // };
    // complain(ts);
    const ts: GovernedLanguage = {
        language: "TypeScript",
        organization: "Microsost",
    };
    complain(ts);
}
{
    function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
        fn(Math.random(), Math.random());
    }
    callWithRandomNumbers((a, b) => {
        console.log(a + b);
    });
    // const fn = (a,b) => {console.log(a+b)};
    // callWithRandomNumbers(fn);
    const fn = (a: number, b: number) => {
        console.log(a + b);
    };
    callWithRandomNumbers(fn);
}
