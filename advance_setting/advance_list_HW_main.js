
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

//---------------------------- List_HwPBInputs LIST
arrays_list.List_HwPBInputs = [
    "---", "H1", "H2", "H3", "H4", "H5",
    "H6", "H7", "H8", "H9", "H10", "H11", "H12"
];
//---------------------------- List_HwPARALLEL LIST
arrays_list.List_HwPARALLEL = [
    "PB1", "PB2", "PB3", "PB4", "PB5", "PB6",
    "PB7", "PB8", "PB9", "PB10", "PB11", "PB12"
];

//---------------------------- List_HW_Main_Num_Type LIST
arrays_list.List_HW_Main_Num_Type = ["Parallel", "Ravis Serial PB"];

//---------------------------- List_SegmentsOutputs LIST
arrays_list.List_SegmentsOutputs = [
    "RA","RB","RC","RD","RE","RF","RG",
    "UP","DN",
    "LA","LB","LC","LD","LE","LF","LG"
];

//---------------------------- List_DriveConnection LIST
arrays_list.List_DriveConnection = [
    "Parallel", "Analog", "MOD-YSKAWA",
    "MOD-GEFRAN", "MOD-QMA"
];

//---------------------------- List_Baudrate LIST
arrays_list.List_Baudrate = [
    "9600", "19200", "38400",
    "57600", "115200", "128000", "256000"
];

//---------------------------- List_Speed LIST
arrays_list.List_Speed = [
    "Stop", "Slow", "Rev",
    "Med", "Fast"
];

//---------------------------- List_01 LIST
arrays_list.List_01 = [
    "0", "1"
];





//------------------------------ HW Main_Board Table
arrays.HW_Main_Board = [{ type: "table"},"HW_Main_Board$Inputs", "HW_Main_Board$Outputs","HW_Main_Board$Inputs_Type","HW_Main_Board$Outputs_Type","HW_Main_Board$Push_Buttons","HW_Main_Board$Numrator","HW_Main_Board$Drive" ];

//------------------------------ HW_Main_Board$Numrator Table
arrays.HW_Main_Board$Numrator = [{ type: "table"},"HW_Main_Board$Numrator$Type", "HW_Main_Board$Numrator$ParallelSetting", "HW_Main_Board$Numrator$Sleep_Light", "HW_Main_Board$Numrator$Active_Light" ];

//------------------------------ HW_Main_Board$Push_Buttons Table
arrays.HW_Main_Board$Push_Buttons = [{ type: "table"},"HW_Main_Board$Push_Buttons$Type", "HW_Main_Board$Push_Buttons$ParallelSetting", "HW_Main_Board$Push_Buttons$Canceller" ];

//------------------------------ HW_Main_Board$Drive Table
arrays.HW_Main_Board$Drive = [
    { type: "table" },
    "HW_Main_Board$Drive$Connection", "HW_Main_Board$Drive$ParallelSetting",
    "HW_Main_Board$Drive$Serial_Setting"
];

//------------------------------ HW_Main_Board$Drive Table
arrays.HW_Main_Board$Drive$Serial_Setting = [
    { type: "table" },
    "HW_Main_Board$Drive$Serial_Setting$Baudrate",
    "HW_Main_Board$Drive$Serial_Setting$Max_Freq", "HW_Main_Board$Drive$Serial_Setting$Slow_Freq",
    "HW_Main_Board$Drive$Serial_Setting$Rev_Freq", "HW_Main_Board$Drive$Serial_Setting$Medium_Freq",
    "HW_Main_Board$Drive$Serial_Setting$Learn_Freq", "HW_Main_Board$Drive$Serial_Setting$0To50Hz_Acc",
    "HW_Main_Board$Drive$Serial_Setting$50To0Hz_Decc"
];

//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$50To0Hz_Decc input
arrays.HW_Main_Board$Drive$Serial_Setting$50To0Hz_Decc = [{ type: "input",ar:0,ad:77,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$50To0Hz_Decc", "5"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$50To0Hz_Decc[0], { offset: 0, factor: 10, Addition: 0 , step:0.1 , min :0 , max:10 });

//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$0To50Hz_Acc input
arrays.HW_Main_Board$Drive$Serial_Setting$0To50Hz_Acc = [{ type: "input",ar:0,ad:76,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$0To50Hz_Acc", "5"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$0To50Hz_Acc[0], { offset: 0, factor: 10, Addition: 0 , step:0.1 , min :0 , max:10 });

//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$Medium_Freq input
arrays.HW_Main_Board$Drive$Serial_Setting$Medium_Freq = [{ type: "input",ar:0,ad:75,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$Medium_Freq", "5"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$Medium_Freq[0], { offset: 0, factor: 1, Addition: 0 , step:1 , min :0 , max:50 });

//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$Slow_Freq input
arrays.HW_Main_Board$Drive$Serial_Setting$Slow_Freq = [{ type: "input",ar:0,ad:74,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$Slow_Freq", "5"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$Slow_Freq[0], { offset: 0, factor: 1, Addition: 0 , step:1 , min :0 , max:50 });

//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$Learn_Freq input
arrays.HW_Main_Board$Drive$Serial_Setting$Learn_Freq = [{ type: "input",ar:0,ad:73,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$Learn_Freq", "5"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$Learn_Freq[0], { offset: 0, factor: 1, Addition: 0 , step:1 , min :0 , max:50 });

//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$Max_Freq input
arrays.HW_Main_Board$Drive$Serial_Setting$Max_Freq = [{ type: "input",ar:0,ad:71,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$Max_Freq", "5"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$Max_Freq[0], { offset: 0, factor: 1, Addition: 0 , step:1 , min :0 , max:50 });

//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$Rev_Freq input
arrays.HW_Main_Board$Drive$Serial_Setting$Rev_Freq = [{ type: "input",ar:0,ad:72,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$Rev_Freq", "5"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$Rev_Freq[0], { offset: 0, factor: 1, Addition: 0 , step:1 , min :0 , max:50 });

//--------------------------------------------- HW_Main_Board$Numrator$Active_Light input
arrays.HW_Main_Board$Numrator$Active_Light = [{ type: "input",ar:0,ad:63,status:0,data:0,send:0},"HW_Main_Board$Numrator$Active_Light", "5"];
Object.assign(arrays.HW_Main_Board$Numrator$Active_Light[0], { offset: 0, factor: 0.2, Addition: 0 , step:5 , min :0 , max:100 });

//--------------------------------------------- HW_Main_Board$Numrator$Sleep_Light input
arrays.HW_Main_Board$Numrator$Sleep_Light = [{ type: "input",ar:0,ad:62,status:0,data:0,send:0},"HW_Main_Board$Numrator$Sleep_Light", "5"];
Object.assign(arrays.HW_Main_Board$Numrator$Sleep_Light[0], { offset: 0, factor: 0.2, Addition: 0 , step:5 , min :0 , max:100 });


//--------------------------------------------- HW_Main_Board$Drive$Serial_Setting$Baudrate select
arrays.HW_Main_Board$Drive$Serial_Setting$Baudrate = [{ type: "select",ar:0,ad:70,status:0,data:0,send:0},"HW_Main_Board$Drive$Serial_Setting$Baudrate","List_Baudrate"];
Object.assign(arrays.HW_Main_Board$Drive$Serial_Setting$Baudrate[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Drive$Connection select
arrays.HW_Main_Board$Drive$Connection = [{ type: "select",ar:0,ad:53,status:0,data:0,send:0},"HW_Main_Board$Drive$Connection","List_DriveConnection"];
Object.assign(arrays.HW_Main_Board$Drive$Connection[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Numrator$Type select
arrays.HW_Main_Board$Numrator$Type = [{ type: "select",ar:0,ad:51,status:0,data:0,send:0},"HW_Main_Board$Numrator$Type","List_HW_Main_Num_Type"];
Object.assign(arrays.HW_Main_Board$Numrator$Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Push_Buttons$Type select
arrays.HW_Main_Board$Push_Buttons$Type = [{ type: "select",ar:0,ad:49,status:0,data:0,send:0},"HW_Main_Board$Push_Buttons$Type","List_HW_Main_PB_Type"];
Object.assign(arrays.HW_Main_Board$Push_Buttons$Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Main_Board$Push_Buttons$Canceller select
arrays.HW_Main_Board$Push_Buttons$Canceller = [{ type: "select",ar:0,ad:68,status:0,data:0,send:0},"HW_Main_Board$Push_Buttons$Canceller","List_DisableEnable"];
Object.assign(arrays.HW_Main_Board$Push_Buttons$Canceller[0], { offset: 0, factor: 1, Addition: 0 });

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


//--------------------------------------------- HW_Main_Board$Push_Buttons$ParallelSetting multy_SELECT
arrays.HW_Main_Board$Push_Buttons$ParallelSetting = [{ type: "multy_SELECT",ar:0,ad:301,status:0,data:0},"HW_Main_Board$Push_Buttons$ParallelSetting","List_HwPARALLEL", "List_HwPBInputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Main_Board$Push_Buttons$ParallelSetting[2]].length; i++) {
    arrays.HW_Main_Board$Push_Buttons$ParallelSetting[0][`status${i}`] = i;
    arrays.HW_Main_Board$Push_Buttons$ParallelSetting[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Main_Board$Push_Buttons$ParallelSetting[0], { offset: 0, factor: 1, Addition: 0 });


//--------------------------------------------- HW_Main_Board$Numrator$ParallelSetting multy_SELECT
arrays.HW_Main_Board$Numrator$ParallelSetting = [{ type: "multy_SELECT",ar:0,ad:351,status:0,data:0},"HW_Main_Board$Numrator$ParallelSetting","List_SegmentsOutputs", "List_HwMainOutputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Main_Board$Numrator$ParallelSetting[2]].length; i++) {
    arrays.HW_Main_Board$Numrator$ParallelSetting[0][`status${i}`] = i;
    arrays.HW_Main_Board$Numrator$ParallelSetting[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Main_Board$Numrator$ParallelSetting[0], { offset: 0, factor: 1, Addition: 0 });



//--------------------------------------------- HW_Main_Board$Drive$ParallelSetting multy_Xsatage_SELECT

arrays.HW_Main_Board$Drive$ParallelSetting = [{ type: "multy_Xsatage_SELECT",status:0 , stage:3 },"HW_Main_Board$Drive$ParallelSetting","List_Speed", "List_01"];

let rows = arrays.HW_Main_Board$Drive$ParallelSetting[0].stage;
let cols = arrays_list[arrays.HW_Main_Board$Drive$ParallelSetting[2]].length

arrays.HW_Main_Board$Drive$ParallelSetting[0].data = createMatrix(rows,cols);
arrays.HW_Main_Board$Drive$ParallelSetting[0].status = createMatrix(rows,cols);

arrays.HW_Main_Board$Drive$ParallelSetting[0].address = createMatrix(3,2);
arrays.HW_Main_Board$Drive$ParallelSetting[0].address[0] = { ar: 5, ad: 0};
arrays.HW_Main_Board$Drive$ParallelSetting[0].address[1] = { ar: 6, ad: 0};
arrays.HW_Main_Board$Drive$ParallelSetting[0].address[2] = { ar: 7, ad: 0};

Object.assign(arrays.HW_Main_Board$Drive$ParallelSetting[0], { offset: 0, factor: 1, Addition: 0 });






