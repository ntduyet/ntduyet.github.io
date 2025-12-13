import { resolve } from 'path'
import { vi, Mock } from 'vitest'

export interface IReactArgsCleaner {
  getProps(): any[];
}

export async function mockComponent(id: string, modulePath: string): Promise<Mock<any> & IReactArgsCleaner> {
  const path = resolvePath(modulePath);
  const module = await import(path);
  
  const spy = vi.spyOn(module, 'default') as Mock<any> & IReactArgsCleaner;
  spy.getProps = function() {
    return this.mock.calls.map(c => c[0]);
  }
  spy.mockImplementation(props => {
    return (<div id={id} data-testid={id} data-props={JSON.stringify(props)} />);
  });

  return spy;
}

function resolvePath(path: string) {
  const dirname = path.startsWith('@/') ? resolve('.') : __dirname;
  return resolve(dirname, path.replace('@/', './'));
}
