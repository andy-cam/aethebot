# AetheBot for Discord

## Setup

Create a Discord Bot account 
[here](https://discordapp.com/developers/applications/me).

Copy the token it generated.

Create a `development.env` file in the root of this repo.

Inside this file, paste the token like this:

```
DISCORD_TOKEN=[token]
```

You can now run the bot inside Docker:

```
docker-compose up
```

Or by just pressing F5 inside Visual Studio Code. 

Want to start it manually? Well you're on your own with regards to environment 
variables, but you can build-and-run using `yarn start`.

Once it is running, it will print a URL to your terminal. You can use this URL
to join the bot to servers.

## Environment Variables


| Variable             | Required? | Purpose | Example |
| -------------------- | --------- | ------- | ------- |
| `DISCORD_TOKEN`      | Yes       | The generated Discord Bot account token for authentication with Discord. | `aaabbbccc111222333`|
| `WEBSITE_BASE_URL`   | No        | The base URL for the bot's internal website. Leave undefined to not run the website.| `https://my-great-aethebot-instance.herokuapp.com`
| `DEFAULT_ADMIN_USER` | No        | Discord User ID for the default admin user. | `12345678901234567` |
| `REDIS_URL`          | No        | URL to your Redis instance, to use as the bot's persistent storage. | `redis://user:password@my-redis.host:13337`|

## Creating a Voice Noise

The voice noises themselves are in an object in 
`src/features/voicenoise/noises.ts`. Provide the file name for the noise to
play, and a regular expression to match on. It will play the noise in the
channel you are currently in if the regex matches and you've mentioned the bot.
Please keep try to keep the volume of your noise consistent with the other
noises.

Noises can be provided in any FFmpeg supported format (such as mp3), or as a raw
Opus stream. Raw Opus streams are preferred, since they don't require
transcoding on the server and will therefore load much faster. You can create
a stream yourself using FFmpeg like this:

```
ffmpeg -i [input].mp3 -vn -map 0:a -acodec libopus -f data -sample_fmt s16 -vbr off -ar 48000 -ac 2 -ab 64k [output].dat
```

You *must* name the resulting file with the `.dat` extension as a clue for
AetheBot that this file is a raw Opus stream, otherwise it will pass it on to
FFmpeg for transcoding.

Note that we will be switching to proper `.opus` (really OGG) files once the
Discord.js Prism Media changes land.
