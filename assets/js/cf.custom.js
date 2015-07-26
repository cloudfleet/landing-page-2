$(function () {

    //////////     MOBILE CHECK    //////////


    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };




    if (isMobile.any()) {
        $("html").addClass("isMobile");
        if (isMobile.iOS()) {
            $(".form-control").css("-webkit-appearance", "caret");
        }
        $("select.input-sm,select.input-lg ").css("line-height", "1.3");
        //$('.all-in-one .container-fluid').remove();
       // positionFeatureBlocks();
    }

    window.addEventListener("orientationchange", function () {
        //positionFeatureBlocks();
        //positionFeatures('.features .self-hosted-email .icon');
        //positionFeatures('.features .store-sync-share .icon');
        //positionFeatures('.features .cal-notes-contacts .icon');
        //positionFeatures('.features .security .icon');
        //
        //
        //positionFeatures('.features .security .cl-1');


    }, false);

    function positionFeatureBlocks() {
        if ($(window).width() < 769 && $(window).width() > 424) {


            $('.features .col-xs-12').removeClass('col-xs-12').addClass('col-xs-6');
            // .features .col-xs-12
        }
        if ($(window).width() < 425) {


            $('.features .col-xs-6').removeClass('col-xs-6').addClass('col-xs-12');
            // .features .col-xs-12
        }


    }

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
        console.log($(window).scrollTop())
        if ($(window).width() > 768) {
            var reduceOpacity = $(window).scrollTop()/340;

            $("#blimp-box-gray-scale").css('opacity', (1-reduceOpacity));


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
        //positionFeatures('.features .self-hosted-email .icon');
        //positionFeatures('.features .store-sync-share .icon');
        //positionFeatures('.features .cal-notes-contacts .icon');
        //positionFeatures('.features .security .icon');
        //positionFeatures('.features .security .cl-1');
        //
        //positionFeatureBlocks();
    });

    $(window).resize(function () {

        if ($(window).width() < 900) {
            $("#blimp-box").css('opacity', (0));
            $("#blimp-box-gray-scale").css('opacity', (0));
            $(".all-in-one").css('height', 500);
        } else {
            $("#blimp-box").css('opacity', (1));
            $(".all-in-one").css('height', 'auto');
            if ($(window).width() > 768) {
                var reduceOpacity = $(window).scrollTop()/340;
                $("#blimp-box-gray-scale").css('opacity', (1-reduceOpacity));
            }
        }

        //positionFeatures('.features .self-hosted-email .icon');
        //positionFeatures('.features .store-sync-share .icon');
        //positionFeatures('.features .cal-notes-contacts .icon');
        //positionFeatures('.features .security .icon');
        //positionFeatures('.features .security .cl-1');
        //positionFeatureBlocks();
    });

    $(window).resize();
    function positionFeatures(ic) {
        var Icon = $(ic);
        var w = $('.features h2').width() + 30;
        var iconW = Icon.width();
        var iconPos = (w - iconW) / 2;
        Icon.css('left', iconPos);
    }

    //positionFeatures('.features .self-hosted-email .icon');
    //positionFeatures('.features .store-sync-share .icon');
    //positionFeatures('.features .cal-notes-contacts .icon');
    //positionFeatures('.features .security .icon');

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        //alert($($anchor.attr('id')));
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top) - 65
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    $('#team-tabs').find('a[href="#team-4"]').tab('show');

    //if (!isMobile.any()) {
    //
    //    if ($(window).width() > 768) {
    //        $("#solution").hover(
    //            function () {
    //                $("#blimp-box-gray-scale").stop().fadeTo('slow', 1);
    //            },
    //            function () {
    //                $("#blimp-box").stop().fadeTo('slow', 0);
    //            }
    //        );
    //    }
    //}
});
    
    