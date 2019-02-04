
$(function(){
  $('#heightRectangle').click(function(){
    $('.rectangle').height('+=10');
  });
  $('#rectangleGreen').click(function(){
    $('.rectangle').css('background-color', 'green');
  });
  $('#InitialColor').click(function(){
    $('.rectangle').css('background-color', '');
  });
  $('#displayRectangle').click(function(){
    $('.rectangle').show();
  });
  $('#hideRectangle').click(function(){
    $('.rectangle').hide();
  });
});
