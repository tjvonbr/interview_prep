function insertionSort(arr) {
  const size = arr.length;
  let temp;

  for (let i = 0; i < size; i++) {
    temp = arr[i];
    for (var j = i; j > 0 && arr[j-1] > temp; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = temp;
  }
};

const array = [1, 5, 3, 2, 4];
// Returns [1, 2, 3, 4, 5]