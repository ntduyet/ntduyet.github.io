import '@testing-library/jest-dom'
import { mockComponent } from '@/tests/utils/mock-component'
import { makeSut } from '@/tests/utils/make-component'

import userEvent from '@testing-library/user-event'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest'

import { Metadata } from '@/app/services/resume-loader'
import PersonalMetadata from '@/app/ui/personal/personal-metadata'

describe('personal metadata', () => {
  let iconSpy: Mock<any>
  let openLinkSpy: Mock<typeof window.open>

  beforeEach(async () => {
    vi.clearAllMocks();

    iconSpy = await mockComponent('mock-icon', '@/app/ui/font-awesome-icon');
    openLinkSpy = vi.spyOn(window, 'open');
    openLinkSpy.mockImplementation(() => window);
  })

  afterEach(cleanup);

  describe('left align', () => {
    it('should use correct component', () => {
      const { container } = makeSut(PersonalMetadata, { metadata: metadata, align: 'left' })

      expect(iconSpy.getProps()).toEqual([{ className: 'mr-[12px]', type: metadata.id }])
    })

    it('should render correctly', () => {
      const { container } = makeSut(PersonalMetadata, { metadata: metadata, align: 'left' })
      
      expect(container.childElementCount).toBe(1);

      const p = container.children[0];
      expect(p.tagName).toBe('P');
      expect(p).toHaveClass('mt-2 mb-2 items-center', { exact: true });
      expect(p.childNodes.length).toBe(2);

      expect(p.childNodes[0].nodeName).toBe('SPAN');
      expect(p.childNodes[1].nodeName).toBe('#text');
    })

    it('should do nothing when clicked', async () => {
      const user = userEvent.setup();

      const { container } = makeSut(PersonalMetadata, { metadata: metadata, align: 'left' })
      const p = container.children[0];

      await user.click(p);

      expect(openLinkSpy).toBeCalledTimes(0);
    })
  })

  describe('right align', () => {
    it('should use correct component', () => {
      makeSut(PersonalMetadata, { metadata: metadata, align: 'right' })

      expect(iconSpy.getProps()).toEqual([{ className: 'ml-[12px]', type: metadata.id }])
    })

    it('should render correctly', () => {
      const { container } = makeSut(PersonalMetadata, { metadata: metadata, align: 'right' });

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
      const { container } = makeSut(PersonalMetadata, {metadata: metadataWithWeb, align: 'left' })

      expect(container.childElementCount).toBe(1);

      const p = container.children[0];
      expect(p.tagName).toBe('P');
      expect(p).toHaveClass('mt-2 mb-2 items-center cursor-pointer transition duration-300 ease-in-out hover:scale-105');
    })

    describe('web', () => {
      it('should open in new tab when clicked', async () => {
        const user = userEvent.setup();

        const { container } = makeSut(PersonalMetadata, {metadata: metadataWithWeb, align: 'left' })
        const p = container.children[0];

        await user.click(p);

        expect(openLinkSpy).toHaveBeenCalledExactlyOnceWith(metadataWithWeb.link, '_blank');
      })
    })

    describe('deep link', () => {
      it('should remain on current tab when clicked', async () => {
        const user = userEvent.setup();

        const { container } = makeSut(PersonalMetadata, {metadata: metadataWithDeepLink, align: 'left' })
        const p = container.children[0];

        await user.click(p);

        expect(openLinkSpy).toHaveBeenCalledExactlyOnceWith(metadataWithDeepLink.link, '_self');
      });
    })
  })
})

// #region Mocks & Helpers

const metadata: Metadata = { id: 'email', value: 'email@me.io' }
const metadataWithWeb: Metadata = { id: 'email', value: 'email@me.io', link: 'https://email.me' }
const metadataWithDeepLink: Metadata = { id: 'email', value: 'email@me.io', link: 'mailto:email.me' }

// #endregion
