import '@testing-library/jest-dom'
import { makeSut } from '@/tests/utils/make-component'

import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup } from "@testing-library/react"

import DurationLocation from '@/app/ui/duration-location'

describe('duration and location', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const contents: [string, string] = ['duration', 'location'];
    const { container } = makeSut(DurationLocation, { contents: contents });

    expect(container.childElementCount).toEqual(1);

    const div = container.children[0];
    expect(div.tagName).toEqual('DIV');
    expect(div).toHaveClass('grid grid-cols-2 gap-[12px] text-neutral-400', { exact: true });
    expect(div.childElementCount).toEqual(2);

    const children = div.children;
    expect(children[0].tagName).toEqual('I');
    expect(children[0]).toHaveClass('text-left', { exact: true });
    expect(children[0]).toHaveTextContent(contents[0]);

    expect(children[1].tagName).toEqual('I');
    expect(children[1]).toHaveClass('text-right', { exact: true });
    expect(children[1]).toHaveTextContent(contents[1]);
  })
})
