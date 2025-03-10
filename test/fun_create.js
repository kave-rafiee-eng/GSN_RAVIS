
// تابع ایجاد جدول
function createTable( Names ) {

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
    table.className = "table table-bordered table-striped text-center";

    // ایجاد <thead>
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    thead.innerHTML = `
                <tr>
                    <th>ردیف</th>
                    <th>نام دکمه</th>
                    <th>عملیات</th>
                </tr>
            `;
    table.appendChild(thead);

    // ایجاد <tbody>
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    // ایجاد ردیف‌های جدول بر اساس آرایه
    Names.forEach((name, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${name}</td>
                    <td>
                        <button class="btn btn-primary" onclick="buttonAction('${name}')">${name}</button>
                    </td>
                `;
        tbody.appendChild(row);
    });

    // اضافه کردن جدول به صفحه
    tableContainer.appendChild(table);
}



function createInput( data ) {


    // دریافت محل اضافه کردن `input`
    const container = document.getElementById("inputContainer");

// ایجاد `div` برای قرار دادن `label` و `input`
    const div = document.createElement("div");
    div.id = "div_dynamicInput";
    div.className = "mb-3";

// ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicInput");
    label.className = "form-label";
    label.textContent = data[1];

// ایجاد `input`
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.id = data[1];
    inputElement.className = "form-control";
    inputElement.placeholder = data[2];


// اضافه کردن `label`، `input` و `button` به `div`
    div.appendChild(label);
    div.appendChild(inputElement);

// اضافه کردن `div` به صفحه
    container.appendChild(div);

    createBTN_save_read();
}


function createBTN_save_read( ) {

    // دریافت محل اضافه کردن `input`
    const container = document.getElementById("btn_save_read");

// ایجاد `div` برای قرار دادن `label` و `input`
    const div = document.createElement("div");
    div.id = "div_BTN_save_read";
    div.className = "mb-3";

// ایجاد `button`
    const button_save = document.createElement("button");
    button_save.className = "btn btn-primary mt-2";
    button_save.textContent = "Save";
    button_save.addEventListener('click', save );

    const button_read = document.createElement("button");
    button_read.className = "btn btn-success mt-2";
    button_read.textContent = "Read";
    button_read.addEventListener('click', read );

    div.appendChild(button_save);
    div.appendChild(button_read);

// اضافه کردن `div` به صفحه
    container.appendChild(div);

}





function createSelect( data ) {

    // دریافت محل اضافه کردن `select`
    const container = document.getElementById("selectContainer");

    // ایجاد `div` برای قرار دادن `label` و `select`
    const div = document.createElement("div");
    div.className = "mb-3";
    div.id = "div_dynamicSelect"

    // ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicSelect");
    label.className = "form-label";
    label.textContent = data[1];

    // ایجاد `select`
    const selectElement = document.createElement("select");
    selectElement.id = data[1];
    selectElement.className = "form-select";

    // اضافه کردن گزینه‌های آرایه به `select`
    arrays_list[data[2]].forEach((optionText, index) => {
        let option = document.createElement("option"); // ایجاد `<option>`
        option.value = index ; // مقدار `value`
        option.textContent = optionText; // متن نمایش داده‌شده
        selectElement.appendChild(option); // اضافه کردن گزینه به `select`
    });

    // اضافه کردن `label` و `select` به `div`
    div.appendChild(label);
    div.appendChild(selectElement);

// اضافه کردن `div` به صفحه
    container.appendChild(div);

    createBTN_save_read();

}



function createMultySelect( Data ) {

    const tableContainer = document.getElementById("tableContainer");

    // ایجاد `div` برای قرار دادن `label` و `tablr`
    const div = document.createElement("div");
    div.className = "mb-3";
    div.id = "div_MultySelect"

    // ایجاد `label`
    const label = document.createElement("label");
    label.setAttribute("for", "dynamicTable");
    label.className = "form-label";
    label.textContent = Data[1];


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

    div.appendChild(label);
    div.appendChild(table);

    // اضافه کردن جدول به صفحه
    tableContainer.appendChild(div);

    createBTN_save_read();

}


/*
document.getElementById("submitNumber").addEventListener("click", function() {
    // دریافت مقدار عددی وارد شده
    let userInput = document.getElementById("userInputNumber").value.trim();

    // دریافت عناصر مورد نیاز
    let errorMessage = document.getElementById("error-message");
    let progressBar = document.getElementById("progressBar");

    // بررسی مقدار ورودی
    if (userInput === "" || isNaN(userInput) || userInput < 0 || userInput > 100) {
        errorMessage.style.display = "block"; // نمایش پیام خطا
        return;
    }

    // مقداردهی عددی صحیح
    let numericValue = parseFloat(userInput);

    // بروزرسانی `progress bar`
    progressBar.style.width = numericValue + "%";
    progressBar.setAttribute("aria-valuenow", numericValue);
    progressBar.innerText = numericValue + "%"; // نمایش مقدار درون progress bar

    // بستن پیام خطا در صورت ورود مقدار معتبر
    errorMessage.style.display = "none";

    // نمایش مقدار دریافت شده
    alert("مقدار وارد شده: " + numericValue);

    // بستن مودال به‌صورت صحیح
    let modalElement = document.getElementById('numberInputModal');
    let modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }

    // استفاده از مقدار عددی (مثلاً ارسال به سرور یا پردازش بیشتر)
    console.log("عدد دریافت شده:", numericValue);
});
*/


let alertModal; // متغیر به صورت گلوبال تعریف می‌شود
let mqtt_progress=10;
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
    }
}


// نمایش مودال و آغاز فرآیند پیشرفت
/*
document.addEventListener('DOMContentLoaded', () => {
    showProgressModal('در حال پردازش...', 'لطفاً منتظر بمانید.');
    //simulateProgress(); // شبیه‌سازی افزایش پیشرفت
});*/


function pro(){

   // prog+=10;
   // updateProgress(prog)

}
setInterval(pro, 2000);

