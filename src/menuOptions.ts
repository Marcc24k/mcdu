
// ARRAY THAT HOLDS ALL MENU OPTIONS TO BE CALLED.
let menuItems = [
  "&#60FMGC", // 0
  "&#60FMGC (SEL)", // 1
  "&#60FMGC (OFF)", // 2
  "&#60FMGC (REQ)", // 3
  "&#60ATSU", // 4
  "&#60AIDS", // 5
  "&#60CPC", // 6
  "&#60CPC-2", // 7
  "RETURN&#62", // 8
  "&#60TEST", // 9
  "", // 10  BLANK RETURN
  "&#60CFDS", // 11
  "ATSU DATALINK", // 12
  "AOC MENU&#62", // 13
  "COMM MENU&#62", // 14
  "MCDU MENU",  // 15


  // AIDS STATIC MENU OPTIONS
  "AIDS", // 16 HEADER
  "PARAMETER CALL UP", // 17
  "&#60LABEL", // 18
  "SPECIAL FUNCTION", // 19
  "&#60REPROGRAMMING", // 20
  "&#60DAR RECRDNG", // 21
  "STORED", // 22
  "&#60SAR DATA", // 23
  "MAN REQST", // 24
  "&#60SAR/RECRDNG", // 25

  // AIDS RIGHT SIDE MENU
  "ALPHA&#62", // 26 
  "PCMCIA&#62", // 27
  "AIRLINE", // 28
  "FUNCTIONS&#62", // 29
  "STORED", // 30
  "REPORTS&#62", // 31
  "MAN REQST", // 32
  "REPORTS&#62", // 33

// CFDS MENU
  "&#60last-leg-report", // 34 
  "&#60last-leg-ecam-report", // 35
  "&#60previous-legs-report", // 36
  "&#60avionics-status", // 37
  "&#60system-report-test", // 38
  "&#60post", // 39
  "&#60*send", // 40
  "&#60flt-rep", // 41
  "&#60print*", // 42
  "&#8250 " // 43


      

];

// TICKONE ITERATES THROUGH ARRAY AND RETURNS ONLY THREE ITEMS ON FMGC BUTTON WHEN MCDU IS FIRST TURNED ON
let tick = true;
let items = 0;
if (tick === true) {
  var tickOne = (function () {
    // SETS THE STARTING POINT NUMBER
    var items = 0;
    // SETS THE VARIABLE THAT WILL ALLOW WHAT SECTION OF THE ARRAY TO SLICE
    let menu = menuItems.slice(0, 4);
    //REUTRNS THE THE ITEMS BETWEEN 0-4 AND ITERATE THROUGH THEM ONE AT A TIME
    return function () {
      $("#fmgc-req").html(menuItems[items % menu.length]);
      items++;
    };
    
      })();
} else { 
  document.getElementById("no-response").innerHTML = " NO RESPONSE...";
}


// ATSU MENU
function tickTwo() {

  document.getElementById("mcdu-menu-header").innerHTML = menuItems[12];
  document.getElementById("aoc").innerHTML = menuItems[13];
  document.getElementById("comm-menu").innerHTML = menuItems[14];
// HIDE FMGC STATIC MENU

  document.getElementById("fmgc-req").innerHTML = menuItems[10];
  document.getElementById("atsu").innerHTML = menuItems[10];
  document.getElementById("aids").innerHTML = menuItems[10];
  document.getElementById("cfds").innerHTML = menuItems[10];
  document.getElementById("retun").innerHTML = menuItems[10];







  console.log("ATSU MENU WORKS!");
}

// CFDS MENU

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


  //HIDE MENU

  document.getElementById("fmgc-req").innerHTML = menuItems[10];
  document.getElementById("atsu").innerHTML = menuItems[10];
  document.getElementById("aids").innerHTML = menuItems[10];
  document.getElementById("cfds").innerHTML = menuItems[10];
  document.getElementById("retun").innerHTML = menuItems[10];


  console.log("CFDS MENU WORKS!");
}



//DIR MENU

function dirt() {
  document.getElementById("fmgc-req").innerHTML = menuItems[9];
  document.getElementById("atsu").innerHTML = menuItems[9];
  document.getElementById("aids").innerHTML = menuItems[9];
  document.getElementById("cfds").innerHTML = menuItems[10];
  document.getElementById("retun").innerHTML = menuItems[8];


  console.log("DIR MENU WORKS!");
}



// AIDS MENU OPTIONS

function aidsMenu() {

// WORKING ON FIXING THIS LINE OF CODE

// var x =   document.getElementById("aids-menu-container");

// if (x.style.display === "block" ) {
//   x.style.display = "block";
//   // AIDS MENU LEFT SIDE 

//   document.getElementById("aids-header").innerHTML = menuItems[16];
//   document.getElementById("parameter-call-up").innerHTML = menuItems[17];
//   document.getElementById("label").innerHTML = menuItems[18];
//   document.getElementById("special-function").innerHTML = menuItems[19];
//   document.getElementById("reprogramming").innerHTML = menuItems[20];
//   document.getElementById("dar-recording").innerHTML = menuItems[21];
//   document.getElementById("stored-left").innerHTML = menuItems[22];
//   document.getElementById("sar-data").innerHTML = menuItems[23];
//   document.getElementById("man-request").innerHTML = menuItems[24];
//   document.getElementById("sar-recording").innerHTML = menuItems[25];

//     // AIDS MENU RIGHT SIDE 
// document.getElementById("alpha").innerHTML = menuItems[26];
// document.getElementById("pcmcia").innerHTML = menuItems[27];
// document.getElementById("airline").innerHTML = menuItems[28];
// document.getElementById("functions").innerHTML = menuItems[29];
// document.getElementById("stored-right").innerHTML = menuItems[30];
// document.getElementById("reports-right-one").innerHTML = menuItems[31];
// document.getElementById("man-request-right").innerHTML = menuItems[32];
// document.getElementById("reports-right-two").innerHTML = menuItems[33];

// console.log("aids");

// } else {
//   x.style.display = "block";
  
//   document.getElementById("last-leg-report").innerHTML = menuItems[34];
//   document.getElementById("last-leg-ecam-report").innerHTML = menuItems[35];
//   document.getElementById("previous-legs-report").innerHTML = menuItems[36];
//   document.getElementById("avionics-status").innerHTML = menuItems[37];
//   document.getElementById("system-report-test").innerHTML = menuItems[38];
//   document.getElementById("post").innerHTML = menuItems[39];
//   document.getElementById("send").innerHTML = menuItems[40];
//   document.getElementById("flt-rep").innerHTML = menuItems[41];
//   document.getElementById("print").innerHTML = menuItems[42];
      

// console.log("No-aids");

// }


// AIDS MENU LEFT SIDE 

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

// AIDS MENU RIGHT SIDE 

document.getElementById("alpha").innerHTML = menuItems[26];
document.getElementById("pcmcia").innerHTML = menuItems[27];
document.getElementById("airline").innerHTML = menuItems[28];
document.getElementById("functions").innerHTML = menuItems[29];
document.getElementById("stored-right").innerHTML = menuItems[30];
document.getElementById("reports-right-one").innerHTML = menuItems[31];
document.getElementById("man-request-right").innerHTML = menuItems[32];
document.getElementById("reports-right-two").innerHTML = menuItems[33];



  console.log("AIDS MENU WORKS!");


  // HIDE STATIC MENU WHEN AIDS MENU OPENS AND DISABLE
  document.getElementById("mcdu-menu-header").innerHTML = menuItems[10];
  document.getElementById("fmgc-req").innerHTML = menuItems[10];
  document.getElementById("atsu").innerHTML = menuItems[10];
  document.getElementById("aids").innerHTML = menuItems[10];
  document.getElementById("cfds").innerHTML = menuItems[10];

  

}




//   RETURN TO MAIN MENU

function retun() {
  document.getElementById("mcdu-menu-header").innerHTML = menuItems[15];
  document.getElementById("fmgc-req").innerHTML = menuItems[0];
  document.getElementById("atsu").innerHTML = menuItems[4];
  document.getElementById("aids").innerHTML = menuItems[5];
  document.getElementById("cfds").innerHTML = menuItems[11];
  



  // HIDE WHEN RETURNED
  document.getElementById("aoc").innerHTML = menuItems[10];
  document.getElementById("comm-menu").innerHTML = menuItems[10];
  document.getElementById("retun").innerHTML = menuItems[10];




  
}


// ANYTIME MCDU IS PRESSED YOU ARE TAKEN TO MAIN MENU



function mcduMenuButton() {
  document.getElementById("mcdu-menu-header").innerHTML = menuItems[15];
  document.getElementById("fmgc-req").innerHTML = menuItems[0];
  document.getElementById("atsu").innerHTML = menuItems[4];
  document.getElementById("aids").innerHTML = menuItems[5];
  document.getElementById("cfds").innerHTML = menuItems[11];
  



  // HIDE WHEN RETURNED

  // ATSU MENU OPTIONS
  document.getElementById("aoc").innerHTML = menuItems[10];
  document.getElementById("comm-menu").innerHTML = menuItems[10];
  document.getElementById("retun").innerHTML = menuItems[10];

  // AIDS MENU OPTIONS
  
  // LEFT SIDE
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

 // AIDS MENU RIGHT SIDE 
 document.getElementById("alpha").innerHTML = menuItems[10];
 document.getElementById("pcmcia").innerHTML = menuItems[10];
 document.getElementById("airline").innerHTML = menuItems[10];
 document.getElementById("functions").innerHTML = menuItems[10];
 document.getElementById("stored-right").innerHTML = menuItems[10];
 document.getElementById("reports-right-one").innerHTML = menuItems[10];
 document.getElementById("man-request-right").innerHTML = menuItems[10];
 document.getElementById("reports-right-two").innerHTML = menuItems[10];

// CFDS MENU
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