window.onload = function() {
  // OSPRY SCRIPT FOR IMAGES
  var ospry = new Ospry('pk-test-mfmyvvhj3zhzgvb3xs85zqhp');

  var onUpload = function(err, metadata) {
    ospry.get({
      url: metadata.url,
      maxHeight: 800,
      maxWidth: 500,
      imageReady: function(err, metadata) {
        // convert metadata (an object) into a string src link using .src
        var obj = metadata.src
        // console.log(obj);
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

  // Add animnations when clicked
  $('#homelink').hover(function(){
      $('#homelink').addClass('animated fadeIn');
      setTimeout(function () {
        $('#homelink').removeClass('animated fadeIn');
      }, 1000);
    });

  $('#wTlogout').hover(function(){
    $('#wTlogout').addClass('animated fadeIn');
    setTimeout(function () {
      $('#wTlogout').removeClass('animated fadeIn');
      }, 1000);
  });

  // Add animnations when clicked
  $('#newPost').click(function(){
      $('#postContainer').addClass('animated fadeIn');
      setTimeout(function () {
        $('#postContainer').removeClass('animated fadeIn');
      }, 1000);
      $('#postContainer').css('visibility', 'visible');
    });

  $('#cancel').click(function(){
    $('#postContainer').addClass('animated fadeOut');
    setTimeout(function () {
      $('#postContainer').removeClass('animated fadeOut');
      $('#postContainer').css('visibility', 'hidden');
      }, 1000);
  });

  // Add animnations when clicked
  $('#editPost').click(function(){
    if($('#editPost').hasClass('off')){
      $('.editMe').addClass('animated fadeIn');
        setTimeout(function () {
        $('.editMe').removeClass('animated fadeIn');
        }, 1000);
        $('.editMe').css('visibility', 'visible');
        $('#editPost').removeClass('off')
    } else {
        $('.editMe').addClass('animated fadeOut');
        setTimeout(function () {
        $('.editMe').removeClass('animated fadeOut');
        $('.editMe').css('visibility', 'hidden');
        }, 1000);
        $('#editPost').addClass('off')
    }
  });

  // Add animnations when clicked
  $('#deletePost').click(function(){
    if($('#deletePost').hasClass('off')){
      $('.deleteMe').addClass('animated fadeIn');
        setTimeout(function () {
        $('.deleteMe').removeClass('animated fadeIn');
        }, 1000);
        $('.deleteMe').css('visibility', 'visible');
        $('#deletePost').removeClass('off')
    } else {
        $('.deleteMe').addClass('animated fadeOut');
        setTimeout(function () {
        $('.deleteMe').removeClass('animated fadeOut');
        $('.deleteMe').css('visibility', 'hidden');
        }, 1000);
        $('#deletePost').addClass('off')
    }
  });

  // Add animnations when hover
  $('#trending').hover(function(){
    $('#trending').addClass('animated fadeIn');
    setTimeout(function () {
      $('#trending').removeClass('animated fadeIn');
      }, 1000);
  });

  // Add animnations when hover
  $('#logmeout').hover(function(){
    $('#logmeout').addClass('animated fadeIn');
    setTimeout(function () {
      $('#logmeout').removeClass('animated fadeIn');
      }, 1000);
  });

  // Add animnations when hover
  $('#newPost').hover(function(){
    $('#newPost').addClass('animated fadeIn');
    setTimeout(function () {
      $('#newPost').removeClass('animated fadeIn');
      }, 1000);
  });

  // Add animnations when hover
  $('#editPost').hover(function(){
    $('#editPost').addClass('animated fadeIn');
    setTimeout(function () {
      $('#editPost').removeClass('animated fadeIn');
      }, 1000);
  });

  // Add animnations when hover
  $('#deletePost').hover(function(){
    $('#deletePost').addClass('animated fadeIn');
    setTimeout(function () {
      $('#deletePost').removeClass('animated fadeIn');
      }, 1000);
  });
};
