---
layout: home

hero:
  name: "HUMAN_OS"
  text: "重新认识你的身体"
  tagline: "用量子生物学、神经科学与筋膜解剖学的语言，翻译东方生命智慧。不玄学，只讲科学。"
  actions:
    - theme: brand
      text: 开始探索
      link: /core/intro
    - theme: alt
      text: GitHub
      link: https://github.com/

features:
  - icon: 🧬
    title: 意识的深层结构
    details: 大脑不是意识本身，而是接收器。觉知、念头、大脑三层结构如何协同运作？
    link: /core/intro
    linkText: 深入了解 →

  - icon: ⚡
    title: 能量与经络
    details: 气是筋膜网络中可测量的压电效应与液压波传导。经络的解剖学真相正在被验证。
    link: /body/intro
    linkText: 深入了解 →

  - icon: 🔬
    title: 念头与细胞
    details: 每个念头都触发皮质醇释放、自由基攻击和端粒磨损——可量化的细胞级损伤。
    link: /core/karma
    linkText: 深入了解 →

  - icon: 🌊
    title: 筋膜网络
    details: 遍布全身的结缔组织网络，储存情绪、传导能量、维持形态。理顺筋膜即清理阻碍。
    link: /body/fascia
    linkText: 深入了解 →

  - icon: 💎
    title: 德与业的物理
    details: 高频有序的能量模板与低频混沌的能量结——可转化的生物电磁场状态。
    link: /core/karma
    linkText: 深入了解 →

  - icon: 🛠️
    title: 实践指南
    details: 从呼吸调频到筋膜保养，从注意力训练到能量场净化——每一步可验证。
    link: /practice/intro
    linkText: 深入了解 →
---

<div class="video-showcase">
  <h2 class="video-showcase__title">🎬 视频导览</h2>
  <p class="video-showcase__desc">通过视频快速了解 HUMAN_OS 的核心理念</p>
  <div class="video-showcase__grid">
    <div class="video-showcase__card" @mouseenter="e => { const v = e.currentTarget.querySelector('video'); v.muted = true; v.play(); }" @mouseleave="e => { const v = e.currentTarget.querySelector('video'); v.pause(); v.currentTime = 0; }">
      <div class="video-showcase__wrapper">
        <video muted preload="metadata" playsinline loop poster="/media/image1.jpg">
          <source src="/media/video1.mp4" type="video/mp4">
        </video>
        <div class="video-showcase__overlay">
          <span class="video-showcase__play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
          </span>
          <span class="video-showcase__play-text">悬停播放</span>
        </div>
      </div>
    </div>
    <div class="video-showcase__card" @mouseenter="e => { const v = e.currentTarget.querySelector('video'); v.muted = true; v.play(); }" @mouseleave="e => { const v = e.currentTarget.querySelector('video'); v.pause(); v.currentTime = 0; }">
      <div class="video-showcase__wrapper">
        <video muted preload="metadata" playsinline loop poster="/media/image1.jpg">
          <source src="/media/video2.mp4" type="video/mp4">
        </video>
        <div class="video-showcase__overlay">
          <span class="video-showcase__play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
          </span>
          <span class="video-showcase__play-text">悬停播放</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.video-showcase {
  max-width: 1152px;
  margin: 0 auto;
  padding: 24px 24px 64px;
}

.video-showcase__title {
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.video-showcase__desc {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin: 0 0 32px;
}

.video-showcase__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.video-showcase__card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.video-showcase__card:hover {
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.video-showcase__wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 */
}

.video-showcase__wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
}

.video-showcase__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.35);
  pointer-events: none;
  transition: opacity 0.35s ease;
}

.video-showcase__play-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  transition: transform 0.3s ease, background 0.3s ease;
}

.video-showcase__card:hover .video-showcase__play-btn {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

.video-showcase__play-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.05em;
  font-weight: 500;
}

.video-showcase__card:hover .video-showcase__overlay {
  opacity: 0;
}

@media (max-width: 640px) {
  .video-showcase__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .video-showcase__title {
    font-size: 1.3rem;
  }
}
</style>
