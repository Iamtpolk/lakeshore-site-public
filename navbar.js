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
    { label: 'About', href: '/contact' }
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
        var target = action.getAttribute('data-native') === 'register' ? register : signIn;
        closeAccount(); closeMenu(false);
        if (target) target.click();
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
