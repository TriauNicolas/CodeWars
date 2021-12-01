function digital_root(n) {
    const reducer = (currentN, nextN) => Number(currentN) + Number(nextN);
    let newN = n;
    while (newN > 9) {
        newN = newN.toString().split('').reduce(reducer);
      }
    return newN;
  }