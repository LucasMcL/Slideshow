// To do:
//	Add captions to the images on hover
//  Animate slides


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

$('input[name=play]').click( function() {
	switch ($(this).val()) {
		case 'Play Slideshow':
			$(this).val('Stop Slideshow')
			animateSlides()
			break
		case 'Stop Slideshow':
			$(this).val('Play Slideshow')
			stopAnimation()
			break
	}
})

function animateSlides() {

}

function stopAnimation() {

}









