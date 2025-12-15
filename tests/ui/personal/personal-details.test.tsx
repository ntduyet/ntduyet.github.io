import '@testing-library/jest-dom'
import { makeSut } from '@/tests/utils/make-component'

import { cleanup, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Person } from '@/app/services/resume-loader'
import PersonalDetails from '@/app/ui/personal/personal-details'

vi.mock('@/public/images/avatar.jpeg', () => ({
  __esModule: true,
  default: { src: '/test/avatar.jpeg', width: 120, height: 120 },
}));

describe('personal details', () => {
  beforeEach(() => vi.clearAllMocks());
  
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container } = makeSut(PersonalDetails, { person: person });

    expect(container.childElementCount).toBe(1);

    const div = container.children[0];
    expect(div.tagName).toBe('DIV');
    expect(div).toHaveClass('personal-details-container flex flex-wrap items-center gap-[12px]', { exact: true });
    expect(div.childElementCount).toBe(2);

    const img = div.children[0];
    expect(img.tagName).toBe('IMG');
    expect(img).toHaveClass('avatar rounded-[50%] w-[20%] min-w-[100px]', { exact: true });
    expect(img).toHaveAttribute('alt', 'Profile Photo');
    expect(img).toHaveAttribute('src', '/test/avatar.jpeg');

    const rightDiv = div.children[1];
    expect(rightDiv.tagName).toBe('DIV');
    expect(rightDiv.childElementCount).toBe(2);

    const h1 = rightDiv.children[0];
    expect(h1.tagName).toBe('H1');
    expect(h1).toHaveTextContent(person.name);

    const h3 = rightDiv.children[1];
    expect(h3.tagName).toBe('H3');
    expect(h3).toHaveClass('mt-[6px]', { exact: true });
    expect(h3).toHaveTextContent(person.title);
  })
})

// #region Mocks & Helpers

const person: Person = { name: 'Name', title: 'React Developer' };

// #endregion
