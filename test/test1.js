
function load_end(){


    startConnect();

    buttonAction("mian_menu");

    //createMultySelect(arrays.multy_SELECT)

    //document.getElementById(arrays.multy_SELECT[1]+"1").value=2;

    //console.log(arrays.multy_SELECT[1]+"1");

}
window.addEventListener("load", load_end);



function button_TABLE_creat(  ) {
    buttonAction("mian_menu");
}

var activeArray
function buttonAction(name) {

    // نمایش دیتای دریافتی تابع
    //alert(arrays[name]);  // خروجی: ["A", "B", "C"]

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

    if( arrays[name] ){
        activeArray = structuredClone(arrays[name])
    }
    else{
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

            obj_send["ad1"] = activeArray[0].ad;
            obj_send["ar1"] = activeArray[0].ar;
            if( activeArray[0].status == "upload" ){
                obj_send["st1"] = 1;
                obj_send["da1"] = document.getElementById(activeArray[1]).value;
            }
            else{
                obj_send["st1"] = 0;
                obj_send["da1"] = 0;
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


    let j=1;

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

            if(j>3)break;
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

}

function ADVANCE_mqtt_massage_get(DATA){

    console.log("DATA GET");

    var DATA_Recive = JSON.parse(DATA) ;

    if ( activeArray[0].type == "input" || activeArray[0].type == "select") {

        //var json_activeArray = JSON.parse(activeArray[0])

        for (let j = 0; j < 10; j++) {

            if(activeArray[0].ar == DATA_Recive["ar"+j] && activeArray[0].ad == DATA_Recive["ad"+j] ){

                activeArray[0].data = DATA_Recive["da"+j]
                activeArray[0].status = "update"

                updateProgress(100);
                document.getElementById(activeArray[1]).value=activeArray[0].data;

                console.log(activeArray);

            }
        }
    }



    if (  activeArray[0].type == "multy_SELECT" ) {

        for (let i = 0; i < arrays_list[activeArray[2]].length; i++) {

            for (let j = 0; j < 10; j++) {

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

    send_mqtt();
    /*
    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()

    show_status();*/

}





















