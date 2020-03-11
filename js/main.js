$(document).ready(function () {
  $('.element').click(function () {
    $(this).animate({
      left: '200px',
      top: '50px',
      width: '100px',
      height: '100px',
      fontSize: '3em',
      opacity: '0.2'
    // },2000,'easeOutBounce')
    // },2000,'easeInBack')
    },2000,'easeInBack',function(){
      alert('animate done :))')
    })
  })
//need second library because jquery doesn't include it, jquery UI
//toggle needed library at jquery UI download page
//or use jquery UI cdn
})




