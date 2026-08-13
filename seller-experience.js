(function () {
  "use strict";
  if (window.__lakeshoreSellerExperienceLoaded) return;
  window.__lakeshoreSellerExperienceLoaded = true;

  var steps = [
    ["01", "Strategy & Pricing", "We study your property, neighborhood, current competition, and buyer demand to establish a pricing strategy built for your goals."],
    ["02", "Preparation & Presentation", "From repairs and staging guidance to photography and launch details, we prepare the home to make a memorable first impression."],
    ["03", "Marketing Launch", "Your property is introduced through polished visual storytelling, targeted digital exposure, agent outreach, and the major real estate platforms."],
    ["04", "Showings & Feedback", "We coordinate access, communicate clearly, and translate buyer and agent feedback into useful next-step decisions."],
    ["05", "Offers & Negotiation", "We compare price, terms, timing, and riskâ€”then negotiate from a position designed to protect your priorities."],
    ["06", "Closing & Beyond", "Our team manages the contract milestones, inspections, appraisal, and closing details so you always know what comes next."]
  ];

  var css = `
    body.sell .md-sell-banner .banner{height:clamp(680px,76vh,820px)!important;min-height:680px!important;max-height:820px!important;overflow:hidden!important}
    body.sell .md-sell-banner .single-picture{filter:saturate(.82) contrast(1.04);transform:scale(1.015)}
    body.sell .md-sell-banner .banner-mask{background:linear-gradient(180deg,rgba(16,17,16,.32),rgba(20,12,11,.67))!important}
    body.sell .md-sell-banner .media-content-v2{width:100%!important;padding:120px 24px 72px!important;box-sizing:border-box!important;justify-content:center!important}
    body.sell .md-sell-banner .media-info{width:min(100%,980px)!important;margin:0 auto!important}
    body.sell .md-sell-banner .title-text{display:flex!important;flex-direction:column!important;align-items:center!important;gap:16px!important}
    body.sell .md-sell-banner .site-title{width:100%!important;text-align:center!important}
    body.sell .md-sell-banner .site-title[aria-level="1"] h2{margin:0!important;font-size:clamp(48px,5vw,76px)!important;line-height:1.02!important;letter-spacing:-.035em!important;text-wrap:balance}
    body.sell .md-sell-banner .site-title[aria-level="3"]{max-width:760px!important;margin:0 auto!important}
    body.sell .md-sell-banner .site-title[aria-level="3"] h3{margin:0!important;font-size:clamp(17px,1.4vw,21px)!important;line-height:1.55!important;font-weight:400!important;text-wrap:balance}
    body.sell .md-sell-banner .address-input{width:min(100%,740px)!important;margin:34px auto 0!important;padding:8px!important;border:1px solid rgba(255,255,255,.25)!important;border-radius:18px!important;background:rgba(248,247,242,.14)!important;box-shadow:0 24px 70px rgba(0,0,0,.28)!important;backdrop-filter:blur(18px) saturate(125%)!important;-webkit-backdrop-filter:blur(18px) saturate(125%)!important}
    body.sell .md-sell-banner .address-input .left-box{background:rgba(255,255,255,.96)!important;border-radius:12px!important;overflow:hidden!important}
    body.sell .md-sell-banner .address-input .input{height:58px!important;color:#202322!important;font-size:16px!important;padding-inline:22px 48px!important}
    body.sell .md-sell-banner .address-input .right-box{margin-left:8px!important}
    body.sell .md-sell-banner .address-input .submit-btn{height:58px!important;min-width:174px!important;border-radius:12px!important;background:linear-gradient(135deg,#c6a45f,#a8843e)!important;color:#19150d!important;display:flex!important;align-items:center!important;justify-content:center!important;font-weight:800!important;letter-spacing:.045em!important;text-transform:uppercase!important;box-shadow:none!important}
    body.sell .md-sell-banner .address-input::after{content:"Complimentary  â€¢  No obligation  â€¢  Local guidance";position:absolute;left:50%;top:calc(100% + 14px);transform:translateX(-50%);width:100%;text-align:center;color:rgba(255,255,255,.8);font-size:12px;letter-spacing:.09em;text-transform:uppercase}
    body.sell .md-sell-banner .sell-agent{width:min(100%,740px)!important;margin:62px auto 0!important;padding:18px 22px!important;border:1px solid rgba(255,255,255,.18)!important;border-radius:16px!important;background:rgba(24,15,14,.38)!important;backdrop-filter:blur(12px)!important;-webkit-backdrop-filter:blur(12px)!important}
    body.sell .md-sell-banner .agent-desc p{color:rgba(255,255,255,.82)!important;line-height:1.55!important}
    body.sell .md-sell-process{display:none!important}

    #lst-seller-journey{--journey-progress:0;background:linear-gradient(145deg,#171a19 0%,#240f0e 58%,#151817 100%);color:#f8f7f2;padding:110px 24px 125px;position:relative;overflow:hidden}
    #lst-seller-journey::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 14%,rgba(184,144,82,.18),transparent 42%),linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px);background-size:auto,100% 44px;pointer-events:none}
    .lst-sj-inner{width:min(1180px,100%);margin:0 auto;position:relative;z-index:1}
    .lst-sj-kicker{margin:0 0 14px;color:#c6a45f;font-size:12px;font-weight:800;letter-spacing:.19em;text-transform:uppercase;text-align:center}
    .lst-sj-title{max-width:850px;margin:0 auto;color:#f8f7f2;font-family:Georgia,"Times New Roman",serif;font-size:clamp(42px,5vw,70px);font-weight:400;line-height:1.03;letter-spacing:-.035em;text-align:center;text-wrap:balance}
    .lst-sj-intro{max-width:680px;margin:22px auto 76px;color:rgba(248,247,242,.72);font-size:17px;line-height:1.65;text-align:center;text-wrap:balance}
    .lst-sj-road{position:relative;display:grid;grid-template-columns:1fr 1fr;column-gap:170px;row-gap:68px;padding:18px 0}
    .lst-sj-line,.lst-sj-fill{position:absolute;left:50%;top:0;bottom:0;width:2px;transform:translateX(-50%);border-radius:99px}
    .lst-sj-line{background:rgba(198,164,95,.22)}
    .lst-sj-fill{bottom:auto;height:calc(var(--journey-progress) * 100%);background:linear-gradient(#d3b878,#b89052,#8f6254);box-shadow:0 0 22px rgba(198,164,95,.35);transition:height .14s linear}
    .lst-sj-card{position:relative;min-height:238px;padding:30px 30px 28px;border:1px solid rgba(248,247,242,.12);border-radius:24px;background:linear-gradient(145deg,rgba(248,247,242,.095),rgba(248,247,242,.035));box-shadow:0 24px 60px rgba(0,0,0,.18);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);opacity:.58;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease,border-color .6s ease,background .6s ease}
    .lst-sj-card:nth-of-type(even){grid-column:2}
    .lst-sj-card:nth-of-type(odd){grid-column:1}
    .lst-sj-card.is-active{opacity:1;transform:none;border-color:rgba(198,164,95,.5);background:linear-gradient(145deg,rgba(198,164,95,.16),rgba(248,247,242,.045))}
    .lst-sj-dot{position:absolute;top:44px;width:15px;height:15px;border:3px solid #240f0e;border-radius:50%;background:#6d665b;box-shadow:0 0 0 1px rgba(198,164,95,.35);transition:background .5s ease,box-shadow .5s ease}
    .lst-sj-card:nth-of-type(odd) .lst-sj-dot{right:-93px}.lst-sj-card:nth-of-type(even) .lst-sj-dot{left:-93px}
    .lst-sj-card.is-active .lst-sj-dot{background:#c6a45f;box-shadow:0 0 0 1px #c6a45f,0 0 24px rgba(198,164,95,.7)}
    .lst-sj-number{display:block;margin-bottom:24px;color:#c6a45f;font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase}
    .lst-sj-card h3{margin:0 0 14px;color:#f8f7f2;font-family:Georgia,"Times New Roman",serif;font-size:30px;font-weight:400;line-height:1.15}
    .lst-sj-card p{margin:0;color:rgba(248,247,242,.7);font-size:15px;line-height:1.7}
    @media(max-width:780px){body.sell .md-sell-banner .banner{height:720px!important;min-height:720px!important;max-height:720px!important}body.sell .md-sell-banner .media-content-v2{padding:105px 20px 52px!important}body.sell .md-sell-banner .address-input{display:block!important;padding:7px!important}body.sell .md-sell-banner .address-input .right-box{margin:8px 0 0!important}body.sell .md-sell-banner .address-input .submit-btn{width:100%!important}body.sell .md-sell-banner .sell-agent{display:none!important}#lst-seller-journey{padding:80px 20px 90px}.lst-sj-intro{margin-bottom:52px}.lst-sj-road{display:block;padding-left:38px}.lst-sj-line,.lst-sj-fill{left:8px}.lst-sj-card{min-height:0;margin-bottom:28px;padding:25px 24px;opacity:.68}.lst-sj-card .lst-sj-dot,.lst-sj-card:nth-of-type(odd) .lst-sj-dot,.lst-sj-card:nth-of-type(even) .lst-sj-dot{left:-37px;right:auto;top:35px}.lst-sj-card h3{font-size:26px}}
    @media(prefers-reduced-motion:reduce){.lst-sj-card{opacity:1!important;transform:none!important;transition:none!important}.lst-sj-fill{height:100%!important;transition:none!important}}
  `;

  function buildJourney() {
    var oldProcess = document.querySelector("body.sell .md-sell-process");
    if (!oldProcess || document.getElementById("lst-seller-journey")) return;
    var section = document.createElement("section");
    section.id = "lst-seller-journey";
    section.setAttribute("aria-labelledby", "lst-sj-heading");
    section.innerHTML = '<div class="lst-sj-inner"><p class="lst-sj-kicker">The Lakeshore Selling Experience</p><h2 class="lst-sj-title" id="lst-sj-heading">A clear path from first conversation to closing day.</h2><p class="lst-sj-intro">A successful sale is not one moment. It is a coordinated sequence of smart decisions, thoughtful presentation, and steady communication.</p><div class="lst-sj-road"><span class="lst-sj-line" aria-hidden="true"></span><span class="lst-sj-fill" aria-hidden="true"></span>' + steps.map(function (s) { return '<article class="lst-sj-card"><span class="lst-sj-dot" aria-hidden="true"></span><span class="lst-sj-number">Stage ' + s[0] + '</span><h3>' + s[1] + '</h3><p>' + s[2] + '</p></article>'; }).join("") + '</div></div>';
    oldProcess.insertAdjacentElement("beforebegin", section);
  }

  function refineHero() {
    var hero = document.querySelector("body.sell .md-sell-banner");
    if (!hero || hero.__lstSellerRefined) return;
    hero.__lstSellerRefined = true;
    var title = hero.querySelector('.site-title[aria-level="1"] h2');
    var sub = hero.querySelector('.site-title[aria-level="3"] h3');
    var button = hero.querySelector('.submit-btn .submit');
    var name = hero.querySelector('.sell-agent .name');
    if (title) title.textContent = "Your Home Deserves a Smarter Selling Strategy";
    if (sub) sub.textContent = "Discover what your property could commandâ€”and the strategy that will help it stand apart in todayâ€™s market.";
    if (button) button.textContent = "Start My Valuation";
    if (name) name.textContent = "Lakeshore Team";
  }

  function updateProgress() {
    var section = document.getElementById("lst-seller-journey");
    if (!section) return;
    var road = section.querySelector('.lst-sj-road');
    var rect = road.getBoundingClientRect();
    var progress = Math.max(0,Math.min(1,(innerHeight * .7 - rect.top) / Math.max(1,rect.height)));
    section.style.setProperty("--journey-progress",progress.toFixed(4));
    section.querySelectorAll('.lst-sj-card').forEach(function(card){
      var r = card.getBoundingClientRect();
      card.classList.toggle('is-active',r.top < innerHeight * .78);
    });
  }

  function activate() {
    refineHero(); buildJourney(); updateProgress();
  }
  var style = document.createElement("style");
  style.id = "lst-seller-experience-style";
  style.textContent = css;
  document.head.appendChild(style);
  activate();
  new MutationObserver(activate).observe(document.documentElement,{childList:true,subtree:true});
  addEventListener("scroll",function(){requestAnimationFrame(updateProgress)},{passive:true});
  addEventListener("resize",function(){requestAnimationFrame(updateProgress)},{passive:true});
})();

