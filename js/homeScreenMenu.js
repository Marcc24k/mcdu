 // THESE ITEMS ARE THE OPTIONS NEXT TO THE SCREEN. THESE WILL BE UPDATED AS I GO IN ORDER TO CONSOLIDATE THESE OPTIONS AND OFFER EASE OF USE. 			
 





  // TICKONE ITERATES THROUGH ARRAY AND RETURNS ONLY THREE ITEMS ON FMGC BUTTON WHEN MCDU IS FIRST TURNED ON
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



// AIDS MENU OPTIONS

function aidsMenu() {

 
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


//CFDS MENU
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


  
    console.log("CFDS MENU WORKS!");
  }



//---------------------------------------------------------------------------------------------------------------------------------

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
  