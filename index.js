
/*!
 *
 * component-plus-node
 *
 * MIT
 *
 */

try {
  // commented out by npm-component: var Module = require('module');
  var resolve = Module._resolveFilename;
  Module._resolveFilename = function(s, ctx){
    var mod;
    try {
      mod = resolve(s, ctx);
    } catch (e) {
      mod = resolve(s + '-component', ctx);
    }
    return mod;
  };
} catch (_) {}
