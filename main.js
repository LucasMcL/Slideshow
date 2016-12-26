
var date = new Date()
var url = 'https://api.nasa.gov/planetary/apod?api_key=T9OaZyEpVqUqEl96TGeUc6TvfYHKBlG0aduSv5Cs&' +
          `date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`


let n = 1
$('input[name=next]').click( function() {
  $(`img:nth-child(${n})`).hide("slow", function() {
    // incriment n; show next image
    n++
    $(`img:nth-child(${n})`).show("slow")

    // enable previous btn
    $('input[name=previous]').removeAttr('disabled')

    // if we're on last image, disable next btn
    if(n === $('#img-container img').length) {
    	$('input[name=next]').attr('disabled', 'disabled')
    }
  })
})

$('input[name=previous]').click( function() {
  $(`img:nth-child(${n})`).hide("slow", function() {
    // decriment n; show previous image
    n--
    $(`img:nth-child(${n})`).show("slow")

		// enable next btn
    $('input[name=next]').removeAttr('disabled')

    // if we're on first image, disable previous btn
    if(n === 1) {
    	$('input[name=previous]').attr('disabled', 'disabled')
    }
  })

})
