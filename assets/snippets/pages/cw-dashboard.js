var DatatableCWProjectsActive = function () {
    //== Private functions
    
    // cwProjects initializer
    var cwProjects = function () {

        var listData = [{
            "start_date": "2017/06/14",
            "update_date": "2017/07/21",
            "site_url": "http://sun.com/ut/volutpat/sapien/arcu.png",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 2,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/02/19",
            "update_date": "2017/06/02",
            "site_url": "https://youku.com/lacus/at/velit/vivamus/vel.js",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 2,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/03/17",
            "update_date": "2017/02/01",
            "site_url": "https://ted.com/erat/volutpat/in/congue.html",
            "package": "CrorkService Autumn $258/month",
            "current_status": 0,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/09/23",
            "update_date": "2017/08/14",
            "site_url": "https://kickstarter.com/vestibulum/velit/id/pretium/iaculis/diam/erat.png",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 1,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/01/21",
            "update_date": "2017/03/19",
            "site_url": "http://smugmug.com/aliquam/quis/turpis.xml",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 1,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/01/06",
            "update_date": "2016/10/06",
            "site_url": "http://ning.com/blandit/ultrices/enim/lorem/ipsum/dolor.jpg",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 0,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/03/31",
            "update_date": "2017/04/17",
            "site_url": "https://woothemes.com/lorem/vitae.html",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 1,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2016/12/26",
            "update_date": "2017/08/12",
            "site_url": "https://netvibes.com/amet/erat/nulla/tempus/vivamus/in.aspx",
            "package": "CrorkService Autumn $258/month",
            "current_status": 0,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/08/30",
            "update_date": "2016/11/30",
            "site_url": "http://yellowpages.com/ipsum/primis/in/faucibus/orci/luctus.jsp",
            "package": "CrorkService Autumn $258/month",
            "current_status": 3,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/05/17",
            "update_date": "2017/07/20",
            "site_url": "http://mapy.cz/nec/nisi/volutpat/eleifend/donec/ut/dolor.png",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 3,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/08/08",
            "update_date": "2016/11/24",
            "site_url": "http://shareasale.com/lacus/curabitur/at.png",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 1,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/08/22",
            "update_date": "2017/02/20",
            "site_url": "https://wiley.com/tortor/id/nulla/ultrices/aliquet.jsp",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 1,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/01/31",
            "update_date": "2017/09/12",
            "site_url": "http://google.co.uk/justo/morbi/ut/odio/cras.aspx",
            "package": "CrorkService Autumn $258/month",
            "current_status": 3,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/08/10",
            "update_date": "2017/03/13",
            "site_url": "http://meetup.com/nisi/at/nibh.js",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 0,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2016/10/16",
            "update_date": "2017/06/19",
            "site_url": "http://fda.gov/massa/volutpat/convallis/morbi/odio.xml",
            "package": "CrorkService Autumn $258/month",
            "current_status": 4,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/08/04",
            "update_date": "2017/09/19",
            "site_url": "http://skype.com/consequat/varius/integer/ac/leo.png",
            "package": "CrorkService Autumn $258/month",
            "current_status": 3,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2016/10/22",
            "update_date": "2017/06/27",
            "site_url": "https://msu.edu/sapien/dignissim/vestibulum.jsp",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 2,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/05/02",
            "update_date": "2017/08/31",
            "site_url": "https://cbslocal.com/cubilia.html",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 2,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/07/27",
            "update_date": "2017/08/23",
            "site_url": "http://intel.com/ante/vivamus/tortor.js",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 3,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/01/19",
            "update_date": "2017/06/13",
            "site_url": "http://yandex.ru/elementum/eu.png",
            "package": "CrorkService Autumn $258/month",
            "current_status": 3,
            "action": "cw-order-view.html"
        }];

        var datatable = $('#m_datatable_cw_orders_active').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: listData,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-cw-orders-active', // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: null, // datatable's body's fixed height
                footer: false // display/hide footer
            },

            // column sorting(refer to Kendo UI)
            sortable: true,

            // column based filtering(refer to Kendo UI)
            filterable: false,

            pagination: true,

            // columns definition
            columns: [{
                sortable: true,
                field: "start_date",
                title: "Start Date",
                textAlign: 'center',
                width: 120
            }, {
                sortable: true,
                field: "update_date",
                title: "Update Date",
                textAlign: 'center',
                width: 120
            }, {
                sortable: true,
                field: "site_url",
                title: "Website URL",
                width: 260
            }, {
                sortable: true,
                field: "package",
                title: "Package",
                width: 220
            }, {
                sortable: true,
                field: "current_status",
                title: "Current Status",
                textAlign: 'center',
                width: 130,
                // callback function support for column rendering
                template: function (row) {
                    var currStatus = {
                        0: {'class': 'm-badge--warning', "text": "Expired"},
                        1: {'class': 'm-badge--danger', "text": "Failed"},
                        2: {'class': 'm-badge--danger', "text": "Banned"},
                        3: {'class': 'm-badge--brand', "text": "In Work"},
                        4: {'class': 'm-badge--success', "text": "Completed"}
                    };
                    return '<span class="m-badge ' + currStatus[row.current_status].class + ' m-badge--wide">' + currStatus[row.current_status].text + '</span>';
                }
            }, {
                sortable: false,
                field: "action",
                title: "Action",
                textAlign: 'center',
                width: 60,
                template: function (row) {
                    return '<a href="' + row.action + '" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View Order"><i class="la la-eye"></i></a>';
                }
            }]
        });

        var query = datatable.getDataSourceQuery();

        $('#m_form_cw_orders_active_search').on('keyup', function (e) {
            datatable.search($(this).val().toLowerCase());
        }).val(query.generalSearch);

    };

    return {
        //== Public functions
        init: function () {
            // init orders
            cwProjects();
        }
    };
}();

var DatatableCWProjectsComplete = function () {
    //== Private functions

    // cwProjects initializer
    var cwProjects = function () {

        var listData = [{
            "start_date": "2017/06/14",
            "update_date": "2017/07/21",
            "site_url": "http://sun.com/ut/volutpat/sapien/arcu.png",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 4,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/09/23",
            "update_date": "2017/08/14",
            "site_url": "https://kickstarter.com/vestibulum/velit/id/pretium/iaculis/diam/erat.png",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 4,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/01/21",
            "update_date": "2017/03/19",
            "site_url": "http://smugmug.com/aliquam/quis/turpis.xml",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 4,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/01/06",
            "update_date": "2016/10/06",
            "site_url": "http://ning.com/blandit/ultrices/enim/lorem/ipsum/dolor.jpg",
            "package": "CrorkService Summer Monthly $158/month",
            "current_status": 4,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2017/03/31",
            "update_date": "2017/04/17",
            "site_url": "https://woothemes.com/lorem/vitae.html",
            "package": "CrorkService Winter Monthly $258/month",
            "current_status": 4,
            "action": "cw-order-view.html"
        }, {
            "start_date": "2016/12/26",
            "update_date": "2017/08/12",
            "site_url": "https://netvibes.com/amet/erat/nulla/tempus/vivamus/in.aspx",
            "package": "CrorkService Autumn $258/month",
            "current_status": 4,
            "action": "cw-order-view.html"
        }];

        var datatable = $('#m_datatable_cw_orders_complete').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: listData,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-cw-orders-complete', // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: null, // datatable's body's fixed height
                footer: false // display/hide footer
            },

            // column sorting(refer to Kendo UI)
            sortable: true,

            // column based filtering(refer to Kendo UI)
            filterable: false,

            pagination: true,

            // columns definition
            columns: [{
                sortable: true,
                field: "start_date",
                title: "Start Date",
                textAlign: 'center',
                width: 120
            }, {
                sortable: true,
                field: "update_date",
                title: "Update Date",
                textAlign: 'center',
                width: 120
            }, {
                sortable: true,
                field: "site_url",
                title: "Website URL",
                width: 260
            }, {
                sortable: true,
                field: "package",
                title: "Package",
                width: 220
            }, {
                sortable: true,
                field: "current_status",
                title: "Current Status",
                textAlign: 'center',
                width: 130,
                // callback function support for column rendering
                template: function (row) {
                    var currStatus = {
                        0: {'class': 'm-badge--warning', "text": "Expired"},
                        1: {'class': 'm-badge--danger', "text": "Failed"},
                        2: {'class': 'm-badge--danger', "text": "Banned"},
                        3: {'class': 'm-badge--brand', "text": "In Work"},
                        4: {'class': 'm-badge--success', "text": "Completed"}
                    };
                    return '<span class="m-badge ' + currStatus[row.current_status].class + ' m-badge--wide">' + currStatus[row.current_status].text + '</span>';
                }
            }, {
                sortable: false,
                field: "action",
                title: "Action",
                textAlign: 'center',
                width: 60,
                template: function (row) {
                    return '<a href="' + row.action + '" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View Order"><i class="la la-eye"></i></a>';
                }
            }]
        });

        var query = datatable.getDataSourceQuery();

        $('#m_form_cw_orders_complete_search').on('keyup', function (e) {
            datatable.search($(this).val().toLowerCase());
        }).val(query.generalSearch);

    };

    return {
        //== Public functions
        init: function () {
            // init orders
            cwProjects();
        }
    };
}();

$(document).ready(function () {
    DatatableCWProjectsActive.init();
    DatatableCWProjectsComplete.init();
});