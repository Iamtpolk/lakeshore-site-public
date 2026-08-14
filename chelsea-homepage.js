(function () {
  "use strict";

  if (window.__chelseaHomepageLoaded) return;
  if (!/^chelseaporter\./i.test(window.location.hostname)) return;
  if ((window.location.pathname.replace(/\/$/, "") || "/") !== "/") return;
  window.__chelseaHomepageLoaded = true;

  var ASSET_ROOT = "https://iamtpolk.github.io/lakeshore-site-public/assets/team/";
  var HEADSHOT = ASSET_ROOT + "chelsea-porter.webp";

  function waitForPage(attempt) {
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
      node.textContent = node.textContent.replace(/â†’|Â†’/g, "→").replace(/Â·/g, "·");
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
      .cp-actions{display:flex;flex-wrap:wrap;gap:12px}.cp-button{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 22px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:var(--cp-gold);color:#17120c!important;font-size:.72rem;font-weight:800;letter-spacing:.11em;text-decoration:none!important;text-transform:uppercase}.cp-button.cp-secondary{background:rgba(255,255,255,.07);color:#fff!important;backdrop-filter:blur(12px)}
      .cp-portrait-wrap{position:relative;min-height:580px}.cp-portrait{position:absolute;inset:0 0 0 8%;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:180px 180px 24px 24px;background:#cfc2b4;box-shadow:0 32px 80px rgba(0,0,0,.38)}.cp-portrait img{width:100%;height:100%;object-fit:cover;object-position:center 34%}.cp-portrait:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgba(18,9,8,.38))}.cp-signature{position:absolute;z-index:2;right:-20px;bottom:36px;width:230px;padding:20px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:rgba(248,247,242,.12);backdrop-filter:blur(18px);box-shadow:0 18px 50px rgba(0,0,0,.24)}.cp-signature strong{display:block;font-family:"Playfair Display",serif;font-size:1.35rem}.cp-signature span{display:block;margin-top:6px;color:#dbc786;font-size:.68rem;font-weight:700;letter-spacing:.11em;text-transform:uppercase}
      .cp-section{padding:110px 0}.cp-intro{background:var(--cp-ivory)}.cp-section-head{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:end;margin-bottom:58px}.cp-kicker{color:var(--cp-gold);font-size:.7rem;font-weight:800;letter-spacing:.19em;text-transform:uppercase}.cp-section-head h2,.cp-listing-head h2{max-width:650px;margin:10px 0 0;font-size:clamp(2.8rem,5vw,5.1rem);font-weight:500;line-height:.98;letter-spacing:-.045em}.cp-section-head p{margin:0;color:#575853;font-size:1rem;line-height:1.8}.cp-values{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--cp-line);border-bottom:1px solid var(--cp-line)}.cp-value{min-height:280px;padding:34px 32px;border-right:1px solid var(--cp-line)}.cp-value:last-child{border:0}.cp-value-num{color:var(--cp-gold);font-family:"Playfair Display",serif;font-size:1.1rem}.cp-value h3{margin:70px 0 14px;font-family:"Playfair Display",serif;font-size:1.65rem;font-weight:600}.cp-value p{margin:0;color:#62635e;line-height:1.7}
      .cp-reviews{color:#fff;background:linear-gradient(135deg,#24100f,#150a09 62%,#202322)}.cp-reviews .cp-section-head p{color:rgba(255,255,255,.66)}.cp-review-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}.cp-review{display:flex;flex-direction:column;min-height:360px;padding:36px;border:1px solid rgba(255,255,255,.13);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045));backdrop-filter:blur(18px);box-shadow:0 18px 55px rgba(0,0,0,.2)}.cp-stars{color:#d8b965;font-size:1.1rem;letter-spacing:.18em}.cp-quote{margin:30px 0;font-family:"Playfair Display",serif;font-size:clamp(1.35rem,2vw,1.9rem);line-height:1.48}.cp-reviewer{display:flex;align-items:center;gap:14px;margin-top:auto}.cp-avatar{display:grid;width:46px;height:46px;place-items:center;border:1px solid rgba(255,255,255,.18);border-radius:50%;background:#c6aa63;color:#1a120d;font-weight:800}.cp-reviewer strong{display:block}.cp-reviewer span{display:block;margin-top:4px;color:rgba(255,255,255,.55);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase}
      .cp-listing-head{padding:100px 0 32px;background:#efece3}.cp-listing-row{display:flex;justify-content:space-between;gap:28px;align-items:end}.cp-text-link{padding-bottom:7px;border-bottom:1px solid var(--cp-gold);font-size:.72rem;font-weight:800;letter-spacing:.1em;text-decoration:none!important;text-transform:uppercase}html.cp-agent-home .md-house{margin:0!important;padding:0 0 100px!important;background:#efece3!important}html.cp-agent-home .md-house>div:first-child,html.cp-agent-home .md-house h2{display:none!important}
      .cp-contact{padding:105px 0;background:var(--cp-ink);color:#fff}.cp-contact-card{display:grid;grid-template-columns:1.05fr .95fr;overflow:hidden;border:1px solid rgba(255,255,255,.13);border-radius:26px;background:linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.025));box-shadow:0 30px 80px rgba(0,0,0,.25)}.cp-contact-copy{padding:60px;background:linear-gradient(145deg,#321513,#240f0e)}.cp-contact-copy h2{margin:14px 0 20px;font-size:clamp(2.6rem,4vw,4.5rem);font-weight:500;line-height:1}.cp-contact-copy p{color:rgba(255,255,255,.68);line-height:1.75}.cp-contact-actions{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:14px;padding:60px}.cp-contact-actions p{margin:0 0 10px;color:rgba(255,255,255,.68);line-height:1.7}.cp-socials{display:flex;gap:10px;margin-top:10px}.cp-socials a{display:grid;width:44px;height:44px;place-items:center;border:1px solid rgba(255,255,255,.16);border-radius:12px;background:rgba(255,255,255,.07)}.cp-socials img{width:21px;height:21px}
      @media(max-width:900px){.cp-hero-grid,.cp-section-head,.cp-contact-card{grid-template-columns:1fr}.cp-portrait-wrap{min-height:620px}.cp-section-head{gap:25px}.cp-values{grid-template-columns:1fr}.cp-value{min-height:auto;border-right:0;border-bottom:1px solid var(--cp-line)}.cp-value h3{margin-top:32px}.cp-review-grid{grid-template-columns:1fr}.cp-listing-row{align-items:flex-start;flex-direction:column}}
      @media(max-width:560px){.cp-shell{width:min(100% - 26px,1180px)}.cp-hero{padding:120px 0 60px}.cp-hero h1{font-size:3.65rem}.cp-hero h1 span{margin-left:.35em}.cp-portrait-wrap{min-height:490px}.cp-portrait{left:0;border-radius:120px 120px 18px 18px}.cp-signature{right:10px;bottom:18px;width:205px}.cp-section{padding:76px 0}.cp-review{padding:26px}.cp-contact-copy,.cp-contact-actions{padding:30px}}
    `;
    document.head.appendChild(style);

    var home = document.createElement("div");
    home.className = "cp-home";
    home.innerHTML = `
      <section class="cp-hero">
        <div class="cp-shell cp-hero-grid">
          <div><div class="cp-eyebrow">Residential Specialist · South Louisiana</div><h1 class="cp-serif">Move with <span>confidence.</span></h1><p class="cp-hero-copy">Chelsea Porter delivers a seamless, stress-free real estate experience through thoughtful preparation, clear communication, and exceptional service from the first conversation to the closing table.</p><div class="cp-actions"><a class="cp-button" href="/contact">Start your move</a><a class="cp-button cp-secondary" href="/listing">Search homes</a></div></div>
          <div class="cp-portrait-wrap"><div class="cp-portrait"><img src="${HEADSHOT}" alt="Chelsea Porter, Residential Specialist with Lakeshore Team"></div><div class="cp-signature"><strong>Chelsea Porter</strong><span>Lakeshore Team · eXp Realty</span></div></div>
        </div>
      </section>
      <section class="cp-section cp-intro"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Why work with Chelsea</span><h2 class="cp-serif">A calmer way to make your move.</h2></div><p>Real estate decisions carry a lot of weight. Chelsea brings structure, responsiveness, and genuine care to the process so you always understand what is happening and what comes next.</p></div><div class="cp-values"><article class="cp-value"><span class="cp-value-num">01</span><h3>Organized &amp; detail-focused</h3><p>Every deadline, document, and next step is handled with care—keeping your transaction moving without unnecessary stress.</p></article><article class="cp-value"><span class="cp-value-num">02</span><h3>Clear communication</h3><p>You receive timely updates and straightforward guidance, with answers that help you make confident decisions.</p></article><article class="cp-value"><span class="cp-value-num">03</span><h3>Client-first guidance</h3><p>Your goals lead the process. Chelsea stays involved from the first conversation through closing and beyond.</p></article></div></div></section>
      <section class="cp-section cp-reviews"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Verified client reviews</span><h2 class="cp-serif">Kind words from real moves.</h2></div><p>Public Facebook recommendations from clients who trusted Chelsea to guide them home.</p></div><div class="cp-review-grid"><article class="cp-review"><div class="cp-stars" aria-label="5 out of 5 stars">★★★★★</div><p class="cp-quote">“The wife and I were moving across country on a very short timer, and Chelsea was there to help us every step of the way—even when we were 2,000 miles away.”</p><div class="cp-reviewer"><span class="cp-avatar">BL</span><div><strong>Benjamin Looney</strong><span>Facebook recommendation</span></div></div></article><article class="cp-review"><div class="cp-stars" aria-label="5 out of 5 stars">★★★★★</div><p class="cp-quote">“Chelsea was the best. Kept me updated with everything, very patient, answered every question I had. I highly recommend her.”</p><div class="cp-reviewer"><span class="cp-avatar">MM</span><div><strong>Megan Miller</strong><span>Facebook recommendation</span></div></div></article></div></div></section>
    `;
    main.insertBefore(home, main.firstChild);

    var listingHead = document.createElement("section");
    listingHead.className = "cp-home cp-listing-head";
    listingHead.innerHTML = `<div class="cp-shell cp-listing-row"><div><span class="cp-kicker">Featured homes</span><h2 class="cp-serif">Find your next address.</h2></div><a class="cp-text-link" href="/listing">Search all homes →</a></div>`;
    main.insertBefore(listingHead, listings);

    var contact = document.createElement("section");
    contact.className = "cp-home cp-contact";
    contact.id = "chelsea-contact";
    contact.innerHTML = `<div class="cp-shell cp-contact-card"><div class="cp-contact-copy"><span class="cp-kicker">Request a consultation</span><h2 class="cp-serif">Thinking about making a move?</h2><p>Tell Chelsea what you are planning. She will follow up personally with clear next steps—no pressure and no generic sales pitch.</p></div><div class="cp-contact-actions"><p>Ready when you are. Start with a quick conversation or visit the consultation page.</p><a class="cp-button" href="/contact">Request a consultation →</a><div class="cp-socials"><a href="https://www.instagram.com/cporter_realtor" aria-label="Chelsea on Instagram"><img src="https://cdn.simpleicons.org/instagram/E4405F" alt=""></a><a href="https://www.facebook.com/share/19TkPweKzQ/?mibextid=wwXIfr" aria-label="Chelsea on Facebook"><img src="https://cdn.simpleicons.org/facebook/1877F2" alt=""></a></div></div></div>`;
    main.insertBefore(contact, footer);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { waitForPage(0); });
  else waitForPage(0);
})();

