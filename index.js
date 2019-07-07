class RomanNumeral {
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
    };
    this.keys = Object.keys(this.romanNumeralValues).reverse();
  }

  convert(value) {
    let result = '';
    this.keys.forEach((number) => {
      if (value >= number) {
        result += this.romanNumeralValues[number];
        value -= number;
      }
    });
    return result;
  }
}

module.exports = RomanNumeral;
