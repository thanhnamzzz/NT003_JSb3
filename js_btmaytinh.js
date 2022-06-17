function Add() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let sum = num1 + num2;
    let result = "Kết quả là: " + num1 + " + " + num2 + " = " + sum;
    document.getElementById('result').innerHTML = result;
}
function Sub() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let sub = num1 - num2;
    let result = "Kết quả là: " + num1 + " - " + num2 + " = " + sub;
    document.getElementById('result').innerHTML = result;
}
function Multi() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let multi = num1 * num2;
    let result = "Kết quả là: " + num1 + " * " + num2 + " = " + multi;
    document.getElementById('result').innerHTML = result;
}
function Divi() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let divi = num1 / num2;
    let result = "Kết quả là: " + num1 + " / " + num2 + " = " + divi;
    document.getElementById('result').innerHTML = result;
}