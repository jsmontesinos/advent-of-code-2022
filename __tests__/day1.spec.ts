import { maxCalories } from '../src/day1.js';

const elfCalories = [
  [1000, 2000, 3000],
  [4000],
  [5000, 6000],
  [7000, 8000, 9000],
  [10000],
];

describe('day1', () => {
  describe('part1', () => {
    it('should return elf with more calories', () => {
      expect(maxCalories(elfCalories)).toBe(24000);
    });
  });
});
