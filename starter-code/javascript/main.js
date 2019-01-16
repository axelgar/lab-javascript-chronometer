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
    var minutes = chronometer.setMinutes();
    var arrMin = chronometer.twoDigitsNumber(minutes).split('');
    minDec.innerText = String(arrMin[0]);
    minUni.innerText = String(arrMin[1]);
  }

  function printSeconds() {
    var seconds = chronometer.setSeconds();
    var arrSec = chronometer.twoDigitsNumber(seconds).split('');
    secDec.innerText = String(arrSec[0]);
    secUni.innerText = String(arrSec[1]);
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

  function setStartBtn() {
    printTime();
    chronometer.startClick();
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    btnLeft.classList.remove('start');
    btnLeft.classList.add('btn');
    btnLeft.classList.add('stop');
    btnRight.classList.remove('reset');
    btnRight.classList.add('btn');
    btnRight.classList.add('split');
  }

  function setResetBtn() {
    chronometer.resetClick();
    printTime();
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    btnLeft.classList.remove('start');
    btnLeft.classList.add('btn');
    btnLeft.classList.add('stop');
    btnRight.classList.remove('reset')
    btnRight.classList.add('btn');
    btnRight.classList.add('split');
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

