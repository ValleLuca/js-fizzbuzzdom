let cantainerVariabile = document.getElementById('container');

for(let i = 1; i <= 100; i++){ //inserire un for che conta da 1 a 100

    if ( (i%3 == 0) && (i%5 == 0) ) {
        console.log('FizzBuzz');  //multipli sia di 3 che di 5 "FizzBuzz"
        cantainerVariabile.innerHTML += '<div class="box m3eem5"> FizzBuzz </div>'
    } 
    else if  (i%3 == 0) {
        console.log('Fizz'); //multipli di tre al posto del numero scritta "Fizz"
        cantainerVariabile.innerHTML += '<div class="box m3"> Fizz </div>'
    } 
    else if (i%5 == 0) {
        console.log('Buzz'); //multipli di cinque al posto del numero scritta "Buzz"
        cantainerVariabile.innerHTML += '<div class="box m5"> Buzz </div>'
    }
    else {
        console.log('Numero: ', i); //stampare nella console il risultato
        cantainerVariabile.innerHTML += '<div class="box">' + i + '</div>'
    }

}



