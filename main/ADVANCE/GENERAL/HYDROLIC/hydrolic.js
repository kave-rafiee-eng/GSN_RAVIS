
var status="unknown";
let factor=1;
let Addition=0;
let offset = 0;

var list_settnig = [[],];
list_settnig.splice(0, 1);

var obj = new Object();

obj.ar = 0; obj.ad = 43; factor = 10; Addition=0; offset=0;
list_settnig.push(["start_slow_delay" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 44; factor = 10; Addition=0; offset=0;
list_settnig.push(["start_fast_delay" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 45; factor = 10; Addition=0; offset=0;
list_settnig.push(["start_to_delta" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 46; factor = 10; Addition=0; offset=0;
list_settnig.push(["motor_start_delay" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

obj.ar = 0; obj.ad = 47; factor = 10; Addition=0; offset=100;
list_settnig.push(["motor_stop_delay" , JSON.stringify(obj),"unknown",0 ,factor,Addition,offset ]);

//------------------------------------------------------------------

