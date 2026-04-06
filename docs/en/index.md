---
layout: home

hero:
  name: "Human Cosmos"
  text: "Rediscover Your Body"
  tagline: "Decoding ancient Eastern wisdom through quantum biology, neuroscience, and fascia anatomy. No mysticism, just science."
  actions:
    - theme: brand
      text: Start Exploring
      link: /en/core/intro
    - theme: alt
      text: GitHub
      link: https://github.com/

features:
  - icon: 🧬
    title: The Architecture of Consciousness
    details: Your brain is not consciousness itself — it's a receiver. Awareness, thought, brain — how do these three layers work together?
    link: /en/core/intro
    linkText: Learn more

  - icon: ⚡
    title: Energy & Meridian Science
    details: Qi is not a mystical concept — it's measurable piezoelectric effects and hydraulic wave conduction within the fascia network.
    link: /en/body/intro
    linkText: Learn more

  - icon: 🔬
    title: How Thoughts Change Cells
    details: Every negative thought triggers cortisol storms, free radical attacks, and telomere erosion. Karma is quantifiable cellular damage.
    link: /en/core/karma
    linkText: Learn more

  - icon: 🌊
    title: "Fascia: The Hidden Network"
    details: A 3D connective tissue web throughout your body that stores emotions, conducts energy, and maintains structure.
    link: /en/body/fascia
    linkText: Learn more

  - icon: 💎
    title: The Physics of Karma
    details: "Virtue is a high-frequency ordered energy template. Karma is a low-frequency chaotic energy knot. Both are transformable biofield states."
    link: /en/core/karma
    linkText: Learn more

  - icon: 🛠️
    title: Actionable Practice Guide
    details: From breath tuning to fascia care, from attention training to energy field purification — every step is verifiable.
    link: /en/practice/intro
    linkText: Learn more
---

<div class="video-showcase">
  <h2 class="video-showcase__title">🎬 Video Guide</h2>
  <p class="video-showcase__desc">Quickly understand the core concepts of 人体宇宙 through video</p>
  <div class="video-showcase__grid">
    <div class="video-showcase__card" @mouseenter="e => { const v = e.currentTarget.querySelector('video'); v.muted = true; v.play().catch(() => {}); }" @mouseleave="e => { const v = e.currentTarget.querySelector('video'); v.pause(); v.currentTime = 0; }">
      <div class="video-showcase__wrapper">
        <video muted preload="metadata" playsinline loop poster="/media/image1.jpg">
          <source src="/media/video1.mp4" type="video/mp4">
        </video>
        <div class="video-showcase__overlay">
          <span class="video-showcase__play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
          </span>
          <span class="video-showcase__play-text">Hover to play</span>
        </div>
      </div>
    </div>
    <div class="video-showcase__card" @mouseenter="e => { const v = e.currentTarget.querySelector('video'); v.muted = true; v.play().catch(() => {}); }" @mouseleave="e => { const v = e.currentTarget.querySelector('video'); v.pause(); v.currentTime = 0; }">
      <div class="video-showcase__wrapper">
        <video muted preload="metadata" playsinline loop poster="/media/image1.jpg">
          <source src="/media/video2.mp4" type="video/mp4">
        </video>
        <div class="video-showcase__overlay">
          <span class="video-showcase__play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
          </span>
          <span class="video-showcase__play-text">Hover to play</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.video-showcase { max-width: 1152px; margin: 0 auto; padding: 24px 24px 64px; }
.video-showcase__title { font-size: 1.6rem; font-weight: 700; text-align: center; margin: 0 0 8px; color: var(--vp-c-text-1); }
.video-showcase__desc { text-align: center; color: var(--vp-c-text-2); font-size: 0.95rem; margin: 0 0 32px; }
.video-showcase__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
.video-showcase__card { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 16px; overflow: hidden; transition: box-shadow 0.3s ease, transform 0.3s ease; }
.video-showcase__card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.1); transform: translateY(-2px); }
.video-showcase__wrapper { position: relative; padding-top: 56.25%; }
.video-showcase__wrapper video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block; cursor: pointer; }
.video-showcase__overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: rgba(0,0,0,0.35); pointer-events: none; transition: opacity 0.35s ease; }
.video-showcase__play-btn { display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,0.2); backdrop-filter: blur(6px); border: 2px solid rgba(255,255,255,0.5); color: #fff; transition: transform 0.3s ease, background 0.3s ease; }
.video-showcase__card:hover .video-showcase__play-btn { transform: scale(1.1); background: rgba(255,255,255,0.3); }
.video-showcase__play-text { font-size: 0.85rem; color: rgba(255,255,255,0.85); letter-spacing: 0.05em; font-weight: 500; }
.video-showcase__card:hover .video-showcase__overlay { opacity: 0; }
@media (max-width: 640px) { .video-showcase__grid { grid-template-columns: 1fr; gap: 20px; } .video-showcase__title { font-size: 1.3rem; } }
</style>
