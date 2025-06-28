{
    interface ThingOne {
        shirtColor: string;
    }
    interface ThingTwo {
        hairColor: string;
    }
    type Thing = ThingOne | ThingTwo;
    const bothThings = {
        shirtColor: 'red',
        hairColor: 'blue',
    };
    const thing1: ThingOne = bothThings;
    const thing2: ThingTwo = bothThings;
}
{
    interface OnlyThingOne {
        shirtColor: string;
        hairColor?: never;
    }
    interface OnlyThingTwo {
        shirtColor?: never;
        hairColor: string;
    }
    type ExclusiveThing = OnlyThingOne | OnlyThingTwo;
    const bothThings = {
        shirtColor: 'red',
        hairColor: 'blue',
    };
    // const thing1: OnlyThingOne = bothThings;
    // const thing2: OnlyThingTwo = bothThings;
    // const allThings: ExclusiveThing = {
    //     shirtColor: 'red',
    //     hairColor: 'blue',
    // }
    const thing1: OnlyThingOne = {shirtColor: 'red'};
    const things: OnlyThingTwo = {hairColor: 'blue'};
}
{
    interface Vector2D {
        x: number;
        y: number;
        z?: never;
    }
    function calculateLength(v: Vector2D) {
        return Math.sqrt(v.x ** 2 + v.y ** 2);
    }
    const v = {x:3,y:4,z:5};
    const v2 = {x:3,y:4};
    // calculateLength(v);
    calculateLength(v2);
}
{
    type XOR<T1,T2> = 
        (T1 & {[k in Exclude<keyof T2, keyof T1>]?: never}) |
        (T2 & {[k in Exclude<keyof T1, keyof T2>]?: never});
    interface ThingOne {
        shirtColor: string;
    }
    interface ThingTwo {
        hairColor: string;
    }
    type ExclusiveThing = XOR<ThingOne,ThingTwo>;
    // const allThings: ExclusiveThing = {
    //     shirtColor: 'red',
    //     hairColor: 'blue',
    // }
}
