function calculateTip() {
    var billAmt = document.getElementById("billamt").value;

    var total = billAmt * .2;
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    

}

document.getElementById("calculate").onclick = function() {
    calculateTip();
}