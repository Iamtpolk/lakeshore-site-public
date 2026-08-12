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

