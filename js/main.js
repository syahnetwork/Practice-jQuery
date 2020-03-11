$(document).ready(function () {

  //need second library because jquery doesn't include it, jquery UI
  //toggle needed library at jquery UI download page
  //or use jquery UI cdn

  // $('.element').hover(function () {
  //   $(this).animate({ left: '100px' }, 'slow')
  // }, function () {
  //   $(this).animate({ left: '0px' }, 'slow') //not use in real because when you hover , animate will run unexpectedly
  // })

  $('.element').hover(function () {
    $(this).stop().animate({ left: '100px' }, 'slow')
  }, function () {
    $(this).stop().animate({ left: '0px' }, 'slow') //stop the queque animation
  })
})




