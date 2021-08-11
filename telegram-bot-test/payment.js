const TelegramBot = require('node-telegram-bot-api');
var thesaurus = require("thesaurus");

const token = '1904259926:AAHF3QR-hDQp-WedL_9jR3meADtOUVMnofY';


 const bot = new TelegramBot(token, {polling: true});

bot.on("inline_query", (query) => {
    var queryResults = [ ];  
    queryResults.push({
        type: 'article',
        id: '0',
        title: `Saletastic 1 month`,
        description: `Best user experience`,
        input_message_content: {
            title: 'Saletastic Company 1 month subscription',
            description: 'Best user experience',
            payload: 'payload',
            provider_token: '410694247:TEST:6250b730-fd82-4a39-a3cf-5a0b7869f2d1',
            currency: 'KZT',
            prices: [
                {
                    label: 'saletastic demo',
                    amount: 30000
                },
                {
                    label: 'saletastic premium',
                    amount: 35000
                }
            ],
        photo_url: 'https://i1.wp.com/useavalanche.com/wp-content/uploads/2021/01/cropped-logo_transparent.png?fit=512%2C512&ssl=1',
        photo_width: 512,
        photo_height: 512,
        need_name: false,
        need_phone_number: true,
        need_email: false,
        need_shipping_address: false,
        is_flexible: false, //цена товара неизмена независим от способа доставки
        }
    });
    queryResults.push({
        type: 'article',
        id: '1',
        title: `Saletastic 3 month`,
        description: `Best user experience`,
        input_message_content: {
            title: 'Saletastic Company 3 month subscription',
            description: 'Best user experience',
            payload: 'payload',
            provider_token: '410694247:TEST:6250b730-fd82-4a39-a3cf-5a0b7869f2d1',
            currency: 'KZT',
            prices: [
                {
                    label: 'saletastic demo',
                    amount: 80000
                },
                {
                    label: 'saletastic premium',
                    amount: 100000
                }
            ],
        photo_url: 'https://i1.wp.com/useavalanche.com/wp-content/uploads/2021/01/cropped-logo_transparent.png?fit=512%2C512&ssl=1',
        photo_width: 512,
        photo_height: 512,
        need_name: false,
        need_phone_number: true,
        need_email: false,
        need_shipping_address: false,
        is_flexible: false, //цена товара неизмена независим от способа доставки
        }
    });
    queryResults.push({
        type: 'article',
        id: '2',
        title: `Saletastic 1 year`,
        description: `Best user experience`,
        input_message_content: {
            title: 'Saletastic Company 1 year subscription',
            description: 'Best user experience',
            payload: 'payload',
            provider_token: '410694247:TEST:6250b730-fd82-4a39-a3cf-5a0b7869f2d1',
            currency: 'KZT',
            prices: [
                {
                    label: 'saletastic demo',
                    amount: 300000
                },
                {
                    label: 'saletastic premium',
                    amount: 350000
                }
            ],
        photo_url: 'https://i1.wp.com/useavalanche.com/wp-content/uploads/2021/01/cropped-logo_transparent.png?fit=512%2C512&ssl=1',
        photo_width: 512,
        photo_height: 512,
        need_name: false,
        need_phone_number: true,
        need_email: false,
        need_shipping_address: false,
        is_flexible: false, //цена товара неизмена независим от способа доставки
        }
    });
    bot.answerInlineQuery(query.id, queryResults);
});

bot.onText(/\/pay/, msg => {
	const chatID = msg.chat.id;

	bot.sendInvoice(
		chatID,
		'Saletastic Company 1 month subscription',
		'Best user experience',
		'payload',
		'410694247:TEST:6250b730-fd82-4a39-a3cf-5a0b7869f2d1',
		'SOME_RANDOM_STRING_KEY',
		'KZT',
		[
			{
                label: 'saletastic demo',
                amount: 30000
            },
            {
                label: 'saletastic premium',
                amount: 35000
            }
		],
		{
			photo_url: 'https://i1.wp.com/useavalanche.com/wp-content/uploads/2021/01/cropped-logo_transparent.png?fit=512%2C512&ssl=1',
			photo_width: 512,
			photo_height: 512,
			need_name: false,
			need_phone_number: true,
			need_email: false,
			need_shipping_address: false,
			is_flexible: false, //цена товара неизмена независим от способа доставки
		}
	);

    bot.sendInvoice(
		chatID,
		'Saletastic Company 3 month subscription',
		'Best user experience',
		'payload',
		'410694247:TEST:6250b730-fd82-4a39-a3cf-5a0b7869f2d1',
		'SOME_RANDOM_STRING_KEY',
		'KZT',
		[
			{
                label: 'saletastic demo',
                amount: 80000
            },
            {
                label: 'saletastic premium',
                amount: 100000
            }
		],
		{
			photo_url: 'https://i1.wp.com/useavalanche.com/wp-content/uploads/2021/01/cropped-logo_transparent.png?fit=512%2C512&ssl=1',
			photo_width: 512,
			photo_height: 512,
			need_name: false,
			need_phone_number: true,
			need_email: false,
			need_shipping_address: false,
			is_flexible: false, //цена товара неизмена независим от способа доставки
		}
	);
    bot.sendInvoice(
		chatID,
		'Saletastic Company 1 year subscription',
		'Best user experience',
		'payload',
		'410694247:TEST:6250b730-fd82-4a39-a3cf-5a0b7869f2d1',
		'SOME_RANDOM_STRING_KEY',
		'KZT',
		[
			{
                label: 'saletastic demo',
                amount: 300000
            },
            {
                label: 'saletastic premium',
                amount: 350000
            }
		],
		{
			photo_url: 'https://i1.wp.com/useavalanche.com/wp-content/uploads/2021/01/cropped-logo_transparent.png?fit=512%2C512&ssl=1',
			photo_width: 512,
			photo_height: 512,
			need_name: false,
			need_phone_number: true,
			need_email: false,
			need_shipping_address: false,
			is_flexible: false, //цена товара неизмена независим от способа доставки
		}
	);
});