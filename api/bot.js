const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота
const token = '7303836526:AAH7VqRy5t5kpz1_7f0O4xWhv2PLfYvq-jE';
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я ваш Telegram бот.');
});

// Ответ на любые другие сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Вы сказали: ${msg.text}`);
});

module.exports = (req, res) => {
  res.status(200).send('Telegram Bot is running');
};

