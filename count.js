const dotenv = require('dotenv');
const SlackController = require('./controller/SlackController');
const EmojiController = require('./controller/EmojiController');

dotenv.config();

async function run(){

	const filename = process.env.FILE_NAME;

	console.log("Requesting...");
	const newEmojis = await SlackController.fetchEmoji(process.env.SLACK_TOKEN);
	console.log("Fetched Data");

	console.log("Retrieving from disk...");
	const oldEmojis = await EmojiController.retrieveFromDisk(filename);
	const datedEmojis = EmojiController.dateEmojis(newEmojis);
	
	console.log("Comparing...");
	const diffEmoji = EmojiController.getDifference(datedEmojis, oldEmojis);
	
	
	console.log("Saving to disk...");
	EmojiController.saveToDisk(filename, oldEmojis, diffEmoji);
	
	console.log("Warning...");
	SlackController.warnNewEmojis(diffEmoji, newEmojis.length);
}

run();
