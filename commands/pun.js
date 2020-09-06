const text = require("../assets/text.json");
const puns = require("../functions/puns");

exports.run = async (client, message) => {
    let pun = puns.getAPun();
    await message.channel.send(pun);
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "pun",
    category:"commands",
    usage: "pun",
    description: text.help.pun,
};
