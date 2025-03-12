
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

//------------------------------ HW Carcodec Table
arrays.HW_Carcodec = [{ type: "table"},"HW_Carcodec$Inputs", "HW_Carcodec$Outputs","HW_Carcodec$Inputs_Type","HW_Carcodec$Outputs_Type","HW_Carcodec$Push_Buttons","HW_Carcodec$Numrator" ];

//--------------------------------------------- HW_Carcodec$Inputs multy_SELECT
arrays.HW_Carcodec$Inputs = [{ type: "multy_SELECT",ar:0,ad:501,status:0,data:0},"HW_Carcodec$Inputs","List_ProgCarInputs", "List_HwCarInputs"];
for (let i = 1; i <= arrays_list[arrays.HW_Carcodec$Inputs[2]].length; i++) {
    arrays.HW_Carcodec$Inputs[0][`status${i}`] = i;
    arrays.HW_Carcodec$Inputs[0][`data${i}`] = i;
}
Object.assign(arrays.HW_Carcodec$Inputs[0], { offset: 0, factor: 1, Addition: 0 });