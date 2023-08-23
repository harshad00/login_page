console.log("hello");

  let btn1 = document.getElementById("btn")
  btn1.addEventListener("mouseover",btn_function);
  //! functon for mouseover:
function btn_function() {
    let username = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
     let uname = "Harshad"  //? user name 
     let pass1 = "1234";   //?  user password 
     let d1 = Math.round(Math.random()*300) 
     let d2 = Math.round(Math.random()*300) 
     let l =  document.getElementById("btn");
    if( username != uname || pass != pass1 ){
        document.getElementById("demo").innerHTML = "plss enter right password.";
        l.style.left=d1+ "px";
        l.style.top=d2 + "px";
        l.style.backgroundColor="red";
        l.style.color=" white"
    }
    else{
        document.getElementById("demo").innerHTML = pass;
        l.style.left="0px";
        l.style.right="0px";
        l.style.backgroundColor="green"; 
        document.getElementById("show_password").innerHTML= "";

    }
  }

//! for name or password show

let btn2 = document.getElementById("btn1");
btn2.addEventListener("click",btn_spass);
function btn_spass(){

 document.getElementById("show_password").innerHTML= "Name is Harshad or password is 1234";
 document.getElementById("show_password").style.color="red";

}
