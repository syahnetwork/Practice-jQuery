$(document).ready(function () {

  // $('form').submit(function (e) {
  //   e.preventDefault();

  //   console.log('not auto reloading')
  // })

  // $('input').change(function (e) {
  //   console.log('input changed')
  // })

  // $('select').change(function (e) {
  //   console.log($(this).val())
  // })

  $('input[type="checkbox"').change(function (e) {
    // var element = $(this).val();
    var checked = $(this).is(':checked')
    if (checked) {
      console.log($(this).val() + ' is checked')
    } else {
      console.log($(this).val() + ' is not checked')
    }


    // console.log(element)
  })

})





