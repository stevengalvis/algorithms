function makeArrayConsecutive2(statues) {
  //Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
  //Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1.
  //He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

  //sort array from smallest to largest

  for (let i = 0; i < statues.length; i++) {
    console.log(statues[i]);
    if (statues[i+1] < statues[i] && i != statues.length-1) {
      let higher = statues[i];
      statues[i] = statues[i + 1];
      statues[i+1] =  higher;
    }
  }
  console.log(statues);

  //check next num is bigger tham previous num by 1

  //find minimum number of additional statues needed
}

let statues = [6, 2, 3, 8];

makeArrayConsecutive2(statues);
