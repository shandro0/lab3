const TelegramBot = require('node-telegram-bot-api');

// Замените TELEGRAM_BOT_TOKEN на свой токен
const bot = new TelegramBot('6767148413:AAE9RQkNkn2a-gGH1aTH5Zng-26EVCpl-3c', {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я бот, который инвертирует прописные буквы в заглавные. Просто отправь мне текст, и я верну его с инвертированными буквами.');
});

bot.onText(/^(?!\/start).+$/, (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const invertedText = invertCapitalLetters(text);
  bot.sendMessage(chatId, invertedText);
});

function invertCapitalLetters(text) {
  let invertedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (char === char.toUpperCase()) {
      invertedText += char.toLowerCase();
    } else {
      invertedText += char.toUpperCase();
    }
  }
  return invertedText;
}
