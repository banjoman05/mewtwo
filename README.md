This is a very simple discord bot. It responds to simple commands.

(See more here: https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/)

This readme assumes you already have a Discord bot and know how to add them to your Discord server.

# 1. Create local files and edit as needed.
```
auth.json
package.json
mewtwo.js
loop.sh
start_mewtwo.sh
```
# 2. Install dependencies
```
$ npm install discord.io winston –save
$ npm install https://github.com/woor/discord.io/tarball/gateway_v6
```
# 3. Start it manually
```
$ node mewtwo.js
```
# 4. Start it manually with an autorestart
```
$ loop.sh
```
# 5. Start it manuaally with the loop and run it in a screen session
```
$ screen -dm -S mewtwo ~/loop.sh
```
# 6. Use a script to start the bot at boot and restart if crashed
Edit start_mewtwo.sh as needed and add line to crontab.

`$ crontab -e`
```
# Run every 1 minute
* * * * * ~/start_mewtwo.sh >/dev/null 2>&1
```
# 7. Extra monitoring
Edit `mewtwo_check.sh`, add your cell alias or email address.

$ crontab -e
```
# Run every 15 min
*/15 * * * * ~/mewtwo_check.sh >/dev/null 2>&1
```










