const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {
    var prefix = "£";
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content === "start"){
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
        setTimeout(function() {
            message.channel.send(".gift <@160473061022236672> 500");
        }, 3, 6e+6);
    }
    if(message.content === "say"){
        message.channel.send(args.join(" "));
    }
    
});


client.login(process.env.BOT_TOKEN);
