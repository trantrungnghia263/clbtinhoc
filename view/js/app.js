// check đăng nhập
function Login(e){
    event.preventDefault();
    var email=document.getElementById('email').value;
    var password=document.getElementById('pass').value;
    var capcha=document.getElementById('submit').value;
    var user=localStorage.getItem(email);
    var data=JSON.parse(user);
    if(email==""||password==""||capcha==""){
        if(document.getElementById('alert1').style.display=="none"){
            document.getElementById('alert1').style.display="block";
        }else{
            document.getElementById('alert1').style.display="none";
        }
        // alert("Bạn chưa nhập đủ dữ liệu !")
    }
    else if(password!=data.password){
        // if(document.getElementById('alert').style.display=="none"){
        //     document.getElementById('alert').style.display="block";
        // }else{
        //     document.getElementById('alert').style.display="none";
        // }
        alert("Mật khẩu không trùng khớp !")
    }
    else if(capcha!=captcha.innerHTML){
        var exit=document.querySelector('.error button');
        var macode=document.querySelector('.maCode');
        macode.classList.add('hides')
        exit.addEventListener('click',()=>{
            macode.classList.remove('hides')
        })
        // alert("Mã code không đúng !");
    }
    else if(email==data.email&&password==data.password&&capcha==captcha.innerHTML){
        // alert("Đăng nhập thành công ");
        // window.location='../home/main.html';
        // show thông báo
        var modal=document.querySelector('.check_mark');
        modal.classList.add('hide')
    }
    else{
        alert("Đăng nhập thất bại !");
    }
}
// function toggleModal(e){
//     macode.classList.remove('hides')
// }
// function Exit(){
//     macode.classList.remove('hides')
// }
// function again(){
//     Login()
// }
function LoginOK(){
    window.location='../home/main.html';
}
// check đăng ký
function SignUp(e){
    event.preventDefault();
    var email=document.getElementById('email').value;
    var password=document.getElementById('pass').value;
    var confirm_pass=document.getElementById('confirm_pass').value;
    var user={
        email:email,
        password:password,
        confirm_pass:confirm_pass,
    }
    var json=JSON.stringify(user);
    localStorage.setItem(email,json);
    if(email==""||password==""||confirm_pass==""){
        if(document.getElementById('alert1').style.display=="none"){
            document.getElementById('alert1').style.display="block";
        }else{
            document.getElementById('alert1').style.display="none";
        }
    }
    else if(password!=confirm_pass){
        if(document.getElementById('alert').style.display=="none"){
            document.getElementById('alert').style.display="block";
        }else{
            document.getElementById('alert').style.display="none";
        }
    }
    else{       
        // alert("Đăng ký thành công ");
        var modal=document.querySelector('.check_mark');
        modal.classList.add('hide')
        // window.location='../login/dangnhap.html';
    }
}
function SiginOK(){
    window.location='../login/dangnhap.html';
}
// capcha
var captcha;
function generate() {
    document.getElementById("submit").value = "";
    captcha = document.getElementById("image");
    var uniquechar = "";
    const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    captcha.innerHTML = uniquechar;
}
 
// function printmsg() {
//     const usr_input = document.getElementById("submit").value;
//     if (usr_input == captcha.innerHTML) {
//         var s = document.getElementById("key").innerHTML = "Matched";
//         generate();
//     }
//     else {
//         var s = document.getElementById("key")
//             .innerHTML = "not Matched";
//         generate();
//     }
// }

//Đóng alert
function closeAlert(){
    if(document.getElementById('alert1').style.display=="block" || document.getElementById('alert').style.display=="block"){
        document.getElementById('alert').style.display="none";
        document.getElementById('alert1').style.display="none";
    }else{
        document.getElementById('alert').style.display="none";
        document.getElementById('alert1').style.display="block";
    }
}

// template CSS
let anim=document.querySelectorAll('.item');
document.addEventListener('scroll',(event)=>{
    anim.forEach(item=>{
        if(item.offsetTop-window.screenY<350){
            item.classList.add('active');
        }
    })
})

// liên kết
function main(){
    window.location='../home/main.html';
}

function khoacntt(){
    window.location='https://khoacntt.uneti.edu.vn/';
}

function webuneti(){
    window.location='https://uneti.edu.vn/';
}

function weblib(){
    window.location='https://lib.uneti.edu.vn/';
}

function pageitc(){
    window.location='https://www.facebook.com/InformationTechnologyClub.uneti';
}

function daotao(){
    window.location='https://www.facebook.com/sinhvien.uneti.edu.vn';
}

// back-to-top
const toTop=document.querySelector(".back-to-top");
window.addEventListener("scroll",()=>
{
    if(window.pageYOffset>100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
//show-header
const show=document.querySelector("#header");
window.addEventListener("scroll",()=>
{
    if(window.pageYOffset>60){
        show.classList.add("active");
    }
    else{
        show.classList.remove("active");
    }
})
// Thay index ảnh
var imgFeature=document.querySelector('.img-feature');
var listImg=document.querySelectorAll('.img-small img');
var curentIndex=0;
function upDateImgByIndex(index){
    //remove active
    document.querySelectorAll('.img-small div').forEach(item=>{
        item.classList.remove('active')
    })
    curentIndex=index
    imgFeature.src=listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}
listImg.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        upDateImgByIndex(index)
    })
})

// Show form đăng ký khóa học
function khoahocPTS() {
    if (document.getElementById('khoahocC').style.display === "none" ) {
        document.getElementById('khoahocC').style.display = "block"
        // document.getElementById('khoahocandroid').style.display = "none"
    }
    else {
        document.getElementById('khoahocC').style.display = "none"
        // document.getElementsByClassName('khoahocandroid').style.display = "block"
    }
}
// đọc sách
function sachLTNet(){
    window.location='../docsach/sachLTnet.html';
}
function sachC(){
    window.location='../docsach/sachc++.html';
}
function sachJava(){
    window.location='../docsach/sachjava.html';
}

// loader
var loader=document.getElementsByClassName("center");
window.addEventListener("load",()=>{
    loader.style.display="none"
})
 /*Hàm Mở Form*/
function moForm() {
document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
function dongForm() {
document.getElementById("myForm").style.display = "none";
}

// tắt F12
document.addEventListener("contextmenu",function(e){
    e.preventDefault();
});
document.onkeydown=function(e){
    if(event.keyCode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
};