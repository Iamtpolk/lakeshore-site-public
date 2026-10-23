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


  /* Office address: Lofty still holds the old address on the owner record, so swap it on the page
     (footer text and the structured data Google reads) until that record is updated. */
  (function(){
    var OLD_ST=/100 General Mouton Ave(nue)?/g, NEW_ST="2014 W Pinhook Rd";
    function swap(t){return t.replace(OLD_ST,NEW_ST).replace(/(Lafayette,\s*LA\s*)70501/g,"$170508").replace(/"postalCode":"70501"/g,'"postalCode":"70508"');}
    function run(){
      document.querySelectorAll('script[type="application/ld+json"]').forEach(function(sc){if(/General Mouton/.test(sc.textContent))sc.textContent=swap(sc.textContent);});
      var root=document.querySelector(".md-footer")||document.body;if(!root)return;
      var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n;
      while((n=w.nextNode())){if(/General Mouton/.test(n.nodeValue))n.nodeValue=swap(n.nodeValue);}
      /* eXp broker office address on the Managing Broker line */
      var w2=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),m;
      while((m=w2.nextNode())){
        if(/la\.broker@exprealty\.net/.test(m.nodeValue)){
          var line=m.parentElement,box=line&&line.parentElement;
          if(box&&!box.querySelector(".lst-broker-addr")){var p=line.cloneNode(false);p.className=(p.className?p.className+" ":"")+"lst-broker-addr";p.textContent="Address: 2201 Veterans Blvd #404, Metairie, LA 70002";box.appendChild(p);}
          break;
        }
      }
      document.querySelectorAll('a[href*="General"][href*="Mouton"]').forEach(function(a){a.href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("2014 W Pinhook Rd, Lafayette, LA 70508");});
    }
    var t=null;function later(){if(t)return;t=setTimeout(function(){t=null;run();},120);}
    run();new MutationObserver(later).observe(document.documentElement,{childList:true,subtree:true});
  })();

  /* Private preview: on any agent site, ?preview=new loads the latest shared agent template.
     Everyone who opens the normal address keeps getting exactly what they get today. */
  var AGENT_HOSTS=["madeleinedavis.lakeshoreteam.com","chelseaporter.lakeshoreteam.com","listwithalexis.lakeshoreteam.com","kate.lakeshoreteam.com","haylee.lakeshoreteam.com"];
  var agentPreview=path==="/"&&AGENT_HOSTS.indexOf(host)>-1&&/[?&]preview=new(&|$)/.test(location.search);

  var REL="338f0a1a4944c2edc7799f79723d2e583bff4c22/";
  /* Reveal: the Header Meta Tags style keeps the page hidden until html gets .lst-ready,
     so visitors never see Lofty's template flash first (it also reveals itself after a few seconds). */
  var html=document.documentElement,jobs=[],ready=function(){return !!document.getElementById("lst-premium-nav");};
  function reveal(){html.classList.add("lst-ready");}
  if(agentPreview){
    jobs=[load(PIN+REL+"navbar.js"),load(CDN+"footer-v6.js"),load(CDN+"agent-homepage.js?v="+Date.now())];
    ready=function(){return html.classList.contains("cp-agent-ready");};
  }else if(path==="/"){
    if(AGENT_HOSTS.indexOf(host)>-1){
      jobs=[load(PIN+REL+"navbar.js"),load(CDN+"footer-v6.js"),load(PIN+REL+"agent-homepage.js")];
      ready=function(){return html.classList.contains("cp-agent-ready");};
    }else{
      jobs=[load(PIN+REL+"homepage-bundle.js").then(function(){return load(PIN+REL+"hero-refresh.js");})];
      ready=function(){return !!document.querySelector(".lst-hero-actions");};
    }
  }else{
    jobs=[load(PIN+REL+"navbar.js"),load(CDN+"footer-v6.js")];
    if(path==="/sell")jobs.push(load(pin("seller")));
    else if(path==="/cash-offer")jobs.push(load(pin("cash")));
    else if(path==="/contact")jobs.push(load(pin("contact")));
    else if(path==="/myteam")jobs.push(load(pin("myteam")));
  }
  Promise.all(jobs).then(function(){
    var start=Date.now();
    (function check(){
      if(ready()||Date.now()-start>1500){requestAnimationFrame(function(){requestAnimationFrame(reveal);});return;}
      setTimeout(check,40);
    })();
  });
})();



