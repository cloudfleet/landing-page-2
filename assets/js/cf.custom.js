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

        positionFeatureBlocks();
    }

    window.addEventListener("orientationchange", function() {
        positionFeatureBlocks();
        positionFeatures('.features .self-hosted-email .icon');
        positionFeatures('.features .store-sync-share .icon');
        positionFeatures('.features .cal-notes-contacts .icon');
        positionFeatures('.features .security .icon');


        positionFeatures('.features .security .cl-1');

        alert('fuk');
    }, false);

    function positionFeatureBlocks(){
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
        positionFeatures('.features .self-hosted-email .icon');
        positionFeatures('.features .store-sync-share .icon');
        positionFeatures('.features .cal-notes-contacts .icon');
        positionFeatures('.features .security .icon');
        positionFeatures('.features .security .cl-1');

        positionFeatureBlocks();
    });

    $(window).resize(function () {
        positionFeatures('.features .self-hosted-email .icon');
        positionFeatures('.features .store-sync-share .icon');
        positionFeatures('.features .cal-notes-contacts .icon');
        positionFeatures('.features .security .icon');
        positionFeatures('.features .security .cl-1');

        positionFeatureBlocks();

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
        //alert($($anchor.attr('id')));
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top) - 65
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    $('#team-tabs a[href="#team-4"]').tab('show');

    if (!iOS || !android) {


        $("#solution").hover(
            function () {
                $("#blimp-box").stop().fadeTo('slow', 0);
            },
            function () {
                $("#blimp-box").stop().fadeTo('slow', 1);
            }
        );
    }
});
    
    