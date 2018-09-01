const Discord = require("discord.js");
const client = new Discord.Client();


client.on('guildMemberAdd' ,member => {
  if(member.guild.id !== '408926307372498945') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '485545597877747713').send('Welcome To **Bُubbles** Tumblr .');
},3000);
});


client.login(process.env.BOT_TOKEN);
