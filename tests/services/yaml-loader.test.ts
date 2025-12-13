import { loadYaml } from '@/app/services/yaml-loader';
import { promises as fs } from 'fs'
import yaml, { load } from 'js-yaml'
import { expect, test, vi } from 'vitest'

test('loadYaml unable to read file', async () => {
  const message = 'unable to read file';
  const fsSpy = vi.spyOn(fs, 'readFile');
  fsSpy.mockRejectedValue(Error(message));

  await expect(() => loadYaml('file')).rejects.toThrowError(message);
  expect(fsSpy).toHaveBeenCalledExactlyOnceWith('file', 'utf-8');
})

test('loadYaml succeeds', async () => {
  const fsSpy = vi.spyOn(fs, 'readFile');
  fsSpy.mockResolvedValue('{}');

  const loaderSpy = vi.spyOn(yaml, 'load');
  loaderSpy.mockReturnValue({ val: "val" });

  await expect(loadYaml('file')).resolves.toBeTypeOf('object');
})
