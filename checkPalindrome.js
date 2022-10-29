function checkPalindrome(inputString) {
  //turn string into an array
    strArr = inputString.split('');

    //reverse the string
    let reverse = [];
    for (let i = strArr.length-1; i >= 0; i--) {
      reverse.push(strArr[i]);

  }
  
  let reverseStr = reverse.join("");

  //check for Palindrome
  return reverseStr === inputString;


}

checkPalindrome('barkley');
