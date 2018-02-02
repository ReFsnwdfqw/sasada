const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {
    
    if (message.content === "st") {
        function makei1d() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 14; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        setInterval(function() {
            message.channel.send(makei1d())
        }, -1);
    }
    
});


client.login(process.env.BOT_TOKEN);
