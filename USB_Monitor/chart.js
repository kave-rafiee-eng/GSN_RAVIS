const maxDataLength = 1000;
let currentIndex = 0;

// ذخیره بیشینه داده‌ها برای هر نمودار
const maxValues = {
    chart1: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    chart2: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    chart3: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
};

function createChart(ctx, label1, color1, label2, color2, chartId) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: maxDataLength}, (_, i) => (i + 1).toString()),
            datasets: [
                {
                    label: label1,
                    data: Array(maxDataLength).fill(null),
                    borderColor: color1,
                    borderWidth: 2,
                    fill: false,
                    spanGaps: true,
                    pointRadius: 0,  // نقاط رسم نمی‌شوند
                    pointHoverRadius: 0, // هنگام هاور هم نقطه نشون داده نشه
                    datalabels: {
                        display: true,
                        anchor: 'end',
                        align: 'top',
                        font: {weight: 'bold'},
                        color: color1,
                        formatter: (value, context) => {
                            if (value === null) return '';
                            const idx = context.dataIndex;
                            if (idx === currentIndex - 1 || (currentIndex === 0 && idx === maxDataLength - 1)) {
                                return `آخر: ${value}`;
                            }
                            if (value === maxValues[chartId][0]) {
                                return `بیشینه: ${value}`;
                            }
                            return '';
                        }
                    }
                },
                {
                    label: label2,
                    data: Array(maxDataLength).fill(null),
                    borderColor: color2,
                    borderWidth: 2,
                    fill: false,
                    spanGaps: true,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    datalabels: {
                        display: true,
                        anchor: 'end',
                        align: 'top',
                        font: {weight: 'bold'},
                        color: color2,
                        formatter: (value, context) => {
                            if (value === null) return '';
                            const idx = context.dataIndex;
                            if (idx === currentIndex - 1 || (currentIndex === 0 && idx === maxDataLength - 1)) {
                                return `آخر: ${value}`;
                            }
                            if (value === maxValues[chartId][1]) {
                                return `بیشینه: ${value}`;
                            }
                            return '';
                        }
                    }
                }
            ]
        },
        options: {
            animation: false,
            plugins: {
                datalabels: {
                    display: true
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,  // زوم با چرخ موس فعال است
                        },
                        pinch: {
                            enabled: true   // زوم با لمس فعال است (برای موبایل)
                        },
                        mode: 'x'         // زوم فقط روی محور X
                    },
                    pan: {
                        enabled: true,
                        mode: 'x'
                    }
                }
            },
            scales: {
                x: {display: true, title: {display: true, text: 'اندیس داده'}},
                y: {beginAtZero: true}
            }
        },
        plugins: [ChartDataLabels, ChartZoom]
    });
}

const chart1 = createChart(document.getElementById('chart1').getContext('2d'), 'دما 1', 'red', 'دما 2', 'orange', 'chart1');
const chart2 = createChart(document.getElementById('chart2').getContext('2d'), 'رطوبت 1', 'blue', 'رطوبت 2', 'cyan', 'chart2');
const chart3 = createChart(document.getElementById('chart3').getContext('2d'), 'فشار 1', 'green', 'فشار 2', 'lime', 'chart3');

function updateMaxValues(chartId, dataArray) {
    for (let i = 0; i < 2; i++) {
        if (dataArray[i] > maxValues[chartId][i]) {
            maxValues[chartId][i] = dataArray[i];
        }
    }
}

function updateCharts(data, fromUsb = false) {

    if (fromUsb) {

        chart1.data.datasets[0].data[currentIndex] = data.data1;
        chart1.data.datasets[1].data[currentIndex] = data.data2;
        chart2.data.datasets[0].data[currentIndex] = data.data3;
        chart2.data.datasets[1].data[currentIndex] = data.data4;
        chart3.data.datasets[0].data[currentIndex] = data.data5;
        chart3.data.datasets[1].data[currentIndex] = data.data6;

        /*updateMaxValues('chart1', [data.data1, data.data2]);
        updateMaxValues('chart2', [data.data1, data.data2]);
        updateMaxValues('chart3', [data.data1, data.data2]);*/
    }

    chart1.update();
    chart2.update();
    chart3.update();

    currentIndex++;

    if (currentIndex >= maxDataLength) {
        // پاک‌سازی کامل داده‌ها و بازنشانی اندیس
        currentIndex = 0;

        maxValues.chart1 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
        maxValues.chart2 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
        maxValues.chart3 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];

        [chart1 ,chart2 ,chart3].forEach(chart => {
            //chart.data.labels.length = 0; // اینجا مهمه!
            chart.data.datasets.forEach(ds => {
                ds.data.length = null;       // فقط خالی می‌کنیم، نه جایگزین
            });
            chart.update();  // اعمال تغییرات
        });
    }
}

// شبیه‌سازی داده‌ها برای نیمه اول (chart1, chart2)
let progress = 0;
let step = 0.02;
const maxVal = 5;


function panChart(chart, step) {
    console.log("Shift by one grid unit");

    const xScale = chart.scales.x;

// محاسبه فاصله بین گریدها
    const ticks = xScale.ticks;

    var change;
    if (ticks.length >= 2) {
        change = ticks[1].value - ticks[0].value;
    }

    change = change * step;

    const range = xScale.max - xScale.min;
    let newMin = xScale.min + change;
    let newMax = xScale.max + change;

// محدود کردن مقادیر (اختیاری)
    if (newMin < 0) {
        newMin = 0;
        newMax = range;
    }
    if (newMax > maxDataLength) {
        newMax = maxDataLength;
        newMin = maxDataLength - range;
    }

    xScale.options.min = newMin;
    xScale.options.max = newMax;

    chart.update();
}


document.getElementById('btnLeft').addEventListener('click', () => {
    panChart(chart1, -4);  // جابه‌جایی به چپ
});

document.getElementById('btnRight').addEventListener('click', () => {
    panChart(chart1, 4);   // جابه‌جایی به راست
});

document.getElementById('btnClear').addEventListener('click', () => {
    // ریست کردن مقادیر حداکثر
    maxValues.chart1 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    maxValues.chart2 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    maxValues.chart3 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];

    // پاک‌سازی لیبل‌ها و داده‌ها بدون تغییر مرجع
    [chart1 ].forEach(chart => {
        //chart.data.labels.length = 0; // اینجا مهمه!
        chart.data.datasets.forEach(ds => {
            ds.data.length = null;       // فقط خالی می‌کنیم، نه جایگزین
        });
        chart.update();  // اعمال تغییرات
    });

    currentIndex=0;
});



const tableBody = document.getElementById('CallsTable');
function updateTable(calls) {
    tableBody.innerHTML = ''; // پاک کردن محتویات قبلی جدول

    calls.forEach((call, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${call.advance}</td>
            <td>${call.From}</td>
            <td>${call.Floor}</td>
            <td>${call.door1}</td>
            <td>${call.door2}</td>
            <td>${call.door3}</td>
            <td>${call.dir}</td>
            <td>${call.Timer}</td>
        `;

        tableBody.appendChild(row);
    });
}