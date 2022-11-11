document.body.style.backgroundColor = " grey";
// ALLOWS THE MCDU TO BE DRAGGABLE TO BETTER PLACMENT
$(function () {
    $("#mcdu").draggable();
});
//SCREEN ON/OFF FUNCTION
function screenOn() {
    var value = document.getElementById("bright-knob").value;
    if (value == "Off") {
        //SCREEN OFF
        document.getElementById("bright-knob").value = "On";
        $("#mcdu-menu").css({ opacity: "0" });
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
        $(".up ").attr("src", "images/up-arrow.PNG");
        //ARROWS COLOR DOWN
        $(".down ").attr("src", "images/down-arrow.PNG");
        //OVFY ARROW
        $(".ovfy-arrow").attr("xlink:href", "https://marcc24k.github.io/Hosted-assets/OVFY.PNG");
        // DISABLE TICK BUTTONS WHEN SCREEN IS OFF
        document.getElementById("L1-button").disabled = true;
        document.getElementById("L2-button").disabled = true;
        document.getElementById("L3-button").disabled = true;
        document.getElementById("L4-button").disabled = true;
        // document.getElementById("L5-button").disabled = true;
        // document.getElementById("L6-button").disabled = true;
        // document.getElementById("L7-button").disabled = true;
        // RESET BUTTONS WHEN SCREEN IS OFF\
        document.getElementById("fmgc-req").innerHTML = menuItems[0];
        document.getElementById("atsu").innerHTML = menuItems[4];
        document.getElementById("aids").innerHTML = menuItems[5];
        document.getElementById("cfds").innerHTML = menuItems[11];
        // ATSU MENU
        document.getElementById("aoc").innerHTML = menuItems[10];
        document.getElementById("comm-menu").innerHTML = menuItems[10];
        // AIDS MENU LEFT SIDE
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
        //CFDS MENU
        document.getElementById("last-leg-report").innerHTML = menuItems[10];
        document.getElementById("last-leg-ecam-report").innerHTML = menuItems[10];
        document.getElementById("previous-legs-report").innerHTML = menuItems[10];
        document.getElementById("avionics-status").innerHTML = menuItems[10];
        document.getElementById("system-report-test").innerHTML = menuItems[10];
        document.getElementById("post").innerHTML = menuItems[10];
        document.getElementById("send").innerHTML = menuItems[10];
        document.getElementById("flt-rep").innerHTML = menuItems[10];
        document.getElementById("print").innerHTML = menuItems[10];
        //LOG TO CONSOLE
        console.log("off");
    }
    else {
        //SCREEN ON
        document.getElementById("bright-knob").value = "Off";
        $("#mcdu-menu").css({ opacity: "50" });
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
        $(".up ").attr("src", "images/up-arrow-orange.png");
        //ARROWS COLOR DOWN ORANGE
        $(".down ").attr("src", "images/down-arrow-orange.png");
        //     OVFY ARROW
        //ARROWS COLOR DOWN ORANGE
        $(".ovfy-arrow").attr("xlink:href", "https://marcc24k.github.io/Hosted-assets/ovfy-orange.PNG");
        // SCREEN "ON" SHOW MENU
        document.getElementById("mcdu-menu-header").innerHTML = menuItems[15];
        document.getElementById("fmgc-req").innerHTML = menuItems[0];
        document.getElementById("atsu").innerHTML = menuItems[4];
        document.getElementById("aids").innerHTML = menuItems[5];
        document.getElementById("cfds").innerHTML = menuItems[11];
        // ENABLE TICK BUTTONS WHEN SCREEN IS ON
        //     const btn = document.getElementById('btn') as HTMLButtonElement | null;
        // if (btn != null) {
        //   btn.disabled = true;
        // }
        var enableButtons = document.getElementById("L1-button");
        document.getElementById("L2-button");
        document.getElementById("L3-button");
        document.getElementById("L4-button");
        if (enableButtons != null) {
            enableButtons.disabled = true;
            console.log("buttons");
        }
        //LOG TO CONSOLE
        console.log("on");
    }
}
//SCREEN END FUNCTION
