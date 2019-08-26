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

        const fraseDia = (new Date().getDay() == 1) ? "sexta-feira" : "ontem";

        const res = await web.chat.postMessage({
            channel: "#random",
            text: "Desde " + fraseDia + " foram criados " + newEmojis.length + " novas reactions. Hoje temos um total de " + total + " reactions. :rindodenervoso: " +
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
