const TelegramBot = require('node-telegram-bot-api');

const token = '1904259926:AAHF3QR-hDQp-WedL_9jR3meADtOUVMnofY';


 const bot = new TelegramBot(token, {polling: true});
 const attitude = require('./attitudes.json')
 const killer = require('./killer')

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});



// bot.onText(/\/pay/, (msg) => {

//     const inlineKeyboard = bot.inlineKeyboard([
//         [
//             bot.inlineButton('Take all my money!', {pay: true})
//         ]
//     ]);

//     console.log('malma')

//     return bot.sendInvoice(msg.from.id, {
//         title: 'donation to Chingiz',
//         description: 'Please I need to pay for college',
//         payload: 'telebot-test-invoice',
//         provider_token: '410694247:TEST:6250b730-fd82-4a39-a3cf-5a0b7869f2d1',
//         startParameter: 'pay',
//         currency: 'KZT',
//         prices: [
//             {label: 'Tea', amount: '1703'},
//             {label: 'Coffee', amount: '1488'},
//             {label: 'Dress', amount: '667'},
//         ],
//         replyMarkup: inlineKeyboard
//     }).then(data => {
//         console.log('OK', data);
//     }).catch(error => {
//         console.log('ERROR', error);
//     });
    
// });

// bot.on('shippingQuery', (msg) => {
//     console.log('shippingQuery', msg);
// });

// bot.on('preShippingQuery', (msg) => {
//     console.log('preShippingQuery', msg);

//     const id = msg.id;
//     const isOk = true;

//     return bot.answerPreCheckoutQuery(id, isOk);

// });

// bot.on('successfulPayment', (msg) => {
//     console.log('successfulPayment', msg);

//     return bot.sendMessage(msg.from.id, `Thank you, ${msg.from.first_name}!`);

// });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});


var thesaurus = require("thesaurus");

var inlineQuery="";
var inlineID=0;
var options = {
  polling: {
    interval: 5000,
    timeout: 20
  }	
};

bot.on('inline_query', function (msg) {
    inlineID=msg.id;
    inlineQuery=msg.query;  
    // photo can be: a file path, a stream or a Telegram file_id
    var message=thesaurus.find(inlineQuery)
    var x=thesaurus.find(inlineQuery).length;
    var i=0;
    var length=0;
    var messagetextobj={}
    var results=[];
  
    function obj(title,id){
      this.type='article';
      this.title=title;
      this.id=id.toString();
      var obj={}
      obj.message_text=title;
      this.input_message_content=obj;
      };      
      if (message.length>40){
          length=40;
      }
      else{
        length=message.length;
      }
      while(i<length){ 	
         results[i]=new obj(message[i],i);
         i++;	
      }
  //console.log(message)
      if (message.length>0){ bot.answerInlineQuery(inlineID.toString(), results)}
  });

