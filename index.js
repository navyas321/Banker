'use strict';



const Alexa = require('alexa-sdk');
//const recipes = require(./recipes');
function getBalance(id){
    var id1 = '58a955591756fc834d905987';
    
       /* var http = require('http');

    var url = 'http://api.reimaginebanking.com/customers/58a955591756fc834d905987/accounts?key=fbae4d60ed04c67d5c3cc8efb30e497e';
    var ret;
    http.get(url, (res) => {
  const statusCode = res.statusCode;
  console.log(statusCode);
    let rawData = '';
  res.on('data', (chunk) => rawData += chunk);
  res.on('end', () => {
    try {
      let parsedData = JSON.parse(rawData);
      console.log(parsedData);
      ret = parsedData.balance;
    } catch (e) {
      console.log(e.message);
    }
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});*/

    return Math.floor(Math.random() * 201);
}


function createAccount(name, balance){
   
    //vdhttp.request(type, url, payload, function (){}, function() {})
   
    
    
return 0;
    
 
}

function payBill(id, payee, amount){
    
    
    return 0;
}

function transfer(id, payee_name, transfer_amount){
    return 0;
}

const APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).
const id = '58a955591756fc834d905987';
const handlers = {
    'NewSession': function () {
        this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = this.t('WELCOME_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },

    'ViewAccountIntent': function () {
        let balance = getBalance(id);
   
    
  
  
        if(balance){
            this.attributes.speechOutput = this.t('BALANCE_MESSAGE') + balance + this.t('DOLLARS');
            this.attributes.repromptSpeech = this.t('RECIPE_REPEAT_MESSAGE');
            //this.emit(':askWithCard', balance, this.attributes.repromptSpeech, cardTitle, recipe);
            this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        } else {
            this.attributes.speechOutput = this.t('FAIL_MESSAGE');
            this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        }
    },


    'CreateAccountIntent': function () {
        let name = this.event.request.intent.slots.name;
        let balance = this.event.request.intent.slots.balance;
        let success = createAccount(name.value, balance.value);
        
        //var http = require('http');

        if(!success){
            this.attributes.speechOutput = this.t('ACCOUNT_MESSAGE');
            this.attributes.repromptSpeech = this.t('RECIPE_REPEAT_MESSAGE');
            //this.emit(':askWithCard', balance, this.attributes.repromptSpeech, cardTitle, recipe);
            this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        } else {
                this.attributes.speechOutput = this.t('FAIL_MESSAGE');
                this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        }
    },

    'PayBillIntent': function () {
        let payee = this.event.request.intent.slots.payee;
        let amount = this.event.request.intent.slots.amount;
        let success = payBill(id, payee.value, amount.value);

        if(!success){
            this.attributes.speechOutput = this.t('BILL_MESSAGE') + amount.value + this.t('DOLLARS2') + payee.value;
            this.attributes.repromptSpeech = this.t('RECIPE_REPEAT_MESSAGE');
            //this.emit(':askWithCard', balance, this.attributes.repromptSpeech, cardTitle, recipe);
            this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        } else {
            this.attributes.speechOutput = this.t('FAIL_MESSAGE');
            this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        }
    },

    'TransferIntent': function () {
        let payee_name = this.event.request.intent.slots.payee_name;
        let transfer_amount = this.event.request.intent.slots.transfer_amount;
        let success = transfer(id, payee_name.value, transfer_amount.value);

        if(!success){
            this.attributes.speechOutput = this.t('TRANSFER_MESSAGE') + transfer_amount.value + this.t('DOLLARS2') + payee_name.value;
            this.attributes.repromptSpeech = this.t('RECIPE_REPEAT_MESSAGE');
            //this.emit(':askWithCard', balance, this.attributes.repromptSpeech, cardTitle, recipe);
            this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        } else {
            this.attributes.speechOutput = this.t('FAIL_MESSAGE');
            this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
        }
    },


    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

const languageStrings = {

    'en-US': {
        translation: {
            //RECIPES: recipes.RECIPE_EN_US,
            SKILL_NAME: 'Cash Me Outside',
            WELCOME_MESSAGE: "Welcome to %s. You can ask a question like, pay my bill or transfer money. You can also create a new account or check your balance ... Now, what can I help you with.",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '%s  - recipe for %s.',
            HELP_MESSAGE: "You can ask questions such as, pay my bill, or, you can say exit or create account or check my balance ...Now, what can I help you with?",
            HELP_REPROMT: "You can say things like, pay my bill, or you can say exit or create account or check my balance...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            RECIPE_REPEAT_MESSAGE: 'If you did not quite get that,   say repeat!! If you want I can make another transaction.',
            RECIPE_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know how to do that. ",
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'the recipe for %s. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that recipe. ',
            RECIPE_NOT_FOUND_REPROMPT: 'What else can I help with?',
            BALANCE_MESSAGE: 'Your balance is ',
            DOLLARS: ' dollars.',
            FAIL_MESSAGE: 'I am sorry. I could not finish your request. Can you repeat that again?',
            ACCOUNT_MESSAGE: 'Your account has been created.',
            BILL_MESSAGE: 'I made the request to pay your bill of ',
            DOLLARS2: ' dollars to ',
            TRANSFER_MESSAGE: 'I made the request to send ',
        },
    },

};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
    
     console.log('start request to ' + event.url);
    var json = {
			"type": "Credit Card",
			"nickname": 'Grahm',
			"rewards": 0,
			"balance": 1000,
			"account_number": "0123456789abcdei"
		} ;
    
    var http = require('http');

var options = {
  host: 'api.reimaginebanking.com',
      path: '/customers/58a955591756fc834d905987/accounts?key=fbae4d60ed04c67d5c3cc8efb30e497e',
  method: 'POST',
   headers: {
    'Content-Type': 'application/json'
  }
};


	
	console.log(JSON.stringify(json));
	
	
var req = http.request(options, function(res) {
    console.log("Got response: " + res.statusCode);
    context.succeed();
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
    context.done(null, 'FAILURE');
    
  });

//This is the data we are posting, it needs to be a string or a buffer

req.write(JSON.stringify(json));

req.end();
};


