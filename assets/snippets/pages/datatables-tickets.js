var DatatableTickets = function () {
    //== Private functions

    // demo initializer
    var tickets = function () {

        var dataJSONArray = JSON.parse('[{"SubjectID":0,"Department":"SocialJuice","Subject":"Laborum amet eu sit irure ex amet mollit laboris consectetur deserunt mollit cillum deserunt. Non aute sunt culpa labore. Tempor elit laborum ex amet ipsum ea Lorem ex culpa ut ex aute sint.","Status":3,"LastUpdated":"2015/04/09"},{"SubjectID":1,"Department":"Content Writing","Subject":"Aliquip non eu non culpa nulla voluptate mollit. Ullamco et nostrud laborum commodo exercitation ad non eu. Fugiat non commodo exercitation pariatur elit dolor fugiat proident magna duis qui dolor ullamco.","Status":3,"LastUpdated":"2015/11/20"},{"SubjectID":2,"Department":"SocialJuice","Subject":"Nisi eiusmod magna Lorem consequat aute ad in labore laboris nisi sint pariatur. Ipsum duis amet velit consectetur et est aute tempor dolore eu proident consequat quis. Magna ut aliqua qui id.","Status":3,"LastUpdated":"2016/05/09"},{"SubjectID":3,"Department":"Content Writing","Subject":"Aute labore est do fugiat. Non duis magna sunt ullamco. Exercitation sit enim ipsum labore sint dolore commodo laborum non ex labore.","Status":1,"LastUpdated":"2014/07/22"},{"SubjectID":4,"Department":"SocialJuice","Subject":"Non ut aliqua reprehenderit nulla tempor nostrud quis velit incididunt aliqua consectetur excepteur culpa. Mollit laborum do magna officia eu qui laboris sint occaecat officia. Id commodo quis laborum culpa.","Status":3,"LastUpdated":"2017/04/02"},{"SubjectID":5,"Department":"SocialJuice","Subject":"Veniam nisi non esse ullamco minim pariatur. Duis id anim esse nostrud quis dolore. Ut quis consectetur est tempor minim ullamco.","Status":3,"LastUpdated":"2014/02/20"},{"SubjectID":6,"Department":"Content Writing","Subject":"Cupidatat laboris dolore dolor officia officia eiusmod aliquip voluptate commodo eu deserunt. Eu magna est ipsum proident amet proident sunt do sit tempor pariatur. Enim ea occaecat pariatur qui cillum laborum velit.","Status":3,"LastUpdated":"2014/10/26"},{"SubjectID":7,"Department":"SocialJuice","Subject":"Id excepteur est laboris non. Laborum pariatur commodo velit consectetur duis. Incididunt aliquip excepteur aliqua Lorem ut enim pariatur sit excepteur aliquip aliquip pariatur aliqua.","Status":1,"LastUpdated":"2016/06/04"},{"SubjectID":8,"Department":"Content Writing","Subject":"Incididunt nostrud reprehenderit fugiat dolor veniam. Consectetur quis sunt incididunt sit eu tempor et officia. Deserunt elit in qui aute consequat nulla dolor.","Status":2,"LastUpdated":"2015/12/27"},{"SubjectID":9,"Department":"Content Writing","Subject":"Reprehenderit reprehenderit occaecat non magna culpa magna qui ad adipisicing ea incididunt eu. Labore velit et qui esse velit. Ipsum ut sit minim laboris exercitation deserunt voluptate cillum nostrud.","Status":2,"LastUpdated":"2016/08/24"},{"SubjectID":10,"Department":"Social Signal","Subject":"Ut occaecat sit cupidatat incididunt aliqua. Sit Lorem eu amet aliquip eiusmod nisi magna aliquip ut occaecat dolor duis velit tempor. Commodo adipisicing excepteur anim in officia sint excepteur sint est ad consequat ullamco.","Status":3,"LastUpdated":"2017/03/18"},{"SubjectID":11,"Department":"Content Writing","Subject":"Ipsum esse aliquip cupidatat reprehenderit irure. Veniam ut adipisicing culpa in laboris et voluptate ut. Qui eu culpa pariatur incididunt sit anim aliquip mollit quis magna veniam id qui voluptate.","Status":3,"LastUpdated":"2017/02/03"},{"SubjectID":12,"Department":"Social Signal","Subject":"Enim eiusmod ipsum exercitation excepteur culpa do labore id incididunt proident consequat id elit veniam. Nulla exercitation adipisicing mollit et incididunt eu sit commodo. Magna labore occaecat velit qui culpa.","Status":1,"LastUpdated":"2016/03/03"},{"SubjectID":13,"Department":"Content Writing","Subject":"Esse ex voluptate Lorem ipsum veniam eu eu ullamco. Minim sint ad est nostrud aute adipisicing labore. Deserunt qui non eiusmod ullamco.","Status":2,"LastUpdated":"2016/07/05"},{"SubjectID":14,"Department":"SocialJuice","Subject":"Aliqua laboris velit nulla do ullamco excepteur cupidatat et consequat. Sunt fugiat Lorem et quis fugiat incididunt cupidatat officia dolor dolor veniam aute. Esse ex anim laborum sint et culpa voluptate consectetur in dolore labore.","Status":1,"LastUpdated":"2016/10/12"},{"SubjectID":15,"Department":"Content Writing","Subject":"Duis quis et incididunt ipsum dolor. Ullamco mollit incididunt qui sint nostrud quis adipisicing velit incididunt. Esse ullamco velit Lorem consequat proident commodo sunt voluptate est et.","Status":2,"LastUpdated":"2014/11/25"},{"SubjectID":16,"Department":"Social Signal","Subject":"Culpa exercitation cillum nisi dolor duis. Cillum do eiusmod nostrud sunt culpa mollit id ad. Irure pariatur voluptate ea cillum laborum qui occaecat proident id.","Status":1,"LastUpdated":"2017/08/12"},{"SubjectID":17,"Department":"SocialJuice","Subject":"Adipisicing anim id laborum excepteur. Quis aliquip dolore occaecat adipisicing voluptate est amet ea. Est excepteur amet sunt commodo deserunt aute.","Status":1,"LastUpdated":"2015/09/19"},{"SubjectID":18,"Department":"Social Signal","Subject":"Cupidatat Lorem exercitation eiusmod exercitation aliquip consequat magna aliqua duis ullamco eu voluptate minim exercitation. Sit ea sunt nulla do dolore aliquip officia. Ut anim ea nulla ipsum.","Status":3,"LastUpdated":"2016/08/03"}]');

        var datatable = $('#m_datatable').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-tickets', // custom wrapper class
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: '', // datatable's body's fixed height
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
                field: "SubjectID",
                title: "#",
                width: 50,
                sortable: true,
                selector: false,
                textAlign: 'center'
            }, {
                field: "Department",
                title: "Department"
            }, {
                field: "Subject",
                title: "Subject"
            }, {
                field: "Status",
                title: "Status",
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
                title: "Last Updated"
            }, {
                field: "Actions",
                width: 60,
                title: "Actions",
                sortable: false,
                overflow: 'visible',
                template: function () {
                    return '\
                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View ">\
                            <i class="la la-eye"></i>\
                        </a>\
					';
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
});