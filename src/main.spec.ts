import {hello, hello2} from './main';
import {expect} from 'chai';
import 'mocha';

describe('Hello2 function', () => {
  it('should return hello world', () => {
    const result = hello2();
    expect(result).to.equal('Hello world!');
  });
});

describe('Hello function', () => {
  it('should return hello followed by the name', () => {
    const result = hello('joe');
    expect(result).to.equal('Hello joe!');
  });
  it('should return hello world if paramater is undefined', () => {
    const result = hello(undefined);
    expect(result).to.equal('Hello world!');
  });
});
