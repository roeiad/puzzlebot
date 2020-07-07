let jokes = require('./dadjokes.json')
let punList = require('./puns.json')
let responds=require('./puzzle.json')

class commands {
    static getADadJoke() {
        let dadJokeList = jokes.jokes;
        return dadJokeList[Math.floor(Math.random() * dadJokeList.length)];
    }
    static getAPun() {
        let puns =  punList.puns;
        return  puns[Math.floor(Math.random() * puns.length)];
    }
    static puzzleResponds() {
        let respond = responds.respons  ;
        return  respond[Math.floor(Math.random() * respond.length)];
    }
}
module.exports=commands