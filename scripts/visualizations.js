var speed=1000;

// Initialize event listener after DOM and main.js are ready
function initVisualizations() {
    // Try to get the element if it's not already defined
    if (typeof inp_aspeed === 'undefined' || !inp_aspeed) {
        var speedInput = document.getElementById("a_speed");
        if (speedInput) {
            inp_aspeed = speedInput;
        }
    }
    
    if (inp_aspeed) {
        inp_aspeed.addEventListener("input", vis_speed);
        // Initialize delay_time with current array_size if available
        if (typeof array_size !== 'undefined') {
            delay_time = 10000/(Math.floor(array_size/10)*speed);
        }
    }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Small delay to ensure main.js has initialized
        setTimeout(initVisualizations, 10);
    });
} else {
    // DOM is already ready, but wait a bit for main.js
    setTimeout(initVisualizations, 10);
}

function vis_speed()
{
    if (typeof inp_aspeed === 'undefined' || !inp_aspeed || typeof array_size === 'undefined') return;
    
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

// Initialize delay_time safely with default value
var delay_time=10000/(Math.floor(80/10)*speed);        //Decrease numerator to increase speed. Default array_size=80
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    if (!cont || typeof array_size === 'undefined' || typeof margin_size === 'undefined') return;
    
    window.setTimeout(function(){
        if (cont && array_size && margin_size !== undefined) {
            cont.style = " margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        }
    }, c_delay += delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        if (!butts_algos) return;
        
        for(var i=0; i<butts_algos.length; i++)
        {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            if (typeof inp_as !== 'undefined' && inp_as) inp_as.disabled = false;
            if (typeof inp_gen !== 'undefined' && inp_gen) inp_gen.disabled = false;
            if (typeof inp_aspeed !== 'undefined' && inp_aspeed) inp_aspeed.disabled = false;
        }
    }, c_delay += delay_time);
}