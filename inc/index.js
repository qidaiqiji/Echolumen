$(document).ready(function () {
    $(".subMenu-ul .subMenu-link").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            $(".subMenu-ul .subMenu-item").removeClass("menu-active");
            $this.parent().parent().parent().parent().addClass("menu-active");
            $this[0].style.cssText = "background-color: #bc261a;color: #fff;"
        }
    })
    $("#mobile-header").click(function () {
        $(".page-index").toggleClass('menu-open')
    })
    $('.has-sub').on('click', function (e) {
        if ($(window).width() < 1025) {
            e.preventDefault();
            var menuItem = $(this).parents('.menu-item');
            var subMenu = menuItem.find('.subMenu');
            var subMenuLength = menuItem.find('.subMenu-ul li').length;
            var url = $(this).attr('href');
            if (menuItem.hasClass('active')) {
                location.href = url;
            } else {
                menuItem.addClass('active');
                subMenu.css({
                    height: subMenuLength * 50
                });
            }
        }
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixed")
            $(".menu-link").addClass("active");
            $(".subMenu").addClass("active");
        } else {
            $(".header").removeClass("fixed");
            $(".menu-link").removeClass("active");
            $(".subMenu").removeClass("active");
        }
    })

    $(".menu-link").each(function (index) {
        $(this).click(function (e) {
            // e.preventDefault();
            var abx = $(".subMenu").eq(index);
            $(".subMenu").eq(index).toggleClass("subMenu-active");
            $(".subMenu-ul").eq(index).toggleClass("subMenu-ul-active");
        })
    })
    function GetCurStyle(controller) {
        switch (controller.toLowerCase()) {
            case "home": $("#in0").addClass("menu-active"); break;
            case "about": $("#in01").addClass("menu-active"); break;
            case "products": $("#in02").addClass("menu-active"); break;
            case "markets": $("#in03").addClass("menu-active"); break;
            case "gallery": $("#in04").addClass("menu-active"); break;
            case "led-academy": $("#in05").addClass("menu-active"); break;
            case "news": $("#in06").addClass("menu-active"); break;
            case "contact": $("#in07").addClass("menu-active"); break;
            default: level1 = "";
        }
    }
    function BannerSlide(container, arrowClass) {
        var unsliders = $(container).unslider({
            fluid: true,
            delay: 5000,
        })
        var sliders = unsliders.data('unslider');

        $(arrowClass).click(function () {
            var fn = this.className.split(' ')[1];
            sliders[fn]();
        });

    }
    $(".target").click(function () {
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 100 + "px" }, 500);
        return false;
    });
    const messageLeft = $(".message-box").offset().left;
    const messageTop = $(".message-box").offset().top;
    const messageWidth = $(".content-container").innerWidth();
    $(window).scroll(function () {
        if ($(window).scrollTop() > messageTop + 100) {
            $(".message-box").addClass("fix");
            $(".message-box").css({
                'left': messageLeft,
                // 'width':messageWidth*0.3,
            })
        } else {
            $(".message-box").removeClass("fix")
        }
    })

})