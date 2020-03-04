const Discord = require("discord.js");
const client = new Discord.Client();
var auth = require('./auth.json');

const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size = 1 ) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find(channel => channel.name === "welcome").send(userlist + " Welcome to the Team Struggle Discord! Please follow the following steps to get verified as a **@recruit** \n \n **1)** Change your Buddy's name to today's date. \n **2)** Update your Discord Nickname to match your Trainer's in game name. \n **3)** Take and Submit a screenshot of your Trainer Profile (with buddy name visible) to the <#577942624196100119> channel. \n **4)** Be Patient, our approval bot was smashed by Team Rocket. We have to manually confirm your screenshot. Hatch an egg, do a raid, check out a nest while you wait! \n \n If you are here as a **@Regional Competitor** please head over to <#684902911335333908> for an example of how to format your screenshot. \n **1)** Update your discord nickname to reflect your Silph.gg nickname \n **2)** Submit a screenshot displaying the message section of the silph.gg website with your nickname visible.");
    newUsers[guild.id].clear();

  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

client.login("[redacted secret]");
