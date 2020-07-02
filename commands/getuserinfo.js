let settings = {
    "url": "https://discordapp.com/api/users/173027655719845888",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Authorization": "{NzI2NzE3ODQyOTU4ODQzOTM2.Xv3OXQ.Kap8R03AbrGm2fFIncWF0vNQl_Y}"
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