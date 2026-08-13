(function () {
  "use strict";

  if (window.__lakeshoreConsultationLoaded) return;
  window.__lakeshoreConsultationLoaded = true;

  var css = `
    #lst-consult-root{order:11!important;position:relative;overflow:hidden;padding:clamp(76px,8vw,118px) 24px;color:#f8f7f2;background:radial-gradient(circle at 14% 12%,rgba(185,144,82,.2),transparent 31%),radial-gradient(circle at 88% 86%,rgba(36,15,14,.55),transparent 38%),linear-gradient(145deg,#202322,#151817 62%,#202322);border-top:1px solid rgba(185,144,82,.3)}
    #lst-consult-root *{box-sizing:border-box}
    #lst-consult-root::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.45;background:linear-gradient(120deg,rgba(255,255,255,.04),transparent 38%),repeating-radial-gradient(ellipse at 88% 14%,transparent 0 32px,rgba(185,144,82,.055) 33px 34px,transparent 35px 58px)}
    .lst-consult-wrap{position:relative;z-index:1;display:grid;max-width:1360px;margin:0 auto;grid-template-columns:minmax(300px,.82fr) minmax(520px,1.18fr);align-items:start;gap:clamp(34px,5vw,78px)}
    .lst-consult-copy{position:sticky;top:110px;padding:clamp(12px,2vw,28px) 0}
    .lst-consult-kicker{margin:0 0 15px;color:#ead9a6;font:700 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.21em;text-transform:uppercase}
    .lst-consult-copy h2{max-width:650px;margin:0;color:#fff;font:500 clamp(42px,5vw,72px)/1.01 Georgia,serif;letter-spacing:-.035em}
    .lst-consult-copy>p{max-width:50ch;margin:22px 0 0;color:rgba(248,247,242,.74);font:400 15px/1.75 Inter,Arial,sans-serif}
    .lst-consult-points{display:grid;gap:14px;margin:30px 0 0;padding:0;list-style:none}
    .lst-consult-points li{display:flex;align-items:center;gap:12px;color:rgba(248,247,242,.88);font:600 12px/1.5 Inter,Arial,sans-serif}
    .lst-consult-points span{display:flex;width:28px;height:28px;flex:0 0 28px;align-items:center;justify-content:center;color:#ead9a6;border:1px solid rgba(185,144,82,.42);border-radius:9px;background:rgba(185,144,82,.1);font-size:13px}
    .lst-consult-direct{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px}
    .lst-consult-direct a{display:inline-flex;min-height:43px;align-items:center;justify-content:center;padding:0 16px;color:#f8f7f2!important;border:1px solid rgba(248,247,242,.18);border-radius:11px;background:rgba(248,247,242,.075);box-shadow:inset 0 1px 0 rgba(255,255,255,.1);font:700 10px/1 Inter,Arial,sans-serif;letter-spacing:.08em;text-decoration:none!important;text-transform:uppercase;transition:transform .2s ease,background .2s ease,border-color .2s ease}
    .lst-consult-direct a:hover{transform:translateY(-2px);background:rgba(185,144,82,.14);border-color:rgba(185,144,82,.5)}
    .lst-consult-form-shell{position:relative;overflow:hidden;padding:clamp(22px,3vw,38px);border:1px solid rgba(185,144,82,.38);border-radius:28px;background:linear-gradient(155deg,rgba(52,24,22,.88),rgba(36,15,14,.8) 48%,rgba(20,8,8,.91));box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 34px 76px rgba(0,0,0,.35);backdrop-filter:blur(20px) saturate(105%);-webkit-backdrop-filter:blur(20px) saturate(105%)}
    .lst-consult-form-shell::before{content:"";position:absolute;left:0;right:0;top:0;height:3px;background:linear-gradient(90deg,#b89052,#ead9a6 48%,#7d6e4e)}
    .lst-consult-form-head{position:relative;z-index:2;margin-bottom:22px}
    .lst-consult-form-head h3{margin:0;color:#fff;font:500 clamp(27px,2.6vw,38px)/1.1 Georgia,serif;letter-spacing:-.02em}
    .lst-consult-form-head p{margin:9px 0 0;color:rgba(248,247,242,.68);font:400 13px/1.6 Inter,Arial,sans-serif}
    .lst-consult-frame{position:relative;z-index:1;display:block;width:100%;height:720px;border:0;background:transparent;color-scheme:dark}
    .lst-consult-fallback{margin:14px 0 0;text-align:center;color:rgba(248,247,242,.62);font:500 11px/1.5 Inter,Arial,sans-serif}
    .lst-consult-fallback a{color:#ead9a6!important;text-decoration:underline;text-underline-offset:3px}
    body.home .page-content>#lst-consult-root{order:11!important}body.home .page-content>.md-footer{order:12!important}
    @media(max-width:980px){.lst-consult-wrap{grid-template-columns:1fr;max-width:760px}.lst-consult-copy{position:relative;top:auto;padding:0}.lst-consult-copy>p{max-width:62ch}.lst-consult-frame{height:760px}}
    @media(max-width:620px){#lst-consult-root{padding:64px 16px}.lst-consult-copy h2{font-size:43px}.lst-consult-form-shell{padding:24px 16px;border-radius:22px}.lst-consult-frame{height:820px}.lst-consult-direct{display:grid;grid-template-columns:1fr 1fr}.lst-consult-direct a{width:100%}}
    @media(prefers-reduced-motion:reduce){#lst-consult-root *,#lst-consult-root *::before,#lst-consult-root *::after{transition:none!important}}
  `;

  var iframeCss = `
    html,body{margin:0!important;min-height:0!important;background:transparent!important;color:#f8f7f2!important;overflow-x:hidden!important}
    #app{min-height:0!important;background:transparent!important}
    #app>.md-header,#app>.md-footer,#lst-premium-nav,#chat-app,body>div[data-v-app]{display:none!important}
    #app>.md-form{min-height:0!important;margin:0!important;padding:0!important;background:transparent!important}
    .md-form-container{width:100%!important;max-width:none!important;margin:0!important;padding:0!important;background:transparent!important}
    .md-form h2{display:none!important}
    .info-form2{width:100%!important;margin:0!important;color:#f8f7f2!important}
    .info-form2 .input-content,.info-form2 .basic-info{display:grid!important;gap:15px!important}
    .info-form2 .basic-info{grid-template-columns:1fr 1fr!important}
    .info-form2 .fullname{grid-column:1/-1!important}
    .info-form2 .input-box,.info-form2 .message{margin:0!important}
    .info-form2 .input-container{position:relative!important;padding:0!important;background:transparent!important}
    .info-form2 .label-top{display:none!important}
    .info-form2 input,.info-form2 textarea{width:100%!important;border:1px solid rgba(248,247,242,.22)!important;border-radius:12px!important;background:rgba(248,247,242,.085)!important;color:#f8f7f2!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08)!important;font:500 14px/1.4 Inter,Arial,sans-serif!important;outline:none!important;transition:border-color .2s ease,box-shadow .2s ease,background .2s ease!important}
    .info-form2 input{height:52px!important;padding:0 15px!important}
    .info-form2 textarea{min-height:112px!important;padding:15px!important;resize:vertical!important}
    .info-form2 input::placeholder,.info-form2 textarea::placeholder{color:rgba(248,247,242,.58)!important}
    .info-form2 input:focus,.info-form2 textarea:focus{border-color:#b89052!important;background:rgba(248,247,242,.11)!important;box-shadow:0 0 0 3px rgba(185,144,82,.16)!important}
    .info-form2 .mg-error{color:#ead9a6!important;font:600 11px/1.4 Inter,Arial,sans-serif!important}
    .info-form2 .disclaimer-wrap{margin-top:18px!important}
    .info-form2 .disclaimer-content{color:rgba(248,247,242,.56)!important;font:400 9px/1.55 Inter,Arial,sans-serif!important}
    .info-form2 .disclaimer-content a{color:#ead9a6!important}
    .info-form2 .check-box-container{width:18px!important;height:18px!important;border-color:rgba(234,217,166,.65)!important;border-radius:5px!important;background:rgba(248,247,242,.08)!important}
    .info-form2 .submit-content{margin-top:18px!important}
    .info-form2 .submit{width:100%!important;height:50px!important;border:1px solid rgba(185,144,82,.75)!important;border-radius:12px!important;background:linear-gradient(135deg,#c7ab68,#b89052)!important;color:#240f0e!important;box-shadow:0 12px 28px rgba(0,0,0,.2)!important;font:800 11px/1 Inter,Arial,sans-serif!important;letter-spacing:.1em!important;text-transform:uppercase!important}
    .info-form2 .submit.submit-disabled{opacity:.48!important;cursor:not-allowed!important}
    @media(max-width:560px){.info-form2 .basic-info{grid-template-columns:1fr!important}.info-form2 .fullname{grid-column:auto!important}}
  `;

  function styleFrame(frame) {
    try {
      var doc = frame.contentDocument;
      if (!doc || !doc.head || !doc.body) return;
      if (!doc.getElementById("lst-consult-embed-style")) {
        var style = doc.createElement("style");
        style.id = "lst-consult-embed-style";
        style.textContent = iframeCss;
        doc.head.appendChild(style);
      }
      var nativeHeading = doc.querySelector(".md-form h2");
      if (nativeHeading) nativeHeading.textContent = "Tell us about your move";
      var form = doc.querySelector(".md-form");
      if (form) {
        var height = Math.max(560,Math.ceil(form.getBoundingClientRect().height + 8));
        frame.style.height = height + "px";
      }
    } catch (error) {
      frame.style.height = "760px";
    }
  }

  function build() {
    if (document.getElementById("lst-consult-root")) return;
    var footer = document.querySelector("body.home .md-footer");
    if (!footer || !footer.parentNode) return;
    var section = document.createElement("section");
    section.id = "lst-consult-root";
    section.setAttribute("aria-labelledby", "lst-consult-heading");
    section.innerHTML = '<div class="lst-consult-wrap"><div class="lst-consult-copy"><p class="lst-consult-kicker">Request a Consultation</p><h2 id="lst-consult-heading">Thinking about making a move? Let&rsquo;s talk.</h2><p>Tell us what you are considering and a Lakeshore Team specialist will follow up with clear, practical next steps.</p><ul class="lst-consult-points"><li><span aria-hidden="true">01</span>No pressure or obligation</li><li><span aria-hidden="true">02</span>Local guidance from the right specialist</li><li><span aria-hidden="true">03</span>A straightforward plan for your next move</li></ul><div class="lst-consult-direct"><a href="tel:+13372414963">Call the Team</a><a href="sms:+13372414963">Text the Team</a></div></div><div class="lst-consult-form-shell"><div class="lst-consult-form-head"><h3>Start the conversation.</h3><p>Share a few details and we will be in touch.</p></div><iframe class="lst-consult-frame" title="Request a consultation with Lakeshore Team" src="/contact?embed=consultation" loading="lazy"></iframe><p class="lst-consult-fallback">Form not loading? <a href="/contact">Open the consultation form</a>.</p></div></div>';
    footer.parentNode.insertBefore(section,footer);
    var frame = section.querySelector(".lst-consult-frame");
    frame.addEventListener("load",function () {
      styleFrame(frame);
      setTimeout(function(){styleFrame(frame);},600);
      setTimeout(function(){styleFrame(frame);},1800);
    });
  }

  if (!document.getElementById("lakeshore-consultation-styles")) {
    var style = document.createElement("style");
    style.id = "lakeshore-consultation-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }
  build();
  new MutationObserver(build).observe(document.documentElement,{childList:true,subtree:true});
})();