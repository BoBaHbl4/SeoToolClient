var DatatableSSProjectsCompeted = function () {
    //== Private functions

    var subTableInit = function (e) {
        $('<div/>').attr('id', 'child_data_local_' + e.data.project_id).appendTo(e.detailCell)
            .mDatatable({
                data: {
                    type: 'local',
                    source: e.data.details,
                    pageSize: 10,
                    saveState: {
                        cookie: true,
                        webstorage: true
                    }
                },

                // layout definition
                layout: {
                    theme: 'default',
                    scroll: true,
                    header: false,
                    height: 300,
                    footer: false,

                    // enable/disable datatable spinner.
                    spinner: {
                        type: 1,
                        theme: 'default'
                    }
                },

                pagination: false,

                sortable: false,

                // columns definition
                columns: [{
                    field: "",
                    title: "",
                    textAlign: 'right',
                    sortable: false,
                    width: 20
                }, {
                    field: "project_links",
                    title: "",
                    sortable: false,
                    width: 250,
                    template: function (row) {
                        return '<a href="' + row.project_links + '" class="m-link" title="Open Project Link">' + row.project_links + '</a>';
                    }
                }, {
                    field: "start_date",
                    title: "",
                    sortable: false,
                    textAlign: 'center',
                    width: 100
                }, {
                    field: "end_date",
                    sortable: false,
                    title: "",
                    textAlign: 'center',
                    width: 100
                }, {
                    field: "ss_count",
                    sortable: false,
                    title: "",
                    textAlign: 'right',
                    width: 135
                }, {
                    field: "ss_spent",
                    sortable: false,
                    title: "",
                    textAlign: 'right',
                    width: 135
                }, {
                    field: "control",
                    sortable: false,
                    title: "",
                    textAlign: 'center',
                    width: 140
                }, {
                    field: "reports",
                    sortable: false,
                    title: "",
                    textAlign: 'center',
                    width: 60
                }]
            });
    }


    // ssProjects initializer
    var ssProjects = function () {

        var listData = [
            {
                "project_id": 1,
                "project_name": "Geologix nostrud ea nulla",
                "start_date": "2015/01/01",
                "end_date": "2014/02/20",
                "ss_count": 443,
                "ss_spent": 322,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 1
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2017/01/31",
                        "end_date": "2015/01/21",
                        "ss_count": 119,
                        "ss_spent": 129,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2014/10/25",
                        "end_date": "2014/12/03",
                        "ss_count": 85,
                        "ss_spent": 179,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2015/02/17",
                        "end_date": "2016/03/26",
                        "ss_count": 164,
                        "ss_spent": 119,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 2,
                "project_name": "Repetwire ea cillum culpa",
                "start_date": "2017/01/17",
                "end_date": "2014/04/08",
                "ss_count": 201,
                "ss_spent": 450,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2014/06/04",
                        "end_date": "2015/01/25",
                        "ss_count": 2,
                        "ss_spent": 44,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2017/04/19",
                        "end_date": "2014/11/26",
                        "ss_count": 189,
                        "ss_spent": 145,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 3,
                "project_name": "Buzzworks excepteur aute nulla",
                "start_date": "2017/08/09",
                "end_date": "2017/04/14",
                "ss_count": 264,
                "ss_spent": 142,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 1
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2014/03/16",
                        "end_date": "2016/12/06",
                        "ss_count": 66,
                        "ss_spent": 6,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2014/04/06",
                        "end_date": "2016/12/23",
                        "ss_count": 17,
                        "ss_spent": 121,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2016/09/13",
                        "end_date": "2015/07/27",
                        "ss_count": 101,
                        "ss_spent": 199,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 4,
                "project_name": "Earthwax nulla eiusmod minim",
                "start_date": "2014/05/11",
                "end_date": "2016/05/10",
                "ss_count": 231,
                "ss_spent": 19,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2014/05/16",
                        "end_date": "2015/12/08",
                        "ss_count": 25,
                        "ss_spent": 78,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2014/04/30",
                        "end_date": "2014/04/07",
                        "ss_count": 93,
                        "ss_spent": 125,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 5,
                "project_name": "Plasto mollit reprehenderit laboris",
                "start_date": "2014/09/23",
                "end_date": "2014/07/16",
                "ss_count": 289,
                "ss_spent": 194,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2016/10/26",
                        "end_date": "2015/01/26",
                        "ss_count": 66,
                        "ss_spent": 110,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2014/09/18",
                        "end_date": "2015/07/23",
                        "ss_count": 17,
                        "ss_spent": 72,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2017/05/18",
                        "end_date": "2017/04/03",
                        "ss_count": 35,
                        "ss_spent": 188,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 6,
                "project_name": "Conferia duis proident esse",
                "start_date": "2016/05/21",
                "end_date": "2014/01/04",
                "ss_count": 170,
                "ss_spent": 24,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 1
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2017/05/16",
                        "end_date": "2016/05/23",
                        "ss_count": 92,
                        "ss_spent": 137,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 7,
                "project_name": "Rameon incididunt irure occaecat",
                "start_date": "2015/04/25",
                "end_date": "2014/10/04",
                "ss_count": 462,
                "ss_spent": 223,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2015/04/28",
                        "end_date": "2015/08/27",
                        "ss_count": 178,
                        "ss_spent": 17,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 8,
                "project_name": "Firewax non in dolor",
                "start_date": "2014/07/11",
                "end_date": "2015/08/12",
                "ss_count": 87,
                "ss_spent": 476,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2017/07/14",
                        "end_date": "2017/01/13",
                        "ss_count": 188,
                        "ss_spent": 185,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 9,
                "project_name": "Insectus anim deserunt nostrud",
                "start_date": "2015/10/25",
                "end_date": "2016/02/18",
                "ss_count": 259,
                "ss_spent": 234,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2015/06/03",
                        "end_date": "2017/02/16",
                        "ss_count": 151,
                        "ss_spent": 159,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 10,
                "project_name": "Prismatic proident voluptate consequat",
                "start_date": "2015/06/08",
                "end_date": "2016/11/23",
                "ss_count": 165,
                "ss_spent": 29,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 1
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2017/04/03",
                        "end_date": "2015/07/06",
                        "ss_count": 139,
                        "ss_spent": 196,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2015/09/27",
                        "end_date": "2016/04/26",
                        "ss_count": 69,
                        "ss_spent": 33,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 11,
                "project_name": "Ginkle occaecat pariatur commodo",
                "start_date": "2016/10/26",
                "end_date": "2016/10/03",
                "ss_count": 143,
                "ss_spent": 399,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2017/03/18",
                        "end_date": "2014/03/29",
                        "ss_count": 105,
                        "ss_spent": 95,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 12,
                "project_name": "Macronaut voluptate id ut",
                "start_date": "2017/06/04",
                "end_date": "2014/07/03",
                "ss_count": 395,
                "ss_spent": 134,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2016/04/19",
                        "end_date": "2014/08/14",
                        "ss_count": 196,
                        "ss_spent": 120,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2015/06/07",
                        "end_date": "2014/09/13",
                        "ss_count": 90,
                        "ss_spent": 28,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 13,
                "project_name": "Mantrix pariatur excepteur sint",
                "start_date": "2017/04/29",
                "end_date": "2017/04/29",
                "ss_count": 19,
                "ss_spent": 147,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2016/06/25",
                        "end_date": "2017/05/19",
                        "ss_count": 176,
                        "ss_spent": 176,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 14,
                "project_name": "Ludak officia proident adipisicing",
                "start_date": "2015/10/22",
                "end_date": "2015/06/08",
                "ss_count": 414,
                "ss_spent": 377,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 1
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2015/08/24",
                        "end_date": "2014/12/23",
                        "ss_count": 34,
                        "ss_spent": 136,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 15,
                "project_name": "Moltonic eu ullamco labore",
                "start_date": "2014/06/09",
                "end_date": "2015/08/26",
                "ss_count": 303,
                "ss_spent": 473,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2015/08/30",
                        "end_date": "2015/06/27",
                        "ss_count": 58,
                        "ss_spent": 23,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2016/02/19",
                        "end_date": "2017/02/09",
                        "ss_count": 37,
                        "ss_spent": 95,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2017/09/22",
                        "end_date": "2016/01/14",
                        "ss_count": 82,
                        "ss_spent": 182,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 16,
                "project_name": "Krog ex pariatur labore",
                "start_date": "2016/07/16",
                "end_date": "2016/12/28",
                "ss_count": 335,
                "ss_spent": 102,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2015/03/08",
                        "end_date": "2015/11/23",
                        "ss_count": 158,
                        "ss_spent": 146,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 17,
                "project_name": "Eventex veniam veniam exercitation",
                "start_date": "2017/01/22",
                "end_date": "2015/04/19",
                "ss_count": 151,
                "ss_spent": 402,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 1
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2016/08/07",
                        "end_date": "2015/03/18",
                        "ss_count": 11,
                        "ss_spent": 43,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2017/07/29",
                        "end_date": "2016/04/25",
                        "ss_count": 178,
                        "ss_spent": 192,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/",
                        "start_date": "2017/05/11",
                        "end_date": "2016/08/22",
                        "ss_count": 8,
                        "ss_spent": 8,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 18,
                "project_name": "Vitricomp in deserunt mollit",
                "start_date": "2016/05/09",
                "end_date": "2017/04/13",
                "ss_count": 276,
                "ss_spent": 397,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2015/05/03",
                        "end_date": "2016/05/07",
                        "ss_count": 61,
                        "ss_spent": 142,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2014/09/24",
                        "end_date": "2016/07/12",
                        "ss_count": 77,
                        "ss_spent": 18,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 19,
                "project_name": "Beadzza eiusmod id pariatur",
                "start_date": "2017/06/23",
                "end_date": "2014/07/10",
                "ss_count": 346,
                "ss_spent": 322,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 0
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2014/03/20",
                        "end_date": "2017/03/11",
                        "ss_count": 96,
                        "ss_spent": 155,
                        "control": "",
                        "reports": ""
                    },
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2016/07/13",
                        "end_date": "2014/10/22",
                        "ss_count": 175,
                        "ss_spent": 53,
                        "control": "",
                        "reports": ""
                    }
                ]
            },
            {
                "project_id": 20,
                "project_name": "Soprano sunt occaecat exercitation",
                "start_date": "2016/06/06",
                "end_date": "2015/04/15",
                "ss_count": 170,
                "ss_spent": 271,
                "control": {
                    "edit_link": "ss-project-edit.html",
                    "active": 1
                },
                "reports": "ss-report-view.html",
                "details": [
                    {
                        "project_links": "http://liveslideshow.com/video/liveslideshow/contentpart/",
                        "start_date": "2015/04/02",
                        "end_date": "2015/10/08",
                        "ss_count": 52,
                        "ss_spent": 89,
                        "control": "",
                        "reports": ""
                    }
                ]
            }
        ];

        var datatable = $('#m_datatable_ss_projects_completed').mDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: listData,
                pageSize: 10
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: 'm_datatable--seognal-ss-projects-active', // custom wrapper class
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: null, // datatable's body's fixed height
                footer: false // display/hide footer
            },

            // column sorting(refer to Kendo UI)
            sortable: true,

            // column based filtering(refer to Kendo UI)
            filterable: false,

            pagination: true,

            detail: {
                title: 'Load sub table',
                content: subTableInit
            },

            // columns definition
            columns: [{
                sortable: false,
                field: "project_id",
                title: "",
                textAlign: 'right',
                width: 20
            }, {
                sortable: true,
                field: "project_name",
                title: "Project Name",
                width: 250
            }, {
                sortable: true,
                field: "start_date",
                title: "Start Date",
                textAlign: 'center',
                width: 100
            }, {
                sortable: true,
                field: "end_date",
                title: "End Date",
                textAlign: 'center',
                width: 100
            }, {
                sortable: true,
                field: "ss_count",
                title: "Socials Signals Count",
                textAlign: 'right',
                width: 135
            }, {
                sortable: true,
                field: "ss_spent",
                title: "Socials Signals Spent",
                textAlign: 'right',
                width: 135
            }, {
                sortable: false,
                field: "control",
                title: "Control Panel",
                textAlign: 'center',
                width: 140,
                // callback function support for column rendering
                template: function (row) {
                    var projectStatus = {
                        0: {'title': 'Activate Project', 'class': 'play'},
                        1: {'title': 'Stop Project', 'class': 'pause'}
                    };
                //<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit Project"><i class="la la-edit"></i></a>
                    return '<a href="' + [row.control.edit_link] + '" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill m-badge--wide"><i class="la la-edit"></i></a>' +
                        '<a href="#" data-project-value="' + [row.project_id] + '" class="m-portlet__nav-link btn m-btn m-btn--hover-success m-btn--icon m-btn--icon-only m-btn--pill m-badge--wide m--margin-right-5 m--margin-left-5" title="'+ projectStatus[row.control.active].title +'"><i class="la la-'+ projectStatus[row.control.active].class +'"></i></a>' +
                        '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill m-badge--wide" title="Delete Project"><i class="la la-close"></i></a>';
                }
            }, {
                sortable: false,
                field: "reports",
                title: "Reports",
                textAlign: 'center',
                width: 60,
                template: function (row) {
                    return '<a href="' + row.reports + '" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View"><i class="la la-eye"></i></a>';
                }
            }]
        });

        var query = datatable.getDataSourceQuery();

        $('#m_form_ss_projects_search').on('keyup', function (e) {
            datatable.search($(this).val().toLowerCase());
        }).val(query.generalSearch);

    };

    return {
        //== Public functions
        init: function () {
            // init projects
            ssProjects();
        }
    };
}();


$(document).ready(function () {
    DatatableSSProjectsCompeted.init();
});