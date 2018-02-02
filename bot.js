const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('hello everyone :)');
    //console.log("<ccev [create random channels]\n<tspm [testo][manda messaggi tts]\n<pur [delete message]")
});



client.on('message', message => {
    var prefix = "<";
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "st") {
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
