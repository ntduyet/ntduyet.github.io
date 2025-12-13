import '@testing-library/jest-dom'
import { mockComponent } from '@/tests/utils/mock-component';

import { Suspense, JSX } from 'react';
import { act, cleanup, render, screen } from "@testing-library/react";
import { test, vi, Mock, describe, expect, it } from 'vitest'
import { IResumeLoaderService, Resume } from '@/app/services/resume-loader';

import Container from '@/app/ui/container';

describe('container', () => {
  let sut: JSX.Element
  let service: MockService
  let loadResumeSpy: Mock<typeof service.loadResume>

  test.beforeEach(() => {
    vi.clearAllMocks();
    [sut, service] = makeSut();
    loadResumeSpy = vi.spyOn(service, 'loadResume');
  })

  test.afterEach(() => cleanup());

  describe('failure', () => {
    it('should load resume and render error', async () => {
      await act(async () => render(sut));

      expect(loadResumeSpy).toHaveBeenCalled();

      const root = document.querySelector('.root');
      if (!root) 
        expect.fail('root should exist');

      expect(root).toHaveClass('root mt-0 mb-0 ml-[12px] mr-[12px] pt-[24px] pb-[144px] grid gap-[24px]');
      expect(root?.parentElement).toHaveClass('max-w-5xl m-auto');
      expect(root.children.length).toEqual(1);

      const h1 = root.firstElementChild;
      expect(h1!.tagName).toEqual('H1');
      expect(h1).toHaveTextContent('Oops, failed to load resume.');
    })
  })

  describe('success', () => {
    let personalSpy: Mock<any>
    let summarySpy: Mock<any>
    let skillsSpy: Mock<any>
    let experiencesSpy: Mock<any>
    let educationSpy: Mock<any>
    let groupSectionSpy: Mock<any>

    test.beforeEach(async () => {
      personalSpy = await mockComponent('mocked-personal-container', '@/app/ui/personal/personal-container');
      summarySpy = await mockComponent('mocked-summary', '@/app/ui/personal/summary');
      skillsSpy = await mockComponent('mocked-skill-list', '@/app/ui/skills/skill-list');
      experiencesSpy = await mockComponent('mocked-experience-list', '@/app/ui/experiences/experience-list');
      educationSpy = await mockComponent('mocked-education', '@/app/ui/education/education-item');
      groupSectionSpy = await mockGroupSection();
    })

    it('should initialize correct components', async () => {
      loadResumeSpy.mockResolvedValue(resume);

      await act(async () => render(sut));

      expect(personalSpy.getProps()).toEqual([{ person: resume.person, metadatas: resume.metadatas }]);
      expect(summarySpy.getProps()).toEqual([{ content: resume.summary }]);

      expect(groupSectionSpy.getProps().map(p => p.title)).toEqual(['Skills', 'Work Experiences', 'Education']);

      expect(skillsSpy.getProps()).toEqual([{ items: resume.skills }]);
      expect(experiencesSpy.getProps()).toEqual([{ items: resume.experiences }]);
      expect(educationSpy.getProps()).toEqual([{ item: resume.education }]);
    })

    it('should render correctly', async () => {
      function expectSectionElement(element: Element, childId: string) {
        expect(element.tagName).toEqual('SECTION');
        expect(element.children.length).toEqual(1);
        expect(element.firstElementChild?.id).toEqual(childId);
      }

      function expectGroupSectionElement(element: Element, childId: string) {
        expect(element.tagName).toEqual('DIV');
        expect(element.id).toEqual('mocked-group-section');
        expect(element.firstElementChild?.id).toEqual(childId);
      }

      loadResumeSpy.mockResolvedValue(resume);

      await act(async () => render(sut));

      const root = document.querySelector('.root');
      if (!root) 
        expect.fail('root should exist');

      expect(root).toBeDefined();
      expect(root).toHaveClass('root mt-0 mb-0 ml-[12px] mr-[12px] pt-[24px] pb-[144px] grid gap-[24px]');
      expect(root?.parentElement).toHaveClass('max-w-5xl m-auto');

      const children = root?.children ?? [];
      expect(children.length).toEqual(5);

      expectSectionElement(children[0], 'mocked-personal-container');
      expectSectionElement(children[1], 'mocked-summary');

      expectGroupSectionElement(children[2], 'mocked-skill-list');
      expectGroupSectionElement(children[3], 'mocked-experience-list');
      expectGroupSectionElement(children[4], 'mocked-education');
    })
  })
})

// #region Mocks & Helpers

class MockService implements IResumeLoaderService {
  loadResume(): Promise<Resume> {
    throw Error('fail to load resume!');
  }
}

const resume = {
  person: { name: 'name', title: 'title' },
  summary: 'summary',
  metadatas: [{ id: 'email', value: 'email', link: 'link' }],
  education: { degree: 'degree', school: 'school', duration: 'duration', location: 'location' },
  skills: ['skill-1', 'skill-2'],
  experiences: [
    {
      company: { name: 'name', website: 'web' },
      position: 'position',
      location: 'location',
      duration: 'duration',
      tasks: ['task-1', 'task-2']
    }
  ]
}

async function mockGroupSection(): Promise<Mock<any>> {
  const spy = await mockComponent('mocked-group-section', '@/app/ui/group-section');
  spy.mockImplementation(props => {
    return <div id='mocked-group-section'>{props.children}</div>
  });

  return spy;
}

function makeSut(): [JSX.Element, MockService] {
  const service = new MockService()
  const sut = (
    <Suspense>
      <Container resumeLoaderService={service} />
    </Suspense>
  )
  return [sut, service];
}

// #endregion
