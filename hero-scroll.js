(function () {
  "use strict";
  if (window.__lakeshoreHeroScrollLoaded) return;
  window.__lakeshoreHeroScrollLoaded = true;

  var IMAGE = "https://cdn.jsdelivr.net/gh/Iamtpolk/lakeshore-site-public@a99370882624406e1a0c41fb1f2f1620eb86474f/assets/hero/louisiana-luxury-home.webp";
  var css = `
    body.home .md-hero{--lst-hero-progress:0;position:relative;overflow:hidden;background:#10191f!important}
    body.home .md-hero .banner,body.home .md-hero .banner.single{height:560px!important;min-height:560px!important;max-height:560px!important;overflow:hidden!important}
    body.home .md-hero .single-picture{background-image:url("${IMAGE}")!important;background-position:center 58%!important;background-size:cover!important;will-change:transform;transform:scale(calc(1.025 + var(--lst-hero-progress) * .045)) translate3d(0,calc(var(--lst-hero-progress) * 10px),0);transform-origin:center 60%;transition:filter .3s ease;filter:saturate(.94) contrast(1.03)}
    body.home .md-hero .banner-mask{background:linear-gradient(90deg,rgba(13,18,20,.64),rgba(13,18,20,.38) 48%,rgba(13,18,20,.5))!important}
    body.home .md-hero .media-content-v2{will-change:transform,opacity;transform:translate3d(0,calc(var(--lst-hero-progress) * -30px),0);opacity:calc(1 - var(--lst-hero-progress) * .42)}
    body.home .md-hero .site-title h1{text-shadow:0 3px 22px rgba(0,0,0,.5)}
    body.home .md-hero::after{content:"";position:absolute;z-index:3;left:0;right:0;bottom:0;height:90px;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(15,18,17,.32));opacity:calc(.3 + var(--lst-hero-progress) * .7)}
    @media(max-width:720px){body.home .md-hero .single-picture{background-position:center 58%!important;transform:scale(calc(1.015 + var(--lst-hero-progress) * .02))}body.home .md-hero .media-content-v2{transform:translate3d(0,calc(var(--lst-hero-progress) * -14px),0);opacity:calc(1 - var(--lst-hero-progress) * .22)}}
    @media(prefers-reduced-motion:reduce){body.home .md-hero{--lst-hero-progress:0!important}body.home .md-hero .single-picture,body.home .md-hero .media-content-v2{transform:none!important;opacity:1!important;will-change:auto!important}}
  `;

  function activate() {
    var hero = document.querySelector("body.home .md-hero");
    if (!hero || hero.__lstHeroActivated) return;
    hero.__lstHeroActivated = true;
    var preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "image";
    preload.href = IMAGE;
    document.head.appendChild(preload);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var ticking = false;
    function update() {
      var rect = hero.getBoundingClientRect();
      var progress = Math.max(0,Math.min(1,-rect.top / Math.max(1,rect.height)));
      hero.style.setProperty("--lst-hero-progress",progress.toFixed(4));
      ticking = false;
    }
    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener("scroll",requestUpdate,{passive:true});
    window.addEventListener("resize",requestUpdate,{passive:true});
  }

  if (!document.getElementById("lakeshore-hero-scroll-style")) {
    var style = document.createElement("style");
    style.id = "lakeshore-hero-scroll-style";
    style.textContent = css;
    document.head.appendChild(style);
  }
  activate();
  new MutationObserver(activate).observe(document.documentElement,{childList:true,subtree:true});
})();