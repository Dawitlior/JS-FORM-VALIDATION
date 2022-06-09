function mainClickSubmit(){
    if(true){
        return true
    }
    return false;
}


function checkTheEmail(){
    var mailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(true){

      }
      return;
}

function checkTheFirstName(){
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
    cell_label.innerHtml = "<span>             </span>";
}



