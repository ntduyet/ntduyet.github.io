import { render, RenderResult } from '@testing-library/react'
import { JSXElementConstructor } from 'react'

export function makeSut<T extends JSXElementConstructor<any>>(
  Component: T,
  props: React.ComponentProps<T>
): RenderResult {
  return render(<Component {...props} />);
}
