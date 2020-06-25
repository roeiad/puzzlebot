let punList = require('.././puns.json')
        let puns = punList.puns;
        return  puns[Math.floor(Math.random() * puns.length)];

