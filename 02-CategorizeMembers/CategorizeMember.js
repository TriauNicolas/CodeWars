function openOrSenior(data){
  data.forEach((element, index) => {
    if(element[0] >= 55 && element[1] > 7) {
      data[index] = 'Senior';
    } else {
      data[index] = 'Open';
    }
  })
  return data
}