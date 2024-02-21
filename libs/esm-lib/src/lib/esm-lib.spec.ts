import { lowercase } from './esm-lib';

describe('esmLib', () => {
  it('should work', () => {
    expect(lowercase("TEST")).toEqual('test');
  });
});
