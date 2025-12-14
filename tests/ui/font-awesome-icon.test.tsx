import '@testing-library/jest-dom'
import { makeSut } from '@/tests/utils/make-component'

import { render, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import FontAwesomeIcon from '@/app/ui/font-awesome-icon'

describe('font-awesome icon', () => {
  afterEach(cleanup);
  
  describe('email', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'email' });
      expectToHaveSpan(container, 'fa-solid fa-envelope');
    })
  })

  describe('phone', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'phone' });
      expectToHaveSpan(container, 'fa-solid fa-phone');
    })
  })

  describe('location', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'location' });
      expectToHaveSpan(container, 'fa-solid fa-location-dot');
    })
  })

  describe('linkedin', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'linkedin' });
      expectToHaveSpan(container, 'fa-brands fa-linkedin');
    })
  })

  describe('link', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'link' });
      expectToHaveSpan(container, 'fa-solid fa-arrow-up-right-from-square');
    })
  })

  describe('quote', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'quote' });
      expectToHaveSpan(container, 'fa-sharp fa-solid fa-quote-left fa-lg');
    })
  })

  describe('className prop', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'email', className: 'class1 class2' });
      expectToHaveSpan(container, 'fa-solid fa-envelope class1 class2');
    })
  })

  describe('unrecognized type', () => {
    it('should be null', () => {
      const { container } = makeSut(FontAwesomeIcon, { type: 'invalid' });
      expect(container.childElementCount).toBe(0);
    })
  })

  describe('click event', () => {
    it('should invoke action', async () => {
      const mockMethod = vi.fn();
      const { container } = makeSut(FontAwesomeIcon, { type: 'email', onClick: mockMethod });

      const span = container.firstElementChild;
      fireEvent.click(span!);

      expect(mockMethod).toHaveBeenCalledOnce();
    })
  })
})

// #region Mocks & Helpers

function expectToHaveSpan(container: Element, className: string) {
  expect(container.childElementCount).toEqual(1);

  const span = container.children[0];
  expect(span).toHaveClass(className, { exact: true });
}

// #endregion
