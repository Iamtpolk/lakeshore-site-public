(function () {
  "use strict";

  if (window.__lakeshoreWhyChooseLoaded) return;
  window.__lakeshoreWhyChooseLoaded = true;

  var features = [
    {
      key: "local",
      title: "Local Louisiana Knowledge",
      text: "We work Acadiana every day. From flood-zone considerations and insurance costs to neighborhood trends and property conditions, our local experience helps you make decisions based on what is actually happening here.",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>'
    },
    {
      key: "team",
      title: "A Team From Start to Finish",
      text: "You have a clear point of contact supported by specialists who understand their roles. Your transaction stays coordinated from the first conversation through closing.",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20M15 14.2a4 4 0 0 1 5.5 3.7V20"/></svg>'
    },
    {
      key: "communication",
      title: "Clear, Consistent Communication",
      text: "You will know where your transaction stands without having to ask. We communicate honestly about pricing, timelines, challenges, and next steps.",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5A7 7 0 0 1 3 12V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z"/><path d="M8 10h8M8 14h5"/></svg>'
    },
    {
      key: "experience",
      title: "Experience Across Property Types",
      text: "Residential, commercial, land, investment, and distressed properties - experience across multiple transaction types means you are not limited to one lane.",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-7h6v7M8 10h.01M16 10h.01"/></svg>'
    },
    {
      key: "exp",
      title: "Backed by eXp Realty",
      text: "Local guidance supported by the technology, reach, tools, and resources of a national brokerage.",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v5c0 5 3.4 7.8 8 9 4.6-1.2 8-4 8-9V7l-8-4Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>'
    }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>\"]/g, function (character) {
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[character];
    });
  }

  function card(feature, index) {
    return '<article class="lst-why-card lst-why-card--' + feature.key + '" data-lst-tilt>' +
      '<div class="lst-why-card-light" aria-hidden="true"></div>' +
      '<div class="lst-why-number" aria-hidden="true">0' + (index + 1) + '</div>' +
      '<div class="lst-why-icon">' + feature.icon + '</div>' +
      '<div class="lst-why-copy"><h3>' + escapeHtml(feature.title) + '</h3><p>' + escapeHtml(feature.text) + '</p></div>' +
    '</article>';
  }

  var css = `
    #lst-why-root { order:7!important;position:relative;overflow:hidden;padding:clamp(76px,8vw,118px) 24px;color:#f6f2e8;background:radial-gradient(circle at 14% 8%,rgba(177,154,85,.14),transparent 29%),radial-gradient(circle at 84% 90%,rgba(92,111,91,.13),transparent 30%),linear-gradient(145deg,#111512,#1a211c 52%,#101310);border-top:1px solid rgba(177,154,85,.14);border-bottom:1px solid rgba(177,154,85,.14); }
    #lst-why-root * { box-sizing:border-box; }
    #lst-why-root::before { content:"";position:absolute;inset:0;pointer-events:none;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(180deg,#000,transparent 90%);-webkit-mask-image:linear-gradient(180deg,#000,transparent 90%); }
    .lst-why-wrap { position:relative;z-index:1;max-width:1400px;margin:0 auto; }
    .lst-why-head { display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.7fr);align-items:end;gap:42px;margin-bottom:clamp(38px,5vw,62px); }
    .lst-why-kicker { margin:0 0 14px;color:#c7b36f;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.21em;text-transform:uppercase; }
    .lst-why-head h2 { max-width:780px;margin:0;color:#fff;font:500 clamp(40px,5vw,70px)/1.02 Georgia,serif;letter-spacing:-.03em; }
    .lst-why-intro { max-width:52ch;margin:0 0 5px;color:rgba(255,255,255,.67);font:400 15px/1.75 Inter,Arial,sans-serif; }
    .lst-why-grid { display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:20px;perspective:1400px; }
    .lst-why-card { --rx:0deg;--ry:0deg;--mx:50%;--my:50%;position:relative;display:flex;min-height:264px;flex-direction:column;justify-content:space-between;overflow:hidden;padding:28px;border:1px solid rgba(255,255,255,.145);border-radius:24px;background:linear-gradient(145deg,rgba(255,255,255,.115),rgba(255,255,255,.045));box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 25px 55px rgba(0,0,0,.22);backdrop-filter:blur(18px) saturate(120%);-webkit-backdrop-filter:blur(18px) saturate(120%);transform:rotateX(var(--rx)) rotateY(var(--ry)) translateY(14px);transform-style:preserve-3d;opacity:0;transition:transform .45s cubic-bezier(.2,.75,.2,1),opacity .65s ease,border-color .3s ease,box-shadow .3s ease; }
    .lst-why-card.is-visible { opacity:1;transform:rotateX(var(--rx)) rotateY(var(--ry)) translateY(0); }
    .lst-why-card:hover { border-color:rgba(205,187,134,.52);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 34px 70px rgba(0,0,0,.3),0 12px 36px rgba(177,154,85,.09); }
    .lst-why-card--local,.lst-why-card--team { grid-column:span 6;min-height:300px; }
    .lst-why-card--communication,.lst-why-card--experience,.lst-why-card--exp { grid-column:span 4; }
    .lst-why-card-light { position:absolute;inset:0;pointer-events:none;opacity:0;background:radial-gradient(circle at var(--mx) var(--my),rgba(219,201,144,.2),transparent 31%);transition:opacity .3s ease; }
    .lst-why-card:hover .lst-why-card-light { opacity:1; }
    .lst-why-number { position:absolute;right:24px;top:22px;color:rgba(255,255,255,.19);font:600 11px/1 Inter,Arial,sans-serif;letter-spacing:.14em; }
    .lst-why-icon { position:relative;z-index:1;display:flex;width:52px;height:52px;align-items:center;justify-content:center;color:#d0bc7b;border:1px solid rgba(208,188,123,.37);border-radius:15px;background:rgba(177,154,85,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 10px 25px rgba(0,0,0,.15);transform:translateZ(18px); }
    .lst-why-icon svg { width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round; }
    .lst-why-copy { position:relative;z-index:1;max-width:60ch;margin-top:42px;transform:translateZ(12px); }
    .lst-why-copy h3 { margin:0 0 13px;color:#fff;font:500 clamp(23px,2.1vw,31px)/1.12 Georgia,serif;letter-spacing:-.015em; }
    .lst-why-copy p { margin:0;color:rgba(255,255,255,.67);font:400 13px/1.68 Inter,Arial,sans-serif; }
    body.home .page-content>.md-house { order:6!important; }
    body.home .page-content>#lst-why-root { order:7!important; }
    body.home .page-content>#lst-reviews-root { order:8!important; }
    body.home .page-content>#lst-team-root { order:9!important; }
    body.home .page-content>.md-footer { order:10!important; }
    @media(max-width:980px){.lst-why-head{grid-template-columns:1fr;gap:20px}.lst-why-intro{max-width:64ch}.lst-why-card--local,.lst-why-card--team{grid-column:span 6}.lst-why-card--communication,.lst-why-card--experience{grid-column:span 6}.lst-why-card--exp{grid-column:4/span 6}.lst-why-card{min-height:270px}}
    @media(max-width:650px){#lst-why-root{padding:64px 16px}.lst-why-head h2{font-size:42px}.lst-why-grid{display:flex;flex-direction:column;gap:16px}.lst-why-card{min-height:0;padding:24px;transform:none!important;opacity:1}.lst-why-card--local,.lst-why-card--team{min-height:0}.lst-why-copy{margin-top:34px}.lst-why-copy h3{font-size:25px}}
    @media(hover:none),(prefers-reduced-motion:reduce){.lst-why-card{transform:none!important;opacity:1;transition:border-color .2s ease,box-shadow .2s ease}.lst-why-card-light{display:none}}
  `;

  function activateCards(section) {
    var cards = Array.prototype.slice.call(section.querySelectorAll("[data-lst-tilt]"));
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var touch = window.matchMedia("(hover: none)").matches;
    if (!reduced && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var index = cards.indexOf(entry.target);
            setTimeout(function () { entry.target.classList.add("is-visible"); }, Math.max(0,index) * 80);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold:.16 });
      cards.forEach(function (card) { observer.observe(card); });
    } else {
      cards.forEach(function (card) { card.classList.add("is-visible"); });
    }
    if (reduced || touch) return;
    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width;
        var y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--ry", ((x - .5) * 5).toFixed(2) + "deg");
        card.style.setProperty("--rx", ((.5 - y) * 4).toFixed(2) + "deg");
        card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--rx", "0deg");
      });
    });
  }

  function build() {
    if (document.getElementById("lst-why-root")) return;
    var house = document.querySelector("body.home .md-house");
    var footer = document.querySelector("body.home .md-footer");
    if (!house || !footer || !footer.parentNode) return;
    var section = document.createElement("section");
    section.id = "lst-why-root";
    section.setAttribute("aria-labelledby", "lst-why-heading");
    section.innerHTML = '<div class="lst-why-wrap"><header class="lst-why-head"><div><p class="lst-why-kicker">Why Choose Lakeshore Team</p><h2 id="lst-why-heading">Local insight. Clear guidance. One committed team.</h2></div><p class="lst-why-intro">Real estate decisions carry real weight. We combine Louisiana market knowledge, straightforward communication, and coordinated expertise to help you move with confidence.</p></header><div class="lst-why-grid">' + features.map(card).join("") + '</div></div>';
    footer.parentNode.insertBefore(section, footer);
    activateCards(section);
  }

  if (!document.getElementById("lakeshore-why-choose-styles")) {
    var style = document.createElement("style");
    style.id = "lakeshore-why-choose-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }
  build();
  new MutationObserver(build).observe(document.documentElement,{childList:true,subtree:true});
})();

