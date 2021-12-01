// Didn't know about Math.sqrt() lmao

function findNextSquare(sq) {
  let index = 1;
  
  while (index <= sq) {
    if(index * index === sq) {
      return (index + 1) * (index + 1)
    }
    index++
  }
  return -1;
}