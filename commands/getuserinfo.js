let settings = {
    "url": "https://discordapp.com/api/users/173027655719845888",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Authorization": "{"+process.env.token+"}"
    },
};

class getuserinfo {
    static getInfo() {
        $.ajax(settings).done(
            function (response) {
                return response;
            }
        );
    }
}
module.exports=getuserinfo