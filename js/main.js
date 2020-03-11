$(document).ready(function () {
  // $('.slideUp').click(function () {
  //   $('.element').slideUp(2000, function () {
  //     alert(done)
  //   })
  // })

  // $('.slideDown').click(function () {
  //   $('.element').slideDown(2000, function () {
  //     alert(done)
  //   })
  // })

  $('.slideUp,.slideDown').click(function () {
    $('.element').slideToggle('slow', function () {//no slideto
      alert('done')
    })
  })


})




