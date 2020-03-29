// JS

$(document).ready(function(){
    // Detect mobile browser (exclude tablets)
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //window.location = "https://play.google.com/store/apps/details?id=com.omarlatreche.aurum";
        $('label.switch > input').prop('checked', false);
        $('.footer').css('display','none');
    }
});
