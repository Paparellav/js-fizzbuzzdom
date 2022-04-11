//Stampare i numeri da 1 a 100 in console
for (let i = 1; i <= 100; i++) {

    //1. Stabilire se il numero è divisibile per 3, per 5 o per entrambi
    let numberX = i;

    if (i % 3 === 0 && i % 5 === 0) {
        numberX = "fizzbuzz";
    } else if (i % 3 === 0) {
        numberX = "fizz";
    } else if (i % 5 === 0) {
        numberX = "buzz";
    }

    console.log(numberX);
    document.querySelector('.row').innerHTML += `<div class ="box ${numberX} ">${numberX}</div>`;
}