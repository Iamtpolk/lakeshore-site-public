/* Lakeshore Team homepage hero refresh: left-aligned headline, real buttons,
   floating search bar. Loads after hero-scroll.js; keeps its parallax. */
(function () {
  "use strict";
  if (window.__lakeshoreHeroRefreshLoaded) return;
  window.__lakeshoreHeroRefreshLoaded = true;

  var EYEBROW = "Lafayette &middot; Lake Charles &middot; Acadiana Real Estate";
  var HEAD = 'Home starts <em>here.</em>';
  var SUB = "Honest advice and steady guidance for buyers, sellers, and families moving across South Louisiana.";

  var css = [
    "body.home .md-hero .banner-mask{background:linear-gradient(90deg,rgba(11,15,17,.86) 0%,rgba(11,15,17,.66) 32%,rgba(11,15,17,.22) 60%,rgba(11,15,17,.05) 80%),linear-gradient(180deg,rgba(11,15,17,.35) 0%,transparent 22%,transparent 70%,rgba(11,15,17,.55) 100%)!important}",
    "body.home .md-hero .single-picture{background-position:62% 64%!important;transform-origin:62% 64%!important}",
    "body.home .md-hero .media-content-v2{display:flex!important;flex-direction:column!important;justify-content:center!important;align-items:flex-start!important;height:100%!important;padding-top:60px!important;padding-inline:clamp(28px,8vw,170px)!important}",
    "body.home .md-hero .media-info{transform:none!important;width:100%!important;max-width:1280px!important;margin-inline:auto!important}",
    "body.home .md-hero .title-text{align-items:flex-start!important;gap:0!important;max-width:640px!important;margin:0!important}",
    "body.home .md-hero .site-title{text-align:left!important}",
    "body.home .md-hero .title-text h1{max-width:none!important;margin:0!important;text-align:left!important;font-family:Georgia,'Times New Roman',serif!important;font-weight:400!important;font-size:clamp(56px,4.6vw,108px)!important;line-height:.98!important;letter-spacing:-.035em!important;text-shadow:0 2px 30px rgba(0,0,0,.35)!important;color:#fff!important}",
    ".lst-hero-eyebrow{display:flex;align-items:center;gap:14px;margin:0 0 26px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.22em;line-height:1.5;text-transform:uppercase;color:#d7be7c;text-shadow:none}",
    ".lst-hero-eyebrow:before{content:'';width:34px;height:1px;background:#d7be7c;flex:0 0 34px}",
    ".lst-hero-head{display:block}.lst-hero-head em{font-style:italic;color:#e6d3a3}",
    "body.home .md-hero .title-text .site-title.lst-hero-sub{max-width:520px!important;margin:28px 0 0!important;text-align:left!important;font-family:Arial,Helvetica,sans-serif!important;font-size:clamp(16px,1.15vw,19px)!important;line-height:1.65!important;color:rgba(255,255,255,.82)!important;text-shadow:none!important}",
    "body.home .md-hero .title-text .site-title.lst-hero-sub *{font-family:inherit!important;font-size:inherit!important;color:inherit!important;text-align:left!important}",
    ".lst-hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:38px}",
    ".lst-hero-btn{display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 28px;border-radius:999px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;text-decoration:none!important;transition:transform .2s ease,background .2s ease,border-color .2s ease}",
    ".lst-hero-btn:hover{transform:translateY(-2px)}",
    ".lst-hero-btn.primary{background:#d7be7c;color:#1b1610!important;box-shadow:0 14px 34px rgba(0,0,0,.28)}.lst-hero-btn.primary:hover{background:#e6d3a3}",
    ".lst-hero-btn.ghost{border:1px solid rgba(255,255,255,.42);color:#fff!important;background:rgba(255,255,255,.06);backdrop-filter:blur(8px)}.lst-hero-btn.ghost:hover{border-color:#fff;background:rgba(255,255,255,.14)}",
    "body.home .md-hero::after{display:none!important}",
    /* search bar floats over the bottom edge of the photo */
    "body.home .md-listing-search{position:relative!important;z-index:6!important;margin-top:-56px!important;padding:0 20px 34px!important;background:linear-gradient(180deg,transparent 56px,#f4efe7 56px)!important;box-shadow:none!important;border:0!important}",
    "body.home .md-listing-search .search-content{width:fit-content!important;max-width:100%!important;margin:0 auto!important;padding:18px 22px!important;border-radius:20px!important;background:#fffdf9!important;box-shadow:0 24px 60px rgba(17,20,22,.22),0 2px 6px rgba(17,20,22,.08)!important;box-sizing:border-box!important}",
    "@media(max-width:900px){body.home .md-hero .banner-mask{background:linear-gradient(180deg,rgba(11,15,17,.45) 0%,rgba(11,15,17,.55) 40%,rgba(11,15,17,.82) 100%)!important}body.home .md-hero .media-content-v2{align-items:flex-end!important;padding-bottom:90px!important}body.home .md-hero .title-text h1{font-size:clamp(46px,11vw,64px)!important}.lst-hero-eyebrow{font-size:10.5px;letter-spacing:.18em;margin-bottom:18px}.lst-hero-actions{margin-top:28px}body.home .md-listing-search{margin-top:-40px!important;background:linear-gradient(180deg,transparent 40px,#f4efe7 40px)!important}body.home .md-listing-search .search-content{padding:14px!important}}",
    "@media(max-width:520px){.lst-hero-actions{display:grid;grid-template-columns:1fr;width:100%}.lst-hero-btn{justify-content:center}}"
  ].join("\n");

  function apply() {
    var hero = document.querySelector("body.home .md-hero");
    if (!hero) return;
    var h1 = hero.querySelector(".title-text h1") || hero.querySelector("h1");
    var titleBox = h1.closest(".site-title");
    var sub = titleBox && titleBox.nextElementSibling && titleBox.nextElementSibling.classList.contains("site-title") ? titleBox.nextElementSibling : null;
    if (sub) sub.classList.add("lst-hero-sub");
    if (!h1 || h1.getAttribute("data-lst-hero")) return;
    h1.setAttribute("data-lst-hero", "1");
    h1.innerHTML = '<span class="lst-hero-eyebrow">' + EYEBROW + '</span><span class="lst-hero-head">' + HEAD + "</span>";
    if (sub) {
      sub.innerHTML = '<p style="margin:0">' + SUB + "</p>";
      var actions = document.createElement("div");
      actions.className = "lst-hero-actions";
      actions.innerHTML = '<a class="lst-hero-btn primary" href="/contact">Start your move <span aria-hidden="true">&rarr;</span></a><a class="lst-hero-btn ghost" href="/listing">Search homes</a>';
      sub.parentNode.insertBefore(actions, sub.nextSibling);
    }
  }

  if (!document.getElementById("lakeshore-hero-refresh-style")) {
    var style = document.createElement("style");
    style.id = "lakeshore-hero-refresh-style";
    style.textContent = css;
    document.head.appendChild(style);
  }
  apply();
  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
})();
