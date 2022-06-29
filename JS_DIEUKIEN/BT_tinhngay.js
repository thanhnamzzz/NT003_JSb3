function tinhngay() {
    let month = document.getElementById("month").value;
    switch (month){
        case `1`:
        case `3`:
        case `5`:
        case `7`:
        case `8`:
        case `10`:
        case `12`:
            document.getElementById("result").innerHTML = document.write("Tháng " , month , " có 31 ngày");
            break;
        case `4`:
        case `6`:
        case `9`:
        case `11`:
            document.getElementById("result").innerHTML = document.write("Tháng " , month , " có 30 ngày");
            break;
        case `2`:
            document.getElementById("result").innerHTML = document.write("Tháng " , month , " có 28 hoặc 29 ngày");
            break;
        default:
            document.getElementById("result").innerHTML = document.write(`Nhập lại`);
    }
}
//     if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
//         document.getElementById("result").innerHTML = document.write("Tháng " , month , " có 31 ngày");
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11) {
//         document.getElementById("result").innerHTML = document.write("Tháng " , month , " có 30 ngày");
//     }
//     else if (month == 2) {
//         document.getElementById("result").innerHTML = document.write("Tháng " , month , " có 28 hoặc 29 ngày");
//     } else {
//         document.getElementById("result").innerHTML = document.write("Nhập lại");
//     }
// }