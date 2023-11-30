
var button = document.querySelector("#btn");

button.addEventListener("mouseover", function() {

  var x = Math.random() *255;
  var y = Math.random() * 255;
  button.style.left = `${x}%`;
  button.style.top = `${y}%`;
});
