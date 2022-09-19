
// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// loader
const loaderContainer = document.querySelector('.loader');

window.addEventListener('load', () => {
      loaderContainer.style.display = 'none';
  }); 