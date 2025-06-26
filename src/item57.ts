{
	function sum(nums: readonly number[]): number {
		if(nums.length === 0) {
			return 0;
		}
		return nums[0] + sum(nums.slice(1));
	}
	console.log(sum([0,1,2,3,4]));
	// const arr = Array(7875).fill(1);
	// console.log(sum(arr));
}
{
	function sum(nums: readonly number[], acc = 0) : number {
		if(nums.length === 0) return acc;
		return sum(nums.slice(1), nums[0] + acc); 
	}
	// const arr = Array(7875).fill(1);
	// console.log(sum(arr));
}
{
	type GetChars<S extends string> =
	S extends `${infer FirstChar}${infer RestOfString}`
	? FirstChar | GetChars<RestOfString>
	: never;
	type ABC = "a" | "b" | "c";
}
{
	type ToSnake<T extends string> =
		string extends T
		? string
		: T extends `${infer First}${infer Rest}`
		? (First extends Uppercase<First>
			? `_${Lowercase<First>}${ToSnake<Rest>}`
			: `${First}${ToSnake<Rest>}`
		) : T;
		type S = ToSnake<'fooBarBaz'>;
		type Two = ToSnake<'className' | 'tagName'>
}
{
	type ToSnake<T extends string, Acc extends string = ""> =
		string extends T
		? string
		: T extends `${infer First}${infer Rest}`
		? ToSnake<
			Rest,
			First extends Uppercase<First>
			? `${Acc}_${Lowercase<First>}`
			: `${Acc}${First}`
		>
		: Acc;
	type S = ToSnake<'fooBarBaz'>;
	type Two = ToSnake<'className' | 'tagName'>
}
export {}