const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'MzAyMzAyNTQ2ODM4NDIxNTE3.XO7XKA.NmVldDcDSjO9hRIiKATtrlYGDKM';

const PREFIX = '-';

bot.on('ready', () =>{
    console.log('Bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
            break;
            case 'invite':
                message.channel.sendMessage('https://discord.gg/v6q3azg')
                break;
                case 'info':
                    message.channel.sendMessage('Version 1.0')
                    
            break;
    case 'clear':
         if(!args[1]) return message.reply('Error')
         message.channel.bulkDelete(args[1]);
         break;
    }
    
})

bot.login(token);