//checkbox отсутсвия отчества
function lackPatronymic(){
    var patronymic_none= document.getElementById('patronymic_none');
    var patronymic= document.getElementById("patronymic");
    var result = '';
    if (patronymic_none.checked){
        patronymic.style.display="none";
    }else if(patronymic.value.length > 3) {
        patronymic.style.display="block";
        result = "Отчество Введено корректно";
        console.log(patronymic.value);
        console.log(patronymic.value.length);
    }else if(patronymic.value.length <= 3){
        patronymic.style.display="block";
        result = "Введите корректное Отчество";
        console.log(patronymic.value);
    }
    document.getElementById('info').innerHTML = result;
    return false;
}
//selector типа соединения email/телефон
function typeConnection(){
    var connect = document.getElementById('connect').value;
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var result = '';
    console.log(connect);
    if (connect == "email"){
        email.style.display="block";
        phone.style.display="none";
        email.value="";
        console.log(connect);
    }else if (connect == "телефон"){
        phone.style.display="block";
        email.style.display="none";
        phone.value="";
        console.log(connect);
    }else if (connect == ""){
        phone.style.display="none";
        email.style.display="none";
        phone.value="";
        email.value="";
        console.log(connect);
    }
    document.getElementById('info').innerHTML = result;
    return false;
}
//запрос отправлен
function checkForm() {
    var surname = document.getElementById('surname').value;
    var name = document.getElementById('name').value;
    var patronymic = document.getElementById('patronymic');
    var patronymic_none = document.getElementById('patronymic_none');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var request = document.getElementById('request').value;
    var connect = document.getElementById('connect').value;
    var result = '';
    console.log(surname);
    console.log(connect);
    if (surname == "" || name == "" || request == ""){
        result = "Заполните все поля";
    }else if (surname.length <= 3 || surname.length > 20){
        result = "Введите корректную фамилию";
    }else if (name.length <= 3 || name.length > 20) {
        result = "Введите корректное имя";}
//checkbox отсутсвия отчества
    else if (patronymic_none.checked){
        patronymic.style.display="none";
        patronymic.value="";
    }else if(patronymic.value.length > 3) {
        patronymic.style.display="block";
        console.log(patronymic.value);
        console.log(patronymic.value.length);
    }else if(patronymic.value.length <= 3){
        patronymic.style.display="block";
        result = "Введите корректное отчество";
        console.log(patronymic.value);
    }

//Не срабатывает здесь   или select работает или checkbox????
    else if (connect == ""){
        result = "Выберите тип связи";
        phone.style.display="none";
        email.style.display="none";
        phone.value="";
        email.value="";
    }else if (connect == "email"){
        email.style.display="block";
        phone.style.display="none";
        phone.value="";
        console.log(email.value);
    }else if (connect == "телефон"){
        phone.style.display="block";
        email.style.display="none";
        phone.value="";
    }


    if (result != "") {
        document.getElementById('info').innerHTML = result;
    } else {
        alert("Запрос отправлен");
    }
    return false;
}




/*
//checkbox отсутсвия отчества
function lackPatronymic(){
    var patronymic_none= document.getElementById('patronymic_none');
    var patronymic= document.getElementById("patronymic");
    var result = '';
    if (patronymic_none.checked){
        patronymic.style.display="none";
        patronymic.value="";
    }else {
        patronymic.style.display="block";
        if(patronymic.value <= 1){
            result = "введите отчесто";
            document.getElementById('info').innerHTML = result;
        }else{
            return false;
        }
    }
}
//selector типа соединения email/телефон
function typeConnection(){
    var connect = document.getElementById('connect').value;
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    console.log(connect);
    if (connect == "email" ){
        email.style.display="block";
        phone.style.display="none";
    }else if (connect == "телефон"){
        phone.style.display="block";
        email.style.display="none";
    }else if (connect == ""){
        phone.style.display="none";
        email.style.display="none";
    }
    return false;
}
*/
/*
//запрос отправлен
function checkRequest(){
    var request= document.getElementById('request').value;
    console.log(request);
    if (request == ""){
        alert("Введите сообщение");
    }else {
       alert("Запрос отправлен");
    }
    return false;
}*/