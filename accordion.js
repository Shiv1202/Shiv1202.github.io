$(document).ready(function() {
    var accordionTitle = $('.accordion-title');
    var accordionText = $('.accordion-text');
    var speed = 300;
 
    accordionTitle.on('click', function() {
        var thisAccordion = $(this);
        var isActive = thisAccordion.hasClass('active');
 
        if( isActive ) {
            thisAccordion
                .removeClass('active')
                .parent().find('.accordion-text').slideUp(speed);
        } else {
            // accordionTitle.removeClass('active');
            // accordionText.slideUp(speed);
            thisAccordion
                .addClass('active')
                .parent().find('.accordion-text').slideDown(speed);
        }
    });
 
    if($(window).width() >= 1024){
     accordionTitle.first().click();
    }
 });