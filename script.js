"use strict";
console.log("Hi^^");
let fish = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let menu = document.getElementById("h_menu");

function enMenu() {
    menu.style.display = "block";
}

function disMenu() {
    menu.style.display = "none";
}
let big_text = document.getElementById("big_b");

$(function () {
    $(".text").html(fish);
});
let texts = document.getElementsByClassName("text");
$(texts[2]).html(fish + fish);
let con_m = document.getElementById("con_menu");
(function () {
    big_text.innerHTML = fish;
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

let scroll_u = document.getElementById("up");
scroll_u.addEventListener("click", function (e) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let scroll_d = document.getElementById("down");
scroll_d.addEventListener("click", function (e) {
    window.scrollTo({
        top: 10000,
        behavior: "smooth"
    });
});

$("#back").on("click", function (e) {
    history.back();
});

let backgrd = document.getElementById("backgrd");
let tt = document.getElementById("new_back");
let big = document.getElementById("big_article");
let close = document.getElementById("close");
let article = document.getElementsByClassName("art");
[].forEach.call(article, function (el) {
    el.addEventListener("click", function (e) {
        console.log(e);
        backgrd.style.display = "block";
        big.style.display = "block";
    });
});

big.addEventListener("click", function (ev) {
    ev.stopPropagation();
});

function close_it() {
    backgrd.style.display = "none";
    big.style.display = "none";
}

close.addEventListener("click", close_it,false);
backgrd.addEventListener("click", close_it, false);
