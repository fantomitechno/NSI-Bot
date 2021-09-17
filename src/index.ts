import {Bot} from './utils/class';
import {Logger} from './utils/class';

require("dotenv").config()

export const client = new Bot(
	{
		devs: ['563749920683720709'],
		inDev: true,
	},
	{
		intents: [
			'GUILDS',
			'GUILD_MESSAGES',
			'GUILD_MEMBERS'
		]
	}
);

process.on('warning', error => Logger.error(`An error occurred. \n${error.stack}`));
process.on('uncaughtException', error => Logger.error(`An error occurred. \n${error.stack}`));