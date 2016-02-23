window.onload = function() {


  $('#createMenu').click(function() {

    if ($('#formContainer').hasClass('off')){

      $('#formContainer').css("visibility", "visible")
      $('#formContainer').addClass("animated slideInDown");
      setTimeout(function () {
      $('#formContainer').removeClass('animated slideInDown');
      }, 2000);
      $('#formContainer').removeClass('off')
    } else {
      $('#formContainer').css("visibility", "hidden")
      $('#formContainer').addClass("animated slideInUp");
      $('#formContainer').addClass('off');
      setTimeout(function () {
      $('#formContainer').removeClass('animated slideInUp');
      }, 2000);
    }




  });






};
