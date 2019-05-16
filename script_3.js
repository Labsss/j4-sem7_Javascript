let number = prompt("Combien d'étages veux-tu dans ta pyramide petit pharaon ?");

if (number<0) {
  console.log("J'ai besoin d'un nombre positif stp !");
    }
else  {
  if (number == 0)
  console.log("C'est nul, j'ai besoin d'un nombre strictement positif stp !");
    } 

let f = 1;

for (var i=1; i<=number; i++) {

f=f*i;
}

console.log(f);