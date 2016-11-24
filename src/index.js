import Discord from 'discord.js';
import Bot from './bot';

const client = new Discord.Client();
const bot = new Bot(client);

if (!process.env.DISCORD_TOKEN) {
  console.error('ERROR: DISCORD_TOKEN must be provided!');
  process.exit(0);
}

bot.login(process.env.DISCORD_TOKEN);
