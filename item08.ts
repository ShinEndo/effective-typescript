interface Cylinder {
	radius: number;
	height: number;
}

const Cylinder = (radius: number, height: number) => ({radius,height});

function calculateVolume(shape: unknown) {
	if(shape instanceof Cylinder) {
		// shape.radius
	}
}

interface Person {
	first: string;
	last: string;
}

const jane: Person = {first: 'Jane', last: 'Jacobs'};

interface Response {}

function email(to: Person, subject: string, body: string) : Response {
	return {};
}

type T1 = typeof jane;
type T2 = typeof email;

const v1 = typeof jane;
const v2 = typeof email;

export {}