let randomMessage=Math.floor(Math.random()*5+1);
let msg='';

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
};
console.log(msg + msg1 + msg2);