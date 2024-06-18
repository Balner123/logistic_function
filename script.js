let VELIKOST = 100;
let POCATEK = 0.5;
let RUST = 2;
let NASYCENI = 1;

let pole = [];

function graf(){
    pole = new Array(VELIKOST);
    pole[0] = POCATEK;

    for (let i = 1; i < VELIKOST; i++) {
        pole[i] = RUST * pole[i - 1] * (NASYCENI - pole[i - 1]);
        if(pole[i] < 0){ pole[i] = 0; }
    }
    console.log(pole);
}

graf();

function createChart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    return new Chart(ctx, {
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
}

let myChart = createChart();

function updateValues() {
    VELIKOST = parseInt(document.getElementById('inputVelikost').value, 10);
    POCATEK = parseFloat(document.getElementById('inputPocatek').value);
    RUST = parseFloat(document.getElementById('inputRust').value);
    NASYCENI = parseFloat(document.getElementById('inputNasyceni').value);

    graf();

    myChart.destroy();
    myChart = createChart();
}
