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
    //BUTTON ORIENTATION
    $("#bright-knob").css({ border: " 1px inset #bbb9b9 " }); // BRIGHTNESS KNOB TRICKERY
    $(".tick").css({ backgroundColor: "whitesmoke" }); //TICKS
    $(".fmgc-text").css({ opacity: ".3" }); //FMGC-TEXT BAR LIGHT

    $(".rdy > p").css({ opacity: ".3" }); //RDY LIGHT

    
    
    
    
    //LOG TO CONSOLE
    console.log("off");
  } else {
    //SCREEN ON
    document.getElementById("bright-knob").value = "Off";

    
      $("#cfds-menu").css({ opacity: "50" });
      //BUTTON ILLUMINATION
      $("#bright-text, .item, .item-alpha, .fmgc-text, .prog-buttons").css({
        color: "#d38152",
        fill: "#d38152"
      });
      //BUTTON ORIENTATION
      $("#bright-knob").css({ border: " 1px ridge #bbb9b9 " }); // BRIGHTNESS KNOB TRICKERY
      $(".tick").css({ backgroundColor: "#d38152" }); //TICKS
      $(".fmgc-text").css({ opacity: "90" }); //FMGC-TEXT BAR LIGHT

      $(".rdy > p").css({ color: "green", opacity: "90" }); //RDY LIGHT

 

 
    
    
    
    //LOG TO CONSOLE
    console.log("on");
  }
}

//SCREEN END FUNCTION
 