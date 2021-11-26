function likes(names) {
  if(names.length === 0) {
    return 'no one likes this';
  } else if (names.length <= 2) {
    return names.length === 1 ? names[0] + ' likes this' : names[0] + ' and ' + names[1] + ' like this';
  } else {
    return names.length === 3 ? names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this' : names[0] + ', ' + names[1] + ' and ' + (names.length - 2)  + ' others like this'
  }
}