
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

//---------------------------- List_ProgCarOutputs LIST
arrays_list.List_ProgCarOutputs = [
    "CLOSE1", "CLOSE2", "CLOSE3", "OPEN1",
    "OPEN2", "OPEN3", "FAN", "OVLO",
    "GANG", "AVA", "RES1", "RES2",
    "RES3", "RES4", "RES5"
];

//---------------------------- List_HwCarOutputs LIST
arrays_list.List_HwCarOutputs = [
    "---", "CM1", "CM2", "PO1",
    "PO2", "PO3", "PO4", "S1",
    "S2", "S3", "S4", "S5",
    "S6", "S7", "S8", "S9",
    "S10", "S11", "H1", "H2",
    "H3", "H4", "H5", "H6",
    "H7", "H8", "H9", "H10",
    "H11", "H12"
];


//------------------------------ HW Carcodec Table
arrays.HW_Carcodec = [{ type: "table"},"HW_Carcodec$Inputs", "HW_Carcodec$Outputs","HW_Carcodec$Inputs_Type","HW_Carcodec$Outputs_Type","HW_Carcodec$Push_Buttons","HW_Carcodec$Numrator" ];

//------------------------------ HW_Carcodec$Numrator Table
arrays.HW_Carcodec$Numrator = [{ type: "table"},"HW_Carcodec$Numrator$Type", "HW_Carcodec$Numrator$ParallelSetting", "HW_Carcodec$Numrator$Sleep_Light", "HW_Carcodec$Numrator$Active_Light" ];

//------------------------------ HW_Carcodec$Push_Buttons Table
arrays.HW_Carcodec$Push_Buttons = [{ type: "table"},"HW_Carcodec$Push_Buttons$Type", "HW_Carcodec$Push_Buttons$ParallelSetting", "HW_Carcodec$Push_Buttons$Canceller" ];


//--------------------------------------------- HW_Carcodec$Numrator$Active_Light input
arrays.HW_Carcodec$Numrator$Active_Light = [{ type: "input",ar:0,ad:65,status:0,data:0,send:0},"HW_Carcodec$Numrator$Active_Light", "5"];
Object.assign(arrays.HW_Carcodec$Numrator$Active_Light[0], { offset: 0, factor: 0.2, Addition: 0 , step:5 , min :0 , max:100 });

//--------------------------------------------- HW_Carcodec$Numrator$Sleep_Light input
arrays.HW_Carcodec$Numrator$Sleep_Light = [{ type: "input",ar:0,ad:64,status:0,data:0,send:0},"HW_Carcodec$Numrator$Sleep_Light", "5"];
Object.assign(arrays.HW_Carcodec$Numrator$Sleep_Light[0], { offset: 0, factor: 0.2, Addition: 0 , step:5 , min :0 , max:100 });


//--------------------------------------------- HW_Carcodec$Numrator$Type select
arrays.HW_Carcodec$Numrator$Type = [{ type: "select",ar:0,ad:52,status:0,data:0,send:0},"HW_Carcodec$Numrator$Type","List_HW_Main_Num_Type"];
Object.assign(arrays.HW_Carcodec$Numrator$Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Carcodec$Push_Buttons$Type select
arrays.HW_Carcodec$Push_Buttons$Type = [{ type: "select",ar:0,ad:50,status:0,data:0,send:0},"HW_Carcodec$Push_Buttons$Type","List_HW_Main_PB_Type"];
Object.assign(arrays.HW_Carcodec$Push_Buttons$Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Carcodec$Push_Buttons$Canceller select
arrays.HW_Carcodec$Push_Buttons$Canceller = [{ type: "select",ar:0,ad:69,status:0,data:0,send:0},"HW_Carcodec$Push_Buttons$Canceller","List_DisableEnable"];
Object.assign(arrays.HW_Carcodec$Push_Buttons$Canceller[0], { offset: 0, factor: 1, Addition: 0 });



//--------------------------------------------- HW_Carcodec$Outputs_Type multy_SELECT
arrays.HW_Carcodec$Outputs_Type = [{ type: "multy_SELECT",ar:0,ad:451,status:0,data:0},"HW_Carcodec$Outputs_Type","List_ProgCarOutputs", "List_HwType"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Outputs_Type[2]].length; i++) {
    arrays.HW_Carcodec$Outputs_Type[0][`status${i}`] = i;
    arrays.HW_Carcodec$Outputs_Type[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Outputs_Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Carcodec$Inputs_Type multy_SELECT
arrays.HW_Carcodec$Inputs_Type = [{ type: "multy_SELECT",ar:0,ad:401,status:0,data:0},"HW_Carcodec$Inputs_Type","List_ProgCarInputs", "List_HwType"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Inputs_Type[2]].length; i++) {
    arrays.HW_Carcodec$Inputs_Type[0][`status${i}`] = i;
    arrays.HW_Carcodec$Inputs_Type[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Inputs_Type[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Carcodec$Outputs multy_SELECT
arrays.HW_Carcodec$Outputs = [{ type: "multy_SELECT",ar:0,ad:551,status:0,data:0},"HW_Carcodec$Outputs","List_ProgCarOutputs", "List_HwCarOutputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Outputs[2]].length; i++) {
    arrays.HW_Carcodec$Outputs[0][`status${i}`] = i;
    arrays.HW_Carcodec$Outputs[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Outputs[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- HW_Carcodec$Inputs multy_SELECT
arrays.HW_Carcodec$Inputs = [{ type: "multy_SELECT",ar:0,ad:501,status:0,data:0},"HW_Carcodec$Inputs","List_ProgCarInputs", "List_HwCarInputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Inputs[2]].length; i++) {
    arrays.HW_Carcodec$Inputs[0][`status${i}`] = i;
    arrays.HW_Carcodec$Inputs[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Inputs[0], { offset: 0, factor: 1, Addition: 0 });


//--------------------------------------------- HW_Carcodec$Push_Buttons$ParallelSetting multy_SELECT
arrays.HW_Carcodec$Push_Buttons$ParallelSetting = [{ type: "multy_SELECT",ar:0,ad:601,status:0,data:0},"HW_Carcodec$Push_Buttons$ParallelSetting","List_HwPARALLEL", "List_HwPBInputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Push_Buttons$ParallelSetting[2]].length; i++) {
    arrays.HW_Carcodec$Push_Buttons$ParallelSetting[0][`status${i}`] = i;
    arrays.HW_Carcodec$Push_Buttons$ParallelSetting[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Push_Buttons$ParallelSetting[0], { offset: 0, factor: 1, Addition: 0 });


//--------------------------------------------- HW_Carcodec$Numrator$ParallelSetting multy_SELECT
arrays.HW_Carcodec$Numrator$ParallelSetting = [{ type: "multy_SELECT",ar:0,ad:651,status:0,data:0},"HW_Carcodec$Numrator$ParallelSetting","List_SegmentsOutputs", "List_HwCarOutputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Numrator$ParallelSetting[2]].length; i++) {
    arrays.HW_Carcodec$Numrator$ParallelSetting[0][`status${i}`] = i;
    arrays.HW_Carcodec$Numrator$ParallelSetting[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Numrator$ParallelSetting[0], { offset: 0, factor: 1, Addition: 0 });
