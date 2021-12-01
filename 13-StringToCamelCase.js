function toCamelCase(str){
    let index = 0;
    let needUpperCase = false;
    let newString = '';
    while (index < str.length) {
      if(str[index] === '-' || str[index] === '_') {
        needUpperCase = true;
      } else if(needUpperCase) {
        newString += str[index].toUpperCase();
        needUpperCase = false;
      } else {
        newString += str[index];
      }
      index++;
    }
    return newString;
  }