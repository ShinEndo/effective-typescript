type Comparable<T> = [T] extends [Date] ? Date | number : [T] extends [number] ? number : [T] extends [string] ? string : never;
declare function isLessThan<T>(a: T, b: Comparable<T>): boolean;

isLessThan(new Date(), new Date());
isLessThan(new Date(), Date.now());
isLessThan(12, 23);
isLessThan('A', 'B');
// isLessThan(12, 'B');
let dateOrStr = Math.random() < 0.5 ? new Date() : 'A';
// isLessThan(dateOrStr, 'B');

type NTuple<T, N extends number> = N extends number ? NTupleHelp<T, N, []> : never;
type NTupleHelp<T, N extends number, Acc extends T[]> = Acc['length'] extends N ? Acc : NTupleHelp<T, N, [T, ...Acc]>;
type PairOfStrings = NTuple<string, 2>;
type TripleOfNumbers = NTuple<number, 3>;
type PairOrTriple = NTuple<bigint, 2 | 3>;

type CelebrateifTrue<V> = [V] extends [true] ? 'Huzzah!' : never;
type Party = CelebrateifTrue<true>;
type NoParty = CelebrateifTrue<false>;
type SupriseParty = CelebrateifTrue<boolean>;

type AllowIn<T> = T extends { password: 'open-sesame' } ? 'Yes' : 'No';
type N = AllowIn<never>;
