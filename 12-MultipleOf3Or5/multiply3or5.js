function solution(number){
  let addionned_number = 0;
  let index = 2;
  
  while (index < number) {
    if (index % 3 === 0 || index % 5 === 0) {
      addionned_number += index;
    }
    index++;
  }
  return addionned_number;
}