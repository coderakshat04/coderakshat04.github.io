function drawBoard() {
  let body = document.getElementsByTagName('body')[0];
  let rowHtml = '';

  for (let row = 0; row < 8; row++) {
    rowHtml += '<div>';
    for (let col = 0; col < 8; col++) {
      let cls = 'box';

      if (row % 2 == 0) {
        if (col % 2 != 0) {
          cls = cls + ' black';
        }
      } else {
        if (col % 2 == 0) {
          cls = cls + ' black';
        }
      }
      
      rowHtml = rowHtml + '<div class="' + cls + '"></div>';
    }
    rowHtml = rowHtml + '</div>';
  }
  

  body.innerHTML = rowHtml;
}

drawBoard();