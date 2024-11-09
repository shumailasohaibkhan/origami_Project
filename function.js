function btn_sub(){


var name =document.getElementById("name").value
var mail =document.getElementById("email").value
var msg =document.getElementById("msg").value
if(name.length >0){
    if(mail.length > 3){
        if(msg.length > 5){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Message Has Been Send",
                showConfirmButton: false,
                timer: 1500
              });;
             

        }else{
            alert("enter A Valid mail msg")
        }
       
    }else{
        alert("enter A Valid mail pls")
    }

}else{
    alert("enter your name pls")
}

}