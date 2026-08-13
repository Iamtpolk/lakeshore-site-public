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