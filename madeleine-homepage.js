(function () {
  "use strict";

  if (window.__madeleineHomepageLoaded) return;
  if (!/^madeleinedavis\./i.test(window.location.hostname)) return;
  if ((window.location.pathname.replace(/\/$/, "") || "/") !== "/") return;
  window.__madeleineHomepageLoaded = true;

  var root = document.documentElement;
  var gateReleased = false;
  var gateTimedOut = false;
  var gateStyle = document.createElement("style");
  gateStyle.id = "cp-agent-loading-gate";
  gateStyle.textContent =
    "html.cp-agent-loading{background:#160b0a!important}" +
    "html.cp-agent-loading body{opacity:0!important;visibility:hidden!important;pointer-events:none!important}" +
    "html.cp-agent-ready body{opacity:1;visibility:visible;transition:opacity .38s ease}" +
    "@media(prefers-reduced-motion:reduce){html.cp-agent-ready body{transition:none}}";
  document.head.appendChild(gateStyle);
  root.classList.add("cp-agent-loading");

  function releaseGate(completed) {
    if (gateReleased) return;
    gateReleased = true;
    gateTimedOut = !completed;
    root.classList.remove("cp-agent-loading");
    if (completed) root.classList.add("cp-agent-ready");
  }

  var gateSafetyTimer = window.setTimeout(function () {
    releaseGate(false);
  }, 10000);

  var ASSET_ROOT = "https://iamtpolk.github.io/lakeshore-site-public/assets/team/";
  var HEADSHOT = ASSET_ROOT + "madeleine-davis.webp";

  function waitForPage(attempt) {
    if (gateTimedOut) return;
    var main = document.querySelector("main#app, .page-content");
    var footer = document.querySelector(".md-footer, footer");
    var listings = document.querySelector(".md-house");
    if ((!main || !footer || !listings) && attempt < 80) {
      window.setTimeout(function () { waitForPage(attempt + 1); }, 150);
      return;
    }
    if (!main || !footer || !listings) return;
    build(main, listings, footer);
  }

  function build(main, listings, footer) {
    document.documentElement.classList.add("cp-agent-home");
    document.querySelectorAll("a, span, button").forEach(function (node) {
      if (node.children.length) return;
      node.textContent = node.textContent.replace(/â†’|Â†’/g, String.fromCharCode(8594)).replace(/Â·/g, String.fromCharCode(183));
    });

    var font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap";
    document.head.appendChild(font);

    var style = document.createElement("style");
    style.id = "cp-agent-home-style";
    style.textContent = `
      :root{--cp-ink:#202322;--cp-ox:#240f0e;--cp-ivory:#f8f7f2;--cp-gold:#b89052;--cp-line:rgba(36,15,14,.14)}
      html.cp-agent-home body{background:var(--cp-ivory);color:var(--cp-ink)}
      html.cp-agent-home .md-hero,html.cp-agent-home .md-listing-search,html.cp-agent-home .md-team-desc,html.cp-agent-home .md-cta,html.cp-agent-home .md-team{display:none!important}
      .cp-shell{width:min(1180px,calc(100% - 40px));margin:auto}.cp-serif{font-family:"Playfair Display",serif}
      .cp-home,.cp-home *{box-sizing:border-box}.cp-home{font-family:"DM Sans",sans-serif}
      .cp-hero{position:relative;min-height:820px;padding:150px 0 70px;overflow:hidden;color:#fff;background:radial-gradient(circle at 75% 40%,rgba(184,144,82,.22),transparent 28%),linear-gradient(110deg,#160b0a 0%,#241110 52%,#101210 100%)}
      .cp-hero-grid{display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:44px;min-height:600px}.cp-eyebrow{display:flex;align-items:center;gap:12px;margin-bottom:22px;color:#d7be7c;font-size:.7rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase}.cp-eyebrow:before{content:"";width:38px;height:1px;background:#d7be7c}
      .cp-hero h1{max-width:650px;margin:0;font-size:clamp(4rem,8vw,7.6rem);font-weight:500;line-height:.88;letter-spacing:-.055em}.cp-hero h1 span{display:block;margin-left:1.08em;color:#d7be7c;font-style:italic}.cp-hero-copy{max-width:530px;margin:30px 0;color:rgba(255,255,255,.72);font-size:1.04rem;line-height:1.75}
      .cp-actions{display:flex;flex-wrap:wrap;gap:12px}.cp-button{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 22px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:var(--cp-gold);color:#17120c!important;font-size:.72rem;font-weight:800;letter-spacing:.11em;text-decoration:none!important;text-transform:uppercase;transition:background .22s ease,color .22s ease,border-color .22s ease,transform .22s ease,box-shadow .22s ease}.cp-button:hover{border-color:#fff;background:#fff;color:var(--cp-ox)!important;transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.22)}.cp-button.cp-secondary{background:rgba(255,255,255,.07);color:#fff!important;backdrop-filter:blur(12px)}.cp-button.cp-secondary:hover{border-color:var(--cp-gold);background:var(--cp-gold);color:#17120c!important}
      .cp-portrait-wrap{position:relative;min-height:580px}.cp-portrait{position:absolute;inset:0 0 0 8%;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:180px 180px 24px 24px;background:#cfc2b4;box-shadow:0 32px 80px rgba(0,0,0,.38)}.cp-portrait img{width:100%;height:100%;object-fit:cover;object-position:center 34%}.cp-portrait:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgba(18,9,8,.38))}.cp-signature{position:absolute;z-index:2;right:-20px;bottom:36px;width:230px;padding:20px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:rgba(248,247,242,.12);backdrop-filter:blur(18px);box-shadow:0 18px 50px rgba(0,0,0,.24)}.cp-signature strong{display:block;font-family:"Playfair Display",serif;font-size:1.35rem}.cp-signature span{display:block;margin-top:6px;color:#dbc786;font-size:.68rem;font-weight:700;letter-spacing:.11em;text-transform:uppercase}
      .cp-section{padding:110px 0}.cp-intro{background:var(--cp-ivory)}.cp-section-head{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:end;margin-bottom:58px}.cp-kicker{color:var(--cp-gold);font-size:.7rem;font-weight:800;letter-spacing:.19em;text-transform:uppercase}.cp-section-head h2,.cp-listing-head h2{max-width:650px;margin:10px 0 0;font-size:clamp(2.8rem,5vw,5.1rem);font-weight:500;line-height:.98;letter-spacing:-.045em}.cp-section-head p{margin:0;color:#575853;font-size:1rem;line-height:1.8}.cp-values{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.cp-value{position:relative;min-height:280px;overflow:hidden;padding:34px 32px;border:1px solid rgba(184,144,82,.25);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.82),rgba(255,255,255,.42));box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 18px 48px rgba(36,15,14,.09);backdrop-filter:blur(18px);transition:transform .35s ease,border-color .35s ease,box-shadow .35s ease}.cp-value:before{content:"";position:absolute;top:-65px;right:-55px;width:170px;height:170px;border-radius:50%;background:radial-gradient(circle,rgba(184,144,82,.24),transparent 70%);transition:transform .5s ease,opacity .35s ease}.cp-value:after{content:"";position:absolute;right:28px;bottom:0;left:28px;height:2px;background:linear-gradient(90deg,transparent,var(--cp-gold),transparent);opacity:0;transform:scaleX(.25);transition:opacity .35s ease,transform .35s ease}.cp-value:hover{border-color:rgba(184,144,82,.62);transform:translateY(-8px);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 28px 65px rgba(36,15,14,.16)}.cp-value:hover:before{opacity:.82;transform:scale(1.18)}.cp-value:hover:after{opacity:1;transform:scaleX(1)}.cp-value-num{position:relative;z-index:1;color:var(--cp-gold);font-family:"Playfair Display",serif;font-size:1.1rem}.cp-value h3{position:relative;z-index:1;margin:70px 0 14px;font-family:"Playfair Display",serif;font-size:1.65rem;font-weight:600}.cp-value p{position:relative;z-index:1;margin:0;color:#62635e;line-height:1.7}
      .cp-reviews{color:#fff;background:linear-gradient(135deg,#24100f,#150a09 62%,#202322)}.cp-reviews .cp-section-head p{color:rgba(255,255,255,.66)}.cp-review-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}.cp-review{display:flex;flex-direction:column;min-height:360px;padding:36px;border:1px solid rgba(255,255,255,.13);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045));backdrop-filter:blur(18px);box-shadow:0 18px 55px rgba(0,0,0,.2)}.cp-stars{color:#d8b965;font-size:1.1rem;letter-spacing:.18em}.cp-quote{margin:30px 0;font-family:"Playfair Display",serif;font-size:clamp(1.35rem,2vw,1.9rem);line-height:1.48}.cp-reviewer{display:flex;align-items:center;gap:14px;margin-top:auto}.cp-reviewer .cp-avatar{display:flex!important;width:50px;height:50px;flex:0 0 50px;align-items:center!important;justify-content:center!important;margin:0!important;border:2px solid #d7be7c;border-radius:50%;background:#351513;color:#f4d98d!important;box-shadow:0 8px 22px rgba(0,0,0,.3);font-size:.8rem;font-weight:800;line-height:1;letter-spacing:.04em}.cp-reviewer strong{display:block}.cp-reviewer span:not(.cp-avatar){display:block;margin-top:4px;color:rgba(255,255,255,.62);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase}
      .cp-listing-head{order:6!important;padding:100px 0 32px;background:#efece3}.cp-listing-row{display:flex;justify-content:space-between;gap:28px;align-items:end}.cp-text-link{display:inline-flex;min-height:48px;align-items:center;justify-content:center;padding:0 20px;border:1px solid rgba(36,15,14,.28);border-radius:999px;background:#240f0e;color:#f8f7f2!important;box-shadow:0 12px 28px rgba(36,15,14,.14);font-size:.72rem;font-weight:800;letter-spacing:.1em;text-decoration:none!important;text-transform:uppercase;transition:background .25s ease,color .25s ease,border-color .25s ease,transform .25s ease}.cp-text-link:hover{border-color:var(--cp-gold);background:var(--cp-gold);color:#240f0e!important;transform:translateY(-2px)}html.cp-agent-home .md-house{order:7!important;margin:0!important;padding:0 0 100px!important;background:#efece3!important}html.cp-agent-home .md-house>div:first-child,html.cp-agent-home .md-house h2{display:none!important}
      .cp-contact{order:8!important;padding:105px 0;background:var(--cp-ink);color:#fff;scroll-margin-top:105px}.cp-contact-card{display:grid;grid-template-columns:.78fr 1.22fr;overflow:hidden;border:1px solid rgba(255,255,255,.13);border-radius:26px;background:linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.025));box-shadow:0 30px 80px rgba(0,0,0,.25)}.cp-contact-person{position:relative;min-height:570px;overflow:hidden;background:#7d6e4e}.cp-contact-person>img{width:100%;height:100%;object-fit:cover;object-position:center 38%}.cp-contact-person:after{content:"";position:absolute;inset:42% 0 0;background:linear-gradient(transparent,rgba(20,9,8,.92))}.cp-contact-badge{position:absolute;z-index:2;right:24px;bottom:24px;left:24px;padding:22px;border:1px solid rgba(255,255,255,.2);border-radius:18px;background:rgba(36,15,14,.68);backdrop-filter:blur(18px)}.cp-contact-badge strong{display:block;font:600 1.8rem/1.1 "Playfair Display",serif}.cp-contact-badge span{display:block;margin-top:8px;color:#dbc786;font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.cp-contact-copy{display:flex;flex-direction:column;justify-content:center;padding:60px;background:linear-gradient(145deg,#321513,#240f0e)}.cp-contact-copy h2{margin:14px 0 20px;font-size:clamp(2.6rem,4vw,4.5rem);font-weight:500;line-height:1}.cp-contact-copy>p{max-width:650px;color:rgba(255,255,255,.72);line-height:1.75}.cp-contact-details{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0}.cp-contact-detail{display:flex;min-height:58px;align-items:center;padding:0 17px;border:1px solid rgba(255,255,255,.14);border-radius:13px;background:rgba(255,255,255,.06);color:#fff!important;text-decoration:none!important;transition:.2s ease}.cp-contact-detail:hover{border-color:var(--cp-gold);background:rgba(184,144,82,.15);transform:translateY(-2px)}.cp-contact-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:8px}.cp-socials{display:flex;gap:10px}.cp-socials a{display:grid;width:50px;height:50px;place-items:center;border:1px solid rgba(255,255,255,.16);border-radius:12px;background:rgba(255,255,255,.07);transition:.2s ease}.cp-socials a:hover{border-color:var(--cp-gold);background:rgba(255,255,255,.14);transform:translateY(-2px)}.cp-socials img{width:23px;height:23px}
      html.cp-agent-home #chat-app .launcher>.pointer.avatar.profile-frame{display:block!important;width:64px!important;height:64px!important;overflow:hidden;border:2px solid #d7be7c!important;border-radius:50%!important;background:#240f0e!important;box-shadow:0 10px 28px rgba(36,15,14,.34)!important}html.cp-agent-home #chat-app .launcher>.pointer.avatar.profile-frame>img{content:url("${HEADSHOT}")!important;display:block!important;width:60px!important;height:60px!important;border-radius:50%!important;object-fit:cover!important;object-position:center 30%!important;opacity:1!important}html.cp-agent-home #chat-app .chat-window{border:1px solid rgba(184,144,82,.38)!important;background:#f8f7f2!important;box-shadow:0 22px 55px rgba(36,15,14,.28)!important}html.cp-agent-home #chat-app .chat-head{background:linear-gradient(135deg,#351513,#240f0e)!important}html.cp-agent-home #chat-app .chat-head .avatar.profile-frame{width:32px!important;height:32px!important;overflow:hidden!important;border-radius:50%!important}html.cp-agent-home #chat-app .chat-head .avatar.profile-frame>img{content:url("${HEADSHOT}")!important;display:block!important;width:30px!important;height:30px!important;border-radius:50%!important;object-fit:cover!important;object-position:center 30%!important}html.cp-agent-home #chat-app .head-text{color:#f8f7f2!important;font-weight:700!important}html.cp-agent-home #chat-app .chat-window-loading-w{background:#f8f7f2!important}html.cp-agent-home #chat-app .chat-window-text{color:#241f1d!important;font-weight:600!important}
      @media(max-width:900px){.cp-hero-grid,.cp-section-head,.cp-contact-card{grid-template-columns:1fr}.cp-portrait-wrap{min-height:620px}.cp-section-head{gap:25px}.cp-values{grid-template-columns:1fr}.cp-value{min-height:auto;border-right:0;border-bottom:1px solid var(--cp-line)}.cp-value h3{margin-top:32px}.cp-review-grid{grid-template-columns:1fr}.cp-listing-row{align-items:flex-start;flex-direction:column}.cp-contact-person{min-height:620px}}
      @media(max-width:560px){.cp-shell{width:min(100% - 26px,1180px)}.cp-hero{padding:120px 0 60px}.cp-hero h1{font-size:3.65rem}.cp-hero h1 span{margin-left:.35em}.cp-portrait-wrap{min-height:490px}.cp-portrait{left:0;border-radius:120px 120px 18px 18px}.cp-signature{right:10px;bottom:18px;width:205px}.cp-section{padding:76px 0}.cp-review{padding:26px}.cp-contact-person{min-height:470px}.cp-contact-copy{padding:34px 24px}.cp-contact-details{grid-template-columns:1fr}.cp-contact-actions>.cp-button{width:100%}}
      @media(prefers-reduced-motion:reduce){.cp-value,.cp-value:before,.cp-value:after,.cp-text-link{transition:none!important}}
    `;
    document.head.appendChild(style);

    var home = document.createElement("div");
    home.className = "cp-home";
    home.innerHTML = `
      <section class="cp-hero">
        <div class="cp-shell cp-hero-grid">
          <div><div class="cp-eyebrow">Residential Specialist &middot; Southwest Louisiana</div><h1 class="cp-serif">Move with <span>clarity.</span></h1><p class="cp-hero-copy">Madeleine Davis guides buyers and sellers throughout Southwest Louisiana with thoughtful strategy, clear communication, and dependable support from the first conversation to the closing table.</p><div class="cp-actions"><a class="cp-button cp-start-move" href="#madeleine-connect">Start your move</a><a class="cp-button cp-secondary" href="/listing">Search homes</a></div></div>
          <div class="cp-portrait-wrap"><div class="cp-portrait"><img src="${HEADSHOT}" alt="Madeleine Davis, Residential Specialist with Lakeshore Team"></div><div class="cp-signature"><strong>Madeleine Davis</strong><span>Lakeshore Team &middot; eXp Realty</span></div></div>
        </div>
      </section>
      <section class="cp-section cp-intro"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Why work with Madeleine</span><h2 class="cp-serif">Personal guidance for every move.</h2></div><p>Real estate is about more than a transaction. Madeleine brings a friendly, responsive, and personalized approach so you understand every decision and feel supported through each important milestone.</p></div><div class="cp-values"><article class="cp-value"><span class="cp-value-num">01</span><h3>Thoughtful strategy</h3><p>Every recommendation begins with your goals, your timeline, and a clear plan tailored to the move you are making.</p></article><article class="cp-value"><span class="cp-value-num">02</span><h3>Clear communication</h3><p>You receive timely updates and straightforward guidance, with answers that help you make confident decisions.</p></article><article class="cp-value"><span class="cp-value-num">03</span><h3>Dependable support</h3><p>Madeleine stays accessible and involved from the first conversation through closing, giving you steady guidance at every step.</p></article></div></div></section>
      <section class="cp-section cp-reviews"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Verified client reviews</span><h2 class="cp-serif">Kind words from real moves.</h2></div><p>Public Facebook recommendations from clients who trusted Madeleine to guide them home.</p></div><div class="cp-review-grid"><article class="cp-review"><div class="cp-stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="cp-quote">&ldquo;I&rsquo;m so grateful for Madeleine and the support she gave me throughout my search for the perfect Airbnb property. She was attentive from day one, always made herself available, and truly understood what I needed for my business.&rdquo;</p><div class="cp-reviewer"><span class="cp-avatar">AN</span><div><strong>Alicia Noviskie</strong><span>Facebook recommendation</span></div></div></article><article class="cp-review"><div class="cp-stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="cp-quote">&ldquo;We couldn&rsquo;t be more grateful to Madeleine for helping us find our first home. She was incredibly patient, knowledgeable, and always made sure we felt comfortable throughout the entire process.&rdquo;</p><div class="cp-reviewer"><span class="cp-avatar">BC</span><div><strong>Brodde Corley</strong><span>Facebook recommendation</span></div></div></article></div></div></section>
    `;
    main.insertBefore(home, main.firstChild);

    var listingHead = document.createElement("section");
    listingHead.className = "cp-home cp-listing-head";
    listingHead.innerHTML = `<div class="cp-shell cp-listing-row"><div><span class="cp-kicker">Featured homes</span><h2 class="cp-serif">Find your next address.</h2></div><a class="cp-text-link" href="/listing">Search all homes &rarr;</a></div>`;
    main.insertBefore(listingHead, listings);

    var contact = document.createElement("section");
    contact.className = "cp-home cp-contact";
    contact.id = "madeleine-connect";
    contact.innerHTML = `<div class="cp-shell cp-contact-card"><div class="cp-contact-person"><img src="${HEADSHOT}" alt="Madeleine Davis"><div class="cp-contact-badge"><strong>Madeleine Davis</strong><span>Residential Specialist &middot; Lakeshore Team</span></div></div><div class="cp-contact-copy"><span class="cp-kicker">Connect with Madeleine</span><h2 class="cp-serif">Start your next move with confidence.</h2><p>Have a question about buying or selling? Reach Madeleine directly or start a private conversation through the Lakeshore Team form.</p><div class="cp-contact-details"><a class="cp-contact-detail" href="tel:+13373048935">Call or text &middot; (337) 304-8935</a><a class="cp-contact-detail" href="mailto:madeleine.davis@exprealty.com">madeleine.davis@exprealty.com</a></div><div class="cp-contact-actions"><a class="cp-button" href="/contact?agent=madeleine#start-conversation">Start the conversation &rarr;</a><div class="cp-socials"><a href="https://www.instagram.com/movingwmadeleine" target="_blank" rel="noopener noreferrer" aria-label="Madeleine on Instagram"><img src="https://cdn.simpleicons.org/instagram/E4405F" alt=""></a><a href="https://hihello.com/p/593bf9e9-8a27-4b7d-8e6a-60473c6a7fbf" target="_blank" rel="noopener noreferrer" aria-label="Madeleine digital business card"><img src="https://cdn.simpleicons.org/messenger/00B2FF" alt=""></a><a href="https://www.facebook.com/Madeleine-Davis,-Realtor-273470091185196" target="_blank" rel="noopener noreferrer" aria-label="Madeleine on Facebook"><img src="https://cdn.simpleicons.org/facebook/1877F2" alt=""></a></div></div></div></div>`;
    listings.parentNode.insertBefore(contact, listings.nextSibling);

    function connectToMadeleine(event) {
      event.preventDefault();
      var target = document.getElementById("madeleine-connect");
      if (target) target.scrollIntoView({ behavior:"smooth", block:"start" });
    }
    function bindStartButtons() {
      document.querySelectorAll(".cp-start-move, #lst-premium-nav .lst-cta").forEach(function (link) {
        link.setAttribute("href", "#madeleine-connect");
        if (link.matches("#lst-premium-nav .lst-cta")) link.textContent = "Start Your Move " + String.fromCharCode(8594);
        if (link.dataset.cpMadeleineBound) return;
        link.dataset.cpMadeleineBound = "true";
        link.addEventListener("click", connectToMadeleine);
      });
    }
    bindStartButtons();
    var bindAttempts = 0;
    var bindTimer = window.setInterval(function () {
      bindStartButtons();
      bindAttempts += 1;
      if (document.querySelector("#lst-premium-nav .lst-cta") || bindAttempts > 40) window.clearInterval(bindTimer);
    }, 250);

    function personalizeChat() {
      document.querySelectorAll('#chat-app .launcher > .pointer.avatar img').forEach(function (image) {
        if (image.src !== HEADSHOT) image.src = HEADSHOT;
        image.alt = "Madeleine Davis";
      });
    }
    personalizeChat();
    new MutationObserver(personalizeChat).observe(document.documentElement, { childList:true, subtree:true, attributes:true, attributeFilter:["src"] });

    window.clearTimeout(gateSafetyTimer);
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { releaseGate(true); });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { waitForPage(0); });
  else waitForPage(0);
})();

