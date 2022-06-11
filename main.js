function mainClickSubmit(){
    if (
      checkTheEmail() &
      checkTheFirstName() &
      checkTheUserDate() &
      checkThePassword()
    ) {
      return true;
    }
    return false;
}

function checkTheEmail(){
    var mailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (mailRegex.test(mail_put.value)) {
        return true
      }
      mail_label.innerHtml = "<span>Try again </span>";
      mail_label.style.color = "red";
}

function checkTheFirstName(){
    var firstName = /^[a-zA-Z]{10}$/
    if (firstName.test(name_put.value)) {
      return true;
    }
    fName_label.innerHtml = "<span> Try again </span>";
    fName_label.style.color = "red";
} 

function checkPhone(){
    var phoneRegex = /^\d{10}/;
    if(phoneRegex.test(cell_put.value)){
        return true;
    }
    cell_label.innerHtml = "<span> try again</span>";
    cell_label.style.color = "red";
}
// --------------------------------NOT FINISH---------------------------------
function checkTheLastName(){
    var lastNameRegex;
    if (lastNameRegex.test(lName_put.value)) {
      return true;
    }
lName_label.innerHtml = "<span> Try again </span>";
lName_label.style.color = "red";
}

function checkTheUserDate(){
    var dateRegex;
    if(dateRegex.test(date_put.value)){
        return true;
    }
    date_label.innerHtml = "<span> try again </span>";
    date_label.style.color = "red";
}

function checkThePassword(){
    var passRegex;
    if(passRegex.test(date_put.value)){
        return true;
    }
    date_label.innerHtml = "<span> try again </span>";
    date_label.style.color = "red";
}



