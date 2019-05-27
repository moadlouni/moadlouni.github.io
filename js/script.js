$(document).ready(function(){
    $('.header').height($(window).height());

    /*window.onload = function aboutImage() {
        if (window.location.href.indexOf('about.html') > -1){
            document.body.style.backgroundImage = "url('../images/coffee_berries.jpg')";
        }
    } */

    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000

})


function linkedin(){
    
    var win = window.open("https://www.linkedin.com/in/mo-adlouni-6523242a", '_blank');
    win.focus();
    
    // location.href = "";
}

function resume(){

    var win = window.open("../Mo_Adlouni_Resume.pdf", '_blank');
    win.focus();

}
