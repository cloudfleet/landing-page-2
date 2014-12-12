$(function () {

    //////////     MOBILE CHECK    //////////
    var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    var android = /mobile|android/i.test(navigator.userAgent);

    if (iOS || android) {
        $("html").addClass("isMobile");
        if (iOS) {
            $(".form-control").css("-webkit-appearance", "caret");
        }
        $("select.input-sm,select.input-lg ").css("line-height", "1.3");
    }





    // Responsive nav
    selectnav('navigation', {
        label: 'NAVIGATE...',
        autoselect: false,
        nested: true,
        indent: "-"
    });





    $(".animated").waypoint(function (direction) {
        var el = $(this),
            e = el.data("effect"),
            startTime = el.data("start");
        if (startTime) {
            setTimeout(function () {
                el.toggleClass(e);
                el.toggleClass("showing");
            }, startTime);
        } else {
            $(this).toggleClass(e);
            $(this).toggleClass("showing");
        }
    }, {
        offset: "90%"
    });


    $(window).scroll(function () {
        if ($(window).width() > 768) {
            if ($(window).scrollTop() > 70) {
                $('#header').addClass('fixedHeader');
            } else {
                $('#header').removeClass('fixedHeader');
            }
            if ($(window).scrollTop() > 500) {
                $('#header').addClass('colorHeader');
            } else {
                $('#header').removeClass('colorHeader');
            }
        }
    });

    $(window).resize(function () {
        positionFeatures('.features .self-hosted-email .icon');
        positionFeatures('.features .store-sync-share .icon');
        positionFeatures('.features .cal-notes-contacts .icon');
        positionFeatures('.features .security .icon');


        if ($(window).width() < 767) {
            $('#header').removeClass('fixedHeader');


        }
    });


    function positionFeatures(ic){

        var Icon = $(ic);
        var w = $('.features h2').width() + 30;
        var iconW = Icon.width();
        var iconPos = (w - iconW) / 2;

        Icon.css('left', iconPos);
    }


    positionFeatures('.features .self-hosted-email .icon');
    positionFeatures('.features .store-sync-share .icon');
    positionFeatures('.features .cal-notes-contacts .icon');
    positionFeatures('.features .security .icon');


    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top) - 65
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});
    
    