var CoreObject      = require('core-object');
var AdapterRegistry = require('./adapter-registry');

module.exports = CoreObject.extend({
  init: function() {
    var adapterRegistry = new AdapterRegistry();
    var adapterName     = this.type || 's3';
    var Adapter         = adapterRegistry.lookup('assets', adapterName);

    this.adapter = new Adapter({
      name: adapterName,
      ui: this.ui,
      config: this.config
    });
  },

  upload: function() {
    return this.adapter.upload();
  }
});
