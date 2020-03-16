$(document).ready(function () {

  var method = "POST";
  var URL = "https://jsonplaceholder.typicode.com/users";
  var json = JSON.stringify({ name: "Francis", lastname: "abigail" });//can't send object need to convert to json

  $.ajax(URL, {
    method: method,
    data: json,//send data
    dataType: 'json',
    contentType: 'application/json',//the minimum need to send a post request

    error: function () {
      console.log('error bro')
    },
    success: function (response) {//response from server
      console.log(response)
    }
  })
})




