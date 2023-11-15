let marker = document.querySelector('#marker');
let items = document.querySelectorAll('nav a');

function indicator(element) {
  marker.style.left = element.offsetLeft + 'px';
  marker.style.width = element.offsetWidth + 'px';
}

items.forEach(link => {
  link.addEventListener('click', (e) => {
    indicator(e.target);
  });
});
