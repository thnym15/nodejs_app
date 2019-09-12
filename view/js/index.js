$(document).ready(function () {
    console.log("ready!");
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day_name = days[d.getDay()];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month_name = months[d.getMonth()];
    $('.datetime').html(day_name + " " + d.getDate() + " " + month_name + " " + d.getFullYear());
});