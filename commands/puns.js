let punList = require('.././puns.json')
class punsjoke
{
     static getPuns() {
        let puns =  punList.puns;
        return  puns[Math.floor(Math.random() * puns.length)];
    }
}
module.exports=punsjoke
