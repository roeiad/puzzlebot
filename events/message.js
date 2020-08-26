// The MESSAGE event runs anytime a message is received
// Note that due to the binding of client to every event, every event
// goes `client, other, args` when this function is run.
let text =require("../assets/text.json")
module.exports = async (client, message) => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  // Grab the settings for this server from Enmap.
  // If there is no guild, get default conf (DMs)
  const settings = message.settings = client.getSettings(message.guild);

  // Checks if the bot was mentioned, with no message after it, returns the prefix.
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
  }
  if (message.content.startsWith("i'm")){
    let msg=message.content
    let i = msg.indexOf("i'm")
    let myStr =message.content.slice(i+4).split(" ");
    i = 0;
    while (myStr[i] === "" || myStr[i] === "a" || myStr[i] === "the" || myStr[i] === "an" || myStr[i] === "The" || myStr[i] === "An" || myStr[i] === "A") {
      i++;
    }
    let str = myStr[i];
    await message.channel.send("Hi " + str + text.im)

  }
  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if (message.content.indexOf(settings.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // If the member on a guild is invisible or not cached, fetch them.
  if (message.guild && !message.member) await message.guild.fetchMember(message.author);



  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if (!cmd) return;

  // Some commands may not be useable in DMs. This check prevents those commands from running
  // and return a friendly error message.
  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");



  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  client.logger.cmd(`[CMD] } ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  cmd.run(client, message, args);
};
