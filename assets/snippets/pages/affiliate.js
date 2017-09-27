// Check amChart documentation
// https://www.amcharts.com/

// Chart data
var chartData = [
    {
        "date": "2012-07-27",
        "new users": 252,
        "rebills": 450
    },
    {
        "date": "2012-07-28",
        "new users": 232,
        "rebills": 198
    },
    {
        "date": "2012-07-29",
        "new users": 132,
        "rebills": 80
    },
    {
        "date": "2012-07-30",
        "new users": 18,
        "rebills": 150
    },
    {
        "date": "2012-07-31",
        "new users": 56,
        "rebills": 200
    },
    {
        "date": "2012-08-01",
        "new users": 580,
        "rebills": 358
    },
    {
        "date": "2012-08-02",
        "new users": 235,
        "rebills": 56
    },
    {
        "date": "2012-08-03",
        "new users": 36,
        "rebills": 89
    },
    {
        "date": "2012-08-04",
        "new users": 36,
        "rebills": 89
    },
    {
        "date": "2012-08-05",
        "new users": 105,
        "rebills": 698
    },
    {
        "date": "2012-08-06",
        "new users": 326,
        "rebills": 389
    },
    {
        "date": "2012-08-07",
        "new users": 98,
        "rebills": 891
    },
    {
        "date": "2012-08-08",
        "new users": 326,
        "rebills": 587
    },
    {
        "date": "2012-08-09",
        "new users": 136,
        "rebills": 358
    },
    {
        "date": "2012-08-10",
        "new users": 236,
        "rebills": 829
    }
];

// Chart init
AmCharts.makeChart( "chartSample1", {
    "type": "serial",
    "theme": "light",
    "dataProvider": chartData,
    "gridAboveGraphs": true,
    "startDuration": 1,
    "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.3,
        "dashLength": 0
    } ],
    "graphs": [ {
        "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:18px;'>[[value]]</span></span>",
        "fillAlphas": 0.7,
        "lineAlpha": 0.2,
        "type": "column",
        "title": "New users",
        "valueField": "new users"
    },{
        "id": "graph2",
        "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:18px;'>[[value]]</span> [[additional]]</span>",
        "bullet": "round",
        "lineThickness": 3,
        "bulletSize": 7,
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 3,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Rebills",
        "valueField": "rebills",
        "dashLengthField": "dashLengthLine"
    } ],
    "chartScrollbar": {
        "graph": "g2",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 30,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g2",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    }
} );

var DatatableAffEvents = function () {
    //== Private functions

    // demo initializer
    var affEvents = function () {

        var affEventsListData = [
            {
                "_id": "795",
                "action": "Activated",
                "lead_id": "1248",
                "date": "2016/10/30",
                "selected_plan": "SEO Studio",
                "revenue": "167",
                "revenue_status": "1"
            },
            {
                "_id": "529",
                "action": "Deactivated",
                "lead_id": "6940",
                "date": "2015/12/13",
                "selected_plan": "Starter",
                "revenue": "176",
                "revenue_status": "2"
            },
            {
                "_id": "639",
                "action": "Activated",
                "lead_id": "8509",
                "date": "2017/05/01",
                "selected_plan": "SEO Studio",
                "revenue": "69",
                "revenue_status": "4"
            },
            {
                "_id": "870",
                "action": "Deactivated",
                "lead_id": "3006",
                "date": "2014/05/05",
                "selected_plan": "-",
                "revenue": "191",
                "revenue_status": "2"
            },
            {
                "_id": "1",
                "action": "Trial",
                "lead_id": "7031",
                "date": "2015/08/13",
                "selected_plan": "-",
                "revenue": "28",
                "revenue_status": "3"
            },
            {
                "_id": "499",
                "action": "Trial",
                "lead_id": "4105",
                "date": "2015/05/24",
                "selected_plan": "Starter",
                "revenue": "164",
                "revenue_status": "2"
            },
            {
                "_id": "493",
                "action": "Rebil",
                "lead_id": "6641",
                "date": "2015/08/28",
                "selected_plan": "-",
                "revenue": "6",
                "revenue_status": "2"
            },
            {
                "_id": "965",
                "action": "Deactivated",
                "lead_id": "3051",
                "date": "2016/03/20",
                "selected_plan": "Starter",
                "revenue": "118",
                "revenue_status": "4"
            },
            {
                "_id": "436",
                "action": "Deactivated",
                "lead_id": "7777",
                "date": "2016/02/29",
                "selected_plan": "Advanced",
                "revenue": "71",
                "revenue_status": "1"
            },
            {
                "_id": "727",
                "action": "Deactivated",
                "lead_id": "9167",
                "date": "2014/03/02",
                "selected_plan": "Advanced",
                "revenue": "156",
                "revenue_status": "3"
            },
            {
                "_id": "320",
                "action": "Deactivated",
                "lead_id": "4749",
                "date": "2014/08/01",
                "selected_plan": "Starter",
                "revenue": "41",
                "revenue_status": "3"
            },
            {
                "_id": "350",
                "action": "Activated",
                "lead_id": "3859",
                "date": "2014/07/02",
                "selected_plan": "Advanced",
                "revenue": "122",
                "revenue_status": "3"
            },
            {
                "_id": "16",
                "action": "Activated",
                "lead_id": "7596",
                "date": "2015/06/24",
                "selected_plan": "Starter",
                "revenue": "174",
                "revenue_status": "3"
            },
            {
                "_id": "103",
                "action": "Rebil",
                "lead_id": "1020",
                "date": "2017/09/08",
                "selected_plan": "SEO Studio",
                "revenue": "88",
                "revenue_status": "3"
            },
            {
                "_id": "215",
                "action": "Deactivated",
                "lead_id": "9954",
                "date": "2015/08/20",
                "selected_plan": "Starter",
                "revenue": "160",
                "revenue_status": "3"
            },
            {
                "_id": "91",
                "action": "Deactivated",
                "lead_id": "6616",
                "date": "2015/08/23",
                "selected_plan": "Starter",
                "revenue": "142",
                "revenue_status": "1"
            },
            {
                "_id": "524",
                "action": "Trial",
                "lead_id": "6892",
                "date": "2017/01/12",
                "selected_plan": "SEO Studio",
                "revenue": "146",
                "revenue_status": "3"
            },
            {
                "_id": "205",
                "action": "Deactivated",
                "lead_id": "4905",
                "date": "2014/12/29",
                "selected_plan": "Starter",
                "revenue": "124",
                "revenue_status": "4"
            },
            {
                "_id": "631",
                "action": "Rebil",
                "lead_id": "6044",
                "date": "2016/02/04",
                "selected_plan": "-",
                "revenue": "38",
                "revenue_status": "3"
            },
            {
                "_id": "241",
                "action": "Activated",
                "lead_id": "6946",
                "date": "2015/08/13",
                "selected_plan": "SEO Studio",
                "revenue": "8",
                "revenue_status": "4"
            }
        ];

        var datatableEvents = $('#m_datatable_affevents').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: affEventsListData,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-aff-events', // custom wrapper class
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: null, // datatable's body's fixed height
                footer: false // display/hide footer
            },

            // column sorting(refer to Kendo UI)
            sortable: true,

            // column based filtering(refer to Kendo UI)
            filterable: false,

            pagination: true,

            // inline and bactch editing(cooming soon)
            // editable: false,

            // columns definition
            columns: [{
                sortable: true,
                field: "_id",
                title: "ID",
                textAlign: 'right',
                width: 40
            }, {
                sortable: true,
                field: "action",
                title: "Action",
                width: 150
            }, {
                sortable: true,
                field: "lead_id",
                title: "lead_id",
                textAlign: 'right',
                width: 90
            }, {
                sortable: true,
                field: "date",
                title: "Date",
                textAlign: 'center',
                width: 180
            }, {
                sortable: true,
                field: "selected_plan",
                title: "Selected Plan",
                width: 150
            }, {
                sortable: true,
                field: "revenue",
                title: "Revenue",
                textAlign: 'right',
                width: 150
            }, {
                sortable: true,
                field: "revenue_status",
                title: "Status Revenue",
                textAlign: 'center',
                width: 220,
                // callback function support for column rendering
                template: function (row) {
                    var rStatus = {
                        1: {'title': 'Opened', 'class': 'm-badge--brand'},
                        2: {'title': 'on Hold', 'class': ' m-badge--warning'},
                        3: {'title': 'Canceled', 'class': ' m-badge--danger'},
                        4: {'title': 'Approved', 'class': ' m-badge--success'}
                    };
                    return '<span class="m-badge ' + rStatus[row.revenue_status].class + ' m-badge--wide">' + rStatus[row.revenue_status].title + '</span>';
                }
            }]
        });

        var queryEvents = datatableEvents.getDataSourceQuery();

        $('#m_form_events_search').on('keyup', function (e) {
            datatableEvents.search($(this).val().toLowerCase());
        }).val(queryEvents.generalSearch);

        $('#m_form_events_status').on('change', function () {
            datatableEvents.search($(this).val(), 'revenue_status');
        }).val(typeof queryEvents.Status !== 'undefined' ? queryEvents.Status : '');

        $('#m_form_events_status').selectpicker();

    };

    return {
        //== Public functions
        init: function () {
            // init events
            affEvents();
        }
    };
}();

var DatatableAffPayHistory = function () {
    //== Private functions

    // demo initializer
    var affPayHistory = function () {

        var affPayHistoryListData = [
            {
                "payment_id": "0",
                "date": "2017/06/23",
                "amount": "$236"
            },
            {
                "payment_id": "1",
                "date": "2014/08/23",
                "amount": "$234"
            },
            {
                "payment_id": "2",
                "date": "2015/08/13",
                "amount": "$362"
            },
            {
                "payment_id": "3",
                "date": "2016/03/30",
                "amount": "$281"
            },
            {
                "payment_id": "4",
                "date": "2016/11/09",
                "amount": "$70"
            },
            {
                "payment_id": "5",
                "date": "2014/11/23",
                "amount": "$306"
            },
            {
                "payment_id": "6",
                "date": "2017/07/25",
                "amount": "$168"
            },
            {
                "payment_id": "7",
                "date": "2017/02/12",
                "amount": "$147"
            },
            {
                "payment_id": "8",
                "date": "2015/08/30",
                "amount": "$71"
            },
            {
                "payment_id": "9",
                "date": "2014/09/07",
                "amount": "$346"
            },
            {
                "payment_id": "10",
                "date": "2014/08/28",
                "amount": "$165"
            },
            {
                "payment_id": "11",
                "date": "2016/11/04",
                "amount": "$62"
            },
            {
                "payment_id": "12",
                "date": "2014/09/22",
                "amount": "$333"
            },
            {
                "payment_id": "13",
                "date": "2014/12/01",
                "amount": "$361"
            },
            {
                "payment_id": "14",
                "date": "2014/05/12",
                "amount": "$265"
            },
            {
                "payment_id": "15",
                "date": "2016/11/25",
                "amount": "$181"
            },
            {
                "payment_id": "16",
                "date": "2014/08/02",
                "amount": "$371"
            },
            {
                "payment_id": "17",
                "date": "2014/08/21",
                "amount": "$48"
            },
            {
                "payment_id": "18",
                "date": "2015/09/01",
                "amount": "$117"
            },
            {
                "payment_id": "19",
                "date": "2016/07/17",
                "amount": "$209"
            }
        ];

        var datatablePayHistory = $('#m_datatable_aff_pay_history').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: affPayHistoryListData,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-aff-pay-history', // custom wrapper class
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: null, // datatable's body's fixed height
                footer: false // display/hide footer
            },

            // column sorting(refer to Kendo UI)
            sortable: true,

            // column based filtering(refer to Kendo UI)
            filterable: false,

            pagination: true,

            // inline and bactch editing(cooming soon)
            // editable: false,

            // columns definition
            columns: [{
                sortable: true,
                field: "payment_id",
                title: "Payment ID",
                textAlign: 'right',
                width: 110
            }, {
                sortable: true,
                field: "date",
                title: "Date",
                textAlign: 'center',
                width: 300
            }, {
                sortable: true,
                field: "amount",
                title: "Amount",
                textAlign: 'right',
                width: 120
            }]
        });

        var queryPayHistory = datatablePayHistory.getDataSourceQuery();

        $('#m_form_pay_history_search').on('keyup', function (e) {
            datatablePayHistory.search($(this).val().toLowerCase());
        }).val(queryPayHistory.generalSearch);

    };

    return {
        //== Public functions
        init: function () {
            // init pay history
            affPayHistory();
        }
    };
}();

var DatatableAffLeads = function () {
    //== Private functions

    // demo initializer
    var affLeads = function () {

        var affLeadsListData = [
            {
                "_id": "0",
                "reg_date": "2014/01/20",
                "sel_plan": "—",
                "total_rebils": "15",
                "on_hold": "53",
                "total_revenue": "$3359"
            },
            {
                "_id": "1",
                "reg_date": "2017/06/09",
                "sel_plan": "SEO Studio",
                "total_rebils": "4",
                "on_hold": "68",
                "total_revenue": "$5716"
            },
            {
                "_id": "2",
                "reg_date": "2015/08/28",
                "sel_plan": "—",
                "total_rebils": "30",
                "on_hold": "66",
                "total_revenue": "$3162"
            },
            {
                "_id": "3",
                "reg_date": "2016/03/03",
                "sel_plan": "Advanced",
                "total_rebils": "14",
                "on_hold": "43",
                "total_revenue": "$7593"
            },
            {
                "_id": "4",
                "reg_date": "2016/02/12",
                "sel_plan": "Advanced",
                "total_rebils": "27",
                "on_hold": "68",
                "total_revenue": "$8663"
            },
            {
                "_id": "5",
                "reg_date": "2017/03/20",
                "sel_plan": "—",
                "total_rebils": "20",
                "on_hold": "4",
                "total_revenue": "$1475"
            },
            {
                "_id": "6",
                "reg_date": "2016/11/22",
                "sel_plan": "SEO Studio",
                "total_rebils": "11",
                "on_hold": "80",
                "total_revenue": "$395"
            },
            {
                "_id": "7",
                "reg_date": "2017/08/28",
                "sel_plan": "Advanced",
                "total_rebils": "19",
                "on_hold": "48",
                "total_revenue": "$8417"
            },
            {
                "_id": "8",
                "reg_date": "2015/01/11",
                "sel_plan": "SEO Studio",
                "total_rebils": "29",
                "on_hold": "15",
                "total_revenue": "$4947"
            },
            {
                "_id": "9",
                "reg_date": "2015/07/09",
                "sel_plan": "Starter",
                "total_rebils": "16",
                "on_hold": "21",
                "total_revenue": "$7170"
            },
            {
                "_id": "10",
                "reg_date": "2014/03/16",
                "sel_plan": "Advanced",
                "total_rebils": "11",
                "on_hold": "30",
                "total_revenue": "$4167"
            },
            {
                "_id": "11",
                "reg_date": "2014/04/15",
                "sel_plan": "Advanced",
                "total_rebils": "16",
                "on_hold": "18",
                "total_revenue": "$6336"
            },
            {
                "_id": "12",
                "reg_date": "2015/11/20",
                "sel_plan": "Starter",
                "total_rebils": "22",
                "on_hold": "31",
                "total_revenue": "$552"
            },
            {
                "_id": "13",
                "reg_date": "2015/10/15",
                "sel_plan": "Starter",
                "total_rebils": "8",
                "on_hold": "13",
                "total_revenue": "$8936"
            },
            {
                "_id": "14",
                "reg_date": "2015/08/16",
                "sel_plan": "Starter",
                "total_rebils": "18",
                "on_hold": "72",
                "total_revenue": "$3591"
            },
            {
                "_id": "15",
                "reg_date": "2015/07/12",
                "sel_plan": "SEO Studio",
                "total_rebils": "28",
                "on_hold": "0",
                "total_revenue": "$5670"
            },
            {
                "_id": "16",
                "reg_date": "2014/10/05",
                "sel_plan": "Advanced",
                "total_rebils": "27",
                "on_hold": "69",
                "total_revenue": "$5548"
            },
            {
                "_id": "17",
                "reg_date": "2017/07/13",
                "sel_plan": "—",
                "total_rebils": "16",
                "on_hold": "75",
                "total_revenue": "$3088"
            },
            {
                "_id": "18",
                "reg_date": "2017/05/31",
                "sel_plan": "—",
                "total_rebils": "18",
                "on_hold": "71",
                "total_revenue": "$2091"
            },
            {
                "_id": "19",
                "reg_date": "2015/01/11",
                "sel_plan": "SEO Studio",
                "total_rebils": "30",
                "on_hold": "12",
                "total_revenue": "$8890"
            }
        ];

        var datatableLeads = $('#m_datatable_aff_leads').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: affLeadsListData,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-aff-leads', // custom wrapper class
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: null, // datatable's body's fixed height
                footer: false // display/hide footer
            },

            // column sorting(refer to Kendo UI)
            sortable: true,

            // column based filtering(refer to Kendo UI)
            filterable: false,

            pagination: true,

            // inline and bactch editing(cooming soon)
            // editable: false,

            // columns definition
            columns: [{
                sortable: true,
                field: "_id",
                title: "ID",
                textAlign: 'right',
                width: 60
            }, {
                sortable: true,
                field: "reg_date",
                title: "Reg.Date",
                textAlign: 'center',
                width: 200
            }, {
                sortable: true,
                field: "sel_plan",
                title: "Selected Plan",
                textAlign: 'center',
                width: 140
            }, {
                sortable: true,
                field: "total_rebils",
                title: "Total Rebils",
                textAlign: 'right',
                width: 90
            }, {
                sortable: true,
                field: "on_hold",
                title: "On Hold",
                textAlign: 'right',
                width: 90
            }, {
                sortable: true,
                field: "total_revenue",
                title: "Total Revenue",
                textAlign: 'right',
                width: 180
            }]
        });

        var queryLeads = datatableLeads.getDataSourceQuery();

        $('#m_form_leads_search').on('keyup', function (e) {
            datatableLeads.search($(this).val().toLowerCase());
        }).val(queryLeads.generalSearch);

    };

    return {
        //== Public functions
        init: function () {
            // init leads
            affLeads();
        }
    };
}();

$(document).ready(function () {
    DatatableAffEvents.init();
    DatatableAffPayHistory.init();
    DatatableAffLeads.init();

    function dateTablesSwitcher (el) {
        var selectedElName = el.attr('data-name');

        $('.m-portlet-aff-datatables').fadeOut(150);
        $('.m-portlet-aff-datatables[data-name="' + selectedElName + '"]').fadeIn(150);

        el.siblings('.btn-success').removeClass('btn-success').addClass('btn-secondary');
        el.addClass('btn-success').removeClass('btn-secondary');
    }

    dateTablesSwitcher($('#affiliateDataSwitcher button.btn.btn-success'));

    // Affiliate Data Tables Switcher
    $('#affiliateDataSwitcher button.btn').on('click', function () {
        dateTablesSwitcher($(this));
    });

});