
var list_type = ["-","voltage","current","temps","floor"];

//----------------------- LIST VOLA
var list_voltage = [[],];
list_voltage.splice(0, 1);

var obj = new Object();

obj.ar = 0; obj.ad = 2;
list_voltage.push(["R" , JSON.stringify(obj) ]);
obj.ar = 0; obj.ad = 3;
list_voltage.push(["S" , JSON.stringify(obj) ]);
obj.ar = 0; obj.ad = 23;
list_voltage.push(["sound" , JSON.stringify(obj) ]);
obj.ar = 0; obj.ad = 24;
list_voltage.push(["talk" , JSON.stringify(obj) ]);
obj.ar = 0; obj.ad = 25;
list_voltage.push(["welcome" , JSON.stringify(obj) ]);

//----------------------- LIST C

var list_current = [[],];
list_current.splice(0, 1);
obj.ar = 2; obj.ad = 2;
list_current.push(["R" , JSON.stringify(obj) ]);
obj.ar = 2; obj.ad = 3;
list_current.push(["S" , JSON.stringify(obj) ]);
obj.ar = 2; obj.ad = 4;
list_current.push(["T" , JSON.stringify(obj) ]);