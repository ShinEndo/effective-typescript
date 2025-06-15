function getElement(elOrId: string | HTMLElement | null) : HTMLElement {
	if(elOrId === null) {
		return document.body;
	} else if (typeof elOrId === 'object') {
		return elOrId;
	}
	const el = document.getElementById(elOrId);
	if(!el) {
		throw new Error (`No such element ${elOrId}`);
	}
	return el;
}

let i = 0;
for(let x =0; x < 10; x++) {
	console.log(x);
	{
		let i = 122;
		console.log(i);
	}
}
console.log(i);