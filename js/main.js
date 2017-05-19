$('#sandbox-container').datepicker({
    format: "dd/mm/yyyy",
    weekStart: 1,
    maxViewMode: 2,
    todayBtn: "linked",
    clearBtn: true,
    language: "fr",
    daysOfWeekDisabled: "0,6",
    calendarWeeks: true,
    autoclose: true,
    todayHighlight: true,
    beforeShowYear: function (date){
        if (date.getFullYear() == 2017) {
            return false;
        }
    },
    datesDisabled: ['05/26/2017', '05/05/2017'],
    toggleActive: true
});
function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.67652,
            lng: 3.1883
        },
        scrollwheel: true,
        zoom: 15

    });
    var myLatLng = {lat: 50.67652, lng: 3.1883};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}