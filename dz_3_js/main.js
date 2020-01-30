

function lab() {                                      // Вывод загаловка 
    let lab= document.createElement("h1");
    content2 = document.createTextNode(" КАМЕНЬ ?   НОЖНИЦЫ ?   БУМАГА ? ");
    lab.appendChild(content2);
     conteyner1 = document.querySelector("#lab");
    conteyner1.appendChild(lab);  
let img = new Image();                  //Вывод картинки
img.src = 'KNB.jpg';
console.log(img);
conteyner1.appendChild(img);
};

lab();

let button = document.getElementById('idButt')
button.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault();
    let user1 = document.getElementById('val').value;  //номер выбора юзера
    if (user1 === "1" || user1 === "2" ||user1 === "3")
    {
    let user2 = Math.random();
    let comp1 = (user2 < 0.34) ? "камень" : (user2 <=0.67) ? "ножници" : "бумага";
    let comp2 = (user1 === 1) ? "камень" : (user1 === 2) ? "ножници" : "бумага";
    let uslovie = comp1 + comp2
    result =((comp1 === comp2) ? "Ничья" : (uslovie ==="бумагакамень" || uslovie ==="каменьножници" || uslovie ==="ножницибумага") ? "Победил игрок :)" : "Победил Компьютер :(")
    }
    else {
        test2(result="ошибка ввода");
        
    }
    test2(result);
});

function test() {                                  //Создание элимента для вывода результата
    let elem = document.createElement("h1");
    elem.id = "elem";
    content = document.createTextNode(" ");
    elem.appendChild(content);
    const conteyner = document.querySelector("#z");
    conteyner.appendChild(elem);
};

test();                          
function test2(result) {                            //Обновление данных результата при повторном использовании формы
    let oldElem = document.getElementById("elem");
    oldElem.textContent = result;
};
