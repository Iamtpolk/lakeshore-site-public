(function () {
  "use strict";

  if (window.__lakeshoreSearchBarLoaded) return;
  window.__lakeshoreSearchBarLoaded = true;

  var STYLE_ID = "lakeshore-searchbar-styles";
  var ENHANCED_CLASS = "lakeshore-searchbar";

  var css = `
    body .md-listing-search.${ENHANCED_CLASS} {
      position: relative;
      z-index: 20;
      width: 100% !important;
      padding: 22px clamp(18px, 4vw, 64px) 24px !important;
      background: linear-gradient(180deg, #f7f3eb 0%, #f1ecdf 100%) !important;
      border-top: 1px solid rgba(177, 154, 85, .24) !important;
      border-bottom: 1px solid rgba(45, 67, 54, .15) !important;
      box-shadow: 0 14px 34px rgba(35, 42, 36, .08);
    }

    body .md-listing-search.${ENHANCED_CLASS} > .search-content {
      max-width: 1240px;
      margin: 0 auto;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-by-section {
      display: flex;
      align-items: stretch;
      gap: 10px;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword-container {
      flex: 1 1 420px;
      min-width: 260px;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-category,
    body .md-listing-search.${ENHANCED_CLASS} .keyword {
      height: 100%;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line {
      position: relative;
      min-height: 54px;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line::before {
      content: "";
      position: absolute;
      left: 19px;
      top: 50%;
      z-index: 2;
      width: 17px;
      height: 17px;
      transform: translateY(-50%);
      pointer-events: none;
      background: center / contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232d4336' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='m20 20-4-4'/%3E%3C/svg%3E");
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-input.sug {
      width: 100% !important;
      height: 54px !important;
      padding: 0 56px 0 50px !important;
      color: #252b27 !important;
      background: #fff !important;
      border: 1px solid rgba(45, 67, 54, .25) !important;
      border-radius: 14px !important;
      box-shadow: 0 5px 18px rgba(35, 42, 36, .06) !important;
      font-size: 15px !important;
      transition: border-color .2s ease, box-shadow .2s ease;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-input.sug:focus {
      outline: none !important;
      border-color: #b19a55 !important;
      box-shadow: 0 0 0 3px rgba(177, 154, 85, .17), 0 7px 22px rgba(35, 42, 36, .08) !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line > .keyword-submit {
      right: 8px !important;
      width: 38px !important;
      height: 38px !important;
      top: 8px !important;
      border-radius: 10px !important;
      color: #fff !important;
      background: #2d4336 !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-category > .keyword-submit,
    body .md-listing-search.${ENHANCED_CLASS} .save-search {
      min-height: 54px !important;
      padding: 0 25px !important;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      gap: 9px;
      color: #fff !important;
      background: #2d4336 !important;
      border: 1px solid #2d4336 !important;
      border-radius: 14px !important;
      box-shadow: 0 7px 18px rgba(45, 67, 54, .16);
      font-size: 12px !important;
      font-weight: 700 !important;
      letter-spacing: .12em;
      transition: transform .2s ease, background .2s ease;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-category > .keyword-submit:hover,
    body .md-listing-search.${ENHANCED_CLASS} .save-search:hover {
      background: #3a5545 !important;
      transform: translateY(-1px);
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-more {
      flex: 0 1 auto;
      display: flex;
      gap: 8px;
      overflow: visible !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item {
      min-height: 54px !important;
      background: rgba(255, 255, 255, .72) !important;
      border: 1px solid rgba(45, 67, 54, .18) !important;
      border-radius: 14px !important;
      color: #2d332f !important;
      transition: background .2s ease, border-color .2s ease, transform .2s ease;
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item:hover {
      background: #fff !important;
      border-color: rgba(177, 154, 85, .72) !important;
      transform: translateY(-1px);
    }

    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .place,
    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .select-text,
    body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .box-div {
      min-height: 52px !important;
      padding: 0 15px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 10px;
      font-size: 13px !important;
      font-weight: 600 !important;
      white-space: nowrap;
    }

    body .md-listing-search.${ENHANCED_CLASS} .dropdown_container,
    body .md-listing-search.${ENHANCED_CLASS} .select-dropdown,
    body .md-listing-search.${ENHANCED_CLASS} .suggestion-list {
      margin-top: 9px !important;
      overflow: hidden;
      background: #fff !important;
      border: 1px solid rgba(45, 67, 54, .16) !important;
      border-radius: 14px !important;
      box-shadow: 0 18px 45px rgba(35, 42, 36, .18) !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .dd-item:hover,
    body .md-listing-search.${ENHANCED_CLASS} .dd-item.selected {
      color: #2d4336 !important;
      background: #f3efe4 !important;
    }

    body .md-listing-search.${ENHANCED_CLASS} .more-list {
      border-radius: 18px !important;
      box-shadow: 0 22px 55px rgba(35, 42, 36, .2) !important;
    }

    @media (max-width: 1024px) {
      body .md-listing-search.${ENHANCED_CLASS} .search-by-section {
        flex-wrap: wrap;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword-container {
        flex-basis: 100%;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-more {
        flex: 1 1 100%;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item {
        flex: 1 1 0;
      }
    }

    @media (max-width: 767px) {
      body .md-listing-search.${ENHANCED_CLASS} {
        padding: 14px 15px 16px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-by-section {
        gap: 8px;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword-container {
        min-width: 0;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-input.sug {
        height: 50px !important;
        padding-left: 45px !important;
        font-size: 14px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line {
        min-height: 50px;
      }
      body .md-listing-search.${ENHANCED_CLASS} .keyword.first-line > .keyword-submit {
        top: 6px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-category > .keyword-submit,
      body .md-listing-search.${ENHANCED_CLASS} .save-search {
        min-height: 48px !important;
        border-radius: 12px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-more {
        width: 100%;
        gap: 7px;
        overflow-x: auto !important;
        scrollbar-width: none;
        padding-bottom: 2px;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-more::-webkit-scrollbar { display: none; }
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item {
        flex: 0 0 auto;
        min-width: 92px;
        min-height: 44px !important;
        border-radius: 12px !important;
      }
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .place,
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .select-text,
      body .md-listing-search.${ENHANCED_CLASS} .search-detail-item .box-div {
        min-height: 42px !important;
        padding: 0 13px !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      body .md-listing-search.${ENHANCED_CLASS} * { transition: none !important; }
    }
  `;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function enhance() {
    document.querySelectorAll(".md-listing-search").forEach(function (search) {
      search.classList.add(ENHANCED_CLASS);
    });
  }

  installStyles();
  enhance();

  var observer = new MutationObserver(enhance);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

