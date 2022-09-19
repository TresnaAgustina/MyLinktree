
// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// loader
const loader = document.querySelector('.loader');

window.addEventListener("load", () => {
      loader.className += " hidden";
  }); 