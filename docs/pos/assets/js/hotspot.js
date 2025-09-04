const popup = document.getElementById('popupPage');
const iframe = document.getElementById('popupIframe');
const closeBtn = document.querySelector('.closeBtn');
const modelViewer = document.getElementById('reveal');

// Detectar clicks en hotspots
modelViewer.addEventListener('click', (event) => {
  if(event.target.classList.contains('Hotspot')) {
    const url = event.target.dataset.url;
    if(!url) return;
    iframe.src = url;
    popup.style.display = 'flex';
  }
});

// Cerrar con X
closeBtn.addEventListener('click', () => {
  iframe.src = '';
  popup.style.display = 'none';
});

// Cerrar al hacer click fuera del contenido
popup.addEventListener('click', e => {
  if(e.target === popup) {
    iframe.src = '';
    popup.style.display = 'none';
  }
});
