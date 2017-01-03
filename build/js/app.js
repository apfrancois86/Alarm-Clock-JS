(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm (currentHour, currentMinute) {
  // this.currentHour = currentHour;
  // this.currentMinute = currentMinute;
}

// Alarm.prototype.currentTime = function(currentHour, currentMinute) {
//   var currentHour = parseInt(moment().format('H'));
//   var currentMinute = parseInt(moment().format('mm'));
// };

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#time').text(moment().format('H:mm'));
  $('#alarmClock').submit(function(event){
    event.preventDefault();
    var setHour = parseInt($("#inputHour").val());
    var setMinute = parseInt($("#inputMinute").val());
    $('#showAlarm').text("Alarm is set for " + setHour + ":" + setMinute);
    var currentHour = parseInt(moment().format('H'));
    var currentMinute = parseInt(moment().format('mm'));
    if ((setHour === currentHour) && (setMinute === currentMinute)) {
      $('.alarmOn').show();
      $('#showAlarm').hide();
    }
  });
});

},{"./../js/alarm.js":1}]},{},[2]);
