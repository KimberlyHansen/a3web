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