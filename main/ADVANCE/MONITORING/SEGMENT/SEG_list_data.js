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

for ( var i=11; i>=0; i-- ){
    obj.ar = 2; obj.ad = 5;  obj.bit=i; obj.not=0;
    list_data.push(["PB Main","H"+i , JSON.stringify(obj),"unknown",0  ]);
}

for ( var i=11; i>=0; i-- ){
    obj.ar = 2; obj.ad = 6;  obj.bit=i; obj.not=0;
    list_data.push(["PB Cabin","H"+i , JSON.stringify(obj),"unknown",0  ]);
}



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
obj.ar = 2; obj.ad = 1;  obj.bit=0; obj.not=0;
list_data.push(["Main Input","CF3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=1; obj.not=0;
list_data.push(["Main Input","1CF" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=2; obj.not=0;
list_data.push(["Main Input","CAN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=3; obj.not=0;
list_data.push(["Main Input","CA1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=4; obj.not=0;
list_data.push(["Main Input","IFN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=5; obj.not=0;
list_data.push(["Main Input","IF1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=6; obj.not=0;
list_data.push(["Main Input","FLTDR" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=7; obj.not=0;
list_data.push(["Main Input","RLS" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=8; obj.not=0;
list_data.push(["Main Input","DRC" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=9; obj.not=0;
list_data.push(["Main Input","Fire" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=10; obj.not=0;
list_data.push(["Main Input","Overload" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=11; obj.not=0;
list_data.push(["Main Input","FullLoad" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=12; obj.not=0;
list_data.push(["Main Input","RelvUp" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=13; obj.not=0;
list_data.push(["Main Input","RelvDn" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=14; obj.not=0;
list_data.push(["Main Input","ZADO" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=15; obj.not=0;
list_data.push(["Main Input","Ready" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=16; obj.not=0;
list_data.push(["Main Input","RES2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=17; obj.not=0;
list_data.push(["Main Input","RES3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=18; obj.not=0;
list_data.push(["Main Input","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=19; obj.not=0;
list_data.push(["Main Input","RES5" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=20; obj.not=0;
list_data.push(["Main Input","Rev" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=21; obj.not=0;
list_data.push(["Main Input","RUP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 1;  obj.bit=22; obj.not=0;
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
obj.ar = 2; obj.ad = 2;  obj.bit=0; obj.not=0;
list_data.push(["Main Out Put","MUP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=1; obj.not=0;
list_data.push(["Main Out Put","MDN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=2; obj.not=0;
list_data.push(["Main Out Put","V0" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=3; obj.not=0;
list_data.push(["Main Out Put","V1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=4; obj.not=0;
list_data.push(["Main Out Put","V2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=5; obj.not=0;
list_data.push(["Main Out Put","TC" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=6; obj.not=0;
list_data.push(["Main Out Put","STDL" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=7; obj.not=0;
list_data.push(["Main Out Put","URA" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=8; obj.not=0;
list_data.push(["Main Out Put","Fan" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=9; obj.not=0;
list_data.push(["Main Out Put","EN_Out" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=10; obj.not=0;
list_data.push(["Main Out Put","Relay" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=11; obj.not=0;
list_data.push(["Main Out Put","UPSRelay" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=12; obj.not=0;
list_data.push(["Main Out Put","UPSRef" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=13; obj.not=0;
list_data.push(["Main Out Put","ADO" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=14; obj.not=0;
list_data.push(["Main Out Put","Out1CF" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=15; obj.not=0;
list_data.push(["Main Out Put","DRV_RST" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=16; obj.not=0;
list_data.push(["Main Out Put","ERS" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=17; obj.not=0;
list_data.push(["Main Out Put","ENR" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=18; obj.not=0;
list_data.push(["Main Out Put","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=19; obj.not=0;
list_data.push(["Main Out Put","RES5" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=20; obj.not=0;
list_data.push(["Main Out Put","Close1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=21; obj.not=0;
list_data.push(["Main Out Put","Close2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=22; obj.not=0;
list_data.push(["Main Out Put","Close3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=23; obj.not=0;
list_data.push(["Main Out Put","Close4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 2;  obj.bit=24; obj.not=0;
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

obj.ar = 2; obj.ad = 3;  obj.bit=0; obj.not=0;
list_data.push(["Carcodec Input","Ovl" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=1; obj.not=0;
list_data.push(["Carcodec Input","Ful" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=2; obj.not=0;
list_data.push(["Carcodec Input","Fan" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=3; obj.not=0;
list_data.push(["Carcodec Input","PHC1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=4; obj.not=0;
list_data.push(["Carcodec Input","PHC2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=5; obj.not=0;
list_data.push(["Carcodec Input","PHC3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=6; obj.not=0;
list_data.push(["Carcodec Input","DO1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=7; obj.not=0;
list_data.push(["Carcodec Input","DO2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=8; obj.not=0;
list_data.push(["Carcodec Input","DO3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=9; obj.not=0;
list_data.push(["Carcodec Input","DC" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=10; obj.not=0;
list_data.push(["Carcodec Input","Rev" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=11; obj.not=0;
list_data.push(["Carcodec Input","RUP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=12; obj.not=0;
list_data.push(["Carcodec Input","RDN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=13; obj.not=0;
list_data.push(["Carcodec Input","STP" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=14; obj.not=0;
list_data.push(["Carcodec Input","RES1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=15; obj.not=0;
list_data.push(["Carcodec Input","RES2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=16; obj.not=0;
list_data.push(["Carcodec Input","RES3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=17; obj.not=0;
list_data.push(["Carcodec Input","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 3;  obj.bit=18; obj.not=0;
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

obj.ar = 2; obj.ad = 4;  obj.bit=0; obj.not=0;
list_data.push(["Carcodec Output","Door1Close" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=1; obj.not=0;
list_data.push(["Carcodec Output","Door2Close" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=2; obj.not=0;
list_data.push(["Carcodec Output","Door3Close" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=3; obj.not=0;
list_data.push(["Carcodec Output","Door1Open" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=4; obj.not=0;
list_data.push(["Carcodec Output","Door2Open" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=5; obj.not=0;
list_data.push(["Carcodec Output","Door3Open" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=6; obj.not=0;
list_data.push(["Carcodec Output","URA" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=7; obj.not=0;
list_data.push(["Carcodec Output","Fan" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=8; obj.not=0;
list_data.push(["Carcodec Output","Ovl" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=9; obj.not=0;
list_data.push(["Carcodec Output","Gang" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=10; obj.not=0;
list_data.push(["Carcodec Output","Ava" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=11; obj.not=0;
list_data.push(["Carcodec Output","RES1" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=12; obj.not=0;
list_data.push(["Carcodec Output","RES2" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=13; obj.not=0;
list_data.push(["Carcodec Output","RES3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=14; obj.not=0;
list_data.push(["Carcodec Output","RES4" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 4;  obj.bit=15; obj.not=0;
list_data.push(["Carcodec Output","RES5" , JSON.stringify(obj),"unknown",0  ]);

/*struct	PushButton{
	volatile	_Bool			Hall[MAX_PB];
  volatile	_Bool			Hall_Cancel[MAX_PB];
  volatile	_Bool			Cabin[MAX_PB];
	volatile	_Bool			Cabin_Cancel[MAX_PB];
  volatile	_Bool			FirstCabin[MAX_PB];
  volatile	_Bool			ClearAll;
  volatile	_Bool			BlinkLedStatus;
	volatile	uint8_t		ResetPBTimer[MAX_PB];
	volatile	uint8_t		HallBlinker[6];
	volatile	uint8_t		BlinkTimer;
	volatile	uint8_t		HallSet;
	volatile	uint8_t		HallClear;
	volatile	uint8_t		CabinSet;
	volatile	uint8_t		CabinClear;
	volatile	uint8_t		CabinBlinker[3];

	//////Parallel PB
	volatile	uint8_t 	Time[MAX_PB];
	volatile	_Bool			Last[MAX_PARALLEL_PB];
	volatile	_Bool			ForCancelStatus[MAX_PARALLEL_PB];
}
PB;*/


/*					packed_data |= (Safety_90      & 0x1) << 0;
					packed_data |= (Safety_71      & 0x1) << 1;
					packed_data |= (Safety_66      & 0x1) << 2;
					packed_data |= (Safety_69      & 0x1) << 3;
					packed_data |= (Safety_68      & 0x1) << 4;
					packed_data |= (PreSafety_66   & 0x1) << 5;
					packed_data |= (Short110To24   & 0x1) << 6;

 */
obj.ar = 2; obj.ad = 7;  obj.bit=1; obj.not=0;
list_data.push(["Safety","Safety_71", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 7;  obj.bit=2; obj.not=0;
list_data.push(["Safety","Safety_66", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 7;  obj.bit=3; obj.not=0;
list_data.push(["Safety","Safety_69", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 7;  obj.bit=4; obj.not=0;
list_data.push(["Safety","Safety_68", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 7;  obj.bit=5; obj.not=0;
list_data.push(["Safety","PreSafety_66", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 7;  obj.bit=6; obj.not=0;
list_data.push(["Safety","Short110To24", JSON.stringify(obj),"unknown",0  ]);


/*struct SerialExtentionInputList{

	_Bool		F1;
	_Bool		F2;
	_Bool		I1;
	_Bool		I2;
	_Bool		I3;
	_Bool		I4;
	_Bool		I5;
	_Bool		S68;

}SerialExtInput;*/

obj.ar = 2; obj.ad = 8;  obj.bit=0; obj.not=0;
list_data.push(["Serial Extension Input","F1", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 8;  obj.bit=1; obj.not=0;
list_data.push(["Serial Extension Input","F2", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 8;  obj.bit=2; obj.not=0;
list_data.push(["Serial Extension Input","I1", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 8;  obj.bit=3; obj.not=0;
list_data.push(["Serial Extension Input","I2", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 8;  obj.bit=4; obj.not=0;
list_data.push(["Serial Extension Input","I3", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 8;  obj.bit=5; obj.not=0;
list_data.push(["Serial Extension Input","I4", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 8;  obj.bit=6; obj.not=0;
list_data.push(["Serial Extension Input","I5", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 8;  obj.bit=7; obj.not=0;
list_data.push(["Serial Extension Input","S68", JSON.stringify(obj),"unknown",0  ]);

/*****/

obj.ar = 2; obj.ad = 12;  obj.bit=1; obj.not=0;
list_data.push(["Main Input (HW)","CF3", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 12;  obj.bit=2; obj.not=0;
list_data.push(["Main Input (HW)","1CF", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 12;  obj.bit=3; obj.not=0;
list_data.push(["Main Input (HW)","CAN", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 12;  obj.bit=4; obj.not=0;
list_data.push(["Main Input (HW)","CA1", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 12;  obj.bit=5; obj.not=0;
list_data.push(["Main Input (HW)","IN1", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 12;  obj.bit=6; obj.not=0;
list_data.push(["Main Input (HW)","IN2", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 12;  obj.bit=7; obj.not=0;
list_data.push(["Main Input (HW)","IN3", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 12;  obj.bit=8; obj.not=0;
list_data.push(["Main Input (HW)","IN4", JSON.stringify(obj),"unknown",0  ]);

for( let i=0; i<12; i++ ){

    obj.ar = 2; obj.ad = 12;  obj.bit=i+11; obj.not=0;
    list_data.push(["Main Input (HW)","H"+(i+1), JSON.stringify(obj),"unknown",0  ]);
}



/*
volatile	_Bool				Error_RLS=0,Error_RLSCut=0,Error_DRC=0,Error_DRCCut=0,Error_RLS_RelevelF=0,Error_FTO=0,Error_TravelTimeout=0;
volatile	_Bool				Error_DoorCloseTimeout=0,Error_URA=0,MainErrorF=0,Error_CutSerial=0,Error_DayCounter=0;
 */
obj.ar = 2; obj.ad = 9;  obj.bit=0; obj.not=0;
list_data.push(["Error1","Error_RLS", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=1; obj.not=0;
list_data.push(["Error1","Error_RLSCut", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=2; obj.not=0;
list_data.push(["Error1","Error_DRC", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=3; obj.not=0;
list_data.push(["Error1","Error_DRCCut", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=4; obj.not=0;
list_data.push(["Error1","Error_RLS_RelevelF", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=5; obj.not=0;
list_data.push(["Error1","Error_FTO", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=6; obj.not=0;
list_data.push(["Error1","Error_TravelTimeout", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=7; obj.not=0;
list_data.push(["Error1","Error_DoorCloseTimeout", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=8; obj.not=0;
list_data.push(["Error1","Error_URA", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=9; obj.not=0;
list_data.push(["Error1","MainErrorF", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=10; obj.not=0;
list_data.push(["Error1","Error_CutSerial", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 9;  obj.bit=11; obj.not=0;
list_data.push(["Error1","Error_DayCounter", JSON.stringify(obj),"unknown",0  ]);


//-----------------

obj.ar = 2; obj.ad = 10;  obj.bit=0; obj.not=0;
list_data.push(["Error2","Error_Safety90", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=1; obj.not=0;
list_data.push(["Error2","Error_SafetyCircuitCut", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=2; obj.not=0;
list_data.push(["Error2","Error_Cut66", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=3; obj.not=0;
list_data.push(["Error2","Error_Cut68", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=4; obj.not=0;
list_data.push(["Error2","Error_Cut69", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=5; obj.not=0;
list_data.push(["Error2","Error_LevelingTimeout", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=6; obj.not=0;
list_data.push(["Error2","Error_FLT_UNB", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=7; obj.not=0;
list_data.push(["Error2","Error_PHR", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=8; obj.not=0;
list_data.push(["Error2","Error_PHL", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=9; obj.not=0;
list_data.push(["Error2","Error_OverCurrent", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=10; obj.not=0;
list_data.push(["Error2","Error_LowCurrent", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=11; obj.not=0;
list_data.push(["Error2","Error_CA1CAN", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=12; obj.not=0;
list_data.push(["Error2","Error_1CF", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 10;  obj.bit=13; obj.not=0;
list_data.push(["Error2","Error_CF3", JSON.stringify(obj),"unknown",0  ]);

//-----------------

obj.ar = 2; obj.ad = 11;  obj.bit=0; obj.not=0;
list_data.push(["Error3","Error_EndDoorTime", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=1; obj.not=0;
list_data.push(["Error3","Error_FLT_DRV", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=2; obj.not=0;
list_data.push(["Error3","Error_Cut_1CF_CF3", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=3; obj.not=0;
list_data.push(["Error3","Error_RLS_S", JSON.stringify(obj),"unknown",0  ]);

obj.ar = 2; obj.ad = 11;  obj.bit=4; obj.not=0;
list_data.push(["Error3","Error_RLSCut_S", JSON.stringify(obj),"unknown",0  ]);
