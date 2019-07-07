const RomanNumeral = require('.');

const converter = new RomanNumeral();

describe('Roman numberal converter', () => {
  it('Should convert 1 into a roman numeral', () => {
    expect(converter.convert(1)).toBe('I');
  });
});
