

function submit(){
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let clubs = document.getElementById("clubs").value;
  let balls = document.getElementById("balls").value;
  let tees = document.getElementById("tees").value;
  let isValid = false;

  if(document.getElementById("shipping1").checked){
    shipping = document.getElementById("shipping1").value;
  }
  if(document.getElementById("shipping2").checked){
    shipping = document.getElementById("shipping2").value;
  }
  if(document.getElementById("shipping3").checked){
    shipping = document.getElementById("shipping3").value;
  }

  if(clubs <= 0){
    window.alert("please input a number of golf clubs that is 0 or greater");
  }
  else if(balls <= 0){
    window.alert("please input a number of golf balls that is 0 or greater");
  }
  else if(tees <= 0){
    window.alert("please input a number of golf balls that is 0 or greater");
  }
  else if(password.length <= 1){
    window.alert("please input a valid password");
  }
  else if(shipping != 1 && shipping != 3 && shipping != 7 ){
    window.alert("please select a shipping option")
  }
  else if(!(checkEmail(username))){
    window.alert("please input a valid username in the form of an email")
  }
  else{
    return (!isValid);
  }
  return isValid;
}
function refresh(){
  location.reload();
}

function checkEmail(email){
    if(email.length = 0){
      return false;
    }
    let isValid = false;
    for(let i = 0; i < email.length; i++){
      if(email[i] == '@'){
        isValid = true;
      }
    }
    return isValid
}
