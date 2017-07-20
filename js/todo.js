$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here




let formEvent = function (event) {
  let itemTxt = $('#item').val()
  let myLi = document.createElement("LI");
  myLi.innerText = itemTxt
  $('#list ol').append(myLi)
  event.preventDefault();
}

submitForm = function () {
  $('form').on('submit', submitForm);
}
