import { pipe } from 'fp-ts/lib/function.js';
import * as A from 'fp-ts/lib/Array.js';
import * as NEA from 'fp-ts/lib/NonEmptyArray.js';
import * as N from 'fp-ts/lib/number.js';
import { readFile, splitInGroups } from './inputUtils.js';

function sumArray(array: Array<number>): number {
  return A.reduce(0, (prev, next: number) => prev + next)(array);
}

export function maxCalories(elfCalories: Array<Array<number>>): number {
  return pipe(elfCalories, A.map(sumArray), NEA.max(N.Ord));
}

(async function main(): Promise<void> {
  const input = await readFile('./fixtures/day1.1');
  const elfCalories: Array<Array<number>> = splitInGroups(input).map((group) =>
    group.map((calories) => parseInt(calories, 10)),
  );
  console.log(maxCalories(elfCalories));
})();
