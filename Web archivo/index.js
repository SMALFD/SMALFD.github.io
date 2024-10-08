document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

//Referencias
const parrafoDias = document.getElementById("toBeUpdatedDays");
const parrafoHoras = document.getElementById("toBeUpdatedHours");
const parrafoMinutos = document.getElementById("toBeUpdatedMinutos");

//SetDates
const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const dayOfMonth = currentDate.getDate();
var dias = 0;

//Calcular dias
if (month == 1) {//Enero
    dias = 31 - dayOfMonth + 312;
} else if (month == 2) {//Febrero
    dias = 28 - dayOfMonth + 283;
} else if (month == 3) {//Marzo
    dias = 31 - dayOfMonth + 252;
} else if (month == 4) {//Abril
    dias = 30 - dayOfMonth + 222;
} else if (month == 5) {//Mayo
    dias = 31 - dayOfMonth + 191;
} else if (month == 6) {//Junio
    dias = 31 - dayOfMonth + 161;
} else if (month == 7) {//Julio
    dias = 31 - dayOfMonth + 130;
} else if (month == 8) {//Agosto
    dias = 31 - dayOfMonth + 99;
} else if (month == 9) {//Septiembre
    dias = 30 - dayOfMonth + 69;
} else if (month == 10) {//Octubre
    dias = 31 - dayOfMonth + 38;
} else if (month == 11) {//Noviembre
    dias = 30 - dayOfMonth + 8;
} else if (month == 12) {//Diciembre
    dias = 8 - dayOfMonth;
}
parrafoDias.innerHTML = (dias+1) + " días";

//Calcular horas
const hours = 24 - currentDate.getHours()-1;
parrafoHoras.innerHTML = hours + " horas";

//Calcular minutos
const minutos = 60 - currentDate.getMinutes();
parrafoMinutos.innerHTML = minutos + " minutos";