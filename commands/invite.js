const text = require("../assets/text.json");
exports.run = async (client, message) => {
    message.author.send(text.invite);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bot"],
    permLevel: "User"
};

exports.help = {
    name: "invite",
    usage:"invite",
    category: "commands",
    description: text.help.invite,
};