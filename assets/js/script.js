/* 
==================================================
- Template Name: Gstar
- Author: Mountain Theme
- Description: Gstar - Personal Portfolio HTML Template
- Version: 1.0.0
==================================================
*/

(function ($) {

    "use strict";

    /* -------------------------------------------------------- */
    /* - Preloader
    /* -------------------------------------------------------- */
    $(window).on('load', function () {
        $('.loader').fadeOut();
        $('.preloader').delay(333).fadeOut("slow");
        $('body').delay(333);
    });

    /* -------------------------------------------------------- */
    /* - Back to Top
    /* -------------------------------------------------------- */
    $(function () {
        let scrollTopButton = $('#back-top-top');

        $(window).on('scroll', function () {
            let scroll = $(document).scrollTop();

            // Apply Transition
            if (scroll >= 250) {
                scrollTopButton.addClass("active");
            } else {
                scrollTopButton.removeClass("active");
            }
        });
    });

    /* -------------------------------------------------------- */
    /* - Copyright Year Change
    /* -------------------------------------------------------- */
    $('#currentYear').text(new Date().getFullYear());

})(jQuery);