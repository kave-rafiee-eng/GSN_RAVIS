<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MQTT Subscriber</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>

    <script>

        import mqtt from 'mqttws31'; const client = mqtt.connect('mqtt://broker.hivemq.com');

       /*var broker = {
            hostname: "52769f07854f438f863fc8ef379b9b79.s1.eu.hivemq.cloud",
            port: 8884,
            clientId: "web_" + Math.random().toString(16).substr(2, 8)
        };

        var topic = "test";

        // MQTT client instance
        var client = new Paho.MQTT.Client(broker.hostname, broker.port, broker.clientId);

        function onConnect() {
            console.log("Connected to MQTT broker");
            client.subscribe(topic);
            console.log("Subscribed to topic: " + topic);
        }

        function onFailure(message) {
            console.log("Connection to MQTT broker failed: " + message.errorMessage);
        }

        function onMessageArrived(message) {
            console.log("Received message: " + message.payloadString);
            document.getElementById("message").innerHTML = "Received message: " + message.payloadString;
        }

        // Set callback functions
        client.onConnectionLost = onFailure;
        client.onMessageArrived = onMessageArrived;

        // Connect to MQTT broker
        client.connect({
            onSuccess: onConnect,
            onFailure: onFailure,
            useSSL: false,
            userName: "ravis",
            password: "25482548Mo"
        });


        */
      function refresh(){
          document.getElementById("message").innerHTML = "Received message: " ;
      }
      setInterval(refresh, 500);

    </script>
</head>
<body>
<h1>MQTT Subscriber</h1>
<div id="message">gfg</div>
</body>
</html>