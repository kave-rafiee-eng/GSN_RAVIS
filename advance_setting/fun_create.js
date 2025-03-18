// تابع ایجاد جدول
function createTable(Names) {

    const tableContainer = document.getElementById("tableContainer");

    Names.shift();
    // بررسی می‌کند که جدول از قبل وجود نداشته باشد
    if (document.getElementById("dynamicTable")) {
        alert("جدول از قبل ایجاد شده است!");
        return;
    }

    // ایجاد عنصر <table>
    const table = document.createElement("table");
    table.id = "dynamicTable"; // تنظیم شناسه برای حذف بعدی
    table.className = "table table-hover  text-center";

    // ایجاد <thead>
    const thead = document.createElement("thead");
    thead.className = "table table-secondary";
    thead.innerHTML = `
                <tr>
                    <th>Go To...</th>
                </tr>
            `;
    table.appendChild(thead);

    // ایجاد <tbody>
    const tbody = document.createElement("tbody");
  //  tbody.className  = "table table-warning";
    table.appendChild(tbody);

// تشخیص نوع دستگاه
    const device = /mobile|android|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? "mobile" : "desktop";

// ایجاد ردیف‌های جدول بر اساس آرایه
    Names.forEach((name, index) => {
        let row = document.createElement("tr");

        // تعیین کلاس مناسب بر اساس نوع دستگاه
        const buttonClass = device === "mobile" ? "w-100" : "w-50";
        const text_size = device === "mobile" ? "fs-5" : "fs-7";

        row.innerHTML = `
        <td>
            <button class="btn btn-primary text-light ${buttonClass} fw-semibold ${text_size}" 
                    onclick="buttonAction('${name}')">
                ${name.split('$').pop().replaceAll('_', ' ')}
            </button>
        </td>
    `;

        tbody.appendChild(row);
    });

    // اضافه کردن جدول به صفحه
    tableContainer.appendChild(table);
}


function createInput(data) {

    // دریافت محل اضافه کردن `input`
    const container = document.getElementById("inputContainer");

// ایجاد `div` برای قرار دادن `label` و `input`
    const div = document.createElement("div");
    div.id = "div_dynamicInput";
    div.className = "d-flex justify-content-center p-3 bg-light ";

    const  div_register_name = document.getElementById("register_name")

// ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicInput");
    label.className = "form-label fs-5 fw-semibold text-dark";
    label.textContent = data[1].split('$').pop().replaceAll('_', ' ');
    div_register_name.appendChild(label)

// ایجاد `input`
    const inputElement = document.createElement("input");
    inputElement.type = "number";
    inputElement.id = data[1];
    inputElement.className = "form-control";
    inputElement.placeholder = data[2];

    inputElement.max = data[0].max;
    inputElement.min = data[0].min;
    inputElement.step = data[0].step;


    /* inputElement.max = 100;
     inputElement.min = 0;
     inputElement.step = 5;*/

    function roundToStep(value, step, min) {
        return +(Math.round((value - min) / step) * step + min).toFixed(2);
    }

    inputElement.addEventListener('change', function () {
        let value = parseFloat(inputElement.value);

        if (value > parseFloat(inputElement.max)) {
            alert(`مقدار ورودی نباید بیشتر از ${inputElement.max} باشد!`);
            inputElement.value = inputElement.max;
        } else if (value < parseFloat(inputElement.min)) {
            alert(`مقدار ورودی نباید کمتر از ${inputElement.min} باشد!`);
            inputElement.value = inputElement.min;
        } else {
            // اصلاح خودکار مقدار به نزدیک‌ترین step و محدود کردن اعشار
            inputElement.value = roundToStep(value, parseFloat(inputElement.step), parseFloat(inputElement.min));
        }
    });


// اضافه کردن `label`، `input` و `button` به `div`
    //div.appendChild(label);
    div.appendChild(inputElement);

// اضافه کردن `div` به صفحه
    container.appendChild(div);

    createBTN_save_read();
}


function createBTN_save_read() {

    // دریافت محل اضافه کردن `input`
    const container = document.getElementById("btn_save_read");

// ایجاد `div` برای قرار دادن `label` و `input`
    const div = document.createElement("div");
    div.id = "div_BTN_save_read";
    div.className = "mb-3";

// تشخیص نوع دستگاه
    const device = /mobile|android|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? "mobile" : "desktop";

// تعیین کلاس‌های مناسب بر اساس نوع دستگاه
    const buttonSizeClass = device === "mobile" ? "btn-md me-1 " : "btn-lg me-4";

// دکمه ذخیره (Save)
    const button_save = document.createElement("button");
    if(user != "admin") {
        button_save.className = `btn btn-secodry ${buttonSizeClass} `;
        button_save.disabled = true;
    }
    else{
        button_save.className = `btn btn-primary ${buttonSizeClass} `;
    }

    button_save.innerHTML = `<i class="fas fa-save"></i> Save`;
    button_save.addEventListener('click', save);


// دکمه خواندن (Read)
    const button_read = document.createElement("button");
    button_read.className = `btn btn-warning ${buttonSizeClass} me-4`;
    button_read.innerHTML = `<i class="fas fa-download"></i> Read`;
    button_read.addEventListener('click', read);

    div.appendChild(button_save);
    div.appendChild(button_read);

// اضافه کردن `div` به صفحه
    container.appendChild(div);


    <!-- دکمه دانلود -->
    /*<button class="btn btn-primary btn-lg btn-download">
        <i class="fas fa-download"></i> دانلود
    </button>

    <!-- دکمه آپلود -->
    <button class="btn btn-success btn-lg btn-upload">
        <i class="fas fa-upload"></i> آپلود
    </button>*/

}


function createSelect(data) {

    // دریافت محل اضافه کردن `select`
    const container = document.getElementById("selectContainer");

    // ایجاد `div` برای قرار دادن `label` و `select`
    const div = document.createElement("div");
    div.className = "mb-3";
    div.id = "div_dynamicSelect"

    const  div_register_name = document.getElementById("register_name")

// ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicInput");
    label.className = "form-label fs-5 fw-semibold text-dark";
    label.textContent = data[1].split('$').pop().replaceAll('_', ' ');
    div_register_name.appendChild(label)

    // ایجاد `select`
    const selectElement = document.createElement("select");
    selectElement.id = data[1];
    selectElement.className = "form-select";

    // اضافه کردن گزینه‌های آرایه به `select`
    arrays_list[data[2]].forEach((optionText, index) => {
        let option = document.createElement("option"); // ایجاد `<option>`
        option.value = index; // مقدار `value`
        option.textContent = optionText; // متن نمایش داده‌شده
        selectElement.appendChild(option); // اضافه کردن گزینه به `select`
    });

    // اضافه کردن `label` و `select` به `div`
    div.appendChild(selectElement);

// اضافه کردن `div` به صفحه
    container.appendChild(div);

    createBTN_save_read();

}


function createMultySelect(Data) {

    const multySlectContainer = document.getElementById("multySlectContainer");

    // ایجاد `div` برای قرار دادن `label` و `tablr`
    const div = document.createElement("div");
    div.className = "mb-3";
    div.id = "div_MultySelect"


    const  div_register_name = document.getElementById("register_name")

// ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicInput");
    label.className = "form-label fs-5 fw-semibold text-dark";
    label.textContent = Data[1].split('$').pop().replaceAll('_', ' ');
    div_register_name.appendChild(label)

    // ایجاد عنصر <table>
    const table = document.createElement("table");
    table.id = "dynamicTable"; // تنظیم شناسه برای حذف بعدی
    table.className = "table table-bordered table-striped text-center";


    // ایجاد <thead>
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    thead.innerHTML = `
                <tr>
                    <th>board</th>
                    <th>Prog</th>
                </tr>
            `;
    table.appendChild(thead);

    // ایجاد <tbody>
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    tbody.innerHTML = arrays_list[Data[2]]
        .map((name, index) => `
        <tr>
            <!--<td>${index + 1}</td>-->
            <td>
                <select id="${Data[1]}${index}" class="form-select">
                    ${arrays_list[Data[3]].map((option, index2) => `<option value="${index2}">${option}</option>`).join("")}
                   
                </select>
            </td>
            <td>
               <!-- <button class="btn btn-primary" onclick="buttonAction('${name}', 'select_${index}')">${name}</button> -->
               <button class="btn btn-primary" >${name}</button>
            </td>
        </tr>
    `)
        .join(""); // تبدیل `map` به رشته و مقداردهی `innerHTML`

    div.appendChild(table);

    // اضافه کردن جدول به صفحه
    multySlectContainer.appendChild(div);

    createBTN_save_read();

}


let alertModal; // متغیر به صورت گلوبال تعریف می‌شود
let mqtt_progress = 0;

function showProgressModal(title, message) {

    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const progressBar_Madal = document.getElementById('progressBar_Madal');
    const closeButton = document.getElementById('closeButton');

    if (!alertModal) {
        alertModal = new bootstrap.Modal(document.getElementById('alertModal'));

        // تنظیم عنوان و پیام به صورت پویا
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        progressBar_Madal.style.width = `${mqtt_progress}%`;
        progressBar_Madal.textContent = `${mqtt_progress}%`;
        closeButton.disabled = false;

    }

    // نمایش مودال
    alertModal.show();

    closeButton.removeEventListener('click', closeModalHandler); // جلوگیری از چندین بار افزودن
    closeButton.addEventListener('click', closeModalHandler);

}

function closeModalHandler() {
    if (alertModal) alertModal.hide();
    buttonAction("mian_menu");
}

// تابعی برای کنترل مقدار progress
function updateProgress(value) {
    const progressBar_Madal = document.getElementById('progressBar_Madal');
    const modalMessage = document.getElementById('modalMessage');

    progressBar_Madal.style.width = `${value}%`;
    progressBar_Madal.textContent = `${value}%`;

    if (value >= 100) {
        modalMessage.textContent = "عملیات با موفقیت انجام شد!";

        // بستن خودکار مودال پس از تکمیل
        setTimeout(() => {
            if (alertModal) alertModal.hide();
        }, 500);
        if (alertModal) alertModal.hide();
    }
}

function updateProgress_change_color(value,color) {
    const progressBar_Madal = document.getElementById('progressBar_Madal');

    progressBar_Madal.style.width = `${value}%`;
    progressBar_Madal.textContent = `${value}%`;

    if( color == "yellow"){
        progressBar_Madal.className = "progress-bar progress-bar-striped progress-bar-animated bg-waning"
    }

    if( color == "green"){
        progressBar_Madal.className = "progress-bar progress-bar-striped progress-bar-animated bg-success"
    }

    console.log("sdsdsd")


}


// نمایش مودال و آغاز فرآیند پیشرفت
/*
document.addEventListener('DOMContentLoaded', () => {
    showProgressModal('در حال پردازش...', 'لطفاً منتظر بمانید.');
    //simulateProgress(); // شبیه‌سازی افزایش پیشرفت
});*/


function pro() {

    // prog+=10;
    // updateProgress(prog)

}

setInterval(pro, 2000);


function show_addrress(pathArray) {
    const breadcrumb = document.getElementById('addrress');
    breadcrumb.innerHTML = "";

    pathArray.forEach((part, index) => {
        // تبدیل _ به فاصله و گرفتن فقط بخش بعد از $
        const cleanPart = part.split('$').pop().replaceAll('_', ' ');
        const isLast = index === pathArray.length - 1;

        // شرط برای نمایش آخرین بخش در حالت Active
        breadcrumb.innerHTML += isLast
            ? `<li class="breadcrumb-item active" aria-current="page">${cleanPart}</li>`
            : `<li class="breadcrumb-item"><a href="#" onclick="button_GOTO('${part}')">${cleanPart}</a></li>`;
    });
}


var Mqtt_alertModal;
function showMqtt_modal() {

    const mqtt_closeButton = document.getElementById('mqtt_closeButton');

    if (!Mqtt_alertModal) {
        Mqtt_alertModal = new bootstrap.Modal(document.getElementById('mqtt_alertModal'));

        // تنظیم عنوان و پیام به صورت پویا
        mqtt_closeButton.disabled = false;

    }

    // نمایش مودال
    Mqtt_alertModal.show();

    mqtt_closeButton.removeEventListener('click', close_mqtt_alert_Handler); // جلوگیری از چندین بار افزودن
    mqtt_closeButton.addEventListener('click', close_mqtt_alert_Handler);

}

function close_mqtt_alert_Handler() {

    window.location.assign("/GSM_RAVIS/main/home.php");

}



function Create_Multy_Xsatage_SELECT(Data) {

    const multySlectContainer = document.getElementById("multySlectContainer");

    // ایجاد `div` برای قرار دادن `label` و `tablr`
    const div = document.createElement("div");
    div.className = "mb-3";
    div.id = "div_MultySelect"


    const  div_register_name = document.getElementById("register_name")

// ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicInput");
    label.className = "form-label fs-5 fw-semibold text-dark";
    label.textContent = Data[1].split('$').pop().replaceAll('_', ' ');
    div_register_name.appendChild(label)

    // ایجاد عنصر <table>
    const table = document.createElement("table");
    table.id = "dynamicTable"; // تنظیم شناسه برای حذف بعدی
    table.className = "table table-bordered table-striped text-center";


    // ایجاد <thead>
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    thead.innerHTML = `
                <tr>
                    <th>SP</th>
                    <th>V0</th>
                    <th>V1</th>
                    <th>V2</th>
                </tr>
            `;
    table.appendChild(thead);

    // ایجاد <tbody>
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let html = "";

    for (let cols = 0; cols < arrays_list[Data[2]].length; cols++) {
        html += `<tr>
                <td>
                    <button class="btn btn-primary">${arrays_list[Data[2]][cols]}</button>
                </td>`;

        for (let rows_stage = 0; rows_stage < Data[0].stage; rows_stage++) {
            html += `<td>
                    <select id="${Data[1]}${rows_stage}_${cols}" class="form-select" >
                        ${arrays_list[Data[3]].map((option, index2) => `
                            <option value="${index2}">${option}</option>`).join("")}
                    </select>

                </td>`;
        }

        html += `</tr>`;
    }

    // تابع تغییر رنگ برای تغییر رنگ در حالت بسته


    tbody.innerHTML = html;

    div.appendChild(table);

    // اضافه کردن جدول به صفحه
    multySlectContainer.appendChild(div);

    createBTN_save_read();

}

// تابع تغییر رنگ
function changeColor(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    if (selectedOption === "1" || selectedOption === "NO") {
        selectElement.style.color = 'green';
        selectElement.style.fontWeight = 'bold';
        selectElement.style.backgroundColor = '#eaf4da'; // پس‌زمینه خاکستری
    } else  if (selectedOption === "NC") {
        selectElement.style.color = '';
        selectElement.style.fontWeight = 'bold';
        selectElement.style.backgroundColor = '#f6c9c9'; // پس‌زمینه خاکستری
    }else {
        selectElement.style.color = '';     // بازگشت به رنگ پیش‌فرض
        selectElement.style.fontWeight = ''; // بازگشت به وزن فونت پیش‌فرضپ
        selectElement.style.backgroundColor = ''; // پس‌زمینه خاکستری
    }

}

// بررسی مقدار پیش‌فرض در زمان بارگذاری صفحه
window.onload = function() {
    document.querySelectorAll('select').forEach(selectElement => {
        changeColor(selectElement); // بررسی مقدار پیش‌فرض

        // مدیریت تغییر رنگ در زمان تغییر توسط کاربر
        selectElement.addEventListener('change', () => changeColor(selectElement));
    });

    // 🚨 Interval Polling برای نظارت بر تغییر مقدار توسط توابع دیگر
    setInterval(() => {
        document.querySelectorAll('select').forEach(selectElement => {
            const previousValue = selectElement.getAttribute('data-prev-value');
            const currentValue = selectElement.value;

            if (previousValue !== currentValue) {
                changeColor(selectElement); // تغییر رنگ در صورت تغییر مقدار
                selectElement.setAttribute('data-prev-value', currentValue); // بروزرسانی مقدار قبلی
            }
        });
    }, 500); // بازبینی در هر 500 میلی‌ثانیه
};




function Create_Multy_Xsatage_INPUT(Data) {

    let btn = document.getElementById("div_BTN_save_read");
    if (btn) {
        btn.remove(); // حذف جدول
    }
    let deL_table = document.getElementById("dynamicTable");
    if (deL_table) {
        deL_table.remove(); // حذف جدول
    }

    let register_name = document.getElementById("register_name");
    register_name.innerHTML=""

    const multySlectContainer = document.getElementById("multySlectContainer");

    // ایجاد `div` برای قرار دادن `label` و `tablr`
    const div = document.createElement("div");
    div.className = "mb-3";
    div.id = "div_MultySelect"


    const  div_register_name = document.getElementById("register_name")

// ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicInput");
    label.className = "form-label fs-5 fw-semibold text-dark";
    label.textContent = Data[1].split('$').pop().replaceAll('_', ' ');
    div_register_name.appendChild(label)

    // ایجاد عنصر <table>
    const table = document.createElement("table");
    table.id = "dynamicTable"; // تنظیم شناسه برای حذف بعدی
    table.className = "table table-bordered table-striped text-center";


    // ایجاد <thead>
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    thead.innerHTML = `
                <tr>
                    <th>FLR</th>
                    <th>UP</th>
                    <th>DN</th>
                </tr>
            `;
    table.appendChild(thead);

    // ایجاد <tbody>
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let html = "";

    for (let cols = 0; cols < Data[0].pre_data; cols++) {

        let tr = document.createElement("tr");

        let td = document.createElement("td");
        const button = document.createElement("button");
        button.innerHTML = cols
        button.className = `btn btn-warning`;
        button.disabled = true;
        td.appendChild(button)
        tr.appendChild(td)

        for (let rows_stage = 0; rows_stage < Data[0].stage; rows_stage++) {

            let td = document.createElement("td");

            const inputElement = document.createElement("input");
            inputElement.type = "number";
            inputElement.id = Data[1]+rows_stage+"_"+cols;
            inputElement.className = "form-control text_center";
            inputElement.placeholder = Data[3];
            inputElement.value = Number(Data[3])
            inputElement.style.textAlign = 'center';
            inputElement.max = Data[0].max;
            inputElement.min = Data[0].min;
            inputElement.step = Data[0].step;

            td.appendChild(inputElement);
            tr.appendChild(td)

            function roundToStep(value, step, min) {
                return +(Math.round((value - min) / step) * step + min).toFixed(2);
            }

            inputElement.addEventListener('change', function () {
                let value = parseFloat(inputElement.value);

                if (value > parseFloat(inputElement.max)) {
                    alert(`مقدار ورودی نباید بیشتر از ${inputElement.max} باشد!`);
                    inputElement.value = inputElement.max;
                } else if (value < parseFloat(inputElement.min)) {
                    alert(`مقدار ورودی نباید کمتر از ${inputElement.min} باشد!`);
                    inputElement.value = inputElement.min;
                } else {
                    // اصلاح خودکار مقدار به نزدیک‌ترین step و محدود کردن اعشار
                    inputElement.value = roundToStep(value, parseFloat(inputElement.step), parseFloat(inputElement.min));
                }
            });

        }

        tbody.appendChild(tr)

    }

    div.appendChild(table);


    multySlectContainer.appendChild(div);

    createBTN_save_read();

}
