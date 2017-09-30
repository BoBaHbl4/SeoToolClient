var scrollToAnchor = function (el) {

    console.log(el);

    // On-page links
    if ( location.pathname.replace(/^\//, '') === el.pathname.replace(/^\//, '') && location.hostname === el.hostname ) {

        // Figure out element to scroll to
        var target = $(el.hash);

        target = target.length ? target : $('[name=' + el.hash.slice(1) + ']');

        console.log(target);

        // Does a scroll target exist?
        if (target.length) {

            $('html, body').animate({
                scrollTop: target.offset().top - 85
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                }
            });
            return false;
        }
    }
};

$(document).ready( function () {

    // Check if url got hash
    var hash = window.location.hash;

    // Check if hash is news trigger
    if (hash.length > 0 && hash.substr(0, 5) === '#news') {
        // Get news scrolling trigger link
        var scrollTrigger = $('a[name=' + hash.substr(1) + ']').get(0);

        // Init news scroll
        scrollToAnchor(scrollTrigger);
    }


    // News Navigation
    $('a.news-link').on('click', function() {
        // Init news scroll
        scrollToAnchor(this);
    });

    // For demonstration of templates navigation only
    var currentPageName = $('body').attr('data-nav-name');
    var currentNavItem = $('#m_aside_left li[data-nav-name="' + currentPageName + '"]');
    var currentNavUserItem = $('#userAccountNav li[data-nav-name="' + currentPageName + '"]');

    currentNavItem.addClass('m-menu__item--active m-menu__item--open');
    currentNavUserItem.addClass('m-nav__item--active');

    if (currentNavItem.hasClass('m-menu__item--submenu')) {
        currentNavItem.addClass('m-menu__item--open');
        //$('.page-sidebar-menu li.active.open > a > .arrow').addClass('open');
    }
    if (currentNavItem.closest('ul').hasClass('m-menu__subnav')) {
        currentNavItem.closest('li.m-menu__item--submenu').addClass("m-menu__item--open");
    }

    if (currentPageName.substr(0,2) === 'ss') {
        $('#contentNavBar li[data-section=ss]').addClass('m-menu__item--active');
    }
    if (currentPageName.substr(0,2) === 'cw') {
        $('#contentNavBar li[data-section=cw]').addClass('m-menu__item--active');
    }
    if (currentPageName.substr(0,2) === 'sj') {
        $('#contentNavBar li[data-section=sj]').addClass('m-menu__item--active');
    }
    // For demonstration of templates navigation only
    
    // Show All Functional
    $('.btn-view-all-trigger').on('click', function () {
       var showAllAttr = $(this).find('.view-all-trigger').attr('data-show-all');
       $('#' + showAllAttr).toggleClass('item-hidden');
    });

    // Trigger for News Dropdown
    $('#seognalsNewsTrigger').on('click', function (e) {
        console.log('test');
        e.stopPropagation();
        $('#seognalsNews .m-dropdown__toggle').click();
        return false;
    });

    // Bootstrap Select Init
    $('.m_selectpicker').selectpicker();

});