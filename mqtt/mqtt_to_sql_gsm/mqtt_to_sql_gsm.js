function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    userId = "";
    password = "";
    client = new Paho.MQTT.Client("84.47.232.10", Number(8080), "/mqtt", clientID);

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

    xhttp.open("GET", "mqtt_to_sql_gsm_ajax.php?"+str, true);
    xhttp.send();

}
function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
    document.getElementById("div_message_arrived").innerHTML = "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";

    ajax(message.payloadString);

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