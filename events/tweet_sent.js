require('dotenv').config();
const { Events, bold } = require('discord.js')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if ((message.content).match(/\bx.com\b|\btwitter.com\b/gi)) {
            const dateOptions = {
                    weekday: 'short',
                    day: 'numeric',
                    year: 'numeric', 
                    month: 'long',
                    hour: 'numeric', 
                    minute: 'numeric',
                    second: 'numeric', 
            }
            message.suppressEmbeds(true)
            const fixMessage = (message.content).replaceAll(/x.com|twitter.com/gi, process.env.FIXSOURCE);
            message.channel.send(bold(message.author) + " sent a twitter link on " + (message.createdAt).toLocaleString('en-us',dateOptions) + ":\n " + fixMessage);
            setTimeout(() => message.delete(), 10)
        }
    }
}