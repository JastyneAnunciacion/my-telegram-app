const TelegramBot = require('node-telegram-bot-api');

const token = '6934891076:AAGv67mVfYVWO_85FAxENTF6hHRglGbpOJQ';

const bot = new TelegramBot(token, {polling: true});

function sendReply(msg, text) {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, text);
}

bot.onText(/\/echo (.+)/, (msg, match) => {
    const resp = match[1];
    sendReply(msg, resp);
});

bot.onText(/\/time/, (msg) => {
    const now = new Date();
    const timeString = now.toString();
    sendReply(msg, `Current Time: ${timeString}`);
});

const jokes = [
    'Why don\'t scientists trust atoms? Because they make up everything!',
    'Why did the chicken go to the seance? To talk to the other side.',
    'Why don\'t some animals play cards? Because they\'re afraid of cheetahs.'
];

bot.onText(/\/joke/, (msg) =>{
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    sendReply(msg, joke);
});

bot.onText(/\/square (\d+)/, (msg, match) => {
    const num = Number(match[1]);
    const square = num * num;
    sendReply(msg, `The square of ${num} is ${square}`);
});

bot.onText(/\/buttons/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: JSON.stringify({
            keyboard: [
                ['Option 1', 'Option 2'],
                ['Option 3']
            ],
            one_time_keyboard: true
        })
    };
    bot.sendMessage(chatId, 'Choose an option:', options);
});

bot.on('inline_query', (query) => {
    const results = [];
    bot.answerInlineQuery(query.id, results);
});

var options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'Button 1', callback_data: '1' }],
        [{ text: 'Button 2', callback_data: '2' }],
        [{ text: 'Button 3', callback_data: '3' }]
      ]
    })
  };
  
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    const opts = {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
    };
    let text;
  
    if (action === '1') {
      text = 'You hit button 1';
    }
  
    bot.editMessageText(text, opts);
  });
  
  