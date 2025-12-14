import '@testing-library/jest-dom'
import { mockComponent } from '@/tests/utils/mock-component'

import { render, cleanup, fireEvent } from '@testing-library/react'
import { describe, expect, it, Mock, test, vi } from 'vitest'

import { Metadata } from '@/app/services/resume-loader'
import PersonalMetadata from '@/app/ui/personal/personal-metadata'

describe('personal metadata', () => {
  let iconSpy: Mock<any>
  let openLinkSpy: Mock<typeof window.open>
  let container: HTMLElement

  test.beforeEach(async () => {
    iconSpy = await mockComponent('mock-icon', '@/app/ui/font-awesome-icon');
    openLinkSpy = vi.spyOn(window, 'open');
    openLinkSpy.mockImplementation((args) => window);
  })

  test.afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  describe('left align', () => {
    test.beforeEach(() => {
      container = makeSut(metadata, 'left');
    })

    it('should use correct component', () => {
      expect(iconSpy.getProps()).toEqual([{ className: 'mr-[12px]', type: metadata.id }])
    })

    it('should render correctly', () => {
      expect(container.childElementCount).toBe(1);

      const p = container.children[0];
      expect(p.tagName).toBe('P');
      expect(p).toHaveClass('mt-2 mb-2 items-center');
      expect(p.childNodes.length).toBe(2);

      expect(p.childNodes[0].nodeName).toBe('SPAN');
      expect(p.childNodes[1].nodeName).toBe('#text');
    })

    it('should do nothing when clicked', () => {
      const p = container.children[0];

      fireEvent.click(p);

      expect(openLinkSpy).toBeCalledTimes(0);
    })
  })

  describe('right align', () => {
    test.beforeEach(() => {
      container = makeSut(metadata, 'right');
    })

    it('should use correct component', () => {
      expect(iconSpy.getProps()).toEqual([{ className: 'ml-[12px]', type: metadata.id }])
    })

    it('should render correctly', () => {
      expect(container.childElementCount).toBe(1);

      const p = container.children[0];
      expect(p.tagName).toBe('P');
      expect(p).toHaveClass('mt-2 mb-2 items-center');
      expect(p.childNodes.length).toBe(2);

      expect(p.childNodes[0].nodeName).toBe('#text');
      expect(p.childNodes[1].nodeName).toBe('SPAN');
    })
  })

  describe('with link', () => {
    it('should have hover behavior', () => {
      container = makeSut(metadataWithWeb, 'left');

      expect(container.childElementCount).toBe(1);

      const p = container.children[0];
      expect(p.tagName).toBe('P');
      expect(p).toHaveClass('mt-2 mb-2 items-center cursor-pointer transition duration-300 ease-in-out hover:scale-105');
    })

    describe('web', () => {
      it('should open in new tab when clicked', () => {
        const container = makeSut(metadataWithWeb, 'left');
        const p = container.children[0];

        fireEvent.click(p);

        expect(openLinkSpy).toHaveBeenCalledExactlyOnceWith(metadataWithWeb.link, '_blank');
      })
    })

    describe('deep link', () => {
      it('should remain on current tab when clicked', () => {
        const container = makeSut(metadataWithDeepLink, 'left');
        const p = container.children[0];

        fireEvent.click(p);

        expect(openLinkSpy).toHaveBeenCalledExactlyOnceWith(metadataWithDeepLink.link, '_self');
      });
    })
  })
})

// #region Mocks & Helpers

function makeSut(metadata: Metadata, align: 'left' | 'right'): HTMLElement {
  const sut = <PersonalMetadata metadata={metadata} align={align} />
  const { container } = render(sut);
  return container;
}

const metadata: Metadata = { id: 'email', value: 'email@me.io' }
const metadataWithWeb: Metadata = { id: 'email', value: 'email@me.io', link: 'https://email.me' }
const metadataWithDeepLink: Metadata = { id: 'email', value: 'email@me.io', link: 'mailto:email.me' }

// #endregion
