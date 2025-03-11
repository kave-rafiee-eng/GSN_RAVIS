
//arrays_list[arrays.multy_SELECT[2]].length
let arrays_list = {
};
/*
static const char List_ProgMainInputs[][6]={
	"CF3",
	"1CF",
	"CAN",
	"CA1",
	"IFN",
	"IF1",
	"FLTDR",
	"RLS",
	"DRC",
	"FIRE",
	"OVL",
	"FUL",
	"RELUP",
	"RELDN",
	"ZADO",
	"Ready",
	"RES2",
	"RES3",
	"RES4",
	"RES5"
};
 */
arrays_list.list_hw_input = [
    "CF3", "1CF", "CAN", "CA1", "IFN",
    "IF1", "FLTDR", "RLS", "DRC", "FIRE",
    "OVL", "FUL", "RELUP", "RELDN", "ZADO",
    "Ready", "RES2", "RES3", "RES4", "RES5"
];
/*
static const char List_HwMainInputs[][4]={
	"---",
	"CF3",
	"1CF",
	"CAN",
	"CA1",
	"IN1",
	"IN2",
	"IN3",
	"IN4",
	"IN5",
	"IN6",
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"H6",
	"H7",
	"H8",
	"H9",
	"H10",
	"H11",
	"H12"
};
 */
arrays_list.list_hw_input_select = [
    "---", "CF3", "1CF", "CAN", "CA1",
    "IN1", "IN2", "IN3", "IN4", "IN5", "IN6",
    "H1", "H2", "H3", "H4", "H5", "H6",
    "H7", "H8", "H9", "H10", "H11", "H12"
];

arrays_list.list_type_elevator = [
    "3VF",    // 0
    "HYD",    // 1
    "2Speed", // 2
    "HEVOS"   // 3
];

arrays_list.List_service_type = ["Collective DN", "Full Collective","Keypad","Collective U/D"];

//---------------------------------------------------

let arrays = {
};

arrays.mian_menu = [{ type: "table"},"general","advance", "drive"];

//------------------------------
arrays.general = [{ type: "table"},"num_of_stop", "service_type"];

arrays.num_of_stop = [{ type: "input",ar:0,ad:2,status:0,data:0,send:0},"num_of_stop", "5"];

arrays.service_type = [{ type: "select",ar:0,ad:3,status:0,data:0,send:0},"service_type","List_service_type"];

//------------------------------
arrays.advance = [{ type: "table"},"Type_Elevator", "inputs" ];

arrays.Type_Elevator = [{ type: "select",ar:0,ad:1,status:0,data:0,send:0},"Type_Elevator","list_type_elevator"];



arrays.inputs = [{ type: "multy_SELECT",ar:0,ad:241,status:0,data:0},"hw_input","list_hw_input", "list_hw_input_select"];
for (let i = 1; i <= arrays_list[arrays.inputs[2]].length; i++) {
    arrays.inputs[0][`status${i}`] = i;
    arrays.inputs[0][`data${i}`] = i;
}
//------------------------------




// آرایه شامل نام دکمه‌ها
const buttonNames = ["a", "b", "c", "d", "e"];
