
const config = {
    apiKey: "AIzaSyBG7mVHvH--av1JISyzM4Ws__XLlsNo50Q",
    authDomain: "conact-form-ead19.firebaseapp.com",
    databaseURL: "https://conact-form-ead19-default-rtdb.firebaseio.com",
    projectId: "conact-form-ead19",
    storageBucket: "conact-form-ead19.appspot.com",
    messagingSenderId: "577099153465",
    appId: "1:577099153465:web:ca32515d428700e7d94de8"
};

firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    saveMessage(name, email, subject, message);

    // document.querySelector('.alert').style.display = 'block';

    // setTimeout(function () {
    //     document.querySelector('.alert').style.display = 'none';
    // }, 3000);
    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Hide success message after 3 seconds
    setTimeout(function () {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);

    // Reset the form
    document.getElementById('contactForm').reset();

    // document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, subject, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}