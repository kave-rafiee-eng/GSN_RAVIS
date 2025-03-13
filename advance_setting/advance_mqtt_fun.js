
var mqtt_connect=0;
function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    console.log("clientID: "+clientID);

    userId = "";
    password = "";
    //client = new Paho.MQTT.Client("84.47.232.10", Number(8080), "/mqtt", clientID);
    //client = new Paho.MQTT.Client("109.125.149.108", Number(9001), "/mqtt", clientID);
    client = new Paho.MQTT.Client("ravis-gsm.ir", Number(9001), "/mqtt", clientID);

    console.log("server: "+"ravis-gsm.ir:9001");

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        onSuccess: onConnect,
        userName : userId,
        password : password ,
    });

    document.getElementById("div_connection_status").innerHTML = "try to connect...";

    showMqtt_modal();
    mqtt_connect=0;
}



function onConnect(){
    //document.getElementById("div_connection_status").innerHTML = "connect";

    document.getElementById("div_connection_status").innerHTML = "connect";

    /*// Get JSON data from the hidden div
    var jsonData = document.getElementById("json_server").innerText;
    // Parse JSON into a JavaScript object
    var data = JSON.parse(jsonData);
    // Store the serial value in a variable
    var serial = data.serial;
    // Log the serial number for debugging
    console.log("Serial_json:", serial);*/

    var serial = Number(document.getElementById("div_serial").textContent )

    topic = "gsm/"+serial;
    client.subscribe(topic);
    console.log("subscribe to:", topic);

    mqtt_connect=1;


}
function onConnectionLost(responseObject){
    console.log("lost****")
    document.getElementById("div_connection_status").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if(responseObject !=0){
        document.getElementById("div_connection_status").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    }
    startConnect();
}

var get_count=0;

function onMessageArrived(message){

    get_count++;
    console.log("OnMessageArrived: "+message.payloadString);
    document.getElementById("div_message_arrived").innerHTML = "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString+"| cunt : "+get_count+" </span><br>";

    ADVANCE_mqtt_massage_get(message.payloadString);

}

function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
}

var massage_count=0;
function publishMessage(topic,msg){

    massage_count++;

    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;
    client.send(Message);
    document.getElementById("div_message_publish").innerHTML = msg + "/" + massage_count;
}



function checkConnection() {
    try {
        if (client.isConnected()) {
            const message = new Paho.MQTT.Message("ping");  // ایجاد پیام جدید
            message.destinationName = "ping_topic";         // تعیین تاپیک
            client.send(message);                          // ارسال پیام با متد `send()`
            console.log("Ping sent successfully");
            mqtt_connect=1;
        } else {
            console.warn("Client is disconnected. Reconnecting...");
            reconnect();
        }
    } catch (error) {
        mqtt_connect=0;
        console.error("Error in ping check:", error.message);
        reconnect();  // اقدام برای برقراری مجدد اتصال
    }
}

// اجرای پینگ هر 10 ثانیه
setInterval(checkConnection, 5000);

function reconnect() {
    client.connect({
        onSuccess: onConnect,
        onFailure: (error) => console.error("Reconnection failed:", error.errorMessage)
    });
}

