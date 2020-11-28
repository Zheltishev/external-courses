function Sweetness(category, name, weight) {
  this.category = category;
  this.name = name.toLowerCase();
  this.weight = weight;
}

function Gift(...args) {
  this.structure = [...args];
}

Gift.prototype.info = function () {
  return this.structure;
};

Gift.prototype.totalWeight = function () {
  let mass = 0;

  this.structure.forEach((elem) => (mass += elem.weight));

  return mass;
};

Gift.prototype.sortByWeight = function () {
  this.structure.sort(function (a, b) {
    if (a.weight > b.weight) {
      return 1;
    }
    if (a.weight < b.weight) {
      return -1;
    }
    return 0;
  });
};

Gift.prototype.searchByName = function (value) {
  this.structure.forEach((elem) => {
    if (elem.name === value.toLowerCase()) {
      console.log(elem); // возвращает объект
      // return elem; // возвращает undefined при вызыве console.log(obj.searchByName('Bounty'))
    }
  });

  // v2 тоже самое, если return - возвращает undefined
  // this.structure.find((elem) => {
  //   if (elem.name === value.toLowerCase()) {
  //     console.log(elem);
  //     return elem;
  //   }
  // });
};

const twix = new Sweetness('candy', 'twix', 400);
const bounty = new Sweetness('candy', 'bounty', 200);
const milkyWay = new Sweetness('candy', 'milky way', 500);
const ferreroRocher = new Sweetness('candy', 'ferrero rocher', 300);
const obj = new Gift(twix, bounty, milkyWay, ferreroRocher);

console.log(obj.info());
console.log(obj.totalWeight());
obj.sortByWeight();
obj.searchByName('Bounty');
