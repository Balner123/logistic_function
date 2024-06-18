let VELIKOST = 100;
let POCATEK = 0.5;
let RUST = 2;
let NASYCENI = 1;

let pole = new Array(VELIKOST);

pole[0] = POCATEK;

for (let i = 1; i < VELIKOST; i++) {
    pole[i] = RUST * pole[i - 1] * (NASYCENI - pole[i - 1]);
}

console.log(pole);
document.getElementById('velikost').textContent = VELIKOST;

function updateValues() {
    POCATEK = parseFloat(document.getElementById('inputPocatek').value);
    RUST = parseFloat(document.getElementById('inputRust').value);
    NASYCENI = parseFloat(document.getElementById('inputNasyceni').value);

    let pole = new Array(VELIKOST);
    pole[0] = POCATEK;

    for (let i = 1; i < VELIKOST; i++) {
        pole[i] = RUST * pole[i - 1] * (NASYCENI - pole[i - 1]);
    }
    myChart.data.datasets[0].data = pole;
    myChart.update();
}

// Vytvoření grafu pomocí Chart.js
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: VELIKOST }, (_, i) => i + 1),
        datasets: [{
            label: 'Populace',
            data: pole,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Roky'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Velikost Pole'
                }
            }
        }
    }
});
