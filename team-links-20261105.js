/* Lakeshore .com-only correction. Remove its one loader line to roll back. */
(function () {
  'use strict';
  if (!/^(?:www\.)?lakeshoreteam\.com$/i.test(location.hostname)) return;
  var route = location.pathname.replace(/\/$/, '') || '/';
  var roots = {'/':'#lst-team-root', '/contact':'#lst-contact-page', '/myteam':'#lst-myteam-page'};
  var root = roots[route];
  if (!root) return;
  function correct() {
    document.querySelectorAll(root + ' a[href="https://lakeshoreteam.homes/"]').forEach(function (link) {
      var card = link.closest('.lst-team-card, .lst-contact-card, .lst-myteam-card');
      var heading = card && card.querySelector('h2, h3');
      if (heading && heading.textContent.trim() === 'Tyler Polk') {
        link.setAttribute('href', 'https://lakeshoreteam.com/');
      }
    });
  }
  correct();
  new MutationObserver(correct).observe(document.documentElement, {childList:true, subtree:true});
})();