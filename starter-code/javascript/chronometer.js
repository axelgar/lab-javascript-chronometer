// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(function(){
    this.currentTime++;
    this.setTime();
    this.printTimeCallback();
  }.bind(this), 1000); 
}

Chronometer.prototype.setMinutes = function () {
  return Number(Math.floor(this.currentTime / 60));  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  value = String(value);
  if(value < 10) {
    return 0 + value; 
  } else {
    return value;
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = Number(this.twoDigitsNumber(this.setMinutes));
  var seconds = Number(this.twoDigitsNumber(this.setSeconds));
};

Chronometer.prototype.setPrintTime = function(callback) {
  this.printTimeCallback = callback;
}

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.startClick()
};

// Chronometer.prototype.splitClick = function () {

// };
