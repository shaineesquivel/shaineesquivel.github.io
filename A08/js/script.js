$(document).ready(function () {
    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function () {
        windowHeight = $window.height();
    });

    // EZ-Parallax scrolling effect
    $window.scroll(function () {
        var scrollTop = $window.scrollTop();
        var scrollPercent = scrollTop / windowHeight;

        $('.parallax').each(function () {
            var $this = $(this);
            var speed = parseInt($this.data('speed'));
            var yPos = -(scrollTop / speed);
            var coords = '50% ' + yPos + 'px';
            $this.css({ backgroundPosition: coords });
        });

        // Hide parallax layers when scrolled past
        if (scrollTop >= windowHeight) {
            $('.parallax').css('display', 'none');
        } else {
            $('.parallax').css('display', 'block');
        }
    });

    // Smooth scrolling for navigation
    $('.nav-links a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetOffset = $(target).offset().top - 80;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 800);
    });

    // Random title flicker
    function randomFlicker() {
        var $title = $('.main-title');
        var randomOpacity = Math.random() * 0.3 + 0.7;
        var randomDelay = Math.random() * 5000 + 2000;

        setTimeout(function () {
            $title.css('opacity', randomOpacity);
            setTimeout(function () {
                $title.css('opacity', 1);
                randomFlicker();
            }, 100);
        }, randomDelay);
    }

    randomFlicker();

    // Character and monster card hover effects
    $('.character-card, .monster-card').hover(
        function () {
            $(this).find('.character-image, .monster-image').css({
                'transform': 'scale(1.05)',
                'filter': 'brightness(1.2) contrast(1.1)'
            });
        },
        function () {
            $(this).find('.character-image, .monster-image').css({
                'transform': 'scale(1)',
                'filter': 'brightness(1) contrast(1)'
            });
        }
    );

    // Random light color changes
    $('.light').each(function (index) {
        var $light = $(this);
        var colors = ['#e50914', '#ff6b00', '#ffd700', '#00ff00', '#0000ff', '#ff00ff'];

        setInterval(function () {
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            $light.css({
                'background-color': randomColor,
                'box-shadow': '0 0 20px ' + randomColor
            });
        }, 2000 + (index * 500));
    });

    // Scroll-triggered animations
    $window.scroll(function () {
        $('.content-section, .monster-section').each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $window.scrollTop();
            var viewportBottom = viewportTop + windowHeight;

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('in-view');
            }
        });
    });

    // Random flicker effect for extreme threat levels
    setInterval(function () {
        $('.threat-extreme').each(function () {
            $(this).fadeOut(100).fadeIn(100);
        });
    }, 3000);

    // Navigation bar background on scroll
    $window.scroll(function () {
        if ($window.scrollTop() > 100) {
            $('.nav-bar').css('background-color', 'rgba(0, 0, 0, 0.95)');
        } else {
            $('.nav-bar').css('background-color', 'rgba(0, 0, 0, 0.9)');
        }
    });
});