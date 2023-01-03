const dateYear = +prompt(`Введіть свій рік народження:
(пишіть цифрами!)`)
const cityLive = prompt(`Введіть своє місто в якому проживаєте:
(пишіть з великої літери!)`)
const sportLove = prompt(`Введіть свій улюблений вид спорту:
(пишіть з великої літери!)`)

let dateUser = ''

let cityUser = ''

let sportUser = ''


const today = new Date();

if (!dateYear) {
    dateUser = 'Шкода, що Ви не захотіли ввести свій рік народження';
}
else if (1900 > Number(dateYear) || Number(dateYear) > 2018 || isNaN(dateYear)) {
    dateUser = 'Ви ввели невалідне число!';
} 
else {
    dateUser = `Тобі ${today.getFullYear() - Number(dateYear)} років` ;
}






// if (!dateYear) { 
//     dateUser = 'Дуже жаль, що ви відмовились:(';
// }
// else if (isNaN(dateYear)) {
//     cityUser = 'Ви ввели текст:(';
// }

// else {
//     cityUser = `Тобі ${dateYear} років!`;
// }



if (!cityLive) { 
    cityUser = 'Шкода, що Ви відмовились вводити де ви жевете:(';
}
else if (!isNaN(cityLive)) {
    cityUser = 'Ви ввели число:(';
}
else if (cityLive === "Київ") {
    cityUser = 'Ти живеш у столиці України!';
}
else if (cityLive === "Вашингтон") {
    cityUser = 'Ти живеш у столиці Америки!';
}
else if (cityLive === "Лондон") {
    cityUser = 'Ти живеш у столиці Британії!';
}
else {
    cityUser = `Ти живеш у місті ${cityLive}!`;
}


if(!sportLove) {
    sportUser = 'Шкода, що Ви відмовились вводити улюблений вид спорту:(';
}
else if (!isNaN(sportLove)) {
    sportUser = 'Ви ввели число:(';
}
else if (sportLove === "Баскетбол") {
    sportUser = 'Круто!Хочеш стати як Леброн Джеймс?';
}
else if (sportLove === "Футбол") {
    sportUser = 'Круто!Хочеш стати як Леонардо Мессі?';
}
else if (sportLove === "Бокс") {
    sportUser = 'Круто!Хочеш стати як Майк Тайсон?';
}
else{
    sportUser = `Ваш улюблений вид спорту ${sportLove}`;
}



alert(`${dateUser}
${cityUser}
${sportUser}`)