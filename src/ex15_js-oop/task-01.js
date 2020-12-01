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
  return this.structure.reduce(function (a, b) {
    if (a.weight === undefined) {
      return a + b.weight;
    }

    return a.weight + b.weight;
  });
};

Gift.prototype.sortByWeight = function () {
  this.structure.sort((a, b) => a.weight - b.weight);
};

Gift.prototype.searchByName = function (value) {
  this.structure.forEach((elem) => {
    if (elem.name === value.toLowerCase()) {
      console.log(elem);
    }
  });
};

const twix = new Sweetness('candy', 'twix', 400);
const bounty = new Sweetness('candy', 'bounty', 200);
const milkyWay = new Sweetness('candy', 'milky way', 500);
const ferreroRocher = new Sweetness('candy', 'ferrero rocher', 300);
const obj = new Gift(twix, bounty, milkyWay, ferreroRocher);

console.log(obj.totalWeight());
obj.searchByName('Bounty');
obj.sortByWeight();
console.log(obj.info());
