var list_type = ["input","output"];

//------------------------------------------------------------------

var list_data = [[],];
list_data.splice(0, 1);

var obj = new Object();

/*
volatile	_Bool				Error_RLS=0,Error_RLSCut=0,Error_DRC=0,Error_DRCCut=0,Error_RLS_RelevelF=0,Error_FTO=0,Error_TravelTimeout=0;
volatile	_Bool				Error_DoorCloseTimeout=0,Error_URA=0,MainErrorF=0,Error_CutSerial=0,Error_DayCounter=0;
 */
obj.ar = 2; obj.ad = 9;  obj.bit=0; obj.not=0;
list_data.push(["Error","Error_RLS", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=1; obj.not=0;
list_data.push(["Error","Error_RLSCut", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=2; obj.not=0;
list_data.push(["Error","Error_DRC", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=3; obj.not=0;
list_data.push(["Error","Error_DRCCut", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=4; obj.not=0;
list_data.push(["Error","Error_RLS_RelevelF", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=5; obj.not=0;
list_data.push(["Error","Error_FTO", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=6; obj.not=0;
list_data.push(["Error","Error_TravelTimeout", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=7; obj.not=0;
list_data.push(["Error","Error_DoorCloseTimeout", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=8; obj.not=0;
list_data.push(["Error","Error_URA", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=9; obj.not=0;
list_data.push(["Error","MainErrorF", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=10; obj.not=0;
list_data.push(["Error","Error_CutSerial", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=11; obj.not=0;
list_data.push(["Error","Error_DayCounter", JSON.stringify(obj),"unknown",0  ]);


//-----------------

obj.ar = 2; obj.ad = 10;  obj.bit=0; obj.not=0;
list_data.push(["Error","Error_Safety90", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=1; obj.not=0;
list_data.push(["Error","Error_SafetyCircuitCut", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=2; obj.not=0;
list_data.push(["Error","Error_Cut66", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=3; obj.not=0;
list_data.push(["Error","Error_Cut68", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=4; obj.not=0;
list_data.push(["Error","Error_Cut69", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=5; obj.not=0;
list_data.push(["Error","Error_LevelingTimeout", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=6; obj.not=0;
list_data.push(["Error","Error_FLT_UNB", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=7; obj.not=0;
list_data.push(["Error","Error_PHR", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=8; obj.not=0;
list_data.push(["Error","Error_PHL", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=9; obj.not=0;
list_data.push(["Error","Error_OverCurrent", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=10; obj.not=0;
list_data.push(["Error","Error_LowCurrent", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=11; obj.not=0;
list_data.push(["Error","Error_CA1CAN", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=12; obj.not=0;
list_data.push(["Error","Error_1CF", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=13; obj.not=0;
list_data.push(["Error","Error_CF3", JSON.stringify(obj),"unknown",0  ]);

//-----------------

obj.ar = 2; obj.ad = 11;  obj.bit=0; obj.not=0;
list_data.push(["Error","Error_EndDoorTime", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=1; obj.not=0;
list_data.push(["Error","Error_FLT_DRV", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=2; obj.not=0;
list_data.push(["Error","Error_Cut_1CF_CF3", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=3; obj.not=0;
list_data.push(["Error","Error_RLS_S", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=4; obj.not=0;
list_data.push(["Error","Error_RLSCut_S", JSON.stringify(obj),"unknown",0  ]);
