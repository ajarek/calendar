let x = 0
const dataAktual = document.querySelector('h5');
const dni = document.querySelector('.grid-days')

function kot() {
    dni.innerHTML = ""
    const czas = new Date()
    let miesiac = czas.getMonth() + x;
    const biezacyRok = czas.getFullYear();

    const miesiace = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
    dataAktual.innerHTML = miesiace[miesiac] + ' ' + biezacyRok;

    const ileDniMcPoprzedni = new Date(biezacyRok, miesiac, 0).getDate()
    const ileDniMc = new Date(biezacyRok, miesiac + 1, 0).getDate()
    const dzientygodnia = new Date(biezacyRok, miesiac, 0).getDay() - 1
    const ileDniMcNastepny = 42 - (ileDniMc + dzientygodnia + 1);

    for (j = ileDniMcPoprzedni - dzientygodnia; j <= ileDniMcPoprzedni; j++) {
        dni.innerHTML += `<div class="days--przed"><h4>${j}</h4></div>`
    }

    for (i = 1; i <= ileDniMc; i++) {
        dni.innerHTML += `<div class="days"><h4>${i}</h4></div>`
    }
    for (i = 1; i <= ileDniMcNastepny; i++) {
        dni.innerHTML += `<div class="days--po"><h4>${i}</h4></div>`
    }

    let zielonyDzien = czas.getDate()
    const dzis = document.querySelectorAll('.days')
    dzis.forEach(elem => {
        if (elem.textContent == zielonyDzien && miesiac == new Date().getMonth()) {
            elem.classList.add('active')
        }
    })
}

const prawy = document.querySelector('.fa-angle-right');
const lewy = document.querySelector('.fa-angle-left');
prawy.addEventListener("click", () => {
    x += 1
    if (x > 11) {
        x = 0
    }
    kot()
});
lewy.addEventListener("click", () => {
    x -= 1
    if (x < 1) {
        x = 0
    }
    kot()
});
kot()

function setTime() {
    const clock = document.querySelector('h3');
    const time = new Date()
    clock.innerHTML = time.toLocaleTimeString();
}
setInterval(setTime, 1000)