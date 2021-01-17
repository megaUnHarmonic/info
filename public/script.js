function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$('#registration').submit(function() {
  // DO STUFF...
  let flag = 0
  if (!$("#fname").val()) {
    $("#namemsg").text("fill this item")
    flag = 1
  } else {
    $("#namemsg").text("")
  }
  if (!$("#address").val()) {
    $("#addressmsg").text("fill this item")
    flag = 1
  } else {
    $("#addressmsg").text("")
  }
  if (!$("#Email").val()) {
    $("#emailmsg").text("fill this item")
    flag = 1
  } 
  if ($("#Email").val()) {
    if (!validateEmail($("#Email").val())){
      $("#emailmsg").text("enter a valid email")
      flag = 1
    } else {
      $("#emailmsg").text("")
    }
  }
  if (flag === 1) {
    flag = 0
    return false
  }
  return true; // return false to cancel form action
});