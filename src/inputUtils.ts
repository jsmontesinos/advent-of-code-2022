import { createInterface } from 'readline';
import { createReadStream } from 'fs';

export async function readFile(fileName: string): Promise<string[]> {
  const readInterface = createInterface(createReadStream(fileName));

  const result: string[] = [];
  for await (const line of readInterface) {
    result.push(line);
  }

  return result;
}

export function splitInGroups(lines: string[]): string[][] {
  return lines
    .map((line) => line.trim())
    .reduce(
      (acc, line) =>
        line.length
          ? [
              ...(acc.length ? acc.slice(0, -1) : []),
              [...(acc.length ? acc[acc.length - 1] : []), line],
            ]
          : [...acc, []],
      [],
    )
    .filter((group) => group.length);
}
