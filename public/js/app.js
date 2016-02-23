window.onload = function() {
  // OSPRY SCRIPT FOR IMAGES
  var ospry = new Ospry('pk-test-mfmyvvhj3zhzgvb3xs85zqhp');

  var onUpload = function(err, metadata) {
    ospry.get({
      url: metadata.url,
      maxHeight: 400,
      imageReady: function(err, metadata) {
        // convert metadata (an object) into a string using .src
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
};
