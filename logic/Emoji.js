module.exports = {

    getDifference(oldEmojis, newEmojis){
        return newEmojis.filter(comparer(oldEmojis));
    },

    asJson(emojiList){
        return JSON.parse(emojiList);
    },

    toJson(emojiList){
        return JSON.stringify(emojiList);
    }

}


function comparer(otherArray){
    return function(current){
        return otherArray.filter(function(other){
            return other.emoji == current.emoji
        }).length == 0;
    }   
}

