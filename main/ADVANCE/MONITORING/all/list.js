
var list_type = ["-","voltage","Current"];

//----------------------- LIST VOLA
var list_voltage = [[],];
list_voltage.splice(0, 1);

var obj = new Object();

obj.ar = 3; obj.ad = 1;
list_voltage.push(["R" , JSON.stringify(obj) ]);
obj.ar = 3; obj.ad = 2;
list_voltage.push(["S" , JSON.stringify(obj) ]);
obj.ar = 3; obj.ad = 3;
list_voltage.push(["T" , JSON.stringify(obj) ]);
obj.ar = 3; obj.ad = 4;
list_voltage.push(["Power Main" , JSON.stringify(obj) ]);
obj.ar = 3; obj.ad = 5;
list_voltage.push(["Power Cabin" , JSON.stringify(obj) ]);

//----------------------- LIST C

var list_current = [[],];
list_current.splice(0, 1);
obj.ar = 3; obj.ad = 6;
list_current.push(["CT1" , JSON.stringify(obj) ]);
obj.ar = 3; obj.ad = 7;
list_current.push(["CT2" , JSON.stringify(obj) ]);