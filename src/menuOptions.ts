
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
    "REPROGRAMMING", // 20
    "&#60DAR RECRDNG", // 21
    "STORED", // 22
    "&#60SAR DATA", // 23
    "MAN REQST", // 24
    "&#60SAR/RECRDNG" // 25


        

  ];
  
  // ITERATES THROUGH ARRAY AND RETURNS ONLY THREE ITEMS ON FMGC BUTTON WHEN MCDU IS FIRST TURNED ON
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
  } else {
    const noResponse = document.getElementById('no-response') as HTMLDivElement | null;
     
console.log(noResponse?.innerHTML); // 👉️ "hello world"
    // document.getElementById("no-response").innerHTML = " NO RESPONSE...";
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


    
  }