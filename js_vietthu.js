function letter() {
    let name = document.getElementById("name").value;
    let addr = document.getElementById("addr").value;
    let date = document.getElementById("date").value;
    let content1 = name + " thương nhớ,";
    let content2 = "Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.";
    let content3 = "Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.";
    let content4 = "Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.";
    let content5 = addr + ", ngày " + date;
    document.getElementById("result1").innerHTML = content1;
    document.getElementById("result2").innerHTML = content2;
    document.getElementById("result3").innerHTML = content3;
    document.getElementById("result4").innerHTML = content4;
    document.getElementById("result5").innerHTML = content5;
}