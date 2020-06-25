let punList = require('.././puns.json')
class punsjoke
{
    getPuns(channelID) {
        let puns = punList.puns;
        puns= puns[Math.floor(Math.random() * puns.length)];
      return  bot.sendMessage({to: channelID, message: puns()});

    }
}
module.exports=punsjoke
