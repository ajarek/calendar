function setTime() {
    const clock = document.querySelector('h3');
    const time = new Date()
    clock.innerHTML = time.toLocaleTimeString();
}
setInterval(setTime, 1000)

const dataAktual = document.querySelector('h5');
const month = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
const time1 = new Date()
const now = time1.getMonth();

dataAktual.innerHTML = month[now] + ' 2021';
var getDayMonth = function (now, year) {
    return new Date(year, now+1, 0).getDate();
    }
   
const dni = document.querySelector('.grid-days')
for (i = 1; i <= getDayMonth(now, 2021); i++) {
 dni.innerHTML += `<div class="days"><h4>${i}</h4></div>`
}
let greenDay = time1.getDate()
const days = document.querySelectorAll('.days')
days.forEach(elem => {
    if (elem.textContent == greenDay) {
        elem.classList.add('active')
    }
})

