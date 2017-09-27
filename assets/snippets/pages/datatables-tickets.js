var DatatableTickets = function () {
    //== Private functions

    // demo initializer
    var tickets = function () {

        var ticketsListData = [
            {
                "Department": "Social Signals",
                "Subject": "Laborum amet eu sit irure ex amet mollit laboris consectetur",
                "Status": 3,
                "LastUpdated": "2015/04/09",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Aliquip non eu non culpa.",
                "Status": 3,
                "LastUpdated": "2015/11/20",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "SocialJuice",
                "Subject": "Nisi eiusmod magna Lorem consequat aute",
                "Status": 3,
                "LastUpdated": "2016/05/09",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Aute labore est ",
                "Status": 1,
                "LastUpdated": "2014/07/22",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "SocialJuice",
                "Subject": "Non ut aliqua reprehenderit nulla",
                "Status": 3,
                "LastUpdated": "2017/04/02",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "SocialJuice",
                "Subject": "Veniam nisi",
                "Status": 3,
                "LastUpdated": "2014/02/20",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Cupidatat laboris dolore dolor officia ",
                "Status": 3,
                "LastUpdated": "2014/10/26",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "SocialJuice",
                "Subject": "Id excepteur est laboris non. Laborum pariatur commodo velit consectetur duis.",
                "Status": 1,
                "LastUpdated": "2016/06/04",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Incididunt nostrud reprehenderit fugiat dolor veniam",
                "Status": 2,
                "LastUpdated": "2015/12/27",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Reprehenderit reprehenderit occaecat non magna.",
                "Status": 2,
                "LastUpdated": "2016/08/24",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Social Signals",
                "Subject": "Ut occaecat sit cupidatat incididunt aliqua",
                "Status": 3,
                "LastUpdated": "2017/03/18",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Ipsum esse aliquip cupidatat reprehenderit irure.",
                "Status": 3,
                "LastUpdated": "2017/02/03",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Social Signals",
                "Subject": "Enim eiusmod ipsum exercitation excepteur culpa do labore id incididunt proident consequat id.",
                "Status": 1,
                "LastUpdated": "2016/03/03",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Esse ex voluptate Lorem",
                "Status": 2,
                "LastUpdated": "2016/07/05",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "SocialJuice",
                "Subject": "Aliqua laboris velit",
                "Status": 1,
                "LastUpdated": "2016/10/12",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Content Writing",
                "Subject": "Duis quis et incididunt ipsum dolor. Ullamco mollit incididunt qui sint ",
                "Status": 2,
                "LastUpdated": "2014/11/25",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Social Signals",
                "Subject": "Culpa exercitation.",
                "Status": 1,
                "LastUpdated": "2017/08/12",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "SocialJuice",
                "Subject": "Adipisicing anim id laborum excepteur.",
                "Status": 1,
                "LastUpdated": "2015/09/19",
                "Actions": "support-ticket-view.html"
            },
            {
                "Department": "Social Signals",
                "Subject": "Cupidatat Lorem exercitation eiusmod exercitation aliquip consequat.",
                "Status": 3,
                "LastUpdated": "2016/08/03",
                "Actions": "support-ticket-view.html"
            }
        ];

        var datatable = $('#m_datatable').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: ticketsListData,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-tickets', // custom wrapper class
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
                sortable: false,
                field: "Department",
                title: "Department",
                width: 110
            }, {
                sortable: false,
                field: "Subject",
                title: "Subject",
                width: 220
            }, {
                sortable: true,
                field: "Status",
                title: "Status",
                width: 80,
                // callback function support for column rendering
                template: function (row) {
                    var status = {
                        1: {'title': 'Opened', 'class': 'm-badge--brand'},
                        2: {'title': 'Answered', 'class': ' m-badge--success'},
                        3: {'title': 'Closed', 'class': ' m-badge--danger'}
                    };
                    return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
                }
            }, {
                sortable: true,
                field: "LastUpdated",
                title: "Last Updated",
                textAlign: 'center',
                width: 120
            }, {
                sortable: false,
                field: "Actions",
                textAlign: 'center',
                width: 60,
                title: "Actions",
                template: function (row) {
                    return '<a href="' + row.Actions + '" class="m-portlet__nav-link btn m-btn m-btn--hover-success m-btn--icon m-btn--icon-only m-btn--pill" title="View Ticket"><i class="la la-eye"></i></a>';
                }
            }]
        });

        var query = datatable.getDataSourceQuery();

        $('#m_form_search').on('keyup', function (e) {
            datatable.search($(this).val().toLowerCase());
        }).val(query.generalSearch);

        $('#m_form_status').on('change', function () {
            datatable.search($(this).val(), 'Status');
        }).val(typeof query.Status !== 'undefined' ? query.Status : '');

        $('#m_form_type').on('change', function () {
            datatable.search($(this).val(), 'Department');
        }).val(typeof query.Department !== 'undefined' ? query.Department : '');

        $('#m_form_status, #m_form_type').selectpicker();

    };

    return {
        //== Public functions
        init: function () {
            // init tickets
            tickets();
        }
    };
}();

$(document).ready(function () {
    DatatableTickets.init();
});