'use strict';

function main() {

  var chronometer = new Chronometer();
  var btnLeft     = document.querySelector('#btnLeft');
  var btnRight    = document.querySelector('#btnRight');
  var minDec      = document.querySelector('#minDec');
  var minUni      = document.querySelector('#minUni');
  var secDec      = document.querySelector('#secDec');
  var secUni      = document.querySelector('#secUni');
  // var milDec      = document.querySelector('#milDec');
  // var milUni      = document.querySelector('#milUni');

  function printTime() {
    printMinutes();
    printSeconds();
    // printMilliseconds();
  }

  chronometer.setPrintTime(printTime);

  function printMinutes() {
    setValuesForTimer(chronometer.setMinutes(), minDec, minUni)
  }

  function printSeconds() {
    setValuesForTimer(chronometer.setSeconds(), secDec, secUni);
  }

  function setValuesForTimer (timeValue, timeDec, timeUni) {
    var time = timeValue;
    var arrTime = chronometer.twoDigitsNumber(time).split('');
    timeDec.innerText = String(arrTime[0]);
    timeUni.innerText = String(arrTime[1]);
  }

  // function printMilliseconds() {

  // }

  // function printSplit() {

  // }

  // function clearSplits() {

  // }

  function setStopBtn() {
    chronometer.stopClick();
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('btn');
    btnLeft.classList.add('start');
    btnRight.classList.remove('split')
    btnRight.classList.add('btn');
    btnRight.classList.add('reset');
  }

  // function setSplitBtn() {
  // }

  function changeTextButtons () {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    btnLeft.classList.remove('start');
    btnLeft.classList.add('btn');
    btnLeft.classList.add('stop');
    btnRight.classList.remove('reset')
    btnRight.classList.add('btn');
    btnRight.classList.add('split');
  }

  function setStartBtn() {
    chronometer.startClick();
    printTime();
    changeTextButtons()
  }

  function setResetBtn() {
    chronometer.resetClick();
    printTime();
    changeTextButtons()
  }

  // Start/Stop Button
  btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains('start')) {
      setStartBtn();
    } else if (btnLeft.classList.contains('stop')) {
      setStopBtn();
    }
  });

  // Reset/Split Button
  btnRight.addEventListener('click', function ()  {
  if (btnRight.classList.contains('reset')) {
    setResetBtn();
    }
  });

}

window.addEventListener('load', main)

