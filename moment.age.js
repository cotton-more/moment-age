(function() {
  var date;

  moment.fn.age = function(input) {
    'use strict';
    var localInput, months, output, years;
    output = {};
    localInput = this._isUTC ? moment(input).utc() : moment(input).local();
    years = this.diff(localInput, "years", true);
    output.years = parseInt(years, 10);
    months = (years - output.years) * 12;
    output.months = parseInt(months, 10);
    output.days = parseInt((months - output.months) * this.daysInMonth(), 10);
    console.log(output);
    return output;
  };

  date = moment();

  date.age("fail");

  date.age(moment("1981-03-11", "YYYY-MM-DD"));

  date = moment([2007, 2, 11]);

  date.age(moment("1981-03-11", "YYYY-MM-DD"));

}).call(this);
