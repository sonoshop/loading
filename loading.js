(function () {
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
  document.write(loadingHTML); // 插入 HTML
  document.body.style.overflow = 'hidden';

  window.addEventListener('load', () => {
    const wrapper = document.getElementById('loading-wrapper');
    wrapper.offsetHeight; // 強制 reflow
    setTimeout(() => {
      wrapper.classList.add('fade-text');
    }, 1500);
    setTimeout(() => {
      wrapper.classList.add('open');
    }, 2200);
    setTimeout(() => {
      wrapper.remove();
      document.body.style.overflow = 'auto';
    }, 4000);
  });
})();
