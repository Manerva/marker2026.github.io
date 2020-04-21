var audioElement = document.getElementById('beep');
audioElement.setAttribute("preload", "auto");
audioElement.autobuffer = true;    
audioElement.load();
audioElement.play();

document.getElementById('textWithF').hidden = true;

let f = ["Все двери открыты - выбери\nправильную.",
"Вас ждет много сюрпризов.",
"Время подходит\nдля путешествий.",
"Желение обязательно\nсбудется.",
"Вы получите интересное\nпредложение.",
"Проявите терпение - и\nвыиграете!",
"Удача придет\nоткуда не ждете.",
"Вы найдете то, что ищете.",
"Вас ждет необычная встреча.",
"Вы будете не только\nвыслушаны, но и услышаны.",
"На вас снизойдет вдохновение.",
"Интуиция вас не подведет.",
"Результы усилий\nпревзойдут ваши ожидания.",
"Станете желанным гостем.",
"Ваш дом будет в безопасности.",
"Вас ожидают\nприятные хлопоты.",
"Вы никогда не станете\nслишком стары, \nчтобы учиться."];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getF() {
    //alert("123");
    let random = Math.floor(Math.random() * f.length);
    let text_perm = f[random];
    document.getElementById('getF').hidden = true;
    document.getElementById('textWithF').hidden = false;
    document.getElementById("textWithF").textContent = "";
    textWithF.style.backgroundImage = "url('images/list.png')";
    await sleep(250);
    textWithF.style.backgroundImage = "url('images/list4.png')";
    await sleep(250);
    textWithF.style.backgroundImage = "url('images/list3.png')";
    await sleep(250);
    textWithF.style.backgroundImage = "url('images/list2.png')";
    await sleep(250);
    textWithF.style.backgroundImage = "url('images/list1.png')";
    document.getElementById("textWithF").textContent = text_perm;
};