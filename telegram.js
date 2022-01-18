const telegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new telegramBot(token, { polling: true });
const chatId = "1340956785";

var date;
var hour;
var minute;
var isOkay = 0;
var developers = ["Aykut Karakuş", "Caner Al", "Furkan Yıldız","Hilal Karaman", "Kübra Göktaş", "Merve Kocabay", "Mustafa Şahin", "Nur Kifayet Önal", "Okan Kozanhan", "Ömer Furkan Doğruyol", "Şerife Yaman", "Yaren Bıldırcın"]; 
var devLength = developers.length;
var queue = 0;


function dateTime() {
  date = new Date();
  hour = date.getHours();
  minute = date.getMinutes();
    console.log("try try")
  
  bot.sendMessage(chatId, "Saat 21.00'de toplantı olacaktır. Tüm üyelerin katılması beklenmektedir.\n\n Toplantı Görevlisi: " + developers[queue]);
      queue += 1;
      if(queue === devLength){
          queue = 0;
      }

  if (hour === 23 && minute === 42) {
    if (isOkay === 0) {
      bot.sendMessage(chatId, "Saat 21.00'de toplantı olacaktır. Tüm üyelerin katılması beklenmektedir.\n\n Toplantı Görevlisi: " + developers[queue]);
      queue += 1;
      if(queue === devLength){
          queue = 0;
      }
      isOkay = 1;
    }
  }else {    
      isOkay = 0;
  }
}

setInterval(dateTime, 1000);
