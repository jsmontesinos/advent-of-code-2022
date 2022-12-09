import { pipe } from 'fp-ts/lib/function.js';
import * as A from 'fp-ts/lib/Array.js';
import * as NEA from 'fp-ts/lib/NonEmptyArray.js';
import * as N from 'fp-ts/lib/number.js';

function sumArray(array: Array<number>): number {
  return A.reduce(0, (prev, next: number) => prev + next)(array);
}

export function maxCalories(elfCalories: Array<Array<number>>): number {
  return pipe(elfCalories, A.map(sumArray), NEA.max(N.Ord));
}

export function threeTopELvesSUm(elfCalories: Array<Array<number>>): number {
  return pipe(
    elfCalories,
    A.map(sumArray),
    A.sort(N.Ord),
    A.takeRight(3),
    sumArray,
  );
}
