import '@testing-library/jest-dom'
import { mockComponent } from '@/tests/utils/mock-component'
import { makeSut } from '@/tests/utils/make-component'

import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi, Mock } from 'vitest'

import SkillList from '@/app/ui/skills/skill-list'

describe('skill item', () => {
  let skillItemSpy: Mock<any> 

  beforeEach(async () => {
    vi.clearAllMocks();

    skillItemSpy = await mockComponent('mocked-skill-item', '@/app/ui/skills/skill-item');
  });

  afterEach(cleanup);

  it('should use correct component', () => {
    makeSut(SkillList, { items: skills });

    expect(skillItemSpy.getProps()).toEqual([
      { content: skills[0] },
      { content: skills[1] },
    ])
  });

  it('should render correctly', () => {
    const { container } = makeSut(SkillList, { items: skills });

    expect(container.childElementCount).toBe(1);

    const div = container.children[0];
    expect(div.tagName).toBe('DIV');
    expect(div).toHaveClass('skill-list flex flex-wrap gap-[8px]', { exact: true });
    expect(div.childElementCount).toBe(2);

    expect(div.children[0].id).toBe('mocked-skill-item');
    expect(div.children[0].getAttribute('data-props')).toMatch(/skill-1/);

    expect(div.children[1].id).toBe('mocked-skill-item');
    expect(div.children[1].getAttribute('data-props')).toMatch(/skill-2/);
  })
})

// #region Mocks & Helpers

const skills = ['skill-1', 'skill-2']

// #endregion
