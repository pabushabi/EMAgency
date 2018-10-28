"use strict";
console.log("Hi^^");

var menu = document.getElementById("h_menu");

function enMenu() {
    menu.style.display = "block";
}

function disMenu() {
    menu.style.display = "none";
}

var con_m = document.getElementById("con_menu");

(function () {
    addEventListener("contextmenu", 
        function (e) {
            e.preventDefault();
            console.log(e);
            con_m.style.display = "block";
            if ((e.pageX + 150) < document.documentElement.clientWidth){
                con_m.style.left = e.pageX + 'px';
            }
            else {
                con_m.style.left = e.pageX - 150 + 'px';
            }
            if ((e.pageY + 145) < document.documentElement.clientHeight){
                con_m.style.top = e.pageY + 'px';
            }
            else {
                con_m.style.top = e.pageY - 145 + 'px';
            }
        });
    addEventListener("click",
        function (e) {
            con_m.style.display = "none";
        })
})();

var scroll_u = document.getElementById("up");
scroll_u.addEventListener("click", function (e) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

var scroll_d = document.getElementById("down");
scroll_d.addEventListener("click", function (e) {
    window.scrollTo({
        top: 10000,
        behavior: "smooth"
    });
});

var back = document.getElementById("back");
back.addEventListener("click", function (e) {
    history.back();
});

var big = document.getElementById("big_article");
var close = document.getElementById("close");
var article = document.getElementsByClassName("art");
[].forEach.call(article, function (el) {
    el.addEventListener("click", function (e) {
        console.log(e);
        big.style.display = "block";
    });
});

close.addEventListener("click", function (e) {
    big.style.display = "none";
});