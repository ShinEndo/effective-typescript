function printTriangles(n: number) {
	const nums = [];
	for(let i = 0; i < n; i++) {
		nums.push(i);
		console.log(arraySum(nums));
	}
}

function arraySum(arr: number[]){
	let sum = 0, num;
	while((num = arr.pop()) != undefined) {
		sum += num;
	}
	return sum;
}

interface PartlyMutableName {
	readonly first: string;
	last: string;
}

const jackie: PartlyMutableName = {
	first: 'Jacqueline',
	last: 'Kennedy',
}
jackie.last = 'Onassis';
// jackie.first = 'Jacky';

interface FullyMutableName {
	first: string;
	last: string;
}
type FullyImutableName = Readonly<FullyMutableName>;



