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
    contact:"338f0a1a4944c2edc7799f79723d2e583bff4c22/contact-page.js",
    myteam:"338f0a1a4944c2edc7799f79723d2e583bff4c22/myteam-page.js"
  };
  function load(src){return new Promise(function(resolve){var s=document.createElement("script");s.src=src;s.async=true;s.onload=resolve;s.onerror=resolve;document.head.appendChild(s);});}
  function pin(key){return PIN+pinned[key];}
  var path=location.pathname.replace(/\/$/,"")||"/";
  var host=location.hostname.toLowerCase();
  document.documentElement.classList.add("lst-route-"+(path==="/"?"home":path.slice(1).replace(/[^a-z0-9]+/gi,"-")));


  /* Private preview: on any agent site, ?preview=new loads the latest shared agent template.
     Everyone who opens the normal address keeps getting exactly what they get today. */
  var AGENT_HOSTS=["madeleinedavis.lakeshoreteam.com","chelseaporter.lakeshoreteam.com","listwithalexis.lakeshoreteam.com","kate.lakeshoreteam.com","haylee.lakeshoreteam.com"];
  var agentPreview=path==="/"&&AGENT_HOSTS.indexOf(host)>-1&&/[?&]preview=new(&|$)/.test(location.search);

  var REL="338f0a1a4944c2edc7799f79723d2e583bff4c22/";
  if(agentPreview){
    Promise.all([load(PIN+REL+"navbar.js"),load(CDN+"footer-v6.js"),load(CDN+"agent-homepage.js?v="+Date.now())]);
  }else if(path==="/"){
    if(AGENT_HOSTS.indexOf(host)>-1){
      Promise.all([load(PIN+REL+"navbar.js"),load(CDN+"footer-v6.js"),load(PIN+REL+"agent-homepage.js")]);
    }else{
      load(PIN+REL+"homepage-bundle.js").then(function(){load(PIN+REL+"hero-refresh.js");});
    }
  }else{
    Promise.all([load(PIN+REL+"navbar.js"),load(CDN+"footer-v6.js")]);
    if(path==="/sell")load(pin("seller"));
    else if(path==="/cash-offer")load(pin("cash"));
    else if(path==="/contact")load(pin("contact"));
    else if(path==="/myteam")load(pin("myteam"));
  }
})();



