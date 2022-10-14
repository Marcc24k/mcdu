document.body.style.backgroundColor = " grey";

//SCREEN ON/OFF FUNCTION

function screenOn() {
  let value = document.getElementById("bright-knob").value;

  if (value == "Off") {
    //SCREEN OFF
    document.getElementById("bright-knob").value = "On";
    $("#cfds-menu").css({ opacity: "0" });
    //BUTTON ILLUMINATION
    $(".ilumination > p, .item, .item-alpha").css({
      color: "whitesmoke",
      fill: "whitesmoke"
    });
    //// BRIGHTNESS KNOB TRICKERY
    $("#bright-knob").css({ border: " 1px inset #bbb9b9 " });
    //TICKS
    $(".tick").css({ backgroundColor: "whitesmoke" });
    //FMGC-TEXT BAR LIGHT
    $(".fmgc-text").css({ opacity: ".3" });
     //MCDU-TEXT BAR RIGHT SIDE ILUMINATION
     $(".mcdu-text, .menu").css({ opacity: ".3", color: "darkgrey" });
    //RDY LIGHT
    $(".rdy > p").css({ opacity: ".3" });

    //ARROWS COLOR

    //ARROWS COLOR UP
    $(".up ").attr(
      "src", "/images/up-arrow.PNG"
    );
    //ARROWS COLOR DOWN
    $(".down ").attr(
      "src", "/images/down-arrow.PNG"
    );
    //OVFY ARROW
    $(".ovfy-arrow").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/OVFY.PNG"
    );

    // DISABLE TICK BUTTONS WHEN SCREEN IS OFF

    document.getElementById("L1-button").disabled = true;
    document.getElementById("L2-button").disabled = true;
    document.getElementById("L3-button").disabled = true;


    // RESET BUTTONS WHEN SCREEN IS OFF\
    document.getElementById("fmgc-req").innerHTML = menuItems[0];
    document.getElementById("atsu").innerHTML = menuItems[4];
    document.getElementById("aids").innerHTML = menuItems[5];
    document.getElementById("cfds").innerHTML = menuItems[11];

    // ATSU MENU
    document.getElementById("aoc").innerHTML = menuItems[10];
    document.getElementById("comm-menu").innerHTML = menuItems[10];

// AIDS MENU
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

    //LOG TO CONSOLE
    console.log("off");





  } else {




    //SCREEN ON
    document.getElementById("bright-knob").value = "Off";

    $("#cfds-menu").css({ opacity: "50" });
    //BUTTON ILLUMINATION
    $(".ilumination > p, .item, .item-alpha").css({
      color: "#c3967d",
      fill: "#c3967d"
    });
    //// BRIGHTNESS KNOB TRICKERY
    $("#bright-knob").css({ border: " 1px ridge #bbb9b9 " });
    //TICKS
    $(".tick").css({ backgroundColor: "#c3967d" });
    //FMGC-TEXT BAR LIGHT
    $(".fmgc-text").css({ opacity: "90" });
    //MCDU-TEXT BAR RIGHT SIDE ILUMINATION
    $(".mcdu-text, .menu").css({ opacity: "90", color: "darkgrey" });

    //RDY LIGHT
    $(".rdy > p").css({ color: "green", opacity: "90" });
    // FMGC-REQ RED COLOR
    // $("#fmgc-req").css({ color: " red " });

    //ARROWS COLOR

    //ARROWS COLOR UP ORANGE
    $(".up ").attr(
      "src", "/images/up-arrow-orange.PNG"
    );
    //ARROWS COLOR DOWN ORANGE
    $(".down ").attr(
      "src", "/images/down-arrow-orange.PNG"
    );

    //     OVFY ARROW
    //ARROWS COLOR DOWN ORANGE
    $(".ovfy-arrow").attr(
      "xlink:href",
      "https://marcc24k.github.io/Hosted-assets/ovfy-orange.PNG"
    );

    // SCREEN "ON" SHOW MENU
    document.getElementById("mcdu-menu-header").innerHTML = menuItems[15];
    document.getElementById("fmgc-req").innerHTML = menuItems[0];
    document.getElementById("atsu").innerHTML = menuItems[4];
    document.getElementById("aids").innerHTML = menuItems[5];
    document.getElementById("cfds").innerHTML = menuItems[11];

    // ENABLE TICK BUTTONS WHEN SCREEN IS ON

    document.getElementById("L1-button").disabled = false;
    document.getElementById("L2-button").disabled = false;
    document.getElementById("L3-button").disabled = false;

    //LOG TO CONSOLE
    console.log("on");
  }
}

//SCREEN END FUNCTION
