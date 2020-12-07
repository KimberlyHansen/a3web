
// Javascript for Modal built by Kimberly
var modal = document.getElementById("insidemodal","outsidemodal");
var btn = document.getElementById("Inside","Outside");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
