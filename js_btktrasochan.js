function check() {
    let num = +document.getElementById("num1").value;
    let divi = num % 2;
    var result = "";
    if (divi == 0) {
        result = "Số " , num , " là số chẵn";
    }
    else {
        result = "Số ", num , " là số lẻ";
    }
document.getElementById("result").innerHTML = result;
}