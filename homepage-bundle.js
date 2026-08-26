/* Lakeshore Team homepage bundle — generated from verified production modules. */

/* --- navbar.js --- */
/* Lakeshore TEAM (lakeshoreteam.com) — premium site-wide navigation.
   Loaded by Lofty's site-wide Script. The native Lofty header remains in the DOM
   as the source of truth for Register / Sign In; this presentation layer forwards
   those actions so the platform's authentication behavior is preserved. */
(function () {
  'use strict';

  if (window.__lstPremiumNav) return;
  window.__lstPremiumNav = 1;

  var ROUTES = [
    { label: 'Buy', href: '/listing' },
    { label: 'Sell', href: '/sell' },
    { label: 'Cash Offer', href: '/cash-offer' },
    { label: 'Our Team', href: '/myteam' },
    { label: 'Contact', href: '/contact' }
  ];
  var CTA_HREF = '/contact';
  var HOST = 'https://iamtpolk.github.io/lakeshore-site/';
  var attempts = 0;

  function text(node) {
    return ((node && (node.innerText || node.textContent)) || '').replace(/\s+/g, ' ').trim();
  }

  function findAction(label) {
    var controls = document.querySelectorAll('button, a');
    for (var i = 0; i < controls.length; i += 1) {
      if (text(controls[i]).toLowerCase() === label.toLowerCase() &&
          !controls[i].closest('#lst-premium-nav')) return controls[i];
    }
    return null;
  }

  function findNativeHeader() {
    var home = findAction('Home');
    var register = findAction('Register');
    var signIn = findAction('Sign In');
    var anchor = register || signIn || home;
    if (!anchor) return null;
    var node = anchor;
    while (node && node !== document.body) {
      if (node.tagName === 'HEADER' || node.getAttribute('role') === 'navigation' ||
          (node.querySelector && node.querySelector('img') && node.querySelectorAll('button, a').length >= 5)) {
        return node;
      }
      node = node.parentElement;
    }
    return null;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char];
    });
  }

  function navLinks(className) {
    return ROUTES.map(function (item) {
      return '<a class="' + className + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('');
  }

  function addStyles() {
    if (document.getElementById('lst-premium-nav-css')) return;
    var style = document.createElement('style');
    style.id = 'lst-premium-nav-css';
    style.textContent = [
      '#lst-premium-nav{--nav-gold:#c9ad63;--nav-ink:#11120f;position:fixed;top:clamp(12px,2vw,24px);left:50%;z-index:2147482500;width:min(1440px,calc(100% - clamp(24px,4vw,64px)));transform:translateX(-50%);font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#fff}',
      '#lst-premium-nav *{box-sizing:border-box}',
      '#lst-premium-nav .lst-shell{position:relative;display:grid;grid-template-columns:minmax(176px,1fr) auto minmax(176px,1fr);align-items:center;min-height:76px;padding:10px 12px 10px 20px;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:linear-gradient(115deg,rgba(18,19,16,.62),rgba(12,13,11,.76));box-shadow:inset 0 1px 0 rgba(255,255,255,.13),inset 0 -1px 0 rgba(255,255,255,.035),0 18px 45px rgba(0,0,0,.24);backdrop-filter:blur(16px) saturate(125%);-webkit-backdrop-filter:blur(16px) saturate(125%);transition:background .3s ease,border-color .3s ease,box-shadow .3s ease}',
      '#lst-premium-nav.lst-scrolled .lst-shell{background:linear-gradient(115deg,rgba(17,18,15,.88),rgba(9,10,8,.94));border-color:rgba(255,255,255,.2);box-shadow:inset 0 1px 0 rgba(255,255,255,.13),0 20px 48px rgba(0,0,0,.32)}',
      '#lst-premium-nav .lst-brand{display:flex;align-items:center;width:max-content;max-width:220px;padding:2px 6px;text-decoration:none;border-radius:9px}',
      '#lst-premium-nav .lst-brand img{display:block;max-width:100%;width:auto;height:48px;object-fit:contain;object-position:left center}',
      '#lst-premium-nav .lst-brand:focus-visible,#lst-premium-nav a:focus-visible,#lst-premium-nav button:focus-visible{outline:2px solid var(--nav-gold);outline-offset:3px}',
      '#lst-premium-nav .lst-links{display:flex;align-items:center;justify-content:center;gap:clamp(16px,2vw,32px)}',
      '#lst-premium-nav .lst-link{position:relative;padding:12px 0;color:rgba(255,255,255,.84);font-size:.76rem;font-weight:600;letter-spacing:.105em;text-transform:uppercase;text-decoration:none;white-space:nowrap;transition:color .2s ease}',
      '#lst-premium-nav .lst-link:after{content:"";position:absolute;left:0;right:100%;bottom:7px;height:1px;background:var(--nav-gold);transition:right .24s ease}',
      '#lst-premium-nav .lst-link:hover,#lst-premium-nav .lst-link[aria-current="page"]{color:#fff}',
      '#lst-premium-nav .lst-link:hover:after,#lst-premium-nav .lst-link[aria-current="page"]:after{right:0}',
      '#lst-premium-nav .lst-actions{display:flex;align-items:center;justify-content:flex-end;gap:8px}',
      '#lst-premium-nav button{font:inherit}',
      '#lst-premium-nav .lst-account,#lst-premium-nav .lst-menu-toggle,#lst-premium-nav .lst-close{appearance:none;border:0;color:rgba(255,255,255,.86);background:transparent;cursor:pointer}',
      '#lst-premium-nav .lst-account{padding:10px 9px;border-radius:10px;font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;transition:color .2s ease,background .2s ease}',
      '#lst-premium-nav .lst-account:hover,#lst-premium-nav .lst-account[aria-expanded="true"]{color:#fff;background:rgba(255,255,255,.08)}',
      '#lst-premium-nav .lst-cta{position:relative;isolation:isolate;display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 19px;border:1px solid rgba(255,255,255,.27);border-radius:13px;color:#fff;background:linear-gradient(135deg,rgba(255,255,255,.17),rgba(255,255,255,.065));box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(255,255,255,.04),0 9px 24px rgba(0,0,0,.22);font-size:.76rem;font-weight:700;letter-spacing:.085em;text-transform:uppercase;text-decoration:none;white-space:nowrap;overflow:hidden;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}',
      '#lst-premium-nav .lst-cta:before{content:"";position:absolute;z-index:-1;inset:0;background:linear-gradient(115deg,rgba(201,173,99,.22),transparent 46%);opacity:.8}',
      '#lst-premium-nav .lst-cta:hover{transform:translateY(-1px) scale(1.012);border-color:rgba(225,201,132,.52);box-shadow:inset 0 1px 0 rgba(255,255,255,.34),0 13px 28px rgba(0,0,0,.27)}',
      '#lst-premium-nav .lst-account-menu{position:absolute;top:calc(100% + 10px);right:132px;display:none;min-width:170px;padding:8px;border:1px solid rgba(255,255,255,.15);border-radius:13px;background:rgba(15,16,13,.95);box-shadow:0 16px 38px rgba(0,0,0,.3);backdrop-filter:blur(14px)}',
      '#lst-premium-nav .lst-account-menu[data-open="true"]{display:grid}',
      '#lst-premium-nav .lst-account-action{appearance:none;border:0;border-radius:8px;padding:11px 12px;color:#fff;background:transparent;text-align:left;cursor:pointer;font-size:.82rem}',
      '#lst-premium-nav .lst-account-action:hover{background:rgba(255,255,255,.08)}',
      '#lst-premium-nav .lst-menu-toggle{display:none;width:44px;height:44px;border-radius:11px;align-items:center;justify-content:center}',
      '#lst-premium-nav .lst-menu-toggle span,#lst-premium-nav .lst-menu-toggle:before,#lst-premium-nav .lst-menu-toggle:after{content:"";display:block;width:20px;height:1px;background:#fff;transition:transform .2s ease,opacity .2s ease}',
      '#lst-premium-nav .lst-menu-toggle span{margin:5px 0}',
      '#lst-premium-nav .lst-drawer{display:none}',
      '.lst-native-header-hidden{visibility:hidden!important;pointer-events:none!important}',
      '@media(max-width:1120px){#lst-premium-nav .lst-shell{grid-template-columns:minmax(150px,1fr) auto minmax(150px,1fr);padding-left:14px}#lst-premium-nav .lst-links{gap:15px}#lst-premium-nav .lst-link{font-size:.69rem;letter-spacing:.075em}#lst-premium-nav .lst-account{font-size:0;width:38px}#lst-premium-nav .lst-account:after{content:"Account";font-size:.64rem}#lst-premium-nav .lst-cta{padding:0 14px;font-size:.69rem}}',
      '@media(max-width:860px){#lst-premium-nav{top:10px;width:calc(100% - 20px)}#lst-premium-nav .lst-shell{display:flex;justify-content:space-between;min-height:66px;padding:8px 10px 8px 13px;border-radius:16px}#lst-premium-nav .lst-brand{max-width:176px}#lst-premium-nav .lst-brand img{height:42px}#lst-premium-nav .lst-links,#lst-premium-nav .lst-account,#lst-premium-nav .lst-actions>.lst-cta{display:none}#lst-premium-nav .lst-menu-toggle{display:flex;flex-direction:column}#lst-premium-nav .lst-drawer{position:absolute;top:calc(100% + 8px);left:0;right:0;display:block;visibility:hidden;opacity:0;transform:translateY(-7px);max-height:calc(100vh - 98px);overflow:auto;padding:10px;border:1px solid rgba(255,255,255,.16);border-radius:16px;background:rgba(13,14,12,.97);box-shadow:0 22px 50px rgba(0,0,0,.35);transition:opacity .2s ease,transform .2s ease,visibility .2s;backdrop-filter:blur(18px)}#lst-premium-nav.lst-menu-open .lst-drawer{visibility:visible;opacity:1;transform:none}#lst-premium-nav.lst-menu-open .lst-menu-toggle:before{transform:translateY(6px) rotate(45deg)}#lst-premium-nav.lst-menu-open .lst-menu-toggle span{opacity:0}#lst-premium-nav.lst-menu-open .lst-menu-toggle:after{transform:translateY(-6px) rotate(-45deg)}#lst-premium-nav .lst-mobile-link{display:flex;align-items:center;min-height:50px;padding:0 13px;border-radius:9px;color:rgba(255,255,255,.9);font-size:.86rem;font-weight:600;letter-spacing:.075em;text-transform:uppercase;text-decoration:none}#lst-premium-nav .lst-mobile-link:hover{background:rgba(255,255,255,.07)}#lst-premium-nav .lst-mobile-divider{height:1px;margin:8px 12px;background:rgba(255,255,255,.12)}#lst-premium-nav .lst-mobile-account{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:4px}#lst-premium-nav .lst-mobile-account button{min-height:44px;border:1px solid rgba(255,255,255,.14);border-radius:10px;color:#fff;background:rgba(255,255,255,.05);cursor:pointer}#lst-premium-nav .lst-drawer .lst-cta{width:calc(100% - 8px);margin:8px 4px 4px}}',
      '@media(max-width:430px){#lst-premium-nav .lst-brand{max-width:152px}#lst-premium-nav .lst-brand img{height:38px}}',
      '@media(prefers-reduced-motion:reduce){#lst-premium-nav *,#lst-premium-nav *:before,#lst-premium-nav *:after{scroll-behavior:auto!important;transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}',
      '@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){#lst-premium-nav .lst-shell{background:rgba(14,15,12,.94)}}'
    ].join('');
    document.head.appendChild(style);
  }

  function build() {
    if (document.getElementById('lst-premium-nav') || !document.body) return true;
    var nativeHeader = findNativeHeader();
    if (!nativeHeader) return false;

    var nativeLogo = nativeHeader.querySelector('img');
    var logoSrc = nativeLogo && nativeLogo.src ? nativeLogo.src : HOST + 'lakeshore-white-logo.png';
    var logoAlt = (nativeLogo && nativeLogo.alt) || 'Lakeshore Team, brokered by eXp Realty';
    var register = findAction('Register');
    var signIn = findAction('Sign In');

    addStyles();
    var nav = document.createElement('nav');
    nav.id = 'lst-premium-nav';
    nav.setAttribute('aria-label', 'Primary navigation');
    nav.innerHTML =
      '<div class="lst-shell">' +
        '<a class="lst-brand" href="/" aria-label="Lakeshore Team home"><img src="' + escapeHtml(logoSrc) + '" alt="' + escapeHtml(logoAlt) + '"></a>' +
        '<div class="lst-links">' + navLinks('lst-link') + '</div>' +
        '<div class="lst-actions">' +
          '<button class="lst-account" type="button" aria-expanded="false" aria-controls="lst-account-menu">Account</button>' +
          '<a class="lst-cta" href="' + CTA_HREF + '">Start Your Move&nbsp; <span aria-hidden="true">→</span></a>' +
          '<button class="lst-menu-toggle" type="button" aria-expanded="false" aria-controls="lst-mobile-menu" aria-label="Open navigation menu"><span></span></button>' +
        '</div>' +
        '<div class="lst-account-menu" id="lst-account-menu" data-open="false">' +
          '<button class="lst-account-action" type="button" data-native="register">Register</button>' +
          '<button class="lst-account-action" type="button" data-native="signin">Sign In</button>' +
        '</div>' +
      '</div>' +
      '<div class="lst-drawer" id="lst-mobile-menu" aria-hidden="true">' +
        navLinks('lst-mobile-link') +
        '<div class="lst-mobile-divider"></div>' +
        '<div class="lst-mobile-account"><button type="button" data-native="register">Register</button><button type="button" data-native="signin">Sign In</button></div>' +
        '<a class="lst-cta" href="' + CTA_HREF + '">Start Your Move&nbsp; <span aria-hidden="true">→</span></a>' +
      '</div>';

    document.body.appendChild(nav);
    nativeHeader.classList.add('lst-native-header-hidden');

    var accountButton = nav.querySelector('.lst-account');
    var accountMenu = nav.querySelector('.lst-account-menu');
    var menuButton = nav.querySelector('.lst-menu-toggle');
    var drawer = nav.querySelector('.lst-drawer');

    function closeAccount() {
      accountButton.setAttribute('aria-expanded', 'false');
      accountMenu.setAttribute('data-open', 'false');
    }
    function closeMenu(restoreFocus) {
      nav.classList.remove('lst-menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      drawer.setAttribute('aria-hidden', 'true');
      if (restoreFocus) menuButton.focus();
    }
    accountButton.addEventListener('click', function () {
      var open = accountButton.getAttribute('aria-expanded') !== 'true';
      accountButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      accountMenu.setAttribute('data-open', open ? 'true' : 'false');
    });
    menuButton.addEventListener('click', function () {
      var open = !nav.classList.contains('lst-menu-open');
      nav.classList.toggle('lst-menu-open', open);
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (open) {
        var first = drawer.querySelector('a, button');
        if (first) setTimeout(function () { first.focus(); }, 0);
      }
    });
    nav.addEventListener('click', function (event) {
      var action = event.target.closest('[data-native]');
      if (action) {
        var isRegister = action.getAttribute('data-native') === 'register';
        var target = isRegister ? register : signIn;
        closeAccount(); closeMenu(false);
        /* Use Lofty's supported public helpers. Native header nodes are replaced
           during Vue hydration, so retained DOM references can become detached. */
        if (window.Util && typeof window.Util[isRegister ? 'register' : 'login'] === 'function') {
          window.Util[isRegister ? 'register' : 'login']({ allowClose: true });
        } else if (target && document.documentElement.contains(target)) target.click();
      } else if (event.target.closest('.lst-mobile-link')) closeMenu(false);
    });
    document.addEventListener('click', function (event) {
      if (!event.target.closest('#lst-premium-nav')) closeAccount();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { closeAccount(); closeMenu(true); }
      if (event.key === 'Tab' && nav.classList.contains('lst-menu-open')) {
        var focusable = drawer.querySelectorAll('a[href],button:not([disabled])');
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });

    var current = location.pathname.replace(/\/+$/, '') || '/';
    nav.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href').replace(/\/+$/, '') || '/';
      if (href !== '/' && href === current) link.setAttribute('aria-current', 'page');
    });

    var ticking = false;
    function updateScroll() {
      nav.classList.toggle('lst-scrolled', window.scrollY > 24);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateScroll); }
    }, { passive: true });
    updateScroll();
    return true;
  }

  function boot() {
    if (build()) return;
    attempts += 1;
    if (attempts < 80) window.setTimeout(boot, 125);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();


/* --- footer-v6.js --- */
(function () {
  "use strict";

  if (window.__lakeshoreFooterLoaded) return;
  window.__lakeshoreFooterLoaded = true;

  var style = document.createElement("style");
  style.id = "lakeshore-footer-styles";
  style.textContent = `
    body .md-footer.lakeshore-footer-compact {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    body .md-footer.lakeshore-footer-compact .top-content {
      height: auto !important;
      min-height: 0 !important;
      padding: 16px clamp(18px, 4vw, 54px) !important;
      color: #4c4a43 !important;
      background: #f2eee4 !important;
      border-top: 1px solid rgba(177,154,85,.28);
      border-bottom: 1px solid rgba(45,67,54,.13);
    }

    body .md-footer.lakeshore-footer-compact .top-inner,
    body .md-footer.lakeshore-footer-compact .mls-declaimer-container-v2 {
      height: auto !important;
      min-height: 0 !important;
      margin: 0 auto !important;
      padding: 0 !important;
    }

    body .md-footer.lakeshore-footer-compact .mls-declaimer-container-v2 {
      display: flex !important;
      align-items: center !important;
      gap: 20px;
      font-size: 11px !important;
      line-height: 1.55 !important;
    }

    body .md-footer.lakeshore-footer-compact .mls-declaimer-container-v2 img {
      flex: 0 0 auto;
      width: auto !important;
      max-width: 72px !important;
      max-height: 30px !important;
      object-fit: contain;
    }

    body .md-footer.lakeshore-footer-compact .bottom-content {
      margin-top: 0 !important;
    }

    body .md-footer.lakeshore-footer-compact .lakeshore-social-row {
      margin-top: 24px !important;
      margin-bottom: 30px !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      min-height: 0 !important;
    }

    body .md-footer.lakeshore-footer-compact .lakeshore-social-section {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      min-height: 0 !important;
    }

    @media (min-width: 900px) {
      body .md-footer.lakeshore-footer-compact .bottom-inner > .flex-box {
        display: grid !important;
        grid-template-columns: .9fr 1.1fr 1.25fr;
        grid-template-areas:
          "brand contact navigation"
          "social contact navigation";
        column-gap: clamp(38px, 4vw, 72px);
        row-gap: 20px;
        align-items: start;
        height: auto !important;
        min-height: 0 !important;
        padding: 8px 0 34px !important;
      }

      body .md-footer.lakeshore-footer-compact .bottom-inner > .flex-box > .agent-logo {
        display: contents !important;
      }

      body .md-footer.lakeshore-footer-compact .logo-wrap {
        grid-area: brand;
        height: auto !important;
        min-height: 76px !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        align-items: flex-start !important;
      }

      body .md-footer.lakeshore-footer-compact .lakeshore-social-row {
        grid-area: social;
        display: flex !important;
        flex-wrap: nowrap !important;
        gap: 10px !important;
        width: 100% !important;
        margin: 0 !important;
        justify-content: flex-start !important;
      }

      body .md-footer.lakeshore-footer-compact .lakeshore-social-row > a {
        flex: 0 0 46px !important;
        margin: 0 !important;
      }

      body .md-footer.lakeshore-footer-compact .agent-wrap {
        grid-area: contact;
        width: auto !important;
        margin: 0 !important;
        padding: 29px 0 0 clamp(26px, 3vw, 46px) !important;
        border-left: 1px solid rgba(255,255,255,.13);
      }

      body .md-footer.lakeshore-footer-compact .agent-wrap::before,
      body .md-footer.lakeshore-footer-compact .main-menu::before {
        display: block;
        margin-bottom: 18px;
        color: #bba765;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .16em;
        line-height: 1;
      }

      body .md-footer.lakeshore-footer-compact .agent-wrap::before { content: "CONTACT"; }
      body .md-footer.lakeshore-footer-compact .main-menu::before { content: "EXPLORE"; }

      body .md-footer.lakeshore-footer-compact .main-menu {
        grid-area: navigation;
        display: grid !important;
        grid-template-columns: repeat(2, minmax(110px, 1fr)) !important;
        gap: 14px 30px !important;
        width: auto !important;
        height: auto !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 29px 0 0 clamp(26px, 3vw, 46px) !important;
        border-left: 1px solid rgba(255,255,255,.13);
      }

      body .md-footer.lakeshore-footer-compact .main-menu::before {
        grid-column: 1 / -1;
      }

      body .md-footer.lakeshore-footer-compact .main-menu > li,
      body .md-footer.lakeshore-footer-compact .main-menu .menu-item,
      body .md-footer.lakeshore-footer-compact .main-menu .footer-menu {
        width: auto !important;
        height: auto !important;
        min-height: 22px !important;
        margin: 0 !important;
      }

      body .md-footer.lakeshore-footer-compact .detail-wrap {
        height: auto !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 22px 0 !important;
        border-top: 1px solid rgba(255,255,255,.12);
        border-bottom: 1px solid rgba(255,255,255,.12);
      }

      body .md-footer.lakeshore-footer-compact .detail-wrap .custom-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px 28px;
      }

      body .md-footer.lakeshore-footer-compact .detail-wrap .custom-content p {
        margin: 0 !important;
      }

      body .md-footer.lakeshore-footer-compact .copyright {
        height: auto !important;
        min-height: 0 !important;
        padding: 22px 0 0 !important;
      }
    }

    body .md-footer a[href*="facebook.com"],
    body .md-footer a[href*="linkedin.com"],
    body .md-footer a[href*="zillow.com"],
    body .md-footer a[href*="instagram.com"],
    body .md-footer a[href*="youtube.com"],
    body .md-footer a[href*="maps.app.goo.gl"],
    body .md-footer a[aria-label="facebook"],
    body .md-footer a[aria-label="linkedin"],
    body .md-footer a[aria-label="zillow"],
    body .md-footer a[aria-label="instagram"],
    body .md-footer a[aria-label="youtube"],
    body .md-footer a[aria-label="google+"] {
      --social-color: #b19a55;
      position: relative;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      width: 46px !important;
      height: 46px !important;
      margin: 0 5px !important;
      color: var(--social-color) !important;
      background: linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.045)) !important;
      border: 1px solid rgba(255,255,255,.2) !important;
      border-radius: 14px !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.12), 0 8px 24px rgba(0,0,0,.2) !important;
      backdrop-filter: blur(14px) saturate(135%);
      -webkit-backdrop-filter: blur(14px) saturate(135%);
      overflow: hidden;
      transform: translateZ(0);
      transition: transform .2s ease, border-color .2s ease, background .2s ease, box-shadow .2s ease !important;
    }

    body .md-footer a[href*="facebook.com"], body .md-footer a[aria-label="facebook"] { --social-color: #1877f2; }
    body .md-footer a[href*="linkedin.com"], body .md-footer a[aria-label="linkedin"] { --social-color: #0a66c2; }
    body .md-footer a[href*="zillow.com"], body .md-footer a[aria-label="zillow"] { --social-color: #006aff; }
    body .md-footer a[href*="instagram.com"], body .md-footer a[aria-label="instagram"] { --social-color: #e4405f; }
    body .md-footer a[href*="youtube.com"], body .md-footer a[aria-label="youtube"] { --social-color: #ff0033; }
    body .md-footer a[href*="maps.app.goo.gl"], body .md-footer a[aria-label="google+"] { --social-color: #4285f4; }

    body .md-footer a[href*="facebook.com"] > *,
    body .md-footer a[href*="linkedin.com"] > *,
    body .md-footer a[href*="zillow.com"] > *,
    body .md-footer a[href*="instagram.com"] > *,
    body .md-footer a[href*="youtube.com"] > *,
    body .md-footer a[href*="maps.app.goo.gl"] > * {
      color: inherit !important;
      font-size: 19px !important;
      line-height: 1 !important;
    }

    body .md-footer a[href*="facebook.com"]:hover,
    body .md-footer a[href*="linkedin.com"]:hover,
    body .md-footer a[href*="zillow.com"]:hover,
    body .md-footer a[href*="instagram.com"]:hover,
    body .md-footer a[href*="youtube.com"]:hover,
    body .md-footer a[href*="maps.app.goo.gl"]:hover {
      color: #fff !important;
      background: var(--social-color) !important;
      border-color: color-mix(in srgb, var(--social-color) 78%, white) !important;
      box-shadow: 0 10px 28px color-mix(in srgb, var(--social-color) 35%, transparent) !important;
      transform: translateY(-3px);
    }

    body .md-footer a[href*="facebook.com"]:focus-visible,
    body .md-footer a[href*="linkedin.com"]:focus-visible,
    body .md-footer a[href*="zillow.com"]:focus-visible,
    body .md-footer a[href*="instagram.com"]:focus-visible,
    body .md-footer a[href*="youtube.com"]:focus-visible,
    body .md-footer a[href*="maps.app.goo.gl"]:focus-visible {
      outline: 2px solid var(--social-color) !important;
      outline-offset: 3px;
    }

    @media (max-width: 767px) {
      body .md-footer.lakeshore-footer-compact {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
      body .md-footer.lakeshore-footer-compact .lakeshore-social-row {
        margin-top: 18px !important;
        margin-bottom: 24px !important;
      }
      body .md-footer.lakeshore-footer-compact .top-content {
        padding: 14px 18px !important;
      }
      body .md-footer.lakeshore-footer-compact .mls-declaimer-container-v2 {
        align-items: flex-start !important;
        gap: 12px;
        font-size: 10px !important;
        line-height: 1.45 !important;
      }
      body .md-footer.lakeshore-footer-compact .mls-declaimer-container-v2 img {
        max-width: 54px !important;
        max-height: 24px !important;
      }
      body .md-footer.lakeshore-footer-compact .agent-wrap,
      body .md-footer.lakeshore-footer-compact .main-menu,
      body .md-footer.lakeshore-footer-compact .detail-wrap {
        height: auto !important;
        min-height: 0 !important;
      }
      body .md-footer a[href*="facebook.com"],
      body .md-footer a[href*="linkedin.com"],
      body .md-footer a[href*="zillow.com"],
      body .md-footer a[href*="instagram.com"],
      body .md-footer a[href*="youtube.com"],
      body .md-footer a[href*="maps.app.goo.gl"] {
        width: 43px !important;
        height: 43px !important;
        margin: 4px !important;
        border-radius: 13px !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      body .md-footer a[href*="facebook.com"],
      body .md-footer a[href*="linkedin.com"],
      body .md-footer a[href*="zillow.com"],
      body .md-footer a[href*="instagram.com"],
      body .md-footer a[href*="youtube.com"],
      body .md-footer a[href*="maps.app.goo.gl"] { transition: none !important; }
    }
  `;
  document.head.appendChild(style);

  function enhanceFooter() {
    var links = Array.prototype.slice.call(document.querySelectorAll(
      '.md-footer a[href*="facebook.com"], .md-footer a[href*="linkedin.com"], .md-footer a[href*="zillow.com"], .md-footer a[href*="instagram.com"], .md-footer a[href*="youtube.com"], .md-footer a[href*="maps.app.goo.gl"]'
    ));
    if (!links.length) return;

    var footer = links[0].closest('.md-footer');
    if (!footer) return;
    footer.classList.add('lakeshore-footer-compact');

    var common = links[0].parentElement;
    while (common && common !== footer && !links.every(function (link) { return common.contains(link); })) {
      common = common.parentElement;
    }
    if (common && common !== footer) {
      common.classList.add('lakeshore-social-row');
      if (common.parentElement && common.parentElement !== footer) {
        common.parentElement.classList.add('lakeshore-social-section');
      }
    }
  }

  enhanceFooter();
  new MutationObserver(enhanceFooter).observe(document.documentElement, { childList: true, subtree: true });
})();



/* --- searchbar.js --- */
(function () {
  "use strict";

  if (window.__lakeshoreSearchBarLoaded) return;
  window.__lakeshoreSearchBarLoaded = true;

  var STYLE_ID = "lakeshore-searchbar-styles";
  var ENHANCED_CLASS = "lakeshore-searchbar";

  var css = `
    body .md-listing-search.${ENHANCED_CLASS} {
      position: relative;
      z-index: 20;
      width: 100% !important;
      padding: 22px clamp(18px, 4vw, 64px) 24px !important;
      background: linear-gradient(180deg, #f7f3eb 0%, #f1ecdf 100%) !important;
      border-top: 1px solid rgba(177, 154, 85, .24) !important;
      border-bottom: 1px solid rgba(45, 67, 54, .15) !important;
      box-shadow: 0 14px 34px rgba(35, 42, 36, .08);
    }

    body .md-listing-search.${ENHANCED_CLASS} > .search-content {
      max-width: 1240px;
      margin: 0 auto;
    }

    body .md-listing-search.${ENHANCED_CLASS} .md-search-more,
    body .md-listing-search.${ENHANCED_CLASS} .search-by-section,
    body .md-listing-search.${ENHANCED_CLASS} .search-category,
    body .md-listing-search.${ENHANCED_CLASS} .keyword-container {
      background: transparent !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-by-section {
      display: flex;
      align-items: stretch;
      gap: 10px;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword-container {
      flex: 1 1 420px;
      min-width: 260px;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-category,
    body .md-listing-search.${ENHANCED_CLASS} .keyword {
      height: 100%;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line {
      position: relative;
      min-height: 54px;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line::before {
      content: "";
      position: absolute;
      left: 19px;
      top: 50%;
      z-index: 2;
      width: 17px;
      height: 17px;
      transform: translateY(-50%);
      pointer-events: none;
      background: center / contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232d4336' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='m20 20-4-4'/%3E%3C/svg%3E");
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-input.sug {
      width: 100% !important;
      height: 54px !important;
      padding: 0 56px 0 50px !important;
      color: #252b27 !important;
      background: #fff !important;
      border: 1px solid rgba(45, 67, 54, .25) !important;
      border-radius: 14px !important;
      box-shadow: 0 5px 18px rgba(35, 42, 36, .06) !important;
      font-size: 15px !important;
      transition: border-color .2s ease, box-shadow .2s ease;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-input.sug:focus {
      outline: none !important;
      border-color: #b19a55 !important;
      box-shadow: 0 0 0 3px rgba(177, 154, 85, .17), 0 7px 22px rgba(35, 42, 36, .08) !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line > .keyword-submit {
      right: 8px !important;
      width: 38px !important;
      height: 38px !important;
      top: 8px !important;
      border-radius: 10px !important;
      color: #262218 !important;
      background: #b19a55 !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-category > .keyword-submit,
    body .md-listing-search.${ENHANCED_CLASS} .save-search {
      min-height: 54px !important;
      padding: 0 25px !important;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      gap: 9px;
      color: #262218 !important;
      background: linear-gradient(135deg, #c9b878 0%, #b19a55 100%) !important;
      border: 1px solid #a68d47 !important;
      border-radius: 14px !important;
      box-shadow: 0 7px 18px rgba(122, 101, 42, .18);
      font-size: 12px !important;
      font-weight: 700 !important;
      letter-spacing: .12em;
      transition: transform .2s ease, background .2s ease;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-category > .keyword-submit:hover,
    body .md-listing-search.${ENHANCED_CLASS} .save-search:hover {
      background: linear-gradient(135deg, #d2c188 0%, #baa25c 100%) !important;
      transform: translateY(-1px);
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-more {
      flex: 0 1 auto;
      display: flex;
      gap: 8px;
      overflow: visible !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item {
      min-height: 54px !important;
      background: rgba(255, 255, 255, .72) !important;
      border: 1px solid rgba(45, 67, 54, .18) !important;
      border-radius: 14px !important;
      color: #2d332f !important;
      transition: background .2s ease, border-color .2s ease, transform .2s ease;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item:hover {
      background: #fff !important;
      border-color: rgba(177, 154, 85, .72) !important;
      transform: translateY(-1px);
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .place,
    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .select-text,
    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .box-div {
      min-height: 52px !important;
      padding: 0 15px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 10px;
      font-size: 13px !important;
      font-weight: 600 !important;
      white-space: nowrap;
    }

    body .md-listing-search.${ENHANCED_CLASS} .dropdown_container,
    body .md-listing-search.${ENHANCED_CLASS} .select-dropdown,
    body .md-listing-search.${ENHANCED_CLASS} .suggestion-list {
      margin-top: 9px !important;
      overflow: hidden;
      background: #fff !important;
      border: 1px solid rgba(45, 67, 54, .16) !important;
      border-radius: 14px !important;
      box-shadow: 0 18px 45px rgba(35, 42, 36, .18) !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .dd-item:hover,
    body .md-listing-search.${ENHANCED_CLASS} .dd-item.selected {
      color: #2d4336 !important;
      background: #f3efe4 !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .more-list {
      border-radius: 18px !important;
      box-shadow: 0 22px 55px rgba(35, 42, 36, .2) !important;
    }

    @media (max-width: 1024px) {
      body .md-listing-search.${ENHANCED_CLASS} .search-by-section {
        flex-wrap: wrap;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword-container {
        flex-basis: 100%;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-more {
        flex: 1 1 100%;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item {
        flex: 1 1 0;
      }
    }

    @media (max-width: 767px) {
      body .md-listing-search.${ENHANCED_CLASS} {
        padding: 14px 15px 16px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-by-section {
        gap: 8px;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword-container {
        min-width: 0;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-input.sug {
        height: 50px !important;
        padding-left: 45px !important;
        font-size: 14px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line {
        min-height: 50px;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line > .keyword-submit {
        top: 6px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-category > .keyword-submit,
      body .md-listing-search.${ENHANCED_CLASS} .save-search {
        min-height: 48px !important;
        border-radius: 12px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-more {
        width: 100%;
        gap: 7px;
        overflow-x: auto !important;
        scrollbar-width: none;
        padding-bottom: 2px;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-more::-webkit-scrollbar { display: none; }
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item {
        flex: 0 0 auto;
        min-width: 92px;
        min-height: 44px !important;
        border-radius: 12px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .place,
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .select-text,
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .box-div {
        min-height: 42px !important;
        padding: 0 13px !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      body .md-listing-search.${ENHANCED_CLASS} * { transition: none !important; }
    }
  `;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function enhance() {
    document.querySelectorAll(".md-listing-search").forEach(function (search) {
      search.classList.add(ENHANCED_CLASS);
    });
  }

  installStyles();
  enhance();

  var observer = new MutationObserver(enhance);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();



/* --- listing-cards.js --- */
(function () {
  "use strict";

  if (window.__lakeshoreListingCardsLoaded) return;
  window.__lakeshoreListingCardsLoaded = true;

  var style = document.createElement("style");
  style.id = "lakeshore-listing-card-styles";
  style.textContent = `
    body .md-house .house-grid-item.layout2 {
      position: relative;
      overflow: hidden;
      background: #20231f;
    }

    body .md-house .house-grid-item.layout2 .body-mask {
      background: linear-gradient(
        180deg,
        rgba(16, 20, 17, 0) 0%,
        rgba(16, 20, 17, .28) 27%,
        rgba(16, 20, 17, .76) 66%,
        rgba(12, 15, 13, .96) 100%
      ) !important;
    }

    body .md-house .house-grid-item.layout2 .house-price,
    body .md-house .house-grid-item.layout2 .house-basic,
    body .md-house .house-grid-item.layout2 .house-address,
    body .md-house .house-grid-item.layout2 .house-address a,
    body .md-house .house-grid-item.layout2 .house-provided {
      color: #fff !important;
      text-shadow: 0 1px 3px rgba(0,0,0,.78), 0 4px 16px rgba(0,0,0,.42);
    }

    body .md-house .house-grid-item.layout2 .house-price {
      display: inline-flex;
      align-items: center;
      min-height: 34px;
      padding: 5px 11px !important;
      background: rgba(20, 24, 21, .62);
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 9px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 6px 18px rgba(0,0,0,.18);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      font-size: clamp(19px, 1.25vw, 24px) !important;
      font-weight: 750 !important;
      letter-spacing: -.02em;
    }

    body .md-house .house-grid-item.layout2 .house-basic {
      margin-top: 9px !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      letter-spacing: .01em;
    }

    body .md-house .house-grid-item.layout2 .house-address {
      margin-top: 6px !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      line-height: 1.4 !important;
    }

    body .md-house .house-grid-item.layout2 .house-provided {
      opacity: .84 !important;
      font-size: 11px !important;
    }

    body .md-house .house-grid-item.layout2 a:focus-visible {
      outline: 2px solid #c4ac63 !important;
      outline-offset: 3px;
      border-radius: 4px;
    }

    @media (max-width: 767px) {
      body .md-house .house-grid-item.layout2 .body-mask {
        background: linear-gradient(
          180deg,
          rgba(16, 20, 17, .04) 0%,
          rgba(16, 20, 17, .38) 28%,
          rgba(16, 20, 17, .84) 67%,
          rgba(12, 15, 13, .97) 100%
        ) !important;
      }
      body .md-house .house-grid-item.layout2 .house-price {
        min-height: 31px;
        padding: 4px 9px !important;
        font-size: 18px !important;
      }
      body .md-house .house-grid-item.layout2 .house-basic,
      body .md-house .house-grid-item.layout2 .house-address {
        font-size: 13px !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      body .md-house .house-grid-item.layout2 * { transition: none !important; }
    }
  `;
  document.head.appendChild(style);
})();



/* --- section-transitions.js --- */
(function () {
  "use strict";

  if (window.__lakeshoreSectionTransitionsLoaded) return;
  window.__lakeshoreSectionTransitionsLoaded = true;

  var style = document.createElement("style");
  style.id = "lakeshore-section-transition-styles";
  style.textContent = `
    body.home .md-house.layout2 {
      position: relative;
      padding-top: clamp(54px, 6vw, 82px) !important;
      background:
        radial-gradient(circle at 50% 0, rgba(177,154,85,.11), transparent 34%),
        linear-gradient(180deg, #fbfaf7 0%, #fff 45%) !important;
      border-top: 1px solid rgba(45,67,54,.09);
    }

    body.home .md-house.layout2::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: min(86%, 1120px);
      height: 1px;
      transform: translateX(-50%);
      background: linear-gradient(90deg, transparent, rgba(177,154,85,.5), transparent);
    }

    body.home .md-house.layout2 > .f-col {
      height: auto !important;
      min-height: 0 !important;
      padding: 0 20px clamp(32px, 3.5vw, 46px) !important;
    }

    body.home .md-house.layout2 .site-title.title {
      position: relative;
      margin: 0 !important;
      padding-bottom: 18px;
      text-align: center;
    }

    body.home .md-house.layout2 .site-title.title h2 {
      margin: 0 !important;
      color: #292d29 !important;
      font-size: clamp(28px, 2.4vw, 40px) !important;
      font-weight: 500 !important;
      letter-spacing: .04em;
    }

    body.home .md-house.layout2 .site-title.title::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 54px;
      height: 2px;
      transform: translateX(-50%);
      background: #b19a55;
      border-radius: 99px;
      box-shadow: 0 0 0 4px rgba(177,154,85,.09);
    }

    body.home .md-house.layout2 .house-grid {
      position: relative;
      margin-bottom: 0 !important;
    }

    body.home .md-house.layout2 + .md-footer,
    body.home .md-footer {
      position: relative;
    }

    body.home .md-footer::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 50%;
      width: min(92%, 1440px);
      height: 1px;
      transform: translateX(-50%);
      background: linear-gradient(90deg, transparent, rgba(177,154,85,.55), transparent);
      pointer-events: none;
    }

    @media (max-width: 767px) {
      body.home .md-house.layout2 {
        padding-top: 42px !important;
      }
      body.home .md-house.layout2 > .f-col {
        padding-bottom: 28px !important;
      }
      body.home .md-house.layout2 .site-title.title h2 {
        font-size: 27px !important;
        letter-spacing: .03em;
      }
    }
  `;
  document.head.appendChild(style);
})();



/* --- team-section.js --- */
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
    #lst-team-root { order: 8 !important; position: relative; overflow: hidden; padding: clamp(72px,8vw,118px) 24px; color:#f8f7f2; background:radial-gradient(circle at 50% -8%,rgba(248,247,242,.18),transparent 34%),radial-gradient(circle at 9% 86%,rgba(36,15,14,.16),transparent 28%),linear-gradient(145deg,#4a4334 0%,#716348 48%,#514936 100%); }
    #lst-team-root::before { content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,rgba(255,255,255,.06),transparent 42%,rgba(36,15,14,.05)); }
    #lst-team-root * { box-sizing:border-box; }
    .lst-team-wrap { position:relative;z-index:1;max-width:1440px;margin:0 auto; }
    .lst-team-head { max-width:760px;margin:0 auto clamp(38px,5vw,62px);text-align:center; }
    .lst-team-kicker { margin:0 0 12px;color:#ead9a6;font:700 12px/1.2 Inter,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;text-shadow:0 1px 12px rgba(36,15,14,.24); }
    .lst-team-head h2 { margin:0;color:#fff;font:500 clamp(38px,4.7vw,68px)/1.04 Georgia,serif;letter-spacing:-.025em; }
    .lst-team-intro { max-width:66ch;margin:18px auto 0;color:rgba(248,247,242,.78);font:400 16px/1.7 Inter,Arial,sans-serif; }
    .lst-team-grid { display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(16px,1.8vw,26px);align-items:stretch; }
    .lst-team-card { position:relative;display:flex;flex-direction:column;min-width:0;overflow:hidden;border:1px solid rgba(185,144,82,.34);border-radius:24px;background:linear-gradient(155deg,rgba(52,24,22,.94),rgba(36,15,14,.92) 48%,rgba(20,8,8,.97));box-shadow:inset 0 1px 0 rgba(255,255,255,.12),inset 0 -1px 0 rgba(185,144,82,.1),0 24px 50px rgba(0,0,0,.34);backdrop-filter:blur(18px) saturate(102%);-webkit-backdrop-filter:blur(18px) saturate(102%);transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease; }
    .lst-team-card:hover { transform:translateY(-7px);border-color:rgba(185,144,82,.72);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 32px 66px rgba(0,0,0,.38),0 16px 42px rgba(93,7,9,.3); }
    .lst-team-glow { position:absolute;z-index:0;left:12%;right:12%;bottom:-30px;height:80px;border-radius:50%;background:rgba(185,144,82,.78);filter:blur(32px);opacity:.2;transition:opacity .28s ease; }
    .lst-team-card:hover .lst-team-glow { opacity:.5; }
    .lst-team-portrait { position:relative;z-index:1;aspect-ratio:4/5;overflow:hidden;background:linear-gradient(145deg,#d8d1c3,#9e9179); }
    .lst-team-portrait::after { content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 54%,rgba(50,7,9,.2) 75%,rgba(35,5,7,.7) 100%);pointer-events:none; }
    .lst-team-portrait img { width:100%!important;height:100%!important;display:block!important;visibility:visible!important;opacity:1!important;object-fit:cover!important;transition:transform .5s ease; }
    .lst-team-card:hover .lst-team-portrait img { transform:scale(1.025); }
    .lst-team-card-body { position:relative;z-index:1;display:flex;flex:1;flex-direction:column;padding:24px 22px 22px; }
    .lst-team-specialty { margin:0 0 12px;color:#c7b36f;font:700 10px/1.35 Inter,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase; }
    .lst-team-card h3 { margin:0;color:#fff;font:500 clamp(25px,2vw,32px)/1.05 Georgia,serif;letter-spacing:-.015em; }
    .lst-team-role { min-height:38px;margin:8px 0 3px;color:rgba(248,247,242,.9);font:600 12px/1.45 Inter,Arial,sans-serif;letter-spacing:.035em;text-transform:uppercase; }
    .lst-team-license { margin:0;color:rgba(248,247,242,.58);font:500 10px/1.5 Inter,Arial,sans-serif;letter-spacing:.04em; }
    .lst-team-bio { flex:1;margin:18px 0 22px;color:rgba(248,247,242,.76);font:400 13px/1.65 Inter,Arial,sans-serif; }
    .lst-team-actions { display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:17px;border-top:1px solid rgba(185,144,82,.3); }
    .lst-team-socials { display:flex;flex-wrap:wrap;gap:7px; }
    .lst-team-social { display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;color:#fff;border:1px solid rgba(248,247,242,.2);border-radius:10px;background:rgba(248,247,242,.11);box-shadow:inset 0 1px 0 rgba(255,255,255,.14);transition:background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease; }
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
    section.innerHTML = '<div class="lst-team-wrap"><header class="lst-team-head"><p class="lst-team-kicker">Meet the Lakeshore Team</p><h2 id="lst-team-heading">The people behind every move.</h2><p class="lst-team-intro">Three specialists. One standard of service. Meet the South Louisiana real estate professionals who bring strategy, care, and steady guidance to every client relationship.</p></header><div class="lst-team-grid">' + members.map(card).join("") + '</div><div class="lst-team-footer"><a class="lst-team-full" href="/myteam">Meet the Full Team <span aria-hidden="true">&rarr;</span></a></div></div>';
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

/* --- reviews-brand.js --- */
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
    },
    {
      quote: "I'm so grateful for Madeleine and the support she gave me throughout my search for the perfect Airbnb property. She was attentive from day one, always made herself available, and truly understood what I needed for my business. Her professionalism and commitment made all the difference. I couldn't have asked for a better partner in this journey.",
      name: "Alicia Noviskie",
      detail: "Worked with Madeleine Davis",
      source: "Facebook"
    },
    {
      quote: "We couldn't be more grateful to Madeleine for helping us find our first home. As first-time homebuyers, we had tons of questions, but she was incredibly patient, knowledgeable, and always made sure we felt comfortable throughout the entire process.",
      name: "Brodde Corley",
      detail: "Worked with Madeleine Davis",
      source: "Facebook"
    },
    {
      quote: "The wife and I were moving across country on a very short timer, and Chelsea was there to help us every step of the way, even when we were 2000 miles away! Always available for questions that we had, on top of all the ins and outs of the process, and super friendly as well. Now we're in our new home, she still checks in on us and is making sure everything is going smoothly as we settle in.",
      name: "Benjamin Looney",
      detail: "Worked with Chelsea Porter",
      source: "Facebook"
    },
    {
      quote: "Chelsea was the best. Kept me updated with everything, very patient, answered every question I had. I highly recommend her.",
      name: "Megan Miller",
      detail: "Worked with Chelsea Porter",
      source: "Facebook"
    },
    {
      quote: "Tyler has been a pleasure to work with. His communication is on point. I highly recommend.",
      name: "Ory Law Group",
      detail: "Recommends Lakeshore Team",
      source: "Facebook"
    },
    {
      quote: "Absolutely recommend! If you looking to buy a house, y'all give my dude a chance to earn your business! He'll do everything he can for you! Super knowledgeable and insightful! Proud to call this man a friend and a mentor not just my realtor! Call him ASAP. He about to take off! Oh and he doesn't take days to reply to you.",
      name: "Donovan Ellender",
      detail: "Recommends Lakeshore Team",
      source: "Facebook"
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
    #lst-reviews-root { order:8!important;position:relative;overflow:hidden;padding:clamp(68px,7vw,104px) 0;color:#f8f7f2;background:radial-gradient(circle at 12% 8%,rgba(185,144,82,.18),transparent 30%),radial-gradient(circle at 88% 86%,rgba(36,15,14,.3),transparent 32%),linear-gradient(145deg,#202322 0%,#171a19 58%,#202322 100%);border-top:1px solid rgba(185,144,82,.28); }
    #lst-reviews-root * { box-sizing:border-box; }
    .lst-reviews-head { max-width:760px;margin:0 auto clamp(34px,4vw,50px);padding:0 24px;text-align:center; }
    .lst-reviews-kicker { margin:0 0 12px;color:#b89052;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase; }
    .lst-reviews-head h2 { margin:0;color:#f8f7f2;font:500 clamp(36px,4.2vw,58px)/1.06 Georgia,serif;letter-spacing:-.025em; }
    .lst-reviews-intro { max-width:62ch;margin:16px auto 0;color:rgba(248,247,242,.7);font:400 15px/1.7 Inter,Arial,sans-serif; }
    .lst-reviews-viewport { overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent); }
    .lst-reviews-track { display:flex;width:max-content;gap:18px;padding:8px 9px 26px;animation:lstReviewsScroll 58s linear infinite; }
    .lst-reviews-viewport:hover .lst-reviews-track,.lst-reviews-viewport:focus-within .lst-reviews-track { animation-play-state:paused; }
    .lst-reviews-card { position:relative;display:flex;flex:0 0 min(390px,82vw);flex-direction:column;min-height:300px;padding:28px;border:1px solid rgba(185,144,82,.34);border-radius:22px;background:linear-gradient(145deg,rgba(248,247,242,.96),rgba(248,247,242,.86));box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 24px 48px rgba(0,0,0,.24);backdrop-filter:blur(16px) saturate(115%);-webkit-backdrop-filter:blur(16px) saturate(115%); }
    .lst-reviews-card::before { content:"";position:absolute;inset:0 0 auto;height:3px;border-radius:22px 22px 0 0;background:linear-gradient(90deg,#b89052,#7d6e4e 65%,#240f0e); }
    .lst-reviews-card::after { content:"\\201C";position:absolute;right:20px;top:5px;color:rgba(36,15,14,.1);font:700 74px/1 Georgia,serif; }
    .lst-reviews-stars { position:relative;z-index:1;margin-bottom:17px;color:#b89052;font:700 17px/1 Inter,Arial,sans-serif;letter-spacing:.14em; }
    .lst-reviews-card blockquote { position:relative;z-index:1;flex:1;margin:0 0 25px;color:#202322;font:400 15px/1.72 Inter,Arial,sans-serif; }
    .lst-reviews-card footer { position:relative;z-index:1;display:grid;grid-template-columns:42px minmax(0,1fr) auto;align-items:center;gap:11px;padding-top:18px;border-top:1px solid rgba(32,35,34,.12); }
    .lst-reviews-avatar { display:flex;width:42px;height:42px;align-items:center;justify-content:center;color:#f8f7f2;border:1px solid rgba(185,144,82,.65);border-radius:50%;background:linear-gradient(145deg,#7d6e4e,#202322);font:700 12px/1 Inter,Arial,sans-serif;letter-spacing:.04em; }
    .lst-reviews-person { display:flex;min-width:0;flex-direction:column;gap:4px; }
    .lst-reviews-person strong { color:#202322;font:700 13px/1.2 Inter,Arial,sans-serif; }
    .lst-reviews-person small { overflow:hidden;color:#6d6b64;font:400 11px/1.25 Inter,Arial,sans-serif;text-overflow:ellipsis;white-space:nowrap; }
    .lst-reviews-source { color:#240f0e;border:1px solid rgba(36,15,14,.22);border-radius:999px;background:rgba(36,15,14,.07);padding:6px 9px;font:700 9px/1 Inter,Arial,sans-serif;letter-spacing:.07em;text-transform:uppercase; }
    .lst-reviews-foot { display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;margin-top:22px;padding:0 24px; }
    .lst-reviews-foot p { margin:0;color:rgba(248,247,242,.64);font:500 13px/1.5 Inter,Arial,sans-serif; }
    .lst-reviews-cta { display:inline-flex;min-height:46px;align-items:center;justify-content:center;padding:0 19px;color:#f8f7f2!important;border:1px solid rgba(185,144,82,.72);border-radius:12px;background:linear-gradient(135deg,#240f0e,#180a09);box-shadow:0 10px 26px rgba(36,15,14,.38);font:700 11px/1 Inter,Arial,sans-serif;letter-spacing:.075em;text-decoration:none!important;text-transform:uppercase;transition:transform .2s ease,filter .2s ease; }
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
    section.innerHTML = '<header class="lst-reviews-head"><p class="lst-reviews-kicker">Five-Star Client Reviews</p><h2 id="lst-reviews-heading">Trusted through every move.</h2><p class="lst-reviews-intro">Public reviews from buyers, sellers, and real estate professionals who have worked with Lakeshore Team.</p></header><div class="lst-reviews-viewport"><div class="lst-reviews-track">' + visible + duplicate + '</div></div><div class="lst-reviews-foot"><p>Reviews sourced from Google, Facebook, RateMyAgent, and Realtor.com.</p><a class="lst-reviews-cta" href="/contact">Start Your Move <span aria-hidden="true">&rarr;</span></a></div>';
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

/* --- why-choose.js --- */
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
    #lst-why-root { order:7!important;position:relative;overflow:hidden;padding:clamp(76px,8vw,118px) 24px;color:#292a25;background:radial-gradient(circle at 12% 7%,rgba(185,144,82,.18),transparent 30%),radial-gradient(circle at 88% 90%,rgba(36,15,14,.08),transparent 31%),linear-gradient(145deg,#f8f7f2,#f1eee6 52%,#f8f7f2);border-top:1px solid rgba(185,144,82,.2);border-bottom:1px solid rgba(36,15,14,.1); }
    #lst-why-root * { box-sizing:border-box; }
    #lst-why-root::before { content:"";position:absolute;inset:0;pointer-events:none;opacity:.3;background-image:linear-gradient(rgba(36,15,14,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(36,15,14,.035) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(180deg,#000,transparent 90%);-webkit-mask-image:linear-gradient(180deg,#000,transparent 90%); }
    .lst-why-wrap { position:relative;z-index:1;max-width:1400px;margin:0 auto; }
    .lst-why-head { display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.7fr);align-items:end;gap:42px;margin-bottom:clamp(38px,5vw,62px); }
    .lst-why-kicker { margin:0 0 14px;color:#240f0e;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.21em;text-transform:uppercase; }
    .lst-why-head h2 { max-width:780px;margin:0;color:#242620;font:500 clamp(40px,5vw,70px)/1.02 Georgia,serif;letter-spacing:-.03em; }
    .lst-why-intro { max-width:52ch;margin:0 0 5px;color:#62655d;font:400 15px/1.75 Inter,Arial,sans-serif; }
    .lst-why-grid { display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:20px;perspective:1400px; }
    .lst-why-card { --rx:0deg;--ry:0deg;--mx:50%;--my:50%;position:relative;display:flex;min-height:264px;flex-direction:column;justify-content:space-between;overflow:hidden;padding:28px;border:1px solid rgba(36,15,14,.12);border-radius:24px;background:linear-gradient(145deg,rgba(255,255,255,.78),rgba(248,247,242,.5));box-shadow:inset 0 1px 0 rgba(255,255,255,.98),0 25px 55px rgba(61,47,36,.1);backdrop-filter:blur(18px) saturate(115%);-webkit-backdrop-filter:blur(18px) saturate(115%);transform:rotateX(var(--rx)) rotateY(var(--ry)) translateY(14px);transform-style:preserve-3d;opacity:0;transition:transform .45s cubic-bezier(.2,.75,.2,1),opacity .65s ease,border-color .3s ease,box-shadow .3s ease; }
    .lst-why-card.is-visible { opacity:1;transform:rotateX(var(--rx)) rotateY(var(--ry)) translateY(0); }
    .lst-why-card:hover { border-color:rgba(36,15,14,.34);box-shadow:inset 0 1px 0 rgba(255,255,255,.98),0 34px 70px rgba(61,47,36,.14),0 12px 36px rgba(185,144,82,.14); }
    .lst-why-card--local,.lst-why-card--team { grid-column:span 6;min-height:300px; }
    .lst-why-card--communication,.lst-why-card--experience,.lst-why-card--exp { grid-column:span 4; }
    .lst-why-card-light { position:absolute;inset:0;pointer-events:none;opacity:0;background:radial-gradient(circle at var(--mx) var(--my),rgba(201,178,107,.19),transparent 31%);transition:opacity .3s ease; }
    .lst-why-card:hover .lst-why-card-light { opacity:1; }
    .lst-why-number { position:absolute;right:24px;top:22px;color:rgba(36,15,14,.48);font:700 11px/1 Inter,Arial,sans-serif;letter-spacing:.14em; }
    .lst-why-icon { position:relative;z-index:1;display:flex;width:52px;height:52px;align-items:center;justify-content:center;color:#9b8342;border:1px solid rgba(177,154,85,.38);border-radius:15px;background:rgba(255,255,255,.48);box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 10px 25px rgba(74,70,54,.1);transform:translateZ(18px); }
    .lst-why-icon svg { width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round; }
    .lst-why-copy { position:relative;z-index:1;max-width:60ch;margin-top:42px;transform:translateZ(12px); }
    .lst-why-copy h3 { margin:0 0 13px;color:#272922;font:500 clamp(23px,2.1vw,31px)/1.12 Georgia,serif;letter-spacing:-.015em; }
    .lst-why-copy p { margin:0;color:#62655d;font:400 13px/1.68 Inter,Arial,sans-serif; }
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

/* --- service-areas.js --- */
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



/* --- consultation-section.js --- */
(function () {
  "use strict";

  if (window.__lakeshoreConsultationLoaded) return;
  window.__lakeshoreConsultationLoaded = true;

  var css = `
    #lst-consult-root{order:11!important;position:relative;overflow:hidden;padding:clamp(76px,8vw,118px) 24px;color:#f8f7f2;background:radial-gradient(circle at 14% 12%,rgba(185,144,82,.2),transparent 31%),radial-gradient(circle at 88% 86%,rgba(36,15,14,.55),transparent 38%),linear-gradient(145deg,#202322,#151817 62%,#202322);border-top:1px solid rgba(185,144,82,.3)}
    #lst-consult-root *{box-sizing:border-box}
    #lst-consult-root::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.45;background:linear-gradient(120deg,rgba(255,255,255,.04),transparent 38%),repeating-radial-gradient(ellipse at 88% 14%,transparent 0 32px,rgba(185,144,82,.055) 33px 34px,transparent 35px 58px)}
    .lst-consult-wrap{position:relative;z-index:1;display:grid;max-width:1360px;margin:0 auto;grid-template-columns:minmax(300px,.82fr) minmax(520px,1.18fr);align-items:start;gap:clamp(34px,5vw,78px)}
    .lst-consult-copy{position:sticky;top:110px;padding:clamp(12px,2vw,28px) 0}
    .lst-consult-kicker{margin:0 0 15px;color:#ead9a6;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.21em;text-transform:uppercase}
    .lst-consult-copy h2{max-width:650px;margin:0;color:#fff;font:500 clamp(42px,5vw,72px)/1.01 Georgia,serif;letter-spacing:-.035em}
    .lst-consult-copy>p{max-width:50ch;margin:22px 0 0;color:rgba(248,247,242,.74);font:400 15px/1.75 Inter,Arial,sans-serif}
    .lst-consult-points{display:grid;gap:14px;margin:30px 0 0;padding:0;list-style:none}
    .lst-consult-points li{display:flex;align-items:center;gap:12px;color:rgba(248,247,242,.88);font:600 12px/1.5 Inter,Arial,sans-serif}
    .lst-consult-points span{display:flex;width:28px;height:28px;flex:0 0 28px;align-items:center;justify-content:center;color:#ead9a6;border:1px solid rgba(185,144,82,.42);border-radius:9px;background:rgba(185,144,82,.1);font-size:13px}
    .lst-consult-direct{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px}
    .lst-consult-direct a{display:inline-flex;min-height:43px;align-items:center;justify-content:center;padding:0 16px;color:#f8f7f2!important;border:1px solid rgba(248,247,242,.18);border-radius:11px;background:rgba(248,247,242,.075);box-shadow:inset 0 1px 0 rgba(255,255,255,.1);font:700 10px/1 Inter,Arial,sans-serif;letter-spacing:.08em;text-decoration:none!important;text-transform:uppercase;transition:transform .2s ease,background .2s ease,border-color .2s ease}
    .lst-consult-direct a:hover{transform:translateY(-2px);background:rgba(185,144,82,.14);border-color:rgba(185,144,82,.5)}
    .lst-consult-form-shell{position:relative;overflow:hidden;padding:clamp(22px,3vw,38px);border:1px solid rgba(185,144,82,.38);border-radius:28px;background:linear-gradient(155deg,rgba(52,24,22,.88),rgba(36,15,14,.8) 48%,rgba(20,8,8,.91));box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 34px 76px rgba(0,0,0,.35);backdrop-filter:blur(20px) saturate(105%);-webkit-backdrop-filter:blur(20px) saturate(105%)}
    .lst-consult-form-shell::before{content:"";position:absolute;left:0;right:0;top:0;height:3px;background:linear-gradient(90deg,#b89052,#ead9a6 48%,#7d6e4e)}
    .lst-consult-form-head{position:relative;z-index:2;margin-bottom:22px}
    .lst-consult-form-head h3{margin:0;color:#fff;font:500 clamp(27px,2.6vw,38px)/1.1 Georgia,serif;letter-spacing:-.02em}
    .lst-consult-form-head p{margin:9px 0 0;color:rgba(248,247,242,.68);font:400 13px/1.6 Inter,Arial,sans-serif}
    .lst-consult-frame{position:relative;z-index:1;display:block;width:100%;height:422px;border:0;background:transparent;color-scheme:dark;transition:height .2s ease}
    .lst-consult-fallback{margin:14px 0 0;text-align:center;color:rgba(248,247,242,.62);font:500 11px/1.5 Inter,Arial,sans-serif}
    .lst-consult-fallback a{color:#ead9a6!important;text-decoration:underline;text-underline-offset:3px}
    body.home .page-content>#lst-consult-root{order:11!important}body.home .page-content>.md-footer{order:12!important}
    @media(max-width:980px){.lst-consult-wrap{grid-template-columns:1fr;max-width:760px}.lst-consult-copy{position:relative;top:auto;padding:0}.lst-consult-copy>p{max-width:62ch}}
    @media(max-width:620px){#lst-consult-root{padding:64px 16px}.lst-consult-copy h2{font-size:43px}.lst-consult-form-shell{padding:24px 16px;border-radius:22px}.lst-consult-frame{height:500px}.lst-consult-direct{display:grid;grid-template-columns:1fr 1fr}.lst-consult-direct a{width:100%}}
    @media(prefers-reduced-motion:reduce){#lst-consult-root *,#lst-consult-root *::before,#lst-consult-root *::after{transition:none!important}}
  `;

  var iframeCss = `
    html,body{margin:0!important;min-height:0!important;background:transparent!important;color:#f8f7f2!important;overflow-x:hidden!important}
    #app{min-height:0!important;background:transparent!important}
    #app>.md-header,#app>.md-footer,#lst-premium-nav,#chat-app,body>div[data-v-app]{display:none!important}
    #app>.md-form{min-height:0!important;margin:0!important;padding:0!important;background:transparent!important}
    .md-form-container{width:100%!important;max-width:none!important;margin:0!important;padding:0!important;background:transparent!important}
    .md-form h2{display:none!important}
    .info-form2{width:100%!important;margin:0!important;color:#f8f7f2!important}
    .info-form2 .input-content,.info-form2 .basic-info{display:grid!important;gap:15px!important}
    .info-form2 .basic-info{grid-template-columns:1fr 1fr!important}
    .info-form2 .fullname{grid-column:1/-1!important}
    .info-form2 .input-box,.info-form2 .message{margin:0!important}
    .info-form2 .input-container{position:relative!important;padding:0!important;background:transparent!important}
    .info-form2 .label-top{display:none!important}
    .info-form2 input,.info-form2 textarea{width:100%!important;border:1px solid rgba(248,247,242,.22)!important;border-radius:12px!important;background:rgba(248,247,242,.085)!important;color:#f8f7f2!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08)!important;font:500 14px/1.4 Inter,Arial,sans-serif!important;outline:none!important;transition:border-color .2s ease,box-shadow .2s ease,background .2s ease!important}
    .info-form2 input{height:52px!important;padding:0 15px!important}
    .info-form2 textarea{min-height:112px!important;padding:15px!important;resize:vertical!important}
    .info-form2 input::placeholder,.info-form2 textarea::placeholder{color:rgba(248,247,242,.58)!important}
    .info-form2 input:focus,.info-form2 textarea:focus{border-color:#b89052!important;background:rgba(248,247,242,.11)!important;box-shadow:0 0 0 3px rgba(185,144,82,.16)!important}
    .info-form2 .mg-error{color:#ead9a6!important;font:600 11px/1.4 Inter,Arial,sans-serif!important}
    .info-form2 .disclaimer-wrap{margin-top:18px!important}
    .info-form2 .disclaimer-content{color:rgba(248,247,242,.56)!important;font:400 9px/1.55 Inter,Arial,sans-serif!important}
    .info-form2 .disclaimer-content a{color:#ead9a6!important}
    .info-form2 .check-box-container{width:18px!important;height:18px!important;border-color:rgba(234,217,166,.65)!important;border-radius:5px!important;background:rgba(248,247,242,.08)!important}
    .info-form2 .submit-content{margin-top:18px!important}
    .info-form2 .submit{width:100%!important;height:50px!important;border:1px solid rgba(185,144,82,.75)!important;border-radius:12px!important;background:linear-gradient(135deg,#c7ab68,#b89052)!important;color:#240f0e!important;box-shadow:0 12px 28px rgba(0,0,0,.2)!important;font:800 11px/1 Inter,Arial,sans-serif!important;letter-spacing:.1em!important;text-transform:uppercase!important}
    .info-form2 .submit.submit-disabled{opacity:.48!important;cursor:not-allowed!important}
    @media(max-width:560px){.info-form2 .basic-info{grid-template-columns:1fr!important}.info-form2 .fullname{grid-column:auto!important}}
  `;

  function styleFrame(frame) {
    try {
      var doc = frame.contentDocument;
      if (!doc || !doc.head || !doc.body) return;
      if (!doc.getElementById("lst-consult-embed-style")) {
        var style = doc.createElement("style");
        style.id = "lst-consult-embed-style";
        style.textContent = iframeCss;
        doc.head.appendChild(style);
      }
      var nativeHeading = doc.querySelector(".md-form h2");
      if (nativeHeading) nativeHeading.textContent = "Tell us about your move";
      var form = doc.querySelector(".md-form");
      if (form) {
        var height = Math.max(360,Math.ceil(form.getBoundingClientRect().height + 2));
        frame.style.height = height + "px";
      }
    } catch (error) {
      frame.style.height = "760px";
    }
  }

  function build() {
    if (document.getElementById("lst-consult-root")) return;
    var footer = document.querySelector("body.home .md-footer");
    if (!footer || !footer.parentNode) return;
    var section = document.createElement("section");
    section.id = "lst-consult-root";
    section.setAttribute("aria-labelledby", "lst-consult-heading");
    section.innerHTML = '<div class="lst-consult-wrap"><div class="lst-consult-copy"><p class="lst-consult-kicker">Request a Consultation</p><h2 id="lst-consult-heading">Thinking about making a move? Let&rsquo;s talk.</h2><p>Tell us what you are considering and a Lakeshore Team specialist will follow up with clear, practical next steps.</p><ul class="lst-consult-points"><li><span aria-hidden="true">01</span>No pressure or obligation</li><li><span aria-hidden="true">02</span>Local guidance from the right specialist</li><li><span aria-hidden="true">03</span>A straightforward plan for your next move</li></ul><div class="lst-consult-direct"><a href="tel:+13372414963">Call the Team</a><a href="sms:+13372414963">Text the Team</a></div></div><div class="lst-consult-form-shell"><div class="lst-consult-form-head"><h3>Start the conversation.</h3><p>Share a few details and we will be in touch.</p></div><iframe class="lst-consult-frame" title="Request a consultation with Lakeshore Team" loading="lazy"></iframe><p class="lst-consult-fallback">Form not loading? <a href="/contact">Open the consultation form</a>.</p></div></div>';
    footer.parentNode.insertBefore(section,footer);
    var frame = section.querySelector(".lst-consult-frame");
    frame.addEventListener("load",function () {
      styleFrame(frame);
      var checks = 0;
      var timer = setInterval(function () {
        styleFrame(frame);
        checks += 1;
        if (checks >= 24) clearInterval(timer);
      },250);
    });
    frame.src = "/contact?embed=consultation";
  }

  if (!document.getElementById("lakeshore-consultation-styles")) {
    var style = document.createElement("style");
    style.id = "lakeshore-consultation-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }
  build();
  new MutationObserver(build).observe(document.documentElement,{childList:true,subtree:true});
})();

/* --- hero-scroll.js --- */
(function () {
  "use strict";
  if (window.__lakeshoreHeroScrollLoaded) return;
  window.__lakeshoreHeroScrollLoaded = true;

  var IMAGE = "https://cdn.jsdelivr.net/gh/Iamtpolk/lakeshore-site-public@a99370882624406e1a0c41fb1f2f1620eb86474f/assets/hero/louisiana-luxury-home.webp";
  var css = `
    body.home .md-hero{--lst-hero-progress:0;position:relative;overflow:hidden;background:#10191f!important}
    body.home .md-hero .banner,body.home .md-hero .banner.single{height:clamp(680px,48vw,820px)!important;min-height:680px!important;max-height:820px!important;overflow:hidden!important;background:#10191f!important}
    body.home .md-hero .single-picture{background-color:#10191f!important;background-image:url("${IMAGE}")!important;background-position:center 58%!important;background-repeat:no-repeat!important;background-size:cover!important;will-change:transform;transform:scale(calc(1.012 + var(--lst-hero-progress) * .025)) translate3d(0,calc(var(--lst-hero-progress) * 8px),0);transform-origin:center 58%;transition:filter .3s ease;filter:saturate(.94) contrast(1.03)}
    body.home .md-hero .banner-mask{background:linear-gradient(90deg,rgba(13,18,20,.64),rgba(13,18,20,.38) 48%,rgba(13,18,20,.5))!important}
    body.home .md-hero .media-content-v2{width:100%!important;padding-inline:clamp(28px,7vw,150px)!important;box-sizing:border-box!important;will-change:transform,opacity;transform:translate3d(0,calc(var(--lst-hero-progress) * -30px),0);opacity:calc(1 - var(--lst-hero-progress) * .42)}
    body.home .md-hero .media-info,body.home .md-hero .title-text{width:100%!important;max-width:1280px!important;margin-inline:auto!important}
    body.home .md-hero .media-info{transform:translateY(clamp(-76px,-5vw,-42px))!important}
    body.home .md-hero .title-text{display:flex!important;flex-direction:column!important;align-items:center!important;gap:clamp(14px,1.2vw,20px)!important}
    body.home .md-hero .site-title{width:100%!important;max-width:none!important;margin:0!important;text-align:center!important}
    body.home .md-hero .site-title[aria-level="1"] h1{max-width:1020px!important;margin:0 auto!important;font-size:clamp(46px,3.65vw,66px)!important;line-height:1.04!important;letter-spacing:-.025em!important;text-wrap:balance;text-align:center!important;text-shadow:0 3px 22px rgba(0,0,0,.62)}
    body.home .md-hero .site-title[aria-level="3"]{max-width:790px!important;margin-inline:auto!important;font-size:clamp(17px,1.1vw,20px)!important;line-height:1.5!important;text-wrap:balance;text-align:center!important;text-shadow:0 2px 16px rgba(0,0,0,.68)}
    body.home .md-hero::after{content:"";position:absolute;z-index:3;left:0;right:0;bottom:0;height:90px;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(15,18,17,.32));opacity:calc(.3 + var(--lst-hero-progress) * .7)}
    @media(max-width:900px){body.home .md-hero .media-content-v2{padding-inline:clamp(24px,6vw,52px)!important}body.home .md-hero .media-info{transform:translateY(-42px)!important}body.home .md-hero .site-title[aria-level="1"] h1{font-size:clamp(42px,7vw,58px)!important;max-width:820px!important}body.home .md-hero .site-title[aria-level="3"]{max-width:680px!important;font-size:17px!important}}
    @media(max-width:720px){body.home .md-hero .banner,body.home .md-hero .banner.single{height:600px!important;min-height:600px!important;max-height:600px!important}body.home .md-hero .single-picture{background-position:center 58%!important;background-size:cover!important;transform:scale(calc(1.015 + var(--lst-hero-progress) * .02))}body.home .md-hero .media-content-v2{padding-inline:24px!important;transform:translate3d(0,calc(var(--lst-hero-progress) * -14px),0);opacity:calc(1 - var(--lst-hero-progress) * .22)}body.home .md-hero .media-info{transform:translateY(-28px)!important}body.home .md-hero .title-text{gap:14px!important}body.home .md-hero .site-title[aria-level="1"] h1{font-size:clamp(38px,10vw,46px)!important;line-height:1.05!important;max-width:560px!important}body.home .md-hero .site-title[aria-level="3"]{max-width:500px!important;font-size:16px!important;line-height:1.45!important}}
    @media(prefers-reduced-motion:reduce){body.home .md-hero{--lst-hero-progress:0!important}body.home .md-hero .single-picture,body.home .md-hero .media-content-v2{transform:none!important;opacity:1!important;will-change:auto!important}}
  `;

  function activate() {
    var hero = document.querySelector("body.home .md-hero");
    if (!hero || hero.__lstHeroActivated) return;
    hero.__lstHeroActivated = true;
    var preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "image";
    preload.href = IMAGE;
    document.head.appendChild(preload);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var ticking = false;
    function update() {
      var rect = hero.getBoundingClientRect();
      var progress = Math.max(0,Math.min(1,-rect.top / Math.max(1,rect.height)));
      hero.style.setProperty("--lst-hero-progress",progress.toFixed(4));
      ticking = false;
    }
    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener("scroll",requestUpdate,{passive:true});
    window.addEventListener("resize",requestUpdate,{passive:true});
  }

  if (!document.getElementById("lakeshore-hero-scroll-style")) {
    var style = document.createElement("style");
    style.id = "lakeshore-hero-scroll-style";
    style.textContent = css;
    document.head.appendChild(style);
  }
  activate();
  new MutationObserver(activate).observe(document.documentElement,{childList:true,subtree:true});
})();



/* --- homepage-order.js --- */
(function () {
  "use strict";
  if (window.__lakeshoreHomepageOrderLoaded) return;
  window.__lakeshoreHomepageOrderLoaded = true;

  var style = document.createElement("style");
  style.id = "lakeshore-homepage-order";
  style.textContent = `
    body.home .page-content:has(> .md-listing-search){display:flex!important;flex-direction:column!important}
    body.home .page-content>.md-header{order:0!important}
    body.home .page-content>.md-hero{order:1!important}
    body.home .page-content>.md-listing-search{order:2!important}
    body.home .page-content>#lst-why-root{order:3!important}
    body.home .page-content>#lst-team-root{order:4!important}
    body.home .page-content>#lst-reviews-root{order:5!important}
    body.home .page-content>#lst-areas-root{order:6!important}
    body.home .page-content>.md-house{order:7!important}
    body.home .page-content>#lst-consult-root{order:8!important}
    body.home .page-content>.md-footer{order:9!important}
    body.home .page-content>.md-team-desc,
    body.home .page-content>.md-cta,
    body.home .page-content>.md-team{display:none!important}
  `;
  document.head.appendChild(style);
})();