function selectionSort(arr) {
  let size = arr.length;
  let temp;
  let max;

  for (let i = 0; i < size - 1; i++) {
    min = 0;
    for (let j = i + 1; j < size; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp
  }
}

const array = [1, 5, 2, 4, 3];
// Returns [1, 2, 3, 4, 5]