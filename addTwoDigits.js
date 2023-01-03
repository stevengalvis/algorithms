function addTwoDigits(n) {
    let arr = n.toString().split('');
    console.log(arr);
    n1 = parseInt(arr[0]);
    n2 = parseInt(arr[1]);
    return n1 + n2;
}

console.log(addTwoDigits(21));
