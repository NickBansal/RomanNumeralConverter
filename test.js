const RomanNumeral = require('.');

const converter = new RomanNumeral();

describe('Roman numberal converter', () => {
  it('Should convert 1 into a roman numeral', () => {
    expect(converter.convert(1)).toBe('I');
  });
  it('Should convert 2 into roman numeral', () => {
    expect(converter.convert(2)).toBe('II');
  });
  it('Should convert 3 into roman numeral', () => {
    expect(converter.convert(3)).toBe('III');
  });
  it('Should convert 4 into roman numeral', () => {
    expect(converter.convert(4)).toBe('IV');
  });
});
