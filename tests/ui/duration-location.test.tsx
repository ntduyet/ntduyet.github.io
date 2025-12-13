import '@testing-library/jest-dom'

import { describe, expect, it, test } from 'vitest'
import { cleanup, render } from "@testing-library/react"

import DurationLocation from '@/app/ui/duration-location'

describe('duration and location', () => {
  test.afterEach(cleanup);

  it('should render correctly', () => {
    const contents: [string, string] = ['duration', 'location'];
    const { container } = render(<DurationLocation contents={contents} />)

    expect(container.childElementCount).toEqual(1);

    const div = container.firstElementChild;
    if (!div) 
      expect.fail('div node should exist');

    expect(div.tagName).toEqual('DIV');
    expect(div).toHaveClass('grid grid-cols-2 gap-[12px] text-neutral-400');
    expect(div.childElementCount).toEqual(2);

    const children = div.children;
    expect(children[0].tagName).toEqual('I');
    expect(children[0]).toHaveClass('text-left');
    expect(children[0]).toHaveTextContent(contents[0]);

    expect(children[1].tagName).toEqual('I');
    expect(children[1]).toHaveClass('text-right');
    expect(children[1]).toHaveTextContent(contents[1]);
  })
})
