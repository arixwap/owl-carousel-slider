/**
 * Simple Owl Carousel Slider
 */
$(function() {
    $('.owl-slider').each(function() {
        let item = ( $(this).data('item') != undefined ) ? parseInt($(this).data('item')) : 1;
        let itemSm = ( $(this).data('item-sm') != undefined ) ? parseInt($(this).data('item-sm')) : item;
        let itemMd = ( $(this).data('item-md') != undefined ) ? parseInt($(this).data('item-md')) : itemSm;
        let itemLg = ( $(this).data('item-lg') != undefined ) ? parseInt($(this).data('item-lg')) : itemMd;
        let itemXl = ( $(this).data('item-xl') != undefined ) ? parseInt($(this).data('item-xl')) : itemLg;
        let margin = ( $(this).data('margin') != undefined ) ? parseInt($(this).data('margin')) : 0;
        let play = ( $(this).data('autoplay') != undefined ) ? $(this).data('autoplay') : true;
        let looping = ( $(this).data('loop') != undefined ) ? $(this).data('loop') : true;
        let timeout = $(this).data('timeout');
        let animation = $(this).data('animation');
        let drag = ( $(this).data('drag') != undefined ) ? $(this).data('drag') : true;
        let hoverPause = ( $(this).data('hover-pause') != undefined ) ? $(this).data('hover-pause') : false;

        // Disable loop if actual item count is less than data-item
        let loopingSm = looping;
        let loopingMd = looping;
        let loopingLg = looping;
        let loopingXl = looping;
        if ( $(this).data('smart-loop') ) {
            let itemCount = $(this).find('.item').length;
            if ( itemCount <= itemSm ) {
                loopingSm = false;
                itemSm = itemCount;
            }
            if ( itemCount <= itemMd ) {
                loopingMd = false;
                itemMd = itemCount;
            }
            if ( itemCount <= itemLg ) {
                loopingLg = false;
                itemLg = itemCount;
            }
            if ( itemCount <= itemXl ) {
                loopingXl = false;
                itemXl = itemCount;
            }
        }

        $(this).addClass('owl-carousel');
        $(this).owlCarousel({
            dots: false,
            margin: margin,
            // animateIn: animation,
            animateOut: animation,
            autoplay: play,
            autoplayTimeout: timeout,
            mouseDrag: drag,
            autoplayHoverPause: hoverPause,
            responsive: {
                0: {
                    items: itemSm,
                    loop: loopingSm
                },
                768: {
                    items: itemMd,
                    loop: loopingMd
                },
                992: {
                    items: itemLg,
                    loop: loopingLg
                },
                1200: {
                    items: itemXl,
                    loop: loopingXl
                }
            }
        });
    })
})