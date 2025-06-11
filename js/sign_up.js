function check_name()
{
    let condition=/^[A-Z][a-z]*(\s[A-Z][a-z]*)*/g
    let name=document.getElementById("name");
    let span1=document.getElementById("span1");
    if(name.value=="")
    {
        name.style.border="1px red solid"
        span1.innerHTML="Tên không được rỗng";
        return false;
    }
    if(condition.test(name.value))
    {
        name.style.border="none"
        span1.innerHTML="";
        return true;
    }
    else{
        name.style.border="1px red solid"
        span1.innerHTML="Tên phải viết hoa chữ cái đầu!";
        return false;
    }
}
function check_email()
{
    let condition=/[\w]+@[\w]+(.com)$/g
    let email=document.getElementById("email");
    let span2=document.getElementById("span2");
    if(email.value=="")
    {
        email.style.border="1px red solid"
        span2.innerHTML="Email không được rỗng";
        return false;
    }
    if(condition.test(email.value))
    {
        email.style.border="none"
        span2.innerHTML="";
        return true;
    }
    else{
        email.style.border="1px red solid"
        span2.innerHTML="Email phải có @ và kết thúc là .com!";
        return false;
    }
}
function check_tdn()
{
    let condition=/[\w]+\d+/g
    let id_name=document.getElementById("id_name");
    let span3=document.getElementById("span3");
    if(id_name.value=="")
    {
        id_name.style.border="1px red solid"
        span3.innerHTML="Tên đăng nhập không được rỗng";
        return false;
    }
    if(condition.test(id_name.value))
    {
        id_name.style.border="none"
        span3.innerHTML="";
        return true;
    }
    else{
        id_name.style.border="1px red solid"
        span3.innerHTML="Tên đăng nhập phải bao gồm chữ và số, vd:ngocthai3250";
        return false;
    }
}
function check_password()
{
    let condition=/(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])/g
    let passwords=document.getElementById("passwords");
    let span4=document.getElementById("span4");
    if(passwords.value=="")
    {
        passwords.style.border="1px red solid"
        span4.innerHTML="Mật khẩu không được rỗng";
        return false;
    }
    if(condition.test(passwords.value))
    {
        passwords.style.border="none"
        span4.innerHTML="";
        return true;
    }
    else{
        passwords.style.border="1px red solid"
        span4.innerHTML="Mật Khẩu phải bao gồm chữ hoa, chữ thường và số";
        return false;
    }
}
function check_confirm_pass()
{
    let passwords=document.getElementById("passwords");
    let confirmpass=document.getElementById("again_passwords");
    let span5=document.getElementById("span5");
    if(confirmpass.value=="")
    {
        confirmpass.style.border="1px red solid";
        span5.innerHTML="Mật khẩu xác nhận không được rỗng!";
        return false;
    }
    if(passwords.value==confirmpass.value)
    {
        confirmpass.style.border="none";
        span5.innerHTML="";
        return true;
    }
    else
    {
        confirmpass.style.border="1px red solid";
        span5.innerHTML="Mật khẩu xác nhận không trùng khớp!";
        return false;
    }
}
function sign_up()
{
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let id_name=document.getElementById("id_name");
    let passwords=document.getElementById("passwords");
    let confirmpass=document.getElementById("again_passwords");

    let var1= check_name();
    let var2= check_email();
    let var3= check_tdn();
    let var4= check_password();
    let var5= check_confirm_pass();
    if(var1 && var2 && var3 && var4 && var5)
    {
        alert("Đăng Ký Thành Công!");
        name.value="";
        email.value="";
        id_name.value="";
        passwords="";
        confirmpass="";
    }
}
function kiemtratk()
{
    let tk=document.getElementById("tdn");
    if(tk.value=="")
    {
        tk.style.border="1px red solid";
        return false;
    }
    else
    {
        tk.style.border="none";
        return true;
    }
        
    
}
function kiemtramk()
{
    let mk=document.getElementById("mk");
    if(mk.value=="")
    {
        mk.style.border="1px red solid";
        return false;
    }
    else
    {
        mk.style.border="none";
        return true;
    }
}
function dang_nhap()
{
    
    let var1=kiemtratk();
    let var2=kiemtramk();
    let modals=document.getElementById("mymodal1");
    if(var1 && var2)
    {
        $(modals).modal('hide');
        alert("Đăng Nhập Thành Công!");
        return true;
    }
    return false;
}