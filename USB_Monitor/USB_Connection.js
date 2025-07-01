const connectButton = document.getElementById('connect');
const disconnectButton = document.getElementById('disconnect');
const output = document.getElementById('MassageRx');
const error = document.getElementById('Error');

let USB_json;
let port = null;
let reader = null;
let inputDone = null;
let isConnected = false;
let writer = null;
connectButton.addEventListener('click', async () => {
    if (isConnected) {
        error.textContent += '\n[در حال حاضر متصل هستید]';
        return;
    }

    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });

        const decoder = new TextDecoderStream();
        inputDone = port.readable.pipeTo(decoder.writable);
        const inputStream = decoder.readable;
        reader = inputStream.getReader();

        const encoder = new TextEncoderStream();
        const outputDone = encoder.readable.pipeTo(port.writable);
        const outputStream = encoder.writable;
        writer = outputStream.getWriter();

        let buffer = '';
        isConnected = true;
        error.textContent += '\n✅ اتصال برقرار شد.';

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            if (value) {
                buffer += value;

                while (buffer.includes('#')) {
                    const endIndex = buffer.indexOf('#');
                    const jsonStr = buffer.slice(0, endIndex).trim();
                    buffer = buffer.slice(endIndex + 1);

                    if (jsonStr.length === 0) continue;

                    try {

                        USB_json = JSON.parse(jsonStr);
                        //console.log("✅ JSON دریافت شد:", USB_json);
                        output.textContent = JSON.stringify(USB_json, null, 2);

                        if (USB_json.calls && Array.isArray(USB_json.calls)) {
                            updateTable(USB_json.calls);
                        }

                        if (
                            "data1" in USB_json &&
                            "data2" in USB_json &&
                            "data3" in USB_json &&
                            "data4" in USB_json &&
                            "data5" in USB_json &&
                            "data6" in USB_json
                        ) {
                            updateCharts(USB_json, 1);
                        }

                        if ( "name1" in USB_json ){
                            document.getElementById("name1").textContent = USB_json.name1;
                        }
                        if ( "value1" in USB_json ){
                            document.getElementById("value1").value = USB_json.value1;
                        }

                        if ( "name2" in USB_json ){
                            document.getElementById("name2").textContent = USB_json.name2;
                        }
                        if ( "value2" in USB_json ){
                            document.getElementById("value2").value = USB_json.value2;
                        }

                        if ( "name3" in USB_json ){
                            document.getElementById("name3").textContent = USB_json.name3;
                        }
                        if ( "value3" in USB_json ){
                            document.getElementById("value3").value = USB_json.value3;
                        }

                    } catch (e) {
                        console.error("❌ JSON نامعتبر:", e.message);
                        error.textContent = '[خطا در JSON]: ' + e.message;
                    }
                }
            }
        }

        reader.releaseLock();
    } catch (err) {
        console.error('خطا:', err);
        error.textContent += '\n[خطا: ' + err.message + ']';
        isConnected = false;
    }
});

disconnectButton.addEventListener('click', async () => {
    if (!isConnected || !port) {
        error.textContent = '\n[اتصالی برای قطع کردن وجود ندارد]';
        return;
    }

    try {
        if (reader) {
            await reader.cancel();
            await inputDone;
            reader.releaseLock();
        }

        await port.close();
        isConnected = false;
        error.textContent += '\n❌ اتصال قطع شد.';
    } catch (err) {
        console.error('خطا در قطع اتصال:', err);
        error.textContent += '\n[خطا در قطع اتصال: ' + err.message + ']';
    }
});



async function sendData(data) {

    if (writer) {
        try {
            await writer.write(data);
            error.textContent += `\n📤 ارسال شد: ${data}`;
        } catch (err) {
            console.error("خطا در ارسال:", err);
            error.textContent += '\n[خطا در ارسال: ' + err.message + ']';
        }
    } else {
        error.textContent += '\n[❌ نویسنده فعال نیست]';
        console.error("[❌ نویسنده فعال نیست]");
    }
}
var command = { from: "get_status", floor: "modem1" };
function send_up() {

   let value_floor =  document.getElementById("floor").value;
   let value_from =  document.getElementById("from").value;
   let value_door1 =  document.getElementById("door1").value;
   let value_door2 =  document.getElementById("door2").value;
   let value_door3 =  document.getElementById("door3").value;

    command = { from: Number(value_from) , floor : Number(value_floor) ,
        door1: Number(value_door1) , door2 : Number(value_door2) , door3 : Number(value_door3) ,
        dir: Number(2)
    };
    sendData(JSON.stringify(command) + '#');
}
function send_down() {

    let value_floor =  document.getElementById("floor").value;
    let value_from =  document.getElementById("from").value;
    let value_door1 =  document.getElementById("door1").value;
    let value_door2 =  document.getElementById("door2").value;
    let value_door3 =  document.getElementById("door3").value;

    command = { from: Number(value_from) , floor : Number(value_floor) ,
        door1: Number(value_door1) , door2 : Number(value_door2) , door3 : Number(value_door3) ,
        dir: Number(3)
    };
    sendData(JSON.stringify(command) + '#');
}

function send_uni() {

    let value_floor =  document.getElementById("floor").value;
    let value_from =  document.getElementById("from").value;
    let value_door1 =  document.getElementById("door1").value;
    let value_door2 =  document.getElementById("door2").value;
    let value_door3 =  document.getElementById("door3").value;

    command = { from: Number(value_from) , floor : Number(value_floor) ,
        door1: Number(value_door1) , door2 : Number(value_door2) , door3 : Number(value_door3) ,
        dir: Number(0)
    };
    sendData(JSON.stringify(command) + '#');
}

function send_vip() {

    let value_floor =  document.getElementById("floor").value;
    let value_from =  document.getElementById("from").value;
    let value_door1 =  document.getElementById("door1").value;
    let value_door2 =  document.getElementById("door2").value;
    let value_door3 =  document.getElementById("door3").value;

    command = { from: Number(value_from) , floor : Number(value_floor) ,
        door1: Number(value_door1) , door2 : Number(value_door2) , door3 : Number(value_door3) ,
        dir: Number(1)
    };
    sendData(JSON.stringify(command) + '#');
}