import { readFile, splitInGroups } from '../inputUtils.js';
import { maxCalories, threeTopELvesSUm } from './day1.js';

(async function main(): Promise<void> {
  const input = await readFile('./fixtures/day1.1');
  const elfCalories: Array<Array<number>> = splitInGroups(input).map((group) =>
    group.map((calories) => parseInt(calories, 10)),
  );
  console.log('part1', maxCalories(elfCalories));
  console.log('part2', threeTopELvesSUm(elfCalories));
})();
