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
      console.log(`${this.name} has more than 1000 trees`);
    }
  }

}



// 3 parks in town
const vondelpark = new Park('Vondelpark', 1888, 500, 10000);
console.log(vondelpark);
console.log(vondelpark.calculateTreeDensity());
vondelpark.calculateAverageAge(1990, 8990, 2000);

const rembrandtpark = new Park('Rembrandtpark', 1901, 800, 80000 );
console.log(rembrandtpark);
console.log(rembrandtpark.calculateTreeDensity());

const sarphatipark = new Park('Sarphatipark', 2001, 80, 1000);
console.log(sarphatipark);
console.log(sarphatipark.calculateTreeDensity());



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
    console.log(classification.get(this.size))
}

}

// 4 streets in town
const heemstedestraat = new Street('heemstedestraat', 1880, 2, 100);
console.log(heemstedestraat);
const kinkerstraat = new Street('kinkerstraat', 1889, 3, 150);
console.log(kinkerstraat);
const warmondstraat = new Street('warmondstraat', 1992, 2, 110);
console.log(warmondstraat);
const zeilstraat = new Street('zeilstraat', 1878, 1 , 80);
console.log(zeilstraat);

const [total, average] = zeilstraat.calculateTotalandAverageLength();
console.log(total, average);

console.log(zeilstraat.classify());
