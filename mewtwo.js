var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// My variables
var help1 = "Beep Boop, I'm a bot. Here's some stuff I can do: **!help, !nests, !raids, !tasks, !eggs, !pvp**";
var raids1 = "https://thesilphroad.com/raid-bosses";
var nests1 = "https://www.facebook.com/groups/1796511700616931/announcements/";
var tasks1 = "https://thesilphroad.com/research-tasks";
var eggs1 = "https://thesilphroad.com/egg-distances";
var pvp1 = "https://silph.gg/";

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
        // !help
                case 'help':
                bot.sendMessage({
                to: channelID,
                message: (help1)
                });
                break;
        // !nests
                case 'nests':
                bot.sendMessage({
                to: channelID,
                message: (nests1)
                });
                break;
        // !raids
                case 'raids':
                bot.sendMessage({
                to: channelID,
                message: (raids1)
                });
                break;
        // !tasks
                case 'tasks':
                bot.sendMessage({
                to: channelID,
                message: (tasks1)
                });
                break;
        // !eggs
                case 'eggs':
                bot.sendMessage({
                to: channelID,
                message: (eggs1)
                });
                break;
        // !pvp
                case 'pvp':
                bot.sendMessage({
                to: channelID,
                message: (pvp1)
                });
                break;
}
     }
});
