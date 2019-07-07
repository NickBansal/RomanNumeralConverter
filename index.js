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
    };
    this.keys = Object.keys(this.romanNumeralValues).reverse();
  }

  convert(value) {
    let result = '';
    let countValue = value;
    this.keys.forEach((number) => {
      if (number <= countValue) {
        result += this.romanNumeralValues[number];
        countValue -= number;
      }
    });
    return result;
  }
}

module.exports = RomanNumeral;
