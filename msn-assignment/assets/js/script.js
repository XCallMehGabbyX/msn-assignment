//Create a variable with the var keyword
var firstName = "Danielle";
var lastName = "Laye";
lastName = "Smith"
let fullName = firstName + ' ' + lastName;
food = "Garri";
console.log(typeof food)
const tax = 0.02;

let car1 = "Mercedes";
let car2;//undefined

console.log(car2);
console.log(lastName + ": " + tax);
const foodBtn = document.getElementById("changeFood");
    foodBtn.addEventListener('click',function(){
    document.getElementById("food").innerHTML = food;
    alert('Food has been changed successfully to Garri');
    console.log('Food has been changed successfully');
})
document.getElementById("showName").addEventListener('click', function(){
    document.getElementById("askForName").innerHTML = fullName;
    //alert('Name has been displayed');
    //console.log('Name has been displayed');
})

//alert(firstName + ' ' + lastName)