function adjacentElementsProduct(inputArray) {
    //Given an array of integers, find the pair of adjacent elements
    //that has the largest product and return that product.
    console.log(inputArray);
      //find the largest two nums
      let highestArr = [];
      let highestNum = inputArray[0];
      let product = inputArray[0] * inputArray[1];

      for (let i = 0; i < inputArray.length; i++) {


        if (inputArray[i-1] * inputArray[i] > product) {
          product = inputArray[i-1] * inputArray[i];
        }

        if (inputArray[i+1] * inputArray[i] > product) {
            product = inputArray[i+1] * inputArray[i];
          }



      }

      console.log(product);
      return product;
}
inputArray = [-23, 4, -3, 8, -12];
adjacentElementsProduct(inputArray);
