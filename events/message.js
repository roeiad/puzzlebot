let text = require("../assets/text.json");
let msgContent;
module.exports = async (client, message) => {
    if (message.author.bot) return;


    const settings = message.settings = client.getSettings(message.guild);

    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
        return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
    }


    if (message.content.indexOf(settings.prefix) !== 0) return;


    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.guild && !message.member) await message.guild.fetchMember(message.author);


    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;

    if (cmd && !message.guild && cmd.conf.guildOnly)
        return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");
    msgContent = message.content.toLowerCase();

    if (msgContent.startsWith("i'm")) {
        let i = msgContent.indexOf("i'm");
        let myStr = msgContent.slice(i + 4).split(" ");
        i = 0;
        while (myStr[i] === "" || myStr[i] === "a" || myStr[i] === "the" || myStr[i] === "an") {
            i++;
        }
        let str = myStr[i];
        await message.channel.send("Hi " + str + text.im);
    }
    if (msgContent === "i want oreo") {
        message.author.send("https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif");
    }
    message.flags = [];
    while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
    }
    client.logger.cmd(`[CMD] } ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
    cmd.run(client, message, args);
};
