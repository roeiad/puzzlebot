let punList = require('../assets/puns.json');
class puns {
    static getAPun() {
        let puns = punList.puns;
        return puns[Math.floor(Math.random() * puns.length)];
    }
}
module.exports=puns;