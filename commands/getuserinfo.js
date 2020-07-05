let request = require('request');
let options = {
    'method': 'GET',
    'url': 'https://discordapp.com/api/users/173027655719845888',
    'headers': {
        'Authorization': '{NzI2NzE3ODQyOTU4ODQzOTM2.XwGi6A.WK5j0R_sogzlbXcYcE-rD8FBlpw}'
    }
};
class getuserinfo {
    static getInfo() {
        request(options, function (error, response) {
            if (error) throw new Error(error);
            return response.body;
        });
    }
}

module.exports = getuserinfo