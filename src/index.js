
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

