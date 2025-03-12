
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

//------------------------------ Relay_Time Table
arrays.Relay_Time = [{ type: "table"},"Relay_Time$ON_Delay", "Relay_Time$ON_Time" ];




//--------------------------------------------- Relay_Time$ON_Time input
arrays.Relay_Time$ON_Time = [{ type: "input",ar:0,ad:67,status:0,data:0,send:0},"Relay_Time$ON_Time", "0"];
Object.assign(arrays.Relay_Time$ON_Time[0], { offset: 0, factor: 10, Addition: 0 , step:0.1 , min :0 , max:10 });

//--------------------------------------------- Relay_Time$ON_Delay input
arrays.Relay_Time$ON_Delay = [{ type: "input",ar:0,ad:66,status:0,data:0,send:0},"Relay_Time$ON_Delay", "0"];
Object.assign(arrays.Relay_Time$ON_Delay[0], { offset: 0, factor: 10, Addition: 0 , step:0.1 , min :0 , max:10 });

//--------------------------------------------- URA_Delay input
arrays.URA_Delay = [{ type: "input",ar:0,ad:37,status:0,data:0,send:0},"URA_Delay", "0"];
Object.assign(arrays.URA_Delay[0], { offset: 0, factor: 10, Addition: 0 , step:0.1 , min :0 , max:10 });

//--------------------------------------------- Standby_Time input
arrays.Standby_Time = [{ type: "input",ar:0,ad:35,status:0,data:0,send:0},"Standby_Time", "0"];
Object.assign(arrays.Standby_Time[0], { offset: 0, factor: 0.2, Addition: 0 , step:5 , min :0 , max:1000 });

//--------------------------------------------- Leveling_Time input
arrays.Leveling_Time = [{ type: "input",ar:0,ad:34,status:0,data:0,send:0},"Leveling_Time", "0"];
Object.assign(arrays.Leveling_Time[0], { offset: 0, factor: 1, Addition: 0 , step:1 , min :0 , max:20 });

//--------------------------------------------- Leveling_Time input
arrays.Leveling_Time = [{ type: "input",ar:0,ad:34,status:0,data:0,send:0},"Leveling_Time", "0"];
Object.assign(arrays.Leveling_Time[0], { offset: 0, factor: 1, Addition: 0 , step:1 , min :0 , max:20 });

//--------------------------------------------- TC_ReleaseDel input
arrays.TC_ReleaseDel = [{ type: "input",ar:0,ad:33,status:0,data:0,send:0},"TC_ReleaseDel", "0"];
Object.assign(arrays.TC_ReleaseDel[0], { offset: 0, factor: 10, Addition: 0 , step:0.1 , min :0 , max:20 });

//--------------------------------------------- UD_ReleaseDel input
arrays.UD_ReleaseDel = [{ type: "input",ar:0,ad:32,status:0,data:0,send:0},"UD_ReleaseDel", "0"];
Object.assign(arrays.UD_ReleaseDel[0], { offset: 0, factor: 10, Addition: 0 , step:0.1 , min :0 , max:20 });

//--------------------------------------------- num_of_stop input
arrays.num_of_stop = [{ type: "input",ar:0,ad:2,status:0,data:0,send:0},"num_of_stop", "5"];
Object.assign(arrays.num_of_stop[0], { offset: 0, factor: 1, Addition: 1 });


//--------------------------------------------- One_Phase select
arrays.One_Phase = [{ type: "select",ar:0,ad:13,status:0,data:0,send:0},"One_Phase","List_DisableEnable"];
Object.assign(arrays.One_Phase[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- Phase_Fault select
arrays.Phase_Fault = [{ type: "select",ar:0,ad:12,status:0,data:0,send:0},"Phase_Fault","List_DisableEnable"];
Object.assign(arrays.Phase_Fault[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- Phase_Reverse select
arrays.Phase_Reverse = [{ type: "select",ar:0,ad:11,status:0,data:0,send:0},"Phase_Reverse","List_DisableEnable"];
Object.assign(arrays.Phase_Reverse[0], { offset: 0, factor: 1, Addition: 0 });

//--------------------------------------------- service_type select
arrays.service_type = [{ type: "select",ar:0,ad:3,status:0,data:0,send:0},"service_type","List_service_type"];
Object.assign(arrays.service_type[0], { offset: 0, factor: 1, Addition: 0 });


//--------------------------------------------- list_type_elevator select
arrays.Type_Elevator = [{ type: "select",ar:0,ad:1,status:0,data:0,send:0},"Type_Elevator","list_type_elevator"];
Object.assign(arrays.Type_Elevator[0], { offset: 0, factor: 1, Addition: 0 });







