const { Client, Intents } = require('discord.js');

const myIntents = new Intents();
// ban, send message
myIntents.add('GUILD_BANS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING', 'GUILDS',);
const client = new Client({ intents: myIntents });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});



  client.on('message', async (message) => {
    if (message.content === '!unban_all') {
      // take all the bans
      const bans = await message.guild.bans.fetch();
      // unban all the bans
      bans.forEach(ban => {
        message.guild.members.unban(ban.user);
      }
      );
    }
  });



client.login('MTA3NzExMzAxMTgyMDU2NDU4MA.GcYr6M.q2ZhG-f5GZDDmM4wrykNtZZkwahIbRpfJzs9vk');
