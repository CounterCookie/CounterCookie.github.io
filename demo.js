var examples = {};

examples['locations'] = function() {
  /* defining locations to display.
     Each position must have a key, an alpha and delta position (or x and y if you want to display a static location).
     Any additional key can be reached via callbacks functions.
  */
  var locations = {
    obj1: {
      alpha: 0.60 * Math.PI / 4,
      delta: 0.50,
      name: 'Seattle Washington'
    },
    obj2: {
      alpha: 1 * Math.PI / 4,
      delta: -2 * Math.PI / 4,
      name: 'location 2'
    },
    obj3: {
      alpha: 2 * Math.PI / 4,
      delta: 0,
      name: 'location 3'
    },
    obj4: {
      alpha: 3 * Math.PI / 4,
      delta: 3 * Math.PI / 4,
      name: 'location 4'
    },
    obj5: {
      alpha: 2.2 * Math.PI / 4,
      delta: -1.1 * Math.PI / 4,
      name: 'location 5'
    }
  };
  $('#sphere').earth3d({
    locationsElement: $('#locations'),
    dragElement: $('#locations'), // where do we catch the mouse drag
    locations: locations
  });
};



function selectExample(example) {
  $('#sphere').earth3d('destroy');
  $('#sphere').replaceWith($('<canvas id="sphere" width="400" height="400"></canvas>'));
  $('.location').remove();
  $('.flight').remove();
  $('#flights')[0].getContext('2d').clearRect(0, 0, 400, 400);
  if (example == 'simple_mars') {
    $('#glow-shadows').removeClass('earth').addClass('mars');
  } else {
    $('#glow-shadows').removeClass('mars').addClass('earth');
  }
  var code = examples[example].toString();
  code = code.substring(14);
  code = code.substring(0, code.length - 2);
  var lines = code.split("\n");
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].substring(2);
  }
  code = lines.join("\n");
  $('#example_code').val(code);

  examples[example]();
}


$(document).ready(function() {
  selectExample('locations');

  $('#example').change(function() {
    selectExample($(this).val());
  });
});

