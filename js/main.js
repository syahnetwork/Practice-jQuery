$(document).ready(function () {
  $('.fadeIn').click(function () {
    $('.element').fadeIn(2000, function () {
      alert('done')
    })
  })

  $('.fadeOut').click(function () {
    $('.element').fadeOut(2000, function () {
      alert('done')
    })
  })

  $('.fadeIn,.fadeOut').click(function () {
    $('.element').fadeToggle('fast', function () {
      alert(done)
    })
  })

  $('.fadeOut').click(function () {
    $('.element').fadeTo('slow',0.33,function(){ //until 0.33 opacity
      alert('done') //callback
    })
  })


})




