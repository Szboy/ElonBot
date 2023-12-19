require('dotenv').config();
const { Events, bold } = require('discord.js')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
            message.suppressEmbeds(true)
            const fixMessage = (message.content).replaceAll(/x.com|twitter.com/gi, process.env.FIXSOURCE);
            message.channel.send(bold(message.author) + " sent a twitter link:\n" + fixMessage);
            setTimeout(() => message.delete(), 10)
        }
}