let floor = prompt("Combien d'étages veux-tu dans ta pyramide petit pharaon ?");

function pyramid(height) {
  
  for (var i = 1; i <= height; i++) {
    var row = '';
    
  for (var j = 1; j <= (height - i); j++) {
    row += ' ';
}
    
  for (var k = 1; k <= i; k++) {
    row += '#';
}
    
console.log(row);
}
}

pyramid(floor);