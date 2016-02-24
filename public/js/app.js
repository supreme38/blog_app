window.onload = function() {
  // OSPRY SCRIPT FOR IMAGES
  var ospry = new Ospry('pk-test-mfmyvvhj3zhzgvb3xs85zqhp');

  var onUpload = function(err, metadata) {
    ospry.get({
      url: metadata.url,
      maxHeight: 800,
      maxWidth: 400,
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
        }, 1000);
        $('#editPost').addClass('off')
        $('.editMe').css('visibility', 'hidden');
    }
  });

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
        }, 1000);
        $('#deletePost').addClass('off')
        $('.deleteMe').css('visibility', 'hidden');
    }
  });

  $('#trending').hover(function(){
    $('#trending').addClass('animated pulse');
    setTimeout(function () {
      $('#trending').removeClass('animated pulse');
      }, 1000);
  });

  $('#logmeout').hover(function(){
    $('#logmeout').addClass('animated pulse');
    setTimeout(function () {
      $('#logmeout').removeClass('animated pulse');
      }, 1000);
  });

  $('#newPost').hover(function(){
    $('#newPost').addClass('animated pulse');
    setTimeout(function () {
      $('#newPost').removeClass('animated pulse');
      }, 1000);
  });

  $('#editPost').hover(function(){
    $('#editPost').addClass('animated pulse');
    setTimeout(function () {
      $('#editPost').removeClass('animated pulse');
      }, 1000);
  });

  $('#deletePost').hover(function(){
    $('#deletePost').addClass('animated pulse');
    setTimeout(function () {
      $('#deletePost').removeClass('animated pulse');
      }, 1000);
  });
};
