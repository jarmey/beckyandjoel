$( document ).ready(function() {
    function rjlAnimate() {
        var elems = $('.animate');
        var elemsArr = [];
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = null;
        elems.each(function () {
          elemTop = $(this).offset().top;
            if ((elemTop <= docViewBottom) && (elemTop >= docViewTop) && !$(this).hasClass('animated')) {
                elemsArr.push($(this));
            }
        });
        for (var index = 0; index < elemsArr.length; index++) {
            (function (that, i) {
                var anim = ($(elemsArr[i]).data('animation') != null) ? $(elemsArr[i]).data('animation') : 'slideInUp';
                var delay = $(elemsArr[i]).data('animation-delay');
                setTimeout(function () {
                    $(elemsArr[i]).addClass('animated ' + anim);
                    $(elemsArr[i]).removeClass('animate');
                }, (delay) ? delay : (100 * i));
            })(this, index);
        }
    }

    rjlAnimate();
    $(window).scroll(function () {
        ($('.animate').length) ? rjlAnimate() : null;
    })
});
