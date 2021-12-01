function alphabetPosition(text) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let text_split = text.toUpperCase().split('');
  let new_text = '';
  
  text_split.forEach(letter => {
    alphabet.find((alphabet, index) => {
      if(letter === alphabet) {
        new_text += index + 1 + ' ';
      }
    })
  })
  return new_text.trim();
}