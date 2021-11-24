function duplicateCount(text){
  let textSplit = text.toUpperCase().split('');
  let textObj = {};
  let counter = 0;
  for (let index = 0; index < textSplit.length; index++) {
    textObj[textSplit[index]] = textObj[textSplit[index]] + 1 || 0;
    if(textObj[textSplit[index]] === 1) {
      counter++;
    }
  }
  return counter;
}

duplicateCount('aabbcde')