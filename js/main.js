$(document).ready(function() {
    $(window).on('scroll', function() {
        // cambio de header
        let position = $('#pr').offset()
        if ($(window).scrollTop() >= position.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })
    // accionamiento del menu lateral
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
    // smooth scroll
    $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate( {
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})