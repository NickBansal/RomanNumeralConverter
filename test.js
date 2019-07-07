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
  it('Should convert 5 into roman numeral', () => {
    expect(converter.convert(5)).toBe('V');
  });
  it('Should convert 6 into roman numeral', () => {
    expect(converter.convert(6)).toBe('VI');
  });
  it('Should convert 7 into roman numeral', () => {
    expect(converter.convert(7)).toBe('VII');
  });
  it('Should convert 8 into roman numeral', () => {
    expect(converter.convert(8)).toBe('VIII');
  });
  it('Should convert 9 into roman numeral', () => {
    expect(converter.convert(9)).toBe('IX');
  });
  it('Should convert 10 into roman numeral', () => {
    expect(converter.convert(10)).toBe('X');
  });
  it('Should convert 11 into roman numeral', () => {
    expect(converter.convert(11)).toBe('XI');
  });
  it('Should convert 12 into roman numeral', () => {
    expect(converter.convert(12)).toBe('XII');
  });
  it('Should convert 15 into roman numeral', () => {
    expect(converter.convert(15)).toBe('XV');
  });
  it('Should convert 18 into roman numeral', () => {
    expect(converter.convert(18)).toBe('XVIII');
  });
  it('Should convert 20 into roman numeral', () => {
    expect(converter.convert(20)).toBe('XX');
  });
  it('Should convert 30 into roman numeral', () => {
    expect(converter.convert(30)).toBe('XXX');
  });
  it('Should convert 40 into roman numeral', () => {
    expect(converter.convert(40)).toBe('XL');
  });
  it('Should convert 50 into roman numeral', () => {
    expect(converter.convert(50)).toBe('L');
  });
  it('Should convert 60 into roman numeral', () => {
    expect(converter.convert(60)).toBe('LX');
  });
  it('Should convert 90 into roman numeral', () => {
    expect(converter.convert(90)).toBe('XC');
  });
});
