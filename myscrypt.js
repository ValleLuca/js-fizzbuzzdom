//inserire un for che conta da 1 a 100
for(let i = 1; i <= 100; i++){

    if ( (i%3 == 0) && (i%5 == 0) ) {
        console.log('FizzBuzz');  //multipli sia di 3 che di 5 "FizzBuzz"
    } 
    else if  (i%3 == 0) {
        console.log('Fizz'); //multipli di tre al posto del numero scritta "Fizz"
    } 
    else if (i%5 == 0) {
        console.log('Buzz'); //multipli di cinque al posto del numero scritta "Buzz"
    }
    else {
        console.log('Numero: ', i); //stampare nella console il risultato
    }

}



