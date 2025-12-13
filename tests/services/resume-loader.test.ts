import { expect, test, vi } from 'vitest'
import * as stub from "@/app/services/yaml-loader"
import { Resume, ResumeLoaderService } from '@/app/services/resume-loader'

test('load resume should succeed when type matches', async () => {  
  const yaml = {
    person: { name: 'name', title: 'title' },
    summary: 'summary',
    metadatas: [{ id: 'email', value: 'email', link: 'link'}],
    education: { degree: 'degree', school: 'school', duration: 'duration', location: 'location'},
    skills: ['skill-1', 'skill-2'],
    experiences: [
      {
        company: { name: 'name', website: 'web'},
        position: 'position',
        location: 'location',
        duration: 'duration',
        tasks: ['task-1', 'task-2']
      }
    ]
  }
  const stubbedFunc = vi.spyOn(stub, 'loadYaml');
  stubbedFunc.mockResolvedValue(yaml);

  const sut = new ResumeLoaderService('file');

  const promise = sut.loadResume();
  await expect(promise).resolves.toBeDefined();
  
  const res: Resume = await promise;

  expect(res).toBeDefined();
  expect(res.person.name).toStrictEqual('name');
  expect(res.person.title).toStrictEqual('title');
  expect(res.summary).toBeDefined();
  expect(res.metadatas).toBeDefined();
  expect(res.metadatas.length).toEqual(1);
  expect(res.education).toBeDefined();
  expect(res.skills).toBeDefined();
  expect(res.skills.length).toEqual(2);
  expect(res.experiences).toBeDefined();
  expect(res.experiences.length).toEqual(1);
})

test('load resume should fail when type mismatches', async () => {  
  const spy = vi.spyOn(stub, 'loadYaml');
  spy.mockResolvedValue({key: "key", value: "value", extra: "extra"});
  
  const sut = new ResumeLoaderService('file');

  await expect(sut.loadResume()).rejects.toThrowError('Not a Resume data type!');

  spy.mockResolvedValue(1);
  await expect(sut.loadResume()).rejects.toThrowError('Not a Resume data type!');
})
