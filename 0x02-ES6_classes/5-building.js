export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();

    // if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
    //   throw new Error('Class extending Building must override evacuationWarningMessage');
    // }
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    // Throw an error if the method is not overridden by a subclass
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
