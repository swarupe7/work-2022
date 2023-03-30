const request= require('request');
const TelegramBot = require('node-telegram-bot-api');

const token='5836873351:AAGd_AtgARDowQHwjWjXtLL_U1VwTthaRPc';

const bot = new TelegramBot(token,{polling:true});


bot.on('message',function(mg){
    console.log(mg);
    request("https://api.openweathermap.org/data/2.5/weather?q="+mg.text+"&appid=4e92f38e5da9aa934017303d908c0573",function(error,response,body){
console.log(JSON.parse(body));

        
      

if(JSON.parse(body).cod!='404'){
   
           bot.sendMessage(mg.chat.id,'City name-->'+JSON.parse(body).name);
           bot.sendMessage(mg.chat.id,'temparature-->'+JSON.parse(body).main.temp);
           bot.sendMessage(mg.chat.id,'Situation-->'+JSON.parse(body).weather[0].main);
          bot.sendMessage(mg.chat.id,'country-code-->'+JSON.parse(body).sys.country);
            bot.sendMessage(mg.chat.id,'Description-->'+JSON.parse(body).weather[0].description);}
            else{
              bot.sendMessage(mg.chat.id,"place not found");
            }
        })
    
      })