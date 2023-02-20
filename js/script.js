let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();
var i = 0;

function fn() {

    i = i + 1
    var a = document.getElementById("val");
    var b = document.getElementById("t1");
    a.value = i;
    var x = parseInt(a.value);
    var z = x * 150;
    b.value = z;
}

function gn() {
    if (i != 0) {
        i = i - 1
        var a = document.getElementById("val");
        a.value = i;
        var b = document.getElementById("t1");
        a.value = i;
        var x = parseInt(a.value);
        var z = (x * 150);
        b.value = z;
    }
}

function fn1() {

    i = i + 1
    var a = document.getElementById("val1");
    var b = document.getElementById("t11");
    a.value = i;
    var x = parseInt(a.value);
    var z = x * 170;
    b.value = z;
}

function gn1() {
    if (i != 0) {
        i = i - 1
        var a = document.getElementById("val1");
        a.value = i;
        var b = document.getElementById("t11");
        a.value = i;
        var x = parseInt(a.value);
        var z = (x * 170);
        b.value = z;
    }
}

function fn2() {

    i = i + 1
    var a = document.getElementById("val2");
    var b = document.getElementById("t12");
    a.value = i;
    var x = parseInt(a.value);
    var z = x * 130;
    b.value = z;
}

function gn2() {
    if (i != 0) {
        i = i - 1
        var a = document.getElementById("val2");
        a.value = i;
        var b = document.getElementById("t12");
        a.value = i;
        var x = parseInt(a.value);
        var z = (x * 130);
        b.value = z;
    }
}

function fn3() {

    i = i + 1
    var a = document.getElementById("val3");
    var b = document.getElementById("t13");
    a.value = i;
    var x = parseInt(a.value);
    var z = x * 250;
    b.value = z;
}

function gn3() {
    if (i != 0) {
        i = i - 1
        var a = document.getElementById("val3");
        a.value = i;
        var b = document.getElementById("t13");
        a.value = i;
        var x = parseInt(a.value);
        var z = (x * 250);
        b.value = z;
    }
}

function fn4() {

    i = i + 1
    var a = document.getElementById("val4");
    var b = document.getElementById("t14");
    a.value = i;
    var x = parseInt(a.value);
    var z = x * 130;
    b.value = z;
}

function gn4() {
    if (i != 0) {
        i = i - 1
        var a = document.getElementById("val4");
        a.value = i;
        var b = document.getElementById("t14");
        a.value = i;
        var x = parseInt(a.value);
        var z = (x * 130);
        b.value = z;
    }
}

function fn5() {

    i = i + 1
    var a = document.getElementById("val5");
    var b = document.getElementById("t15");
    a.value = i;
    var x = parseInt(a.value);
    var z = x * 250;
    b.value = z;
}

function gn5() {
    if (i != 0) {
        i = i - 1
        var a = document.getElementById("val5");
        a.value = i;
        var b = document.getElementById("t15");
        a.value = i;
        var x = parseInt(a.value);
        var z = (x * 250);
        b.value = z;
    }
}