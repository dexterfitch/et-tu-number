var romanNumeral = function(romans) {
  var i = 0;
  var v = 0;
  var x = 0;
  var l = 0;
  var c = 0;
  var d = 0;
  var m = 0;
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
    debugger;
    $("#roman-result").text("");
    $("#result").hide();
    $("#error").hide();

    var numeral = parseInt($("input#numeral").val());
    var numbers = romanNumeral(numeral);
    var i = numbers[6];
    var v = numbers[5];
    var x = numbers[4];
    var l = numbers[3];
    var c = numbers[2];
    var d = numbers[1];
    var m = numbers[0];
    var index = 0;

    while (index <= 8) {
      if (m > 0) {
        $("#roman-result").append(Array(m + 1).join("M"));
        m = 0;

      } else if ((d === 1) && (c === 4)) {
        $("#roman-result").append("CM");
        d = 0;
        c = 0;

      } else if ((l === 1 ) && (x === 4)) {
        $("#roman-result").append("XC");
        l = 0;
        x = 0;

      } else if ((v === 1) && (i === 4)) {
        $("#roman-result").append("IX");
        v = 0;
        i = 0;


      } else if ((v === 0) && (i === 4)) {
        $("#roman-result").append("IV");
        i = 0;

      } else if (d > 0) {
        $("#roman-result").append(Array(d + 1).join("D"));
        d = 0;

      } else if (c > 0) {
        $("#roman-result").append(Array(c + 1).join("C"));
        c = 0;

      } else if (l > 0) {
        $("#roman-result").append(Array(l + 1).join("L"));
        l = 0;

      } else if (x > 0) {
        $("#roman-result").append(Array(x + 1).join("X"));
        x = 0;

      } else if (v > 0) {
        $("#roman-result").append(Array(v + 1).join("V"));
        v = 0;

      } else if (i > 0) {
        $("#roman-result").append(Array(i + 1).join("I"));
        i = 0;
      }
      
      index += 1;

    };

    if (isNaN(numeral) || numeral < 1 || numeral > 3999) {
      $("#error").show();
    } else {
      $("#result").show();
    };

    event.preventDefault();
  });
});
