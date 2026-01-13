function validateEmail(email){
    const regex = /^.+@[a-zA-Z]+(\.[a-zA-Z]{2,5}){1,2}$/;
    const regex_copilot = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
}
console.log(validateEmail('ejemplo@dominio.com'));
console.log(validateEmail('ejemplo@dominio.com.mx'));
console.log(validateEmail('ejemplo@dominio.com.mx.mx'));
console.log(validateEmail('ejemplo@dominio.com.mx.mx.mx'));
console.log(validateEmail('ejemplo@dominio.com.mx.mx.mx.mx'));
console.log(validateEmail('ejemplo@dominio.com.mx.mx.mx.mx.mx'));

function replacePhoneNumber(phoneNumber){
    console.log(phoneNumber);
    const numberWithoutParenthesis = phoneNumber.replace(/[()]/g, '');
    const newPhoneNumber = numberWithoutParenthesis.replace(/[\s]/g, '-');
    return newPhoneNumber
}

console.log(replacePhoneNumber('(123) 456 7890'))

function replaceEmail(email){
    if(validateEmail(email)){
        const newEmail = email.replace(/[@\.]/g, '_')
        return newEmail;
    }else return false
}
console.log(replaceEmail('ejemplo@dominio.com'))
console.log(replaceEmail('ejemplo@dominio.com.mx'))