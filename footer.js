(function () {
  "use strict";

  if (window.__lakeshoreFooterLoaded) return;
  window.__lakeshoreFooterLoaded = true;

  var style = document.createElement("style");
  style.id = "lakeshore-footer-styles";
  style.textContent = `
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
})();

