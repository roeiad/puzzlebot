const Discord = require("discord.io")
let logger = require('winston');
let respond = true;
let dadjokes = require('./commands/dadJokes')
let puns = require("./commands/puns")
let text = require("./text.json")
let {prefix,botUser}=require("./conf.json")

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

 if (message.toLowerCase().indexOf("i'm " ) > -1 && userID === "206889823187894272" && respond) {
    bot.sendMessage({
        to: channelID,
        message: "Hi bitch" + text.im
    });
}     else if (message.toLowerCase().indexOf("i'm ") > -1 && userID === "173027655719845888" && respond) {
    bot.sendMessage({
        to: channelID,
        message: "Hi master" + text.im
    });
}
   else if (message.toLowerCase().indexOf("i'm " ) > -1 && respond) {
        let i = message.toLowerCase().indexOf("i'm" || "im");
        let myStr = (message.substring(i + 4)).split(" ");
        i = 0;
        while (myStr[i] === "" || myStr[i] === "a" || myStr[i] === "the" || myStr[i] === "an" || myStr[i] === "The" || myStr[i] === "An" || myStr[i] === "A") {
            i++;
        }
        let str = myStr[i];
        bot.sendMessage({
            to: channelID,
            message: "Hi " + str + text.im
        });
    }

     else if (message.toLowerCase().indexOf(prefix + "dadjoke") > -1  && respond) {
        bot.sendMessage({to: channelID, message: dadjokes.getADadJoke()});
    } else if (message.toLowerCase().indexOf(prefix + "puns") > -1  && respond) {
        bot.sendMessage({to: channelID, message: puns.getAPun()});
    } else if (message.toLowerCase().indexOf(prefix + "stop") > -1  && respond) {
        bot.sendMessage({
            to: channelID,
            message: text.stop
        });
        respond = false;
    } else if (message.toLowerCase().indexOf(prefix + "start") > -1  && !respond) {
        bot.sendMessage({
            to: channelID,
            message: text.start
        });
        respond = true;
    } else if (message.toLowerCase().indexOf(prefix + "help") > -1  && respond) {
        bot.sendMessage({
            to: channelID,
            message: text.help
        });
    }

});
