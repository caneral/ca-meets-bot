const telegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new telegramBot(token, { polling: true });
const chatId = process.env.CHATID;

const meetLink = "meet.google.com/atf-vftc-ftd";

// 1340956785
var currentTime = new Date().getTime();
var meetTime = 1642704300;

console.log(currentTime);
var isOkay = 0;

function meetNotification() {
      bot.sendMessage(
        chatId,
        "Saat 21.00'de toplantı olacaktır. Tüm üyelerin katılması beklenmektedir.\n\n Toplantı Adresi: " +
          meetLink
      );
  } 

setTimeout(function () {
  meetNotification()
}, meetTime - currentTime);
