var DatatableTickets = function () {
    //== Private functions

    // demo initializer
    var tickets = function () {

        var ticketsListData = JSON.parse('[{"Department":"SocialJuice","Subject":"Laborum amet eu sit irure ex amet mollit laboris consectetur","Status":3,"LastUpdated":"2015/04/09","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Aliquip non eu non culpa.","Status":3,"LastUpdated":"2015/11/20","Actions":"ticket_view.html"},{"Department":"SocialJuice","Subject":"Nisi eiusmod magna Lorem consequat aute","Status":3,"LastUpdated":"2016/05/09","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Aute labore est ","Status":1,"LastUpdated":"2014/07/22","Actions":"ticket_view.html"},{"Department":"SocialJuice","Subject":"Non ut aliqua reprehenderit nulla","Status":3,"LastUpdated":"2017/04/02","Actions":"ticket_view.html"},{"Department":"SocialJuice","Subject":"Veniam nisi","Status":3,"LastUpdated":"2014/02/20","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Cupidatat laboris dolore dolor officia ","Status":3,"LastUpdated":"2014/10/26","Actions":"ticket_view.html"},{"Department":"SocialJuice","Subject":"Id excepteur est laboris non. Laborum pariatur commodo velit consectetur duis.","Status":1,"LastUpdated":"2016/06/04","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Incididunt nostrud reprehenderit fugiat dolor veniam","Status":2,"LastUpdated":"2015/12/27","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Reprehenderit reprehenderit occaecat non magna.","Status":2,"LastUpdated":"2016/08/24","Actions":"ticket_view.html"},{"Department":"Social Signal","Subject":"Ut occaecat sit cupidatat incididunt aliqua","Status":3,"LastUpdated":"2017/03/18","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Ipsum esse aliquip cupidatat reprehenderit irure.","Status":3,"LastUpdated":"2017/02/03","Actions":"ticket_view.html"},{"Department":"Social Signal","Subject":"Enim eiusmod ipsum exercitation excepteur culpa do labore id incididunt proident consequat id.","Status":1,"LastUpdated":"2016/03/03","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Esse ex voluptate Lorem","Status":2,"LastUpdated":"2016/07/05","Actions":"ticket_view.html"},{"Department":"SocialJuice","Subject":"Aliqua laboris velit","Status":1,"LastUpdated":"2016/10/12","Actions":"ticket_view.html"},{"Department":"Content Writing","Subject":"Duis quis et incididunt ipsum dolor. Ullamco mollit incididunt qui sint ","Status":2,"LastUpdated":"2014/11/25","Actions":"ticket_view.html"},{"Department":"Social Signal","Subject":"Culpa exercitation.","Status":1,"LastUpdated":"2017/08/12","Actions":"ticket_view.html"},{"Department":"SocialJuice","Subject":"Adipisicing anim id laborum excepteur.","Status":1,"LastUpdated":"2015/09/19","Actions":"ticket_view.html"},{"Department":"Social Signal","Subject":"Cupidatat Lorem exercitation eiusmod exercitation aliquip consequat.","Status":3,"LastUpdated":"2016/08/03","Actions":"ticket_view.html"}]');

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
                field: "Department",
                title: "Department",
                width: 110
            }, {
                field: "Subject",
                title: "Subject",
                width: 220
            }, {
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
                    return '<a href="' + row.Actions + '" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View"><i class="la la-eye"></i></a>';
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

jQuery(document).ready(function () {
    DatatableTickets.init();
    $('#m_datatable table thead th:last-child').removeClass('m-datatable__cell--sort');
});