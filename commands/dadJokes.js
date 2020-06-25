let jokes = require('.././dadjokes.json')
class dadJokes {
    static getADadJoke() {
        let dadJokeList = jokes.jokes;
        return dadJokeList[Math.floor(Math.random() * dadjokeslist.length)];
    }
}
module.exports=dadJokes