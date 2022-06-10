function mainClickSubmit(){
    if(true){
        return true
    }
    return false;
}


function checkTheEmail(){
    var mailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (mailRegex.test (mail_put.value)) {
        return true
      }
      mail_label.innerHtml = "<span> Try again </span>";
      mail_label.style.color = "red";
}

function checkTheFirstName(){
    var firstName = 
    if(true){
        return true;
    }
    fName_label.innerHtml = "";
} 


function checkPhone(){
    var phoneRegex = /^\d{10}/;
    if(phoneRegex.test(cell_put.value)){
        return true;
    }
    cell_label.innerHtml = "<span> try again</span>";
    cell_label.style.color = "red";
}



