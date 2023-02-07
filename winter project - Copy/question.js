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
        type: 'password',
		mask: '*',			
		message: 'Enter a password-->',
		name: 'password'
    }
] ;

const question_signin = [
    {
        type: 'input',
        name:'email',
        message:'Enter Email id --> '
    },
    {
        type: 'password',
		mask: '*',			
		message: 'Enter a password-->',
		name: 'password'
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
    },
    {
        type:'input',
        name:'ttl',
        default:-1 
    }
] ;
const question_image = [
    {
        type:'input',
        name:'name',
        message:'Enter Image name --> '
    } ,
    {
        type: 'input',
        name:'path',
        message:'Enter Image Path --> '
    }
] ;

module.exports = {question_signin , question_signup , question_keyvalue,question_image} ;