
let arrays = {
};

arrays.mian_menu = [{ type: "table"},"general","advance", "drive"];

//------------------------------
arrays.general = [{ type: "table"},"num_of_stop", "service_type"];

arrays.num_of_stop = [{ type: "input",ar:0,ad:2,status:0,data:0,send:0},"num_of_stop", "5"];

arrays.service_type = [{ type: "select",ar:0,ad:3,status:0,data:0,send:0},"service_type","List_service_type"];

//------------------------------
arrays.advance = [{ type: "table"},"select", "input" , "multy_SELECT"];

arrays.select = [{ type: "select"},"resa", "ali"];

arrays.input = [{ type: "input"}," write your Name", "ali"];

arrays.multy_SELECT = [{ type: "multy_SELECT",ar:0,ad:2,status:0,data:0},"hw_input","list_hw_input", "list_hw_input_select"];

//------------------------------

let arrays_list = {
};

arrays_list.list_hw_input = ["CF3", "1CF","CAN"];
arrays_list.list_hw_input_select = ["a", "b","c"];

arrays_list.List_service_type = ["Collective DN", "Full Collective","Keypad","Collective U/D"];



// آرایه شامل نام دکمه‌ها
const buttonNames = ["a", "b", "c", "d", "e"];
