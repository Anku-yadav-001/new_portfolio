var typed=new Typed(".text",{
    strings:["Aspiring Frontend Developer.","Problem Solver.","Hard Worker."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const from=document.querySelector('form');
let name=document.getElementById('name');
let email=document.getElementById('email');
let number=document.getElementById("phone");
let message=document.getElementById('messagesend');

function sendEmail(){
    let messagebody=`Full Name:     ${name.value} <br>
                     Mobile Number: ${number.value}<br>
                     Email Address: ${email.value}<br>
                     Message :      ${message.value} `
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "amany49751@gmail.com",
        Password : "FF172C23AF276A4BB0869C65D9E41A217CAD",
        To : 'amany49751@gmail.com',
        From : "amany49751@gmail.com",
        Subject : "Portfolio Contact Request",
        Body : messagebody
    }).then(
      message => {
            if(message=="OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
           
      }
    );
}

from.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendEmail();
    
})

