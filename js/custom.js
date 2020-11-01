'use strict';

/*AOS.init({
    mirror: true
});*/
$('document').ready(function () {
    (function () {
        var ctrl = $('[data-product-number]');

        ctrl.on('click', function () {
            $('.configurator__circle-item').removeClass('configurator__circle-item_active');
            $(this).addClass('configurator__circle-item_active');
        });
    })();

    (function () {
        var menuBtn = $('[data-js-action="toggle-menu"]');
        menuBtn.on('click', function () {
            if ($('.main-menu_active').length) {
                $('.main-menu .aos-animate').removeClass('aos-animate');
            } else {
                $('.main-menu .aos-init').addClass('aos-animate');
            }
            $('.hamburger').toggleClass('is-active');
            $('.hamburger_mobile').toggleClass('is-active');
            $('.hamburger-menu').toggleClass('show');
            $('.hamburger-menu').toggleClass('hide');
            $('.cursor').toggleClass('cursor_black');
            $('.header__btn').toggleClass('show');
            $('.header__logo').toggleClass('show'); 
            $('.header__auth-link').toggleClass('show'); 
            $('.header__ctrl-item-icon').toggleClass('show');
            $('.slide-ctrl').toggleClass('slide-ctrl_black');  
        $('a').on('click', function (e) {
            $('.hamburger').removeClass('is-active');
            $('.hamburger-menu').removeClass('show');
            $('.hamburger-menu').addClass('hide');
            $('.cursor').toggleClass('cursor_black');
            $('.header__btn').removeClass('show');
            $('.header__logo').removeClass('show'); 
            $('.header__auth-link').removeClass('show'); 
            $('.header__ctrl-item-icon').removeClass('show');
            $('.slide-ctrl').removeClass('slide-ctrl_black');
        });
     
            
        });
    })();
    
    (function () {
        var service = $('.services__item');
        service.on('click', function () {
            var _this = this;
            $('.services__item-content').addClass('active');
            service.removeClass('services__item_active');
            $(this).addClass('services__item_active');
            $('.services__item-text', $(this)).addClass('no-animation').removeClass('aos-animate');
            setTimeout(function () {
                $('.services__item-text', $(_this)).removeClass('no-animation');
                AOS.init();
            }, 50);

            if ($(window).outerWidth() <= 990) {
                $(this).removeClass('services__item_active');
                $(this).addClass('services__item_mobile-active');
            }
        });

        $('.services__close-btn').on('click', function (e) {
            e.stopPropagation();
            service.removeClass('services__item_mobile-active');
            $('.services__item-content').removeClass('active');
        });
    })();

    (function () {
        var prevBtn = $('[data-js-action="prev-screen"]'),
            nextBtn = $('[data-js-action="next-screen"]');

        prevBtn.on('click', function () {
            fullpage_api.moveSectionUp();
        });
        nextBtn.on('click', function () {
            fullpage_api.moveSectionDown();
        });
    })();

 

    var scene = document.querySelector('body');
    new Parallax(scene, {
        hoverOnly: true
    });

    $(window).on('mousemove', function (e) {
        $('.cursor').css({
            top: e.pageY - 13,
            left: e.pageX - 13
        });
    }).on('mousedown', function () {
        $('.cursor').addClass('cursor_down');
    }).on('mouseup', function () {
        $('.cursor').removeClass('cursor_down');
    }).on('mouseleave', function () {
        $('.cursor').css('opacity', 0);
    }).on('mouseenter', function () {
        $('.cursor').css('opacity', 1);
    });

    $('[data-js-role="cursor-pointer"]').on('hover mouseenter', function () {
        $('.cursor').addClass('cursor_pointer');
    }).on('blur mouseleave', function () {
        $('.cursor').removeClass('cursor_pointer');
    });

    $('[data-js-hover="gold"]').on('hover mouseenter', function () {
        $('.cursor').addClass('cursor_gold');
    }).on('blur mouseleave', function () {
        $('.cursor').removeClass('cursor_gold');
    });

    $('[data-js-hover="black"]').on('hover mouseenter', function () {
        $('.cursor').addClass('cursor_black');
    }).on('blur mouseleave', function () {
        $('.cursor').removeClass('cursor_black');
    });

    $('#fullpage').fullpage({
        scrollBar: true,
        paddingBottom: '30px',
        fixedElements: '.slide-ctrl, .cursor, .header, .main-menu',
        responsiveHeight: 580,
        onLeave: function onLeave(prev, next) {
            var index = +next.index + 1,
                blackIndexes = [2, 4, 6];
            if($(window).outerWidth() >= 1300 && $(window).outerHeight() >= 700) {
                $('.aos-animate').removeClass('aos-animate');
            }
            $('.cursor').css('opacity', 0);

            setTimeout(function () {
                $('.cursor').css('opacity', 1);
            }, 700);
            if (blackIndexes.includes(index)) {
                setTimeout(function () {
                    $('.header').addClass('header_black');
                }, 400);
                $('.slide-ctrl').addClass('slide-ctrl_black');
                $('.cursor').addClass('cursor_black');
            } else {
                setTimeout(function () {
                    $('.header').removeClass('header_black');
                }, 400);
                $('.slide-ctrl').removeClass('slide-ctrl_black');
                $('.cursor').removeClass('cursor_black');
            }

            if (index === 5) {
                setTimeout(function () {
                    $('.header').addClass('header_black-bg');
                }, 400);
            } else {
                $('.header').removeClass('header_black-bg');
            }
            $('[data-js-store="active-screen-number"]').text('0' + index);
            if ($(window).width() <= '490') {
                if (prev.index < next.index) {
                    $('.about__name').addClass('prev');
                    $('.services__name').addClass('prev');
                    $('.configurator__name').addClass('prev');
                    $('.contacts__name').addClass('prev');
                } else {
                    $('.about__name').removeClass('prev');
                    $('.services__name').removeClass('prev');
                    $('.configurator__name').removeClass('prev');
                    $('.contacts__name').removeClass('prev');
                }
            }
                
        }
      
    });
   
    //spoiler in hamburger - mobile

        function windowSize(){
            if ($(window).width() <= '1300'){

                $('.hamburger-menu_list-title').addClass('spoiler');
                $('.hamburger-menu-bottom').children().removeClass('spoiler');

                $('.hamburger-menu_list-title').click(function(event) {  

                 if ($(this).parent()[0] != $('.hamburger-menu-bottom')[0] ) {
                    $(this).toggleClass('active').nextAll().slideToggle(300);
                 }        
                });
                
            } else {
                $('.hamburger-menu_list-title').removeClass('spoiler');
               
            }
            if ($(window).width() <= '1200') {
               
                $('.hamburger-menu_list-title').click(function (e) {
                    if ($(this).parent()[0] != $('.hamburger-menu-bottom')[0]) {
                        if ($('.hamburger-menu_list').hasClass('one')) {
                            $('.hamburger-menu_list-title').not($(this)).removeClass('active');
                            $('.hamburger-menu_list-title').not($(this)).not($('.hamburger-menu-bottom').children()).nextAll().slideUp(300);
                        } 
                    } else {
                        $('.hamburger--slider').removeClass('is-active');
                        
                    }
                    
                });
                $('.header__logo_black').addClass('isnt-active');
                $('.icon-cart').addClass('isnt-active');
                $('.icon-search').addClass('isnt-active');

                const menuBtn = $('[data-js-action="toggle-menu"]');

                menuBtn.click(function (e) {
                    $('.header__logo_black').toggleClass('isnt-active');
                    $('.icon-cart').toggleClass('isnt-active');
                    $('.icon-search').toggleClass('isnt-active');
                } );

            }

            if ($(window).width() <= '480') {
                $('.about__decor-element').removeClass('layer');
                $('.about__name').removeClass('layer');
                $('.services__name').removeClass('layer');
                $('.configurator__name').removeClass('layer');
                $('.contacts__name').removeClass('layer');
                
            }
            
        }

        $(window).on('load',windowSize);
       
   
    
});

function resetWow() {

    $('wow').each(function (item) {

        $(item).removeClass('animated').removeAttr('style');
    });
}

var wow = new wow(
    {
        mobile: false
    }
);

wow.init();