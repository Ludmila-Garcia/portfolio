function ativaScrollSuave(selector) {
    $(selector).click(function(event){
        event.preventDefautl();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    });
}

ativaScrollSuave('a[href*=sobre]');
ativaScrollSuave('a[href*=experiencias]');
ativaScrollSuave('a[href*=projetos]');
ativaScrollSuave('a[href*=contato]');