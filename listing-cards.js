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

