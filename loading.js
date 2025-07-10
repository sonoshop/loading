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

  requestAnimationFrame(() => {
    // 強制 reflow，確保動畫能被觸發
    void wrapper.offsetWidth;

    setTimeout(() => {
      wrapper.classList.add('fade-text'); // 淡出文字
    }, 500);

    setTimeout(() => {
      wrapper.classList.add('open'); // 左右開門
    }, 1200);

    setTimeout(() => {
      wrapper.remove(); // 移除 loading 畫面
      document.body.style.overflow = 'auto'; // 解鎖滾動
    }, 2500);
  });
}

window.addEventListener('DOMContentLoaded', createLoadingOverlay);
