function frontPageInit(){
  console.log("rawr");

  $('.front-widgets #searchform input[type="text"]').attr('placeholder', "Type here to begin searching all posts...");
}

$(document).ready(function(){
  frontPageInit();
});