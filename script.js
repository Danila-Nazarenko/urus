
e1.onclick=function (params) {
    document.getElementById("imgint").src="images/interior.png"
}
e2.onclick=function (params) {
    document.getElementById("imgint").src="images/urusY.webp"
}
e3.onclick=function (params) {
    document.getElementById("imgint").src="images/urusB.jpg"
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector(".header_top").classList.add("open")
    })
})
