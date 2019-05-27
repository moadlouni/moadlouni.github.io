$(document).ready(function(){
    $('.header').height($(window).height());

    /*window.onload = function aboutImage() {
        if (window.location.href.indexOf('about.html') > -1){
            document.body.style.backgroundImage = "url('../images/coffee_berries.jpg')";
        }
    } */
    // $('.send').click(function (event){
    //     event.preventDefault()

    //     var name = $('name').val()
    //     var email = $('email').val()
    //     var message = $('message').val()
    //     varStatusElm = $


    
    // })

    //     var name = document.getElementsByClassName("form-group")[0].id;
    //     document.getElementById("name").innerText = name;

    //     var email = document.getElementsByClassName("form-group")[1].id;
    //     document.getElementById("email").innerHTML = x;
        
    //     var x = document.getElementsByClassName("form-group")[0].id;
    //     document.getElementById("name").innerHTML = x;

    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000

})

// $(function() {
//     // Get the form.
//     var form = $('#ajax-contact');

//     // Get the messages div.
//     var formMessages = $('#form-messages');

//     // Set up an event listener for the contact form.
//     $(form).submit(function(event) {
//         // Stop the browser from submitting the form.
//         event.preventDefault();

//             // Serialize the form data.
//         var formData = $(form).serialize();
//         // Submit the form using AJAX.
//         $.ajax({
//             type: 'POST',
//             url: $(form).attr('action'),
//             data: formData
//         })

//         .done(function(response) {
//             // Make sure that the formMessages div has the 'success' class.
//             $(formMessages).removeClass('error');
//             $(formMessages).addClass('success');
        
//             // Set the message text.
//             $(formMessages).text(response);
        
//             // Clear the form.
//             $('#name').val('');
//             $('#email').val('');
//             $('#message').val('');
//         })

//         .fail(function(data) {
//             // Make sure that the formMessages div has the 'error' class.
//             $(formMessages).removeClass('success');
//             $(formMessages).addClass('error');
        
//             // Set the message text.
//             if (data.responseText !== '') {
//                 $(formMessages).text(data.responseText);
//             } else {
//                 $(formMessages).text('Oops! An error occured and your message could not be sent.');
//             }
//         });
//     });
// });
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

    var win = window.open("../Mo_Adlouni_Resume.pdf", '_blank');
    win.focus();

}
