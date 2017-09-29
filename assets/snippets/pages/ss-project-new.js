//== Class definition
var ProjectNew = function() {
    var daterangepickerInit = function() {
        if ($('.m_seognals_daterangepicker').length == 0) {
            return;
        }

        var picker = $('.m_seognals_daterangepicker');

        picker.daterangepicker({
            opens: 'left',
            showDropdowns: true,
            locale: {
                format: 'YYYY, MMM DD'
            }
        });

        //cb(start, end, '');
    };

    var datesinglepickerInit = function() {
        if ($('.m_seognals_datesinglepicker').length == 0) {
            return;
        }

        var picker = $('.m_seognals_datesinglepicker');

        var start = moment();

        picker.daterangepicker({
            startDate: start,
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY, MMM DD'
            }
        });
    };

    return {
        //== Init demos
        init: function() {
            // init daterangepicker
            daterangepickerInit();
            datesinglepickerInit();
        }
    };
}();

//== Class initialization on page load
jQuery(document).ready(function() {
    // Init date pickers
    ProjectNew.init();

    var projectURLItemsIndex = function () {
        $('.m-form__project--url').each(function (index, value) {
            $(this).find('.m-form__project--url_id strong').html(index + 1)
            console.log(index);
            console.log(value);
        })
    };

    var projectURLList = $('#m-form-project-url-list');

    // Remove Project URL Row
    var removeProjectURL = function (el) {

        console.log(el[0]);

        // Delete row
        el.closest('.m-form__project--url').slideUp(120, function(){ el.closest('.m-form__project--url').remove(); });

        // Count index
        setTimeout( function () {
            projectURLItemsIndex();
            // Check projectURLItemsIndex();
            var projectURLListLength = projectURLList.find('.m-form__project--url').length;
            if (projectURLListLength === 1) {
                // Delete remove trigger
                projectURLList.find('.m-form__project--url_btn_remove').remove();
            }
            if (projectURLListLength === 9) {
                // Add ProjectURL New Trigger
                $('#addNewProjectURLTrigger').css('visibility', 'visible');
            }
        }, 140);
    };

    var addNewProjectURL = function () {
        var urlDOM = '<div class="m-form__project--url">\n' +
            '                                                            <div class="m-form__project--url_id m--margin-bottom-10">\n' +
            '                                                                <strong>0</strong>. Project URL <button type="button" class="btn btn-sm btn-danger m-btn--icon m--margin-left-30 m-form__project--url_btn_remove">\n' +
            '                                                                <span>\n' +
            '                                                                    <i class="la la-trash"></i>\n' +
            '                                                                    <span>Remove</span>\n' +
            '                                                                </span>\n' +
            '                                                            </button>\n' +
            '                                                            </div>\n' +
            '                                                            <div class="row">\n' +
            '                                                                <div class="col-xl-12">\n' +
            '                                                                    <div class="form-group">\n' +
            '                                                                        <div class="m-input-icon m-input-icon--left">\n' +
            '                                                                            <input type="text" class="form-control m-input " placeholder="Enter project URL">\n' +
            '                                                                            <span class="m-input-icon__icon m-input-icon__icon--left">\n' +
            '                                                                            <span>\n' +
            '                                                                                <i class="form-info-icon la la-info-circle m--font-brand"\n' +
            '                                                                                   data-toggle="m-tooltip" title=""\n' +
            '                                                                                   data-html="true"\n' +
            '                                                                                   data-original-title="Some useful info about project URLs"\n' +
            '                                                                                   data-skin="dark"></i>\n' +
            '                                                                            </span>\n' +
            '                                                                        </span>\n' +
            '                                                                        </div>\n' +
            '                                                                    </div>\n' +
            '                                                                </div>\n' +
            '                                                            </div>\n' +
            '                                                            <div class="row">\n' +
            '                                                                <div class="col-xl-4">\n' +
            '                                                                    <div class="form-group">\n' +
            '                                                                        <div class="m-input-icon m-input-icon--left">\n' +
            '                                                                            <input type="text" class="form-control m-input " placeholder="Enter keywords">\n' +
            '                                                                            <span class="m-input-icon__icon m-input-icon__icon--left">\n' +
            '                                                                            <span>\n' +
            '                                                                                <i class="form-info-icon la la-info-circle m--font-brand"\n' +
            '                                                                                   data-toggle="m-tooltip" title=""\n' +
            '                                                                                   data-html="true"\n' +
            '                                                                                   data-original-title="Some useful info about project keywords"\n' +
            '                                                                                   data-skin="dark"></i>\n' +
            '                                                                            </span>\n' +
            '                                                                        </span>\n' +
            '                                                                        </div>\n' +
            '                                                                    </div>\n' +
            '                                                                </div>\n' +
            '                                                                <div class="col-xl-4">\n' +
            '                                                                    <div class="form-group">\n' +
            '                                                                        <div class="m-input-icon m-input-icon--left">\n' +
            '                                                                            <input type="number" class="form-control m-input " placeholder="Signals" max="3000">\n' +
            '                                                                            <span class="m-input-icon__icon m-input-icon__icon--left">\n' +
            '                                                                            <span>\n' +
            '                                                                                <i class="form-info-icon la la-info-circle m--font-brand"\n' +
            '                                                                                   data-toggle="m-tooltip" title=""\n' +
            '                                                                                   data-html="true"\n' +
            '                                                                                   data-original-title="Maxlength 3000"\n' +
            '                                                                                   data-skin="dark"></i>\n' +
            '                                                                            </span>\n' +
            '                                                                        </span>\n' +
            '                                                                        </div>\n' +
            '                                                                    </div>\n' +
            '                                                                </div>\n' +
            '                                                                <div class="col-xl-4">\n' +
            '                                                                    <div class="form-group">\n' +
            '                                                                        <select class="form-control m-bootstrap-select m_selectpicker" tabindex="-98"\n' +
            '                                                                                multiple\n' +
            '                                                                                title="Choose social services"\n' +
            '                                                                                data-selected-text-format="count > 3"\n' +
            '                                                                                data-actions-box="true">\n' +
            '                                                                            <option value="1">FB Like</option>\n' +
            '                                                                            <option value="2">FB Share</option>\n' +
            '                                                                            <option value="3">FB Share Post</option>\n' +
            '                                                                            <option value="4">Twitter Tweet</option>\n' +
            '                                                                            <option value="5">Twitter Retweet</option>\n' +
            '                                                                            <option value="6">Google+ Share</option>\n' +
            '                                                                            <option value="7">Pinterest Repin</option>\n' +
            '                                                                            <option value="8">Pinterest Like</option>\n' +
            '                                                                            <option value="9">Deoptioncious</option>\n' +
            '                                                                        </select>\n' +
            '                                                                    </div>\n' +
            '                                                                </div>\n' +
            '                                                            </div>\n' +
            '                                                            <hr>\n' +
            '                                                        </div>';

        // Get length of the project urls list
        var projectURLListLength = projectURLList.find('.m-form__project--url').length;

        var deleteProjectURLTrigger = '<button type="button" class="btn btn-sm btn-danger m-btn--icon m--margin-left-30 m-form__project--url_btn_remove"><span><i class="la la-trash"></i><span>Remove</span></span></button>';

        if (projectURLListLength < 10) {

            console.log(projectURLListLength);
            if (projectURLListLength === 9) {
                $('#addNewProjectURLTrigger').css('visibility', 'hidden');
            }
            if (projectURLListLength === 1) {
                $(deleteProjectURLTrigger).appendTo(projectURLList.find('.m-form__project--url:first-child .m-form__project--url_id'));
            }

            // Add new project URL row
            $(urlDOM).appendTo('#m-form-project-url-list');

            projectURLList.find('.m-form__project--url:last-child .m-form__project--url_id strong').html(projectURLListLength + 1);

            // Bootstrap Select Init
            $('.m_selectpicker').selectpicker();

        }

        // Remove Project URL Trigger
        $('.m-form__project--url_btn_remove').on('click', function () {
            var removeProjectTrigger = $(this);
            removeProjectURL(removeProjectTrigger);
        })

    };

    // Add Project URL Trigger
    $('#addNewProjectURLTrigger').on('click', function () {
        addNewProjectURL();
    });

    // Remove Project URL Trigger
    // $('.m-form__project--url_btn_remove').on('click', function () {
    //     var removeProjectTrigger = $(this);
    //     removeProjectURL(removeProjectTrigger);
    // })

});