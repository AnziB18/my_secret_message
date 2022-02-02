
let msg=[];
let message='';
const motivationMessage = {
        _firstWord:['It ', 'He ', 'She ', 'I ', 'You ', 'They '],
        _verb: ['sing ', 'dance ', 'cry ', 'fly ', 'drive ', 'go '],
        _bindword:['with ', 'with ', 'with ', 'with ', 'with ', 'with '],
        _subject: ['my mother', 'your father', 'her parents', 'his sister', 'her brother', 'our uncle'],
        _end:['.', '?', '!','.', '?', '!' ]
}
for (let item in motivationMessage){
let randomMessage = Math.floor(Math.random()*5); // move into for - scope, because random is only once and not in every loop if it is in global scope
switch(randomMessage){ 
    case 0:
        msg += motivationMessage[item][0];
        break;
    case 1:
        //if (motivationMessage[item][0] === 'She '|| motivationMessage[item][0] === 'It ' || motivationMessage[item][0] === 'He '){
        msg += motivationMessage[item][1];
        //} else {
        //msg += motivationMessage[item][1]; 
        //}
        break;
    case 2:
        msg += motivationMessage[item][2];
        break;
    case 3:
        msg += motivationMessage[item][3];
        break;
    case 4:
        msg += motivationMessage[item][4];
        break;
    case 5:
        msg += motivationMessage[item][5];
        break;
    default:
        msg += 'You got something wrong'
        break;
}; 
}
console.log(msg);

/*
switch(randomMessage){
    
    case 1:
        msg += 'Your trainging day ';
        break;
    case 2:
        msg += 'Your morning ';
        break;
    case 3:
        msg += 'Your afternoon ';
        break;
    case 4:
        msg += 'Your evening ';
        break;
    case 5:
        msg += 'Your night ';
        break;
    case 6:
        msg += 'Your working day '
        break;
    default:
        msg += 'You got something wrong'
        break;
};
let msg1='';

switch(randomMessage){
    
    case 1:
        msg1 += 'is very hard today ';
        break;
    case 2:
        msg1 += 'is very easy today ';
        break;
    case 3:
        msg1 += 'has to be awesome ';
        break;
    case 4:
        msg1 += 'will be great ';
        break;
    case 5:
        msg1 += 'will be perfect ';
        break;
    case 6:
        msg1 += 'will be little bit hard '
        break;
    default:
        msg1 += 'You got something wrong'
        break;
};
let msg2='';

switch(randomMessage){
    
    case 1:
        msg2 += 'with me!';
        break;
    case 2:
        msg2 += 'with your partner!';
        break;
    case 3:
        msg2 += 'with your parents!';
        break;
    case 4:
        msg2 += 'with your mom!';
        break;
    case 5:
        msg2 += 'with your dad!';
        break;
    case 6:
        msg2 += 'with your family!'
        break;
    default:
        msg2 += 'You got something wrong'
        break;
};*/
//console.log(msg + msg1 + msg2);
//let newMsg=[];
//newMsg.push(msg[0]);
//newMsg.join('')
//console.log(newMsg)
//console.log(newMsg);
/*
if (msg[0] === 'She ' || msg[0] === 'It ' || msg[0] === 'He ')
{
    msg[1].push('s');
    
} else {
    msg[1];
};

console.log(msg)*/