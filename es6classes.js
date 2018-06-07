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
}

class Street extends Town {
  constructor(name, buildyear, size = 'normal', length){
    super(name, buildyear);
    this.size = size;
    this.length = length;
  }
}

// 3 parks in town
const vondelpark = new Park('Vondelpark', 1888, 500, 10000);
console.log(vondelpark);
console.log(vondelpark.calculateTreeDensity());

const rembrandtpark = new Park('Rembrandtpark', 1901, 800, 80000 );
console.log(rembrandtpark);
console.log(rembrandtpark.calculateTreeDensity());

const sarphatipark = new Park('Sarphatipark', 2001, 80, 1000);
console.log(sarphatipark);
console.log(sarphatipark.calculateTreeDensity());

// 4 streets in town
const heemstedestraat = new Street('heemstedestraat', 1880, 'small', 100);
console.log(heemstedestraat);
const kinkerstraat = new Street('kinkerstraat', 1889, 'normal', 150);
console.log(kinkerstraat);
const warmondstraat = new Street('warmondstraat', 1992, 'small', 110);
console.log(warmondstraat);
const zeilstraat = new Street('zeilstraat', 1878, 'small', 80);
console.log(zeilstraat);
