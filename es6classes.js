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
  constructor(name, buildyear, parkname, trees, areas){
    super(name, buildyear);
    this.parkname = parkname;
    this.trees = trees;
    this.areas = areas;
  }
}

class Street extends Town {
  constructor(name, buildyear, streetname, size = 'normal', length){
    super(name, buildyear);
    this.streetname = streetname;
    this.size = size;
    this.length = length;
  }
}

// 3 parks in town
const vondelpark = new Park('Amsterdam', 1888, 'Vondelpark', 500, ['oost', 'west']);
console.log(vondelpark);
const rembrandtpark = new Park('Amsterdam', 1888, 'Rembrandtpark', 800, ['oost', 'west']);
console.log(rembrandtpark);
const sarphatipark = new Park('Amsterdam', 1888, 'Sarphatipark', 80, ['oost', 'west']);
console.log(sarphatipark);

// 4 streets in town
const heemstedestraat = new Street('Amsterdam', 1888, 'heemstedestraat', 'small', 100);
console.log(heemstedestraat);
const kinkerstraat = new Street('Amsterdam', 1888, 'kinkerstraat', 'normal', 150);
console.log(kinkerstraat);
const warmondstraat = new Street('Amsterdam', 1888, 'warmondstraat', 'small', 110);
console.log(warmondstraat);
const zeilstraat = new Street('Amsterdam', 1888, 'zeilstraat', 'small', 80);
console.log(zeilstraat);
