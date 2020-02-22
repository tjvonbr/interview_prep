class myArray {
  constructor() {
      this.length = 0;
      this.data = {};
  }

  // Get method
  get(index) {
      return this.data[index];
  }

  // Push method
  push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
  }
  
  // Pop method
  pop() {
      const lastItem = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return lastItem
  }

  // Delete method
  delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
  }

  // Shift Items method
  shiftItems(index) {
      for (let i = index; i < this.length -1; i++) {
          this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
  }
}

// const newArray = new myArray()
// newArray.push(1)
// newArray.push(2)
// newArray.push(3)
// console.log(newArray)
// newArray.delete(1)
// console.log(newArray)