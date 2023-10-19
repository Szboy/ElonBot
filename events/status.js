const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Event Compenents Loaded! Logged in as ${client.user.tag}`);
	},
};