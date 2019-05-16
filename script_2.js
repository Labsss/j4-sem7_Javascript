let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

if (number<0) {
  console.log("J'ai besoin d'un nombre positif stp !");
    }
else  {
  if (number == 0)
  console.log("C'est nul, j'ai besoin d'un nombre strictement positif ! Fais un effort stp !");
    } 

let f = 1;

for (var i=1; i<=number; i++) {

f=f*i;
}

console.log(f);