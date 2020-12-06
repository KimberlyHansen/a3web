// added by Aaron Jutzi December 6, 2020
// toLocaleString() source: https://www.geeksforgeeks.org/how-to-convert-date-to-another-timezone-in-javascript/
// list of js timezone names: https://gist.github.com/rxaviers/8481876


var d = new Date();
var auw = d.toLocaleString("en-US",{timeZone: "Australia/West"});
var aue = d.toLocaleString("en-US",{timeZone: "Australia/Eucla"});
var aud = d.toLocaleString("en-US",{timeZone: "Australia/Darwin"});
var aub = d.toLocaleString("en-US",{timeZone: "Australia/Brisbane"});
var aua = d.toLocaleString("en-US",{timeZone: "Australia/Adelaide"});
var aus = d.toLocaleString("en-US",{timeZone: "Australia/Sydney"});

document.getElementById("auw").innerHTML = auw;
document.getElementById("aue").innerHTML = aue;
document.getElementById("aud").innerHTML = aud;
document.getElementById("aub").innerHTML = aub;
document.getElementById("aua").innerHTML = aua;
document.getElementById("aus").innerHTML = aus;



window.onscroll = function() {navbarSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
//function navbarSticky() {
//    if (window.pageYOffset >= sticky) {
//        navbar.classList.add("sticky")
//    } else {
 //       navbar.classList.remove("sticky");
 //   }
}
