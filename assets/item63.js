"use strict";
{
    const bothThings = {
        shirtColor: 'red',
        hairColor: 'blue',
    };
    const thing1 = bothThings;
    const thing2 = bothThings;
}
{
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
    const thing1 = { shirtColor: 'red' };
    const things = { hairColor: 'blue' };
}
{
    function calculateLength(v) {
        return Math.sqrt(v.x ** 2 + v.y ** 2);
    }
    const v = { x: 3, y: 4, z: 5 };
    const v2 = { x: 3, y: 4 };
    // calculateLength(v);
    calculateLength(v2);
}
{
    // const allThings: ExclusiveThing = {
    //     shirtColor: 'red',
    //     hairColor: 'blue',
    // }
}
