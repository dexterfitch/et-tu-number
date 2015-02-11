var romanNumeral = function(romans) {
  var i = 0
  var v = 0
  var x = 0
  var l = 0
  var c = 0
  var d = 0
  var m = 0
  var numerals = [];

  var romanRemains = romans;

  do {

    while ((romanRemains - 1000) >= 0) {
      romanRemains -= 1000;
      m += 1;
    }

    while ((romanRemains - 500) >= 0) {
      romanRemains -= 500;
      d += 1;
    }

    while ((romanRemains - 100) >= 0) {
      romanRemains -= 100;
      c += 1;
    }

    while ((romanRemains - 50) >= 0) {
      romanRemains -= 50;
      l += 1;
    }

    while ((romanRemains - 10) >= 0) {
      romanRemains -= 10;
      x += 1;
    }

    while ((romanRemains - 5) >= 0) {
      romanRemains -= 5;
      v += 1;
    }

    while ((romanRemains - 1) >= 0) {
      romanRemains -= 1;
      i += 1;
    }

  } while (romanRemains > 0);

    numerals.push(m,d,c,l,x,v,i);
    return numerals;
};

// -------------------------------------------------

$(document).ready(function() {

  $("form#roman-numeral").submit(function(event) {
    $("#roman-result").text("");
    $("#result").hide();
    $("#error").hide();

    var numeral = parseInt($("input#numeral")).val();

  });
});
