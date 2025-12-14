import '@testing-library/jest-dom'

import { JSX } from 'react'
import { describe, expect, it, test, vi } from 'vitest'
import { render, fireEvent, cleanup } from '@testing-library/react'

import FontAwesomeIcon from '@/app/ui/font-awesome-icon'

describe('font-awesome icon', () => {
  test.afterEach(cleanup);
  
  describe('email', () => {
    it('should have correct class name', () => {
      const [_, container] = makeSut('email');
      expectToHaveSpan(container, 'fa-solid fa-envelope');
    })
  })

  describe('phone', () => {
    it('should have correct class name', () => {
      const [_, container] = makeSut('phone');
      expectToHaveSpan(container, 'fa-solid fa-phone');
    })
  })

  describe('location', () => {
    it('should have correct class name', () => {
      const [_, container] = makeSut('location');
      expectToHaveSpan(container, 'fa-solid fa-location-dot');
    })
  })

  describe('linkedin', () => {
    it('should have correct class name', () => {
      const [_, container] = makeSut('linkedin');
      expectToHaveSpan(container, 'fa-brands fa-linkedin');
    })
  })

  describe('link', () => {
    it('should have correct class name', () => {
      const [_, container] = makeSut('link');
      expectToHaveSpan(container, 'fa-solid fa-arrow-up-right-from-square');
    })
  })

  describe('quote', () => {
    it('should have correct class name', () => {
      const [_, container] = makeSut('quote');
      expectToHaveSpan(container, 'fa-sharp fa-solid fa-quote-left fa-lg');
    })
  })

  describe('className prop', () => {
    it('should have correct class name', () => {
      const [_, container] = makeSut('email', 'class1 class2');
      expectToHaveSpan(container, 'fa-solid fa-envelope class1 class2');
    })
  })

  describe('unrecognized type', () => {
    it('should be null', () => {
      const [_, container] = makeSut('invalid');
      expect(container.childElementCount).toEqual(0);
    })
  })

  describe('click event', () => {
    it('should invoke action', async () => {
      const mockMethod = vi.fn();
      const [_, container] = makeSut('email', undefined, mockMethod);

      const span = container.firstElementChild;
      await fireEvent.click(span!);

      expect(mockMethod).toHaveBeenCalledOnce();
    })
  })
})

// #region Mocks & Helpers

function makeSut(type: string, className?: string, onClick?: () => void): [JSX.Element, HTMLElement] {
  const sut = (<FontAwesomeIcon type={type} className={className} onClick={onClick} />);
  const { container } = render(sut);
  return [sut, container];
}

function expectToHaveSpan(container: Element, className: string) {
  expect(container.childElementCount).toEqual(1);

  const span = container.firstElementChild;
  expect(span).toBeDefined();
  expect(span).toHaveClass(className);
}

// #endregion
