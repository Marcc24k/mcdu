
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
    "MCDU MENU" // 15
    

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
    document.getElementById("no-response").innerHTML = " NO RESPONSE...";
  }
  
  function tickTwo() {
    document.getElementById("mcdu-menu-header").innerHTML = menuItems[12];
    document.getElementById("aoc").innerHTML = menuItems[13];
    document.getElementById("comm-menu").innerHTML = menuItems[14];

    // HIDE OTHER MENUS
 
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
    document.getElementById("aoc").innerHTML = menuItems[10];
    document.getElementById("comm-menu").innerHTML = menuItems[10];
    document.getElementById("retun").innerHTML = menuItems[10];


    
  }