
function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    console.log("server: "+"ravis-gsm.ir:9001");

    userId = "";
    password = "";
    //client = new Paho.MQTT.Client("84.47.232.10", Number(8080), "/mqtt", clientID);
    //client = new Paho.MQTT.Client("109.125.149.108", Number(9001), "/mqtt", clientID);
    client = new Paho.MQTT.Client("ravis-gsm.ir", Number(9001), "/mqtt", clientID);


    console.log("clientID: "+clientID);

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        onSuccess: onConnect,
        userName : userId,
        password : password ,
    });

    document.getElementById("div_connection_status").innerHTML = "try to connect...";
}

function onConnect(){
    document.getElementById("div_connection_status").innerHTML = "connect";
    topic = "gsm";
    //document.getElementById("messages").innerHTML += "<span> Subscribing to topic "+topic + "</span><br>";
    client.subscribe(topic);
}
function onConnectionLost(responseObject){
    document.getElementById("div_connection_status").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if(responseObject !=0){
        document.getElementById("div_connection_status").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    }

    startConnect();
}
function ajax( json_data){

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("div_ajax_responce").innerHTML = this.responseText ;

        }
    };

    var str = "json="+json_data;

    xhttp.open("GET", "en_user_ajax.php?"+str, true);
    xhttp.send();

}

function ajax_server_test( json_data){

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("div_ajax_responce").innerHTML = this.responseText ;

        }
    };

    var str = "json="+json_data;

    xhttp.open("GET", "Server_Test_Ajax.php?"+str, true);
    xhttp.send();

}

var serial = 100;
var topic_publish = "s";
function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
    document.getElementById("div_message_arrived").innerHTML = "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";

    // Parse JSON into a JavaScript object
    var data = JSON.parse(message.payloadString);
    // Store the serial value in a variable

    if (data["serial"] >= 0){
        serial = data.serial;
        if (data["TEST"] >= 0) {
            topic_publish = "server/"+serial
            publishMessage(topic_publish,"{\"SERVER_TEST\":1}")
            ajax_server_test(message.payloadString);
        }

        if(data["en_user"] >= 0){
            ajax(message.payloadString);
        }
    }

}

function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
}
function publishMessage(topic,msg){

    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;
    client.send(Message);
    document.getElementById("div_message_publish").innerHTML = msg + "/";
}