
$(document).ready(function() {


// GENERAL

$(document).ready(function(){

  $('body').on('scroll', function(){
    console.log('hello');
  })


  if(!$('html').hasClass('mobile')){

    $(document).on('mousemove', function(e){

      var contrast_oneraw = parseInt(100 - Math.round((e.pageY + 0.1) / ($(window).height()) * 100));
      var contrast_one = '"KIKI"' + contrast_oneraw;

      $('#contrast_onecount').text(contrast_oneraw + '%');
      $('#contrast_twocount').text(100-contrast_oneraw + '%');
      $('#slantcount').text(contrast_oneraw + '%');
      $('#contrast_twocount').text(100-contrast_oneraw + '%');

      if((e.pageX <= $(window).width())){
        var backslantraw = parseInt(100 - Math.round((e.pageX + 0.1) / ($(window).width()) * 100));
        var backslant = '"CONT"' + backslantraw + ',';
        var settings = backslant + contrast_one;
        $('.follower').css({'font-variation-settings': settings})
        $('#slantcount').text(100-backslantraw + '%');
        $('#backcount').text(backslantraw + '%');
      } else {
        var backslantraw = parseInt((100 - Math.round((e.pageX + 0.1) / ($(window).width()) * 100)) * -1);
        var backslant = '"CONT"' + backslantraw + ',';
        var settings = backslant + contrast_one;
        $('.follower').css({'font-variation-settings': settings})
        $('#slantcount').text(backslantraw + '%');
        $('#backcount').text(0 + '%');
      }
    });

  }

  if($('html').hasClass('mobile')){

    function ask() {
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('devicemotion', () => {});
            }
          })
          .catch(console.error);
      }
    }


      
$('body').mousemove(function(e){
if((e.pageX <= $(window).width()/2))
        $('body').css("cursor", "pointer");
    else
        $('body').css("cursor", "help");
});         
      
      
    function handleOrientation(event) {
      var y = event.beta;  // In degree in the range [-180,180]
      var x = event.gamma; // In degree in the range [-90,90]

      var yy = Math.round(y);
      var xx = Math.round(x);

      // console.log(xx);

      if( x > 0 && x < 30 ){
        var xx = parseInt(0 + ((x / 30) * 100));
      } else if ( x > 30 && x < 90 ){
        var xx = 100;
      } else if ( x > -30 && x < 0 ){
        var xx = parseInt((x / 30) * 100);
      } else if ( x < -30 && x > -180 ){
        var xx = parseInt((x / 30) * 100);
        var xx = -100;
      } else {
        var xx = 0;
      }


      if( y > 0 && y < 40){
        var yy = parseInt(100 - ((y / 40) * 50));
      } else if ( (y < 0 && y > -180 ) || (y == 0)){
        var yy = 100;
      } else if ( y > 40 && y < 80){
        var yy = parseInt(100 + (((y / 40) * 50) * -1));
      } else if ((y > 80 && y < 180 ) || (y == 80)){
        var yy = 0;
      } else{
        var yy = 100;
      }

      $('.content').css({
          fontVariationSettings: '"KIKI"' + yy + ', "CONT"' + xx
      });
    };
  }

});

  // contenteditable text
  $('.contenteditable').each(function() {
    var ce_text = $(this).data('reset');
    // alert(ce_text);

    $(this).html(ce_text);
  });




  // invert color
  $('.btn-invert').on('click', function() {
    $('html').toggleClass('invert');
  });





// SECTION.COVER

  // desktop cover
  $(document).on("mousemove", function(event) {

    $('.cover-desktop-note-x, .cover-desktop-note-y').css('animation');

    $('.mainheading').addClass('mainheading--desktop');

    // track cursor position on viewport in percent
    xPercent = event.pageX / $( 'section.cover' ).width() * 100;
    yPercent = event.pageY / $( 'section.cover' ).height() * 100;

    // remove decimals
    xPercentFixed = xPercent.toFixed();
    yPercentFixed = yPercent.toFixed();

    // translate viewport position to font axes
    // x to width / 400â€“600 / spanne 200, start bei 400
    // y to weight / 60â€“100 / spanne 40, start bei 60

    xWidth = 100 + xPercentFixed*10;
    yWeight = 100 + yPercentFixed*10;

    // change font axes
    $(".mainheading--desktop").css(
      "font-variation-settings",
      " 'KIKI' " + xWidth +", 'CONT' " + yWeight + ""
    );
  });

});



