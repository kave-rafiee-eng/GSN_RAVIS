function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);
    //host = document.getElementById("host").value;
    //port = document.getElementById("port").value;
    //userId  = document.getElementById("username").value;
    //passwordId = document.getElementById("password").value;

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
}

function onConnect(){
    //topic =  document.getElementById("topic_s").value;
    topic = "#";
    document.getElementById("messages").innerHTML += "<span> Subscribing to topic "+topic + "</span><br>";
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
    document.getElementById("messages").innerHTML += "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";
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