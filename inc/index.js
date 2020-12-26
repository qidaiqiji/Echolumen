$(document).ready(function () {
    console.log('走了')
    // $(window).on("resize", function () {
    //     console.log('qqq')
    //     if ($(window).width() <= 1024) {
    //         $(".img-box").addClass('change-screen')
    //     }
    // })
    $("#mobile-header").click(function(){
        console.log('ZOLE')
        $(".page-index").toggleClass('menu-open')
    })
    // 导航选中状态
    if (location.pathname.indexOf('home') > -1) {
        $("#in0").addClass('menu-active')
    } else if(location.pathname.indexOf('about') > -1) {
        $("#in01").addClass('menu-active')
    } else if(location.pathname.indexOf('products') > -1) {
        $("#in02").addClass('menu-active')
    } else if(location.pathname.indexOf('led-academy') > -1) {
        $("#in03").addClass('menu-active')
    } else if(location.pathname.indexOf('contact') > -1) {
        $("#in04").addClass('menu-active')
    }

    $('.submenu-fold').each(function(index) {
        $(this).click(function() {
            $(this).toggleClass('active')
            $('.fold-menu').eq(index).toggleClass("foldMenu-active");
        })
    })

    $(".subMenu-ul .subMenu-link").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            $(".subMenu-ul .subMenu-item").removeClass("menu-active");
            $this.parent().parent().parent().parent().addClass("menu-active");
            $this[0].style.cssText = "background-color: #d81621;color: #fff;"
        }
    })
    $(".cat-subMenu-ul .cat-subMenu-link").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            $this[0].style.cssText = "background-color: #d81621;color: #fff;"
        }
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
    $(".target").click(function () {
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 100 + "px" }, 500);
        return false;
    });
    var productsTop = $(".products-nav").offset().top;
    var messageTop = $(".message-box").offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > messageTop + 200) {
            $(".message-box").addClass("fix");
        } else {
            $(".message-box").removeClass("fix")
        }
        if($(window).scrollTop()>productsTop+200) {
            $(".products-nav").addClass("fix");
        }else{
            $(".products-nav").removeClass("fix")
        }
    })
    // 处理大图样式及滚动
    // console.log($('.img-box').hasClass('change-screen'))
    $('.img-box').mouseover(function() {
        $('.img-box i').css('opacity', 1)
    }).mouseout(function() {
        $('.img-box i').css('opacity', 0)
    })
    var imgItemWidth = $('.img-main .img').outerWidth(true)
    console.log('imgItemWidth', imgItemWidth)
    var len = $('.img-main .img').length
    var imgMainWidth = imgItemWidth * len
    // $('.img-main')[0].style.cssText = `width: ${imgMainWidth}`
    $('.img-main').css('width',Math.ceil(imgMainWidth));
    var num = 0
    $('.img-list li').each(function(index) {
        $(this).mouseover(function() {
            num = index
            $('.img-list li').removeClass('active')
            $(this).addClass('active')
            $('.img-main').css('left', -imgItemWidth*index)
        })
    })
    $('.left').click(function() {
        if (num === 0) {
            return
        }
        num --
        $('.img-main').css('left', -imgItemWidth*num)
        $('.img-list li').removeClass('active')
        $('.img-list li').eq(num).addClass('active')
    })
    $('.right').click(function() {
        if (num === 5) {
            
            return
        }
        num ++
        $('.img-main').css('left', -imgItemWidth*num)
        $('.img-list li').removeClass('active')
        $('.img-list li').eq(num).addClass('active')
    })
})