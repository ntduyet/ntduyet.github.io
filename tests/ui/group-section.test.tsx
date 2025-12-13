import '@testing-library/jest-dom'

import { JSX } from 'react'
import { describe, expect, it, test } from 'vitest'
import { render, cleanup } from '@testing-library/react'

import GroupSection from '@/app/ui/group-section'

describe('group section', () => {
  test.afterEach(cleanup);

  describe('single child', () => {
    it('should render correctly', () => {
      const title = 'single title';
      const [_, container] = makeSut(title, <button key='button' id='test-button-id' />);
      
      expect(container.childElementCount).toEqual(1);

      const div = container.children[0];
      expect(div).toHaveClass('group-section grid gap-[12px]');
      expect(div.childElementCount).toEqual(2);

      expectToHaveH2(div, title);
      
      expect(div.lastElementChild?.tagName).toEqual('BUTTON');
      expect(div.lastElementChild?.id).toEqual('test-button-id');
    })
  })

  describe('multiple children', () => {
    it('should render correctly', () => {
      const title = 'multiple title';
      const [_, container] = makeSut(title, <a key='a' id='test-a-id'/>, <button key='button' id='test-button-id' />);
      
      expect(container.childElementCount).toEqual(1);

      const div = container.children[0];
      expect(div).toHaveClass('group-section grid gap-[12px]');
      expect(div.childElementCount).toEqual(3);

      expectToHaveH2(div, title);
      
      expect(div.children[1].tagName).toEqual('A');
      expect(div.children[1].id).toEqual('test-a-id');

      expect(div.lastElementChild?.tagName).toEqual('BUTTON');
      expect(div.lastElementChild?.id).toEqual('test-button-id');
    })
  })
})

// #region Mocks & Helpers

function makeSut(title: string, ...children: React.ReactNode[]): [JSX.Element, HTMLElement] {
  const sut = (<GroupSection title={title}>{children}</GroupSection>);
  const { container } = render(sut);
  return [sut, container];
}

function expectToHaveH2(root: Element, title: string) {
  const h2 = root.firstElementChild;
  expect(h2).toHaveTextContent(title.toUpperCase());
  expect(h2).toHaveClass('pb-[12px] border-b border-b-[#5e5e5e]');
}

// #endregion
