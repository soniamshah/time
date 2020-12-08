$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 30; // speed in milliseconds
    
   
  $clockText.html(h + ":" + m + ":" + s + ":" + ms);
  $hour.css('transform', 'rotate(' + ((360/12 * h)+90) + 'deg)');
  $minute.css('transform', 'rotate(' + ((360/60 * m)+90) + 'deg)');
  $second.css('transform', 'rotate(' + ((360/60 * s)+90) + 'deg)');

    setTimeout(updateClock, clockUpdateSpeed);
  }

  updateClock();
});
