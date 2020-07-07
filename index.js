const Discord = require("discord.io")
let logger = require('winston');
let respond = true;
let commands = require("./assets/commands")
let text = require("./assets/text.json")
let {prefix, botUser} = require("./conf.json")
let users = require("./assets/users.json")


logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
let bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.sendMessage("i'm on")
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message && user === botUser) return;

    if (message.toLowerCase().indexOf("i'm ") > -1 && userID === users.meg && respond) {
        bot.sendMessage({
            to: channelID,
            message: "Hi bitch" + text.im
        });
    } else if (message.toLowerCase().indexOf("i'm ") > -1 && userID === users.netro && respond) {
        bot.sendMessage({
            to: channelID,
            message: "Hi master" + text.im
        });
    } else if (message.toLowerCase().indexOf("i'm ") > -1 && userID === users.puzzle && respond) {
        bot.sendMessage({
            to: channelID,
            message: commands.puzzleResponds()
        });
    } else if (message.toLowerCase().indexOf("i want oreo") > -1 && respond) {
        bot.sendMessage({
            to: userID,
            message: "https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif"
        });
    } else if (message.toLowerCase().indexOf("i'm ") > -1 && respond) {
        let i = message.toLowerCase().indexOf("i'm" || "im");
        let myStr = (message.substring(i + 4)).split(" ");
        i = 0;
        while (myStr[i] === "" || myStr[i] === "a" || myStr[i] === "the" || myStr[i] === "an" || myStr[i] === "The" || myStr[i] === "An" || myStr[i] === "A") {
            i++;
        }
        let str = myStr[i];
        if (str === "puzzle" || str === "Puzzle") {
            bot.sendMessage({
                to: channelID,
                message: text.puzzle
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "Hi " + str + text.im
            });
        }
    } else if (message.toLowerCase().indexOf(prefix + "dadjoke") > -1 && respond) {
        bot.sendMessage({to: channelID, message: commands.getADadJoke()});
    } else if (message.toLowerCase().indexOf(prefix + "pun") > -1 && respond) {
        bot.sendMessage({to: channelID, message: commands.getAPun()});
    } else if (message.toLowerCase().indexOf(prefix + "stop") > -1 && respond) {
        bot.sendMessage({
            to: channelID,
            message: text.stop
        });
        respond = false;
    } else if (message.toLowerCase().indexOf(prefix + "start") > -1 && !respond) {
        bot.sendMessage({
            to: channelID,
            message: text.start
        });
        respond = true;
    } else if (message.toLowerCase().indexOf(prefix + "help") > -1 && respond) {
        bot.sendMessage({
            to: channelID,
            embed: {
                title: 'Help',
                color: 6826080,
                description: text.help,
                fields: [{
                    name: "commands",
                    value: text.commands
                }
                ],
                footer: {
                    text: text.created
                }
            }
        });
    }

});
