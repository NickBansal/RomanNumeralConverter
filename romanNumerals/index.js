module.exports = class RomanNumeral {
  constructor() {
    this.romanNumeralValues = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      20: 'XX',
      30: 'XXX',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      200: 'CC',
      300: 'CCC',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
      2000: 'MM',
      3000: 'MMM',
    };
    this.keys = Object.keys(this.romanNumeralValues).reverse();
  }

  convert(value) {
    let result = '';
    let countValue = value;
    this.keys.forEach((number) => {
      if (countValue >= number) {
        result += this.romanNumeralValues[number];
        countValue -= number;
      }
    });
    return result;
  }
};
