import { lowercase } from './cjs-lib';

describe('cjsLib', () => {
  it('should work', () => {
    expect(lowercase("TEST")).toEqual('test');
  });
});
