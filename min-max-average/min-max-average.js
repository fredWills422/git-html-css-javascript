let numbers=[96, 59, 4, 68, 58, 48, 17, 76, 32, 71, 11, 6, 3, 32, 85, 13, 60, 1, 27, 15, 96, 31, 75, 5, 2];

let min = 100;
let max =0;
let total =0;

const output = () => {
    for (let n of numbers){
        total += n;
        if(n < min) min = n;
        if(n > max) max = n;
    }
    lblCtrl= document.getElementById("out");
    lblCtrl.innerHTML += `<p>The array is ${numbers}<p>`;
    lblCtrl.innerHTML += `<p>The min is ${min}<p>`;
    lblCtrl.innerHTML += `<p>The max is ${max}<p>`;
    lblCtrl.innerHTML += `<p>The average is ${total / numbers.length}<p>`;

}