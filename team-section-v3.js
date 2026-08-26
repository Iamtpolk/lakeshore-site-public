(function () {
  "use strict";

  if (window.__lakeshoreTeamSectionLoaded) return;
  window.__lakeshoreTeamSectionLoaded = true;

  var ASSET_ROOT = "https://iamtpolk.github.io/lakeshore-site-public/assets/team/";
  var members = [
    {
      name: "Tyler Polk",
      role: "Founder of Lakeshore Team, Brokered by eXp Realty",
      license: "REALTOR - License 995706344",
      specialty: "Leadership | Strategy | South Louisiana",
      bio: "Tyler Polk is the founder of Lakeshore Team, brokered by eXp Realty, serving agents and clients across South Louisiana, with a focus on growth, leadership, systems, and real relationships. He specializes in residential, commercial, investment, and distressed properties. He built his business through consistency, adaptability, and a genuine drive to help people get better, personally and professionally.",
      image: "tyler-polk.webp",
      position: "center bottom",
      connect: "https://popl.co/profile/tpolktherealtor",
      socials: [
        ["instagram", "https://www.instagram.com/tpolk_therealtor/"],
        ["facebook", "https://www.facebook.com/tyler.polk.908"],
        ["linkedin", "https://www.linkedin.com/in/tyler-polk/"],
        ["threads", "https://www.threads.com/@tpolk_therealtor"],
        ["youtube", "https://www.youtube.com/@tyler_polk"]
      ]
    },
    {
      name: "Chelsea Porter",
      role: "Residential Specialist",
      license: "REALTOR - License 995718627",
      specialty: "Organized | Detail-focused | Client-first",
      bio: "Chelsea is passionate about delivering a seamless, stress-free real estate experience. Known for her organization, attention to detail, and commitment to exceptional service, Chelsea is dedicated to helping every client feel confident from start to finish.",
      image: "chelsea-porter.webp",
      position: "center 38%",
      connect: "https://m.me/61582528467689",
      socials: [
        ["instagram", "https://www.instagram.com/cporter_realtor"],
        ["facebook", "https://www.facebook.com/profile.php?id=61582528467689"]
      ]
    },
    {
      name: "Madeleine Davis",
      role: "Residential Specialist / Marketing Genius",
      license: "REALTOR - License 995706355",
      specialty: "Personalized guidance | Southwest Louisiana",
      bio: "Madeleine guides buyers and sellers throughout Southwest Louisiana with a thoughtful and personalized approach. Friendly, responsive, and dedicated, she believes real estate is about more than transactions - it is about helping people navigate important life moments. She is committed to providing clear guidance and dependable support every step of the way.",
      image: "madeleine-davis.webp",
      position: "center 35%",
      connect: "https://hihello.com/p/593bf9e9-8a27-4b7d-8e6a-60473c6a7fbf",
      socials: [
        ["instagram", "https://www.instagram.com/movingwmadeleine"],
        ["facebook", "https://www.facebook.com/share/1DPDneSKJH/?mibextid=wwXIfr"]
      ]
    }
  ];

  var icons = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="lst-instagram-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#feda75"/><stop offset=".28" stop-color="#fa7e1e"/><stop offset=".52" stop-color="#d62976"/><stop offset=".76" stop-color="#962fbf"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#lst-instagram-gradient)"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#lst-instagram-gradient)"/><circle cx="17.5" cy="6.5" r="1" fill="#d62976" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4.4c-.5-.1-2.2-.2-4.1-.2-4 0-6.7 2.4-6.7 6.9V15H2v4h4.2v10h5.1V19h4.2l.7-4h-4.9v-3.5C11.3 10.3 11.6 8 14 8Z" transform="scale(.75) translate(5 0)"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 7.8A2.3 2.3 0 1 0 5.3 3a2.3 2.3 0 0 0 0 4.7ZM3.3 21h4V9.2h-4V21Zm6.5 0h4v-6.5c0-1.7.3-3.4 2.5-3.4 2.2 0 2.2 2 2.2 3.5V21h4v-7.2c0-3.6-.8-6.3-5-6.3-2 0-3.4 1.1-4 2.1h-.1V9.2H9.8V21Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 7.4a3 3 0 0 0-2.1-2.1C18 4.8 12 4.8 12 4.8s-6 0-7.9.5A3 3 0 0 0 2 7.4 31 31 0 0 0 1.5 12c0 1.5.1 3.1.5 4.6a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.5.5-3.1.5-4.6s-.1-3.1-.5-4.6ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z"/></svg>',
    threads: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 11.1c-.1-2.6-1.7-4-4.4-4.1-2.1-.1-3.7.8-4.6 2.4l2.2 1.1c.5-.9 1.3-1.3 2.4-1.3 1.2 0 2 .5 2.2 1.5-3.8-.2-6.3 1.2-6.3 3.8 0 2.2 1.8 3.7 4.1 3.7 2.2 0 3.8-1.2 4.3-3.3 1 .6 1.6 1.5 1.6 2.7 0 2.8-2.4 4.4-6.1 4.4-5.5 0-8.7-3.9-8.7-9.8 0-6 3.4-9.8 8.7-9.8 4.2 0 7.1 2.2 8.1 6.1l2.2-.6C21.2 3 17.5.1 12.1.1 5.5.1 1 4.9 1 12.2 1 19.4 5.4 24 12.1 24c5.1 0 8.5-2.6 8.5-6.5 0-3-1.5-5.1-3.9-6.4Zm-4.2 4.9c-1.1 0-1.9-.6-1.9-1.5 0-1.2 1.2-1.8 3.9-1.6-.1 2.1-.8 3.1-2 3.1Z"/></svg>'
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char];
    });
  }

  function card(member) {
    var socials = member.socials.map(function (social) {
      var label = social[0].charAt(0).toUpperCase() + social[0].slice(1);
      return '<a class="lst-team-social lst-team-social--' + social[0] + '" href="' + escapeHtml(social[1]) + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHtml(member.name + ' on ' + label) + '">' + icons[social[0]] + '</a>';
    }).join("");

    return '<article class="lst-team-card">' +
      '<div class="lst-team-glow" aria-hidden="true"></div>' +
      '<div class="lst-team-portrait"><img src="' + ASSET_ROOT + member.image + '" alt="' + escapeHtml(member.name + ', ' + member.role) + '" loading="lazy" decoding="async" style="object-position:' + member.position + '"></div>' +
      '<div class="lst-team-card-body">' +
        '<p class="lst-team-specialty">' + escapeHtml(member.specialty) + '</p>' +
        '<h3>' + escapeHtml(member.name) + '</h3>' +
        '<p class="lst-team-role">' + escapeHtml(member.role) + '</p>' +
        '<p class="lst-team-license">' + escapeHtml(member.license) + '</p>' +
        '<p class="lst-team-bio">' + escapeHtml(member.bio) + '</p>' +
        '<div class="lst-team-actions"><div class="lst-team-socials">' + socials + '</div>' +
        '<a class="lst-team-connect" href="' + escapeHtml(member.connect) + '" target="_blank" rel="noopener noreferrer">Connect <span aria-hidden="true">&rarr;</span></a></div>' +
      '</div>' +
    '</article>';
  }

  var css = `
    #lst-team-root { order: 8 !important; position: relative; overflow: hidden; padding: clamp(72px,8vw,118px) 24px; color:#f7f4ec; background: radial-gradient(circle at 50% 0,rgba(177,154,85,.18),transparent 35%),linear-gradient(145deg,#121513 0%,#1b211d 50%,#101210 100%); }
    #lst-team-root::before { content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,rgba(255,255,255,.025),transparent 42%); }
    #lst-team-root * { box-sizing:border-box; }
    .lst-team-wrap { position:relative;z-index:1;max-width:1440px;margin:0 auto; }
    .lst-team-head { max-width:760px;margin:0 auto clamp(38px,5vw,62px);text-align:center; }
    .lst-team-kicker { margin:0 0 12px;color:#c4ad66;font:700 12px/1.2 Inter,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase; }
    .lst-team-head h2 { margin:0;color:#fff;font:500 clamp(38px,4.7vw,68px)/1.04 Georgia,serif;letter-spacing:-.025em; }
    .lst-team-intro { max-width:66ch;margin:18px auto 0;color:rgba(255,255,255,.7);font:400 16px/1.7 Inter,Arial,sans-serif; }
    .lst-team-grid { display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(16px,1.8vw,26px);align-items:stretch; }
    .lst-team-card { position:relative;display:flex;flex-direction:column;min-width:0;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:24px;background:linear-gradient(155deg,rgba(255,255,255,.13),rgba(255,255,255,.055));box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 24px 50px rgba(0,0,0,.25);backdrop-filter:blur(18px) saturate(125%);-webkit-backdrop-filter:blur(18px) saturate(125%);transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease; }
    .lst-team-card:hover { transform:translateY(-7px);border-color:rgba(196,173,102,.55);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 32px 66px rgba(0,0,0,.34),0 16px 42px rgba(177,154,85,.1); }
    .lst-team-glow { position:absolute;z-index:0;left:12%;right:12%;bottom:-30px;height:80px;border-radius:50%;background:rgba(177,154,85,.72);filter:blur(32px);opacity:.26;transition:opacity .28s ease; }
    .lst-team-card:hover .lst-team-glow { opacity:.5; }
    .lst-team-portrait { position:relative;z-index:1;aspect-ratio:4/5;overflow:hidden;background:linear-gradient(145deg,#d8d1c3,#9e9179); }
    .lst-team-portrait::after { content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 58%,rgba(14,17,15,.56) 100%);pointer-events:none; }
    .lst-team-portrait img { width:100%!important;height:100%!important;display:block!important;visibility:visible!important;opacity:1!important;object-fit:cover!important;transition:transform .5s ease; }
    .lst-team-card:hover .lst-team-portrait img { transform:scale(1.025); }
    .lst-team-card-body { position:relative;z-index:1;display:flex;flex:1;flex-direction:column;padding:24px 22px 22px; }
    .lst-team-specialty { margin:0 0 12px;color:#c7b36f;font:700 10px/1.35 Inter,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase; }
    .lst-team-card h3 { margin:0;color:#fff;font:500 clamp(25px,2vw,32px)/1.05 Georgia,serif;letter-spacing:-.015em; }
    .lst-team-role { min-height:38px;margin:8px 0 3px;color:rgba(255,255,255,.82);font:600 12px/1.45 Inter,Arial,sans-serif;letter-spacing:.035em;text-transform:uppercase; }
    .lst-team-license { margin:0;color:rgba(255,255,255,.48);font:500 10px/1.5 Inter,Arial,sans-serif;letter-spacing:.04em; }
    .lst-team-bio { flex:1;margin:18px 0 22px;color:rgba(255,255,255,.68);font:400 13px/1.65 Inter,Arial,sans-serif; }
    .lst-team-actions { display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:17px;border-top:1px solid rgba(255,255,255,.11); }
    .lst-team-socials { display:flex;flex-wrap:wrap;gap:7px; }
    .lst-team-social { display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;color:#fff;border:1px solid rgba(255,255,255,.15);border-radius:10px;background:rgba(255,255,255,.075);box-shadow:inset 0 1px 0 rgba(255,255,255,.12);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease; }
    .lst-team-social svg { width:16px;height:16px;fill:currentColor;stroke:currentColor;stroke-width:1.7; }
    .lst-team-social:hover { transform:translateY(-2px);background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.3); }
    .lst-team-social--facebook { color:#1877f2;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 5px 14px rgba(24,119,242,.1); }
    .lst-team-social--linkedin { color:#0a66c2;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 5px 14px rgba(10,102,194,.1); }
    .lst-team-social--youtube { color:#ff0033;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 5px 14px rgba(255,0,51,.1); }
    .lst-team-social--threads { color:#fff;background:rgba(0,0,0,.32);border-color:rgba(255,255,255,.2); }
    .lst-team-connect { display:inline-flex;min-height:38px;align-items:center;justify-content:center;gap:8px;padding:0 14px;white-space:nowrap;color:#211d12!important;border:1px solid #aa9149;border-radius:11px;background:linear-gradient(135deg,#cdbb86,#b19a55);box-shadow:0 8px 20px rgba(177,154,85,.16);font:700 11px/1 Inter,Arial,sans-serif;letter-spacing:.055em;text-decoration:none!important;text-transform:uppercase;transition:transform .2s ease,filter .2s ease; }
    .lst-team-connect:hover { transform:translateY(-2px);filter:brightness(1.07); }
    .lst-team-social:focus-visible,.lst-team-connect:focus-visible { outline:2px solid #d7c582;outline-offset:3px; }
    .lst-team-footer { display:flex;align-items:center;justify-content:center;margin-top:clamp(34px,4vw,50px); }
    .lst-team-full { display:inline-flex;min-height:50px;align-items:center;justify-content:center;gap:10px;padding:0 24px;color:#fff!important;border:1px solid rgba(255,255,255,.2);border-radius:14px;background:rgba(255,255,255,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.1);backdrop-filter:blur(12px);font:700 12px/1 Inter,Arial,sans-serif;letter-spacing:.09em;text-decoration:none!important;text-transform:uppercase;transition:background .2s ease,border-color .2s ease,transform .2s ease; }
    .lst-team-full:hover { transform:translateY(-2px);background:rgba(177,154,85,.17);border-color:rgba(196,173,102,.55); }
    @media(max-width:1180px){.lst-team-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:820px;margin:0 auto}.lst-team-role{min-height:0}}
    @media(max-width:620px){#lst-team-root{padding:62px 16px}.lst-team-grid{grid-template-columns:1fr;max-width:430px;gap:20px}.lst-team-head{margin-bottom:34px}.lst-team-head h2{font-size:40px}.lst-team-intro{font-size:14px}.lst-team-card-body{padding:22px 19px 20px}.lst-team-bio{font-size:13px}.lst-team-actions{align-items:flex-end}.lst-team-connect{min-height:40px}}
    @media(prefers-reduced-motion:reduce){.lst-team-card,.lst-team-card *{transition:none!important}}
  `;

  function build() {
    if (document.getElementById("lst-team-root")) return;
    var house = document.querySelector("body.home .md-house");
    var footer = document.querySelector("body.home .md-footer");
    if (!house || !footer || !footer.parentNode) return;

    var section = document.createElement("section");
    section.id = "lst-team-root";
    section.setAttribute("aria-labelledby", "lst-team-heading");
    section.innerHTML = '<div class="lst-team-wrap"><header class="lst-team-head"><p class="lst-team-kicker">Meet the Lakeshore Team</p><h2 id="lst-team-heading">The people behind every move.</h2><p class="lst-team-intro">Four specialists. One standard of service. Meet the South Louisiana real estate professionals who bring strategy, care, and steady guidance to every client relationship.</p></header><div class="lst-team-grid">' + members.map(card).join("") + '</div><div class="lst-team-footer"><a class="lst-team-full" href="/myteam">Meet the Full Team <span aria-hidden="true">&rarr;</span></a></div></div>';
    footer.parentNode.insertBefore(section, footer);
  }

  if (!document.getElementById("lakeshore-team-section-styles")) {
    var style = document.createElement("style");
    style.id = "lakeshore-team-section-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }
  build();
  new MutationObserver(build).observe(document.documentElement, { childList: true, subtree: true });
})();

