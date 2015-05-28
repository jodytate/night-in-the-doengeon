$(function() {
    
  for (var i = 0, limit = 500; i < limit; i++) {
    $('body').prepend('<div class="grid-square">');
  }

  $('.grid-square').on('click', function () {
    $(this).toggleClass('black')
  });

});
