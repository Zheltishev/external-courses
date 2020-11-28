class ElectricalDevice {
  constructor(options) {
    this.devicePowerSupply = false;
  }

  turnOn() {
    return (this.devicePowerSupply = true);
  }

  turnOff() {
    return (this.devicePowerSupply = false);
  }
}

class Lamp extends ElectricalDevice {
  constructor(options) {
    super(options);
    this.type = 'Lamp';
    this.name = options.name;
    this.power = options.power;
  }
}

class Notebook extends ElectricalDevice {
  constructor(options) {
    super(options);
    this.type = 'Notebook';
    this.name = options.name;
    this.power = options.power;
  }
}

class Phone extends ElectricalDevice {
  constructor(options) {
    super(options);
    this.type = 'Phone';
    this.name = options.name;
    this.power = options.power;
  }
}

class Conditioner extends ElectricalDevice {
  constructor(options) {
    super(options);
    this.type = 'Conditioner';
    this.name = options.name;
    this.power = options.power;
  }
}

class Room {
  constructor(...args) {
    this.deviceList = [...args];
  }

  totalPower() {
    let totalPowerValue = 0;

    this.deviceList.forEach((elem) => {
      if (elem.devicePowerSupply) {
        totalPowerValue += elem.power;
      }
    });

    return totalPowerValue;
  }

  searchDevice(value) {
    let arr = [];

    this.deviceList.forEach((elem) => {
      if (elem.name === value) {
        arr.push(elem);
      }
    });

    return arr;
  }
}

const lampXiaomiFirst = new Lamp({ name: 'Xiaomi Luminous', power: 2 });
const lampXiaomiSecond = new Lamp({ name: 'Xiaomi Luminous', power: 2 });
const notebookAcer = new Notebook({ name: 'Acer Book', power: 10 });
const phoneNokia = new Phone({ name: 'Nokia Pushbutton', power: 1 });
const phoneSamsung = new Phone({ name: 'Samsung Screen', power: 4 });
const conditionerRoda = new Conditioner({ name: 'Roda Max Freez', power: 30 });
const hall = new Room(
  lampXiaomiFirst,
  lampXiaomiSecond,
  notebookAcer,
  phoneNokia,
  phoneSamsung,
  conditionerRoda
);

lampXiaomiSecond.turnOn();
notebookAcer.turnOn();
conditionerRoda.turnOn();

console.log(hall.totalPower());
console.log(hall.deviceList);
console.log(hall.searchDevice('Xiaomi Luminous'));
