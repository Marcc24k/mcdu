
  //DIR MENU
  
  function dirt() {
    document.getElementById("fmgc-req").innerHTML = menuItems[9];
    document.getElementById("atsu").innerHTML = menuItems[9];
    document.getElementById("aids").innerHTML = menuItems[9];
    document.getElementById("cfds").innerHTML = menuItems[10];
    document.getElementById("retun").innerHTML = menuItems[8];

  
    console.log("DIR MENU WORKS!");
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

    
  }