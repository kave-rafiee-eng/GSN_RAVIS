
// Get JSON data from the hidden div
var jsonData = document.getElementById("json_server").innerText;
// Parse JSON into a JavaScript object
var data = JSON.parse(jsonData);
// Store the serial value in a variable
var serial = data.serial;
var user = data.user;

function refresh(){

    if( mqtt_connect ){
        if (Mqtt_alertModal) Mqtt_alertModal.hide();
    }
    else{
        showMqtt_modal();
    }

}
setInterval(refresh, 2000);


function load_end(){

    detectDevice();

    startConnect();

    buttonAction("mian_menu");
    //buttonAction("_1CF_Delay_Up_Down_Del");

}
window.addEventListener("load", load_end);



let address = [];
var activeArray

function button_TABLE_creat(  ) {
    address.length=0;
    buttonAction("mian_menu");
}
function button_BACK(){

    if( address.length > 1 ){
        let last_ad = address[address.length-2];
        address.pop();
        address.pop();

        buttonAction(last_ad)
    }
}

function button_GOTO(selectedValue){

    const index = address.indexOf(selectedValue);

    if (index !== -1) {
        // حذف از انتها تا مقدار کلیک شده
        address = address.slice(0, index );

        // بروزرسانی دوباره مسیر در صفحه
        show_addrress(address);

        buttonAction(selectedValue)
    }

}

function buttonAction(name) {

    address.push(name);

    //document.getElementById("addrress").innerHTML = address;
    show_addrress(address)
    // نمایش دیتای دریافتی تابع
    //alert(address);  // خروجی: ["A", "B", "C"]

    let btn = document.getElementById("div_BTN_save_read");
    if (btn) {
        btn.remove(); // حذف جدول
    }

    let table = document.getElementById("dynamicTable");
    if (table) {
        table.remove(); // حذف جدول
    }

    let select = document.getElementById("div_dynamicSelect");
    if (select) {
        select.remove(); // حذف سلکت
    }

    let input = document.getElementById("div_dynamicInput");
    if (input) {
        input.remove(); // حذف جدول
    }

    let register_name = document.getElementById("register_name");
    register_name.innerHTML=""


    if( arrays[name] ){
        activeArray = structuredClone(arrays[name])
    }
    else{
        address.length=0;
        show_addrress(address)
        activeArray = structuredClone(arrays["mian_menu"])

    }

    if( activeArray[0].type == "table" ){
        createTable(activeArray);
    }
    else if ( activeArray[0].type == "select") {
        createSelect(activeArray);
    }
    else if ( activeArray[0].type == "input") {
        createInput(activeArray);
    }
    else if ( activeArray[0].type == "multy_SELECT") {
        createMultySelect(activeArray);
    }
    else if ( activeArray[0].type == "multy_Xsatage_SELECT") {
        Create_Multy_Xsatage_SELECT(activeArray);
    }
    else if ( activeArray[0].type == "multy_Xsatage_INPUT") {
        Create_Multy_Xsatage_INPUT(activeArray);
    }

    send_mqtt();

}


function send_check(){

    send_mqtt();

}
setInterval(send_check, 4000);

function save() {
    if ( activeArray[0].type == "input" || activeArray[0].type == "select"  ) {
        activeArray[0].status = "upload";
    }
    if (  activeArray[0].type == "multy_SELECT" ) {
        for (let i = 0; i < arrays_list[activeArray[2]].length; i++) {
            activeArray[0][`status${i}`] = "upload";
        }
    }
    if (   activeArray[0].type == "multy_Xsatage_SELECT" || activeArray[0].type == "multy_Xsatage_INPUT"  ) {

        let cols_conter=0;
        if( activeArray[0].type == "multy_Xsatage_SELECT" ){
            cols_conter = arrays_list[activeArray[2]].length
        }
        if( activeArray[0].type == "multy_Xsatage_INPUT" ){
            cols_conter = activeArray[0].pre_data
        }

        for (let cols = 0; cols < cols_conter; cols++) {
                for (let rows_stage = 0; rows_stage < activeArray[0].stage; rows_stage++) {
                    activeArray[0].status[rows_stage][cols] = "upload";

                }

        }
    }

    send_mqtt();
    console.log("save");
}
function read() {
    if ( activeArray[0].type == "input" || activeArray[0].type == "select"  ) {
        activeArray[0].status = "download";
    }
    if (  activeArray[0].type == "multy_SELECT" ) {
        for (let i = 0; i < arrays_list[activeArray[2]].length; i++) {
            activeArray[0][`status${i}`] = "download";
        }
    }
    if (   activeArray[0].type == "multy_Xsatage_SELECT" || activeArray[0].type == "multy_Xsatage_INPUT"   ) {

        let cols_conter=0;
        if( activeArray[0].type == "multy_Xsatage_SELECT" ){
            cols_conter = arrays_list[activeArray[2]].length
        }
        if( activeArray[0].type == "multy_Xsatage_INPUT" ){
            cols_conter = activeArray[0].pre_data
        }
        activeArray[0].pre_data=0;
        activeArray[0].pre_status=0;
        for (let cols = 0; cols < cols_conter; cols++) {
            for (let rows_stage = 0; rows_stage < activeArray[0].stage; rows_stage++) {
                activeArray[0].status[rows_stage][cols] = "download";

            }
        }
    }
    send_mqtt();
    console.log("read");
}


function send_mqtt(){

    var obj_send = new Object();
    let serial = Number(document.getElementById("div_serial").textContent )
    obj_send.serial = serial;

    let topic = "server/"+serial

    if ( activeArray[0].type == "input" || activeArray[0].type == "select"  ) {

        if( activeArray[0].status != "update"  ){

            obj_send["ad0"] = activeArray[0].ad;
            obj_send["ar0"] = activeArray[0].ar;
            if( activeArray[0].status == "upload" ){
                obj_send["st0"] = 1;
                obj_send["da0"] = Math.round(document.getElementById(activeArray[1]).value * activeArray[0].factor + activeArray[0].Addition +  activeArray[0].offset )

            }
            else{
                obj_send["st0"] = 0;
                obj_send["da0"] = 0;
            }

            console.log(JSON.stringify(obj_send));
            publishMessage(topic,JSON.stringify(obj_send));


            activeArray[0].send = 1;

            activeArray[0].status = "download"
        }

        if(activeArray[0].status != "update"){
            showProgressModal('در حال اتصال ...', 'لطفاً منتظر بمانید.');
        }

    }


    let j=0;

    if (  activeArray[0].type == "multy_SELECT" ) {

        for (let i = 0; i < arrays_list[activeArray[2]].length; i++) {

            if( activeArray[0][`status${i}`] != "update"  ){

                obj_send["ad"+j] = activeArray[0].ad+i;
                obj_send["ar"+j] = activeArray[0].ar;
                if( activeArray[0][`status${i}`] == "upload" ){
                    obj_send["st"+j] = 1;
                }
                else{
                    obj_send["st"+j] = 0;
                }

                obj_send["da"+j] = document.getElementById(activeArray[1]+i).value;
                console.log(document.getElementById(activeArray[1]+i).value)
                console.log(activeArray[1]+i);
                activeArray[0][`status${i}`] = "download"

                j++;
            }
            //arrays.multy_SELECT[0][`status${i}`] = i;

            if(j>23)break;
        }

        if( j>1){
            console.log(JSON.stringify(obj_send));
            publishMessage(topic,JSON.stringify(obj_send));
        }


        let step=0;
        let pass=0;
        let progress =0;
        for (let i = 0; i < arrays_list[activeArray[2]].length; i++) {
            step++;
            if (activeArray[0][`status${i}`] == "update") {
                pass++;
            }
        }
        progress = pass/step*100;
        if( pass != step ){
            showProgressModal('در حال اتصال ...', 'لطفاً منتظر بمانید.');
            updateProgress(progress);
        }

    }


    let index_send=0;

    let pre=1;
    if (activeArray[0].hasOwnProperty('per_en')) {

        if( activeArray[0].pre_status != "update"  ){

            pre=0;

            obj_send["ad0"] = activeArray[0].pre_ad;
            obj_send["ar0"] = activeArray[0].pre_ar;

            obj_send["st0"] = 0;
            obj_send["da0"] = 0;

            console.log(JSON.stringify(obj_send));
            publishMessage(topic,JSON.stringify(obj_send));

            activeArray[0].pre_status = "download"
        }

        if(activeArray[0].pre_status != "update"){
            showProgressModal('در حال اتصال ...', 'لطفاً منتظر بمانید.');
        }

    }

    if (  ( activeArray[0].type == "multy_Xsatage_SELECT" || activeArray[0].type == "multy_Xsatage_INPUT" ) && pre  ) {

        let cols_conter=0;
        if( activeArray[0].type == "multy_Xsatage_SELECT" ){
            cols_conter = arrays_list[activeArray[2]].length
        }
        if( activeArray[0].type == "multy_Xsatage_INPUT" ){
            cols_conter = activeArray[0].pre_data
        }

        for (let cols = 0; cols < cols_conter; cols++) {
            for (let rows_stage = 0; rows_stage < activeArray[0].stage; rows_stage++) {

                if( activeArray[0].status[rows_stage][cols] != "update"  ){

                    obj_send["ad"+index_send] = activeArray[0].address[rows_stage].ad+cols;
                    obj_send["ar"+index_send] = activeArray[0].address[rows_stage].ar;
                    if( activeArray[0].status[rows_stage][cols] == "upload" ){
                        obj_send["st"+index_send] = 1;
                    }
                    else{
                        obj_send["st"+index_send] = 0;
                    }

                    obj_send["da"+index_send] = Math.round(document.getElementById( activeArray[1]+rows_stage+"_"+cols ).value * activeArray[0].factor + activeArray[0].Addition +  activeArray[0].offset )

                    //console.log("===="+activeArray[1]+rows_stage+"_"+cols);
                    //console.log( document.getElementById(activeArray[1]+rows_stage+"_"+cols).value )
                    activeArray[0].status[rows_stage][cols] = "download"

                    index_send++;

                }

                if(index_send>23)break;
            }
            if(index_send>23)break;
        }

        if( index_send>0){
            //console.log(JSON.stringify(obj_send));
            publishMessage(topic,JSON.stringify(obj_send));
        }

        let step=0;
        let pass=0;
        let progress =0;
        for (let cols = 0; cols < cols_conter; cols++) {
            for (let rows_stage = 0; rows_stage < activeArray[0].stage; rows_stage++) {
                step++;
                if (activeArray[0].status[rows_stage][cols] == "update") {
                    pass++;
                }
            }
        }
        progress = pass/step*100;
        if( pass != step ){
            showProgressModal('در حال اتصال ...', 'لطفاً منتظر بمانید.');
            updateProgress(progress);
        }

    }

}

function ADVANCE_mqtt_massage_get(DATA){

    console.log("DATA GET");

    var DATA_Recive = JSON.parse(DATA) ;

    if ( activeArray[0].type == "input" || activeArray[0].type == "select") {

        //var json_activeArray = JSON.parse(activeArray[0])

        for (let j = 0; j < 40; j++) {

            if(activeArray[0].ar == DATA_Recive["ar"+j] && activeArray[0].ad == DATA_Recive["ad"+j] ){

                activeArray[0].data = (DATA_Recive["da" + j] - activeArray[0].offset) /activeArray[0].factor - activeArray[0].Addition;
                activeArray[0].status = "update"

                updateProgress(100);
                document.getElementById(activeArray[1]).value=activeArray[0].data;

                console.log(activeArray);

            }
        }
    }



    if (  activeArray[0].type == "multy_SELECT" ) {

        for (let i = 0; i < arrays_list[activeArray[2]].length; i++) {

            for (let j = 0; j < 40; j++) {

                if(activeArray[0].ar == DATA_Recive["ar"+j] && (activeArray[0].ad+i) == DATA_Recive["ad"+j] ){

                    activeArray[0][`data${i}`] = DATA_Recive["da"+j]
                    activeArray[0][`status${i}`] = "update"

                    //updateProgress(100);
                    document.getElementById(activeArray[1]+i).value =  activeArray[0][`data${i}`] ;

                    //console.log(activeArray);

                }

            }

        }

        let step=0;
        let pass=0;
        let progress =0;
        for (let i = 0; i < arrays_list[activeArray[2]].length; i++) {
            step++;
            if (activeArray[0][`status${i}`] == "update") {
                pass++;
            }
        }
        progress = pass/step*100;
        updateProgress(progress);

    }

    let index_send=1;

    let pre=1;
    if (activeArray[0].hasOwnProperty('per_en')) {

        for (let j = 0; j < 40; j++) {

            if(activeArray[0].pre_ar == DATA_Recive["ar"+j] && activeArray[0].pre_ad == DATA_Recive["ad"+j] ){

                activeArray[0].pre_data = DATA_Recive["da" + j] ;
                activeArray[0].pre_status = "update"

                updateProgress_change_color(100,"yellow");

                Create_Multy_Xsatage_INPUT(activeArray);
                pre=1
            }
        }
    }
    if (  (activeArray[0].type == "multy_Xsatage_SELECT" || activeArray[0].type == "multy_Xsatage_INPUT") && pre ) {


        let cols_conter=0;
        if( activeArray[0].type == "multy_Xsatage_SELECT" ){
             cols_conter = arrays_list[activeArray[2]].length
        }
        if( activeArray[0].type == "multy_Xsatage_INPUT" ){
             cols_conter = activeArray[0].pre_data
        }

        for (let cols = 0; cols < cols_conter; cols++) {
            for (let rows_stage = 0; rows_stage < activeArray[0].stage; rows_stage++) {

                for (let j = 0; j < 40; j++) {

                    if( activeArray[0].address[rows_stage].ar == DATA_Recive["ar"+j] && activeArray[0].address[rows_stage].ad+cols == DATA_Recive["ad"+j] ){

                        console.log("$$$$")

                        activeArray[0].data[rows_stage][cols] = (DATA_Recive["da"+j] - activeArray[0].offset) /activeArray[0].factor - activeArray[0].Addition
                        activeArray[0].status[rows_stage][cols] = "update"

                        document.getElementById(activeArray[1]+rows_stage+"_"+cols).value =  activeArray[0].data[rows_stage][cols] ;

                    }
                }
            }
        }

        let step=0;
        let pass=0;
        let progress =0;
        for (let cols = 0; cols < cols_conter; cols++) {
            for (let rows_stage = 0; rows_stage < activeArray[0].stage; rows_stage++) {
                step++;
                if (activeArray[0].status[rows_stage][cols] == "update") {
                    pass++;
                }
            }
        }
        progress = pass/step*100;
        updateProgress_change_color(progress,"green");
        updateProgress(progress);

    }

    send_mqtt();
    /*
    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()

    show_status();*/

}

var device = "computer";
function detectDevice() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        device = "mobile"
        //alert("📱 دستگاه: موبایل");
        return "mobile";
    } else {
        device = "computer"
       // alert("💻 دستگاه: کامپیوتر");
        return "desktop";
    }
}




















