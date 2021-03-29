/*
Author URI: http://webthemez.com/
Note: 
Licence under Creative Commons Attribution 3.0 
Do not remove the back-link in this web template 
-------------------------------------------------------*/

$(window).load(function() {
    jQuery('#all').click();
    return false;
});

$(document).ready(function() {

    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false
    });
	
    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
        },
        scrollChange: function($currentListItem) {
        }
    });

    var container = $('#publication_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 2.1;

        /*
        if (winWidth > 1024) {
            columnNumb = 3;
        } else if (winWidth > 900) {
            columnNumb = 3;
        } else if (winWidth > 479) {
            columnNumb = 3;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }
        */

        return columnNumb;
    }
	
    function setColumns() {
        /*
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);
        */
        container.find('.publication-item').each(function() {
            $(this).css({
                width: 80 + '%'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });
});