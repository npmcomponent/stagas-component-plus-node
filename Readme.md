*This repository is a mirror of the [component](http://component.io) module [stagas/component-plus-node](http://github.com/stagas/component-plus-node). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/stagas-component-plus-node`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# component-plus-node

makes components work in both node and the browser

## Installing

`npm install component-plus-node`

`component install stagas/component-plus-node`

## Example

This code runs the same in both component and node,
even though `each` and npm dependencies are suffixed with `-component`:

```js
require('component-plus-node');

var each = require('each');

var result = '';

each(['Hello,', ' world!'], function(el){
  result += el;
});

console.log(result); // => Hello, world!
```

## Notes

This is monkey-patching `Module._resolveFilename` thus requiring
`component-plus-node` needs to be called early before any other requires
that reference `-component` modules.

## License

MIT
