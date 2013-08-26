node-list-cycler
================

Infinity cycle through list

Install:
--------

```npm install list-cycler```

Examples:
---------

```javascript
var cycler = require('list-cycler'),
    my_list = cycler(['a', 's', 'd']),
    my_condition = true;

while (my_condition) {
    console.log(my_list.next());
    my_condition = Math.random() < 0.9;
}
```
