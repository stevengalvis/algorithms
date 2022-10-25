function checkPalindrome(inputString) {
  console.log(inputString);
strArr = inputString.split('');
console.log(strArr);
  let reverse = [];
for (let i = strArr.length-1; i >= 0; i--) {
  console.log(strArr[i]);

  reverse.push(strArr[i]);
}
let reverseStr = reverse.toString(' ');
console.log(reverseStr);


}

checkPalindrome('noon');
