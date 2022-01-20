const telegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new telegramBot(token, { polling: true });
const chatId = process.env.CHATID;

const meetLink = "meet.google.com/atf-vftc-ftd";

// 1340956785

let date = new Date();
let hours = date.getHours();
let minutes = "0" + date.getMinutes();
let seconds = "0" + date.getSeconds();
let currentTime = hours + minutes.substr(-2) + seconds;

console.log(currentTime);


var meetTime = 220000;

console.log(currentTime);
var isOkay = 0;

function meetNotification() {
      bot.sendMessage(
        chatId,"MeetTime:" + meetTime + "CurrentTime:" + currentTime +
        "Saat 21.00'de toplantı olacaktır. Tüm üyelerin katılması beklenmektedir.\n\n Toplantı Adresi: " +
          meetLink
      );
  } 

setTimeout(function () {
  meetNotification()
}, meetTime - currentTime);
