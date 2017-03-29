'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var k = 0; k < times.length; k++) {
    var time = times[k];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 250;

  for (var i = 0; i < times.length; i++) {
    ctx.fillText(times[i].toFixed(0), initialX + (indent + barWidth) * i, initialY - histogramHeight - 20);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }
    ctx.fillRect(initialX + (indent + barWidth) * i, initialY, barWidth, -(times[i] * step));
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + 18);
  }
};
