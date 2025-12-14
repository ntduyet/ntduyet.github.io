import '@testing-library/jest-dom'
import { mockComponent } from '@/tests/utils/mock-component'

import { describe, expect, it, Mock, test } from 'vitest'
import { cleanup, render } from '@testing-library/react'

import Summary from '@/app/ui/personal/summary'

describe('summary', () => {
  let fontAwesomeIconSpy: Mock<any>

  test.beforeEach(async () => {
    fontAwesomeIconSpy = await mockComponent('mocked-font-awesome-icon', '@/app/ui/font-awesome-icon');
  })

  test.afterEach(cleanup);

  it('should use correct component', () => {
    render(<Summary content='content' />);

    expect(fontAwesomeIconSpy.getProps()).toEqual(
      [{ type: 'quote', className: 'mt-[6px] pr-[6px]'}]
    )
  })

  it('should render correctly', () => {
    const content = 'my summary content';
    const { container } = render(<Summary content={content} />);

    expect(container.childElementCount).toBe(1);

    const p = container.children[0];
    expect(p.tagName).toBe('P');
    expect(p).toHaveClass('flex items-start');
    expect(p.childElementCount).toBe(2);

    const icon = p.children[0];
    expect(icon.id).toBe('mocked-font-awesome-icon');

    const i = p.children[1];
    expect(i.tagName).toBe('I');
    expect(i).toHaveTextContent(content);
    expect(i).toHaveClass('text-neutral-500');
  })
})
