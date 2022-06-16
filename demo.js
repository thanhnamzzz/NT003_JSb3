// let n1, n2, n3, sum;
// n1 = +prompt("Số thứ 1");
// n2 = +prompt("Số thứ 2");
// n3 = +prompt("Số thứ 3");
// sum = n1 + n2 + n3;
// if (sum % 3 == 0 ) {
//     document.write("Số " + n1 + n2 + n3 + " chia hết cho 3");
// }
// else {
//     document.write("Số " + n1 + n2 + n3 + " không chia hết cho 3");
// }
let str = prompt("Nhập số");
let arr = str.split("");
let sum = 0;
arr.forEach(function(element){
    sum +=element;
});
console.log(sum);