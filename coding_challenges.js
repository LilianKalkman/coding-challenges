// 1: Flatten an array

const arr1 = [1, ['cat', 'hond'], 2, 'hoi', [[[3]]], [1, 4, [3,4]]];
const arr2 = [[], []];
const arr3 = [[3], [2, 1, 0], [4, 5, 6, 7]];


function flattenArray(array){
  const flattened = array.reduce(function(total, item){
      return total + (item + ',');
  }, []);
  const arr = flattened.split(',');
  arr.pop();
  const finalarray = arr.filter(function(item){
    return item.length > 0;
  });
  return finalarray;
}

const flattend1 = flattenArray(arr1);
console.log(flattend1);
console.log(flattenArray(arr2));
console.log(flattenArray(arr3));


// 2 Rotate an array

const array = [1, 2, 3, 4, 5, 6];
console.log(array);

function rotateList(list, number){
  const newList = [].concat(list);
  let sliceIndex, rotatedList, elements;
  const length = list.length;

  number > length ? number = number%length : number;

  if(number > 0 && number != 0){
    sliceIndex = list.length - number;
    elements = list.slice(sliceIndex, length);

    for(let i = elements.length - 1; i >= 0; i--){
      newList.unshift(elements[i]);
      newList.pop(elements[i]);
    };

  } else if (number < 0) {
    sliceIndex = 0 - number;
    sliceIndex > length ? sliceIndex = sliceIndex%length : sliceIndex;

    elements = list.slice(0, sliceIndex);

    for(let i = 0; i < elements.length; i++){
      newList.push(elements[i]);
      newList.shift(elements[i]);
    };
  }
  return newList;
};

var rotated = rotateList(array, -2);
console.log(rotated);
