class RomanNumeral {
  constructor() {
    this.dictionary = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
    };
  }

  convert(value) {
    return this.dictionary[value];
  }
}

module.exports = RomanNumeral;
