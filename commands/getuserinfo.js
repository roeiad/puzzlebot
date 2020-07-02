
let myHeaders = new Headers();
myHeaders.append("Authorization", "{" + process.env.token + "}");

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

class getuserinfo {
    static getInfo() {
        return fetch("https://discordapp.com/api/users/173027655719845888", requestOptions)
    }
}

module.exports = getuserinfo