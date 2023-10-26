// ===========Ejecicio1=============================================
let firstArray = [];
let numbers = [1, 45, 56, 37, 89, 32, 65, 24, 6, 15];
firstArray = numbers;

console.log(numbers.length);

// ===========Ejecicio2=============================================

let open = document.getElementById("open");
let popupContainer = document.getElementById("popupContainer");
let closePopup = document.getElementById("closePopup");
let string = document.getElementById("string");
let sendString = document.getElementById("sendString");

open.addEventListener("click", () => {
  popupContainer.style.display = 'block'; 
   
});

sendString.addEventListener("click", () => {
  if(string.value == ""){
    alert("Escribe al menos dos palabras separadas por coma")
  }else{
    let words = string.value.split(', ').filter(word => word.trim() !== '');
    alert(JSON.stringify(words));                
  }  
});

closePopup.addEventListener("click", () => {
  popupContainer.style.display = 'none';  
  location.reload();
});

// ===========Ejecicio3=============================================

let array = [10,40,30,20,15,5];

// Array de menor a mayor
array.sort(function(a, b) {
  return a - b;
});
console.log(array);

// Numero mayor y numero menor

let min = Math.min(10,40,30,20,15,5);
console.log(min);

let max = Math.max(10,40,30,20,15,5);
console.log(max);





