(function () {
  "use strict";
  if (window.__lakeshoreHeroScrollLoaded) return;
  window.__lakeshoreHeroScrollLoaded = true;

  var IMAGE = "https://cdn.jsdelivr.net/gh/Iamtpolk/lakeshore-site-public@a99370882624406e1a0c41fb1f2f1620eb86474f/assets/hero/louisiana-luxury-home.webp";
  var css = `
    body.home .md-hero{--lst-hero-progress:0;position:relative;overflow:hidden;background:#10191f!important}
    body.home .md-hero .banner,body.home .md-hero .banner.single{height:clamp(680px,48vw,820px)!important;min-height:680px!important;max-height:820px!important;overflow:hidden!important;background:#10191f!important}
    body.home .md-hero .single-picture{background-color:#10191f!important;background-image:url("${IMAGE}")!important;background-position:center 58%!important;background-repeat:no-repeat!important;background-size:cover!important;will-change:transform;transform:scale(calc(1.012 + var(--lst-hero-progress) * .025)) translate3d(0,calc(var(--lst-hero-progress) * 8px),0);transform-origin:center 58%;transition:filter .3s ease;filter:saturate(.94) contrast(1.03)}
    body.home .md-hero .banner-mask{background:linear-gradient(90deg,rgba(13,18,20,.64),rgba(13,18,20,.38) 48%,rgba(13,18,20,.5))!important}
    body.home .md-hero .media-content-v2{width:100%!important;padding-inline:clamp(28px,7vw,150px)!important;box-sizing:border-box!important;will-change:transform,opacity;transform:translate3d(0,calc(var(--lst-hero-progress) * -30px),0);opacity:calc(1 - var(--lst-hero-progress) * .42)}
    body.home .md-hero .media-info,body.home .md-hero .title-text{width:100%!important;max-width:1280px!important;margin-inline:auto!important}
    body.home .md-hero .media-info{transform:translateY(clamp(-76px,-5vw,-42px))!important}
    body.home .md-hero .title-text{display:flex!important;flex-direction:column!important;align-items:center!important;gap:clamp(14px,1.2vw,20px)!important}
    body.home .md-hero .site-title{width:100%!important;max-width:none!important;margin:0!important;text-align:center!important}
    body.home .md-hero .site-title[aria-level="1"] h1{max-width:1020px!important;margin:0 auto!important;font-size:clamp(46px,3.65vw,66px)!important;line-height:1.04!important;letter-spacing:-.025em!important;text-wrap:balance;text-align:center!important;text-shadow:0 3px 22px rgba(0,0,0,.62)}
    body.home .md-hero .site-title[aria-level="3"]{max-width:790px!important;margin-inline:auto!important;font-size:clamp(17px,1.1vw,20px)!important;line-height:1.5!important;text-wrap:balance;text-align:center!important;text-shadow:0 2px 16px rgba(0,0,0,.68)}
    body.home .md-hero::after{content:"";position:absolute;z-index:3;left:0;right:0;bottom:0;height:90px;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(15,18,17,.32));opacity:calc(.3 + var(--lst-hero-progress) * .7)}
    @media(max-width:900px){body.home .md-hero .media-content-v2{padding-inline:clamp(24px,6vw,52px)!important}body.home .md-hero .media-info{transform:translateY(-42px)!important}body.home .md-hero .site-title[aria-level="1"] h1{font-size:clamp(42px,7vw,58px)!important;max-width:820px!important}body.home .md-hero .site-title[aria-level="3"]{max-width:680px!important;font-size:17px!important}}
    @media(max-width:720px){body.home .md-hero .banner,body.home .md-hero .banner.single{height:600px!important;min-height:600px!important;max-height:600px!important}body.home .md-hero .single-picture{background-position:center 58%!important;background-size:cover!important;transform:scale(calc(1.015 + var(--lst-hero-progress) * .02))}body.home .md-hero .media-content-v2{padding-inline:24px!important;transform:translate3d(0,calc(var(--lst-hero-progress) * -14px),0);opacity:calc(1 - var(--lst-hero-progress) * .22)}body.home .md-hero .media-info{transform:translateY(-28px)!important}body.home .md-hero .title-text{gap:14px!important}body.home .md-hero .site-title[aria-level="1"] h1{font-size:clamp(38px,10vw,46px)!important;line-height:1.05!important;max-width:560px!important}body.home .md-hero .site-title[aria-level="3"]{max-width:500px!important;font-size:16px!important;line-height:1.45!important}}
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

