function time(x){
    var d = new Date();
    var utc = d.toUTCString(x)
    document.write(utc);
    }