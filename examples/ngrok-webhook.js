const TelegaBot = require('../');
const ngrok = require('ngrok');

const token = 'TELEGRAM_BOT_TOKEN';
const host = '0.0.0.0';
const port = 443;

ngrok.connect(port, (error, url) => {

    if (error) return console.error('[ngrok] error:', error);

    const bot = new TelegaBot({
        token,
        webhook: { url, host, port }
    });

    bot.on('text', msg => bot.sendMessage(msg.from.id, msg.text));

    bot.start();

});