
var status="unknown";
let factor=1;
let Addition=0;
let offset = 0;

var list_settnig = [[],];
list_settnig.splice(0, 1);

var obj = new Object();

var json_server = JSON.parse(document.getElementById("json_server").innerHTML)

var number_of_stop = json_server.number_of_stop;

var i=0;
for(   i=1; i<=number_of_stop; i++  ){
    obj.ar = 1; obj.ad = i*100+5; factor = 1; Addition=0; offset=0;
    list_settnig.push(["sl-f"+i , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);
}

for(   i=1; i<=number_of_stop; i++  ){
    obj.ar = 1; obj.ad = i*100+6; factor = 1; Addition=0; offset=0;
    list_settnig.push(["sr-f"+i , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);
}

for(   i=1; i<=number_of_stop; i++  ){
    obj.ar = 1; obj.ad = i*100+7; factor = 1; Addition=0; offset=0;
    list_settnig.push(["talk-f"+i , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);
}

/*
$i*100+5
sl-f$i_floor*/

//------------------------------------------------------------------

