let troca = document.querySelector('.label1');
troca.addEventListener ('click', function() {
let test_a_troca = document.getElementById("simbol1").innerHTML;
if(test_a_troca == "+") { 
      document.getElementById("simbol1").innerHTML = "-";
   }
   else {
    document.getElementById("simbol1").innerHTML = "+";
   }
});

let troca0 = document.querySelector('.label1');
troca0.addEventListener ('click', function() {
let test_a_troca0 = document.getElementById("simbol1").innerHTML;
if(test_a_troca0 == "-") { 
      document.getElementById("simbol1").innerHTML = "+";
   }
   else {
    document.getElementById("simbol1").innerHTML = "-";
   }
});