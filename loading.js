#loading-wrapper {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: #630101;
  overflow: hidden;
  z-index: 9999;
  font-family: 'Noto Serif TC', serif;
}

.loading-panel {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #630101;
  transition: transform 1s ease;
  z-index: 2;
}

#loading-left {
  left: 0;
  transform: translateX(0);
}

#loading-right {
  right: 0;
  transform: translateX(0);
}

#loading-wrapper.open #loading-left {
  transform: translateX(-100%);
}

#loading-wrapper.open #loading-right {
  transform: translateX(100%);
}

#loading-text {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  letter-spacing: 0.15em;
  opacity: 1;
  transition: opacity 1s ease, transform 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 3;
}

#loading-wrapper.fade-text #loading-text {
  opacity: 0;
  transform: translate(-50%, -60%);
}

#loading-text img {
  width: 60px;
  height: auto;
}
