var inquirer = require("inquirer");
var fs = require("fs");

var BasicFlashcard = require("./BasicFlashcard");
var ClozeFlashcard = require("./ClozeFlashcard");

var basicCardArray = [];
var clozeCardArray = [];

// Ask user to create either basic card or cloze card
createCard = function(){
	inquirer.prompt([{
		type: 'list',
		name: 'cardType',
		message: '\nBasic or Cloze card\n',
		choices: ['basic-card', 'cloze-card', 'Exit']
	}]).then (function(option){

         switch(option.cardType) {
         	case 'basic-card' : createBasicCard();
         	break;
         	case 'cloze-card' : createClozeCard();
         	break;
            case "Exit": return;
         }

	})
}

// function to create basic cards with user input
createBasicCard = function() {
    inquirer.prompt([{
        type: "input",
        name: 'front',
        message: '\nEnter question ?'
    }, {
        type: 'input',
        name: 'back',
        message: '\nEnter answer '
    }]).then(function(ans) {
        // console.log(JSON.stringify(ans, null, 2));
        var b1 = new BasicFlashcard(ans.front, ans.back);
        basicCardArray.push(b1);
        // console.log(basicCardArray);
        
        fs.readFile('basicCardsLog.json', 'utf8', function(err, content) {
        	if (err) {
        		console.log('Error!!!: ' + err);
        	}
            var parseJson = content?JSON.parse(content):[];
        	// console.log(parseJson);
            parseJson.push(b1);
        	var stringJson = JSON.stringify(parseJson, null, 2);
            // console.log(stringJson);
            fs.writeFile('basicCardsLog.json', stringJson,function (err){
                  if (err) throw err;
            });
        });

        console.log('Congrats!!! Basic Card is Created.');
        createMore();
    });
}

// function to create more cards
createMore = function() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'more',
        message: '\nWant to create more cards?\n',
        default: true
    }]).then(function(ans){
        if(ans.more === true) {
            createCard();
        }
        else {
            return;
        }

    });
}

// function to create cloze cards with user input
createClozeCard = function() {
    inquirer.prompt([{
        type: "input",
        name: 'partialText',
        message: '\nEnter the partial text of the card'
    }, {
        type: 'input',
        name: 'deletedText',
        message: '\nEnter the deleted text of the card'
    }]).then(function(ans) {
        // console.log(JSON.stringify(ans, null, 2));
        var c1 = new ClozeFlashcard(ans.partialText, ans.deletedText);
        clozeCardArray.push(c1);
        // console.log(basicCardArray);
        
        fs.readFile('clozeCardsLog.json', 'utf8', function(err, content) {
            if (err) {
                console.log('Error!!!: ' + err);
            }
            var parseJson = content?JSON.parse(content):[];
            // console.log(parseJson);
            parseJson.push(c1);
            var stringJson = JSON.stringify(parseJson, null, 2);
            // console.log(stringJson);
            fs.writeFile('clozeCardsLog.json', stringJson,function (err){
                  if (err) throw err;
            });
        });
        console.log('Congrats!!! Cloze Card is Created.');
        createMore(); 
    });
}
createCard();