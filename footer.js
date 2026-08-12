(function () {
  "use strict";

  if (window.__lakeshoreFooterLoaded) return;
  window.__lakeshoreFooterLoaded = true;

  var style = document.createElement("style");
  style.id = "lakeshore-footer-styles";
  style.textContent = `
    body .md-footer.lakeshore-footer-compact {
      padding-top: clamp(42px, 4.5vw, 68px) !important;
      padding-bottom: 24px !important;
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
        width: auto !important;
        margin: 0 !important;
        justify-content: flex-start !important;
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
        padding-top: 34px !important;
        padding-bottom: 20px !important;
      }
      body .md-footer.lakeshore-footer-compact .lakeshore-social-row {
        margin-top: 18px !important;
        margin-bottom: 24px !important;
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

