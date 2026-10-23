/*
 * Lakeshore Team: shared agent homepage template.
 *
 * One layout for every agent subdomain. Each agent is a block of info in AGENTS below;
 * adding a new agent = adding a block. The router loads this file on an agent's homepage.
 *
 * Sections (each hides itself when the agent has no content for it):
 *   hero -> get to know -> why work with -> guides (flipbook) -> reviews -> Lofty listings -> contact
 */
(function () {
  "use strict";

  var ASSETS = "https://iamtpolk.github.io/lakeshore-site-public/assets/";
  var PAGEFLIP_SRC = "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.js";

  /* ------------------------------------------------------------------ */
  /* Agent info                                                          */
  /* ------------------------------------------------------------------ */
  var AGENTS = {
    "madeleinedavis.lakeshoreteam.com": {
      key: "madeleine",
      name: "Madeleine Davis",
      first: "Madeleine",
      title: "Residential Specialist",
      region: "Southwest Louisiana",
      headshot: "team/madeleine-davis.webp",
      headshotPosition: "center 34%",
      accent: { main: "#7c9a82", soft: "#a9c4ad", ink: "#4f6b55" },
      headline: ["Move with", "clarity."],
      heroCopy: "Madeleine Davis guides buyers and sellers throughout Southwest Louisiana with thoughtful strategy, clear communication, and dependable support from the first conversation to the closing table.",
      parishes: ["Calcasieu", "Jeff Davis", "Beauregard", "Allen", "Cameron"],
      phone: "+13373048935",
      phoneLabel: "(337) 304-8935",
      email: "madeleine.davis@exprealty.com",
      socials: {
        instagram: "https://www.instagram.com/movingwmadeleine",
        contactCard: "https://hihello.com/p/593bf9e9-8a27-4b7d-8e6a-60473c6a7fbf",
        facebook: "https://www.facebook.com/Madeleine-Davis,-Realtor-273470091185196"
      },
      know: {
        intro: "Born in Texas, rooted in Lake Charles. Here&rsquo;s a little about the person who&rsquo;ll be guiding your move.",
        hometown: ["Clear Lake, TX &rarr; Lake Charles", "Born in Clear Lake, Texas, but Lake Charles has been home since my sophomore year of high school!"],
        spot: ["Outdoors at a local park", "One of my favorite ways to enjoy SWLA is spending time outdoors at a local park!"],
        why: ["It started with my mom.", "Watching my mom from a young age sparked my interest in real estate. I was drawn to the way she helped families, explored beautiful homes, and guided people toward their goals. That inspired me to pursue a career where I could do the same: helping clients navigate the process with confidence and find their place to call home."],
        fun: ["Home cook, host &amp; Frenchie mom", "When I&rsquo;m not showing homes, you can usually find me trying a new recipe, spending time with my husband &amp; two French bulldogs, exploring a new local spot or hosting get-togethers! I love finding creative ways to bring people together."]
      },
      why: {
        heading: "Personal guidance for every move.",
        intro: "Real estate is about more than a transaction. Madeleine brings a friendly, responsive, and personalized approach so you understand every decision and feel supported through each important milestone.",
        values: [
          ["Thoughtful strategy", "Every recommendation begins with your goals, your timeline, and a clear plan tailored to the move you are making."],
          ["Clear communication", "You receive timely updates and straightforward guidance, with answers that help you make confident decisions."],
          ["Dependable support", "Madeleine stays accessible and involved from the first conversation through closing, giving you steady guidance at every step."]
        ]
      },
      guides: [{
        id: "relocation",
        tag: "Relocation",
        title: "Lake Charles Relocation Guide",
        blurb: "Festivals, jobs, healthcare, entertainment, restaurants, and everything else to know before moving to Southwest Louisiana.",
        heroButton: "Relocation guide",
        folder: "guides/madeleine-davis/lake-charles-relocation/",
        pages: 32,
        latest: "https://www.canva.com/design/DAHRAh7Fsgg/CI87yo3DCNsdq0-MkJe17Q/view"
      }],
      reviews: [
        ["I&rsquo;m so grateful for Madeleine and the support she gave me throughout my search for the perfect Airbnb property. She was attentive from day one, always made herself available, and truly understood what I needed for my business.", "Alicia Noviskie", "Facebook recommendation"],
        ["We couldn&rsquo;t be more grateful to Madeleine for helping us find our first home. She was incredibly patient, knowledgeable, and always made sure we felt comfortable throughout the entire process.", "Brodde Corley", "Facebook recommendation"]
      ]
    },

    "chelseaporter.lakeshoreteam.com": {
      key: "chelsea",
      name: "Chelsea Porter",
      first: "Chelsea",
      title: "Residential Specialist",
      region: "Southwest Louisiana",
      headshot: "team/chelsea-porter.webp",
      headshotPosition: "center 34%",
      accent: { main: "#b89052", soft: "#d7be7c", ink: "#86682f" },
      headline: ["Move with", "confidence."],
      heroCopy: "Chelsea Porter delivers a seamless, stress-free real estate experience through thoughtful preparation, clear communication, and exceptional service from the first conversation to the closing table.",
      parishes: ["Calcasieu", "Jeff Davis", "Beauregard", "Allen", "Cameron"],
      phone: "+13373240588",
      phoneLabel: "(337) 324-0588",
      email: "chelsea.porter@exprealty.com",
      socials: {
        instagram: "https://www.instagram.com/cporter_realtor",
        messenger: "https://m.me/61582528467689",
        facebook: "https://www.facebook.com/profile.php?id=61582528467689"
      },
      know: {
        intro: "Small-town Louisiana roots and a soft spot for making big moves feel easier. Here&rsquo;s a little about the person who&rsquo;ll be guiding yours.",
        hometown: ["Longville, Louisiana", ""],
        why: ["Less stress on the biggest purchase.", "I love helping people through one of the biggest purchases of their lives and making the process feel a little less stressful."],
        fun: ["Happiest doing too much", "I&rsquo;m stressed 99.9% of the time &amp; I thrive on doing too much."]
      },
      why: {
        heading: "A calmer way to make your move.",
        intro: "Real estate decisions carry a lot of weight. Chelsea brings structure, responsiveness, and genuine care to the process so you always understand what is happening and what comes next.",
        values: [
          ["Organized &amp; detail-focused", "Every deadline, document, and next step is handled with care&mdash;keeping your transaction moving without unnecessary stress."],
          ["Clear communication", "You receive timely updates and straightforward guidance, with answers that help you make confident decisions."],
          ["Client-first guidance", "Your goals lead the process. Chelsea stays involved from the first conversation through closing and beyond."]
        ]
      },
      reviews: [
        ["The wife and I were moving across country on a very short timer, and Chelsea was there to help us every step of the way&mdash;even when we were 2,000 miles away.", "Benjamin Looney", "Facebook recommendation"],
        ["Chelsea was the best. Kept me updated with everything, very patient, answered every question I had. I highly recommend her.", "Megan Miller", "Facebook recommendation"]
      ]
    },

    "listwithalexis.lakeshoreteam.com": {
      key: "alexis",
      name: "Alexis Lacomb",
      first: "Alexis",
      title: "Residential Specialist",
      region: "Acadiana",
      headshot: "team/alexis-lacomb.webp",
      avatarCrop: ["center 42%", 2.2, "52% 38%"],
      headshotPosition: "48% 28%",
      accent: { main: "#c47a7a", soft: "#e3a9a9", ink: "#9a4f4f" },
      headline: ["Find your", "place."],
      heroCopy: "Alexis Lacomb helps buyers and sellers across Acadiana with a down-to-earth approach: she listens, keeps it real, and treats every client like a neighbor.",
      parishes: ["Evangeline", "Vermilion", "Lafayette", "St. Landry", "Jeff Davis"],
      phone: "+13375221290",
      phoneLabel: "(337) 522-1290",
      email: "alexis.lacomb@exprealty.com",
      socials: {
        instagram: "https://www.instagram.com/listwithalexis/",
        messenger: "https://m.me/alexis.fincher.2025",
        facebook: "https://www.facebook.com/alexis.fincher.2025"
      },
      reviews: [
        ["We had the absolute best experience working with Alexis to buy our home! From the very first conversation, she was kind, patient, and incredibly knowledgeable. She took the time to understand exactly what we were looking for and was always available to answer our (many) questions. Alexis made what could have been a stressful process feel easy and exciting. She was always on top of things, ensuring we never missed a beat. Her dedication and expertise truly set her apart&mdash;we always felt like we had someone in our corner, looking out for our best interests. Thanks to Alexis, we found the perfect home, and we couldn&rsquo;t be more grateful. If you&rsquo;re looking for a real estate agent who genuinely cares and will go above and beyond, we highly recommend her!", "Kelsey Myers", "Facebook recommendation"],
        ["Alexis was absolutely wonderful to work with! She always responds quickly, guided us through every step of the process, and made everything feel easy and stress-free! We are very grateful that we found her and would highly recommend her to anyone buying or selling a home.", "Dillon Morvant", "Bought a home in Lafayette, LA"],
        ["I would highly recommend Alexis as a realtor! She was a life saver when we sold our house! She was very knowledgeable and took care of every detail!", "Sherry Briley", "Facebook recommendation"],
        ["When I say she was 100% an advocate for me and my husband I mean it. She managed to find us our actual dream &#129392;", "Emily Gardner", "Facebook recommendation"],
        ["We cannot recommend Alexis enough! Working with her was truly the best experience we could have asked for. From the very beginning, Alexis was incredibly patient with us and walked us through every step of the home-buying process, making sure we understood everything along the way. She never rushed us or pressured us into making a decision. Instead, she took the time to make sure we found the right home for us. She always had our best interests at heart and made us feel confident in every decision we made. Alexis was the sweetest, always available to answer our questions, and went above and beyond to help us with anything and everything we needed. She made what could have been a stressful process feel exciting and enjoyable. We are so grateful for everything Alexis did for us and couldn&rsquo;t have asked for a better realtor. We highly recommend her to anyone looking to buy or sell a home&mdash;you&rsquo;ll be in the best hands!", "Misdy Ortega", "Facebook recommendation"],
        ["We enjoyed working with Alexis through our home selling process. She guided us through every step with professionalism, market knowledge and genuine commitment to our success.", "Jake Guillory", "Facebook recommendation"],
        ["highly recommend. You want the perfect house. she will work day and night to make you happy. and will find you the best deal on the market. thank you so much for helping me and my wife!", "Joshua Henry", "Facebook recommendation"]
      ],
      know: {
        intro: "Wife, mom, and small-town Louisiana girl. Here&rsquo;s a little about the person who&rsquo;ll be guiding your move.",
        hometown: ["Midland, Louisiana (not Texas!)", "My grandparents had crawfish farms, my dad worked on the rigs, and I grew up knowing the value of hard work, good people, and a place to call home."],
        spot: ["Gatti&rsquo;s &amp; C&rsquo;est Bon", "When I&rsquo;m not helping clients, you can find me spending time with my family or grabbing a bite at two of my local favorites: Gatti&rsquo;s in Crowley and C&rsquo;est Bon in Mermentau!"],
        why: ["From Caribbean villas to Louisiana homes", "Before real estate, I managed multimillion-dollar villas in the Caribbean. But even from a young age, I knew I wanted to help people fall in love with a home and help them sell when it was time for their next chapter."]
      },
      why: {
        heading: "Real talk, neighbor to neighbor.",
        intro: "Buying or selling a home is personal, and you deserve someone who listens, understands what matters to you, and treats you like a neighbor.",
        values: [
          ["Meets you where you are", "Every move starts with your situation, your timeline, and what matters most to you."],
          ["Keeps it real", "Honest, straightforward guidance so you always know where things stand."],
          ["No question too small", "Alexis makes it comfortable to ask anything, so you feel confident at every step."]
        ]
      }
    },

    "kate.lakeshoreteam.com": {
      key: "kate",
      name: "Kate Mouton",
      first: "Kate",
      title: "Co-Owner & Team Leader",
      region: "Acadiana",
      headshot: "team/kate-mouton.webp",
      /* Matches her Instagram bio. */
      socialBios: { instagram: "Real Estate Agent<br>Your go-to-gal for all things Real Estate &#128133;<br>Lakeshore Team &#10024; | @exprealty<br>Let&rsquo;s work together!" },
      headshotPosition: "center 42%",
      accent: { main: "#8F8E55", soft: "#CFCC9C", ink: "#58572E" },
      headline: ["Your best", "move yet."],
      heroCopy: "Kate Mouton helps buyers, sellers, and new agents across Acadiana navigate real estate with clarity and confidence, bringing the systems, hustle, and heart needed to get results.",
      parishes: ["Lafayette", "Acadia", "Vermilion", "St. Martin", "St. Landry", "Iberia"],
      phone: "+13372984974",
      phoneLabel: "(337) 298-4974",
      email: "katherine.mouton@exprealty.com",
      socials: {
        instagram: "https://www.instagram.com/katemouton/",
        contactCard: "https://popl.co/card/MZQ6p8BD/1/dash",
        facebook: "https://www.facebook.com/katherine.b.mouton",
        linkedin: "https://www.linkedin.com/in/kate-mouton-90667abb/",
        threads: "https://www.threads.com/@katemouton",
        store: "https://stan.store/katemouton"
      },
      know: {
        intro: "Lafayette roots and a head for business. Here&rsquo;s a little about the person who&rsquo;ll be guiding your move.",
        hometown: ["Lafayette, Louisiana", ""],
        spot: ["Judice Inn", ""],
        why: ["The people behind the move", "Getting to know the people behind the move and helping turn a big, sometimes overwhelming decision into an exciting next chapter."],
        fun: ["A numbers person at heart", "I have an accounting &amp; business background prior to real estate."]
      },
      why: {
        heading: "Systems, hustle, and heart.",
        intro: "From strategic marketing to seamless transactions, Kate brings the systems, hustle, and heart needed to get results&mdash;so your next move is your best one yet.",
        values: [
          ["Strategic marketing", "A clear plan to position your home or your offer for the strongest possible result."],
          ["Seamless transactions", "Organized systems keep every deadline, document, and detail moving smoothly to the closing table."],
          ["Clarity &amp; confidence", "Straightforward guidance so you understand every step and feel confident in every decision."]
        ]
      },
      reviews: [
        ["Kate was awesome! She was very knowledgeable and thus, the whole process went quickly and smoothly. Kate negotiated everything I wanted and was very responsive. She has local relationships with other service providers so that I was able to have all my needs met quickly. Best of all, Kate is so personable and really listened to the most important things to me in looking for a new home. From start to finish, Kate took care of all my needs and was vested in my home buying experience. Only realtor I will ever use and recommend to others!", "Kristi Nelson", "Bought a home in Broussard, LA"],
        ["Kate helped me find my first house, and I couldn&rsquo;t be happier with the experience. She made the entire process feel easy and stress-free! I highly recommend her to anyone looking for a realtor they can trust!", "Julia Eisler", "Facebook recommendation"],
        ["If your looking or even THINKING about buying, Kate is your girl! Literally went above and beyond for us with everything that came with buying a home! First time Homebuyers and living in our dream home &#10084;&#65039;", "Chyenne Reed", "Facebook recommendation"],
        ["Kate was an amazing agent all the way around!! I would HIGHLY recommend her to anyone. She made the experience painless and exciting. Her knowledge is expansive and she was always available whenever I had any questions. There&rsquo;s no need to worry when you hire her, seriously.", "Victoria Roy", "Bought a home in 2025"]
      ]
    },

    "haylee.lakeshoreteam.com": {
      key: "haylee",
      name: "Haylee Meaux",
      first: "Haylee",
      title: "Residential Specialist",
      region: "Acadiana",
      headshot: "team/haylee-meaux.webp",
      avatarCrop: ["center 0%", 2.6, "42% 9%"],
      headshotPosition: "40% 10%",
      accent: { main: "#A5826A", soft: "#D2B49C", ink: "#49352C", ivory: "#F5F0E8", cream: "#ECE3D6" },
      headline: ["Move with", "ease."],
      heroCopy: "Haylee Meaux helps buyers and sellers across Acadiana start fresh in a new home or finally sell after trying it on their own, getting to know every client personally along the way.",
      parishes: ["Evangeline", "Vermilion", "Lafayette", "St. Landry", "Jeff Davis", "Cameron"],
      phone: "+13373241789",
      phoneLabel: "(337) 324-1789",
      email: "haylee.meaux@exprealty.com",
      socials: {
        instagram: "https://www.instagram.com/haylee.meaux/",
        facebook: "https://www.facebook.com/haylee.meaux"
      },
      know: {
        intro: "Crowley roots and a love for beautiful homes. Here&rsquo;s a little about the person who&rsquo;ll be guiding your move.",
        hometown: ["Crowley, Louisiana", ""],
        spot: ["R&ecirc;ve Coffee in River Ranch", ""],
        why: ["Helping people start fresh", "Seeing all the beautiful houses and being able to help people start fresh in a new home, or finally sell their home after they tried it themselves for so long."],
        fun: ["An introvert turned people person", "I&rsquo;m actually more introverted, but real estate has brought out a whole new social side of me that I love!"]
      },
      why: {
        heading: "Personal from the first hello.",
        intro: "Haylee loves getting to know her clients personally and building a real bond, so your move feels supported from the first conversation to the closing table.",
        values: [
          ["Gets to know you", "Every move starts with understanding who you are and what matters to you, not just what you are buying or selling."],
          ["A fresh start", "Whether it is your first home or your next chapter, Haylee helps you start fresh with confidence."],
          ["Ready to finally sell", "If you have tried selling on your own for a while, Haylee brings the support to finally get it done."]
        ]
      },
      reviews: [
        ["She talked me into listing it&hellip;she got it sold and closed quickly. She was outstanding &#128079;", "Lisa Fontenot Leger", "Sold a home in Branch, LA"]
      ]
    }
  };

  /* ------------------------------------------------------------------ */
  /* Should this page run?                                               */
  /* ------------------------------------------------------------------ */
  var host = window.location.hostname.toLowerCase();
  var A = AGENTS[host];
  if (!A) return;
  if ((window.location.pathname.replace(/\/$/, "") || "/") !== "/") return;
  if (window.__lstAgentHomeLoaded) return;
  window.__lstAgentHomeLoaded = true;

  var HEADSHOT = ASSETS + A.headshot;
  var CONNECT_ID = A.key + "-connect";

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function initials(n) { return n.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase(); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  /* ------------------------------------------------------------------ */
  /* Hide Lofty's default homepage until ours is ready (no flash)        */
  /* ------------------------------------------------------------------ */
  var root = document.documentElement;
  var gateReleased = false, gateTimedOut = false;
  var gateStyle = document.createElement("style");
  gateStyle.id = "cp-agent-loading-gate";
  gateStyle.textContent =
    "html.cp-agent-loading{background:#160b0a!important}" +
    "html.cp-agent-loading body{opacity:0!important;visibility:hidden!important;pointer-events:none!important}" +
    "html.cp-agent-ready body{opacity:1;visibility:visible;transition:opacity .38s ease}" +
    "@media(prefers-reduced-motion:reduce){html.cp-agent-ready body{transition:none}}";
  document.head.appendChild(gateStyle);
  root.classList.add("cp-agent-loading");
  function releaseGate(completed) {
    if (gateReleased) return;
    gateReleased = true;
    gateTimedOut = !completed;
    root.classList.remove("cp-agent-loading");
    if (completed) root.classList.add("cp-agent-ready");
  }
  var gateSafetyTimer = window.setTimeout(function () { releaseGate(false); }, 10000);

  /* ------------------------------------------------------------------ */
  /* Icons                                                               */
  /* ------------------------------------------------------------------ */
  function svg(body, size, extra) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 22) + '" height="' + (size || 22) + '" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"' + (extra || "") + ">" + body + "</svg>";
  }
  var ICON = {
    home: svg('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'),
    tree: svg('<path d="M12 3c-3.3 0-6 2.6-6 5.8 0 2.4 1.5 4.4 3.6 5.3h4.8c2.1-.9 3.6-2.9 3.6-5.3C18 5.6 15.3 3 12 3z"/><path d="M12 14v7M8.5 21h7"/>'),
    key: svg('<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2M14 9l2 2"/>'),
    heart: svg('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'),
    pin: svg('<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>', 13, ' stroke-width="2.2"'),
    book: svg('<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z"/><path d="M12 6.5v13"/>', 17, ' stroke-width="1.9"'),
    card: svg('<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5.2 16.2c.8-1.7 2-2.4 3.3-2.4s2.5.7 3.3 2.4M14.5 10h4.5M14.5 13.5h3"/>', 22, ' stroke-width="2"'),
    threads: '<svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M16.7 11.1c-.1-2.6-1.7-4-4.4-4.1-2.1-.1-3.7.8-4.6 2.4l2.2 1.1c.5-.9 1.3-1.3 2.4-1.3 1.2 0 2 .5 2.2 1.5-3.8-.2-6.3 1.2-6.3 3.8 0 2.2 1.8 3.7 4.1 3.7 2.2 0 3.8-1.2 4.3-3.3 1 .6 1.6 1.5 1.6 2.7 0 2.8-2.4 4.4-6.1 4.4-5.5 0-8.7-3.9-8.7-9.8 0-6 3.4-9.8 8.7-9.8 4.2 0 7.1 2.2 8.1 6.1l2.2-.6C21.2 3 17.5.1 12.1.1 5.5.1 1 4.9 1 12.2 1 19.4 5.4 24 12.1 24c5.1 0 8.5-2.6 8.5-6.5 0-3-1.5-5.1-3.9-6.4Zm-4.2 4.9c-1.1 0-1.9-.6-1.9-1.5 0-1.2 1.2-1.8 3.9-1.6-.1 2.1-.8 3.1-2 3.1Z"/></svg>',
    store: svg('<path d="M6 7h12l1.2 13H4.8L6 7z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>', 21, ' stroke-width="2"'),
    instagram: '<svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true"><defs><linearGradient id="cp-igg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#feda75"/><stop offset=".5" stop-color="#d62976"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="url(#cp-igg)" stroke-width="2.2"/><circle cx="12" cy="12" r="4.3" fill="none" stroke="url(#cp-igg)" stroke-width="2.2"/><circle cx="17.4" cy="6.6" r="1.4" fill="#d62976"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="#1877F2"/><path d="M13.4 20.4v-6.1h2.1l.3-2.5h-2.4v-1.6c0-.7.2-1.2 1.2-1.2h1.3V6.8c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H8.7v2.5h2.1v6.1z" fill="#fff"/></svg>',
    messenger: '<svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true"><defs><linearGradient id="cp-msg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#0099FF"/><stop offset=".6" stop-color="#A033FF"/><stop offset="1" stop-color="#FF5C87"/></linearGradient></defs><path d="M12 2.5C6.6 2.5 2.5 6.4 2.5 11.6c0 2.7 1.1 5.1 2.9 6.7v3.2l3-1.6c1.1.3 2.3.5 3.6.5 5.4 0 9.5-3.9 9.5-9.1S17.4 2.5 12 2.5z" fill="url(#cp-msg)"/><path d="M6.6 14.4l3-4.7 2.3 1.8 3.4-1.9-3 4.7-2.3-1.8z" fill="#fff"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><rect x="1.5" y="1.5" width="21" height="21" rx="4" fill="#0A66C2"/><path d="M6.6 9.6h2.3v7.6H6.6zM7.75 5.9a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66zM10.4 9.6h2.2v1h.03c.31-.58 1.06-1.2 2.18-1.2 2.33 0 2.76 1.53 2.76 3.53v4.27h-2.3v-3.79c0-.9-.02-2.07-1.26-2.07-1.26 0-1.45.98-1.45 2v3.86h-2.3z" fill="#fff"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M14.5 3v11.2a3.3 3.3 0 1 1-3.3-3.3" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M14.5 3c.4 2.6 2.2 4.3 4.8 4.5" fill="none" stroke="#25F4EE" stroke-width="2.2" stroke-linecap="round"/></svg>'
  };

  /* ------------------------------------------------------------------ */
  /* Styles                                                              */
  /* ------------------------------------------------------------------ */
  function css() {
    var a = A.accent;
    return [
      ":root{--cp-ink:#202322;--cp-ox:#240f0e;--cp-ivory:" + (a.ivory || "#f8f7f2") + ";--cp-cream:" + (a.cream || "#efece3") + ";--cp-line:rgba(36,15,14,.14);--cp-accent:" + a.main + ";--cp-accent-soft:" + a.soft + ";--cp-accent-ink:" + a.ink + "}",
      "html.cp-agent-home body{background:var(--cp-ivory);color:var(--cp-ink)}",
      "html.cp-agent-home .md-hero,html.cp-agent-home .md-listing-search,html.cp-agent-home .md-team-desc,html.cp-agent-home .md-cta,html.cp-agent-home .md-team{display:none!important}",
      ".cp-home,.cp-home *{box-sizing:border-box}.cp-home{font-family:'DM Sans',sans-serif}",
      ".cp-shell{width:min(1180px,calc(100% - 40px));margin:auto}.cp-serif{font-family:'Playfair Display',serif}",
      ".cp-kicker{color:var(--cp-accent-ink);font-size:.7rem;font-weight:800;letter-spacing:.19em;text-transform:uppercase}",

      /* buttons */
      ".cp-actions{display:flex;flex-wrap:wrap;gap:12px}",
      ".cp-button{display:inline-flex;gap:9px;align-items:center;justify-content:center;min-height:52px;padding:0 22px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:var(--cp-accent);color:#17120c!important;font:800 .72rem/1 'DM Sans',sans-serif;letter-spacing:.11em;text-decoration:none!important;text-transform:uppercase;cursor:pointer;transition:background .22s ease,color .22s ease,border-color .22s ease,transform .22s ease,box-shadow .22s ease}",
      ".cp-button:hover{border-color:#fff;background:#fff;color:var(--cp-ox)!important;transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.22)}",
      ".cp-button.cp-secondary{background:rgba(255,255,255,.07);color:#fff!important;backdrop-filter:blur(12px)}",
      ".cp-button.cp-secondary:hover{border-color:var(--cp-accent);background:var(--cp-accent);color:#17120c!important}",
      ".cp-guide-btn{border-color:color-mix(in srgb,var(--cp-accent) 55%,transparent)!important}.cp-guide-btn svg{transition:transform .35s cubic-bezier(.2,.9,.3,1.4)}.cp-guide-btn:hover svg{transform:rotate(-8deg) scale(1.15)}",

      /* hero */
      ".cp-hero{position:relative;min-height:820px;padding:150px 0 70px;overflow:hidden;color:#fff;background:radial-gradient(circle at 75% 40%,color-mix(in srgb,var(--cp-accent) 26%,transparent),transparent 30%),linear-gradient(110deg,#160b0a 0%,#241110 52%,#101210 100%)}",
      ".cp-hero-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);align-items:center;gap:44px;min-height:600px}",
      ".cp-eyebrow{display:flex;align-items:center;gap:12px;margin-bottom:22px;color:var(--cp-accent-soft);font-size:.7rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase}.cp-eyebrow:before{content:'';width:38px;height:1px;flex:0 0 38px;background:var(--cp-accent-soft)}",
      ".cp-hero .cp-hero-title{max-width:650px;margin:0;color:#fff;font-size:clamp(4rem,8vw,7.6rem);font-weight:500;line-height:.88;letter-spacing:-.055em}",
      ".cp-hero .cp-hero-title{white-space:nowrap}",
      ".cp-hero .cp-hero-title span{display:block;margin-left:1.08em;color:var(--cp-accent-soft);font-style:italic}",
      ".cp-hero-copy{max-width:530px;margin:30px 0 26px;color:rgba(255,255,255,.72);font-size:1.04rem;line-height:1.75}",
      ".cp-chips-label{display:flex;align-items:center;gap:7px;margin:0 0 10px;color:var(--cp-accent-soft);font-size:.66rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase}",
      ".cp-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 30px}",
      ".cp-chip{padding:7px 13px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.06);color:#fff;font-size:.74rem;font-weight:600;letter-spacing:.04em;transition:background .25s ease,border-color .25s ease,transform .25s ease}",
      ".cp-chip:hover{border-color:var(--cp-accent-soft);background:color-mix(in srgb,var(--cp-accent) 22%,transparent);transform:translateY(-2px)}",
      ".cp-portrait-wrap{position:relative;min-height:580px}",
      ".cp-portrait{position:absolute;inset:0 0 0 8%;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:180px 180px 24px 24px;background:#cfc2b4;box-shadow:0 32px 80px rgba(0,0,0,.38)}",
      ".cp-portrait img{width:100%;height:100%;object-fit:cover}",
      ".cp-portrait:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgba(18,9,8,.38))}",
      ".cp-signature{position:absolute;z-index:2;right:-10px;bottom:36px;min-width:240px;max-width:calc(100% - 20px);padding:20px 22px;border:1px solid rgba(255,255,255,.22);border-radius:16px;background:linear-gradient(145deg,rgba(28,13,12,.72),rgba(20,10,9,.58));backdrop-filter:blur(18px) saturate(1.2);-webkit-backdrop-filter:blur(18px) saturate(1.2);box-shadow:0 18px 50px rgba(0,0,0,.35)}",
      ".cp-signature strong{display:block;color:#fff;font:500 1.35rem 'Playfair Display',serif}",
      ".cp-signature span{display:block;margin-top:7px;color:var(--cp-accent-soft);font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,.4)}",

      /* section heads */
      ".cp-section{padding:110px 0}",
      ".cp-section-head{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:end;margin-bottom:58px}",
      ".cp-section-head h2,.cp-listing-head h2{max-width:650px;margin:10px 0 0;font-size:clamp(2.8rem,5vw,5.1rem);font-weight:500;line-height:.98;letter-spacing:-.045em}",
      ".cp-section-head p{margin:0;color:#575853;font-size:1rem;line-height:1.8}",

      /* get to know */
      ".cp-know{background:var(--cp-cream)}",
      ".cp-know-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}",
      ".cp-fact{position:relative;overflow:hidden;display:flex;flex-direction:column;padding:30px 30px 32px;border:1px solid var(--cp-line);border-radius:22px;background:#fff;transition:transform .3s ease,box-shadow .3s ease}",
      ".cp-fact:before{content:'';position:absolute;top:-60px;right:-50px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--cp-accent) 20%,transparent),transparent 70%);pointer-events:none}",
      ".cp-fact:hover{transform:translateY(-6px) rotate(-.4deg);box-shadow:0 22px 50px rgba(36,15,14,.12)}",
      ".cp-fact-icon{position:relative;display:grid;width:46px;height:46px;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--cp-accent) 18%,#fff);color:var(--cp-accent-ink)}",
      ".cp-fact h3{margin:22px 0 6px;color:var(--cp-accent-ink);font-size:.7rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase}",
      ".cp-fact .cp-fact-head{margin:0 0 12px;color:var(--cp-ink);font:500 1.55rem/1.2 'Playfair Display',serif}",
      ".cp-fact .cp-fact-body{margin:0;color:#5d5e59;font-size:.98rem;line-height:1.7}",
      ".cp-fact:last-child:nth-child(odd){grid-column:1/-1}.cp-fact .cp-fact-head:last-child{margin-bottom:0}",

      /* why work with (01/02/03) */
      ".cp-intro{background:var(--cp-ivory)}",
      ".cp-values{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}",
      ".cp-value{position:relative;isolation:isolate;min-height:280px;overflow:hidden;padding:34px 32px;border:1px solid color-mix(in srgb,var(--cp-accent) 28%,transparent);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.88),rgba(255,255,255,.5));box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 18px 48px rgba(36,15,14,.08);backdrop-filter:blur(18px);transition:transform .4s cubic-bezier(.2,.8,.2,1),border-color .35s ease,box-shadow .4s ease}",
      ".cp-value:before{content:'';position:absolute;z-index:-1;top:-70px;right:-60px;width:190px;height:190px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--cp-accent) 30%,transparent),transparent 70%);opacity:.85;transition:transform .55s ease,opacity .4s ease}",
      ".cp-value:after{content:'';position:absolute;inset:0;border-radius:inherit;padding:2px 2px 5px;background:linear-gradient(180deg,color-mix(in srgb,var(--cp-accent) 35%,transparent) 0%,color-mix(in srgb,var(--cp-accent) 70%,transparent) 55%,var(--cp-accent) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);opacity:0;transition:opacity .35s ease;pointer-events:none}",
      ".cp-value:hover{transform:translateY(-8px);border-color:transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 30px 60px rgba(36,15,14,.14),0 14px 28px -10px color-mix(in srgb,var(--cp-accent) 55%,transparent)}",
      ".cp-value:hover:before{opacity:1;transform:scale(1.25)}.cp-value:hover:after{opacity:1}",
      ".cp-value-num{color:var(--cp-accent-ink);font-family:'Playfair Display',serif;font-size:1.1rem}",
      ".cp-value h3{margin:70px 0 14px;font-family:'Playfair Display',serif;font-size:1.65rem;font-weight:600}",
      ".cp-value p{margin:0;color:#62635e;line-height:1.7}",

      /* guides */
      ".cp-guides{background:var(--cp-cream)}",
      ".cp-guide-list{display:grid;gap:20px}",
      ".cp-guide-book{display:grid;grid-template-columns:auto 1fr;gap:34px;align-items:center;max-width:820px;padding:30px;border:0;border-radius:26px;background:linear-gradient(150deg,#2b1210,#160b0a);color:#fff;font:inherit;text-align:left;cursor:pointer;box-shadow:0 22px 55px rgba(36,15,14,.18);transition:transform .3s ease,box-shadow .3s ease;position:relative;overflow:hidden}",
      ".cp-guide-book:before{content:'';position:absolute;top:-80px;right:-80px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--cp-accent) 40%,transparent),transparent 70%);pointer-events:none}",
      ".cp-guide-book:hover{transform:translateY(-6px);box-shadow:0 30px 70px rgba(36,15,14,.28)}",
      ".cp-book3d{position:relative;width:190px;aspect-ratio:850/1100;perspective:900px}",
      ".cp-book3d img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:3px 8px 8px 3px;box-shadow:inset 6px 0 10px rgba(0,0,0,.25),12px 16px 30px rgba(0,0,0,.45);transform:rotateY(-18deg);transform-origin:left center;transition:transform .5s ease}",
      ".cp-book3d:before{content:'';position:absolute;top:2%;bottom:2%;right:-8px;width:12px;background:repeating-linear-gradient(0deg,#f3efe6,#f3efe6 2px,#ddd6c8 2px,#ddd6c8 3px);border-radius:0 4px 4px 0;transform:rotateY(-18deg) translateZ(-4px)}",
      ".cp-guide-book:hover .cp-book3d img{transform:rotateY(-6deg)}",
      ".cp-guide-tag{position:relative;display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.1);color:var(--cp-accent-soft);font-size:.66rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}",
      ".cp-guide-book h3{position:relative;margin:14px 0 10px;color:#fff;font:500 2.1rem/1.05 'Playfair Display',serif}",
      ".cp-guide-book p{position:relative;margin:0 0 20px;color:rgba(255,255,255,.72);line-height:1.6}",
      ".cp-guide-open{position:relative;color:var(--cp-accent-soft);font-size:.72rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase}",

      /* flipbook viewer */
      ".cp-modal{position:fixed;inset:0;z-index:2147483000;display:none;place-items:center;padding:16px;background:rgba(10,6,5,.8);backdrop-filter:blur(6px)}",
      ".cp-modal.on{display:grid}",
      ".cp-modal-box{position:relative;width:min(1180px,100%);max-height:calc(100vh - 32px);overflow:auto;border-radius:20px;background:#140a09}",
      ".cp-modal-close{position:absolute;top:12px;right:12px;z-index:3;width:42px;height:42px;border:0;border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:1.4rem;line-height:1;cursor:pointer}",
      ".cp-modal-close:hover{background:var(--cp-accent);color:#17120c}",
      ".cp-flip-wrap{padding:54px 20px 18px;background:radial-gradient(circle at 50% 30%,#3a1d1a,#140a09)}",
      ".cp-flipbook{margin:0 auto}.cp-flipbook .cp-pg{background:#fff}.cp-flipbook .cp-pg img{display:block;width:100%;height:100%;object-fit:contain}",
      ".cp-flip-loading{padding:80px 0;color:rgba(255,255,255,.6);text-align:center;font-family:'DM Sans',sans-serif}",
      ".cp-flip-bar{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:16px;color:#fff;font:600 .8rem 'DM Sans',sans-serif}",
      ".cp-flip-bar button{width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:rgba(255,255,255,.08);color:#fff;font-size:1.1rem;cursor:pointer}",
      ".cp-flip-bar button:hover{background:var(--cp-accent);color:#17120c}",
      ".cp-flip-hint{margin:10px 0 0;color:rgba(255,255,255,.55);font:.75rem 'DM Sans',sans-serif;text-align:center}.cp-flip-hint a{color:var(--cp-accent-soft)!important}",

      /* reviews */
      ".cp-reviews{color:#fff;background:linear-gradient(135deg,#24100f,#150a09 62%,#202322)}",
      ".cp-reviews .cp-kicker{color:var(--cp-accent-soft)}.cp-reviews .cp-section-head p{color:rgba(255,255,255,.66)}",
      ".cp-review-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}",
      ".cp-review{display:flex;flex-direction:column;min-height:360px;padding:36px;border:1px solid rgba(255,255,255,.13);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.045));backdrop-filter:blur(18px);box-shadow:0 18px 55px rgba(0,0,0,.2)}",
      ".cp-review-more{display:none!important}.cp-reviews.cp-show-all .cp-review-more{display:flex!important}",
      ".cp-review-long .cp-quote{font-size:clamp(1.02rem,1.25vw,1.2rem);line-height:1.62}.cp-review-mid .cp-quote{font-size:clamp(1.15rem,1.6vw,1.5rem)}",
      ".cp-review{min-height:0!important}.cp-reviews.cp-show-all .cp-review:last-child:nth-child(odd){grid-column:1/-1}",
      ".cp-review-toggle-row{display:flex;justify-content:center;margin-top:28px}",
      ".cp-review-solo{grid-column:1/-1;align-items:center;text-align:center;padding:48px 36px}.cp-review-solo .cp-quote{font-size:clamp(1.4rem,2.4vw,2rem)}.cp-review-solo .cp-reviewer{margin-top:22px;text-align:left}",
      ".cp-team-reviews{margin-top:56px;padding-top:40px;border-top:1px solid rgba(255,255,255,.12)}.cp-team-reviews-head{display:flex;flex-direction:column;gap:10px;margin-bottom:22px;max-width:640px}.cp-team-reviews-head p{margin:0;color:rgba(255,255,255,.66);line-height:1.6}",
      ".cp-review-grid-3{grid-template-columns:repeat(3,1fr)}.cp-review-team{padding:28px}.cp-review-team .cp-quote{font-size:1.05rem!important;line-height:1.6}",
      ".cp-stars{color:var(--cp-accent-soft);font-size:1.1rem;letter-spacing:.18em}",
      ".cp-quote{margin:30px 0;font-family:'Playfair Display',serif;font-size:clamp(1.35rem,2vw,1.9rem);line-height:1.48}",
      ".cp-reviewer{display:flex;align-items:center;gap:14px;margin-top:auto}",
      ".cp-reviewer .cp-avatar{display:flex!important;width:50px;height:50px;flex:0 0 50px;align-items:center!important;justify-content:center!important;margin:0!important;border:2px solid var(--cp-accent-soft);border-radius:50%;background:#351513;color:var(--cp-accent-soft)!important;font-size:.8rem;font-weight:800;line-height:1;letter-spacing:.04em}",
      ".cp-reviewer strong{display:block}.cp-reviewer span:not(.cp-avatar){display:block;margin-top:4px;color:rgba(255,255,255,.62);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase}",

      /* Lofty listings header */
      ".cp-listing-head{order:6!important;padding:100px 0 32px;background:var(--cp-cream)}",
      ".cp-listing-row{display:flex;justify-content:space-between;gap:28px;align-items:end}",
      ".cp-text-link{display:inline-flex;min-height:48px;align-items:center;justify-content:center;padding:0 20px;border:1px solid rgba(36,15,14,.28);border-radius:999px;background:#240f0e;color:#f8f7f2!important;box-shadow:0 12px 28px rgba(36,15,14,.14);font-size:.72rem;font-weight:800;letter-spacing:.1em;text-decoration:none!important;text-transform:uppercase;transition:background .25s ease,color .25s ease,border-color .25s ease,transform .25s ease}",
      ".cp-text-link:hover{border-color:var(--cp-accent);background:var(--cp-accent);color:#17120c!important;transform:translateY(-2px)}",
      "html.cp-agent-home .md-house{order:7!important;margin:0!important;padding:0 0 100px!important;background:var(--cp-cream)!important}",
      "html.cp-agent-home .md-house>div:first-child,html.cp-agent-home .md-house h2{display:none!important}",

      /* contact */
      ".cp-contact{order:8!important;padding:105px 0;background:var(--cp-ink);color:#fff;scroll-margin-top:105px}",
      ".cp-contact .cp-kicker{color:var(--cp-accent-soft)}",
      ".cp-contact-card{display:grid;grid-template-columns:.78fr 1.22fr;overflow:hidden;border:1px solid rgba(255,255,255,.13);border-radius:26px;background:linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.025));box-shadow:0 30px 80px rgba(0,0,0,.25)}",
      ".cp-contact-person{position:relative;min-height:570px;overflow:hidden;background:#7d6e4e}",
      ".cp-contact-person>img{width:100%;height:100%;object-fit:cover}",
      ".cp-contact-person:after{content:'';position:absolute;inset:42% 0 0;background:linear-gradient(transparent,rgba(20,9,8,.92))}",
      ".cp-contact-badge{position:absolute;z-index:2;right:24px;bottom:24px;left:24px;padding:22px;border:1px solid rgba(255,255,255,.2);border-radius:18px;background:rgba(36,15,14,.68);backdrop-filter:blur(18px)}",
      ".cp-contact-badge strong{display:block;color:#fff;font:600 1.8rem/1.1 'Playfair Display',serif}",
      ".cp-contact-badge span{display:block;margin-top:8px;color:var(--cp-accent-soft);font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}",
      ".cp-contact-copy{display:flex;flex-direction:column;justify-content:center;padding:60px;background:linear-gradient(145deg,#321513,#240f0e)}",
      ".cp-contact-copy h2{margin:14px 0 20px;color:#fff;font-size:clamp(2.6rem,4vw,4.5rem);font-weight:500;line-height:1}",
      ".cp-contact-copy>p{max-width:650px;color:rgba(255,255,255,.72);line-height:1.75}",
      ".cp-contact-details{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0}",
      ".cp-contact-detail{display:flex;min-height:58px;align-items:center;padding:0 17px;border:1px solid rgba(255,255,255,.14);border-radius:13px;background:rgba(255,255,255,.06);color:#fff!important;text-decoration:none!important;overflow-wrap:anywhere;transition:transform .25s ease,border-color .25s ease,background .25s ease}",
      ".cp-contact-detail:hover{transform:translateY(-3px);border-color:var(--cp-accent);background:color-mix(in srgb,var(--cp-accent) 16%,transparent)}",
      ".cp-contact-actions{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:8px}",

      /* social icons + flipping contact-card headshot */
      ".cp-socials{display:flex;gap:12px}",
      /* social preview pop-up */
      ".cp-smodal{position:fixed;inset:0;z-index:2147483001;display:grid;place-items:center;padding:18px;background:rgba(10,6,5,.72);backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .25s ease}",
      ".cp-smodal.on{opacity:1;pointer-events:auto}",
      ".cp-scard{position:relative;display:grid;grid-template-columns:1fr auto;width:min(720px,100%);overflow:hidden;border-radius:26px;background:#fffdf9;color:#231a17;box-shadow:0 40px 100px rgba(0,0,0,.45);transform:translateY(18px) scale(.97);transition:transform .35s cubic-bezier(.2,.9,.3,1.2)}",
      ".cp-smodal.on .cp-scard{transform:none}",
      ".cp-sband{grid-column:1/-1;height:96px;background:var(--net-bg)}",
      ".cp-smain{padding:0 34px 34px}",
      ".cp-savatar{position:relative;width:104px;height:104px;margin-top:-52px;border:5px solid #fffdf9;border-radius:50%;background:var(--cp-accent);box-shadow:0 10px 24px rgba(0,0,0,.18)}",
      ".cp-savatar{overflow:visible}.cp-savatar .crop{display:block;width:100%;height:100%;overflow:hidden;border-radius:50%}.cp-savatar img{width:100%;height:100%;object-fit:cover;object-position:center 42%;transform:scale(1.5);transform-origin:50% 34%}",
      ".cp-savatar .badge{position:absolute;right:-4px;bottom:-2px;display:grid;width:36px;height:36px;place-items:center;border:3px solid #fffdf9;border-radius:50%;background:var(--net-bg);color:#fff}",
      ".cp-savatar .badge svg{width:17px;height:17px}",
      ".cp-scard h3{margin:18px 0 2px;font-family:Georgia,serif;font-size:1.65rem;font-weight:400;letter-spacing:-.02em}",
      ".cp-handle{color:#7a6c64;font:700 .82rem/1.4 Arial,sans-serif}",
      ".cp-scard p{max-width:380px;margin:16px 0 26px;color:#4d413b;font:400 .98rem/1.6 Arial,sans-serif}",
      ".cp-sactions{display:flex;flex-wrap:wrap;gap:10px}",
      ".cp-sfollow{display:inline-flex;align-items:center;gap:9px;min-height:50px;padding:0 24px;border-radius:999px;background:var(--net-bg);color:#fff!important;font:800 .74rem/1 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;text-decoration:none!important;box-shadow:0 12px 26px rgba(0,0,0,.18);transition:transform .2s ease}",
      ".cp-sfollow:hover{transform:translateY(-2px)}",
      ".cp-slater{min-height:50px;padding:0 20px;border:1px solid #e3dad1;border-radius:999px;background:transparent;color:#4d413b;font:700 .74rem/1 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}",
      ".cp-slater:hover{border-color:#b9aca1}",
      ".cp-sqr{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;margin:22px 30px 30px 0;padding:20px;border-radius:20px;background:#f4eee6;text-align:center}",
      ".cp-sqr .code{width:150px;height:150px;padding:8px;border-radius:12px;background:#fff}.cp-sqr .code svg,.cp-sqr .code img{display:block;width:100%;height:100%}",
      ".cp-sqr span{max-width:150px;color:#6d5f57;font:700 .66rem/1.45 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase}",
      ".cp-sclose{position:absolute;top:14px;right:14px;display:grid;width:38px;height:38px;place-items:center;border:0;border-radius:50%;background:rgba(0,0,0,.28);color:#fff;font-size:22px;line-height:1;cursor:pointer;backdrop-filter:blur(6px)}",
      ".cp-sclose:hover{background:rgba(0,0,0,.45)}",
      "@media(max-width:640px){.cp-scard{grid-template-columns:1fr}.cp-sqr{display:none}.cp-smain{padding:0 24px 28px}.cp-sfollow,.cp-slater{flex:1 1 100%;justify-content:center}}",
      ".cp-socials a{position:relative;display:grid;width:52px;height:52px;place-items:center;border:1px solid rgba(255,255,255,.16);border-radius:14px;background:rgba(255,255,255,.07);text-decoration:none!important;transition:transform .28s cubic-bezier(.2,.9,.3,1.4),border-color .25s ease,background .25s ease,box-shadow .25s ease}",
      ".cp-socials a svg{transition:transform .35s cubic-bezier(.2,.9,.3,1.4)}",
      ".cp-socials a:hover,.cp-socials a:focus-visible{transform:translateY(-5px);border-color:var(--glow,var(--cp-accent));background:rgba(255,255,255,.13);box-shadow:0 12px 26px rgba(0,0,0,.35),0 0 0 4px color-mix(in srgb,var(--glow,var(--cp-accent)) 22%,transparent)}",
      ".cp-socials a:hover svg{transform:scale(1.15) rotate(-6deg)}",
      ".cp-socials a.ig{--glow:#d62976}.cp-socials a.msg{--glow:#A033FF}.cp-socials a.li{--glow:#0A66C2}.cp-socials a.fb{--glow:#1877F2}.cp-socials a.tt{--glow:#25F4EE}.cp-socials a.th{--glow:#ffffff;color:#fff}.cp-socials a.st{--glow:#2fd17c;color:#fff}",
      ".cp-socials a[data-tip]:after{content:attr(data-tip);position:absolute;bottom:calc(100% + 10px);left:50%;padding:6px 10px;border-radius:8px;background:#f8f7f2;color:#240f0e;font:800 .68rem 'DM Sans',sans-serif;letter-spacing:.06em;white-space:nowrap;opacity:0;transform:translate(-50%,6px);pointer-events:none;transition:opacity .2s ease,transform .2s ease}",
      ".cp-socials a:hover:after,.cp-socials a:focus-visible:after{opacity:1;transform:translate(-50%,0)}",
      ".cp-socials a.vcard{perspective:500px;padding:0;border-radius:50%;line-height:0;--glow:var(--cp-accent)}",
      ".cp-flip{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.3,1.3,.4,1)}",
      ".cp-socials a.vcard:hover .cp-flip,.cp-socials a.vcard:focus-visible .cp-flip{transform:rotateY(180deg)}",
      ".cp-flip>span{position:absolute;inset:0;display:grid;place-items:center;border-radius:50%;backface-visibility:hidden;-webkit-backface-visibility:hidden}",
      ".cp-flip .front{animation:cpPulse 2.6s ease-in-out infinite}",
      ".cp-flip .front img{box-sizing:border-box;display:block;width:100%;height:100%;border:2px solid var(--cp-accent-soft);border-radius:50%;object-fit:cover;object-position:center 22%}",
      ".cp-flip .front:after{content:'+';position:absolute;right:-3px;bottom:-3px;display:grid;width:17px;height:17px;place-items:center;border:2px solid #2b1210;border-radius:50%;background:var(--cp-accent);color:#17120c;font:800 12px/1 'DM Sans',sans-serif}",
      ".cp-flip .back{background:var(--cp-accent);color:#17120c;transform:rotateY(180deg)}",
      "@keyframes cpPulse{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--cp-accent) 55%,transparent)}50%{box-shadow:0 0 0 7px transparent}}",

      /* Lofty chat bubble uses the agent's photo */
      "html.cp-agent-home #chat-app .launcher>.pointer.avatar.profile-frame{display:block!important;width:64px!important;height:64px!important;overflow:hidden;border:2px solid var(--cp-accent-soft)!important;border-radius:50%!important;background:#240f0e!important;box-shadow:0 10px 28px rgba(36,15,14,.34)!important}",
      "html.cp-agent-home #chat-app .launcher>.pointer.avatar.profile-frame>img{content:url('" + HEADSHOT + "')!important;display:block!important;width:60px!important;height:60px!important;border-radius:50%!important;object-fit:cover!important;object-position:center 30%!important;opacity:1!important}",
      "html.cp-agent-home #chat-app .chat-window{border:1px solid color-mix(in srgb,var(--cp-accent) 40%,transparent)!important;background:#f8f7f2!important;box-shadow:0 22px 55px rgba(36,15,14,.28)!important}",
      "html.cp-agent-home #chat-app .chat-head{background:linear-gradient(135deg,#351513,#240f0e)!important}",
      "html.cp-agent-home #chat-app .chat-head .avatar.profile-frame{width:32px!important;height:32px!important;overflow:hidden!important;border-radius:50%!important}",
      "html.cp-agent-home #chat-app .chat-head .avatar.profile-frame>img{content:url('" + HEADSHOT + "')!important;display:block!important;width:30px!important;height:30px!important;border-radius:50%!important;object-fit:cover!important;object-position:center 30%!important}",
      "html.cp-agent-home #chat-app .head-text{color:#f8f7f2!important;font-weight:700!important}",
      "html.cp-agent-home #chat-app .chat-window-loading-w{background:#f8f7f2!important}html.cp-agent-home #chat-app .chat-window-text{color:#241f1d!important;font-weight:600!important}",

      /* responsive */
      ".cp-no-photo{display:grid;place-items:center;background:linear-gradient(160deg,color-mix(in srgb,var(--cp-accent) 55%,#2b1210),#1a0c0b)!important}.cp-no-photo>img{display:none!important}.cp-no-photo:before{content:attr(data-initials);color:rgba(255,255,255,.55);font:500 clamp(4rem,9vw,7rem)/1 'Playfair Display',serif;letter-spacing:.02em}",
      /* Lofty paints sections that sit directly inside its main container white; win that fight */
      "html.cp-agent-home main section.cp-home.cp-listing-head{background:var(--cp-cream)!important}",
      "html.cp-agent-home main section.cp-home.cp-contact{background:var(--cp-ink)!important}",
      "@media(min-width:561px){.cp-hero .cp-actions{gap:10px;flex-wrap:nowrap}.cp-hero .cp-actions .cp-button{padding:0 17px;white-space:nowrap}}",
      "@media(min-width:561px) and (max-width:1100px){.cp-hero .cp-actions{flex-wrap:wrap}}",
      "@media(max-width:900px){.cp-hero-grid,.cp-section-head,.cp-contact-card{grid-template-columns:1fr}.cp-portrait-wrap{min-height:620px}.cp-section-head{gap:25px}.cp-values,.cp-review-grid,.cp-review-grid-3,.cp-know-grid{grid-template-columns:1fr}.cp-value{min-height:auto}.cp-value h3{margin-top:32px}.cp-listing-row{align-items:flex-start;flex-direction:column}.cp-contact-person{min-height:620px}}",
      "@media(max-width:700px){.cp-guide-book{grid-template-columns:1fr;justify-items:center;text-align:center}.cp-book3d{width:160px}}",
      "@media(max-width:560px){.cp-shell{width:min(100% - 26px,1180px)}.cp-hero{min-height:0;padding:120px 0 60px}.cp-hero .cp-hero-title{font-size:3.65rem}.cp-hero .cp-hero-title span{margin-left:.35em}.cp-hero .cp-actions{display:grid;grid-template-columns:1fr}.cp-hero .cp-actions .cp-button{width:100%}.cp-portrait-wrap{min-height:490px}.cp-portrait{left:0;border-radius:120px 120px 18px 18px}.cp-signature{left:14px;right:14px;bottom:16px;min-width:0;max-width:none}.cp-signature span{letter-spacing:.09em}.cp-section{padding:76px 0}.cp-fact{padding:26px 22px}.cp-review{padding:26px}.cp-contact-person{min-height:470px}.cp-contact-copy{padding:34px 24px}.cp-contact-details{grid-template-columns:1fr}.cp-contact-actions>.cp-button{width:100%}}",
      "@media(prefers-reduced-motion:reduce){.cp-value,.cp-value:before,.cp-value:after,.cp-fact,.cp-text-link,.cp-socials a,.cp-socials a svg,.cp-flip,.cp-contact-detail,.cp-chip,.cp-book3d img{transition:none!important}.cp-flip .front{animation:none!important}}"
    ].join("\n");
  }

  /* ------------------------------------------------------------------ */
  /* Markup                                                              */
  /* ------------------------------------------------------------------ */
  function heroHTML() {
    var g = A.guides && A.guides[0];
    var chips = (A.parishes || []).length
      ? '<p class="cp-chips-label">' + ICON.pin + 'Parishes served</p><div class="cp-chips">' + A.parishes.map(function (p) { return '<span class="cp-chip">' + esc(p) + "</span>"; }).join("") + "</div>"
      : "";
    return '<section class="cp-hero"><div class="cp-shell cp-hero-grid"><div>' +
      '<div class="cp-eyebrow">' + ([A.title, A.region].filter(Boolean).map(esc).join(" &middot; ") || "Lakeshore Team") + "</div>" +
      '<h1 class="cp-serif cp-hero-title">' + A.headline[0] + " <span>" + A.headline[1] + "</span></h1>" +
      (A.heroCopy ? '<p class="cp-hero-copy">' + A.heroCopy + "</p>" : '<div style="height:26px"></div>') + chips +
      '<div class="cp-actions"><a class="cp-button cp-start-move" href="#' + CONNECT_ID + '">Start your move</a>' +
      '<a class="cp-button cp-secondary" href="/listing">Search homes</a>' +
      (g ? '<button class="cp-button cp-secondary cp-guide-btn" type="button" data-cp-guide="0">' + ICON.book + esc(g.heroButton || g.title) + "</button>" : "") +
      "</div></div>" +
      '<div class="cp-portrait-wrap"><div class="cp-portrait" data-initials="' + initials(A.name) + '"><img onerror="this.parentNode.classList.add(\'cp-no-photo\')" src="' + HEADSHOT + '" alt="' + esc(A.name) + (A.title ? ", " + esc(A.title) : "") + ' with Lakeshore Team" style="object-position:' + (A.headshotPosition || "center 34%") + '"></div>' +
      '<div class="cp-signature"><strong>' + esc(A.name) + "</strong><span>Lakeshore Team &middot; eXp Realty</span></div></div>" +
      "</div></section>";
  }

  function knowHTML() {
    var k = A.know;
    if (!k) return "";
    var cards = [["home", "Hometown", k.hometown], ["tree", "Favorite local spot", k.spot], ["key", "What got me into real estate", k.why], ["heart", "Fun fact", k.fun]]
      .filter(function (c) { return c[2]; })
      .map(function (c) {
        return '<article class="cp-fact"><div class="cp-fact-icon">' + ICON[c[0]] + "</div><h3>" + c[1] + '</h3><p class="cp-fact-head">' + c[2][0] + '</p>' + (c[2][1] ? '<p class="cp-fact-body">' + c[2][1] + "</p>" : "") + "</article>";
      }).join("");
    if (!cards) return "";
    return '<section class="cp-section cp-know"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Get to know ' + esc(A.first) + '</span><h2 class="cp-serif">A little more about me.</h2></div><p>' + (k.intro || "") + '</p></div><div class="cp-know-grid">' + cards + "</div></div></section>";
  }

  function whyHTML() {
    var w = A.why;
    if (!w) return "";
    return '<section class="cp-section cp-intro"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Why work with ' + esc(A.first) + '</span><h2 class="cp-serif">' + w.heading + "</h2></div><p>" + w.intro + '</p></div><div class="cp-values">' +
      w.values.map(function (v, i) { return '<article class="cp-value"><span class="cp-value-num">' + pad(i + 1) + "</span><h3>" + v[0] + "</h3><p>" + v[1] + "</p></article>"; }).join("") +
      "</div></div></section>";
  }

  function guidesHTML() {
    if (!A.guides || !A.guides.length) return "";
    return '<section class="cp-section cp-guides" id="' + A.key + '-guides"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Free guides</span><h2 class="cp-serif">Everything you need to plan your move.</h2></div><p>Guides ' + esc(A.first) + " created to help you get started. Tap a guide to flip through it.</p></div>" +
      '<div class="cp-guide-list">' + A.guides.map(function (g, i) {
        return '<button class="cp-guide-book" type="button" data-cp-guide="' + i + '"><div class="cp-book3d"><img src="' + ASSETS + g.folder + "01.webp" + '" alt="' + esc(g.title) + ' cover" loading="lazy"></div><div><span class="cp-guide-tag">' + esc(g.tag) + " &middot; " + g.pages + ' pages</span><h3>' + esc(g.title) + "</h3><p>" + esc(g.blurb) + '</p><span class="cp-guide-open">Open the book &rarr;</span></div></button>';
      }).join("") + "</div></div></section>";
  }

  function reviewCard(r, cls) {
    var len = r[0].replace(/&[a-z#0-9]+;/gi, "x").length;
    return '<article class="cp-review' + cls + (len > 420 ? " cp-review-long" : len > 220 ? " cp-review-mid" : "") + '"><div class="cp-stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="cp-quote">&ldquo;' + r[0] + '&rdquo;</p><div class="cp-reviewer"><span class="cp-avatar">' + initials(r[1]) + "</span><div><strong>" + esc(r[1]) + "</strong><span>" + esc(r[2]) + "</span></div></div></article>";
  }
  function teamReviewsHTML() {
    var t = A.teamReviews, mate = t && AGENTS[t.from];
    if (!mate || !mate.reviews) return "";
    var picks = mate.reviews.filter(function (r) { return t.names.indexOf(r[1]) > -1; });
    if (!picks.length) return "";
    return '<div class="cp-team-reviews"><div class="cp-team-reviews-head"><span class="cp-kicker">From the team</span><p>' + t.note + '</p></div><div class="cp-review-grid cp-review-grid-3">' +
      picks.map(function (r) { return reviewCard([r[0], r[1], "Worked with " + mate.name], " cp-review-team"); }).join("") + "</div></div>";
  }
  function reviewsHTML() {
    if (!A.reviews || !A.reviews.length) return "";
    return '<section class="cp-section cp-reviews"><div class="cp-shell"><div class="cp-section-head"><div><span class="cp-kicker">Verified client reviews</span><h2 class="cp-serif">Kind words from real moves.</h2></div><p>Recommendations from clients who trusted ' + esc(A.first) + ' to guide them home.</p></div><div class="cp-review-grid">' +
      A.reviews.map(function (r, i) {
        return reviewCard(r, (i >= 4 ? " cp-review-more" : "") + (A.reviews.length === 1 ? " cp-review-solo" : ""));
      }).join("") + "</div>" + teamReviewsHTML() +
      (A.reviews.length > 4 ? '<div class="cp-review-toggle-row"><button type="button" class="cp-button cp-secondary cp-review-toggle" aria-expanded="false">Show all ' + A.reviews.length + " reviews</button></div>" : "") +
      "</div></section>";
  }

  function socialsHTML() {
    var s = A.socials || {}, out = "";
    if (s.instagram) out += '<a class="ig" data-cp-social="instagram" data-tip="Instagram" href="' + s.instagram + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(A.first) + ' on Instagram">' + ICON.instagram + "</a>";
    if (s.contactCard) out += '<a class="vcard" data-tip="Save my contact" href="' + s.contactCard + '" target="_blank" rel="noopener noreferrer" aria-label="Save ' + esc(A.first) + '&rsquo;s contact card"><span class="cp-flip"><span class="front"><img onerror="this.style.visibility=\'hidden\'" src="' + HEADSHOT + '" alt=""></span><span class="back">' + ICON.card + "</span></span></a>";
    if (s.messenger) out += '<a class="msg" data-tip="Message me" href="' + s.messenger + '" target="_blank" rel="noopener noreferrer" aria-label="Message ' + esc(A.first) + ' on Facebook Messenger">' + ICON.messenger + "</a>";
    if (s.facebook) out += '<a class="fb" data-cp-social="facebook" data-tip="Facebook" href="' + s.facebook + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(A.first) + ' on Facebook">' + ICON.facebook + "</a>";
    if (s.linkedin) out += '<a class="li" data-cp-social="linkedin" data-tip="LinkedIn" href="' + s.linkedin + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(A.first) + ' on LinkedIn">' + ICON.linkedin + "</a>";
    if (s.threads) out += '<a class="th" data-cp-social="threads" data-tip="Threads" href="' + s.threads + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(A.first) + ' on Threads">' + ICON.threads + "</a>";
    if (s.store) out += '<a class="st" data-tip="My Stan Store" href="' + s.store + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(A.first) + '&rsquo;s Stan Store">' + ICON.store + "</a>";
    if (s.tiktok) out += '<a class="tt" data-cp-social="tiktok" data-tip="TikTok" href="' + s.tiktok + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(A.first) + ' on TikTok">' + ICON.tiktok + "</a>";
    return out ? '<div class="cp-socials">' + out + "</div>" : "";
  }

  function contactHTML() {
    var details = "";
    if (A.phone) details += '<a class="cp-contact-detail" href="tel:' + A.phone + '">Call or text &middot; ' + esc(A.phoneLabel) + "</a>";
    if (A.email) details += '<a class="cp-contact-detail" href="mailto:' + A.email + '">' + esc(A.email) + "</a>";
    return '<div class="cp-shell cp-contact-card"><div class="cp-contact-person" data-initials="' + initials(A.name) + '"><img onerror="this.parentNode.classList.add(\'cp-no-photo\')" src="' + HEADSHOT + '" alt="' + esc(A.name) + '" style="object-position:' + (A.headshotPosition || "center 38%") + '"><div class="cp-contact-badge"><strong>' + esc(A.name) + "</strong><span>" + (A.title ? esc(A.title) + " &middot; " : "") + "Lakeshore Team</span></div></div>" +
      '<div class="cp-contact-copy"><span class="cp-kicker">Connect with ' + esc(A.first) + '</span><h2 class="cp-serif">Start your next move with confidence.</h2><p>Have a question about buying or selling? Reach ' + esc(A.first) + " directly or start a private conversation through the Lakeshore Team form.</p>" +
      (details ? '<div class="cp-contact-details">' + details + "</div>" : "") +
      '<div class="cp-contact-actions"><a class="cp-button" href="/contact?agent=' + A.key + '#start-conversation">Start the conversation &rarr;</a>' + socialsHTML() + "</div></div></div>";
  }

  /* ------------------------------------------------------------------ */
  /* Flipbook                                                            */
  /* ------------------------------------------------------------------ */
  var modal, flipState = {};
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (window.St && window.St.PageFlip) return resolve();
      var s = document.createElement("script"); s.src = src; s.async = true; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  function buildModal() {
    modal = document.createElement("div");
    modal.className = "cp-home cp-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = '<div class="cp-modal-box"><button class="cp-modal-close" type="button" aria-label="Close">&times;</button><div class="cp-flip-wrap"><div class="cp-flip-stage"></div><div class="cp-flip-bar"><button type="button" class="cp-prev" aria-label="Previous page">&#8592;</button><span class="cp-count">Cover</span><button type="button" class="cp-next" aria-label="Next page">&#8594;</button></div><p class="cp-flip-hint">Tap or drag a page corner to turn it<span class="cp-latest"></span></p></div></div>';
    document.body.appendChild(modal);
    modal.querySelector(".cp-modal-close").addEventListener("click", closeGuide);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeGuide(); });
    document.addEventListener("keydown", function (e) {
      if (!modal.classList.contains("on")) return;
      if (e.key === "Escape") closeGuide();
      if (flipState.book && e.key === "ArrowRight") flipState.book.flipNext();
      if (flipState.book && e.key === "ArrowLeft") flipState.book.flipPrev();
    });
    modal.querySelector(".cp-prev").addEventListener("click", function () { if (flipState.book) flipState.book.flipPrev(); });
    modal.querySelector(".cp-next").addEventListener("click", function () { if (flipState.book) flipState.book.flipNext(); });
  }
  function closeGuide() { modal.classList.remove("on"); document.documentElement.style.overflow = ""; }
  function openGuide(i) {
    var g = A.guides[i];
    if (!modal) buildModal();
    modal.setAttribute("aria-label", g.title);
    modal.classList.add("on");
    document.documentElement.style.overflow = "hidden";
    modal.querySelector(".cp-latest").innerHTML = g.latest ? ' &middot; <a href="' + g.latest + '" target="_blank" rel="noopener noreferrer">View the latest version</a>' : "";
    if (flipState.index === i && flipState.book) return;
    var stage = modal.querySelector(".cp-flip-stage");
    if (flipState.book) { try { flipState.book.destroy(); } catch (e) {} flipState.book = null; }
    stage.innerHTML = '<div class="cp-flip-loading">Opening the guide&hellip;</div>';
    loadScript(PAGEFLIP_SRC).then(function () {
      stage.innerHTML = '<div class="cp-flipbook"></div>';
      var el = stage.firstChild, html = "";
      for (var p = 1; p <= g.pages; p++) {
        html += '<div class="cp-pg"' + (p === 1 || p === g.pages ? ' data-density="hard"' : "") + '><img src="' + ASSETS + g.folder + pad(p) + '.webp" alt="' + esc(g.title) + " page " + p + '"' + (p > 4 ? ' loading="lazy"' : "") + "></div>";
      }
      el.innerHTML = html;
      var narrow = window.innerWidth < 760;
      var W = Math.max(240, Math.min(460, Math.floor((window.innerWidth - 80) / (narrow ? 1 : 2))));
      var H = Math.round(W * 1100 / 850);
      var maxH = window.innerHeight - 200;
      if (H > maxH && maxH > 300) { H = maxH; W = Math.round(H * 850 / 1100); }
      var book = new window.St.PageFlip(el, { width: W, height: H, size: "fixed", showCover: true, usePortrait: narrow, maxShadowOpacity: 0.5, mobileScrollSupport: false, flippingTime: 800 });
      book.loadFromHTML(el.querySelectorAll(".cp-pg"));
      var count = modal.querySelector(".cp-count");
      book.on("flip", function () {
        var p = book.getCurrentPageIndex();
        var two = book.getOrientation() === "landscape" && p > 0 && p < g.pages - 1;
        count.textContent = p === 0 ? "Cover" : (two ? "Pages " + (p + 1) + "–" + (p + 2) : "Page " + (p + 1)) + " of " + g.pages;
      });
      count.textContent = "Cover";
      flipState = { book: book, index: i };
    }).catch(function () {
      stage.innerHTML = '<div class="cp-flip-loading">The guide couldn&rsquo;t load. ' + (g.latest ? '<a href="' + g.latest + '" target="_blank" rel="noopener noreferrer" style="color:var(--cp-accent-soft)">Open it here</a>.' : "") + "</div>";
    });
  }

  /* ------------------------------------------------------------------ */
  /* Build                                                               */
  /* ------------------------------------------------------------------ */
  /* Speed: show the agent's sections as soon as Lofty's page shell exists, instead of
     keeping the whole page hidden until Lofty's listings finish loading. The listings
     header slots in later, whenever Lofty's listings arrive. */
  function waitForPage(attempt) {
    if (gateTimedOut) return;
    var main = document.querySelector("main#app, .page-content");
    if (!main && attempt < 80) {
      window.setTimeout(function () { waitForPage(attempt + 1); }, 100);
      return;
    }
    if (!main) return;
    build(main);
    waitForListings(main, 0);
  }

  function waitForListings(main, attempt) {
    var listings = document.querySelector(".md-house");
    if (!listings) {
      if (attempt < 150) window.setTimeout(function () { waitForListings(main, attempt + 1); }, 200);
      return;
    }
    var listingHead = document.createElement("section");
    listingHead.className = "cp-home cp-listing-head";
    listingHead.innerHTML = '<div class="cp-shell cp-listing-row"><div><span class="cp-kicker">Featured homes</span><h2 class="cp-serif">Find your next address.</h2></div><a class="cp-text-link" href="/listing">Search all homes &rarr;</a></div>';
    listings.parentNode.insertBefore(listingHead, listings);
    var contact = document.getElementById(CONNECT_ID);
    if (contact) listings.parentNode.insertBefore(contact, listings.nextSibling);
  }

  function build(main) {
    root.classList.add("cp-agent-home");
    document.querySelectorAll("a, span, button").forEach(function (node) {
      if (node.children.length) return;
      node.textContent = node.textContent.replace(/â†’|Â†’/g, String.fromCharCode(8594)).replace(/Â·/g, String.fromCharCode(183));
    });

    var font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap";
    document.head.appendChild(font);

    var style = document.createElement("style");
    style.id = "cp-agent-home-style";
    style.textContent = css();
    document.head.appendChild(style);

    var home = document.createElement("div");
    home.className = "cp-home";
    home.innerHTML = heroHTML() + knowHTML() + whyHTML() + guidesHTML() + reviewsHTML();
    main.insertBefore(home, main.firstChild);

    var contact = document.createElement("section");
    contact.className = "cp-home cp-contact";
    contact.id = CONNECT_ID;
    contact.innerHTML = contactHTML();
    main.appendChild(contact); /* moved right after the listings once they load */

    document.addEventListener("click", function (e) {
      var tog = e.target.closest && e.target.closest(".cp-review-toggle");
      if (tog) {
        var sec = tog.closest(".cp-reviews"), open = !sec.classList.contains("cp-show-all");
        sec.classList.toggle("cp-show-all", open);
        tog.setAttribute("aria-expanded", open ? "true" : "false");
        tog.textContent = open ? "Show fewer reviews" : "Show all " + A.reviews.length + " reviews";
        if (!open) sec.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      var soc = e.target.closest && e.target.closest("[data-cp-social]");
      if (soc) {
        e.preventDefault();
        openSocial(soc.getAttribute("data-cp-social"), soc.getAttribute("href"));
        return;
      }
      var t = e.target.closest && e.target.closest("[data-cp-guide]");
      if (!t) return;
      e.preventDefault();
      openGuide(+t.getAttribute("data-cp-guide"));
    });

    var NETS = {
      instagram: { label: "Instagram", bg: "linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 55%,#962fbf 80%,#4f5bd5 100%)", verb: "Follow", copy: "Follow along for new listings, open houses, and a look at life around " },
      facebook: { label: "Facebook", bg: "linear-gradient(135deg,#1877F2,#0b5bd3)", verb: "Follow", copy: "Connect on Facebook for listings, market updates, and community news from " },
      linkedin: { label: "LinkedIn", bg: "linear-gradient(135deg,#0A66C2,#004182)", verb: "Connect", copy: "Connect on LinkedIn for market insight and professional updates from " },
      threads: { label: "Threads", bg: "linear-gradient(135deg,#1c1c1c,#000)", verb: "Follow", copy: "Join the conversation on Threads for real estate talk and everyday updates from " },
      tiktok: { label: "TikTok", bg: "linear-gradient(135deg,#111 0%,#25F4EE 140%)", verb: "Follow", copy: "Watch home tours and real estate tips from " }
    };
    function handleFor(net, url) {
      try {
        var u = new URL(url), parts = u.pathname.split("/").filter(Boolean);
        if (net === "linkedin") return parts[1] ? "in/" + parts[1] : A.name;
        if (!parts.length || /profile\.php/.test(u.pathname)) return A.name;
        return "@" + parts[parts.length - 1].replace(/^@/, "");
      } catch (err) { return A.name; }
    }
    var qrLib = null;
    function drawQR(box, url) {
      function render() {
        try { var q = window.qrcode(0, "M"); q.addData(url); q.make(); box.innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true }); }
        catch (err) { box.parentNode.style.display = "none"; }
      }
      if (window.qrcode) return render();
      if (!qrLib) {
        qrLib = document.createElement("script");
        qrLib.src = "https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js";
        document.head.appendChild(qrLib);
      }
      qrLib.addEventListener("load", render);
      qrLib.addEventListener("error", function () { box.parentNode.style.display = "none"; });
    }
    var smodal = null, lastFocus = null;
    function closeSocial() {
      if (!smodal) return;
      smodal.classList.remove("on");
      document.documentElement.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    function openSocial(net, url) {
      var n = NETS[net];
      if (!n) return window.open(url, "_blank", "noopener");
      lastFocus = document.activeElement;
      if (!smodal) {
        smodal = document.createElement("div");
        smodal.className = "cp-smodal";
        smodal.setAttribute("role", "dialog");
        smodal.setAttribute("aria-modal", "true");
        smodal.addEventListener("click", function (e) { if (e.target === smodal || (e.target.closest && e.target.closest(".cp-sclose,.cp-slater"))) closeSocial(); });
        document.addEventListener("keydown", function (e) { if (e.key === "Escape" && smodal.classList.contains("on")) closeSocial(); });
        document.body.appendChild(smodal);
      }
      smodal.setAttribute("aria-label", A.name + " on " + n.label);
      smodal.innerHTML = '<div class="cp-scard" style="--net-bg:' + n.bg + '"><div class="cp-sband"></div>' +
        '<div class="cp-smain"><div class="cp-savatar"><span class="crop"><img src="' + HEADSHOT + '"' + (A.avatarCrop ? ' style="object-position:' + A.avatarCrop[0] + ' !important;transform:scale(' + A.avatarCrop[1] + ') !important;transform-origin:' + A.avatarCrop[2] + ' !important"' : "") + ' alt="" onerror="this.style.visibility=\'hidden\'"></span><span class="badge">' + ICON[net] + "</span></div>" +
        "<h3>" + esc(A.name) + '</h3><div class="cp-handle">' + esc(handleFor(net, url)) + " &middot; " + n.label + "</div>" +
        "<p>" + (A.socialBios && A.socialBios[net] ? A.socialBios[net] : n.copy + esc(A.region || "South Louisiana") + ".") + "</p>" +
        '<div class="cp-sactions"><a class="cp-sfollow" href="' + url + '" target="_blank" rel="noopener noreferrer">' + n.verb + " on " + n.label + ' <span aria-hidden="true">&#8599;</span></a><button type="button" class="cp-slater">Stay on site</button></div></div>' +
        '<div class="cp-sqr"><div class="code"></div><span>Scan to ' + n.verb.toLowerCase() + " from your phone</span></div>" +
        '<button type="button" class="cp-sclose" aria-label="Close">&times;</button></div>';
      if (window.matchMedia("(min-width:641px)").matches) drawQR(smodal.querySelector(".cp-sqr .code"), url);
      smodal.classList.add("on");
      document.documentElement.style.overflow = "hidden";
      setTimeout(function () { var b = smodal.querySelector(".cp-sfollow"); if (b) b.focus(); }, 60);
    }

    function goToConnect(event) {
      event.preventDefault();
      var target = document.getElementById(CONNECT_ID);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function bindStartButtons() {
      document.querySelectorAll(".cp-start-move, #lst-premium-nav .lst-cta").forEach(function (link) {
        link.setAttribute("href", "#" + CONNECT_ID);
        if (link.matches("#lst-premium-nav .lst-cta")) link.textContent = "Start Your Move " + String.fromCharCode(8594);
        if (link.dataset.cpBound) return;
        link.dataset.cpBound = "true";
        link.addEventListener("click", goToConnect);
      });
    }
    bindStartButtons();
    var bindAttempts = 0;
    var bindTimer = window.setInterval(function () {
      bindStartButtons();
      bindAttempts += 1;
      if (document.querySelector("#lst-premium-nav .lst-cta") || bindAttempts > 40) window.clearInterval(bindTimer);
    }, 250);

    function personalizeChat() {
      document.querySelectorAll("#chat-app .launcher > .pointer.avatar img").forEach(function (image) {
        if (image.src !== HEADSHOT) image.src = HEADSHOT;
        image.alt = A.name;
      });
    }
    personalizeChat();
    new MutationObserver(personalizeChat).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["src"] });

    /* Long headline words (e.g. "confidence.") shrink to fit their column instead of crowding the photo. */
    function fitHeadline() {
      var t = document.querySelector(".cp-hero-title");
      if (!t) return;
      t.style.fontSize = "";
      var box = t.parentNode.clientWidth;
      var widest = 0;
      [t].concat([].slice.call(t.querySelectorAll("span"))).forEach(function (n) {
        var r = document.createRange(); r.selectNodeContents(n);
        var w = r.getBoundingClientRect().width + (n === t ? 0 : parseFloat(getComputedStyle(n).marginLeft) || 0);
        if (w > widest) widest = w;
      });
      if (widest > box && box > 0) {
        var size = parseFloat(getComputedStyle(t).fontSize) * (box / widest) * 0.98;
        t.style.fontSize = Math.max(40, size) + "px";
      }
    }
    fitHeadline();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitHeadline);
    var fitTimer;
    window.addEventListener("resize", function () { clearTimeout(fitTimer); fitTimer = setTimeout(fitHeadline, 120); });

    window.clearTimeout(gateSafetyTimer);
    window.requestAnimationFrame(function () { window.requestAnimationFrame(function () { releaseGate(true); }); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { waitForPage(0); });
  else waitForPage(0);
})();
