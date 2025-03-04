var list_type = ["input","output"];

//------------------------------------------------------------------

var list_data = [[],];
list_data.splice(0, 1);

var obj = new Object();

/*struct	MainInputList{
	_Bool		CF3;
	_Bool		_1CF;
	_Bool		CAN;
	_Bool		CA1;
	_Bool		IFN;
	_Bool		IF1;
	_Bool		FLTDR;
	_Bool		RLS;
	_Bool		DRC;
	_Bool		Fire;
	_Bool		Overload;
	_Bool		FullLoad;
	_Bool		RelvUp;
	_Bool		RelvDn;
	_Bool		ZADO;
	_Bool		Ready;
	_Bool		RES2;
	_Bool		RES3;
	_Bool		RES4;
	_Bool		RES5;
	_Bool		Rev;
	_Bool		RUP;
	_Bool		RDN;
}
 */
obj.ar = 2; obj.ad = 1;  obj.bit=0;
list_data.push(["Main Input","CF3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=1;
list_data.push(["Main Input","1CF" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=2;
list_data.push(["Main Input","CAN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=3;
list_data.push(["Main Input","CA1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=4;
list_data.push(["Main Input","IFN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=5;
list_data.push(["Main Input","IF1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=6;
list_data.push(["Main Input","FLTDR" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=7;
list_data.push(["Main Input","RLS" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=8;
list_data.push(["Main Input","DRC" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=9;
list_data.push(["Main Input","Fire" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=10;
list_data.push(["Main Input","Overload" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=11;
list_data.push(["Main Input","FullLoad" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=12;
list_data.push(["Main Input","RelvUp" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=13;
list_data.push(["Main Input","RelvDn" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=14;
list_data.push(["Main Input","ZADO" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=15;
list_data.push(["Main Input","Ready" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=16;
list_data.push(["Main Input","RES2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=17;
list_data.push(["Main Input","RES3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=18;
list_data.push(["Main Input","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=19;
list_data.push(["Main Input","RES5" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=20;
list_data.push(["Main Input","Rev" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=21;
list_data.push(["Main Input","RUP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=22;
list_data.push(["Main Input","RDN" , JSON.stringify(obj),"unknown",0  ]);

//-----------------

/*
struct	MainOutputList{
	_Bool		MUP;
	_Bool		MDN;
	_Bool		V0;
	_Bool		V1;
	_Bool		V2;
	_Bool		TC;
	_Bool		STDL;
	_Bool		URA;
	_Bool		Fan;
	_Bool		EN_Out;
	_Bool		Relay;
	_Bool		UPSRelay;
	_Bool		UPSRef;
	_Bool		ADO;
	_Bool		Out1CF;
	_Bool		DRV_RST;
	_Bool		ERS;
	_Bool		ENR;
	_Bool		RES4;
	_Bool		RES5;
	_Bool		Close1;
	_Bool		Close2;
	_Bool		Close3;
	_Bool		Close4;
	_Bool		Close5;
}MOut={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
 */
obj.ar = 2; obj.ad = 2;  obj.bit=0;
list_data.push(["Main Out Put","MUP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=1;
list_data.push(["Main Out Put","MDN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=2;
list_data.push(["Main Out Put","V0" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=3;
list_data.push(["Main Out Put","V1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=4;
list_data.push(["Main Out Put","V2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=5;
list_data.push(["Main Out Put","TC" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=6;
list_data.push(["Main Out Put","STDL" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=7;
list_data.push(["Main Out Put","URA" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=8;
list_data.push(["Main Out Put","Fan" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=9;
list_data.push(["Main Out Put","EN_Out" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=10;
list_data.push(["Main Out Put","Relay" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=11;
list_data.push(["Main Out Put","UPSRelay" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=12;
list_data.push(["Main Out Put","UPSRef" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=13;
list_data.push(["Main Out Put","ADO" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=14;
list_data.push(["Main Out Put","Out1CF" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=15;
list_data.push(["Main Out Put","DRV_RST" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=16;
list_data.push(["Main Out Put","ERS" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=17;
list_data.push(["Main Out Put","ENR" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=18;
list_data.push(["Main Out Put","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=19;
list_data.push(["Main Out Put","RES5" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=20;
list_data.push(["Main Out Put","Close1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=21;
list_data.push(["Main Out Put","Close2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=22;
list_data.push(["Main Out Put","Close3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=23;
list_data.push(["Main Out Put","Close4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=24;
list_data.push(["Main Out Put","Close5" , JSON.stringify(obj),"unknown",0  ]);

//-----------------

/*struct CarcodecInputList{
	_Bool		Ovl;
	_Bool		Ful;
	_Bool		Fan;
	_Bool		PHC1;
	_Bool		PHC2;
	_Bool		PHC3;
	_Bool		DO1;
	_Bool		DO2;
	_Bool		DO3;
	_Bool		DC;
	_Bool		Rev;
	_Bool		RUP;
	_Bool		RDN;
	_Bool		STP;
	_Bool		RES1;
	_Bool		RES2;
	_Bool		RES3;
	_Bool		RES4;
	_Bool		RES5;
}
 */

obj.ar = 2; obj.ad = 3;  obj.bit=0;
list_data.push(["Carcodec Input","Ovl" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=1;
list_data.push(["Carcodec Input","Ful" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=2;
list_data.push(["Carcodec Input","Fan" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=3;
list_data.push(["Carcodec Input","PHC1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=4;
list_data.push(["Carcodec Input","PHC2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=5;
list_data.push(["Carcodec Input","PHC3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=6;
list_data.push(["Carcodec Input","DO1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=7;
list_data.push(["Carcodec Input","DO2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=8;
list_data.push(["Carcodec Input","DO3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=9;
list_data.push(["Carcodec Input","DC" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=10;
list_data.push(["Carcodec Input","Rev" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=11;
list_data.push(["Carcodec Input","RUP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=12;
list_data.push(["Carcodec Input","RDN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=13;
list_data.push(["Carcodec Input","STP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=14;
list_data.push(["Carcodec Input","RES1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=15;
list_data.push(["Carcodec Input","RES2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=16;
list_data.push(["Carcodec Input","RES3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=17;
list_data.push(["Carcodec Input","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=18;
list_data.push(["Carcodec Input","RES5" , JSON.stringify(obj),"unknown",0  ]);

/*struct CarcodecOutputList{
	_Bool		Door1Close;
	_Bool		Door2Close;
	_Bool		Door3Close;
	_Bool		Door1Open;
	_Bool		Door2Open;
	_Bool		Door3Open;
	_Bool		URA;
	_Bool		Fan;
	_Bool		Ovl;
	_Bool		Gang;
	_Bool		Ava;
	_Bool		RES1;
	_Bool		RES2;
	_Bool		RES3;
	_Bool		RES4;
	_Bool		RES5;
}
COut={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};*/

obj.ar = 2; obj.ad = 4;  obj.bit=0;
list_data.push(["Carcodec Output","Door1Close" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=1;
list_data.push(["Carcodec Output","Door2Close" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=2;
list_data.push(["Carcodec Output","Door3Close" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=3;
list_data.push(["Carcodec Output","Door1Open" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=4;
list_data.push(["Carcodec Output","Door2Open" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=5;
list_data.push(["Carcodec Output","Door3Open" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=6;
list_data.push(["Carcodec Output","URA" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=7;
list_data.push(["Carcodec Output","Fan" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=8;
list_data.push(["Carcodec Output","Ovl" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=9;
list_data.push(["Carcodec Output","Gang" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=10;
list_data.push(["Carcodec Output","Ava" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=11;
list_data.push(["Carcodec Output","RES1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=12;
list_data.push(["Carcodec Output","RES2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=13;
list_data.push(["Carcodec Output","RES3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=14;
list_data.push(["Carcodec Output","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=15;
list_data.push(["Carcodec Output","RES5" , JSON.stringify(obj),"unknown",0  ]);


