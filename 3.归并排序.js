let mergeSort = (arr) => {
  let k = arr.length;
  if (k === 1) {
    return arr;
  }
  let left = arr.slice(0, Math.floor(k / 2));
  let right = arr.slice(Math.floor(k / 2));
  return merge(mergeSort(left), mergeSort(right));
};

let merge = (a, b) => {
  if (a.length === 0) return b;
  if (a.length === 0) return a;
  return a[0] > b[0]
    ? [b[0]].concat(merge(a, b.slice(1)))
    : [a[0]].concat(merge(a.slice(1), b));
};

console.log(mergeSort([15, 5, 7, 3, 4, 8, 9]));
