const fs = require("fs");
const path = require("path");
const { routes, siteUrl, ogImage, trustLinks } = require("../seo-pages.config");

const root = path.resolve(__dirname, "..");
const baseHtml = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hacker Prank Simulation | Fake Hacking Simulator Online</title>
  <meta name="description" content="Run a safe hacker prank simulation in your browser. Try fake hacking screens, phone scans, virus alerts, Windows pranks, and cinematic hacker dashboards.">
  <meta name="google-site-verification" content="vv9Le1Xp9f-M8yjKdDSptBIDt5CM1YecA60c4fHJhXI">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="https://www.hackerprank.online/">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="SimDeck">
  <meta property="og:title" content="Hacker Prank Simulation | Fake Hacking Simulator Online">
  <meta property="og:description" content="Run a safe hacker prank simulation in your browser. Try fake hacking screens, phone scans, virus alerts, Windows pranks, and cinematic hacker dashboards.">
  <meta property="og:image" content="https://www.hackerprank.online/assets/crack-desktop.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://www.hackerprank.online/">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Hacker Prank Simulation | Fake Hacking Simulator Online">
  <meta name="twitter:description" content="Run a safe hacker prank simulation in your browser. Try fake hacking screens, phone scans, virus alerts, Windows pranks, and cinematic hacker dashboards.">
  <meta name="twitter:image" content="https://www.hackerprank.online/assets/crack-desktop.png">

  <script type="application/ld+json">{"@context":"https://schema.org"}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>

<body>
  <section class="start-page" id="startPage" aria-label="SimDeck start screen">
    <video class="start-page-video" id="startPageVideo" autoplay muted loop playsinline preload="auto" aria-hidden="true">
      <source src="https://res.cloudinary.com/dy2kfjv5q/video/upload/v1779571828/hf_20260523_212240_6ca1e484-b894-4de8-80a4-df68012d7227_w18bip.mp4" type="video/mp4">
      <track kind="captions" srclang="en" label="Decorative background video" src="/captions/start-page.vtt" default>
    </video>
    <div class="start-video-folders" id="startVideoFolders">
      <div class="start-folder-head"><span>Name</span><span>Type</span><span>Size</span></div>
      <div class="start-folder-list" id="startFolderList" aria-label="Prank folders"></div>
    </div>
    <button class="start-page-hit" id="enterSimDeckBtn" type="button" aria-label="Enter SimDeck"><span>Start</span></button>
  </section>

  <div class="app-shell">
    <header class="top-bar">
      <div class="top-bar-left">
        <div class="brand">
          <div class="brand-mark">SD</div>
          <div>
            <div class="brand-name">SimDeck</div>
            <div class="brand-tag">Simulation / Fake</div>
          </div>
        </div>
      </div>
      <div class="top-bar-center"><div class="crumbs" id="crumbs">Home > Choose Scenario</div></div>
      <div class="top-bar-right">
        <div class="theme-dropdown">
          <button class="btn compact" id="themeDropdownBtn">Theme: <span id="currentThemeName">Hollywood</span></button>
          <div class="theme-dropdown-menu" id="themeDropdownMenu"></div>
        </div>
        <button class="btn compact" id="fullscreenBtn">Fullscreen</button>
        <button class="btn compact" id="settingsBtn">Settings</button>
      </div>
    </header>

    <div class="main-content">
      <aside class="category-sidebar">
        <div class="category-list" id="categoryList">
          <button class="category-item active" data-category="all"><span class="cat-icon">All</span><span class="cat-name">All Scenarios</span><span class="cat-count" id="countAll">14</span></button>
          <button class="category-item" data-category="phone"><span class="cat-icon">Phone</span><span class="cat-name">Phone</span><span class="cat-count">2</span></button>
          <button class="category-item" data-category="email"><span class="cat-icon">Email</span><span class="cat-name">Email</span><span class="cat-count">7</span></button>
          <button class="category-item" data-category="desktop"><span class="cat-icon">Desk</span><span class="cat-name">Desktop</span><span class="cat-count">2</span></button>
          <button class="category-item" data-category="prank"><span class="cat-icon">Prank</span><span class="cat-name">Pranks</span><span class="cat-count">1</span></button>
          <button class="category-item" data-category="scare"><span class="cat-icon">Scare</span><span class="cat-name">Scares</span><span class="cat-count">2</span></button>
        </div>
        <div class="sidebar-section"><div class="section-title">Recent</div><ul id="recentList" class="recent-list"></ul></div>
        <div class="sidebar-footer">
          <div class="safety-badge"><span>Safe</span><span>100% Safe Simulation</span></div>
          <p class="seo-note">SimDeck is hacker prank software: a fake hacking simulation for demos and videos. No real hacking or data access.</p>
        </div>
      </aside>

      <main class="stage-panel">
        <div class="scenario-grid" id="scenarioGrid"></div>
        <div class="stage-canvas" id="stageCanvas"></div>
        <div class="tray" id="miniTray"></div>
        <button class="mobile-tray-toggle" id="mobileToggleTray">Tools</button>
        <div class="watermark" id="watermark">SIMULATION / FAKE</div>
      </main>
    </div>

    <footer class="bottom-bar">
      <div class="bottom-bar-left">
        <button class="btn primary" id="startSimulationBtn">Start Simulation</button>
        <button class="btn ghost" id="resetStageBtn">Reset</button>
      </div>
      <div class="bottom-bar-center">
        <div class="control-group"><label for="speedSlider">Speed</label><input type="range" min="0.5" max="3" step="0.1" value="1" id="speedSlider" aria-label="Simulation speed"><span id="speedValue">1x</span></div>
        <div class="control-group"><label for="intensitySlider">Intensity</label><input type="range" min="1" max="3" step="1" value="2" id="intensitySlider" aria-label="Simulation intensity"><span id="intensityValue">Med</span></div>
        <div class="duration-chips" id="durationChips"><button class="chip active" data-duration="30">30s</button><button class="chip" data-duration="60">60s</button><button class="chip" data-duration="120">2m</button><button class="chip" data-duration="0">∞</button></div>
      </div>
      <div class="bottom-bar-right">
        <label class="toggle-pill"><input type="checkbox" id="soundToggle" aria-label="Sound"> Sound</label>
        <label class="toggle-pill"><input type="checkbox" id="watermarkToggle" aria-label="Watermark" checked> Watermark</label>
        <label class="toggle-pill"><input type="checkbox" id="motionToggle" aria-label="Motion" checked> Motion</label>
      </div>
    </footer>
  </div>

  <div class="exit-pill" id="exitPill">Exit to Home (ESC / Tap 5x / Hold 2s)</div>

  <button class="seo-guide-toggle" id="seoGuideToggle" type="button" aria-controls="seoGuideTray" aria-expanded="false">How to use</button>
  <aside class="seo-guide-tray" id="seoGuideTray" aria-label="How SimDeck hacker prank works">
    <div class="seo-guide-shell">
      <div class="seo-guide-top"><div><div class="seo-guide-kicker">Simulation Guide</div><h2>How Hacker Prank Works</h2></div><button class="seo-guide-close" id="seoGuideClose" type="button" aria-label="Close guide">Close</button></div>
      <div class="seo-guide-terminal" role="region" aria-label="Hacker prank explainer terminal">
        <p><span class="term-prompt">&gt;</span> SimDeck is a fake hacking simulator for harmless pranks, videos, demos, and screen effects.</p>
        <p><span class="term-prompt">&gt;</span> It does not hack devices, read accounts, access cameras, steal files, send emails, or connect to real targets.</p>
      </div>
    </div>
  </aside>

  <div class="modal" id="settingsModal">
    <div class="modal-content">
      <div class="modal-title">Settings</div>
      <div class="settings-grid">
        <label class="toggle-row"><input type="checkbox" id="autoModeToggle" checked> <span>Auto Mode</span></label>
        <label class="toggle-row"><input type="checkbox" id="randomSeedToggle" checked> <span>Randomize Output</span></label>
        <label class="toggle-row"><input type="checkbox" id="demoModeToggle" aria-label="Demo mode"> <span>Demo Mode</span></label>
        <label class="toggle-row"><input type="checkbox" id="filmModeToggle" aria-label="Film mode"> <span>Film Mode</span></label>
        <label class="toggle-row"><input type="checkbox" id="languageToggle" aria-label="Language toggle"> <span>Language: English</span></label>
      </div>
      <div class="modal-actions"><button class="btn primary" id="closeSettingsBtn">Done</button></div>
    </div>
  </div>

  <div class="modal" id="disclaimerModal">
    <div class="modal-content">
      <div class="modal-title">Simulation Disclaimer</div>
      <p>This is a simulation. No real hacking occurs. No data is accessed. All content is fictional and for visual demonstration only.</p>
      <p>Watermark is on by default. Quick exit is always available.</p>
      <div class="modal-actions"><button class="btn ghost" id="cancelDisclaimerBtn">Cancel</button><button class="btn primary" id="acceptDisclaimerBtn">Proceed</button></div>
    </div>
  </div>

  <template id="scenarioWindowTemplate">
    <div class="window"><div class="window-titlebar"><div class="window-dots"><span></span><span></span><span></span></div><div class="window-title">Window</div><div class="window-actions"><button class="win-btn" data-action="min">-</button><button class="win-btn" data-action="max">□</button><button class="win-btn" data-action="close">x</button></div></div><div class="window-body"></div></div>
  </template>
  <div class="toast-stack" id="toastStack"></div>
  <script src="/app.js"></script>
  <script>
    (() => {
      const section = document.getElementById("seo-content");
      const toggle = section?.querySelector(".static-seo-toggle");
      if (!section || !toggle) return;
      toggle.addEventListener("click", () => {
        const expanded = section.classList.toggle("seo-expanded");
        section.classList.toggle("seo-collapsed", !expanded);
        toggle.setAttribute("aria-expanded", String(expanded));
        const label = toggle.querySelector("strong");
        if (label) label.textContent = expanded ? "Collapse" : "Expand";
      });
    })();
  </script>
</body>

</html>`;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[char]);
}

function routeUrl(routePath) {
  return `${siteUrl}${routePath === "/" ? "/" : routePath}`;
}

function buildLinks(currentPath) {
  return routes
    .filter((route) => route.path !== currentPath)
    .map((route) => `<a href="${escapeHtml(route.path)}">${escapeHtml(route.label)}</a>`)
    .join("\n          ");
}

function buildTrustLinks() {
  return trustLinks
    .map(([label, href]) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`)
    .join("\n          ");
}

function buildFaq(route) {
  return route.faqs
    .map(([question, answer]) => `
        <details>
          <summary>${escapeHtml(question)}</summary>
          <p>${escapeHtml(answer)}</p>
        </details>`)
    .join("");
}

function buildSeoSection(route) {
  const sections = route.sections
    .map(([heading, body]) => `
        <section>
          <h3>${escapeHtml(heading)}</h3>
          <p>${escapeHtml(body)}</p>
        </section>`)
    .join("");

  return `
  <section class="static-seo-content seo-collapsed" id="seo-content" aria-label="${escapeHtml(route.label)} guide">
    <button class="static-seo-toggle" type="button" aria-expanded="false" aria-controls="staticSeoInner">
      <span>${escapeHtml(route.h1)} guide</span>
      <strong>Expand</strong>
    </button>
    <div class="static-seo-inner" id="staticSeoInner">
      <p class="static-seo-kicker">Safe browser simulation</p>
      <h1>${escapeHtml(route.h1)}</h1>
      <p class="static-seo-intro">${escapeHtml(route.intro)}</p>
      <div class="static-seo-grid">
        ${sections}
      </div>
      <section class="static-seo-faq" aria-label="Frequently asked questions">
        <h3>Frequently Asked Questions</h3>
        ${buildFaq(route)}
      </section>
      <nav class="static-seo-links" aria-label="Related prank simulators">
        <strong>Related SimDeck tools</strong>
        <div>
          ${buildLinks(route.path)}
        </div>
      </nav>
      <nav class="static-seo-links static-trust-links" aria-label="Trust and safety pages">
        <strong>Trust and safety</strong>
        <div>
          ${buildTrustLinks()}
        </div>
      </nav>
    </div>
  </section>`;
}

function schema(route) {
  const url = routeUrl(route.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": `${siteUrl}/`,
        "name": "SimDeck",
        "description": "Safe hacker prank simulation and fake hacking simulator tools for demos, videos, and harmless pranks.",
        "inLanguage": "en",
      },
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        "name": route.label,
        "url": url,
        "applicationCategory": "EntertainmentApplication",
        "operatingSystem": "Web",
        "description": route.description,
        "isAccessibleForFree": true,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
          { "@type": "ListItem", "position": 2, "name": route.label, "item": url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": route.faqs.map(([question, answer]) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer,
          },
        })),
      },
    ],
  };
}

function replaceHead(html, route) {
  const url = routeUrl(route.path);
  const schemaJson = JSON.stringify(schema(route));
  const cleaned = html
    .replace(/(?:\n\s*<meta property="og:image:width"[\s\S]*?>|\n\s*<meta property="og:image:height"[\s\S]*?>|\n\s*<meta property="og:url"[\s\S]*?>)+/gi, "")
    .replace(/\n\s*<link rel="icon"[\s\S]*?>/gi, "");
  return cleaned
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`)
    .replace(/<meta name="description"[\s\S]*?>/i, `<meta name="description" content="${escapeHtml(route.description)}">`)
    .replace(/<link rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${escapeHtml(url)}">`)
    .replace(/<link rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${escapeHtml(url)}">\n  <link rel="icon" href="/favicon.svg" type="image/svg+xml">`)
    .replace(/<meta property="og:title"[\s\S]*?>/i, `<meta property="og:title" content="${escapeHtml(route.title)}">`)
    .replace(/<meta property="og:description"[\s\S]*?>/i, `<meta property="og:description" content="${escapeHtml(route.description)}">`)
    .replace(/<meta property="og:image"[\s\S]*?>/i, `<meta property="og:image" content="${escapeHtml(ogImage)}">\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="630">\n  <meta property="og:url" content="${escapeHtml(url)}">`)
    .replace(/<meta name="twitter:title"[\s\S]*?>/i, `<meta name="twitter:title" content="${escapeHtml(route.title)}">`)
    .replace(/<meta name="twitter:description"[\s\S]*?>/i, `<meta name="twitter:description" content="${escapeHtml(route.description)}">`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${schemaJson}</script>`);
}

function buildPage(route) {
  let html = replaceHead(baseHtml, route);
  html = html.replace(/<h1 class="brand-name">SimDeck<\/h1>/i, `<div class="brand-name">SimDeck</div>`);
  html = html.replace("</main>", `</main>\n${buildSeoSection(route)}`);
  return html;
}

function writeRoute(route) {
  const html = buildPage(route);
  if (route.path === "/") {
    fs.writeFileSync(path.join(root, "index.html"), html);
    return;
  }
  const dir = path.join(root, route.path.replace(/^\/|\/$/g, ""));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

routes.forEach(writeRoute);

const sitemapEntries = [
  ...routes.map((route, index) => ({
    url: routeUrl(route.path),
    priority: index === 0 ? "1.0" : index < 3 ? "0.95" : "0.85",
  })),
  ...trustLinks.map(([, href]) => ({
    url: `${siteUrl}${href}`,
    priority: "0.55",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map((entry) => `  <url>
    <loc>${entry.url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
