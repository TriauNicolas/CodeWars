function isIsogram(str) {
  const strSplit = str.toUpperCase().split('');
  const strObject = {};
  for (let index = 0; index < strSplit.length; index++) {
    strObject[strSplit[index]] = strObject[strSplit[index]] + 1 || 1;
    if (strObject[strSplit[index]] > 1) {
      return false;
    }
  }
  return true;
}

isIsogram("aboba");