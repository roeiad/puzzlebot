const Discord = require("discord.io")
let logger = require('winston');
let respond = true;
let dadjokes = require('./dadjokes.json')
let punsjoke = require("./commands/puns")
let botUser = "puzzle-bot"

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
let bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});

function getDadJoke() {
    let dadjokeslist = dadjokes.jokes;
    return dadjokeslist[Math.floor(Math.random() * dadjokeslist.length)];

}


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
    } else if (message.toLowerCase().indexOf("!dadjoke") > -1 && user !== botUser && respond) {
        bot.sendMessage({to: channelID, message: getDadJoke()});
    } else if (message.toLowerCase().indexOf("!puns") > -1 && user !== botUser && respond) {
          bot.sendMessage({to: channelID, message: punsjoke.getPuns()});
    } else if (message.toLowerCase().indexOf("!puzzlebotstop") > -1 && user !== botUser && respond) {
        bot.sendMessage({
            to: channelID,
            message: "There is not stopping puzzletron.  Just kidding.  \nType '!puzzlebotstart' to start me again."
        });
        respond = false;
    } else if (message.toLowerCase().indexOf("!puzzlebotstart") > -1 && user !== botUser && !respond) {
        bot.sendMessage({
            to: channelID,
            message: "You've got to be joking me.\nType '!puzzlebotStop' to stop dad facts. \n\n" + getDadJoke()
        });
        respond = true;
    } else if (message.toLowerCase().indexOf("!puzzlebot") > -1 && user !== botUser && respond) {
        bot.sendMessage({
            to: channelID,
            message: "Beeperuski Booperino I am the grand puzzleBotino!  Your fish is my commandidoodily. \n commands: \n '!dadjokes' for a random dad joke  \n '!puns' for a random pun \n '!puzzlebotstop' to stop \n '!puzzlebotStart' to turn back on"
        });
    }

});
