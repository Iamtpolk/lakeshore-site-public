(function () {
  "use strict";
  if (location.pathname.replace(/\/$/, "") !== "/cash-offer") return;
  if (window.__lakeshoreCashOfferExperienceLoaded) return;
  window.__lakeshoreCashOfferExperienceLoaded = true;
  document.documentElement.classList.add("lst-cash-page");

  var formUrl = "#cash-offer-form";
  var tallyEmbed = "https://tally.so/embed/RGbj2Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
  var steps = [
    ["01", "Tell Us About the Property", "Share the address and a few details about the home's condition. The request takes about a minute and creates no obligation."],
    ["02", "We Prepare the Opportunity", "A local Lakeshore Team specialist reviews the property and presents it to our network of vetted cash buyers."],
    ["03", "Investors Submit Their Numbers", "Qualified investors evaluate the opportunity and compete to provide a genuine cash offer, typically within 24 hours."],
    ["04", "Compare Every Selling Path", "We help you compare the cash offer with quick-list and full-market options so you can judge price, speed, and convenience together."],
    ["05", "Choose Your Closing Date", "If the cash offer fits, select a closing timeline that works for youâ€”with no repairs, showings, or pressure to move forward."]
  ];

  var css = `
    html.lst-cash-page body .md-hero .banner{height:clamp(660px,74vh,800px)!important;min-height:660px!important;max-height:800px!important;overflow:hidden!important}
    html.lst-cash-page body .md-hero .single-picture{filter:saturate(.78) contrast(1.04);transform:scale(1.02)}
    html.lst-cash-page body .md-hero .banner-mask{background:linear-gradient(90deg,rgba(17,19,18,.7),rgba(36,15,14,.46) 55%,rgba(17,19,18,.58))!important}
    html.lst-cash-page body .md-hero .media-content-v2{width:100%!important;padding:125px clamp(28px,8vw,170px) 80px!important;box-sizing:border-box!important;align-items:center!important;text-align:center!important}
    html.lst-cash-page body .md-hero .media-info{width:min(100%,1120px)!important;margin:0 auto!important}
    html.lst-cash-page body .md-hero .title-text{display:flex!important;flex-direction:column!important;align-items:center!important;gap:18px!important}
    html.lst-cash-page body .md-hero .site-title{width:100%!important;text-align:center!important}
    html.lst-cash-page body .md-hero .site-title[aria-level="1"]{max-width:1060px!important;margin-inline:auto!important}
    html.lst-cash-page body .md-hero .site-title[aria-level="1"] h1{margin:0!important;font-size:clamp(52px,5.2vw,84px)!important;line-height:.98!important;letter-spacing:-.04em!important;text-wrap:balance;text-shadow:0 4px 28px rgba(0,0,0,.55)}
    html.lst-cash-page body .md-hero .site-title[aria-level="3"]{max-width:760px!important;margin-inline:auto!important}
    html.lst-cash-page body .md-hero .site-title[aria-level="3"]>*{margin:0!important;font-size:clamp(17px,1.25vw,21px)!important;line-height:1.58!important;font-weight:400!important;text-wrap:balance}
    .lst-cash-hero-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:18px;margin-top:34px}
    .lst-cash-hero-btn,.lst-cash-final-btn{display:inline-flex;min-height:58px;align-items:center;justify-content:center;gap:10px;padding:0 27px;border:1px solid rgba(224,195,126,.74);border-radius:14px;background:linear-gradient(135deg,#d0b169,#a9833b);color:#1c160d!important;box-shadow:0 18px 38px rgba(0,0,0,.3);font:800 12px/1 Inter,Arial,sans-serif;letter-spacing:.085em;text-decoration:none!important;text-transform:uppercase;transition:transform .25s ease,filter .25s ease}
    .lst-cash-hero-btn:hover,.lst-cash-hero-btn:focus-visible{background:#fff!important;border-color:#fff!important;color:#240f0e!important;transform:translateY(-3px);filter:none!important}
    .lst-cash-hero-btn:hover span,.lst-cash-hero-btn:focus-visible span{color:#240f0e!important}
    .lst-cash-final-btn:hover,.lst-cash-final-btn:focus-visible{background:#240f0e!important;border-color:#b89052!important;color:#d5b873!important;transform:translateY(-3px);filter:none!important}
    .lst-cash-final-btn:hover span,.lst-cash-final-btn:focus-visible span{color:#d5b873!important}
    .lst-cash-hero-note{color:rgba(255,255,255,.82);font:700 11px/1.4 Inter,Arial,sans-serif;letter-spacing:.11em;text-transform:uppercase}
    html.lst-cash-page body .md-custom-code.html-code{background:transparent!important}
    html.lst-cash-page body .md-custom-code.html-code .mg-container{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}
    html.lst-cash-page body #lst-areas-root{display:none!important}
    #lst-cash-path{--cash-progress:0;position:relative;overflow:hidden;padding:108px 24px 120px;color:#202322;background:radial-gradient(circle at 88% 8%,rgba(184,144,82,.18),transparent 30%),linear-gradient(145deg,#f8f7f2,#eee7da)}
    #lst-cash-path *{box-sizing:border-box}
    #lst-cash-path::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.28;background-image:radial-gradient(circle,rgba(36,15,14,.14) 1px,transparent 1.3px);background-size:28px 28px;mask-image:linear-gradient(120deg,transparent,#000 48%,transparent);-webkit-mask-image:linear-gradient(120deg,transparent,#000 48%,transparent)}
    .lst-cash-wrap{position:relative;z-index:1;width:min(1220px,100%);margin:0 auto}
    .lst-cash-head{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(300px,.7fr);align-items:end;gap:54px;margin-bottom:72px}
    .lst-cash-kicker{margin:0 0 15px;color:#8f6732;font:800 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase}
    .lst-cash-title{max-width:780px;margin:0;color:#202322;font:500 clamp(43px,5vw,72px)/1.02 Georgia,serif;letter-spacing:-.035em;text-wrap:balance}
    .lst-cash-intro{max-width:52ch;margin:0;color:#676158;font:400 16px/1.72 Inter,Arial,sans-serif}
    .lst-cash-road{position:relative;display:grid;grid-template-columns:1fr 1fr;column-gap:170px;row-gap:72px;padding:18px 0}
    .lst-cash-track,.lst-cash-fill{position:absolute;left:50%;top:0;bottom:0;width:2px;transform:translateX(-50%);border-radius:99px}
    .lst-cash-track{background:rgba(36,15,14,.16)}
    .lst-cash-fill{bottom:auto;height:calc(var(--cash-progress) * 100%);background:linear-gradient(180deg,#8e6532,#c6a45f,#7b493f);box-shadow:0 0 18px rgba(184,144,82,.38);transition:height .14s linear}
    .lst-cash-step{position:relative;min-height:270px;padding:34px 32px 30px;border:1px solid rgba(36,15,14,.14);border-radius:23px;background:rgba(255,255,255,.54);box-shadow:0 22px 50px rgba(54,44,32,.1);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);opacity:.62;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease,border-color .55s ease,background .55s ease}
    .lst-cash-step:nth-of-type(odd){grid-column:1}
    .lst-cash-step:nth-of-type(even){grid-column:2;background:linear-gradient(150deg,rgba(36,15,14,.95),rgba(32,35,34,.96));color:#f8f7f2}
    .lst-cash-step:nth-of-type(1){grid-row:1}.lst-cash-step:nth-of-type(2){grid-row:2}.lst-cash-step:nth-of-type(3){grid-row:3}.lst-cash-step:nth-of-type(4){grid-row:4}.lst-cash-step:nth-of-type(5){grid-row:5}
    .lst-cash-step.is-active{opacity:1;transform:none;border-color:rgba(184,144,82,.5)}
    .lst-cash-node{position:absolute;top:42px;width:14px;height:14px;border:3px solid #f5f1e8;border-radius:50%;background:#81796d;box-shadow:0 0 0 1px rgba(36,15,14,.18);transition:background .45s ease,box-shadow .45s ease}
    .lst-cash-step:nth-of-type(odd) .lst-cash-node{right:-92px}.lst-cash-step:nth-of-type(even) .lst-cash-node{left:-92px}
    .lst-cash-step.is-active .lst-cash-node{background:#b89052;box-shadow:0 0 0 1px #b89052,0 0 18px rgba(184,144,82,.62)}
    .lst-cash-number{display:block;margin-bottom:38px;color:#9d7137;font:800 12px/1 Inter,Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase}
    .lst-cash-step:nth-child(even) .lst-cash-number{color:#d5b873}
    .lst-cash-step h3{margin:0 0 16px;color:inherit;font:500 28px/1.08 Georgia,serif;letter-spacing:-.02em}
    .lst-cash-step p{margin:0;color:#6a645b;font:400 14px/1.7 Inter,Arial,sans-serif}
    .lst-cash-step:nth-child(even) p{color:rgba(248,247,242,.7)}
    .lst-cash-decision{display:grid;grid-template-columns:1fr auto;align-items:center;gap:34px;margin-top:78px;padding:38px 42px;border:1px solid rgba(248,247,242,.13);border-radius:25px;background:linear-gradient(135deg,#202322,#240f0e);box-shadow:0 28px 65px rgba(36,15,14,.2);color:#f8f7f2}
    .lst-cash-decision small{display:block;margin-bottom:10px;color:#d3b46d;font:800 10px/1 Inter,Arial,sans-serif;letter-spacing:.17em;text-transform:uppercase}
    .lst-cash-decision h3{margin:0 0 10px;font:500 clamp(30px,3vw,44px)/1.08 Georgia,serif;letter-spacing:-.025em}
    .lst-cash-decision p{max-width:720px;margin:0;color:rgba(248,247,242,.7);font:400 15px/1.65 Inter,Arial,sans-serif}
    .lst-cash-modal{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(13,15,14,.78);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);opacity:0;visibility:hidden;transition:opacity .25s ease,visibility .25s ease}
    .lst-cash-modal.is-open{opacity:1;visibility:visible}
    .lst-cash-dialog{position:relative;width:min(760px,100%);height:min(820px,calc(100vh - 48px));overflow:hidden;border:1px solid rgba(213,184,115,.48);border-radius:25px;background:#f8f7f2;box-shadow:0 35px 100px rgba(0,0,0,.48);transform:translateY(18px) scale(.985);transition:transform .28s ease}
    .lst-cash-modal.is-open .lst-cash-dialog{transform:none}
    .lst-cash-dialog-head{display:flex;align-items:center;justify-content:space-between;gap:20px;height:74px;padding:0 22px 0 28px;border-bottom:1px solid rgba(36,15,14,.12);background:linear-gradient(135deg,#202322,#240f0e);color:#f8f7f2}
    .lst-cash-dialog-head span{font:500 25px/1 Georgia,serif;letter-spacing:-.015em}
    .lst-cash-close{display:grid;width:42px;height:42px;place-items:center;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(255,255,255,.08);color:#f8f7f2;font:400 25px/1 Arial,sans-serif;cursor:pointer;transition:background .2s ease,color .2s ease,transform .2s ease}
    .lst-cash-close:hover,.lst-cash-close:focus-visible{background:#fff;color:#240f0e;transform:rotate(4deg)}
    .lst-cash-frame{display:block;width:100%;height:calc(100% - 74px);border:0;background:#f8f7f2}
    html.lst-cash-modal-open,html.lst-cash-modal-open body{overflow:hidden!important}
    @media(max-width:1000px){.lst-cash-head{grid-template-columns:1fr;gap:24px}.lst-cash-road{column-gap:110px}.lst-cash-step:nth-of-type(odd) .lst-cash-node{right:-62px}.lst-cash-step:nth-of-type(even) .lst-cash-node{left:-62px}}
    @media(max-width:700px){html.lst-cash-page body .md-hero .banner{height:690px!important;min-height:690px!important;max-height:690px!important}html.lst-cash-page body .md-hero .media-content-v2{padding:112px 22px 64px!important;align-items:center!important}html.lst-cash-page body .md-hero .media-info,html.lst-cash-page body .md-hero .site-title{text-align:center!important}html.lst-cash-page body .md-hero .title-text{align-items:center!important}.lst-cash-hero-actions{justify-content:center}.lst-cash-hero-note{width:100%;text-align:center}#lst-cash-path{padding:78px 18px 90px}.lst-cash-road{display:block;padding-left:38px}.lst-cash-track,.lst-cash-fill{left:8px}.lst-cash-step,.lst-cash-step:nth-of-type(odd),.lst-cash-step:nth-of-type(even){grid-column:auto;min-height:0;margin-bottom:28px}.lst-cash-step .lst-cash-node,.lst-cash-step:nth-of-type(odd) .lst-cash-node,.lst-cash-step:nth-of-type(even) .lst-cash-node{left:-37px;right:auto;top:36px}.lst-cash-number{margin-bottom:28px}.lst-cash-decision{grid-template-columns:1fr;padding:30px 25px}.lst-cash-final-btn{width:100%}.lst-cash-modal{padding:0}.lst-cash-dialog{width:100%;height:100vh;max-height:none;border:0;border-radius:0}.lst-cash-dialog-head{height:66px;padding-inline:20px}.lst-cash-dialog-head span{font-size:21px}.lst-cash-frame{height:calc(100% - 66px)}}
    @media(prefers-reduced-motion:reduce){.lst-cash-step{opacity:1!important;transform:none!important;transition:none!important}.lst-cash-fill{height:100%!important;transition:none!important}}
  `;

  function buildHeroAction() {
    var content = document.querySelector('html.lst-cash-page body .md-hero .media-content-v2');
    if (!content || content.querySelector('.lst-cash-hero-actions')) return;
    var actions = document.createElement('div');
    actions.className = 'lst-cash-hero-actions';
    actions.innerHTML = '<a class="lst-cash-hero-btn" href="' + formUrl + '">Get My Cash Offer <span aria-hidden="true">&rarr;</span></a><span class="lst-cash-hero-note">About 60 seconds | Free | No obligation</span>';
    content.appendChild(actions);
  }

  function buildPath() {
    var host = document.querySelector('html.lst-cash-page body .md-custom-code.html-code .custom-code-html-content');
    if (!host || host.querySelector('#lst-cash-path')) return;
    host.innerHTML = '<section id="lst-cash-path" aria-labelledby="lst-cash-heading"><div class="lst-cash-wrap"><header class="lst-cash-head"><div><p class="lst-cash-kicker">The Lakeshore Cash Offer Process</p><h2 class="lst-cash-title" id="lst-cash-heading">From property details to a decision you can feel good about.</h2></div><p class="lst-cash-intro">A cash offer should give you clarity, not pressure. We coordinate the investors, explain the tradeoffs, and let you decide which selling path fits your priorities.</p></header><div class="lst-cash-road"><span class="lst-cash-track" aria-hidden="true"></span><span class="lst-cash-fill" aria-hidden="true"></span>' + steps.map(function(s){return '<article class="lst-cash-step"><span class="lst-cash-node" aria-hidden="true"></span><span class="lst-cash-number">Step ' + s[0] + '</span><h3>' + s[1] + '</h3><p>' + s[2] + '</p></article>';}).join('') + '</div><div class="lst-cash-decision"><div><small>Your Local Louisiana Team</small><h3>Ready to see what investors would offer?</h3><p>Request your number, review it with a local specialist, and move forward only if the timing and terms make sense for you.</p></div><a class="lst-cash-final-btn" href="' + formUrl + '">Start My Cash Offer <span aria-hidden="true">&rarr;</span></a></div></div></section>';
  }

  function buildModal() {
    if (document.getElementById('lst-cash-modal')) return;
    var modal = document.createElement('div');
    modal.id = 'lst-cash-modal';
    modal.className = 'lst-cash-modal';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML = '<div class="lst-cash-dialog" role="dialog" aria-modal="true" aria-labelledby="lst-cash-dialog-title"><div class="lst-cash-dialog-head"><span id="lst-cash-dialog-title">Request Your Cash Offer</span><button class="lst-cash-close" type="button" aria-label="Close cash offer form">&times;</button></div><iframe class="lst-cash-frame" title="Lakeshore Cash Offer form" data-src="' + tallyEmbed + '" loading="lazy" allow="fullscreen"></iframe></div>';
    document.body.appendChild(modal);
  }

  var returnFocus = null;
  function openModal(trigger) {
    var modal = document.getElementById('lst-cash-modal');
    if (!modal) return;
    returnFocus = trigger || document.activeElement;
    var frame = modal.querySelector('.lst-cash-frame');
    if (!frame.getAttribute('src')) frame.setAttribute('src',frame.getAttribute('data-src'));
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.documentElement.classList.add('lst-cash-modal-open');
    setTimeout(function(){modal.querySelector('.lst-cash-close').focus();},30);
  }
  function closeModal() {
    var modal = document.getElementById('lst-cash-modal');
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.documentElement.classList.remove('lst-cash-modal-open');
    if (returnFocus && returnFocus.focus) returnFocus.focus();
  }

  function updateProgress() {
    var section = document.getElementById('lst-cash-path');
    if (!section) return;
    var road = section.querySelector('.lst-cash-road');
    var rect = road.getBoundingClientRect();
    var progress = Math.max(0,Math.min(1,(innerHeight * .72 - rect.top) / Math.max(1,rect.height)));
    section.style.setProperty('--cash-progress',progress.toFixed(4));
    section.querySelectorAll('.lst-cash-step').forEach(function(step){var r=step.getBoundingClientRect();step.classList.toggle('is-active',r.top < innerHeight * .8);});
  }

  function activate(){buildHeroAction();buildPath();buildModal();updateProgress();}
  var style=document.createElement('style');style.id='lst-cash-offer-experience-style';style.textContent=css;document.head.appendChild(style);
  activate();
  new MutationObserver(activate).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener('click',function(event){
    if (!event.target.closest) return;
    var trigger=event.target.closest('.lst-cash-hero-btn,.lst-cash-final-btn');
    if(trigger){event.preventDefault();openModal(trigger);return;}
    if(event.target.closest('.lst-cash-close') || (event.target.classList && event.target.classList.contains('lst-cash-modal')))closeModal();
  });
  document.addEventListener('keydown',function(event){
    var modal=document.getElementById('lst-cash-modal');
    if(event.key==='Escape'){closeModal();return;}
    if(event.key!=='Tab'||!modal||!modal.classList.contains('is-open'))return;
    var focusable=Array.prototype.slice.call(modal.querySelectorAll('button,iframe,[href],[tabindex]:not([tabindex="-1"])'));
    if(!focusable.length)return;
    var first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  addEventListener('scroll',function(){requestAnimationFrame(updateProgress)},{passive:true});
  addEventListener('resize',function(){requestAnimationFrame(updateProgress)},{passive:true});
})();

