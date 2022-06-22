function tinhngay() {
    let month = document.getElementById("month").value;
    if (month == 1){
        document.getElementById("result").innerHTML = document.write("Tháng " + month + " có 31 ngày");
    }
    if (month == 2) {
        document.getElementById("result").innerHTML = document.write("Tháng " + month + " có 28 hoặc 29 ngày");
    }
    if (month == 4) {
        document.getElementById("result").innerHTML = document.write("Tháng " + month + " có 30 ngày");
    }
}