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
    },
    {
        type:'input',
        name:'value',
    }
] ;

module.exports = {question_signin , question_signup , question_keyvalue} ;