'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 120, 20);
  ctx.fillText('Список результатов:', 120, 40);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 240;

  for (var i = 0; i < times.length; i++) {
    ctx.fillText(times[i].toFixed(0), initialX + (indent + barWidth) * i, initialY - histogramHeight - 20);
    ctx.fillStyle = 'rgba (' + 0 + ',' + 0 + ',' + 255 + ',' + Math.random() +')';
    ctx.fillRect(initialX + (indent + barWidth) * i, initialY, barWidth, -(times[i] * step));
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + 10);
  }
};
