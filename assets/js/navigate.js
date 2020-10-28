var navBtn = document.querySelector('.btn-nav');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('.overlay-close');

navBtn.addEventListener('click', function () {
  overlay.className+=' open';  
});


closeBtn.addEventListener('click', function() {
   overlay.className = overlay.className.replace(/open/g, '');
});