/*

1. Create a 'main' class of Town, with constructors of name and buildyear
2. Create two subclasses that inherit from Town; Park & Street
3. Let Park & Street get name and buildyear from Town
4. Create the Park methods (calculate Tree, Average age, get name)
5. Create the Street methods (calculate length)
6. Create the size classifiation for the streets, using Maps (and default parameters)
7. Console.log all the outputs

*/

class Town {
  constructor(name, buildyear){
    this.name = name;
    this.buildyear = buildyear;
  }

  calc(arr){
    const sum = arr.reduce( (prev, cur) => prev + cur, 0);
    return [sum, sum / arr.length]
  }

};

class Park extends Town {
  constructor(name, buildyear, trees, area){
    super(name, buildyear);
    this.trees = trees;
    this.areas = area;
  }

  calculateTreeDensity(){
    const density = this.trees / this.areas;
    return density;
  }

  calculateAverageAge(...years){
    const sumYears = years.reduce((total, year) => {
      return total + year;
    }, 0);
    return sumYears / 3;
  }

  getNameTrees(){
    if(this.trees > 1000){
      const string = `${this.name} has more than 1000 trees`;
      return string;
    } else {
      return '';
    }
  }
}


class Street extends Town {
  constructor(name, buildyear, size = 3, length){
    super(name, buildyear);
    this.size = size;
    this.length = length;
  }

  calculateTotalandAverageLength(){
    const total = this.length;
    const average = this.length / 2;
    return [total, average];
  }

  classify(){
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(3, 'big');
    classification.set(4, 'huge');
    return classification.get(this.size);
  }
}

// 3 parks in town

const vondelpark = new Park('Vondelpark', 1888, 1001, 10000);
const rembrandtpark = new Park('Rembrandtpark', 1901, 800, 80000 );
const sarphatipark = new Park('Sarphatipark', 2001, 80, 1000);
const allParks = [];
allParks.push(vondelpark, rembrandtpark, sarphatipark);
console.log(allParks);


// 4 streets in town

const heemstedestraat = new Street('heemstedestraat', 1880, 2, 100);
const kinkerstraat = new Street('kinkerstraat', 1889, 3, 150);
const warmondstraat = new Street('warmondstraat', 1992, 2, 110);
const zeilstraat = new Street('zeilstraat', 1878, 1 , 80);
const allStreets = [];
allStreets.push(heemstedestraat, kinkerstraat, warmondstraat, zeilstraat);
console.log(allStreets);

const [total, average] = zeilstraat.calculateTotalandAverageLength();
console.log(total, average);

const sizeZeil = zeilstraat.classify();
console.log(sizeZeil);

// function reportPark(park){
//   console.log(`The ${park.name} park has a density of ${park.calculateTreeDensity()} and an Average
//   age of ${park.calculateAverageAge()}. ${park.getNameTrees()}`);
// };

function reportAllParks(parks){
  for(let key in parks){
    console.log(`Park ${parks[key].name} has a tree dens of ${parks[key].calculateTreeDensity()} and an Average
    age of ${parks[key].calculateAverageAge()}. ${parks[key].getNameTrees()} `);
  }
}

function reportStreets(streets){
  for(let key in streets){
    console.log(`The ${streets[key].name} has a total of ${streets[key].calculateTotalandAverageLength()[0]} and a
    average of ${streets[key].calculateTotalandAverageLength()[1]} and is of size: ${streets[key].classify()}`)
  }
};

reportAllParks(allParks);
reportStreets(allStreets);
