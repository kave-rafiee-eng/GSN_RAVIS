
var status="unknown";
let factor=1;
let Addition=0;
let offset = 0;

var list_settnig = [[],];
list_settnig.splice(0, 1);

var obj = new Object();

var json_server = JSON.parse(document.getElementById("json_server").innerHTML)

var number_of_stop = json_server.number_of_stop;
var number_of_door = json_server.number_of_door;

number_of_door = 3;

obj.ar = 0; obj.ad = 2; factor = 1; Addition=0; offset=0;
list_settnig.push(["number_of_stop" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 22; factor = 1; Addition=-1; offset=0;
list_settnig.push(["number_of_door" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

var i=0;
for(   i=1; i<=number_of_stop && number_of_door > 0; i++  ){
    obj.ar = 1; obj.ad = i*100+2; factor = 1; Addition=0; offset=0;
    list_settnig.push(["door_select*d1f"+i , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);
}

for(   i=1; i<=number_of_stop && number_of_door > 1; i++  ){
    obj.ar = 1; obj.ad = i*100+3; factor = 1; Addition=0; offset=0;
    list_settnig.push(["door_select*d2f"+i , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);
}

for(   i=1; i<=number_of_stop && number_of_door > 2; i++  ){
    obj.ar = 1; obj.ad = i*100+4; factor = 1; Addition=0; offset=0;
    list_settnig.push(["door_select*d3f"+i , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);
}



//------------------------------------------------------------------

