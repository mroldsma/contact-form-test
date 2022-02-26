function sendEmail(){

    Email.send({
        SecureToken : "380ffaaa-04bb-40c8-8048-0cd4fcd6bbdf",
        To : 'mroldsma@gmail.com',
        From : document.getElementById('email').value,
        Subject : "NUEVO MAIL !!!",
        Body : `nombre: ${document.getElementById('name')} --- 
                mail: ${document.getElementById('email')} --- 
                telefono: ${document.getElementById('phone')} --- 
                mensaje: ${document.getElementById('message')}`
    }).then(
        message => alert(message)
        );

    }