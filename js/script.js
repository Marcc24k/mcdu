document.body.style.backgroundColor = " grey";

//SCREEN ON/OFF FUNCTION

function screenOn() {
  let value = document.getElementById("bright-knob").value;

  if (value == "Off") {
    //SCREEN OFF
    document.getElementById("bright-knob").value = "On";
    $("#cfds-menu").css({ opacity: "0" });
    //BUTTON ILLUMINATION
    $("#bright-text, .item, .item-alpha, .prog-buttons").css({
      color: "whitesmoke",
      fill: "whitesmoke"
    });
    //// BRIGHTNESS KNOB TRICKERY
    $("#bright-knob").css({ border: " 1px inset #bbb9b9 " });
    //TICKS
    $(".tick").css({ backgroundColor: "whitesmoke" });
    //FMGC-TEXT BAR LIGHT
    $(".fmgc-text").css({ opacity: ".3" });
    //RDY LIGHT
    $(".rdy > p").css({ opacity: ".3" });

    //ARROWS COLOR

    //ARROWS COLOR UP
    $(".up").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/up-arrow.PNG"
    );
    //ARROWS COLOR DOWN
    $(".down").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/down-arrow.PNG"
    );
    //OVFY ARROW
    $(".ovfy-arrow").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/OVFY.PNG"
    );

    // DISABLE TICK BUTTONS WHEN SCREEN IS OFF   

    document.getElementById("L1-button").disabled = true;

    //LOG TO CONSOLE
    console.log("off");
  } else {
    //SCREEN ON
    document.getElementById("bright-knob").value = "Off";

    $("#cfds-menu").css({ opacity: "50" });
    //BUTTON ILLUMINATION
    $("#bright-text, .item, .item-alpha, .fmgc-text, .prog-buttons").css({
      color: "#c3967d",
      fill: "#c3967d"
    });
    //// BRIGHTNESS KNOB TRICKERY
    $("#bright-knob").css({ border: " 1px ridge #bbb9b9 " });
    //TICKS
    $(".tick").css({ backgroundColor: "#c3967d" });
    //FMGC-TEXT BAR LIGHT
    $(".fmgc-text").css({ opacity: "90" });
    //RDY LIGHT
    $(".rdy > p").css({ color: "green", opacity: "90" });

    //ARROWS COLOR

    //ARROWS COLOR UP ORANGE
    $(".up").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/up-arrow-orange.PNG"
    );
    //ARROWS COLOR DOWN ORANGE
    $(".down").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/down-arrow-orange.PNG"
    );

    //     OVFY ARROW
    //ARROWS COLOR DOWN ORANGE
    $(".ovfy-arrow").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/ovfy-orange.PNG"
    );

    // ENABLE TICK BUTTONS WHEN SCREEN IS ON   

    document.getElementById("L1-button").disabled = false;

    //LOG TO CONSOLE
    console.log("on");
  }
}

// NEW MENU FUNCTION
//Simplified
// function tickOne() {
//   let html = document.getElementById("L1-button").innerHTML;
//   document.getElementById("fmgc-req").innerHTML = "&#60CPC";
//   document.getElementById("atsu").innerHTML = "&#60CPC-2";
//   document.getElementById("aids").innerHTML = "<span style =' color:whitesmoke'> &#60TEMP CTL</span>";
//   document.getElementById("cfds").innerHTML = "&#60CFDS";

//   // box.appendChild(el);

//   alert("Mcdu is coming alive!");
// }



  // ITERATES ARRAY AND RETURNS ONLY THREE ITEMS ON FMGC BUTTON WHEN MCDU IS FIRST TURNED ON

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
  "&#60RETURN", // 8
  "&#60TEST", // 9
  "", // 10  BLANK RETURN
    "&#60CFDS", // 11

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
} else {
  document.getElementById("no-response").innerHTML = " NO RESPONSE...";
}




//SECOND MENU
   
function dirt(){
  let html = document.getElementById("dir").innerHTML;
  document.getElementById("fmgc-req").innerHTML  = menuItems[9];
  document.getElementById("atsu").innerHTML  = menuItems[9];
  document.getElementById("aids").innerHTML  = menuItems[9];
  document.getElementById("cfds").innerHTML  = menuItems[10];
  
  console.log("works!");
}

//   RETURN TO MAIN MENU  

function retun() {
  document.getElementById("fmgc-req").innerHTML = menuItems[0];
  document.getElementById("atsu").innerHTML = menuItems[4];
  document.getElementById("aids").innerHTML = menuItems[5];
  document.getElementById("cfds").innerHTML  = menuItems[11];
  
}

//SCREEN END FUNCTION
