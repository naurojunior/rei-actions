const Emoji = require('../logic/Emoji.js');
const fs = require('fs');
const DateFormatter = require('../logic/DateFormatter.js');

module.exports = {

    dateEmojis(newEmojis, date = DateFormatter.getToday()){
        return addDate(newEmojis, date);
    },

    saveToDisk(filename, oldEmojis, datedNewEmoji){
        const allEmojisDated = oldEmojis.concat(datedNewEmoji);
        fs.writeFileSync(filename, Emoji.toJson(allEmojisDated));
    },

    retrieveFromDisk(filename){
        return Emoji.asJson(fs.readFileSync(filename, "utf8"));
    },

    getDifference(newEmojis, oldEmojis){
        return Emoji.getDifference(oldEmojis, newEmojis);
    }

}

function addDate(emojiList, date){
	return emojiList.map(function (emojiName){
		return {date: date, emoji: emojiName};
	});
}