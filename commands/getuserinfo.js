let https = require('follow-redirects').https;
let fs = require('fs');

let options = {
    'method': 'GET',
    'hostname': 'discordapp.com',
    'path': '/api/users/173027655719845888',
    'headers': {
        'Authorization': '{NzI2NzE3ODQyOTU4ODQzOTM2.XwGi6A.WK5j0R_sogzlbXcYcE-rD8FBlpw}'
    },
    'maxRedirects': 20
};

class getuserinfo {
    static getInfo() {

        let req = https.request(options, function (res) {
            let chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function (chunk) {
                let body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", function (error) {
                console.error(error);
            });
        });

        req.end();


    }
}

module.exports = getuserinfo