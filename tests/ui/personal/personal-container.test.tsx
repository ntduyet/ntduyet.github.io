import '@testing-library/jest-dom'
import { mockComponent } from '@/tests/utils/mock-component'
import { makeSut } from '@/tests/utils/make-component'

import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi, Mock } from 'vitest'

import { Person, Metadata } from '@/app/services/resume-loader'
import PersonalContainer from '@/app/ui/personal/personal-container'

describe('personal container', () => {
  let detailsSpy: Mock<any>
  let metadataListSpy: Mock<any>
  
  beforeEach(async () => {
    vi.clearAllMocks();

    detailsSpy = await mockComponent('mocked-personal-details', '@/app/ui/personal/personal-details');
    metadataListSpy = await mockComponent('mocked-metadata-list', '@/app/ui/personal/personal-metadata-list');
  })

  afterEach(cleanup);

  it('should use correct components', () => {
    makeSut(PersonalContainer, { person: person, metadatas: metadatas });

    expect(detailsSpy.getProps()).toEqual([{ person: person }]);
    expect(metadataListSpy.getProps()).toEqual([
      { className: 'text-left row-start-2 col-span-1 sm:hidden', metadatas: metadatas, align: 'left' },
      { className: 'text-right row-[1_/1_] sm:col-[2_/2_] hidden sm:grid', metadatas: metadatas, align: 'right' },
    ])
  })

  it('should render correctly', () => {
    const { container } = makeSut(PersonalContainer, { person: person, metadatas: metadatas });

    expect(container.childElementCount).toBe(1);

    const div = container.children[0];
    expect(div.tagName).toBe('DIV');
    expect(div).toHaveClass('personal-container grid grid-cols-[auto_auto] items-start gap-[12px]', { exact: true });
    expect(div.childElementCount).toBe(3);

    const details = div.children[0];
    expect(details.id).toBe('mocked-personal-details');

    const leftList = div.children[1];
    expect(leftList.id).toBe('mocked-metadata-list');
    
    let props = leftList.getAttribute('data-props') || '';
    expect(JSON.parse(props)).toEqual(expect.objectContaining({ align: 'left' }));

    const rightList = div.children[2];
    expect(rightList.id).toBe('mocked-metadata-list');

    props = rightList.getAttribute('data-props') || '';
    expect(JSON.parse(props)).toEqual(expect.objectContaining({ align: 'right' }));
  })
})

// #region Mocks & Helpers

const person: Person = { name: 'Name', title: 'React Developer' }
const metadatas: Metadata[] = [
  { id: 'email', value: 'email@me.io' },
  { id: 'linkedin', value: 'linkedin/me', link: 'https://linked.me' },
]

// #endregion
