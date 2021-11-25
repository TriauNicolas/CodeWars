function arrayDiff(a, b) {
  return a.filter(elementsListA => elementsListA != b.find(elementsToRemove => elementsListA === elementsToRemove))
}