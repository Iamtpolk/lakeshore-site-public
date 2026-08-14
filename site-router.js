(function(){
  "use strict";
  if(window.__lakeshoreSiteRouterLoaded)return;
  window.__lakeshoreSiteRouterLoaded=true;

  var CDN="https://iamtpolk.github.io/lakeshore-site-public/";
  var PIN="https://cdn.jsdelivr.net/gh/Iamtpolk/lakeshore-site-public@";
  var pinned={
    team:"0e9897a70ddfee052817ed7eabb785b4c91edbe5/team-section.js",
    reviews:"4c67096a7685cc51713c2d8b24d19b88d6fa76c8/reviews-brand.js",
    why:"33b6184f122bd5fa662ae195ed5e981f4ab9f574/why-choose.js",
    areas:"282fc145bfb02143071a17e72bb54bf3f78d6311/service-areas.js",
    consult:"a6674877496ea790bdacb92189ffd559dfc6dd4b/consultation-section.js",
    order:"3bd0621132d9e81ad6aa21a737d23782aa6a46bf/homepage-order.js",
    hero:"7c7a1e5bdcad2bcaf091d2fb3330e4a28640bdb2/hero-scroll.js",
    seller:"bc82914cc02dada0a1b7aea552bd5c376f54ffc8/seller-experience.js",
    cash:"e7cbce4efa333e59920cf5b05916725b6209de2a/cash-offer-experience.js",
    contact:"84171628a6a0c38f38f229b1b7e927b49ad5a1bf/contact-page.js",
    myteam:"cc6d8b6db63c2f61e10b05ff7468742f409dc686/myteam-page.js"
  };
  function load(src){return new Promise(function(resolve){var s=document.createElement("script");s.src=src;s.async=true;s.onload=resolve;s.onerror=resolve;document.head.appendChild(s);});}
  function pin(key){return PIN+pinned[key];}
  var path=location.pathname.replace(/\/$/,"")||"/";
  var host=location.hostname.toLowerCase();
  document.documentElement.classList.add("lst-route-"+(path==="/"?"home":path.slice(1).replace(/[^a-z0-9]+/gi,"-")));

  if(path==="/"){
    if(host==="chelseaporter.lakeshoreteam.com"){
      Promise.all([load(CDN+"navbar.js?v=3"),load(CDN+"footer-v6.js"),load(CDN+"chelsea-homepage.js?v=7")]);
    }else{
      load(PIN+"20c99e81c3ce139a173585a25f974221a1deead6/homepage-bundle.js");
    }
  }else{
    Promise.all([load(CDN+"navbar.js?v=3"),load(CDN+"footer-v6.js")]);
    if(path==="/sell")load(pin("seller"));
    else if(path==="/cash-offer")load(pin("cash"));
    else if(path==="/contact")load(pin("contact"));
    else if(path==="/myteam")load(pin("myteam"));
  }
})();

