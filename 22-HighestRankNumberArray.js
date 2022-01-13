function highestRank(arr){
    const recurrencies = {};
    for (let num = 0; num < arr.length; num++) {
      recurrencies[arr[num]] = recurrencies[arr[num]] + 1 || 1;
    }
    return Number(Object.keys(recurrencies).reduce((firstValue, secondValue) => recurrencies[firstValue] > recurrencies[secondValue] ? firstValue : secondValue));
  }