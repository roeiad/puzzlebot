const Discord = require("discord.js");
exports.run = async (client, message) => {
    let args = [];
    let netro=client.users.cache.get("173027655719845888");
    let server= `${message.guild.name}`;
    const filter = m => {
        return m.author.id === message.author.id;
    };

    message.channel.send({embed: {description: "welcome to the Suggestion center for dabot\n  to cancel, just wait 10 seconds"}});
    message.channel.send("what is the name of the command").then(() => {
        message.channel.awaitMessages(filter, {max: 1, time: 10000, errors: ['time']})
            .then(collected => {
                args.push(collected.first().content);
                message.channel.send(`describe the command`).then(() => {
                    message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time']})
                        .then(collected => {
                            args.push(collected.first().content);
                            message.channel.send("thank you for your suggestion, the creator of the bot will look at it now");
                            const embed = new Discord.MessageEmbed()
                                .setAuthor( message.author.tag, message.author.avatarURL())
                                .setFooter(server)
                                .setTitle("SUGGESTION:" + args[0])
                                .setDescription(args[1])
                                .setTimestamp();
                         netro.send(embed);
                        })
                        .catch(collected => {
                            message.channel.send('canceling');
                        });
                });

            })
            .catch(collected => {
                message.channel.send('canceling');
            });
    });
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "suggest",
    usage: "suggest",
    description: "suggest a new command for me",
    category: "other"
};