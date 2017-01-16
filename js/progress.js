$('.progress > .loader').each(function() {
  var $this = $(this);
  var svg = '<svg viewBox="-10 -10 220 220"><circle cx="0" cy="0" fill="#eee" r="100" stroke="#4cd964" stroke-width="10" transform="translate(100, 100)"></circle></svg>';
  
  $this.append(svg, svg).find('>svg').last().find('>circle').attr('stroke-dashoffset', -Math.round((parseInt($this.data('percent').replace('%', ''))*629)/100));
});
