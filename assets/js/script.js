var maxHeight = 100;
$(function(){
  $('#heightRectangle').click(function(){
    if ($('.rectangle').height() == maxHeight){
      $('.rectangle').height('');
    } else($('.rectangle').height('+=10'));
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
