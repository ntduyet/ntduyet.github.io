import '@testing-library/jest-dom'
import { makeSut } from '@/tests/utils/make-component'

import { cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import GroupSection from '@/app/ui/group-section'

describe('group section', () => {
  afterEach(cleanup);

  describe('single child', () => {
    it('should render correctly', () => {
      const title = 'single title';
      const { container } = makeSut(GroupSection, { title: title, children: <button key='button' id='test-button-id' /> });
      
      expect(container.childElementCount).toEqual(1);

      const div = container.children[0];
      expect(div).toHaveClass('group-section grid gap-[12px]', { exact: true });
      expect(div.childElementCount).toEqual(2);

      expectToHaveH2(div, title);
      
      expect(div.lastElementChild?.tagName).toEqual('BUTTON');
      expect(div.lastElementChild?.id).toEqual('test-button-id');
    })
  })

  describe('multiple children', () => {
    it('should render correctly', () => {
      const title = 'multiple title';
      const { container } = makeSut(GroupSection, { 
        title: title,
        children: [<a key='a' id='test-a-id'/>, <button key='button' id='test-button-id' />]
      })
      
      expect(container.childElementCount).toEqual(1);

      const div = container.children[0];
      expect(div).toHaveClass('group-section grid gap-[12px]', { exact: true });
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

function expectToHaveH2(root: Element, title: string) {
  const h2 = root.firstElementChild;
  expect(h2).toHaveTextContent(title.toUpperCase());
  expect(h2).toHaveClass('pb-[12px] border-b border-b-[#5e5e5e]', { exact: true });
}

// #endregion
