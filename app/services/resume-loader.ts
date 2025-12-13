import { loadYaml } from "./yaml-loader";

export interface Person {
  name: string;
  title: string;
}

export interface Metadata {
  id: string;
  value: string;
  link?: string;
}

export interface Company {
  name: string;
  website: string;
}

export interface WorkExperience {
  company: Company;
  position: string;
  location: string;
  duration: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  location: string;
}

export interface Resume {
  person: Person
  summary: string
  metadatas: Metadata[]
  education: Education
  skills: string[]
  experiences: WorkExperience[]
}

function isResume(obj: unknown): obj is Resume {
  if (typeof obj !== 'object') return false;

  const expectedProperties = new Set(['person', 'summary', 'metadatas', 'education', 'skills', 'experiences']);
  const properties = Object.getOwnPropertyNames(obj);
  for (const p of properties) {
    if (expectedProperties.has(p)) {
      expectedProperties.delete(p);
    } else {
      return false;
    }
  }

  return expectedProperties.size === 0;
}

export interface IResumeLoaderService {
  loadResume(): Promise<Resume>;
}

export class ResumeLoaderService implements IResumeLoaderService {
  #file: string;

  constructor(file: string) {
    this.#file = file;
  }

  async loadResume(): Promise<Resume> {
    const res = await loadYaml(this.#file);
    if (!isResume(res)) {
      throw Error('Not a Resume data type!');
    }

    return res as Resume;
  }
}
