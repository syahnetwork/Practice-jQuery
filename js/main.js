$(document).ready(function () {

  function startOverlay(id) {
    // console.log(id)
    $('.overlay-veil').fadeTo('500', '0.8', function () {
      var element = $('div[data-overlayItem="' + id + '"]')
      element.fadeIn('300')
      element.addClass('active')

    })//time,opacity,do something
  }

  function closeAllOverlays() {
    $('.overlay-component').each(function () {
      if ($(this).hasClass('active')) {
        $('.overlay-veil').fadeOut()
        $(this).fadeOut('300', function () {
          $(this).removeClass('active')
        })
      }
    })
  }

  $('.closeOverlay').on('click', function () {
    closeAllOverlays()
  })


  $('.overlay-item-click').on('click', function (e) {
    e.preventDefault()//clicking link not reload page

    var overlayId = $(this).data('overlay')
    startOverlay(overlayId)
  })
});