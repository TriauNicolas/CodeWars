snail = function(array) {
  let finalArray = []
  let rh = 0;
  let rv = 0;
  if(array.length === 0 || array.length === 1) {
    return array[0];
  }
  for (let index = 0; index < (array.length * 2) - 1; index++) {
    switch (index % 4) {
        case 0:
          for (let indexHR = rv; indexHR < array.length - rv; indexHR++) {
            finalArray.push(array[rh][indexHR]);
          }
          rh += 1;
          break;
        
        case 1:
          for (let indexVB = rh; indexVB < array.length - rv; indexVB++) {
            finalArray.push(array[indexVB][array.length - rh]);
          }
          rv += 1;
          break;
        
        case 2:
          for (let indexHL = (array.length - 1) - rv; indexHL >= rv - 1; indexHL--) {
            finalArray.push(array[array.length - rh][indexHL]);
          }
          break;
        
        case 3:
          for (let indexVU = (array.length - 1) - rh; indexVU >= rh; indexVU--) {
            finalArray.push(array[indexVU][rv - 1]);
          }
          break;
      }
  }
  return finalArray
}