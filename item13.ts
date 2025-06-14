type TState = {
	name: string;
	capital: string;
}
interface IState {
	name: string;
	capital :string;
}

type TDict = { [key: string]: string};
interface IDict {
	[key: string]: string;
}

type TFn = (x: number) => string;
interface IFn {
	(x: number) : string;
}
type TFnAlt = {
	(x:number): string;
}
const toStrT: TFn = x => '' + x;
const toStrI: IFn = x => '' + x;
const toStrTAlt: TFnAlt = x => '' + x;

type TBox<T> = {
	value: T;
}
interface IBox<T> {
	value: T;
}

interface IStateWithPop extends TState {
	population: number;
}
type TstateWithPop = IState & {population: number;}

