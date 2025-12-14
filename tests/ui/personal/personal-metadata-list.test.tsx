import '@testing-library/jest-dom'
import { mockComponent } from '@/tests/utils/mock-component'
import { makeSut } from '@/tests/utils/make-component'

import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, Mock, test, vi } from 'vitest'

import { Metadata } from '@/app/services/resume-loader'
import PersonalMetadataList from '@/app/ui/personal/personal-metadata-list'

describe('personal metadata list', () => {
  let metadataSpy: Mock<any>

  beforeEach(async () => {
    metadataSpy = await mockComponent('mock-metadata', '@/app/ui/personal/personal-metadata');
  })

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  })

  describe('left align', () => {
    it('should use correct component', () => {
      makeSut(
        PersonalMetadataList, 
        { metadatas: [metadata, metadataWithWeb ], align: 'left' }
      )

      expect(metadataSpy.getProps()).toEqual([
        { metadata: metadata, align: 'left' },
        { metadata: metadataWithWeb, align: 'left' },
      ])
    })
  })

  describe('right align', () => {
    it('should use correct component', () => {
      makeSut(
        PersonalMetadataList, 
        { metadatas: [metadataWithWeb, metadata ], align: 'right' }
      )

      expect(metadataSpy.getProps()).toEqual([
        { metadata: metadataWithWeb, align: 'right' },
        { metadata: metadata, align: 'right' },
      ])
    })
  })

  describe('no class name', () => {
    it('should render correctly', () => {
      const { container } = makeSut(
        PersonalMetadataList, 
        { metadatas: [metadata, metadataWithWeb ], align: 'left' }
      )

      expect(container.childElementCount).toBe(1);

      const div = container.children[0];
      expect(div.tagName).toBe('DIV');
      expect(div).toHaveClass('personal-metadata-list w-full', { exact: true })
      expect(div.childElementCount).toBe(2);

      expect(div.children[0].id).toBe('mock-metadata');
      expect(div.children[1].id).toBe('mock-metadata');
    })
  })

  describe('with class name', () => {
    it('should have correct class name', () => {
      const { container } = makeSut(
        PersonalMetadataList, 
        { className: 'class1 class2', metadatas: [metadata, metadataWithWeb ], align: 'left' }
      )

      expect(container.firstChild).toHaveClass('personal-metadata-list w-full class1 class2', { exact: true })
    })
  })
})

// #region Mocks & Helpers

const metadata: Metadata = { id: 'email', value: 'email@me.io' }
const metadataWithWeb: Metadata = { id: 'linkedin', value: 'linkedin/me', link: 'https://linked.me' }

// #endregion
