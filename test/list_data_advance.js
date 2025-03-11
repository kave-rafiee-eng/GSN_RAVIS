
//arrays_list[arrays.multy_SELECT[2]].length
let arrays_list = {};

//---------------------------- list_type_elevator LIST
arrays_list.list_type_elevator = [
    "3VF",    // 0
    "HYD",    // 1
    "2Speed", // 2
    "HEVOS"   // 3
];

//----------------------------- ProgMainInputs LIST
arrays_list.list_hw_input = [
    "CF3", "1CF", "CAN", "CA1", "IFN",
    "IF1", "FLTDR", "RLS", "DRC", "FIRE",
    "OVL", "FUL", "RELUP", "RELDN", "ZADO",
    "Ready", "RES2", "RES3", "RES4", "RES5"
];

//---------------------------- HwMainInputs LIST
arrays_list.list_hw_input_select = [
    "---", "CF3", "1CF", "CAN", "CA1",
    "IN1", "IN2", "IN3", "IN4", "IN5", "IN6",
    "H1", "H2", "H3", "H4", "H5", "H6",
    "H7", "H8", "H9", "H10", "H11", "H12"
];

//---------------------------- List_ProgCarInputs LIST
arrays_list.List_ProgCarInputs = [
    "OVL","FUL","FAN","PHC1","PHC2","PHC3",
    "DO1","DO2","DO3","DC",
    "RES1","RES2","RES3","RES4","RES5"
];


//---------------------------- List_HwCarInputs LIST
arrays_list.List_HwCarInputs = [
    "---","IN1","IN2","IN3","IN4","IN5","IN6","IN7",
    "H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12"
];

//---------------------------- List_ProgMainOutputs LIST
arrays_list.List_ProgMainOutputs = [
    "MUP","MDN","MV0","MV1","MV2","TC","ST.DL","URA","FAN","ENOUT",
    "RELAY","UPSOUT","UPSREF","ADOOUT","1CFOUT","DRV.RST","ERS","ENR",
    "RES4","RES5","CLOSE1","CLOSE2","CLOSE3","CLOSE4","CLOSE5"
];

//---------------------------- List_HwMainOutputs LIST
arrays_list.List_HwMainOutputs = [
    "---","O+-","PO1","PO2","PO3","PO4",
    "OC1","OC2","OC3","OC4","OC5","OC6","OC7",
    "S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11",
    "H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12"
];


//---------------------------- List_HW_Main_PB_Type LIST
arrays_list.List_HW_Main_PB_Type = [
    "Parallel",
    "Serial Ext",
    "Keypad"
    // "DoublexMaster"  // در صورت نیاز می‌توان دوباره فعال کرد
];


//---------------------------- List_HwType LIST
arrays_list.List_HwType = ["NO", "NC"];


//---------------------------- List_service_type LIST
arrays_list.List_service_type = ["Collective DN", "Full Collective","Keypad","Collective U/D"];

//---------------------------------------------------

let arrays = {
};

//------------------------------ MAIN Table
arrays.mian_menu = [{ type: "table"  },"general","advance", "information"];

//------------------------------ GENERAL Table
arrays.general = [{ type: "table"  },"num_of_stop", "service_type"];

//------------------------------ ADVANCE Table
arrays.advance = [{ type: "table"},"Type_Elevator", "Hardware" ,"Timer_Setting","Phase_Control", "Doublex"];

//------------------------------ Hardware Table
arrays.Hardware = [{ type: "table"},"HW_Main_Board", "HW_Carcodec" ];

//------------------------------ HW Main_Board Table
arrays.HW_Main_Board = [{ type: "table"},"HW_Main_Board$Inputs", "HW_Main_Board$Outputs","HW_Main_Board$Inputs_Type","HW_Main_Board$Outputs_Type","HW_Main_Board$Push_Buttons","HW_Main_Board$Numrator","HW_Main_Board$Drive" ];

//------------------------------ HW Carcodec Table
arrays.HW_Carcodec = [{ type: "table"},"HW_Carcodec$Inputs", "HW_Carcodec$Outputs","HW_Carcodec$Inputs_Type","HW_Carcodec$Outputs_Type","HW_Carcodec$Push_Buttons","HW_Carcodec$Numrator" ];

//------------------------------ Timer_Setting Table
arrays.Timer_Setting = [{ type: "table"},"UD_ReleaseDel", "TC_ReleaseDel" ,"1CF_Delay","Leveling_Time", "Standby_Time", "URA_Delay", "Relay_Time"];

//------------------------------ Phase_Control Table
arrays.Phase_Control = [{ type: "table"},"Phase_Reverse", "Phase_Fault", "One_Phase" ];

//------------------------------ HW_Main_Board$Push_Buttons Table
arrays.HW_Main_Board$Push_Buttons = [{ type: "table"},"HW_Main_Board$Push_Buttons$Type", "HW_Main_Board$Push_Buttons$ParallelSetting", "HW_Main_Board$Push_Buttons$Canceller" ];




arrays.HW_Carcodec$Inputs = [{ type: "table"},"kave", "ali" ];

//--------------------------------------------- num_of_stop input
arrays.num_of_stop = [{ type: "input",ar:0,ad:2,status:0,data:0,send:0},"num_of_stop", "5"];
Object.assign(arrays.num_of_stop[0], { offset: 0, factor: 1, Addition: 1 });

//--------------------------------------------- num_of_stop select
arrays.service_type = [{ type: "select",ar:0,ad:3,status:0,data:0,send:0},"service_type","List_service_type"];
Object.assign(arrays.service_type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Push_Buttons$Type select
arrays.HW_Main_Board$Push_Buttons$Type = [{ type: "select",ar:0,ad:49,status:0,data:0,send:0},"HW_Main_Board$Push_Buttons$Type","List_HW_Main_PB_Type"];
Object.assign(arrays.HW_Main_Board$Push_Buttons$Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- list_type_elevator select
arrays.Type_Elevator = [{ type: "select",ar:0,ad:1,status:0,data:0,send:0},"Type_Elevator","list_type_elevator"];
Object.assign(arrays.Type_Elevator[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Inputs multy_SELECT
arrays.HW_Main_Board$Inputs = [{ type: "multy_SELECT",ar:0,ad:241,status:0,data:0},"HW_Main_Board$Inputs","list_hw_input", "list_hw_input_select"];
for (let i = 1; i <= arrays_list[arrays.HW_Main_Board$Inputs[2]].length; i++) {
    arrays.HW_Main_Board$Inputs[0][`status${i}`] = i;
    arrays.HW_Main_Board$Inputs[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Main_Board$Inputs[0], { offset: 0, factor: 1, Addition: 0 });


//--------------------------------------------- HW_Main_Board$Outputs multy_SELECT
arrays.HW_Main_Board$Outputs = [{ type: "multy_SELECT",ar:0,ad:271,status:0,data:0},"HW_Main_Board$Outputs","List_ProgMainOutputs", "List_HwMainOutputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Main_Board$Outputs[2]].length; i++) {
    arrays.HW_Main_Board$Outputs[0][`status${i}`] = i;
    arrays.HW_Main_Board$Outputs[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Main_Board$Outputs[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Inputs_Type multy_SELECT
arrays.HW_Main_Board$Inputs_Type = [{ type: "multy_SELECT",ar:0,ad:181,status:0,data:0},"HW_Main_Board$Inputs_Type","list_hw_input", "List_HwType"];
for (let i = 1; i <= arrays_list[arrays.HW_Main_Board$Inputs_Type[2]].length; i++) {
    arrays.HW_Main_Board$Inputs_Type[0][`status${i}`] = i;
    arrays.HW_Main_Board$Inputs_Type[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Main_Board$Inputs_Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Outputs_Type multy_SELECT
arrays.HW_Main_Board$Outputs_Type = [{ type: "multy_SELECT",ar:0,ad:211,status:0,data:0},"HW_Main_Board$Outputs_Type","List_ProgMainOutputs", "List_HwType"];
for (let i = 1; i <= arrays_list[arrays.HW_Main_Board$Outputs_Type[2]].length; i++) {
    arrays.HW_Main_Board$Outputs_Type[0][`status${i}`] = i;
    arrays.HW_Main_Board$Outputs_Type[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Main_Board$Outputs_Type[0], { offset: 0, factor: 1, Addition: 0 });


//--------------------------------------------- HW_Carcodec$Inputs multy_SELECT
arrays.HW_Carcodec$Inputs = [{ type: "multy_SELECT",ar:0,ad:501,status:0,data:0},"HW_Carcodec$Inputs","List_ProgCarInputs", "List_HwCarInputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Inputs[2]].length; i++) {
    arrays.HW_Carcodec$Inputs[0][`status${i}`] = i;
    arrays.HW_Carcodec$Inputs[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Inputs[0], { offset: 0, factor: 1, Addition: 0 });


