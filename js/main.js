$(document).ready(function () {

  $.ajax('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    error: function () {
      console.log('error bro')
    },
    success: function (data) { //save data from server to argument data
      console.log(data)
    }
  })

})




