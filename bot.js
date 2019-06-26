const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593394900675067916")
setInterval(function() {
channel.send(`best best best best best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);