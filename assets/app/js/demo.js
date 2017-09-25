$(document).ready( function () {

    // For demonstration of templates navigation only
    var currentPageName = $('body').attr('data-nav-name');
    var currentNavItem = $('#m_aside_left li[data-nav-name="' + currentPageName + '"]');
    var currentNavUserItem = $('#userAccountNav li[data-nav-name="' + currentPageName + '"]');

    currentNavItem.addClass('m-menu__item--active');
    currentNavUserItem.addClass('m-nav__item--active');

    if (currentNavItem.hasClass('m-menu__item--submenu')) {
        currentNavItem.addClass('m-menu__item--open');
        //$('.page-sidebar-menu li.active.open > a > .arrow').addClass('open');
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

    // iCheck check all table rows function
    var tableCheckAllTrigger = jQuery('th.check-field input[data-name=icheck]');
    tableCheckAllTrigger.on('ifChecked', function (event) {
        $('td.check-field input[data-name=icheck]').iCheck('check');
    });
    tableCheckAllTrigger.on('ifUnchecked', function (event) {
        $('td.check-field input[data-name=icheck]').iCheck('uncheck');
    });

});