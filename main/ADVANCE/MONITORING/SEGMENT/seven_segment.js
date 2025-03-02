var json_server = JSON.parse(document.getElementById("json_server").innerHTML)
var number_of_stop = json_server.number_of_stop;

function load_end(){

    startConnect();
console.log("start");

}
window.addEventListener("load", load_end);


function red(){

    if( timer_send > 0 )timer_send--;
    else {
        send();
        timer_send=5;
    }

}
setInterval(red, 1000);

function send(){

    var obj_send = new Object();

    let serial = Number(document.getElementById("div_serial").textContent )

    obj_send.serial = serial;

     console.log("Send Data");

    let all_osend=1;
    for (let i = 0; i < SEG_list_data.length; i++) {
        if (SEG_list_data[i][4] == 0) {
            all_osend=0;
        }
    }

    if( all_osend == 1 ){
        for (let i = 0; i < SEG_list_data.length; i++) {
            SEG_list_data[i][4]=0;
        }
    }

    let index=1;
    for (let i = 0; i < SEG_list_data.length; i++) {

        if( SEG_list_data[i][4] == 0 ){

            var obj = JSON.parse(SEG_list_data[i][2])

            obj_send["ad"+index] = obj.ad;
            obj_send["ar"+index] = obj.ar;
            obj_send["st"+index] = 0;
            obj_send["da"+index] = 0;

            index++;

            SEG_list_data[i][4] =1;

            console.log("****");

        }

        if( index > 3 )break;

    }

    let topic = "server/"+serial

    // console.log(JSON.stringify(obj_send));

    publishMessage(topic,JSON.stringify(obj_send));

   // kave_chart.data.datasets[0].data[0]=massage_count*50;
  //  kave_chart.update()

}




let color_pr=0;
function SEG_mqtt_massage_get(DATA){

    timer_send = 5;
    console.log("DATA GET");

    var DATA_Recive = JSON.parse(DATA) ;

    for (let i = 0; i < SEG_list_data.length; i++) {

        var DATA_List = JSON.parse(SEG_list_data[i][2])

        for (let j = 0; j < 10; j++) {

            if(DATA_List.ar == DATA_Recive["ar"+j] && DATA_List.ad == DATA_Recive["ad"+j] ){

                if( DATA_Recive["da"+j] & (1 << DATA_List.bit ) )SEG_list_data[i][4] =1;
                else SEG_list_data[i][4] =0;
                SEG_list_data[i][3] = "update";
                console.log(DATA_List);
            }

        }

    }

    show_table_flag();

    send();

    //kave_chart.data.datasets[0].data[1]=get_count*50;
    //kave_chart.update()


   // show_status();
}










let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;

function drawTriangle(dir) {

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let height = 100 * Math.cos(Math.PI / 6);

    if(dir == 0 ){
        context.beginPath();
        context.moveTo(+10, canvas.height);
        context.lineTo(canvas.height, 10);
        context.lineTo(canvas.height*2-10, canvas.height);
        context.closePath();
    }
    else{
        context.beginPath();
        context.moveTo(10, 10);
        context.lineTo(canvas.height , canvas.height);
        context.lineTo(canvas.height*2-10 , 10);
        context.closePath();
    }


    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#504e51';
    context.stroke();

    // the fill color
    context.fillStyle = "#504e51";
    context.fill();
}




var ch = 0;
function refresh(){

    ch = 1 - ch;
    if( ch == 0 ){
        drawTriangle(dir);
    }
    else{
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    /* var x = document.getElementById("myAudio");
     x.play();*/
}
setInterval(refresh, 500);

var dir=0;
var segment=1;

function timer(){

    if( dir == 0 )segment++;
    else segment--;

    if( segment >= number_of_stop )dir=1;
    if( segment == 1 )dir=0;

    if( segment<10)display.setValue('0'+segment.toString());
    else{
        display.setValue(segment.toString());
    }

}
setInterval(timer, 1000);