import { promises as fs } from 'fs';

export async function readFile(path: string): Promise<string[]> {
  const data = await fs.readFile(path, { encoding: 'utf8' });
  const allValues = data.split('\n');
  return allValues;
}
