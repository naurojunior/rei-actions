const { WebClient } = require('@slack/web-api');
const dotenv = require('dotenv');

const web = connect();

module.exports = {

    async fetchEmoji(){        
        const res = await web.emoji.list();
        return Object.keys(res.emoji);
    },

    async warnNewEmojis(newEmojis, total){
        const emojiList = newEmojis.map(function (data){
            return ":" + data.emoji + ":";
        });

        const res = await web.chat.postMessage({
            channel: "#random",
            text: "Desde ontem foram criadas " + newEmojis.length + " novas reactions. Hoje temos um total de " + total + " reactions. :rindodenervoso: " +
            "\nEsses foram os novos emojis: " + emojiList.join(" "),
            as_user: false,
            username: "Rei Actions",
            icon_emoji: ":rei:"
        });

        console.log(res.data);
    }

}

function connect(){
    dotenv.config();
    return new WebClient(process.env.SLACK_TOKEN);
}
