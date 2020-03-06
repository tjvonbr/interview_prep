function bubbleSort(arr) {
  const length = arr.length;
  let temp;

  for (let i = 0; i < (length - 1); i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
}

const array = [5, 1, 2, 4, 3];
// Returns [1, 2, 3, 4, 5]