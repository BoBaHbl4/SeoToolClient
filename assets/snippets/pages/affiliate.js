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

        var affEventsListData = JSON.parse('[{"_id":795,"action":"Activated","lead_id":1248,"date":"2016/10/30","selected_plan":"SEO Studio","revenue":167,"revenue_status":1},{"_id":529,"action":"Deactivated","lead_id":6940,"date":"2015/12/13","selected_plan":"Starter","revenue":176,"revenue_status":2},{"_id":639,"action":"Activated","lead_id":8509,"date":"2017/05/01","selected_plan":"SEO Studio","revenue":69,"revenue_status":4},{"_id":870,"action":"Deactivated","lead_id":3006,"date":"2014/05/05","selected_plan":"-","revenue":191,"revenue_status":2},{"_id":1,"action":"Trial","lead_id":7031,"date":"2015/08/13","selected_plan":"-","revenue":28,"revenue_status":3},{"_id":499,"action":"Trial","lead_id":4105,"date":"2015/05/24","selected_plan":"Starter","revenue":164,"revenue_status":2},{"_id":493,"action":"Rebil","lead_id":6641,"date":"2015/08/28","selected_plan":"-","revenue":6,"revenue_status":2},{"_id":965,"action":"Deactivated","lead_id":3051,"date":"2016/03/20","selected_plan":"Starter","revenue":118,"revenue_status":4},{"_id":436,"action":"Deactivated","lead_id":7777,"date":"2016/02/29","selected_plan":"Advanced","revenue":71,"revenue_status":1},{"_id":727,"action":"Deactivated","lead_id":9167,"date":"2014/03/02","selected_plan":"Advanced","revenue":156,"revenue_status":3},{"_id":320,"action":"Deactivated","lead_id":4749,"date":"2014/08/01","selected_plan":"Starter","revenue":41,"revenue_status":3},{"_id":350,"action":"Activated","lead_id":3859,"date":"2014/07/02","selected_plan":"Advanced","revenue":122,"revenue_status":3},{"_id":16,"action":"Activated","lead_id":7596,"date":"2015/06/24","selected_plan":"Starter","revenue":174,"revenue_status":3},{"_id":103,"action":"Rebil","lead_id":1020,"date":"2017/09/08","selected_plan":"SEO Studio","revenue":88,"revenue_status":3},{"_id":215,"action":"Deactivated","lead_id":9954,"date":"2015/08/20","selected_plan":"Starter","revenue":160,"revenue_status":3},{"_id":91,"action":"Deactivated","lead_id":6616,"date":"2015/08/23","selected_plan":"Starter","revenue":142,"revenue_status":1},{"_id":524,"action":"Trial","lead_id":6892,"date":"2017/01/12","selected_plan":"SEO Studio","revenue":146,"revenue_status":3},{"_id":205,"action":"Deactivated","lead_id":4905,"date":"2014/12/29","selected_plan":"Starter","revenue":124,"revenue_status":4},{"_id":631,"action":"Rebil","lead_id":6044,"date":"2016/02/04","selected_plan":"-","revenue":38,"revenue_status":3},{"_id":241,"action":"Activated","lead_id":6946,"date":"2015/08/13","selected_plan":"SEO Studio","revenue":8,"revenue_status":4}]');

        var datatable = $('#m_datatable_affevents').mDatatable({
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
                width: 150
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

        var query = datatable.getDataSourceQuery();

        $('#m_form_events_search').on('keyup', function (e) {
            datatable.search($(this).val().toLowerCase());
        }).val(query.generalSearch);

    };

    return {
        //== Public functions
        init: function () {
            // init tickets
            affEvents();
        }
    };
}();

$(document).ready(function () {
    DatatableAffEvents.init();

    // Affiliate Data Tables Switcher
    $('#affiliateDataSwitcher button.btn').on('click', function () {
        var selectedEl = $(this).attr('data-name');

        $('.m-portlet-aff-datatables').fadeOut(150);
        $('.m-portlet-aff-datatables[data-name="' + selectedEl + '"]').fadeIn(150);

        $(this).siblings('.btn').removeClass('btn-success');
        $(this).addClass('btn-success');
    });

});