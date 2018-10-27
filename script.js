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
            if ((e.pageY + 110) < document.documentElement.clientHeight){
                con_m.style.top = e.pageY + 'px';
            }
            else {
                con_m.style.top = e.pageY - 110 + 'px';
            }
        });
    addEventListener("click",
        function (e) {
            con_m.style.display = "none";
        })
})();
