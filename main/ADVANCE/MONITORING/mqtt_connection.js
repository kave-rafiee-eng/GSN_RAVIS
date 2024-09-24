function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    console.log("clientID: "+clientID);

    userId = "";
    password = "";
    client = new Paho.MQTT.Client("5.198.176.233", Number(9001), "/mqtt", clientID);

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
    client.subscribe(topic);
}
function onConnectionLost(responseObject){
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

    const obj = JSON.parse(message.payloadString)  ;

    //document.getElementById("deb").innerHTML = JSON.stringify(obj)
    esp_data(message.payloadString);

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