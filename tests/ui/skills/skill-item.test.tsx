import '@testing-library/jest-dom'
import { makeSut } from '@/tests/utils/make-component'

import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import SkillItem from '@/app/ui/skills/skill-item'

describe('skill item', () => {
  beforeEach(vi.clearAllMocks);

  afterEach(cleanup);

  it('should render correctly', () => {
    const content = 'skill-item';
    const { container } = makeSut(SkillItem, { content: content });

    expect(container.childElementCount).toBe(1);

    const div = container.children[0];
    expect(div.tagName).toBe('DIV');
    expect(div).toHaveClass('skill-item bg-slate-800 text-center text-white rounded-full pt-[6px] pb-[6px] pl-[12px] pr-[12px]', { exact: true });
    expect(div).toHaveTextContent(content);
  })
})
