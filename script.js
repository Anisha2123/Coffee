var mysearch=document.getElementById("search");
var mycart=document.getElementById("cart");
var box1=document.getElementById("box1");
var box2=document.getElementById("box2");
var box3=document.getElementById("box3");
var box4=document.getElementById("box4");
var link1=document.getElementById("right_box");
var x = window.matchMedia("(max-width: 858px)");
function mySearch(){
    if(mysearch.style.display==="none"){
        mysearch.style.display="block";
    }
    else{
        mysearch.style.display="none";
    }
}
function myCart(){
     if(mycart.style.display==="none"){
        mycart.style.display="block";
     }
     else
     mycart.style.display="none";
}
function cross1(){
    if(box1.style.display==="flex")
    {
        box1.style.display="none";
    }
    else
    box1.style.display="flex";
}
function cross2(){
    if(box2.style.display==="flex")
    {
        box2.style.display="none";
    }
    else
    box2.style.display="flex";
}
function cross3(){
    if(box3.style.display==="flex")
    {
        box3.style.display="none";
    }
    else
    box3.style.display="flex";
}
function cross4(){
    if(box4.style.display==="flex")
    {
        box4.style.display="none";
    }
    else
    box4.style.display="flex";
}
function link(){
    if(link1.style.height==="15rem")
    {
        link1.style.height="30rem";
    }
}

function sendEmail (){
var name=$(`name`).val();
var email=$(`email`).val();
var number=$(`number`).val();

}
var Body='Name: '+name+'<br>Email: '+email+'<br>Number: '+number;
Email.send({
    Host : "smtp.gmail.com",
    Username : "birlaani@gmail.com",
    Password : "Anisha1@birla",
    To : '21051630@kiit.ac.in ',
    From : "birlaani@gmail.com",
    Subject : "New mail On contact from:"+name,
    Body : Body
}).then(
  message => alert(message)
  
);