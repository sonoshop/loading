function createLoadingOverlay() {
  const loadingHTML = `
    <div id="loading-wrapper">
      <div id="loading-left" class="loading-panel"></div>
      <div id="loading-right" class="loading-panel"></div>
      <div id="loading-text">
        <img src="https://raw.githubusercontent.com/sonoshop/shop-img/1074881a31b38bd6404c31f724e9569a84d0dcaf/SONO_LOGO.svg" alt="Logo" />
        <span>Sono in Italia</span>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', loadingHTML);
  document.body.style.overflow = 'hidden';

  const wrapper = document.getElementById('loading-wrapper');

  setTimeout(() => {
    wrapper.classList.add('fade-text');
  }, 1500);

  setTimeout(() => {
    wrapper.classList.add('open');
  }, 2200);

  setTimeout(() => {
    if (wrapper) wrapper.remove();
    document.body.style.overflow = 'auto';
  }, 4000);
}

window.addEventListener('DOMContentLoaded', createLoadingOverlay);
