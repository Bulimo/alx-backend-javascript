import Car from './10-car';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    const { brand, motor, color } = this;
    const CarConstructor = Car;
    return new CarConstructor(brand, motor, color);
  }
}
