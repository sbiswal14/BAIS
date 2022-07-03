function showMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right="0";
}
function hideMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right="-110px";
}
function register(){
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");   
    var Indicator = document.getElementById("Indicator"); 
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(150px)";
}
function login(){
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");   
    var Indicator = document.getElementById("Indicator"); 
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(280px)";
    Indicator.style.transform = "translateX(25px)";
}
function validate_login(){
    var luname=document.getElementById("l_uname").value;
    var lpass=document.getElementById("l_pass").value;
    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var alphanums = /^[A-Za-z]+[0-9]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(luname === '' | luname == null){alert('Enter user name');}
    else if(!alphanums.test(luname)){alert('User name field required only alphabets and digits');}
    else if(lpass === '' | lpass == null){alert('Eneter password');}
    else if(!pwd_expression.test(lpass)){alert ('Minimun 1 upper case, 1 lower case, 1 special character and 1 Numeric are required in Password');}
    else if(lpass.length < 8){alert ('Password minimum length is 8');}
    else if(lpass.length > 12){alert ('Password maximum length is 12');}
    else{window.location.reload();alert('Login Successful!!!');}
}

function validate_registration(){
    var form=document.getElementById('RegForm');
    var rname=document.getElementById("r_name").value;
    const runame=document.getElementById("r_uname").value;
    const ruemail=document.getElementById("r_email").value;
    const rupass=document.getElementById("r_pass").value;
    const rupass1=document.getElementById("r_pass_1").value;

    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+/;
    var alphanums = /^[A-Za-z]+[0-9]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(rname === '' | rname == null){alert('Please enter full Name');}
    else if(!letters.test(rname)){alert('Only letters allowed'); setErrorFor();}
    else if(ruemail === '' | ruemail == null){alert('Please enter your user email id');}
    else if (!filter.test(ruemail)) {alert('Invalid email');}
    else if(runame === '' | runame == null){alert('Please enter the user name.');}
    else if(!alphanums.test(runame)){alert('User name field required only alphabets and digits');}
    else if(rupass === '' | rupass == null){alert('Please enter Password');}
    else if(rupass1 === '' | rupass1 == null){alert('Enter Password to confirm');}
    else if(!pwd_expression.test(rupass)){alert ('Minimun 1 upper case, 1 lower case, 1 special character and 1 Numeric are required in Password');}
    else if(rupass != rupass1){alert ('Passwords do not match');}
    else if(rupass.length < 8){alert ('Password minimum length is 8');}
    else if(rupass.length > 12){alert ('Password maximum length is 12');}
    else{window.location.reload();alert('Thank You for Registration!!!');}
}
 function message_post(){
    window.location.reload();
    alert('Your comment is sent. Thanks for your valuable feedback.');
 }
 function contact_us(){
    window.location.reload();
    alert('Your message is sent. Thanks for contacting us. We will contact you soon.');
 }
/*
        let messages = []
        e.preventDefault();
        if(rname.value ==='' | rname.value == null){
            messages.push('Name cannot be blank');
            setErrorFor();
        }
        else{
            setSuccessFor();
        }
    
        if(!letters.test(rname.value)){
            messages.push('Name field required only alphabet characters');
            setErrorFor();
        }
        else{
            setSuccessFor();
        }
        if (messages.length > 0){
            e.preventDefault();
            errorElement.innerText = messages.join(', ')
        }
}   
*/
function setErrorFor(){
    formControl.className = 'form-control-error';
}
function setSuccessFor(){
    formControl.className = 'form-control-success';
} 

