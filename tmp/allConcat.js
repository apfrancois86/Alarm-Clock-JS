var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  setInterval(function() {$('#time').text(moment().format('H:mm:ss'));}, 1000);
  $('#alarmClock').submit(function(event){
    event.preventDefault();
    var setHour = parseInt($("#inputHour").val());
    var setMinute = parseInt($("#inputMinute").val());
    $('#showAlarm').text("Alarm is set for " + setHour + ":" + setMinute);
    function alarmChecker() {
      var currentHour = parseInt(moment().format('H'));
      var currentMinute = parseInt(moment().format('mm'));
      if ((setHour === currentHour) && (setMinute === currentMinute)) {
        $('.alarmOn').show();
        $('#showAlarm').hide();
      }
    }
    setInterval(alarmChecker, 1000)
  });
});
