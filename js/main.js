$(document).ready(function () {

  // setTimeout(function () {
  //   showSlide(3)
  // }, 2000)

  var itemsLength = $('.cards_container .item').length
  var currentSlide = 1;

  $('.total_slide').text(itemsLength);
  $('.current_slide').text(currentSlide)


  // console.log(itemsLength)

  $('.cardSlider .btn_prev').on('click', function () {
    // console.log('prev')
    if (currentSlide > 1) {
      currentSlide = currentSlide - 1;
      showSlide(currentSlide)
    } else {
      currentSlide = itemsLength;
      showSlide(currentSlide);
    }
  })

  $('.cardSlider .btn_next').on('click', function () {
    // console.log('next')
    if (currentSlide !== itemsLength) {
      currentSlide = currentSlide + 1
      showSlide(currentSlide)
    } else {
      // currentSlide = itemsLength - (itemsLength - 1)
      currentSlide = 1
      showSlide(currentSlide)
    }
  })

  function showSlide(slideNumber) {
    $('.cards_container .item').removeClass('active')
    $('div[data-id="' + slideNumber + '"]').addClass('active')

    $('.current_slide').text(slideNumber)
  }

});