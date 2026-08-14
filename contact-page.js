(function () {
  "use strict";

  if (window.__lakeshoreContactPageLoaded) return;
  window.__lakeshoreContactPageLoaded = true;
  if (!/^\/contact\/?$/.test(window.location.pathname)) return;

  var ASSET_ROOT = "https://iamtpolk.github.io/lakeshore-site-public/assets/team/";
  var members = [
    { name:"Tyler Polk", role:"Founder of Lakeshore Team, Brokered by eXp Realty", license:"License 995706344", image:"tyler-polk.webp", position:"center bottom", region:"South Louisiana", connect:"https://popl.co/profile/tpolktherealtor", action:"View Tyler's Contact Card", instagram:"https://www.instagram.com/tpolk_therealtor/", facebook:"https://www.facebook.com/tyler.polk.908", phone:"+13372414963" },
    { name:"Chelsea Porter", role:"Residential Specialist", license:"License 995718627", image:"chelsea-porter.webp", position:"center 38%", region:"Acadiana", connect:"https://m.me/61582528467689", action:"Message Chelsea", instagram:"https://www.instagram.com/cporter_realtor", facebook:"https://www.facebook.com/profile.php?id=61582528467689" },
    { name:"Madeleine Davis", role:"Residential Specialist / Marketing Genius", license:"License 995706355", image:"madeleine-davis.webp", position:"center 35%", region:"Southwest Louisiana", connect:"https://hihello.com/p/593bf9e9-8a27-4b7d-8e6a-60473c6a7fbf", action:"View Madeleine's Contact Card", instagram:"https://www.instagram.com/movingwmadeleine", facebook:"https://www.facebook.com/share/1DPDneSKJH/?mibextid=wwXIfr" },
    { name:"Carlie Trahan", role:"Residential Specialist", license:"License 995717085", image:"carlie-trahan.webp", position:"center 42%", region:"Acadiana", connect:"https://popl.co/card/pGPkjtrU/1/preview?showappcta=false", action:"View Carlie's Contact Card", instagram:"https://www.instagram.com/movewithcarlie", facebook:"https://www.facebook.com/share/1GrrjiMPmc/?mibextid=wwXIfr" }
  ];

  var icons = {
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="lst-contact-ig" x1="2" y1="22" x2="22" y2="2"><stop stop-color="#feda75"/><stop offset=".28" stop-color="#fa7e1e"/><stop offset=".52" stop-color="#d62976"/><stop offset=".76" stop-color="#962fbf"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#lst-contact-ig)" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#lst-contact-ig)" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="#d62976"/></svg>',
    facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 8.1h3.1V4.4c-.5-.1-2.2-.2-4.1-.2-4 0-6.7 2.4-6.7 6.9V15H2.3v4.2h4.3V24h5.1v-4.8h4.2l.7-4.2h-4.9v-3.5c0-1.2.3-3.4 2.6-3.4Z"/></svg>',
    phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 3.8 5.6c-.8.8-.9 2.1-.3 3.1 2.7 5 6.8 9.1 11.8 11.8 1 .6 2.3.5 3.1-.3l2.8-2.8-4.6-4.6-2.2 2.2a15.4 15.4 0 0 1-5.4-5.4l2.2-2.2-4.6-4.6Z"/></svg>'
  };

  function esc(v){return String(v).replace(/[&<>\"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  function iconLink(type,url,label){return '<a class="lst-contact-social lst-contact-social--'+type+'" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(label)+'">'+icons[type]+'</a>';}
  function card(m){
    var socials = iconLink("instagram",m.instagram,m.name+" on Instagram") + iconLink("facebook",m.facebook,m.name+" on Facebook");
    if(m.phone) socials += '<a class="lst-contact-social lst-contact-social--phone" href="tel:'+m.phone+'" aria-label="Call '+esc(m.name)+'">'+icons.phone+'</a>';
    return '<article class="lst-contact-card"><div class="lst-contact-photo"><img src="'+ASSET_ROOT+m.image+'" alt="'+esc(m.name)+'" loading="lazy" decoding="async" style="object-position:'+m.position+'"></div><div class="lst-contact-card-copy"><p class="lst-contact-region">'+esc(m.region)+'</p><h2>'+esc(m.name)+'</h2><p class="lst-contact-role">'+esc(m.role)+'</p><p class="lst-contact-license">REALTOR &middot; '+esc(m.license)+'</p><div class="lst-contact-card-foot"><div class="lst-contact-socials">'+socials+'</div><a class="lst-contact-connect" href="'+esc(m.connect)+'" target="_blank" rel="noopener noreferrer">'+esc(m.action)+' <span aria-hidden="true">&rarr;</span></a></div></div></article>';
  }

  var css = `
    body:not(.home){background:#f8f7f2!important;color:#202322}
    body:not(.home) .md-header{position:relative;z-index:20}
    #lst-contact-page{position:relative;overflow:hidden;background:radial-gradient(circle at 82% 12%,rgba(185,144,82,.2),transparent 28%),linear-gradient(145deg,#240f0e 0%,#341614 55%,#171313 100%);color:#f8f7f2}
    #lst-contact-page *{box-sizing:border-box}
    #lst-contact-page::before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,rgba(255,255,255,.045),transparent 38%),repeating-radial-gradient(ellipse at 88% 18%,transparent 0 35px,rgba(185,144,82,.055) 36px 37px,transparent 38px 66px)}
    .lst-contact-hero{position:relative;z-index:1;max-width:1260px;margin:0 auto;padding:clamp(78px,9vw,138px) 24px clamp(52px,6vw,86px);text-align:center}
    .lst-contact-kicker{margin:0 0 14px;color:#d7c582;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase}
    .lst-contact-hero h1{max-width:940px;margin:0 auto;color:#fff;font:500 clamp(46px,6vw,82px)/.98 Georgia,serif;letter-spacing:-.04em}
    .lst-contact-hero>p:last-child{max-width:650px;margin:22px auto 0;color:rgba(248,247,242,.74);font:400 16px/1.72 Inter,Arial,sans-serif}
    .lst-contact-directory{position:relative;z-index:2;padding:0 24px clamp(76px,8vw,116px)}
    .lst-contact-grid{display:grid;max-width:1380px;margin:0 auto;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
    .lst-contact-card{display:flex;min-width:0;flex-direction:column;overflow:hidden;border:1px solid rgba(234,217,166,.27);border-radius:24px;background:linear-gradient(155deg,rgba(248,247,242,.13),rgba(248,247,242,.065));box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 24px 55px rgba(0,0,0,.27);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);transition:transform .25s ease,border-color .25s ease}
    .lst-contact-card:hover{transform:translateY(-6px);border-color:rgba(215,197,130,.62)}
    .lst-contact-photo{aspect-ratio:4/4.6;overflow:hidden;background:#7d6e4e}
    .lst-contact-photo img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;visibility:visible!important;opacity:1!important;transition:transform .45s ease}
    .lst-contact-card:hover img{transform:scale(1.025)}
    .lst-contact-card-copy{display:flex;flex:1;flex-direction:column;padding:23px 21px 21px}
    .lst-contact-region{margin:0 0 9px;color:#d7c582;font:700 10px/1.3 Inter,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase}
    .lst-contact-card h2{margin:0;color:#fff;font:500 29px/1.05 Georgia,serif}
    .lst-contact-role{min-height:38px;margin:8px 0 4px;color:rgba(248,247,242,.85);font:600 11px/1.45 Inter,Arial,sans-serif;letter-spacing:.04em;text-transform:uppercase}
    .lst-contact-license{margin:0;color:rgba(248,247,242,.52);font:500 10px/1.5 Inter,Arial,sans-serif}
    .lst-contact-card-foot{display:flex;flex:1;flex-direction:column;justify-content:flex-end;gap:17px;margin-top:22px;padding-top:17px;border-top:1px solid rgba(215,197,130,.24)}
    .lst-contact-socials{display:flex;gap:8px}
    .lst-contact-social{display:inline-flex;width:36px;height:36px;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.18);border-radius:11px;background:rgba(255,255,255,.09)}
    .lst-contact-social svg{width:17px;height:17px}.lst-contact-social--instagram{color:#d62976}.lst-contact-social--facebook{color:#1877f2}.lst-contact-social--phone{color:#55c271}.lst-contact-social svg path{fill:currentColor}
    .lst-contact-connect{display:flex;min-height:44px;align-items:center;justify-content:space-between;gap:10px;padding:0 15px;color:#240f0e!important;border:1px solid #d7c582;border-radius:12px;background:linear-gradient(135deg,#d7c582,#b89052);font:800 10px/1.2 Inter,Arial,sans-serif;letter-spacing:.055em;text-decoration:none!important;text-transform:uppercase;transition:filter .2s ease,transform .2s ease}
    .lst-contact-connect:hover{filter:brightness(1.08);transform:translateY(-2px)}
    body:not(.home) .md-form{position:relative!important;min-height:0!important;margin:0!important;padding:clamp(76px,8vw,118px) 24px!important;background:radial-gradient(circle at 12% 8%,rgba(185,144,82,.17),transparent 28%),linear-gradient(145deg,#202322,#151817 68%,#202322)!important;color:#f8f7f2!important}
    body:not(.home) .md-form::before{content:"Not sure who to contact?";display:block;max-width:760px;margin:0 auto 12px;color:#d7c582;text-align:center;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase}
    body:not(.home) .md-form h2{max-width:760px;margin:0 auto 34px!important;color:#fff!important;text-align:center;font:500 clamp(38px,4.5vw,58px)/1.03 Georgia,serif!important;letter-spacing:-.03em}
    body:not(.home) .md-form h2::after{content:"Tell us what you need and the right Lakeshore Team specialist will follow up.";display:block;max-width:610px;margin:16px auto 0;color:rgba(248,247,242,.68);font:400 14px/1.7 Inter,Arial,sans-serif;letter-spacing:0;text-transform:none}
    body:not(.home) .md-form-container{max-width:820px!important;margin:0 auto!important;padding:clamp(24px,4vw,42px)!important;border:1px solid rgba(185,144,82,.34)!important;border-radius:26px!important;background:linear-gradient(155deg,rgba(52,24,22,.9),rgba(36,15,14,.84))!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.13),0 30px 70px rgba(0,0,0,.34)!important;backdrop-filter:blur(18px)}
    body:not(.home) .md-form input,body:not(.home) .md-form textarea{border-color:rgba(248,247,242,.22)!important;border-radius:11px!important;background:rgba(248,247,242,.09)!important;color:#fff!important}
    body:not(.home) .md-form input::placeholder,body:not(.home) .md-form textarea::placeholder{color:rgba(248,247,242,.56)!important}
    body:not(.home) .md-form .submit{border-radius:12px!important;background:linear-gradient(135deg,#d7c582,#b89052)!important;color:#240f0e!important;font-weight:800!important}
    body:not(.home) .md-form .disclaimer-content{color:rgba(248,247,242,.56)!important}body:not(.home) .md-form .disclaimer-content a{color:#d7c582!important}
    @media(max-width:1120px){.lst-contact-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:820px}.lst-contact-role{min-height:0}}
    @media(max-width:620px){.lst-contact-hero{padding:68px 18px 46px}.lst-contact-hero h1{font-size:46px}.lst-contact-directory{padding:0 16px 66px}.lst-contact-grid{grid-template-columns:1fr;max-width:430px}.lst-contact-card-copy{padding:21px 18px}body:not(.home) .md-form{padding:64px 16px!important}body:not(.home) .md-form-container{padding:23px 16px!important;border-radius:22px!important}}
    @media(prefers-reduced-motion:reduce){#lst-contact-page *,#lst-contact-page *::before,#lst-contact-page *::after{transition:none!important}}
  `;

  function build(){
    var form=document.querySelector("main>.md-form");
    if(!form||!form.parentNode||document.getElementById("lst-contact-page"))return;
    var section=document.createElement("section");section.id="lst-contact-page";section.setAttribute("aria-labelledby","lst-contact-title");
    section.innerHTML='<div class="lst-contact-hero"><p class="lst-contact-kicker">Connect With Lakeshore Team</p><h1 id="lst-contact-title">The right person for your next move.</h1><p>Choose the specialist who best fits your needs, or send one message to the team and we will make sure it reaches the right person.</p></div><div class="lst-contact-directory"><div class="lst-contact-grid">'+members.map(card).join("")+'</div></div>';
    form.parentNode.insertBefore(section,form);
    var heading=form.querySelector("h2");if(heading)heading.textContent="Start the conversation.";
  }

  if(!document.getElementById("lakeshore-contact-page-styles")){var style=document.createElement("style");style.id="lakeshore-contact-page-styles";style.textContent=css;document.head.appendChild(style);}
  build();new MutationObserver(build).observe(document.documentElement,{childList:true,subtree:true});
})();

