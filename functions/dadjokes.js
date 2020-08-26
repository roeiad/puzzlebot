let jokes = require('../assets/dadjokes.json')

class dadjokes {
    static getADadJoke() {
        let dadJokeList = jokes.jokes;
        return dadJokeList[Math.floor(Math.random() * dadJokeList.length)];
    }

}
module.exports=dadjokes