//installing chalk

const chalk = require('chalk');

console.log(chalk.red.bold('Welcome to the ' + chalk.blue.underline.bold('FC Barcelona') + ' Quiz!'));

const log = console.log;
log(chalk.blue.bold('---------------------------------\n'));


//installing readlineSync

var readlineSync=require('readline-sync');


//Signing UP

log(chalk.black.bgHex("#add8e6").bold('Sign up to play the FC Barcelona Quiz\n'));

var userName = readlineSync.question(chalk.hex('#FFFF00').bgBlue('Username:') + (' '));

var password = readlineSync.question(chalk.hex('#FFFF00').bgBlue('Password:') + (' '), {hideEchoBack : true, mask: require('chalk').magenta('\u1FA7')});


//Welcoming

log('\nHey ' + chalk.red.bold(userName) + ' Welcome to ' + chalk.red.underline('Mes que un Club!\n'));

log(chalk.bgRedBright(`Rules:`));
log(chalk.black.bgWhiteBright.bold(`
 Quiz consit of 3 Levels 
 Level 1: 2 Questions 
 Level 2: 3 questions 
 Level 3: 4 Questions 
 As you answers all questions you will be qualified to next Level 
 Final Round will Make you the Champion! `));

log("\nLet's " + chalk.black.bold.bgGreen("START") + ("...\n"));

log(chalk.blue("------------------------------------\n"));


// function + if statement LEVEL 1--------------------------------------------------------

var points = 0;


function play(question,answer,options){

log("\n# "+question);

var optno=readlineSync.keyInSelect(options,null,{cancel:false});

if(points>=3 && options[optno] === answer){

  log('\nYou Scored ' + chalk.yellow.bold('another Goal!'));
  points = points + 3;
  log('Your goal point are ' + chalk.magentaBright.bold(points));
}


else if(options[optno] === answer){

  log('You Scored a ' + chalk.yellowBright.bold('Goal!'));
  points = points + 3;
  log('Your goal point are ' + chalk.red.bold(points));
}

else{

log(chalk.bold.bgMagenta('Oops you missed :'));
log('Your goal point are ' + chalk.red.bold(points));
    
    }

if(points==6)
{

  log(`\n\n                    ` + chalk.black.bold.bgYellowBright.bold('Voila Qualified for level 2' + `\n\n`));

}
else if(i==lastQues-1 && points<=3){

log(chalk.bold.bgMagentaBright('Try Again, just learn :D'));

}
}


//func + if for level 2 -------------------------------------------------------------------

function playl2(questionl2,answerl2,optionsl2){

log("\n# "+questionl2);

optno=readlineSync.keyInSelect(optionsl2,null,{cancel:false});

if(points>=9 && optionsl2[optno] === answerl2){

  log('\nYou Scored ' + chalk.yellow.bold('another Goal!'));
  points = points + 3;
  log('Your goal point are ' + chalk.magentaBright.bold(points));
}


else if(optionsl2[optno] === answerl2){

  log('You Scored a ' + chalk.yellowBright.bold('Goal!'));
  points = points + 3;
  log('Your goal point are ' + chalk.red.bold(points));
}

else{

log(chalk.bold.bgMagenta('Oops you missed, try again :D\nNever Lose Hope'));
log('Your goal point are ' + chalk.red.bold(points));
}

if(points==15)
{

  log(`\n\n                    ` + chalk.black.bold.bgYellowBright.bold('Vamos Qualified for FINALS'));

}
else if(i==lastQues-1 && points<15){

log(chalk.bold.bgMagentaBright('Try Again, just learn :D'));

}
}

//if for finals -------------------------------------------------------------------------------
function playl3(questionl3,answerl3,optionsl3){

log("\n# "+questionl3);

optno=readlineSync.keyInSelect(optionsl3,null,{cancel:false});

if(points>=18 && optionsl3[optno] === answerl3){

  log('\nYou Scored ' + chalk.yellow.bold('another Goal!'));
  points = points + 3;
  log('Your goal point are ' + chalk.magentaBright.bold(points));
}


else if(optionsl3[optno] === answerl3){

  log('You Scored a ' + chalk.yellowBright.bold('Goal!'));
  points = points + 3;
  log('Your goal point are ' + chalk.red.bold(points));
}

else{

log(chalk.bold.bgMagenta('Oops you missed, try again :D\nNever Lose Hope'));
log('Your goal point are ' + chalk.red.bold(points));
}

if(points==27)
{

  log(`\n\n\n\n\n\n
                    ` + chalk.black.bold.bgYellowBright('El Campeón'));
}
else if(i==lastQues-1 && points<18){

log(chalk.bold.bgMagentaBright('You were so close to be said as a Culers'));

}
}


// questions array Level 1:)

var givenQuestion = [{
  question: chalk.black.bgWhite.bold("Which year club was form?"),
  options:  ['1899', '1901', '1908', '1921'],
  answer: '1899'         
},
{
  question: chalk.black.bgWhite.bold("Home of FC Barcelona?"),
  options:  ['Anoeta Stadium', 'Bernabeu', 'Camp Nou', 'Wanda Metropolitano Stadium'],
  answer: 'Camp Nou'
}];


// Level 2 array questions

var question_l2 = [{
  questionl2: chalk.black.bgWhite.bold("What is the club's stadium capacity?"),
  optionsl2:  ['45,354', '99,354', '65,354', '142,325'],
  answerl2: '99,354'
},
{
  questionl2: chalk.black.bgWhite.bold("Who was the head coach of the club in the 2018/19 season?"),
  optionsl2:  ['Ernesto Valverde', 'Ronald Koeman', 'Luis Enrique', 'Quique Setein'],
  answerl2: 'Ernesto Valverde'
},
{
  questionl2: chalk.black.bgWhite.bold("How many La Liga awards has been given to the Club?"),
  optionsl2:  ['25', '26', '27', '28'],
  answerl2: '26'
}];


// Level 3(Finals) array question

var question_l3 = [{
  questionl3: chalk.black.bgWhite.bold("Most played matches(767) played by the player?"),
  optionsl3:  ['Lio Messi', 'Andre Iniesta', 'Gerad Pique', 'Xavi Hernandes'],
  answerl3: 'Xavi Hernandes'
},
{
  questionl3: chalk.black.bgWhite.bold("Barca player who won the most Ballon D'OR title?"),
  optionsl3:  [' César', 'Luis Suarez', ' Paulino Alcántara', 'Lionel Messi'],
  answerl3: 'Lionel Messi'
},
{
  questionl3: chalk.black.bgWhite.bold("Who is the most successful Club Manager"),
  optionsl3:  ['Pep Guardiola', 'Gerardo Martino', 'Luis Enrique', 'Jack Greenwell'],
  answerl3: 'Pep Guardiola'
},
{
  questionl3: chalk.black.bgWhite.bold("Who led the founding of the club?"),
  optionsl3:  ['Joan Gamper', 'Josep Bartomeu ', 'Roman Abrahimovich', 'Josep Maria'],
  answerl3: 'Joan Gamper'
}];


//for loop level 1-----------------------------------------------------------------------------
for(var i = 0; i < givenQuestion.length; i++)
{
  var lastQues=givenQuestion.length;
  var ques = givenQuestion[i];
  play(ques.question, ques.answer, ques.options);
}

//for loop level 2------------------------------------------------------------------------------

if(points==6)
{

for(var i = 0; i < question_l2.length; i++)
{
  var lastQues=question_l2.length;
  var ques = question_l2[i];
  playl2(ques.questionl2, ques.answerl2, ques.optionsl2);
}
}

//for loop level 3-------------------------------------------------------------------------------

if(points==15)
{

for(var i = 0; i < question_l3.length; i++)
{
  var lastQues=question_l3.length;
  var ques = question_l3[i];
  playl3(ques.questionl3, ques.answerl3, ques.optionsl3);
}
}

if(points==27){
log(`\n\nYou will be added on the WALL of Mes Que Un Club\nJust send me the screenshot to my LinkedIn link you will get it through my github username:` + chalk.blue.underline(`@TusharMukherjee`) +
`\n\nPrvious Culers who were Campeón in the quiz
             Culer 1.    |     Johari
             Culer 2.    |     N. Praseeth
             Culer 3.    |     Rishi
             Culer 4.    |     Arghya Das
             Culer 5.    |     Chaitanya`);
}