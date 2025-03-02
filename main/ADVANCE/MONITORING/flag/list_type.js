var list_type = ["input","output"];

//------------------------------------------------------------------


var list_data = [[],];
list_data.splice(0, 1);

var obj = new Object();

obj.ar = 0; obj.ad = 2;  obj.bit=0;
list_data.push(["input","CA1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 2;  obj.bit=1;
list_data.push(["input","CAN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 2;  obj.bit=2;
list_data.push(["input","1CF" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 2;  obj.bit=3;
list_data.push(["input","CF3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 2;  obj.bit=4;
list_data.push(["input","68" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 2;  obj.bit=5;
list_data.push(["input","IN 1" , JSON.stringify(obj),"unknown",0  ]);

//-----------------

obj.ar = 0; obj.ad = 3;  obj.bit=0;
list_data.push(["output","PO1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 3;  obj.bit=1;
list_data.push(["output","PO2" , JSON.stringify(obj),"unknown",1  ]);


//-----------------

obj.ar = 0; obj.ad = 39;  obj.bit=0;
list_data.push(["TEST","T1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 39;  obj.bit=0;
list_data.push(["TEST","T2" , JSON.stringify(obj),"unknown",1  ]);