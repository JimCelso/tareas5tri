let p1="una cadena de texto :)"
let p2=p1.toUpperCase();
let p3=p2.replace("TEXTO", "AÑA");

document.getElementById('parr1').innerHTML=p1;
document.getElementById('parr2').innerHTML=p2;
document.getElementById('parr3').innerHTML=p3;

console.log(p1.length);
console.log(p1.at(7));
console.log(p1.toUpperCase());