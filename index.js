'use strict';

const os = require('os');

// noble-mac acts as a shim to noble.
if (os.platform() === 'darwin') {
	const Noble = require('@s524797336/noble/lib/noble');
	const macBindings = require('./lib/binding.js');
	module.exports = new Noble(macBindings);
} else {
	module.exports = require('@s524797336/noble');
}
