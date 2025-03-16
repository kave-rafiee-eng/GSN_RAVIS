var SEG_list_data = [[],];
SEG_list_data.splice(0, 1);

var obj = new Object();

obj.ar = 4; obj.ad = 1;
SEG_list_data.push(["seg","seg_l" , JSON.stringify(obj),"unknown",0,0  ]);
obj.ar = 4; obj.ad = 2;
SEG_list_data.push(["seg","seg_r" , JSON.stringify(obj),"unknown",0,0  ]);

obj.ar = 2; obj.ad = 4;
SEG_list_data.push(["Carcodec","Carcodec Output" , JSON.stringify(obj),"unknown",0,0  ]);


//-----------------------------------------------
var list_data = [[],];
list_data.splice(0, 1);

var obj = new Object();

for ( var i=1; i<13; i++ ){
    obj.ar = 2; obj.ad = 5;  obj.bit=i-1; obj.not=0;
    list_data.push(["PB Main","H"+i , JSON.stringify(obj),"unknown",0  ]);
}

for ( var i=1; i<13; i++ ){
    obj.ar = 2; obj.ad = 6;  obj.bit=i-1; obj.not=0;
    list_data.push(["PB Cabin","H"+i , JSON.stringify(obj),"unknown",0  ]);
}
