const Discord = require("discord.io")
let logger = require('winston');
let respond = true;
let dadjokes = require('./commands/dadJokes')
let puns = require("./commands/puns")
let botUser = "puzzle-bot"
let prefix="p!"

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

    if (message.toLowerCase().indexOf("i'm " || "im") > -1 && user !== botUser && respond) {
        //Classic Dad
        let i = message.toLowerCase().indexOf("i'm ");
        let myStr = (message.substring(i + 4)).split(" ");
        i = 0;
        while (myStr[i] === "" || myStr[i] === "a" || myStr[i] === "the" || myStr[i] === "an") {
            i++;
        }
        let str = myStr[i];
        bot.sendMessage({
            to: channelID,
            message: "Hi " + str + ", I'm puzzlebot!  Pleased to meat you, snot a problem!"
        });
    } else if (message.toLowerCase().indexOf(prefix+"dadjoke") > -1 && user !== botUser && respond) {
        bot.sendMessage({to: channelID, message:dadjokes.getADadJoke()});
    }
    else if (message.toLowerCase().indexOf(prefix+"puns") > -1 && user !== botUser && respond) {
          bot.sendMessage({to: channelID, message: puns.getAPun()});
    }
    else if (message.toLowerCase().indexOf(prefix+"stop") > -1 && user !== botUser && respond) {
        bot.sendMessage({
            to: channelID,
            message: "There is not stopping puzzletron.  Just kidding.  \nType '!puzzlebotstart' to start me again."
        });
        respond = false;
    } else if (message.toLowerCase().indexOf(prefix+"start") > -1 && user !== botUser && !respond) {
        bot.sendMessage({
            to: channelID,
            message: "You've got to be joking me.\nType '!puzzlebotStop' to stop dad facts. \n\n" + getDadJoke()
        });
        respond = true;
    }
    else if (message.toLowerCase().indexOf(prefix+"help") > -1 && user !== botUser && respond) {
        bot.sendMessage({
            to: channelID,
            message: "Beeperuski Booperino I am the grand puzzleBotino!  Your fish is my commandidoodily. \n commands: \n 'p!dadjokes' for a random dad joke  \n 'p!puns' for a random pun \n 'p!stop' to stop \n 'p!Start' to turn back on"
        });
    }

});
