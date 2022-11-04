function adjacentElementsProduct(inputArray) {
    //Given an array of integers, find the pair of adjacent elements
    //that has the largest product and return that product.
    console.log(inputArray);
    //find the largest two nums
    let highestArr = [];
    let highestNum = inputArray[0];
    let product = 0;

    for (let i = 0; i < inputArray.length; i++) {

      if (inputArray[i] > highestNum) {
        console.log(inputArray[i]);
        highestNum = inputArray[i];
        product = highestNum * inputArray[i];
      }
    }
    console.log(product);
}
inputArray = [3, 6, -2, -5, 7, 3];
adjacentElementsProduct(inputArray);
