function deleteNth(arr,n){
    const ocurrencesArray = {};
    const newArray = [];
    for (let index = 0; index < arr.length; index++) {
      ocurrencesArray[arr[index]] = ocurrencesArray[arr[index]] + 1 || 1;
      if (ocurrencesArray[arr[index]] <= n) {
        newArray.push(arr[index]);
      }
    }
    return newArray;
  }