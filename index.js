function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    };
    const serviceID = "service_kxd6y8g";
    const templateID = "template_gsrfyvn";
    emailjs.send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById("name").value= "";
            document.getElementById("email").value= "";
            document.getElementById("message").value= "";
            document.getElementById("phone").value= "";
            console.log(res);
            alert("your message send successfully ");
        }
    )
    .catch((err) => console.log(err));
}