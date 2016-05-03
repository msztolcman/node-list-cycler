node-list-cycler
================

Infinity cycle through list

Install:
--------

```npm install list-cycler```

Current stable version
----------------------

0.0.3

Examples:
---------

Iterate from beginning of list:
```javascript
var cycler = require("list-cycler"),
    colors = cycler(['red', 'green', 'blue']),
    i=6;
while (--i) {
    console.log(i + '. <span color="' + colors.current() + '">' + colors.current() + '</span>');
    colors.cycle();
}
```

Or using other API:
```javascript
var cycler = require("list-cycler"),
    colors = cycler(['red', 'green', 'blue']),
    color,
    i=6;
while (--i) {
    color = colors.next();
    console.log(i + '. <span color="' + color + '">' + color + '</span>');
}
```

If should start from index other then 0 - here iterate
from index 1 (letter 's') - look at second argument to *cycler*:
```javascript
var cycler = require('list-cycler'),
    colors = cycler(['red', 'green', 'blue'], 1),
    i=6

while (--i) {
    console.log(i + '. <span color="' + colors.current() + '">' + colors.current() + '</span>');
    colors.cycle();
}
```
