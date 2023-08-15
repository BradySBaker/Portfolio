window.canvas = document.getElementById('animationCanvas');
window.canvas.width = window.innerWidth;
window.canvas.height = window.innerHeight;

window.ctx = window.canvas.getContext('2d');
window.addEventListener('resize', (event) => {});
