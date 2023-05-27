const error_msg=document.querySelector("#msg_required");
const box_email=document.querySelector("#email");
const stat_normal=document.querySelector(".normal_state");
const stat_succ=document.querySelector(".success_state");
const email_js= document.getElementById('email');

document.getElementById("submit").addEventListener('click', checkmail);

function checkmail(){
 
  var correct_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email_js.value.match(correct_mail))
  {
    error_msg.style.display="none";
    box_email.style.borderColor = "#9294A0"
    stat_normal.style.display="none";
    stat_succ.style.display="block";
  return true;
  }
  else
  {
  error_msg.style.display="block";
  box_email.style.borderColor = "#FF6257"
  return false;
  
  }

}
