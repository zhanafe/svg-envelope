var source = new XMLHttpRequest();

source.onreadystatechange = function () {
  'use strict';
  if (source.readyState === 4 && source.status === 200) {
    document.querySelector('[data-holder]').outerHTML = source.responseText;

    var path = document.querySelectorAll('#frame path'),
        pathQuantum = path.length;

    for (var i = 0; i < pathQuantum; i++) {
      var pathLength = Math.round(path[i].getTotalLength()),
          dashLength = Math.round(pathLength / 1.8),
          dashLengthString = dashLength.toString() + 'px';
      path[i].style.strokeDasharray = dashLengthString + ' ' + dashLengthString;
      path[i].style.strokeDashoffset = dashLength * 2;
    }
  }
};

source.open('GET', 'svg/path.svg', true);
source.send();
