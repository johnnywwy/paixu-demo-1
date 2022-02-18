let sort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    console.log("----");
    console.log(`i:${i}`);
    let index = minIndex(numbers.slice(i)) + i;
    console.log(`index:${index}`);
    console.log(`min:${numbers[index]}`);
    if (index !== i) {
      swap(numbers, index, i);
      console.log(`swap ${index}: ${i}`);
      console.log(numbers);
    }
  }
  return numbers;
};

let swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

let minIndex = (numbers) => {
  let index = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};

console.log(sort([15, 5, 7, 3, 4, 8, 9])); //[3, 4,  5, 7, 8, 9, 15]
