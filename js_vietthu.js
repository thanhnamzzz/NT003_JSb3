function letter() {
    let name, addr, date, content1, content2, content3, content4, content5, days, month, year;
    name = document.getElementById("name").value;
    addr = document.getElementById("addr").value;
    date = document.getElementById("date").value;
    content1 = name + " thương nhớ,";
    content2 = "Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.";
    content3 = "Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.";
    content4 = "Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.";
    // days = date.slice(6,7);
    // month = date.slice(4,5);
    // year = date.slice(0,3);
    // content5 = addr + ", ngày " + days + " tháng " + month + " năm " + year + ".";    
    document.getElementById("result1").innerHTML = content1;
    document.getElementById("result2").innerHTML = content2;
    document.getElementById("result3").innerHTML = content3;
    document.getElementById("result4").innerHTML = content4;
    document.getElementById("result5").innerHTML = date;
}