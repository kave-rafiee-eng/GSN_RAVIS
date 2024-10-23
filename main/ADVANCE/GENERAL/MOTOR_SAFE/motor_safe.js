
var status="unknown";
let factor=1;
let Addition=0;
let offset = 0;

var list_settnig = [[],];
list_settnig.splice(0, 1);

var obj = new Object();

obj.ar = 0; obj.ad = 5; factor = 1; Addition=0; offset=0;
list_settnig.push(["enable" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 40; factor = 1; Addition=0; offset=0;
list_settnig.push(["fast_over_c" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 41; factor = 1; Addition=0; offset=0;
list_settnig.push(["slow_over_c" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 42; factor = 10; Addition=0; offset=0;
list_settnig.push(["time_over_c" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

//------------------------------------------------------------------

