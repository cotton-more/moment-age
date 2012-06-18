moment-age
==========
This plugin for getting difference in years, months and days between two moment-objects

How to use
----------
First create moment object with date that is upper. After that use moment::age() function
to get obejct with "years", "months" and "dates" fields.
moment::age() accept one parameter and call moment() with it to create the lower date.
``` javascript
    // getting age between now and 30th of January, 2010.
    var m, age;
    m = moment([2009, 10, 26]);
    age = m.age([1981, 2, 11]); // {'years': 28, 'months': 8, 'days': 14}
```

Installation
------------
@todo

Example
-------
@todo

License
-------
moment-age is [UNLICENSED][unlicense].

[unlicense]: http://unlicense.org/
