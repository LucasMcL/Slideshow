// To do:
//	Add captions to the images on hover
//  Animate slides

let n = 1
// On click of next button
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

// On click of previous button
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

let keepGoing = true
$('input[name=play]').click( function() {
	switch ($(this).val()) {
		case 'Play Slideshow':
			$(this).val('Stop Slideshow')
			keepGoing = true;
			animateSlides()
			break
		case 'Stop Slideshow':
			$(this).val('Play Slideshow')
			stopAnimation()
			break
	}
})

// Begin some sort of unending loop of the slides until
// the user clicks "Stop Slideshow"
function animateSlides() {
	// Start at current slide
	// Loop infinitely, smoothly transitioning from the last slide to the first
	if(keepGoing === true) {
		var img = $(`img:nth-child(${n})`)
		$(img).hide("slow", function() {
			if(n === $('#img-container img').length) n = 0
			n++
			img = $(`img:nth-child(${n})`)
			$(img).show("slow", function() {
				setTimeout(animateSlides, 5000)
			})
		})
	}
}

function stopAnimation() {
	keepGoing = false;
}

// Hide/Show
// Wait 5 seconds
// Hide/Show









