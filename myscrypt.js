//inserire un for che conta da 1 a 100
for(let i = 0; i <= 100; i++){

    if (i%3 == 0) {
        console.log('Fizz');
    } 
    else if (i%5 == 0) {
        console.log('Buzz');
    } 
    else if (i%3 & i%5 == 0) {
        console.log('FizzBuzz');
    }
    else {
        console.log('Numero: ', i);
    }

}
//stampare nella console il risultato
//multipli di tre al posto del numero scritta "Fizz"
//multipli di cinque al posto del numero scritta "Buzz"
//multipli sia di 3 che di 5 "FizzBuzz"