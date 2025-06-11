function ratings(x)
{
    let allratings=document.querySelectorAll(".bi-star-fill")
    switch(x.id)
    {
        case "star1":
            x.style.color="yellow"
            break;
        case "star2":
            for(var i=0;i<2;i++)
            allratings[i].style.color="yellow"
            break;
        case "star3":
            for(var i=0;i<3;i++)
            allratings[i].style.color="yellow"
            break;
        case "star4":
            for(var i=0;i<4;i++)
            allratings[i].style.color="yellow"
            break;
        case "star5":
            for(var i=0;i<5;i++)
            allratings[i].style.color="yellow"
    }
    turn_back();

}
function not_rating1()
{
    let allratings=document.querySelectorAll(".bi-star-fill")
    let ratingss=document.getElementById("ratingssss")
    allratings.forEach(function(item)
    {
    item.style.color="black"
    })
    ratingss.innerText=0+"/5";

}
function check_mail()
{
    let emails=document.getElementById("emails");
    let span1=document.getElementById("span1");
    let conditions=/\w+@\w+(\.com)/g
    if(emails.value=="")
    {
        emails.style.border="1px red solid";
        span1.innerHTML="không được để trống email";
        return false;
    }
    if(conditions.test(emails.value))
    {
        emails.style.border="1px black solid";
        span1.innerHTML="";
        return true;
    }
    else
    {
        emails.style.border="1px red solid";
        span1.innerHTML="email phải có ký tự @ và .com ở cuối!";
        return false;
    }
}
function check_name()
{
    let names=document.getElementById("names");
    let span2=document.getElementById("span2");
    let conditions=/^([A-Z][a-z]*)(\s[A-Z][a-z]*)*/g
    if(names.value=="")
    {
        names.style.border="1px red solid";
        span2.innerHTML="không được để trống tên";
        return false;
    }
    if(conditions.test(names.value))
    {
        names.style.border="1px black solid";
        span2.innerHTML="";
        return true;
    }
    else
    {
        names.style.border="1px red solid";
        span2.innerHTML="email phải có ký tự @ và .com ở cuối!";
        return false;
    }
}
let star=0;
function count_star(x)
{
    let ratingss=document.getElementById("ratingssss")
    switch(x.id)
    {
        case "star1":
            ratingss.innerText=1+"/5";
            star=1;
            break;
        case "star2":
            ratingss.innerText=2+"/5";
            star=2;
            break;
        case "star3":
            ratingss.innerText=3+"/5";
            star=3;
            break;
        case "star4":
            ratingss.innerText=4+"/5";
            star=4;
            break;
        case "star5":
            ratingss.innerText=5+"/5";
            star=5;
            break;
        default:
            ratingss.innerText=0+"/5";
            return 0;
    }
}
function not_rating()
{
    let allratings=document.querySelectorAll(".bi-star-fill")
    let ratingss=document.getElementById("ratingssss")
    allratings.forEach(function(item)
    {
        item.style.color="black"
    })
        switch(star)
        {
            case 1:
                {
                    allratings[0].style.color="yellow"
                    ratingss.innerText=1+"/5";
                    break;
                }
            case 2:
                {
                    for(var i=0;i<2;i++)
                    allratings[i].style.color="yellow"
                    ratingss.innerText=2+"/5";
                    break;
                }
            case 3:
                {
                    for(var i=0;i<3;i++)
                    allratings[i].style.color="yellow"
                    ratingss.innerText=3+"/5";
                    break;
                }
            case 4:
                {
                    for(var i=0;i<4;i++)
                    allratings[i].style.color="yellow"
                    ratingss.innerText=4+"/5";
                    break;
                }
            case 5:
                {
                    for(var i=0;i<5;i++)
                    allratings[i].style.color="yellow"
                    ratingss.innerText=5+"/5";
                }
            default:
                {
                    ratingss.innerText=0+"/5";
                }
        }
}
var count=0;
function submitted()
{
    let comments=document.getElementById("comments").value;
    let emails=document.getElementById("emails").value;
    let names=document.getElementById("names").value;
    let holder=document.getElementById("comment_holder");
    let countss=document.getElementById("countss");
    let dates=new Date();
    if(true)
    {
        var newDiv = "";

        // Construct the inner HTML content
        newDiv = 
            '<div class="row">' +
                '<div class="col-2"><img src="../img/home_image/avatar.png" style="width: 100px;"></div>' +
                '<div class="col-10">' +
                    '<h3>' + names + '</h3>' +
                    '<span><i>' + emails + '</i></span>' +
                    '<p>';
                    for(var i=0;i<star;i++)
                    {
                        newDiv+='<img src="../img/home_image/star.png" style="width: 40px;">';
                    }
                    newDiv+=
                    '</p>' +
                        '<p>' + comments + '</p>' + // Assuming holder is another element's content
                '</div>' +
            '</div>';
        // Append the new content to the 'holder' element
        holder.innerHTML+=newDiv;
    
        // Update the count
        count += 1;
        countss.innerHTML = '(' + count + ')';
    }
    returnback1();
    not_rating1();
    star=0;
}
function returnback1()
{
    document.getElementById("comments").value="";
    document.getElementById("emails").value="";
    document.getElementById("names").value="";
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