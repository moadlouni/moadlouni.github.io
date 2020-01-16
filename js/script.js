$(document).ready(function(){
    $('.header').height($(window).height());

    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000

})

document.addEventListener('DOMContentLoaded', bindButtons);{

    function bindButtons(){

        document.getElementById('sendMessage').addEventListener('click', function(event){

            var req = new XMLHttpRequest();
            var payload = 'https://formspree.io/modullah@gmail.com';
        
            req.open("GET", payload, true);
            req.send(null);
        
            req.addEventListener('load', function() {
                if (req.status >= 200 && req.status < 400) {
                    var response = JSON.parse(req.responseText);
                    document.getElementById('cityResponse').textContent = response;
                    // document.getElementById('temperatureResponse').textContent = response.main.temp;
                    // document.getElementById('humidityResponse').textContent = response.main.humidity;
                } else {
                    console.log("Error in network request: " + req.statusText);
                }
            });
            event.preventDefault();
        });
    }
}






function linkedin(){
    
    var win = window.open("https://www.linkedin.com/in/mo-adlouni-6523242a", '_blank');
    win.focus();
    
    // location.href = "";
}

function resume(){

    var win = window.open("../Mo_Adlouni_Resume_2020.pdf", '_blank');
    win.focus();

}
