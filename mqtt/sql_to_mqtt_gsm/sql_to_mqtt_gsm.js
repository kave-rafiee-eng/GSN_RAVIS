



function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    userId = "";
    password = "";
    client = new Paho.MQTT.Client("5.198.176.233", Number(9001), "/mqtt", clientID);

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

    topic = "#";
    client.subscribe(topic);
}
function onConnectionLost(responseObject){
    document.getElementById("div_connection_status").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if(responseObject !=0){
        document.getElementById("div_connection_status").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    }
    startConnect();
}
function ajax( ){

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("div_ajax_responce").innerHTML = this.responseText ;

            //const obj = JSON.parse(this.responseText)  ;

            if( this.responseText.search("serial") >= 0 )publishMessage("server",this.responseText);

        }
    };

    xhttp.open("GET", "sql_to_mqtt_gsm_ajax.php?", true);
    xhttp.send();

}
function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
    document.getElementById("div_message_arrived").innerHTML = "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";

    //ajax(message.payloadString);

}

function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
}
function publishMessage(topic,msg){

    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;
    client.send(Message);
    document.getElementById("div_message_publish").innerHTML = msg;
}