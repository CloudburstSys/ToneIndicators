const { Plugin } = require("powercord/entities");

module.exports = class PowercordPlugin extends Plugin {
	async startPlugin() {
		// plugin load, do shit here
	}
	
	pluginWillUnload() {
		// plugin unload, do shit here
	}
}
