var awesomeQuiz = {
  // setting:[],
  // nextFunction:function(){
  loadQuiz: function () {
    // console.log('start quiz')
    //start slider and changing color
    $('.panel_one h1').show('drop', 500, function () {//after slide , changing color
      $('.start_quiz').addClass('started', 500)//transition time
    })

    $('.start_quiz').on('click', function () {//good to split functions
      awesomeQuiz.showPanel(1)

    })

  },
  showPanel: function (position) {
    var current = $('div[data-panel="' + (position - 1) + '"]')

    current.find('.wrapper').animate({ left: '-=100px', opacity: 0 }, 500, function () {
      current.addClass('hidden')

      //show next panel
      var next = $('div[data-panel="' + position + '"]');
      next.removeClass('hidden')

      awesomeQuiz.showWrapper(next)
    })
  },
  showWrapper: function (next) {
    var wrapper = next.find('.wrapper')

    wrapper.fadeIn('500', function () {
      //showing options
      awesomeQuiz.manageOption(next)
    })
  },
  manageOption: function (next) {
    var options = next.find('.options');
    var childrens = options.find('div');
    var counter = 0;

    // console.log(childrens)

    childrens.each(function (i, el) {
      // console.log(i)
      $(el).delay(counter).fadeIn(300) //runfast, look all at the same time
      counter += 500;//add delay for the next option
    })

    childrens.on('click', function () {
      childrens.removeClass('active')

      next.addClass('active')//validation

      $(this).addClass('active')
    })//listen to anydiv clicks
  }


}

$(document).ready(function () {

  awesomeQuiz.loadQuiz();
})
