"use strict";
alert("Hacked!");
let menuItems = [
    "&#60FMGC",
    "&#60FMGC (SEL)",
    "&#60FMGC (OFF)",
    "&#60FMGC (REQ)",
    "&#60ATSU",
    "&#60AIDS",
    "&#60CPC",
    "&#60CPC-2",
    "RETURN&#62",
    "&#60TEST",
    "",
    "&#60CFDS",
    "ATSU DATALINK",
    "AOC MENU&#62",
    "COMM MENU&#62",
    "MCDU MENU",
    "AIDS",
    "PARAMETER CALL UP",
    "&#60LABEL",
    "SPECIAL FUNCTION",
    "&#60REPROGRAMMING",
    "&#60DAR RECRDNG",
    "STORED",
    "&#60SAR DATA",
    "MAN REQST",
    "&#60SAR/RECRDNG",
    "ALPHA&#62",
    "PCMCIA&#62",
    "AIRLINE",
    "FUNCTIONS&#62",
    "STORED",
    "REPORTS&#62",
    "MAN REQST",
    "REPORTS&#62",
    "&#60last-leg-report",
    "&#60last-leg-ecam-report",
    "&#60previous-legs-report",
    "&#60avionics-status",
    "&#60system-report-test",
    "&#60post",
    "&#60*send",
    "&#60flt-rep",
    "&#60print*",
    "&#8250 "
];
let tick = true;
let items = 0;
if (tick === true) {
    var tickOne = (function () {
        var items = 0;
        let menu = menuItems.slice(0, 4);
        return function () {
            $("#fmgc-req").html(menuItems[items % menu.length]);
            items++;
        };
    })();
}
else {
    document.getElementById("no-response").innerHTML = " NO RESPONSE...";
}
function tickTwo() {
    document.getElementById("mcdu-menu-header").innerHTML = menuItems[12];
    document.getElementById("aoc").innerHTML = menuItems[13];
    document.getElementById("comm-menu").innerHTML = menuItems[14];
    document.getElementById("fmgc-req").innerHTML = menuItems[10];
    document.getElementById("atsu").innerHTML = menuItems[10];
    document.getElementById("aids").innerHTML = menuItems[10];
    document.getElementById("cfds").innerHTML = menuItems[10];
    document.getElementById("retun").innerHTML = menuItems[10];
    console.log("ATSU MENU WORKS!");
}
function cfdsMenu() {
    document.getElementById("last-leg-report").innerHTML = menuItems[34];
    document.getElementById("last-leg-ecam-report").innerHTML = menuItems[35];
    document.getElementById("previous-legs-report").innerHTML = menuItems[36];
    document.getElementById("avionics-status").innerHTML = menuItems[37];
    document.getElementById("system-report-test").innerHTML = menuItems[38];
    document.getElementById("post").innerHTML = menuItems[39];
    document.getElementById("send").innerHTML = menuItems[40];
    document.getElementById("flt-rep").innerHTML = menuItems[41];
    document.getElementById("print").innerHTML = menuItems[42];
    document.getElementById("fmgc-req").innerHTML = menuItems[10];
    document.getElementById("atsu").innerHTML = menuItems[10];
    document.getElementById("aids").innerHTML = menuItems[10];
    document.getElementById("cfds").innerHTML = menuItems[10];
    document.getElementById("retun").innerHTML = menuItems[10];
    console.log("CFDS MENU WORKS!");
}
function dirt() {
    document.getElementById("fmgc-req").innerHTML = menuItems[9];
    document.getElementById("atsu").innerHTML = menuItems[9];
    document.getElementById("aids").innerHTML = menuItems[9];
    document.getElementById("cfds").innerHTML = menuItems[10];
    document.getElementById("retun").innerHTML = menuItems[8];
    console.log("DIR MENU WORKS!");
}
function aidsMenu() {
    document.getElementById("aids-header").innerHTML = menuItems[16];
    document.getElementById("parameter-call-up").innerHTML = menuItems[17];
    document.getElementById("label").innerHTML = menuItems[18];
    document.getElementById("special-function").innerHTML = menuItems[19];
    document.getElementById("reprogramming").innerHTML = menuItems[20];
    document.getElementById("dar-recording").innerHTML = menuItems[21];
    document.getElementById("stored-left").innerHTML = menuItems[22];
    document.getElementById("sar-data").innerHTML = menuItems[23];
    document.getElementById("man-request").innerHTML = menuItems[24];
    document.getElementById("sar-recording").innerHTML = menuItems[25];
    document.getElementById("alpha").innerHTML = menuItems[26];
    document.getElementById("pcmcia").innerHTML = menuItems[27];
    document.getElementById("airline").innerHTML = menuItems[28];
    document.getElementById("functions").innerHTML = menuItems[29];
    document.getElementById("stored-right").innerHTML = menuItems[30];
    document.getElementById("reports-right-one").innerHTML = menuItems[31];
    document.getElementById("man-request-right").innerHTML = menuItems[32];
    document.getElementById("reports-right-two").innerHTML = menuItems[33];
    console.log("AIDS MENU WORKS!");
    document.getElementById("mcdu-menu-header").innerHTML = menuItems[10];
    document.getElementById("fmgc-req").innerHTML = menuItems[10];
    document.getElementById("atsu").innerHTML = menuItems[10];
    document.getElementById("aids").innerHTML = menuItems[10];
    document.getElementById("cfds").innerHTML = menuItems[10];
}
function retun() {
    document.getElementById("mcdu-menu-header").innerHTML = menuItems[15];
    document.getElementById("fmgc-req").innerHTML = menuItems[0];
    document.getElementById("atsu").innerHTML = menuItems[4];
    document.getElementById("aids").innerHTML = menuItems[5];
    document.getElementById("cfds").innerHTML = menuItems[11];
    document.getElementById("aoc").innerHTML = menuItems[10];
    document.getElementById("comm-menu").innerHTML = menuItems[10];
    document.getElementById("retun").innerHTML = menuItems[10];
}
function mcduMenuButton() {
    document.getElementById("mcdu-menu-header").innerHTML = menuItems[15];
    document.getElementById("fmgc-req").innerHTML = menuItems[0];
    document.getElementById("atsu").innerHTML = menuItems[4];
    document.getElementById("aids").innerHTML = menuItems[5];
    document.getElementById("cfds").innerHTML = menuItems[11];
    document.getElementById("aoc").innerHTML = menuItems[10];
    document.getElementById("comm-menu").innerHTML = menuItems[10];
    document.getElementById("retun").innerHTML = menuItems[10];
    document.getElementById("aids-header").innerHTML = menuItems[10];
    document.getElementById("parameter-call-up").innerHTML = menuItems[10];
    document.getElementById("label").innerHTML = menuItems[10];
    document.getElementById("special-function").innerHTML = menuItems[10];
    document.getElementById("reprogramming").innerHTML = menuItems[10];
    document.getElementById("dar-recording").innerHTML = menuItems[10];
    document.getElementById("stored-left").innerHTML = menuItems[10];
    document.getElementById("sar-data").innerHTML = menuItems[10];
    document.getElementById("man-request").innerHTML = menuItems[10];
    document.getElementById("sar-recording").innerHTML = menuItems[10];
    document.getElementById("alpha").innerHTML = menuItems[10];
    document.getElementById("pcmcia").innerHTML = menuItems[10];
    document.getElementById("airline").innerHTML = menuItems[10];
    document.getElementById("functions").innerHTML = menuItems[10];
    document.getElementById("stored-right").innerHTML = menuItems[10];
    document.getElementById("reports-right-one").innerHTML = menuItems[10];
    document.getElementById("man-request-right").innerHTML = menuItems[10];
    document.getElementById("reports-right-two").innerHTML = menuItems[10];
    document.getElementById("last-leg-report").innerHTML = menuItems[10];
    document.getElementById("last-leg-ecam-report").innerHTML = menuItems[10];
    document.getElementById("previous-legs-report").innerHTML = menuItems[10];
    document.getElementById("avionics-status").innerHTML = menuItems[10];
    document.getElementById("system-report-test").innerHTML = menuItems[10];
    document.getElementById("post").innerHTML = menuItems[10];
    document.getElementById("send").innerHTML = menuItems[10];
    document.getElementById("flt-rep").innerHTML = menuItems[10];
    document.getElementById("print").innerHTML = menuItems[10];
}
//# sourceMappingURL=menuOptions.js.map