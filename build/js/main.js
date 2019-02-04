$(document).ready(function () {
    const white = '#ffffff';
    const black = '#2f3640';
    const yellow = '#edd447';
    const blue = '#2e94ff';
    const gray = '#464646';

    $('#fullpage').fullpage({

        anchors:['main', 'whoWeAre', 'whatWeDo','portfolio','contacts','contact'],
        menu: '#navigation',
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 800,
        responsiveWidth: 800,
        css3: true,

        afterRender: function(){
            
            $('.slick-container').slick({
                centerMode: true,
                slidesToShow: 3,
                arrows: false,
                dragAndMove: true,
                focusOnSelect: true,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 3
                        }

                    },

                    {
                        breakpoint: 320,
                        settings:{
                            slidesToShow: 1
                        }
                    }
                ]
            });
            $('.burger').click(function () {
                $('.header').addClass('active');
                $('.navigation-list').show();
                $('body').css({'overflow': 'hidden'});
            });
            $('.navigation-list').click(function () {
                $(this).hide();
                $('body').css({'overflow': 'visible'});
                $('.header').removeClass('active');
            })
        },

        afterResponsive: function(isResponsive){
            isResponsive ? console.log('Responsive'): console.log('not-responsive')
        },

        onLeave: function(origin, destination, direction){
            let loadedSection = this;
            let dots = $('#fp-nav ul li a span');
            let navItem = $('.navigation-list-item a');
            let logoFirst = $('.logo-first');
            let logoSecond = $('.logo-second');
            let burger = $('#Capa');

            if(destination.anchor == 'main'){
                dots.css({"background-color": white, 'transition': '.3s'});
                navItem.css({'color': white, 'transition': '.3s'});
                burger.css({'fill': white, 'transition': '.3s'});
                logoFirst.css('color', yellow);
                logoSecond.css('color', white);
            }else if(destination.anchor == 'whoWeAre'){
                dots.css({"background-color": '#bababa', 'transition': '.3s'});
                navItem.css({'color': gray, 'transition': '.3s'});
                burger.css({'fill': gray, 'transition': '.3s'});
                logoFirst.css('color', blue);
                logoSecond.css('color', black);
            }else if(destination.anchor == 'whatWeDo'){
                dots.css({"background-color": '#bababa', 'transition': '.3s'});
                navItem.css('color', gray);
                burger.css({'fill': gray, 'transition': '.3s'});
                logoFirst.css('color', blue);
                logoSecond.css('color', black);
            }else if(destination.anchor == 'portfolio'){
                dots.css({"background-color": white, 'transition': '.3s'});
                navItem.css('color', white);
                burger.css({'fill': white, 'transition': '.3s'});
                logoFirst.css('color', blue);
                logoSecond.css('color', white);
            }else if(destination.anchor == 'contacts'){
                dots.css({"background-color": '#bababa', 'transition': '.3s'});
                navItem.css('color', gray);
                burger.css({'fill': gray, 'transition': '.3s'});
                logoFirst.css('color', blue);
                logoSecond.css('color', black);
            }else if(destination.anchor == 'contact'){
                dots.css({"background-color": '#bababa', 'transition': '.3s'});
                navItem.css('color', white);
                burger.css({'fill': white, 'transition': '.3s'});
                logoFirst.css('color', blue);
                logoSecond.css('color', white);
            }
        }
    });
});





