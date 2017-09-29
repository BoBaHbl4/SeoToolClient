$(document).ready(function () {

    $('select[id*="service-select-el"]').on('change', function (event) {

        // Save current select and selected value
        var currTargetId = event.currentTarget.id;
        var currTargetValue = event.currentTarget.value;

        // Clear all selects
        $('select[id*="service-select-el"]').selectpicker('deselectAll');

        // Set current state after clearing all selects
        // Not the 'best practice', that's for sure
        $('#' + currTargetId).selectpicker('val', currTargetValue);

    });

});