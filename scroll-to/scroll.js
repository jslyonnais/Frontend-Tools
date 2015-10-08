$(function() {

    var scroll = $('.js-scroll');

    if ( scroll !== null) {
        scroll.click(function(e) {
            e.preventDefault();     // Avoid default action (ex. follow URL)

            var location    = $(this).attr('data-scroll-action'),       // Get value fromt clicked element data-scroll-action
                scrollTo    = $('[data-scroll="' + location + '"]');    // Setup where you would go

            $('html, body').stop(true,true).animate({   // Animate the HTML / BODY view
                scrollTop: scrollTo.offset().top        // Animate top until element position
            }, 800);                                    // Animation speed in ms
        });
    }
});