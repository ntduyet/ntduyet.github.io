import { promises as fs, PathLike } from 'fs';
import { FileHandle } from 'fs/promises';
import yaml from 'js-yaml'

export async function loadYaml(filePath: PathLike | FileHandle): Promise<unknown> {
  const data = await fs.readFile(filePath, 'utf-8');
  const res = yaml.load(data);
  return res;
}
