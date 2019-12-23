const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`));
};

exports.help = {
    name: "Ping",
    category: "System",
    description: "Savoir son ping",
    usage: "Roles"
  };
