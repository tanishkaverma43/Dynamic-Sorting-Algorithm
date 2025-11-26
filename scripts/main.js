var inp_as, array_size;
var inp_gen;
var inp_aspeed;
//var array_speed=document.getElementById('a_speed').value;

var butts_algos;
var div_sizes=[];
var divs=[];
var margin_size;
var cont;

// Initialize DOM elements when page loads
function initMain() {
    inp_as = document.getElementById('a_size');
    if (inp_as) {
        array_size = inp_as.value;
    } else {
        array_size = 80; // Default value
    }
    
    inp_gen = document.getElementById("a_generate");
    inp_aspeed = document.getElementById("a_speed");
    butts_algos = document.querySelectorAll(".algos button");
    cont = document.getElementById("array_container");
    
    if (cont) {
        cont.style = "flex-direction:row";
    }
    
    //Array generation and updation.
    if (inp_gen) {
        inp_gen.addEventListener("click", generate_array);
    }
    if (inp_as) {
        inp_as.addEventListener("input", update_array_size);
    }
    
    //Running the appropriate algorithm.
    if (butts_algos && butts_algos.length > 0) {
        for(var i=0; i<butts_algos.length; i++) {
            butts_algos[i].addEventListener("click", runalgo);
        }
    }
    
    // Initialize array on load
    update_array_size();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMain);
} else {
    // DOM is already ready
    initMain();
}

function generate_array()
{
    if (!cont || !array_size) return;
    
    cont.innerHTML="";

    for(var i=0; i<array_size; i++)
    {
        var min_val = inp_as ? inp_as.min : 20;
        var max_val = inp_as ? inp_as.max : 150;
        div_sizes[i] = Math.floor(Math.random() * 0.5*(max_val - min_val)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    if (inp_as) {
        array_size = inp_as.value;
    }
    generate_array();
}

function disable_buttons()
{
    if (!butts_algos) return;
    
    for(var i=0; i<butts_algos.length; i++)
    {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        if (inp_as) inp_as.disabled = true;
        if (inp_gen) inp_gen.disabled = true;
        if (inp_aspeed) inp_aspeed.disabled = true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}