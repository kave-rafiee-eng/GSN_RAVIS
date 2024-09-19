function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    host = "52769f07854f438f863fc8ef379b9b79.s1.eu.hivemq.cloud";
    port = "8883";
    userId  = "ravis";
    password = "25482548Mo";

    document.getElementById("messages").innerHTML += "<span> Connecting to " + host + "on port " +port+"</span><br>";
    document.getElementById("messages").innerHTML += "<span> Using the  client Id " + clientID +" </span><br>";

    //client = new Paho.MQTT.Client(host,Number(port),"clientID");

    client = new Paho.MQTT.Client("wss://52769f07854f438f863fc8ef379b9b79.s1.eu.hivemq.cloud:8884/mqtt", "your client id");

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        onSuccess: onConnect,
        userName : userId,
        password : password ,
    });

    document.getElementById("messages").innerHTML = "try to connect...";
}

function onConnect(){
    document.getElementById("messages").innerHTML = "connect";
    topic = "#";
    //document.getElementById("messages").innerHTML += "<span> Subscribing to topic "+topic + "</span><br>";
    client.subscribe(topic);
}
function onConnectionLost(responseObject){
    document.getElementById("messages").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if(responseObject !=0){
        document.getElementById("messages").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    }
}
function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
    //document.getElementById("messages").innerHTML += "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";
    //document.getElementById("messages").innerHTML = message.payloadString;

    var show_set = document.getElementById("btn_set");
    var show_clear = document.getElementById("btn_clear");

    if( message.payloadString.search("set") >= 0 ){
        show_set.style.display="block";
        show_clear.style.display="none";
    }
    else if( message.payloadString.search("clear") >= 0 ){

        show_set.style.display="none";
        show_clear.style.display="block";
    }

}

function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
}
function publishMessage(){
    msg = document.getElementById("Message").value;
    topic = document.getElementById("topic_p").value;
    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;
    client.send(Message);
    document.getElementById("messages").innerHTML += "<span> Message to topic "+topic+" is sent </span><br>";
}