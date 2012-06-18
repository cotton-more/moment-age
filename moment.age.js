(function() {
  'use strict';
  var date;

  moment.fn.age = function(input) {
    var localInput, months, output, years;
    output = {};
    localInput = this._isUTC ? moment(input).utc() : moment(input).local();
    years = this.diff(localInput, "years", true);
    output.years = parseInt(years, 10);
    months = (years - output.years) * 12;
    output.months = parseInt(months, 10);
    output.days = parseInt((months - output.months) * this.daysInMonth(), 10);
    return output;
  };
}).call(this);
