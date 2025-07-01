<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8" />
    <title>نمودار ترکیبی با داده‌های شبیه‌سازی و USB</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>
    <style>
        #charts-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        canvas {
            width: 300px !important;
            height: 180px !important;
            max-width: 100%;
            border: 1px solid #ddd;
            background: #fafafa;
        }
        button {
            margin: 10px;
        }
    </style>
</head>
<body>

<div>
    <button id="connect-usb">اتصال به USB</button>
    <span id="usb-status">وضعیت: قطع</span>
</div>

<div id="charts-container">
    <canvas id="chart1"></canvas>
    <canvas id="chart2"></canvas>
    <canvas id="chart3"></canvas>
</div>

<script>
    const maxDataLength = 100;
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
                labels: Array.from({length: maxDataLength}, (_, i) => (i+1).toString()),
                datasets: [
                    {
                        label: label1,
                        data: Array(maxDataLength).fill(null),
                        borderColor: color1,
                        borderWidth: 2,
                        fill: false,
                        spanGaps: true,
                        datalabels: {
                            display: true,
                            anchor: 'end',
                            align: 'top',
                            font: { weight: 'bold' },
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
                        datalabels: {
                            display: true,
                            anchor: 'end',
                            align: 'top',
                            font: { weight: 'bold' },
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
                    }
                },
                scales: {
                    x: { display: true, title: { display: true, text: 'اندیس داده' } },
                    y: { beginAtZero: true }
                }
            },
            plugins: [ChartDataLabels]
        });
    }

    const chart1 = createChart(document.getElementById('chart1').getContext('2d'), 'دما 1', 'red', 'دما 2', 'orange', 'chart1');
    const chart2 = createChart(document.getElementById('chart2').getContext('2d'), 'رطوبت 1', 'blue', 'رطوبت 2', 'cyan', 'chart2');
    const chart3 = createChart(document.getElementById('chart3').getContext('2d'), 'فشار 1', 'green', 'فشار 2', 'lime', 'chart3');

    function updateMaxValues(chartId, dataArray) {
        for(let i=0; i<2; i++) {
            if(dataArray[i] > maxValues[chartId][i]) {
                maxValues[chartId][i] = dataArray[i];
            }
        }
    }

    function updateCharts(data, fromUsb = false) {
        if (!fromUsb) {
            // داده‌های شبیه‌سازی شده برای chart1 و chart2
            chart1.data.datasets[0].data[currentIndex] = data.temp1;
            chart1.data.datasets[1].data[currentIndex] = data.temp2;
            updateMaxValues('chart1', [data.temp1, data.temp2]);

            chart2.data.datasets[0].data[currentIndex] = data.humi1;
            chart2.data.datasets[1].data[currentIndex] = data.humi2;
            updateMaxValues('chart2', [data.humi1, data.humi2]);
        }

        // داده‌های USB فقط برای chart3
        if (fromUsb) {
            chart3.data.datasets[0].data[currentIndex] = data.press1;
            chart3.data.datasets[1].data[currentIndex] = data.press2;
            updateMaxValues('chart3', [data.press1, data.press2]);
        }

        chart1.update();
        chart2.update();
        chart3.update();

        currentIndex++;
        if (currentIndex >= maxDataLength) {
            currentIndex = 0;

            maxValues.chart1 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
            maxValues.chart2 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
            maxValues.chart3 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];

            // پاک کردن داده‌ها برای شروع مجدد (اختیاری)
            chart1.data.datasets.forEach(ds => ds.data.fill(null));
            chart2.data.datasets.forEach(ds => ds.data.fill(null));
            chart3.data.datasets.forEach(ds => ds.data.fill(null));
        }
    }

    // شبیه‌سازی داده‌ها برای نیمه اول (chart1, chart2)
    let progress = 0;
    let step = 0.02;
    const maxVal = 5;

    setInterval(() => {
        let value;
        if (progress <= 1) {
            value = maxVal * progress;
        } else {
            value = maxVal * (2 - progress);
        }
        progress += step;
        if (progress >= 2) progress = 0;

        const simulatedData = {
            temp1: +value.toFixed(2),
            temp2: +(value * 0.8).toFixed(2),
            humi1: +(value * 1.1).toFixed(2),
            humi2: +(value * 1.3).toFixed(2),
            press1: 0, // داده USB می‌خونه، اینجا صفر میزاریم
            press2: 0
        };

        updateCharts(simulatedData, false);
    }, 50);


    // کد USB Web Serial API

    const connectButton = document.getElementById('connect-usb');
    const usbStatus = document.getElementById('usb-status');
    let port;
    let reader;

    async function connectUsb() {
        try {
            port = await navigator.serial.requestPort();
            await port.open({ baudRate: 9600 });
            usbStatus.textContent = 'وضعیت: متصل';

            const decoder = new TextDecoderStream();
            const inputDone = port.readable.pipeTo(decoder.writable);
            const inputStream = decoder.readable;

            reader = inputStream.getReader();

            readLoop();
        } catch (error) {
            console.error('خطا در اتصال USB:', error);
            usbStatus.textContent = 'وضعیت: خطا در اتصال';
        }
    }

    async function readLoop() {
        let buffer = '';
        try {
            while (true) {
                const { value, done } = await reader.read();
                if(done) break;
                if (value) {
                    buffer += value;
                    let newlineIndex;
                    while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
                        const line = buffer.slice(0, newlineIndex).trim();
                        buffer = buffer.slice(newlineIndex + 1);
                        try {
                            const json = JSON.parse(line);
                            updateCharts(json, true);
                        } catch (e) {
                            console.warn('فرمت JSON نامعتبر:', line);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('خطای خواندن سریال:', error);
        }
    }


    connectButton.addEventListener('click', connectUsb);
</script> </body> </html>