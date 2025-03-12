
//arrays_list[arrays.multy_SELECT[2]].length
let arrays_list = {};

//---------------------------- list_type_elevator LIST
arrays_list.list_type_elevator = [
    "3VF",    // 0
    "HYD",    // 1
    "2Speed", // 2
    "HEVOS"   // 3
];


//---------------------------- List_DisableEnable LIST
arrays_list.List_DisableEnable = ["Disable", "Enable"];


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

//------------------------------ Timer_Setting Table
arrays.Timer_Setting = [{ type: "table"},"UD_ReleaseDel", "TC_ReleaseDel" ,"1CF_Delay","Leveling_Time", "Standby_Time", "URA_Delay", "Relay_Time"];

//------------------------------ Phase_Control Table
arrays.Phase_Control = [{ type: "table"},"Phase_Reverse", "Phase_Fault", "One_Phase" ];


arrays.HW_Carcodec$Inputs = [{ type: "table"},"kave", "ali" ];

//--------------------------------------------- num_of_stop input
arrays.num_of_stop = [{ type: "input",ar:0,ad:2,status:0,data:0,send:0},"num_of_stop", "5"];
Object.assign(arrays.num_of_stop[0], { offset: 0, factor: 1, Addition: 1 });

//--------------------------------------------- num_of_stop select
arrays.service_type = [{ type: "select",ar:0,ad:3,status:0,data:0,send:0},"service_type","List_service_type"];
Object.assign(arrays.service_type[0], { offset: 0, factor: 1, Addition: 0 });


//--------------------------------------------- list_type_elevator select
arrays.Type_Elevator = [{ type: "select",ar:0,ad:1,status:0,data:0,send:0},"Type_Elevator","list_type_elevator"];
Object.assign(arrays.Type_Elevator[0], { offset: 0, factor: 1, Addition: 0 });







