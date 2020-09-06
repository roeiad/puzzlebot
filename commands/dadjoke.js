const joke= require("../functions/dadjokes");
const text= require("../assets/text.json");
exports.run = async (client, message) => {
  let dadjoke= joke.getADadJoke();
  await message.channel.send(dadjoke);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "dadjoke",
  category:"commands",
  usage:"dadjoke",
  description: text.help.dadjoke,
};