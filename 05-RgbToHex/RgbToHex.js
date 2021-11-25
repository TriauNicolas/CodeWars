function rgb(r, g, b){
  let hex_value = '';
  
  const rgb_to_hex = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  }
  
  function convert(colors) {
    colors.forEach(color => {
      if (color > 255) {
        hex_value += 'FF';
      } else if (color >= 0) {
        hex_value += Math.floor(color / 16) <= 15 ? rgb_to_hex[Math.floor(color / 16)] : rgb_to_hex[15];
        hex_value += rgb_to_hex[Math.floor(color % 16)];
      } else {
        hex_value += '00';
      }
    })
  }
  convert([r, g, b]);
  
  return hex_value;
}