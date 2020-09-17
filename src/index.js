// Get the modal
var modal = document.getElementById('id01') = function () { 
location.href = "https://100trivia2ef60f26-2ef60f26-dev.auth.us-east-1.amazoncognito.com/login?client_id=3poh7o7k5v4a9561h8ft02rkaa&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://auth.100trivia.com/";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}