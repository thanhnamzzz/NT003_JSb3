function check() {
    let weight, hight, bmi;
    weight = document.getElementById("weight").value;
    hight = document.getElementById("hight").value;
    bmi = weight / Math.pow(hight,2);
    let result = "";
    if (bmi < 16) {
        result = "gầy độ 3";
    } else if (bmi < 17) {
        result = "gầy độ 2";
    } else if (bmi < 18.5) {
        result = "gầy độ 1";
    } else if (bmi < 25) {
        result = "bình thường";
    } else if (bmi < 30) {
        result = "thừa cân";
    } else if (bmi < 35) {
        result = "béo phì độ 1";
    } else if (bmi < 40) {
        result = "Béo phì độ 2";
    } else {
        result = "Béo phì độ 3";
    }
    document.getElementById("check").innerHTML = "Chỉ số BMI = " + bmi.toFixed(2) + ". Bạn " + result;
}

