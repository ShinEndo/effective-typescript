interface Vector3D {
	x: number;
	y: number;
	z: number;
}

function getComponent(vector: Vector3D, axis: 'x' | 'y' | 'z') {
	return vector[axis];
}

// let x = 'x';
const x = 'x';
let vec = {x: 10, y: 20, z: 30};
getComponent(vec,x);

const obj1 = {x: 1, y: 2};
const obj2 = {x: 1 as const , y: 2};
const obj3 = {x: 1 as const , y: 2 as const};
const obj4 = {x: 1, y: 2} as const ;
obj3.x = 1;
// obj4.x = 1;

const arr1 = [1,2,3];
const arr2 = [1,2,3] as const;

const freezenArray = Object.freeze([1,2,3]);
const frozenObj = Object.freeze({x: 1, y: 2});

type Point = [number,number];
const capitals1 = { ny: [1.0000,2.0000], ca:[2.00000,3.0000]};
const capitals2 = {
	ny: [1.0000,2.0000],
	ca: [2.0000,3.0000]
} satisfies Record<string, Point>;