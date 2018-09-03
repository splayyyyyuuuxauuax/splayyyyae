const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
هلآ والله بك ي كيكة تجي تنورني بسرفري ونكون آصحآب ي قلبي م يفرق شي لو بتجي لعندنآ ي عمري خلنآ نتعآرف  خسآرة والله فخم زيك م يكون عندنآ
https://discord.gg/c95c8zF 
:hearts:
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
هلآ والله بك ي كيكة تجي تنورني بسرفري ونكون آصحآب ي قلبي م يفرق شي لو بتجي لعندنآ ي عمري خلنآ نتعآرف  خسآرة والله فخم زيك م يكون عندنآ
https://discord.gg/c95c8zF 
:hearts:
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
