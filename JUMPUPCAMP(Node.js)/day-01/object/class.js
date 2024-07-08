class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type
    this.price = price;
  }

}


let car1 = new Car()
car1.modelName = "제네시스"
car1.price = "100,000,000"

console.log(car1);

class SuperCar extends Car {
  constructor(modelName, modelYear, type, price, turbo) {
    super(modelName, modelYear, type, price)
    this.turbo = turbo;
  }

  getTurbo() {
    return this.turbo
  }

  // 오버라이딩
  getModelName() {
    return `슈퍼카 ${this.modelName}`
  }
}

let superCar = new SuperCar("부가티", "2024", "super", "10억", true)
console.log(superCar);
console.log(superCar.getModelName());