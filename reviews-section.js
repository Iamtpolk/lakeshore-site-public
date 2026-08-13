(function () {
  "use strict";

  if (window.__lakeshoreReviewsLoaded) return;
  window.__lakeshoreReviewsLoaded = true;

  var reviews = [
    {
      quote: "Tyler represented his client's interests first and foremost, and did so professionally. He was always responsive and focused on finding the best way to solve problems in a fair, client-focused manner.",
      name: "Sophia Rasile",
      detail: "Fellow real estate professional",
      source: "Google"
    },
    {
      quote: "Tyler has made the entire process of selling our home simple. He was always one step ahead of me, which eased my anxiety and took a huge weight off my shoulders.",
      name: "Kelsi Brooks",
      detail: "Home seller",
      source: "Google"
    },
    {
      quote: "He was very straightforward and we felt like he had our best interest in mind. From now on, if anyone asks if I know a realtor, I am pointing them straight to Tyler.",
      name: "Derrek Comeaux",
      detail: "Lake Charles, Louisiana",
      source: "RateMyAgent"
    },
    {
      quote: "Tyler was extremely honest, upfront, and found the time to show us the homes we wanted to see around our busy work schedules. He was extremely communicative and easy to reach.",
      name: "Craig Antilla",
      detail: "Lake Charles, Louisiana",
      source: "Realtor.com"
    },
    {
      quote: "Tyler was more than an agent during my search to purchase my first home. He was an educator, a friend, and most of all led the way to the best deal for me.",
      name: "Darrell Bowie",
      detail: "Lake Charles, Louisiana",
      source: "Realtor.com"
    },
    {
      quote: "Was an advocate for me and my family and very responsive even through a difficult sale. He always answered my questions and dealt with my concerns no matter what time of day.",
      name: "Michelle",
      detail: "Sulphur, Louisiana",
      source: "Realtor.com"
    }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>\"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }

  function initials(name) {
    return name.split(/\s+/).map(function (part) { return part.charAt(0); }).join("").slice(0, 2).toUpperCase();
  }

  function card(review, hidden) {
    return '<article class="lst-reviews-card"' + (hidden ? ' aria-hidden="true"' : '') + '>' +
      '<div class="lst-reviews-stars" aria-label="Five out of five stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>' +
      '<blockquote>&ldquo;' + escapeHtml(review.quote) + '&rdquo;</blockquote>' +
      '<footer><span class="lst-reviews-avatar" aria-hidden="true">' + escapeHtml(initials(review.name)) + '</span>' +
      '<span class="lst-reviews-person"><strong>' + escapeHtml(review.name) + '</strong><small>' + escapeHtml(review.detail) + '</small></span>' +
      '<span class="lst-reviews-source">' + escapeHtml(review.source) + '</span></footer>' +
    '</article>';
  }

  var css = `
    #lst-reviews-root { order:8!important;position:relative;overflow:hidden;padding:clamp(68px,7vw,104px) 0;color:#27251f;background:radial-gradient(circle at 50% 0,rgba(177,154,85,.16),transparent 36%),linear-gradient(180deg,#f7f3eb,#eee8dc);border-top:1px solid rgba(177,154,85,.2); }
    #lst-reviews-root * { box-sizing:border-box; }
    .lst-reviews-head { max-width:760px;margin:0 auto clamp(34px,4vw,50px);padding:0 24px;text-align:center; }
    .lst-reviews-kicker { margin:0 0 12px;color:#9c8542;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase; }
    .lst-reviews-head h2 { margin:0;color:#262522;font:500 clamp(36px,4.2vw,58px)/1.06 Georgia,serif;letter-spacing:-.025em; }
    .lst-reviews-intro { max-width:62ch;margin:16px auto 0;color:#656159;font:400 15px/1.7 Inter,Arial,sans-serif; }
    .lst-reviews-viewport { overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent); }
    .lst-reviews-track { display:flex;width:max-content;gap:18px;padding:8px 9px 26px;animation:lstReviewsScroll 58s linear infinite; }
    .lst-reviews-viewport:hover .lst-reviews-track,.lst-reviews-viewport:focus-within .lst-reviews-track { animation-play-state:paused; }
    .lst-reviews-card { position:relative;display:flex;flex:0 0 min(390px,82vw);flex-direction:column;min-height:300px;padding:28px;border:1px solid rgba(177,154,85,.25);border-radius:22px;background:rgba(255,255,255,.68);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 42px rgba(53,47,34,.1);backdrop-filter:blur(16px) saturate(120%);-webkit-backdrop-filter:blur(16px) saturate(120%); }
    .lst-reviews-card::after { content:"\201C";position:absolute;right:20px;top:5px;color:rgba(177,154,85,.16);font:700 74px/1 Georgia,serif; }
    .lst-reviews-stars { position:relative;z-index:1;margin-bottom:17px;color:#b19a55;font:700 17px/1 Inter,Arial,sans-serif;letter-spacing:.14em; }
    .lst-reviews-card blockquote { position:relative;z-index:1;flex:1;margin:0 0 25px;color:#39362f;font:400 15px/1.72 Inter,Arial,sans-serif; }
    .lst-reviews-card footer { position:relative;z-index:1;display:grid;grid-template-columns:42px minmax(0,1fr) auto;align-items:center;gap:11px;padding-top:18px;border-top:1px solid rgba(73,65,48,.11); }
    .lst-reviews-avatar { display:flex;width:42px;height:42px;align-items:center;justify-content:center;color:#fff;border:1px solid rgba(177,154,85,.55);border-radius:50%;background:linear-gradient(145deg,#b19a55,#806d38);font:700 12px/1 Inter,Arial,sans-serif;letter-spacing:.04em; }
    .lst-reviews-person { display:flex;min-width:0;flex-direction:column;gap:4px; }
    .lst-reviews-person strong { color:#292720;font:700 13px/1.2 Inter,Arial,sans-serif; }
    .lst-reviews-person small { overflow:hidden;color:#777168;font:400 11px/1.25 Inter,Arial,sans-serif;text-overflow:ellipsis;white-space:nowrap; }
    .lst-reviews-source { color:#927b3c;border:1px solid rgba(177,154,85,.3);border-radius:999px;background:rgba(177,154,85,.1);padding:6px 9px;font:700 9px/1 Inter,Arial,sans-serif;letter-spacing:.07em;text-transform:uppercase; }
    .lst-reviews-foot { display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;margin-top:22px;padding:0 24px; }
    .lst-reviews-foot p { margin:0;color:#6b665d;font:500 13px/1.5 Inter,Arial,sans-serif; }
    .lst-reviews-cta { display:inline-flex;min-height:46px;align-items:center;justify-content:center;padding:0 19px;color:#fff!important;border:1px solid #9d8540;border-radius:12px;background:linear-gradient(135deg,#cdbb86,#a58d49);box-shadow:0 10px 24px rgba(177,154,85,.22);font:700 11px/1 Inter,Arial,sans-serif;letter-spacing:.075em;text-decoration:none!important;text-transform:uppercase;transition:transform .2s ease,filter .2s ease; }
    .lst-reviews-cta:hover { transform:translateY(-2px);filter:brightness(1.05); }
    .lst-reviews-cta span { margin-left:7px; }
    @keyframes lstReviewsScroll { from { transform:translateX(0); } to { transform:translateX(calc(-50% - 9px)); } }
    @media(max-width:620px){#lst-reviews-root{padding:60px 0}.lst-reviews-head{padding:0 18px}.lst-reviews-head h2{font-size:39px}.lst-reviews-card{flex-basis:84vw;min-height:320px;padding:24px}.lst-reviews-viewport{mask-image:none;-webkit-mask-image:none;overflow-x:auto;scroll-snap-type:x mandatory}.lst-reviews-card{scroll-snap-align:center}.lst-reviews-track{animation:none}.lst-reviews-card[aria-hidden="true"]{display:none}.lst-reviews-foot{flex-direction:column;text-align:center}}
    @media(prefers-reduced-motion:reduce){.lst-reviews-track{animation:none}.lst-reviews-viewport{overflow-x:auto}.lst-reviews-card[aria-hidden="true"]{display:none}}
  `;

  function build() {
    if (document.getElementById("lst-reviews-root")) return;
    var team = document.getElementById("lst-team-root");
    var footer = document.querySelector("body.home .md-footer");
    if (!team || !footer || !footer.parentNode) return;

    var visible = reviews.map(function (review) { return card(review, false); }).join("");
    var duplicate = reviews.map(function (review) { return card(review, true); }).join("");
    var section = document.createElement("section");
    section.id = "lst-reviews-root";
    section.setAttribute("aria-labelledby", "lst-reviews-heading");
    section.innerHTML = '<header class="lst-reviews-head"><p class="lst-reviews-kicker">Five-Star Client Reviews</p><h2 id="lst-reviews-heading">Trusted through every move.</h2><p class="lst-reviews-intro">Public reviews from buyers, sellers, and real estate professionals who have worked with Lakeshore Team founder Tyler Polk.</p></header><div class="lst-reviews-viewport"><div class="lst-reviews-track">' + visible + duplicate + '</div></div><div class="lst-reviews-foot"><p>Reviews sourced from Google, RateMyAgent, and Realtor.com.</p><a class="lst-reviews-cta" href="/contact">Start Your Move <span aria-hidden="true">&rarr;</span></a></div>';
    footer.parentNode.insertBefore(section, footer);
  }

  if (!document.getElementById("lakeshore-reviews-section-styles")) {
    var style = document.createElement("style");
    style.id = "lakeshore-reviews-section-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  build();
  new MutationObserver(build).observe(document.documentElement, { childList:true,subtree:true });
})();

