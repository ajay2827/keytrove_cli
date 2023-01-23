const question_signup = [
    {
        type:'input',
        name:'name',
        message:'Enter first name --> '
    } ,
    {
        type: 'input',
        name:'email',
        message:'Enter Email id --> '
    },
    {
        type:'input',
        name:'password',
        message:'Enter password --> '
    }
] ;

const question_signin = [
    {
        type: 'input',
        name:'email',
        message:'Enter Email id --> '
    },
    {
        type:'input',
        name:'password',
        message:'Enter password --> '
    }
] ;

const question_keyvalue = [
    {
        type: 'input',
        name:'key',
        message:'Enter Email id --> '
    },
    {
        type:'input',
        name:'value',
        message:'Enter password --> '
    }
] ;

module.exports = {question_signin , question_signup , question_keyvalue} ;