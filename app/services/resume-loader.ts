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
  person: { name: string; title: string }
  summary: string
  metadatas: Metadata[]
  education: Education
  skills: string[]
  experiences: WorkExperience[]
}

function isResume(obj: unknown): obj is Resume {
  return (
      typeof obj === 'object' 
      && obj !== null 
      && typeof obj.person === 'object'
      && typeof obj.summary === 'string'
      && typeof obj.metadatas === 'object'
      && typeof obj.education === 'object'
      && typeof obj.skills === 'object'
      && typeof obj.experiences === 'object'
    )
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
