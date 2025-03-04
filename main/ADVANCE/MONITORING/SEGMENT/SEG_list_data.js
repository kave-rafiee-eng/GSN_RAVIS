var SEG_list_data = [[],];
SEG_list_data.splice(0, 1);

var obj = new Object();

obj.ar = 4; obj.ad = 1;
SEG_list_data.push(["seg","seg_l" , JSON.stringify(obj),"unknown",0,0  ]);
obj.ar = 4; obj.ad = 2;
SEG_list_data.push(["seg","seg_r" , JSON.stringify(obj),"unknown",0,0  ]);