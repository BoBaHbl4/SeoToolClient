var TableDatatables = function () {

    var initTable = function () {
        var table = jQuery('.data-table-init');

        table.dataTable({

            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "emptyTable": "No data available in table",
                "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty": "No entries found",
                "infoFiltered": "(filtered1 from _MAX_ total entries)",
                "lengthMenu": "Show _MENU_ entries",
                "search": "Search:",
                "zeroRecords": "No matching records found"
            },

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // setup buttons extension: http://datatables.net/extensions/buttons/
            buttons: [
                // { extend: 'print', className: 'btn dark btn-outline' },
                // { extend: 'pdf', className: 'btn green btn-outline' },
                // { extend: 'csv', className: 'btn purple btn-outline ' }
            ],

            // scroller extension: http://datatables.net/extensions/scroller/
            //scrollY:        323,
            //deferRender:    true,
            //scroller:       false,
            //deferRender:    false,
            //scrollX:        false,
            //scrollCollapse: false,

            stateSave:      false,

            "order": [
                //[0, 'asc']
            ],

            "lengthMenu": [
                [10, 15, 20, -1],
                [10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,

            "pagingType": "bootstrap_extended",

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>"
        });

    };

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

            initTable();
        }

    };

}();
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

    // Init standard project data table
    TableDatatables.init();

    // iCheck check all table rows function
    var tableCheckAllTrigger = jQuery('th.check-field input[data-name=icheck]');
    tableCheckAllTrigger.on('ifChecked', function (event) {
        jQuery('td.check-field input[data-name=icheck]').iCheck('check');
    });
    tableCheckAllTrigger.on('ifUnchecked', function (event) {
        jQuery('td.check-field input[data-name=icheck]').iCheck('uncheck');
    });

});