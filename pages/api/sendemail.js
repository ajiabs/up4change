var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('service_gj25ey7', 'template_ojowf4j', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    emailjs.sendForm('service_gj25ey7', 'template_ojowf4j', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    // code fragment
var data = {
    service_id: 'service_gj25ey7',
    template_id: 'template_ojowf4j',
    user_id: 'H-OUv6evnaVb1Oqlz',
    template_params: {
        'username': 'James',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
// code fragment

// code fragment
// the form id is myForm
$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_gj25ey7');
    formData.append('template_id', 'template_ojowf4j');
    formData.append('user_id', 'H-OUv6evnaVb1Oqlz');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});
// code fragment