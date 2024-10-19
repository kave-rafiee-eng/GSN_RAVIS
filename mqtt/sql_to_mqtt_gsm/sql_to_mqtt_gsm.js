
var normal_timer=0;
var wo = 0;

function normal_timer_p(){
    normal_timer++;
    document.getElementById("div_timer").innerHTML = normal_timer;

}
function startWorker() {
    console.log("start_worker")
    if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
            w = new Worker("worker1.js");
            console.log("worker1.js") ;
        }
        w.onmessage = function(event) {
            console.log(event.data)
            wo=event.data;
            //ajax();
        };
    } else {
        console.log("Sorry! No Web Worker support.") ;
    }
}

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

            const obj = JSON.parse(this.responseText)  ;

            let topic = "server/"+obj.serial;

            if( this.responseText.search("serial") >= 0 )publishMessage(topic,JSON.stringify(obj));

        }
    };

    //document.getElementById("div_ajax_responce").innerHTML = json_data ;

    var str = "json="+json_data;
    xhttp.open("GET", "sql_to_mqtt_gsm_ajax.php?"+str, true);
    xhttp.send();

}
function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
    document.getElementById("div_message_arrived").innerHTML = "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";

    //ajax(message.payloadString);

    ajax(message.payloadString);

}

function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
}
function publishMessage(topic,msg){

    //Message = new Paho.MQTT.Message(msg+"/"+wo+"/"+normal_timer);
    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;
    client.send(Message);
    document.getElementById("div_message_publish").innerHTML = msg;
}