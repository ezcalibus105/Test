function numberOneTriangle() {
    const soDong = parseInt(prompt("Nhập số dòng: "));
    if ((soDong<1) || (soDong>10)) {
        alert('Vui lòng nhập lại số dòng trong khoảng từ 1 đến 10!');
    }
    else {
        for(let i = 1; i <= soDong; i++) {
            for(let j = 1; j <= i; j++) {
                document.write("*");
            }
            document.write("<br>");
        }
    }
}

numberOneTriangle();