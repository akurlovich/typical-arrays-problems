
exports.min = function min (array) {
  let newArr = [];
  if (!(array instanceof Array)) {
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {
    newArr = array.sort(function(a, b){return a - b});
    return newArr[0];
  }
}

exports.max = function max (array) {
  let newArr = [];
  if (!(array instanceof Array)) {
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {
    newArr = array.sort(function(a, b){return b - a});
    return newArr[0];
  }
}

exports.avg = function avg (array) {
  if (!(array instanceof Array)) {
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {
    let avg = 0,
        sum = 0;
    const arrLength = array.length;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    avg = (sum / arrLength);
    return avg;

  }
  
}



// let avg = 0,
//     sum = 0;
// // const array = [-39,30,-32,-9,3,-2,-11,-4,-32,39,0,-14,7,20,-12,22,-23,19,0,2];
// const array = [1,2,3];
// if (!(array instanceof Array)) {
//   console.log('not array');
// } else if (array.length == 0) {
//   console.log('not array');
// } else {
// const arrLength = array.length;
// for (let i = 0; i < array.length; i++) {
//   sum = sum + array[i];
// }
// avg = (sum / arrLength);

// console.log(arrLength, sum, avg)
// console.log(typeof(array))
// }

// let arr = [1, 5, 3, 0],
//     newArr = [];
// newArr = arr.sort(function(a, b){return a - b});
// console.log(newArr)
