export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must must be a String');
    }
    if (typeof name !== 'string') {
      throw TypeError('Name must must be a String');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${typeof this} ${this._code}]`;
  }
}
