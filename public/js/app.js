window.onload = function() {
  // OSPRY SCRIPT FOR IMAGES
  var ospry = new Ospry('pk-test-mfmyvvhj3zhzgvb3xs85zqhp');

  var onUpload = function(err, metadata) {
    ospry.get({
      url: metadata.url,
      maxHeight: 800,
      maxWidth: 500,
      imageReady: function(err, metadata) {
        // Convert metadata (an object) into a string src link using .src
        var obj = metadata.src
        $('.ospry').val(obj);
      },
    });
  };

  $('#up-form').submit(function(e) {
    e.preventDefault();
    ospry.up({
      form: this,
      imageReady: onUpload,
    });
  });

  // The following will add animations to certain divs or id when hovered
  // over or clicked. It will add the class which tiggers the animations
  // Then it will remove the class so the you can do it all over again

  // Animnations to HOME when hovered
  $('#homelink').hover(function(){
      $('#homelink').addClass('animated fadeIn');
      setTimeout(function () {
        $('#homelink').removeClass('animated fadeIn');
      }, 1000);
    });

  // Animations for LOGOUT when hovered
  $('#wTlogout').hover(function(){
    $('#wTlogout').addClass('animated fadeIn');
    setTimeout(function () {
      $('#wTlogout').removeClass('animated fadeIn');
      }, 1000);
  });

  // Animnations to NEW POST when clicked and changes its visibility
  $('#newPost').click(function(){
      $('#postContainer').addClass('animated fadeIn');
      setTimeout(function () {
        $('#postContainer').removeClass('animated fadeIn');
      }, 1000);
      $('#postContainer').css('visibility', 'visible');
    });

  // Animations to CANCEL when clicked and changes the visibility of the NEW POST div
  $('#cancel').click(function(){
    $('#postContainer').addClass('animated fadeOut');
    setTimeout(function () {
      $('#postContainer').removeClass('animated fadeOut');
      $('#postContainer').css('visibility', 'hidden');
      }, 1000);
  });

  // Animnations to EDIT POST when clicked and changes visibility
  $('#editPost').click(function(){
    if($('#editPost').hasClass('off')){
      $('.editMe').addClass('animated fadeIn');
        setTimeout(function () {
        $('.editMe').removeClass('animated fadeIn');
        }, 1000);
        $('.editMe').css('visibility', 'visible');
        $('#editPost').removeClass('off');
    } else {
        $('.editMe').addClass('animated fadeOut');
        setTimeout(function () {
          $('.editMe').removeClass('animated fadeOut');
          $('.editMe').css('visibility', 'hidden');
          }, 1000);
          $('#editPost').addClass('off');
    };
  });

  // Animnations to DELETE when clicked and changes visibility
  $('#deletePost').click(function(){
    if($('#deletePost').hasClass('off')){
      $('.deleteMe').addClass('animated fadeIn');
        setTimeout(function () {
        $('.deleteMe').removeClass('animated fadeIn');
        }, 1000);
        $('.deleteMe').css('visibility', 'visible');
        $('#deletePost').removeClass('off');
    } else {
      $('.deleteMe').addClass('animated fadeOut');
        setTimeout(function () {
          $('.deleteMe').removeClass('animated fadeOut');
          $('.deleteMe').css('visibility', 'hidden');
          }, 1000);
          $('#deletePost').addClass('off');
    };
  });

  // Animations to trending when hovered
  $('#trending').hover(function(){
    $('#trending').addClass('animated fadeIn');
    setTimeout(function () {
      $('#trending').removeClass('animated fadeIn');
      }, 1000);
  });

  // Animations to LOGOUT when hovered
  $('#logmeout').hover(function(){
    $('#logmeout').addClass('animated fadeIn');
    setTimeout(function () {
      $('#logmeout').removeClass('animated fadeIn');
      }, 1000);
  });

  // Animations to NEW POST when hovered
  $('#newPost').hover(function(){
    $('#newPost').addClass('animated fadeIn');
    setTimeout(function () {
      $('#newPost').removeClass('animated fadeIn');
      }, 1000);
  });

  // Animations to EDIT POST when hovered
  $('#editPost').hover(function(){
    $('#editPost').addClass('animated fadeIn');
    setTimeout(function () {
      $('#editPost').removeClass('animated fadeIn');
      }, 1000);
  });

  // Animations to DELETE post when hovered
  $('#deletePost').hover(function(){
    $('#deletePost').addClass('animated fadeIn');
    setTimeout(function () {
      $('#deletePost').removeClass('animated fadeIn');
      }, 1000);
  });

};
