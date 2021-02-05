function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = '';
}
function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
function equal() {

    let answer = document.querySelector('.answer'),
        exp = document.form.textview.value;
    if (exp) {
        answer.innerText = `${exp} = ${eval(exp)}`;
    }
}

// Получаем доступ к кнопке
let button = document.querySelector("button");
button.onclick = function () {
    let i;
// Получаем слагаемые
    let nfirstNum = Math.abs(parseInt(document.querySelector("#firstNum").value));
    let nsecondNum = Math.abs(parseInt(document.querySelector("#secondNum").value));
// Получаем доступ к ответу
    let otvet = document.querySelector("#otvet");
    if (!nsecondNum) nsecondNum = 0;
    if (!nfirstNum) nfirstNum = 0;
    let temp = 0;
// Если второе число больше первого - поменять их местами
    if(nsecondNum > nfirstNum) {
        temp = nsecondNum;
        nsecondNum = nfirstNum;
        nfirstNum = temp;
    }
// Добавление единиц над цифрами разрядов
    let sfirstNum = String(nfirstNum);
    let ssecondNum = String(nsecondNum);
    sfirstNum = sfirstNum.match(/\d/g);
    ssecondNum = ssecondNum.match(/\d/g);
    let edinici = "";
    if (sfirstNum.length > ssecondNum.length) {
        for (i = 0; i < ssecondNum.length; i++) {
            if ((Number(sfirstNum[i]) + Number(ssecondNum[i])) > 9) edinici += 1;
            else edinici += " ";
        }
    }
    else {
        for (i = 0; i < sfirstNum.length; i++) {
            if ((Number(sfirstNum[i]) + Number(ssecondNum[i])) > 9) edinici += 1;
            else edinici += " ";
        }
    }
// Выводим ответ
    otvet.innerHTML = "<table style='border: none; margin-left: 8px;'>" +
        "<tr>" +
        "<td style='text-align: right;'><span style=' font-size: 11px; letter-spacing: 3px; font-style: italic; white-space: pre;'>" + edinici + "</span></td>" +
        "</tr>" +
        "<tr>" +
        "<td style='text-align: right;'>" + nfirstNum + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='text-align: right;'>" + nsecondNum + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><span style='border-top: 1px solid black;'>" + (nfirstNum + nsecondNum) + "</span></td>" +
        "</tr>" +
        "</table>" + "<div style='position: absolute; top: 35px;'>+</div>";
};
