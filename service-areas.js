(function () {
  "use strict";

  if (window.__lakeshoreServiceAreasLoaded) return;
  window.__lakeshoreServiceAreasLoaded = true;

  var areas = [
    { name:"Lafayette", city:"Lafayette, LA", region:"Acadiana", note:"Culture, commerce, and connected neighborhoods at the heart of Acadiana.", tone:"gold" },
    { name:"Youngsville", city:"Youngsville, LA", region:"Lafayette Parish", note:"Growing communities, newer construction, and a welcoming hometown feel.", tone:"cream" },
    { name:"Broussard", city:"Broussard, LA", region:"Lafayette Parish", note:"Established neighborhoods with convenient access to the places you go every day.", tone:"maroon" },
    { name:"Lake Charles", city:"Lake Charles, LA", region:"Southwest Louisiana", note:"Homes, land, and investment opportunities across the Lake Area.", tone:"charcoal" },
    { name:"Surrounding Areas", href:"/listing", region:"South Louisiana", note:"Guidance across Acadiana, Calcasieu Parish, and the communities in between.", tone:"olive" }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>\"]/g, function (character) {
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[character];
    });
  }

  function citySearch(city) {
    var condition = JSON.stringify({ location:{ city:[city] } });
    return "/listing?listingSource=all%20listings&condition=" + encodeURIComponent(condition) + "&uiConfig=%7B%7D&zoom=12&page=1";
  }

  function panel(area, index) {
    var href = area.href || citySearch(area.city);
    var label = area.city ? "Search homes in " + area.name : "Search homes across South Louisiana";
    return '<a class="lst-area-panel lst-area-panel--' + area.tone + '" href="' + escapeHtml(href) + '" aria-label="' + escapeHtml(label) + '">' +
      '<span class="lst-area-lines" aria-hidden="true"></span>' +
      '<span class="lst-area-index" aria-hidden="true">0' + (index + 1) + '</span>' +
      '<span class="lst-area-content"><small>' + escapeHtml(area.region) + '</small><strong>' + escapeHtml(area.name) + '</strong><span class="lst-area-note">' + escapeHtml(area.note) + '</span><span class="lst-area-link">Explore the area <b aria-hidden="true">&rarr;</b></span></span>' +
    '</a>';
  }

  var css = `
    #lst-areas-root{order:9!important;position:relative;overflow:hidden;padding:clamp(74px,8vw,116px) 24px;color:#202322;background:radial-gradient(circle at 90% 12%,rgba(185,144,82,.2),transparent 29%),radial-gradient(circle at 8% 88%,rgba(36,15,14,.07),transparent 28%),linear-gradient(145deg,#f8f7f2,#eee9de);border-top:1px solid rgba(185,144,82,.2);border-bottom:1px solid rgba(36,15,14,.12)}
    #lst-areas-root *{box-sizing:border-box}
    #lst-areas-root::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.36;background-image:radial-gradient(circle at center,rgba(36,15,14,.12) 1px,transparent 1.4px);background-size:26px 26px;mask-image:linear-gradient(115deg,transparent,#000 45%,transparent 90%);-webkit-mask-image:linear-gradient(115deg,transparent,#000 45%,transparent 90%)}
    .lst-areas-wrap{position:relative;z-index:1;max-width:1440px;margin:0 auto}
    .lst-areas-head{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(300px,.65fr);align-items:end;gap:42px;margin-bottom:clamp(36px,4.5vw,58px)}
    .lst-areas-kicker{margin:0 0 14px;color:#240f0e;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.21em;text-transform:uppercase}
    .lst-areas-head h2{max-width:790px;margin:0;color:#202322;font:500 clamp(40px,5vw,70px)/1.02 Georgia,serif;letter-spacing:-.03em}
    .lst-areas-intro{max-width:52ch;margin:0 0 5px;color:#656159;font:400 15px/1.75 Inter,Arial,sans-serif}
    .lst-areas-panels{display:flex;height:clamp(430px,41vw,580px);gap:14px}
    .lst-area-panel{--panel:#7d6e4e;position:relative;display:flex;flex:1;min-width:0;overflow:hidden;align-items:flex-end;padding:25px;color:#f8f7f2!important;border:1px solid rgba(255,255,255,.22);border-radius:24px;background:linear-gradient(165deg,color-mix(in srgb,var(--panel) 88%,#fff 12%),color-mix(in srgb,var(--panel) 72%,#000 28%));box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 24px 48px rgba(43,35,26,.16);text-decoration:none!important;isolation:isolate;transition:flex .55s cubic-bezier(.2,.72,.2,1),transform .3s ease,box-shadow .3s ease,border-color .3s ease}
    .lst-area-panel::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(255,255,255,.1),transparent 38%,rgba(20,8,8,.58));transition:background .35s ease}
    .lst-area-panel::after{content:"";position:absolute;right:-75px;top:-78px;width:230px;height:230px;border:1px solid rgba(255,255,255,.22);border-radius:50%;box-shadow:0 0 0 27px rgba(255,255,255,.045),0 0 0 58px rgba(255,255,255,.03);opacity:.8}
    .lst-area-panel--gold{--panel:#8c754a}.lst-area-panel--cream{--panel:#8a7658}.lst-area-panel--maroon{--panel:#240f0e}.lst-area-panel--charcoal{--panel:#202322}.lst-area-panel--olive{--panel:#5f5a45}
    .lst-area-panel:hover,.lst-area-panel:focus-visible{flex:1.85;transform:translateY(-6px);border-color:rgba(234,217,166,.72);box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 32px 64px rgba(43,35,26,.25)}
    .lst-area-panel:focus-visible{outline:3px solid #b89052;outline-offset:4px}
    .lst-area-lines{position:absolute;inset:0;z-index:-1;opacity:.24;background:repeating-radial-gradient(ellipse at 82% 18%,transparent 0 22px,rgba(255,255,255,.32) 23px 24px,transparent 25px 42px)}
    .lst-area-index{position:absolute;left:24px;top:23px;color:rgba(248,247,242,.72);font:700 11px/1 Inter,Arial,sans-serif;letter-spacing:.16em}
    .lst-area-content{position:relative;z-index:1;display:flex;min-width:0;flex-direction:column;align-items:flex-start}
    .lst-area-content small{margin-bottom:10px;color:#ead9a6;font:700 10px/1.2 Inter,Arial,sans-serif;letter-spacing:.15em;text-transform:uppercase;white-space:nowrap}
    .lst-area-content strong{max-width:100%;color:#fff;font:500 clamp(25px,2.4vw,38px)/1.03 Georgia,serif;letter-spacing:-.02em;overflow-wrap:anywhere}
    .lst-area-note{max-width:38ch;max-height:0;margin-top:0;overflow:hidden;color:rgba(248,247,242,.8);font:400 13px/1.62 Inter,Arial,sans-serif;opacity:0;transform:translateY(8px);transition:max-height .45s ease,margin .45s ease,opacity .28s ease .08s,transform .35s ease .08s}
    .lst-area-link{display:inline-flex;max-height:0;align-items:center;gap:8px;overflow:hidden;margin-top:0;color:#ead9a6;font:700 10px/1.2 Inter,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;opacity:0;transition:max-height .45s ease,margin .45s ease,opacity .3s ease .12s}
    .lst-area-panel:hover .lst-area-note,.lst-area-panel:focus-visible .lst-area-note{max-height:100px;margin-top:15px;opacity:1;transform:translateY(0)}
    .lst-area-panel:hover .lst-area-link,.lst-area-panel:focus-visible .lst-area-link{max-height:30px;margin-top:18px;opacity:1}
    .lst-areas-foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:18px;margin-top:28px;padding:0 4px}
    .lst-areas-foot p{margin:0;color:#6d675d;font:500 13px/1.6 Inter,Arial,sans-serif}
    .lst-areas-cta{display:inline-flex;min-height:48px;align-items:center;justify-content:center;gap:9px;padding:0 21px;color:#f8f7f2!important;border:1px solid rgba(185,144,82,.68);border-radius:13px;background:linear-gradient(135deg,#240f0e,#180a09);box-shadow:0 12px 26px rgba(36,15,14,.2);font:700 11px/1 Inter,Arial,sans-serif;letter-spacing:.08em;text-decoration:none!important;text-transform:uppercase;transition:transform .2s ease,filter .2s ease}
    .lst-areas-cta:hover{transform:translateY(-2px);filter:brightness(1.08)}
    body.home .page-content>#lst-areas-root{order:9!important}body.home .page-content>#lst-team-root{order:10!important}body.home .page-content>.md-footer{order:11!important}
    @media(max-width:980px){.lst-areas-head{grid-template-columns:1fr;gap:20px}.lst-areas-intro{max-width:64ch}.lst-areas-panels{display:grid;height:auto;grid-template-columns:repeat(2,minmax(0,1fr))}.lst-area-panel{min-height:330px}.lst-area-panel:last-child{grid-column:1/-1}.lst-area-note,.lst-area-link{max-height:100px;margin-top:15px;opacity:1;transform:none}.lst-area-link{max-height:30px;margin-top:18px}}
    @media(max-width:620px){#lst-areas-root{padding:64px 16px}.lst-areas-head h2{font-size:42px}.lst-areas-panels{grid-template-columns:1fr;gap:16px}.lst-area-panel,.lst-area-panel:last-child{grid-column:auto;min-height:310px;padding:23px}.lst-area-content strong{font-size:31px}.lst-areas-foot{align-items:flex-start;flex-direction:column}.lst-areas-cta{width:100%}}
    @media(prefers-reduced-motion:reduce){.lst-area-panel,.lst-area-panel *{transition:none!important}}
  `;

  function build() {
    if (document.getElementById("lst-areas-root")) return;
    var footer = document.querySelector("body.home .md-footer");
    if (!footer || !footer.parentNode) return;
    var section = document.createElement("section");
    section.id = "lst-areas-root";
    section.setAttribute("aria-labelledby", "lst-areas-heading");
    section.innerHTML = '<div class="lst-areas-wrap"><header class="lst-areas-head"><div><p class="lst-areas-kicker">Areas We Serve</p><h2 id="lst-areas-heading">Local guidance, wherever your next move leads.</h2></div><p class="lst-areas-intro">From Acadiana to Southwest Louisiana, our team brings market knowledge and dependable guidance to the communities we call home.</p></header><div class="lst-areas-panels">' + areas.map(panel).join("") + '</div><div class="lst-areas-foot"><p>Looking just outside these areas? Start a conversation&mdash;we serve communities throughout South Louisiana.</p><a class="lst-areas-cta" href="/listing">Search All Homes <span aria-hidden="true">&rarr;</span></a></div></div>';
    footer.parentNode.insertBefore(section, footer);
  }

  if (!document.getElementById("lakeshore-service-areas-styles")) {
    var style = document.createElement("style");
    style.id = "lakeshore-service-areas-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }
  build();
  new MutationObserver(build).observe(document.documentElement,{childList:true,subtree:true});
})();

