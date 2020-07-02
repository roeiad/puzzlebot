let jokes = require('./dadjokes.json')
let punList = require('./puns.json')

class commands {
    static getADadJoke() {
        let dadJokeList = jokes.jokes;
        return dadJokeList[Math.floor(Math.random() * dadjokeslist.length)];
    }
    static getAPun() {
        let puns =  punList.puns;
        return  puns[Math.floor(Math.random() * puns.length)];
    }
}
module.exports=commands