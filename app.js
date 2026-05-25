// SimDeck Fake Hacking Simulation
// Purely visual. No real hacking, data access, or permissions.

const themes = [
  { id: "hollywood", name: "Hollywood Hacker", desc: "Neon green, rapid bursts, dramatic overlays.", className: "theme-hollywood" },
  { id: "corporate", name: "Corporate SOC", desc: "Blue/gray dashboards and timelines.", className: "theme-corporate" },
  { id: "forensics", name: "Mobile Forensics", desc: "Device metrics, extraction bars.", className: "theme-forensics" },
  { id: "retro", name: "Retro Terminal", desc: "Amber/green CRT vibe.", className: "theme-retro" },
  { id: "future", name: "Futuristic AI Ops", desc: "Gradient neon, AI panel blurbs.", className: "theme-future" },
];

const scenarios = [
  { id: "phone", name: "Phone Hacking", desc: "Fake mobile scan with zero data.", icon: "📱", image: "/assets/phone-hacking-card-cyber-crop.png", category: "phone", tags: ["Mobile", "Cinematic"], intensity: "Med" },
  { id: "email", name: "Email Hack", desc: "Bypass animation & inbox access.", icon: "📧", category: "email", tags: ["Mobile"], intensity: "Med", isNew: true },
  { id: "virus", name: "Virus Scanner", desc: "Fake security center with threats.", icon: "🛡️", category: "desktop", tags: ["Desktop", "Scare"], intensity: "High", isNew: true },
  { id: "ios", name: "iOS Update", desc: "Endless updater with panic mode.", icon: "🍎", category: "scare", tags: ["Mobile", "Loop"], intensity: "Low", isNew: true },
  { id: "android", name: "Android Sim", desc: "Optimizing/repairing loop.", icon: "🤖", category: "phone", tags: ["Mobile"], intensity: "Low" },
  { id: "win11", name: "Windows 11", desc: "Multi-window ops desk.", icon: "🖥️", category: "desktop", tags: ["Desktop", "Cinematic"], intensity: "High" },
  { id: "windows_os", name: "Windows OS Simulator", desc: "Choose XP or Windows 11 with working apps.", icon: "🪟", category: "desktop", tags: ["Desktop", "OS"], intensity: "High", isNew: true },
  { id: "tv", name: "Cracked Screen", desc: "Prank cracked glass overlay.", icon: "📺", category: "prank", tags: ["Prank"], intensity: "Low" },
  { id: "emailHijack", name: "Email Hijack", desc: "Account recovery theater.", icon: "🔓", category: "email", tags: ["Desktop"], intensity: "Med" },
  { id: "password", name: "Password Cracker", desc: "Choose a fake password-cracker concept.", icon: "🔐", category: "desktop", tags: ["Vault", "New"], intensity: "Med", isNew: true },
  { id: "passwordMeter", name: "Password Meter", desc: "Standalone vault meter console.", icon: "🧪", category: "desktop", tags: ["Vault"], intensity: "Med" },
  { id: "fbi", name: "FBI Lock", desc: "Fake lock with countdown timer.", icon: "🚨", category: "scare", tags: ["Prank", "Scare"], intensity: "Med", isHot: true },
  { id: "cryptoMiner", name: "Crypto Miner", desc: "Dark exchange breach with coin mining console.", icon: "₿", category: "desktop", tags: ["New", "Crypto"], intensity: "High", isNew: true },
  { id: "critical", name: "Critical Data", desc: "Global data heist simulation.", icon: "💾", category: "desktop", tags: ["New", "Cinematic"], intensity: "High", isNew: true },
  { id: "globalnet", name: "Global Network", desc: "Cinematic city-by-city takeover.", icon: "🌐", category: "desktop", tags: ["Cinematic", "New"], intensity: "High", isNew: true },
];

const seoRoutes = {
  "/hacker-prank/": {
    label: "Hacker Prank",
    title: "Hacker Prank",
    metaTitle: "Hacker Prank | Fake Hacking Simulator Online",
    description: "Open a safe hacker prank online with fake hacking screens, cinematic dashboards, phone scans, virus alerts, and harmless prank modes.",
    keywords: "hacker prank, hacking prank, fake hacker prank, prank hacker, fake hacking prank",
    folder: "Desktop",
    scenarioIds: ["phone", "email", "virus", "windows_os", "win11", "password", "passwordMeter", "tv", "fbi", "ios", "android", "cryptoMiner", "critical", "globalnet"],
  },
  "/fake-phone-hacking/": {
    label: "Fake Phone Hacking",
    title: "Fake Phone Hacking Simulator",
    metaTitle: "Fake Phone Hacking Simulator | Phone Hack Prank",
    description: "Launch a fake phone hacking simulator with safe phone scan screens, tracking-style visuals, terminal menus, and customizable phone labels.",
    keywords: "fake phone hacking, phone hack prank, fake phone hacking simulator, fake hacking screen prank",
    folder: "Phone",
    scenarioIds: ["phone_basic", "phone_track", "phone_terminal", "phone_matrix", "phone_corporate", "phone_forensic", "phone_prank", "phone_exfil"],
  },
  "/email-hack-simulator/": {
    label: "Email Hack Simulator",
    title: "Fake Email Hack Simulator",
    metaTitle: "Fake Email Hack Simulator | Email Prank Tool",
    description: "Run a safe fake email hack simulator with login theater, inbox screens, mailbox folders, recovery alerts, and fictional account activity.",
    keywords: "email hack simulator, fake email hack, email prank simulator, fake hacking website prank",
    folder: "Email",
    scenarioIds: ["email", "emailHijack"],
  },
  "/fake-virus-scanner/": {
    label: "Fake Virus Scanner",
    title: "Fake Virus Scanner Prank",
    metaTitle: "Fake Virus Scanner Prank | SimDeck",
    description: "Start a harmless fake virus scanner prank with fictional threat alerts, scan progress, cleanup screens, and security dashboard visuals.",
    keywords: "fake virus scanner, virus prank, fake security scan, fake hacking prank",
    folder: "Desktop",
    scenarioIds: ["virus"],
  },
  "/fake-windows-update/": {
    label: "Fake Windows Update",
    title: "Fake Windows Update Prank",
    metaTitle: "Fake Windows Update Prank | Fullscreen Update Screen",
    description: "Open a fake Windows update prank with a realistic update-style screen for harmless jokes, videos, and fullscreen computer pranks.",
    keywords: "fake Windows update, Windows update prank, fake update screen, computer prank",
    folder: "Desktop",
    scenarioIds: ["win11"],
  },
  "/windows-os-simulator/": {
    label: "Windows OS Simulator",
    title: "Windows OS Simulator",
    metaTitle: "Windows OS Simulator | XP and Windows 11 Browser Desktop",
    description: "Launch a browser-based Windows OS simulator with XP and Windows 11 modes, working windows, Start menus, desktop icons, and taskbar controls.",
    keywords: "Windows OS simulator, Windows XP simulator, Windows 11 simulator, fake Windows desktop",
    folder: "Desktop",
    scenarioIds: ["windows_os", "win11"],
  },
  "/cracked-screen-prank/": {
    label: "Cracked Screen Prank",
    title: "Cracked Screen Prank",
    metaTitle: "Cracked Screen Prank | Fake Broken Screen Effect",
    description: "Launch a cracked screen prank with fake broken glass overlays for harmless phone, tablet, and desktop screen jokes.",
    keywords: "cracked screen prank, broken screen prank, fake cracked screen, screen prank",
    folder: "Pranks",
    scenarioIds: ["tv"],
  },
  "/fake-fbi-lock-screen/": {
    label: "Fake FBI Lock Screen",
    title: "Fake FBI Lock Screen Prank",
    metaTitle: "Fake FBI Lock Screen Prank | Fictional Lock Warning",
    description: "Start a fake FBI lock screen prank with fictional warning text, countdown styling, and safe browser-only scare-screen visuals.",
    keywords: "fake FBI lock screen, FBI lock screen prank, fake lock screen, scare prank",
    folder: "Scares",
    scenarioIds: ["fbi"],
  },
  "/ios-update-prank/": {
    label: "iOS Update Prank",
    title: "Fake iOS Update Prank",
    metaTitle: "Fake iOS Update Prank | Endless iPhone Update Screen",
    description: "Run a fake iOS update prank with an iPhone-style update loop for harmless mobile jokes and video scenes.",
    keywords: "iOS update prank, fake iPhone update, fake iOS update, mobile prank",
    folder: "Mobile",
    scenarioIds: ["ios"],
  },
  "/android-optimizing-prank/": {
    label: "Android Optimizing Prank",
    title: "Android Optimizing Prank",
    metaTitle: "Android Optimizing Prank | Fake Android Repair Screen",
    description: "Open a fake Android optimizing prank with repair, cache, system loop, and harmless mobile device visuals.",
    keywords: "Android optimizing prank, fake Android repair, Android prank, mobile prank",
    folder: "Mobile",
    scenarioIds: ["android"],
  },
};

const routeOrder = [
  "/hacker-prank/",
  "/fake-phone-hacking/",
  "/email-hack-simulator/",
  "/fake-virus-scanner/",
  "/fake-windows-update/",
  "/windows-os-simulator/",
  "/cracked-screen-prank/",
  "/fake-fbi-lock-screen/",
  "/ios-update-prank/",
  "/android-optimizing-prank/",
];

const phoneScenarioMeta = {
  phone_basic: { name: "Basic Scan", desc: "A one-minute fake phone scan with export progress.", icon: "SCAN" },
  phone_track: { name: "Phone Tracking", desc: "Login first, then open a live tracking-style phone map.", icon: "GPS" },
  phone_terminal: { name: "Phone Terminal", desc: "Termux-style command screen for cinematic pranks.", icon: "TERM" },
  phone_matrix: { name: "Matrix Style", desc: "Green code cascade and phone access theater.", icon: "MX" },
  phone_corporate: { name: "Corporate SOC", desc: "Security operations dashboard on a mobile device.", icon: "SOC" },
  phone_forensic: { name: "Forensic Scan", desc: "Forensic-style device report and fake extraction flow.", icon: "LAB" },
  phone_prank: { name: "Prank Mode", desc: "Fast funny fake leak screens for friends.", icon: "PRNK" },
  phone_exfil: { name: "Data Exfiltration", desc: "Dramatic export-style phone data simulation.", icon: "EXF" },
};

const miniPrograms = [
  { id: "cam", label: "Camera Feed", note: "Simulated CCTV" },
  { id: "graphs", label: "System Graphs", note: "Randomized" },
  { id: "sat", label: "Satellite Link", note: "Simulated link" },
];

const scripts = {
  phone_basic: [
    { t: 0, action: "text", payload: "Device shadow detected" },
    { t: 4, action: "stage", payload: "Relay handshake" },
    { t: 10, action: "stage", payload: "Fingerprinting device shell" },
    { t: 18, action: "stage", payload: "Extracting message stream" },
    { t: 24, action: "counts", payload: { photos: 0, messages: 96, contacts: 0 } },
    { t: 30, action: "stage", payload: "Extracting media vault" },
    { t: 36, action: "counts", payload: { photos: 284, messages: 146, contacts: 0 } },
    { t: 42, action: "stage", payload: "Cloning contact graph" },
    { t: 48, action: "counts", payload: { photos: 328, messages: 214, contacts: 61 } },
    { t: 52, action: "stage", payload: "Sealing trace mask" },
    { t: 60, action: "complete", payload: "Session complete" },
  ],
  phone_matrix: [
    { t: 0, action: "init-matrix" },
    { t: 1, action: "detect-device" },
    { t: 3, action: "bypass-security" },
    { t: 6, action: "access-data" },
    { t: 9, action: "extract-info" },
    { t: 12, action: "complete" },
  ],
  phone_corporate: [
    { t: 0, action: "init-soc" },
    { t: 1, action: "network-map" },
    { t: 3, action: "device-trace" },
    { t: 6, action: "vulnerability-scan" },
    { t: 9, action: "data-extraction" },
    { t: 12, action: "report-complete" },
  ],
  phone_forensic: [
    { t: 0, action: "init-forensic" },
    { t: 1, action: "imei-lookup" },
    { t: 3, action: "carrier-info" },
    { t: 6, action: "os-analysis" },
    { t: 9, action: "file-system-scan" },
    { t: 12, action: "generate-report" },
  ],
  phone_prank: [
    { t: 0, action: "init-prank" },
    { t: 1, action: "scan-personal" },
    { t: 3, action: "found-embarrassing" },
    { t: 5, action: "upload-photos" },
    { t: 8, action: "leak-history" },
    { t: 11, action: "email-boss" },
    { t: 14, action: "prank-reveal" },
  ],
  email: [
    { t: 0, action: "banner", payload: "Suspicious login detected (simulated)" },
    { t: 1, action: "stage", payload: "Account verification" },
    { t: 4, action: "stage", payload: "Token refresh" },
    { t: 7, action: "stage", payload: "Mailbox sync" },
    { t: 10, action: "render-mails" },
  ],
  virus: [
    { t: 0, action: "disclaimer", payload: "No real scan is happening." },
    { t: 1, action: "scan-files" },
    { t: 6, action: "alert", payload: "Threats found: 3 (SIMULATED)" },
    { t: 8, action: "enable-quarantine" },
    { t: 9, action: "quarantine" },
    { t: 13, action: "complete", payload: "All clear (SIMULATED)" },
  ],
  ios: [
    { t: 0, action: "loop", payload: "update" },
  ],
  android: [
    { t: 0, action: "loop", payload: "optimize" },
  ],
  win11: [
    { t: 0, action: "open", payload: "console" },
    { t: 2, action: "terminal-burst" },
    { t: 4, action: "open", payload: "timeline" },
    { t: 6, action: "open", payload: "map" },
    { t: 8, action: "open", payload: "access" },
    { t: 10, action: "overlay", payload: "Access Denied" },
    { t: 12, action: "overlay", payload: "Access Granted" },
  ],
  tv: [
    { t: 0, action: "crack-picker" },
  ],
  emailHijack: [
    { t: 0, action: "step", payload: "Suspicious session detected (SIMULATED)" },
    { t: 2, action: "step", payload: "Invalidate session tokens" },
    { t: 5, action: "step", payload: "Rotate recovery keys" },
    { t: 8, action: "step", payload: "Account secured (SIMULATED)" },
  ],
  fbi: [
    { t: 0, action: "lock" },
  ],
  showtime: [
    { t: 0, action: "terminal-burst", payload: "med" },
    { t: 8, action: "alerts", payload: 3 },
    { t: 15, action: "open", payload: "map" },
    { t: 18, action: "open", payload: "graphs" },
    { t: 25, action: "open", payload: "mailbox" },
    { t: 35, action: "overlay", payload: "Access Denied" },
    { t: 40, action: "overlay", payload: "Access Granted" },
    { t: 55, action: "final-card", payload: "Simulation Complete" },
    { t: 60, action: "loop-check" },
  ],
  critical: [
    { t: 0, action: "critical-init" },
    { t: 1, action: "critical-progress", payload: 10 },
    { t: 3, action: "critical-progress", payload: 30 },
    { t: 5, action: "critical-progress", payload: 55 },
    { t: 7, action: "critical-progress", payload: 80 },
    { t: 9, action: "critical-progress", payload: 100 },
    { t: 10, action: "complete", payload: "Download Complete" },
  ],
  globalnet: [
    { t: 0, action: "gn-init" },
    { t: 2, action: "gn-hack", payload: 0 },
    { t: 6, action: "gn-hack", payload: 1 },
    { t: 10, action: "gn-hack", payload: 2 },
    { t: 14, action: "gn-hack", payload: 3 },
    { t: 18, action: "gn-hack", payload: 4 },
    { t: 22, action: "gn-hack", payload: 5 },
    { t: 26, action: "gn-hack", payload: 6 },
    { t: 30, action: "gn-hack", payload: 7 },
    { t: 34, action: "gn-hack", payload: 8 },
    { t: 38, action: "gn-hack", payload: 9 },
    { t: 42, action: "gn-dashboard" },
  ],
};

const state = {
  theme: null,
  scenario: null,
  running: false,
  auto: true,
  random: true,
  speed: 1,
  intensity: 2,
  duration: 30,
  watermarkOn: true,
  filmMode: false,
  motion: true,
  sound: false,
  layout: "single",
  timers: [],
  recent: [],
  simHistoryArmed: false,
  customTargetNumber: '',
  customTargetModel: 'DemoPhone X',
  customTargetCarrier: 'SecureNet Mobile',
  customTargetLocation: 'Unknown Location',
  customTargetEmail: '',
};

let els = {};

let tapCounter = 0;
let tapTimer = null;
let touchTimer = null;

let currentCategory = "all";

function init() {
  try {
    console.log("=== SimDeck Init Starting ===");

    // Populate elements after DOM is ready
    els = {
      // New dashboard elements
      scenarioGrid: document.querySelector("#scenarioGrid"),
      categoryList: document.querySelector("#categoryList"),
      themeDropdownBtn: document.querySelector("#themeDropdownBtn"),
      themeDropdownMenu: document.querySelector("#themeDropdownMenu"),
      currentThemeName: document.querySelector("#currentThemeName"),
      settingsBtn: document.querySelector("#settingsBtn"),
      settingsModal: document.querySelector("#settingsModal"),
      closeSettingsBtn: document.querySelector("#closeSettingsBtn"),

      // Legacy selectors (kept for compatibility)
      themeList: document.querySelector("#themeDropdownMenu"),
      scenarioList: document.querySelector("#scenarioGrid"),
      recentList: document.querySelector("#recentList"),
      crumbs: document.querySelector("#crumbs"),
      stage: document.querySelector("#stageCanvas"),
      tray: document.querySelector("#miniTray"),
      watermark: document.querySelector("#watermark"),
      exitPill: document.querySelector("#exitPill"),
      disclaimerModal: document.querySelector("#disclaimerModal"),
      cancelDisclaimerBtn: document.querySelector("#cancelDisclaimerBtn"),
      acceptDisclaimerBtn: document.querySelector("#acceptDisclaimerBtn"),
      startSimulationBtn: document.querySelector("#startSimulationBtn"),
      speedSlider: document.querySelector("#speedSlider"),
      speedValue: document.querySelector("#speedValue"),
      intensitySlider: document.querySelector("#intensitySlider"),
      intensityValue: document.querySelector("#intensityValue"),
      autoModeToggle: document.querySelector("#autoModeToggle"),
      randomSeedToggle: document.querySelector("#randomSeedToggle"),
      soundToggle: document.querySelector("#soundToggle"),
      motionToggle: document.querySelector("#motionToggle"),
      watermarkToggle: document.querySelector("#watermarkToggle"),
      filmModeToggle: document.querySelector("#filmModeToggle"),
      durationChips: document.querySelector("#durationChips"),
      resetStageBtn: document.querySelector("#resetStageBtn"),
      fullscreenBtn: document.querySelector("#fullscreenBtn"),
      toastStack: document.querySelector("#toastStack"),
      seoGuideTray: document.querySelector("#seoGuideTray"),
      seoGuideToggle: document.querySelector("#seoGuideToggle"),
      seoGuideClose: document.querySelector("#seoGuideClose"),
      startPage: document.querySelector("#startPage"),
      startPageVideo: document.querySelector("#startPageVideo"),
      enterSimDeckBtn: document.querySelector("#enterSimDeckBtn"),
      startFolderList: document.querySelector("#startFolderList"),
    };

    console.log("Elements found:", {
      scenarioGrid: !!els.scenarioGrid,
      categoryList: !!els.categoryList,
      themeDropdownBtn: !!els.themeDropdownBtn,
      themeDropdownMenu: !!els.themeDropdownMenu,
      stage: !!els.stage,
      tray: !!els.tray,
      resetStageBtn: !!els.resetStageBtn,
      fullscreenBtn: !!els.fullscreenBtn,
      toastStack: !!els.toastStack
    });

    console.log("Calling renderThemes...");
    renderThemes();
    console.log("Calling renderTray...");
    renderTray();
    console.log("Calling bindControls...");
    bindControls();
    console.log("Calling bindSeoGuide...");
    bindSeoGuide();
    console.log("Calling bindStartPage...");
    bindStartPage();
    console.log("Calling bindNewDashboard...");
    bindNewDashboard();
    console.log("Calling setTheme...");
    setTheme("hollywood");
    console.log("Calling route renderer...");
    renderCurrentRoute();
    console.log("=== SimDeck Init Complete ===");
    handleDonationReturnFromCoinbase();
  } catch (error) {
    console.error("=== SimDeck Init ERROR ===", error);
    alert("SimDeck Init Error: " + error.message);
  }
}

function bindStartPage() {
  if (!els.startPage) return;

  const closeStartPage = () => {
    els.startPage.classList.add("hidden");
    els.startPage.setAttribute("aria-hidden", "true");
    try {
      els.startPageVideo?.pause();
    } catch {
      // Autoplay/video controls can fail silently on some browsers.
    }
    setTimeout(() => {
      els.startPage?.remove();
    }, 460);
  };

  if (getCurrentPath() !== "/") {
    closeStartPage();
    return;
  }

  renderStartVideoFolders();

  els.enterSimDeckBtn?.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      closeStartPage();
      return;
    }
    els.startPage.classList.add("folders-open");
    els.enterSimDeckBtn?.setAttribute("aria-expanded", "true");
    els.startFolderList?.querySelector(".start-folder-row")?.focus();
  });

  els.startFolderList?.addEventListener("click", (event) => {
    const row = event.target instanceof HTMLElement ? event.target.closest(".start-folder-row") : null;
    if (!row) return;
    closeStartPage();
    navigateToRoute(row.dataset.route || "/");
  });

  loadStartVideoDeferred();
}

// Load + play the start-screen background video only AFTER the page is idle, so
// the multi-MB MP4 never competes with the initial paint / LCP. An optimized
// Cloudinary poster shows instantly. Skipped for reduced-motion / data-saver.
function loadStartVideoDeferred() {
  const v = els.startPageVideo;
  if (!v) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  // The animated welcome is the experience, so it loads on mobile too. We only
  // skip it for users who explicitly opted out (reduced-motion / data-saver),
  // and it always loads deferred + poster-first so it never blocks the paint.
  if (reduce || saveData) return;

  const start = () => {
    if (!v.isConnected) return;
    const source = v.querySelector("source[data-src]");
    if (source && !source.getAttribute("src")) {
      source.setAttribute("src", source.dataset.src);
      v.load();
    }
    v.play && v.play().catch(() => {});
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(start, { timeout: 2500 });
  } else {
    setTimeout(start, 1200);
  }
}

function toggleSeoGuide(forceOpen) {
  const tray = els.seoGuideTray || document.getElementById("seoGuideTray");
  const toggle = els.seoGuideToggle || document.getElementById("seoGuideToggle");
  if (!tray) return;
  const open = typeof forceOpen === "boolean" ? forceOpen : !tray.classList.contains("open");
  tray.classList.toggle("open", open);
  toggle?.setAttribute("aria-expanded", String(open));
}

function bindSeoGuide() {
  if (!els.seoGuideTray || !els.seoGuideToggle) return;
  els.seoGuideToggle.addEventListener("click", () => toggleSeoGuide());
  els.seoGuideClose?.addEventListener("click", () => toggleSeoGuide(false));
}

function renderStartVideoFolders() {
  if (!els.startFolderList) return;
  els.startFolderList.innerHTML = "";
  routeOrder.forEach((path) => {
    const route = seoRoutes[path];
    const row = document.createElement("button");
    row.type = "button";
    row.className = "start-folder-row";
    row.dataset.route = path;
    row.innerHTML = `
      <span><i aria-hidden="true"></i>${escapeMarkup(route.label)}</span>
      <span>folder</span>
      <span>--</span>
    `;
    els.startFolderList.appendChild(row);
  });
}

function getCurrentPath() {
  const path = window.location.pathname || "/";
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function setCanonical(path) {
  const href = `https://www.hackerprank.online${path === "/" ? "/" : path}`;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOg(property, content) {
  const selector = `meta[property="${property}"]`;
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function updateRouteSeo(route) {
  const path = getCurrentPath();
  const title = route?.metaTitle || "Hacker Prank Software | SimDeck Fake Hacking Simulation";
  const description = route?.description || "SimDeck is safe hacker prank software: a fake hacking simulation UI for demos, videos, and pranks. Works in your browser. No real hacking or data access.";
  document.title = title;
  setMeta("description", description);
  setOg("og:title", title);
  setOg("og:description", description);
  setOg("og:url", `https://www.hackerprank.online${path === "/" ? "/" : path}`);
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setCanonical(path);
}

function navigateToRoute(path) {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  history.pushState({ simdeckRoute: normalized }, "", normalized);
  renderCurrentRoute();
}

function renderCurrentRoute() {
  if (!els.scenarioGrid || !els.stage) return;

  resetRouteStage();
  const path = getCurrentPath();
  const route = seoRoutes[path];
  updateRouteSeo(route);

  if (path === "/hacker-prank/") {
    renderHackerPrankScenarioGrid();
  } else if (route) {
    renderSeoFolderPage(route, path);
  } else {
    renderHomeDirectory();
  }
}

function resetRouteStage() {
  clearTimers();
  state.running = false;
  state.scenario = null;
  state.simHistoryArmed = false;
  clearCrackPrankState();
  clearEmailHijackState();
  clearPasswordCrackerState();
  clearCryptoMinerState();
  document.body.classList.remove("ui-running", "sidebar-hidden");
  document.querySelector(".nav-panel")?.classList.remove("mobile-hidden");
  document.querySelector(".category-sidebar")?.classList.remove("hidden");
  els.stage.innerHTML = "";
  els.stage.classList.remove("active", "stage-centered");
  els.scenarioGrid.classList.remove("hidden");
  els.scenarioGrid.innerHTML = "";
  toggleWatermark(state.watermarkOn);
  updateCrumbs();
}

function clearCrackPrankState() {
  document.body.classList.remove(
    "crack-prank-active",
    "crack-prank-live",
    "crack-prank-mobile",
    "crack-prank-desktop"
  );
}

function clearEmailHijackState() {
  document.body.classList.remove("email-hijack-active", "email-hijack-live");
}

function clearPasswordCrackerState() {
  document.body.classList.remove("password-cracker-active", "password-cracker-live", "password-meter-active");
}

function clearCryptoMinerState() {
  document.body.classList.remove("crypto-miner-live");
}

function getScenarioMeta(id) {
  if (phoneScenarioMeta[id]) return { id, ...phoneScenarioMeta[id], tags: ["Phone", "Simulation"], intensity: "Med" };
  const sc = scenarios.find((item) => item.id === id);
  if (sc) return sc;
  return { id, name: id, desc: "Simulation", icon: "SIM", tags: ["Simulation"], intensity: "Med" };
}

function renderHackerPrankScenarioGrid() {
  currentCategory = "all";
  renderScenarios("all");
  els.categoryList?.querySelectorAll(".category-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === "all");
  });
  if (els.crumbs) els.crumbs.textContent = "Home > Hacker Prank > All Scenarios";
}

function renderHomeDirectory() {
  if (!els.scenarioGrid) return;
  els.scenarioGrid.className = "scenario-grid directory-grid";
  els.scenarioGrid.innerHTML = `
    <section class="directory-hero">
      <div class="directory-kicker">SimDeck Launcher</div>
      <h2>Choose a prank folder</h2>
      <p>Open safe fake hacking simulator folders with shareable URLs for search, videos, and mobile pranks.</p>
    </section>
  `;

  routeOrder.forEach((path) => {
    const route = seoRoutes[path];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "directory-folder";
    card.innerHTML = `
      <span class="folder-icon" aria-hidden="true"></span>
      <span class="folder-main">
        <strong>${escapeMarkup(route.label)}</strong>
        <small>${escapeMarkup(route.keywords)}</small>
      </span>
      <span class="folder-path">${escapeMarkup(path)}</span>
    `;
    card.addEventListener("click", () => navigateToRoute(path));
    els.scenarioGrid.appendChild(card);
  });

  if (els.crumbs) els.crumbs.textContent = "Home > Folders";
}

function renderSeoFolderPage(route, path) {
  els.scenarioGrid.className = "scenario-grid seo-folder-grid";
  els.scenarioGrid.innerHTML = `
    <section class="seo-folder-hero">
      <button class="folder-back" type="button" data-route="/">Back</button>
      <div class="directory-kicker">${escapeMarkup(route.folder)} Folder</div>
      <h2>${escapeMarkup(route.title)}</h2>
      <p>${escapeMarkup(route.description)}</p>
      <div class="seo-keywords">${escapeMarkup(route.keywords)}</div>
    </section>
  `;

  els.scenarioGrid.querySelector(".folder-back")?.addEventListener("click", () => navigateToRoute("/"));

  let phoneTargetPanel = null;
  if (path === "/fake-phone-hacking/") {
    ensurePhoneTargetDefaults();
    phoneTargetPanel = buildPhoneTargetPanel();
    phoneTargetPanel.addEventListener("input", () => savePhoneTargetFromForm(phoneTargetPanel));
    els.scenarioGrid.appendChild(phoneTargetPanel);
  }

  route.scenarioIds.forEach((id) => {
    const meta = getScenarioMeta(id);
    const card = document.createElement("article");
    card.className = "seo-sim-card";
    card.innerHTML = `
      <div class="seo-sim-icon">${meta.image ? `<img src="${escapeMarkup(meta.image)}" alt="">` : `<span>${escapeMarkup(meta.icon || "SIM")}</span>`}</div>
      <div class="seo-sim-copy">
        <h3>${escapeMarkup(meta.name)}</h3>
        <p>${escapeMarkup(meta.desc || "Open this safe visual prank simulation.")}</p>
        <div class="seo-sim-tags">${(meta.tags || []).map((tag) => `<span>${escapeMarkup(tag)}</span>`).join("")}</div>
      </div>
      <button class="seo-start-btn" type="button">Start Simulation</button>
    `;
    card.querySelector(".seo-start-btn")?.addEventListener("click", () => {
      if (phoneTargetPanel) {
        if (!phoneTargetPanel.reportValidity()) return;
        savePhoneTargetFromForm(phoneTargetPanel);
      }
      launchScenarioFromFolder(id);
    });
    card.addEventListener("dblclick", () => {
      if (phoneTargetPanel) {
        if (!phoneTargetPanel.reportValidity()) return;
        savePhoneTargetFromForm(phoneTargetPanel);
      }
      launchScenarioFromFolder(id);
    });
    els.scenarioGrid.appendChild(card);
  });

  if (els.crumbs) els.crumbs.textContent = `Home > ${route.label}`;
}

function buildPhoneTargetPanel() {
  const panel = document.createElement("form");
  panel.className = "phone-target-panel";
  panel.innerHTML = `
    <div class="phone-target-head">
      <div>
        <div class="phone-target-kicker">Target Profile</div>
        <h2>Set the number first</h2>
      </div>
      <span>Simulation only</span>
    </div>
    <div class="phone-target-grid">
      <label>
        <span>Name</span>
        <input name="targetName" type="text" autocomplete="off" placeholder="Friend name" value="${escapeMarkup(state.customTargetName || "")}">
      </label>
      <label>
        <span>Phone number</span>
        <input name="targetPhone" type="tel" inputmode="tel" autocomplete="off" placeholder="+1 (246) 168-2663" value="${escapeMarkup(state.customTargetNumber || "")}" required>
      </label>
      <label>
        <span>Device</span>
        <input name="targetDevice" type="text" autocomplete="off" placeholder="iPhone 15 Pro" value="${escapeMarkup(state.customTargetModel || "")}">
      </label>
      <label>
        <span>Carrier</span>
        <input name="targetCarrier" type="text" autocomplete="off" placeholder="5G Mobile" value="${escapeMarkup(state.customTargetCarrier || "")}">
      </label>
      <label>
        <span>Location</span>
        <input name="targetLocation" type="text" autocomplete="off" placeholder="Nearby" value="${escapeMarkup(state.customTargetLocation || "")}">
      </label>
      <label>
        <span>Battery</span>
        <input name="targetBattery" type="number" min="1" max="100" inputmode="numeric" placeholder="85" value="${escapeMarkup(state.customTargetBattery || 85)}">
      </label>
    </div>
    <p>These details stay in this browser and only appear inside the fake phone screens.</p>
  `;
  panel.addEventListener("submit", (event) => event.preventDefault());
  return panel;
}

function launchScenarioFromFolder(id) {
  if (id === "phone") {
    navigateToRoute("/fake-phone-hacking/");
    return;
  }
  state.scenario = id;
  startScenario(true);
}

function renderThemes() {
  if (!els.themeDropdownMenu) return;
  els.themeDropdownMenu.innerHTML = "";
  themes.forEach((theme) => {
    const item = document.createElement("button");
    item.className = "theme-dropdown-item";
    item.textContent = theme.name;
    item.dataset.id = theme.id;
    item.addEventListener("click", () => {
      setTheme(theme.id);
      els.themeDropdownMenu.classList.remove("open");
    });
    els.themeDropdownMenu.appendChild(item);
  });
}

function renderScenarios(filter = "all") {
  if (!els.scenarioGrid) return;
  els.scenarioGrid.className = "scenario-grid";
  els.scenarioGrid.innerHTML = "";

  const filtered = filter === "all"
    ? scenarios
    : scenarios.filter(sc => sc.category === filter);

  filtered.forEach((sc) => {
    const card = document.createElement("div");
    card.className = "scenario-card";
    card.dataset.id = sc.id;
    card.dataset.category = sc.category || "other";

    // Build tags HTML
    let tagsHtml = "";
    if (sc.isNew) tagsHtml += '<span class="tag new">NEW</span>';
    if (sc.isHot) tagsHtml += '<span class="tag hot">HOT</span>';
    sc.tags.forEach(t => tagsHtml += `<span class="tag">${t}</span>`);

    const iconHtml = sc.image
      ? `<div class="card-icon card-icon-image"><img src="${sc.image}" alt="" loading="lazy"></div>`
      : `<div class="card-icon">${sc.icon || "🎯"}</div>`;

    card.innerHTML = `
      ${iconHtml}
      <div class="card-title">${sc.name}</div>
      <div class="card-desc">${sc.desc}</div>
      <div class="card-tags">${tagsHtml}</div>
    `;

    card.addEventListener("click", () => selectScenario(sc.id));
    els.scenarioGrid.appendChild(card);
  });
}

function bindNewDashboard() {
  // Theme dropdown toggle
  if (els.themeDropdownBtn && els.themeDropdownMenu) {
    els.themeDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      els.themeDropdownMenu.classList.toggle("open");
    });

    // Prevent menu from closing when clicking inside it
    els.themeDropdownMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      els.themeDropdownMenu.classList.remove("open");
    });
  }

  // Category filtering
  if (els.categoryList) {
    els.categoryList.querySelectorAll(".category-item").forEach(btn => {
      btn.addEventListener("click", () => {
        els.categoryList.querySelectorAll(".category-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderScenarios(currentCategory);
      });
    });
  }

  // Settings modal
  if (els.settingsBtn && els.settingsModal) {
    els.settingsBtn.addEventListener("click", () => {
      els.settingsModal.classList.add("open");
    });

    els.closeSettingsBtn?.addEventListener("click", () => {
      els.settingsModal.classList.remove("open");
    });
  }

  // Voluntary support button (top bar)
  injectSupportButton();
}

function injectSupportButton() {
  const topRight = document.querySelector(".top-bar-right");
  if (!topRight) return;
  if (document.getElementById("supportBtn")) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn compact ghost";
  btn.id = "supportBtn";
  btn.textContent = "Donate";
  btn.addEventListener("click", () => showSupportModal());

  const settingsBtn = document.getElementById("settingsBtn");
  if (settingsBtn && settingsBtn.parentElement === topRight) {
    topRight.insertBefore(btn, settingsBtn);
  } else {
    topRight.appendChild(btn);
  }
}


function renderTray() {
  els.tray.innerHTML = "";
  els.tray.classList.add("collapsed");

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "tray-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = `<span class="tray-toggle-icon">▦</span><span>Tools</span><span class="tray-toggle-count">${miniPrograms.length}</span>`;
  toggle.addEventListener("click", () => toggleTray());
  els.tray.appendChild(toggle);

  const panel = document.createElement("div");
  panel.className = "tray-panel";

  miniPrograms.forEach((m) => {
    const btn = document.createElement("button");
    btn.className = "tray-button";
    btn.innerHTML = `<span class="label">${m.label}</span><span class="tiny">${m.note}</span>`;
    btn.addEventListener("click", () => openMiniProgram(m.id));
    panel.appendChild(btn);
  });

  els.tray.appendChild(panel);
}

function toggleTray(forceOpen) {
  const tray = els.tray || document.getElementById("miniTray");
  if (!tray) return;
  const open = typeof forceOpen === "boolean" ? forceOpen : tray.classList.contains("collapsed");
  tray.classList.toggle("collapsed", !open);
  tray.classList.toggle("open", open);
  tray.querySelector(".tray-toggle")?.setAttribute("aria-expanded", String(open));
}

function setTheme(id) {
  state.theme = id;
  document.body.classList.remove(...themes.map((t) => "theme-" + t.id));
  const themeObj = themes.find((t) => t.id === id);
  if (themeObj) {
    document.body.classList.add(themeObj.className);

    // Update dropdown button text
    if (els.currentThemeName) {
      els.currentThemeName.textContent = themeObj.name;
    }

    // Highlight active theme in dropdown
    els.themeDropdownMenu?.querySelectorAll(".theme-dropdown-item").forEach(item => {
      item.classList.toggle("active", item.dataset.id === id);
    });

    showToast(`Theme: ${themeObj.name}`, "info");
  }
  updateCrumbs();
}

function selectScenario(id) {
  console.log("selectScenario called with id:", id);
  state.scenario = id;
  highlightActive(els.scenarioGrid, id);
  addRecent(id);
  updateCrumbs();

  if (id === "phone") {
    console.log("Phone scenario - calling showPhoneScenarioOptions");
    showPhoneScenarioOptions();
  } else if (id === "email") {
    console.log("Email scenario - calling runEmailScenario");
    runEmailScenario();
  } else if (scenarioRunners[id]) {
    console.log("Running scenario:", id);
    // Properly transition to stage view
    els.scenarioGrid?.classList.add("hidden");
    els.stage.classList.add("active");
    state.running = true;
    scenarioRunners[id]();
    // Fire the script timeline so animations play
    if (state.auto && scripts[id]) runScript(scripts[id]);
  } else {
    console.log("No handler found for scenario:", id);
  }
}

function showPhoneScenarioOptions() {
  console.log("showPhoneScenarioOptions called");
  ensurePhoneTargetDefaults();
  state.isPremiumMode = false;
  showScenarioSelection();
}

// The product is free to use. Support is voluntary and should not gate features.
function isPremiumUnlocked() {
  return true;
}

const DONATION_USD = 5;
const STORAGE_KEYS = {
  premium: "simdeck_premium",
  premiumUnlockedAt: "simdeck_premium_unlocked_at",
  deviceId: "simdeck_device_id",
  lastChargeCode: "simdeck_last_charge_code",
  premiumChargeCode: "simdeck_premium_charge_code",
};

function getDeviceId() {
  let id = localStorage.getItem(STORAGE_KEYS.deviceId);
  if (!id) {
    const c = (typeof globalThis !== "undefined" && globalThis.crypto) ? globalThis.crypto : null;
    id = (c && typeof c.randomUUID === "function")
      ? c.randomUUID()
      : `dev_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(STORAGE_KEYS.deviceId, id);
  }
  return id;
}

async function createCoinbaseDonationCharge() {
  const deviceId = getDeviceId();
  const resp = await fetch("/api/coinbase/create-charge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceId }),
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    const msg = data && data.error ? data.error : "Failed to create donation checkout.";
    throw new Error(msg);
  }
  if (!data || !data.hosted_url || !data.code) throw new Error("Unexpected donation response.");
  localStorage.setItem(STORAGE_KEYS.lastChargeCode, data.code);
  return data;
}

async function probeCoinbaseBackend() {
  try {
    const resp = await fetch("/api/coinbase/ping", { method: "GET" });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return { ok: false, reason: "bad_status", status: resp.status, data };
    }
    return { ok: true, configured: !!(data && data.configured) };
  } catch (err) {
    return { ok: false, reason: "network", error: String(err && err.message ? err.message : err) };
  }
}

async function fetchCoinbaseDonationStatus(code) {
  const deviceId = getDeviceId();
  const resp = await fetch("/api/coinbase/status", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, deviceId }),
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    const msg = data && data.error ? data.error : "Failed to verify donation.";
    throw new Error(msg);
  }
  return data;
}

async function handleDonationReturnFromCoinbase() {
  const params = new URLSearchParams(window.location.search);
  const donation = params.get("donation");
  if (!donation) return;

  // Remove the flag so refresh doesn't keep re-triggering it.
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete("donation");
    const next = url.pathname + (url.search ? url.search : "") + (url.hash ? url.hash : "");
    window.history.replaceState({}, "", next);
  } catch {
    // ignore
  }

  if (donation === "cancel") {
    showToast("Support flow closed.", "info");
    return;
  }

  if (donation !== "success") return;
  showSupportModal();
}

// Unlock premium (called after donation)
function unlockPremium(reason = "donation") {
  localStorage.setItem(STORAGE_KEYS.premium, 'unlocked');
  localStorage.setItem(STORAGE_KEYS.premiumUnlockedAt, String(Date.now()));
  showToast("Thanks for supporting SimDeck development.", "success");
}

// Generate random fake data for free mode
function generateRandomTargetData() {
  const names = ["John D.", "Sarah M.", "Mike R.", "Emily K.", "Alex T.", "Jordan P."];
  const carriers = ["SecureNet", "GlobalTel", "MobiLink", "CellMax", "NetWave"];
  const devices = ["iPhone 15", "Galaxy S24", "Pixel 8", "OnePlus 12"];
  const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Miami, FL"];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    carrier: carriers[Math.floor(Math.random() * carriers.length)],
    device: devices[Math.floor(Math.random() * devices.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    battery: Math.floor(Math.random() * 70) + 15,
    network: ["4G LTE", "5G", "5G+"][Math.floor(Math.random() * 3)]
  };
}

function ensurePhoneTargetDefaults() {
  state.customTargetName = state.customTargetName || "Friend";
  state.customTargetNumber = state.customTargetNumber || "";
  state.customTargetEmail = state.customTargetEmail || "";
  state.customTargetModel = state.customTargetModel || "iPhone 15 Pro";
  state.customTargetCarrier = state.customTargetCarrier || "5G Mobile";
  state.customTargetLocation = state.customTargetLocation || "Nearby";
  state.customTargetBattery = state.customTargetBattery || 85;
  state.customTargetNetwork = state.customTargetNetwork || "5G";
}

function savePhoneTargetFromForm(form) {
  if (!(form instanceof HTMLFormElement)) return;
  const data = new FormData(form);
  state.customTargetName = String(data.get("targetName") || "").trim() || "Friend";
  state.customTargetNumber = String(data.get("targetPhone") || "").trim();
  state.customTargetModel = String(data.get("targetDevice") || "").trim() || "iPhone 15 Pro";
  state.customTargetCarrier = String(data.get("targetCarrier") || "").trim() || "5G Mobile";
  state.customTargetLocation = String(data.get("targetLocation") || "").trim() || "Nearby";
  state.customTargetBattery = Number(data.get("targetBattery")) || 85;
  state.customTargetNetwork = "5G";
}

// Voluntary support modal. This is not a paywall and does not unlock features.
function showSupportModal() {
  const modal = document.createElement("div");
  modal.className = "support-modal";
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
  `;

  modal.innerHTML = `
    <div style="
      background: rgba(13, 18, 31, 0.96);
      border: 1px solid rgba(61, 246, 161, 0.28);
      border-radius: 18px;
      padding: 28px;
      max-width: 460px;
      width: 100%;
      position: relative;
      box-shadow: 0 22px 90px rgba(0, 0, 0, 0.55);
    ">
      <button id="closeSupportModal" style="
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        color: var(--muted);
        font-size: 24px;
        cursor: pointer;
      ">×</button>

      <div style="font-size: 38px; margin-bottom: 14px; text-align: center;">💚</div>
      <h2 style="color: var(--text); margin: 0 0 10px 0; text-align: center;">Support SimDeck</h2>
      <p style="color: var(--muted); margin: 0 0 18px 0; font-size: 14px; line-height: 1.55; text-align: center;">
        SimDeck is free to use. If it helps your video, prank, demo, or content workflow, you can support future development.
      </p>

      <div style="
        background: rgba(61, 246, 161, 0.08);
        border: 1px solid rgba(61, 246, 161, 0.18);
        border-radius: 14px;
        padding: 16px;
        color: var(--text);
        font-size: 13px;
        line-height: 1.55;
        margin-bottom: 16px;
      ">
        Contributions help cover hosting, new simulations, better visuals, mobile polish, and keeping the tool available without locking features behind a checkout.
      </div>

      <button id="supportComingSoon" class="btn primary" style="width: 100%; padding: 12px; margin-bottom: 10px;">
        Donation details coming soon
      </button>

      <p style="color: var(--muted); font-size: 11px; margin: 0; text-align: center;">
        No feature unlocks. No paywall. Just support if you want to help the project grow.
      </p>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("closeSupportModal")?.addEventListener("click", () => modal.remove());
  document.getElementById("supportComingSoon")?.addEventListener("click", () => {
    showToast("Support details will be added here soon. Thanks for wanting to help.", "success");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// Customization Form
function showCustomizationForm() {
  els.scenarioGrid?.classList.add("hidden");
  els.stage.classList.add("active");
  els.stage.innerHTML = "";

  const customizationContainer = document.createElement("div");
  customizationContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100%;
    gap: 20px;
  `;

  customizationContainer.innerHTML = `
    <div style="text-align: center; max-width: 500px;">
      <div style="display: inline-block; background: linear-gradient(90deg, #4a9fff, var(--accent)); color: #061019; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 20px; margin-bottom: 10px;">
        CUSTOM MODE
      </div>
      <h2 style="color: var(--text); margin: 0 0 10px 0;">Customize Target Information</h2>
      <p style="color: var(--muted); margin: 0 0 20px 0;">Enter target details for the simulation (all data is fake)</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; width: 100%; max-width: 500px;">
      <div>
        <label style="display: block; color: var(--text); margin-bottom: 5px; font-size: 14px;">Target Name</label>
        <input type="text" id="targetName" placeholder="John Smith" style="
          width: 100%;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
        ">
      </div>

      <div>
        <label style="display: block; color: var(--text); margin-bottom: 5px; font-size: 14px;">Phone Number</label>
        <input type="text" id="targetPhoneNumber" placeholder="+1 (555) 123-4567" style="
          width: 100%;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
          font-family: var(--mono);
        ">
      </div>
    </div>

    <div style="width: 100%; max-width: 500px;">
      <label style="display: block; color: var(--text); margin-bottom: 5px; font-size: 14px;">Email (Optional)</label>
      <input type="email" id="targetEmail" placeholder="john.smith@gmail.com" style="
        width: 100%;
        padding: 10px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border);
        border-radius: 8px;
        color: var(--text);
        font-family: var(--mono);
      ">
      <div style="color: var(--muted); font-size: 11px; margin-top: 6px;">
        Used only inside the simulation UI.
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; width: 100%; max-width: 500px;">
      <div>
        <label style="display: block; color: var(--text); margin-bottom: 5px; font-size: 14px;">Device Model</label>
        <input type="text" id="targetDeviceModel" placeholder="iPhone 15 Pro Max" style="
          width: 100%;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
        ">
      </div>

      <div>
        <label style="display: block; color: var(--text); margin-bottom: 5px; font-size: 14px;">Carrier</label>
        <input type="text" id="targetCarrier" placeholder="Verizon" style="
          width: 100%;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
        ">
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; width: 100%; max-width: 500px;">
      <div>
        <label style="display: block; color: var(--text); margin-bottom: 5px; font-size: 14px;">Location</label>
        <input type="text" id="targetLocation" placeholder="New York, NY" style="
          width: 100%;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
        ">
      </div>

      <div>
        <label style="display: block; color: var(--text); margin-bottom: 5px; font-size: 14px;">Battery Level (%)</label>
        <input type="number" id="targetBattery" placeholder="85" min="1" max="100" style="
          width: 100%;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
        ">
      </div>
    </div>

    <div style="display: flex; gap: 15px; margin-top: 10px;">
      <button id="backToModeSelect" class="btn ghost">← Back</button>
      <button id="continueToScenarios" class="btn primary" style="padding: 12px 24px; font-size: 16px;">
        Continue to Scenarios →
      </button>
    </div>

    <p style="color: var(--muted); font-size: 12px; text-align: center; max-width: 500px; margin-top: 15px;">
      🎭 This is a simulation for entertainment. No real devices are accessed.
    </p>
  `;

  els.stage.appendChild(customizationContainer);

  // Pre-fill with saved values
  document.getElementById('targetName').value = state.customTargetName || '';
  document.getElementById('targetPhoneNumber').value = state.customTargetNumber || '';
  document.getElementById('targetEmail').value = state.customTargetEmail || '';
  document.getElementById('targetDeviceModel').value = state.customTargetModel || '';
  document.getElementById('targetCarrier').value = state.customTargetCarrier || '';
  document.getElementById('targetLocation').value = state.customTargetLocation || '';
  document.getElementById('targetBattery').value = state.customTargetBattery || '';

  // Event listeners
  document.getElementById('backToModeSelect').addEventListener('click', showScenarioSelection);

  document.getElementById('continueToScenarios').addEventListener('click', function () {
    state.customTargetName = document.getElementById('targetName').value || 'Target User';
    state.customTargetNumber = document.getElementById('targetPhoneNumber').value || '+1 (555) 123-4567';
    state.customTargetEmail = document.getElementById('targetEmail').value || '';
    state.customTargetModel = document.getElementById('targetDeviceModel').value || 'iPhone 15 Pro';
    state.customTargetCarrier = document.getElementById('targetCarrier').value || 'Verizon';
    state.customTargetLocation = document.getElementById('targetLocation').value || 'New York, NY';
    state.customTargetBattery = parseInt(document.getElementById('targetBattery').value) || 85;
    state.customTargetNetwork = '5G';
    state.isPremiumMode = true;
    showScenarioSelection();
  });
}

function showScenarioSelection() {
  // Ensure stage is visible
  els.scenarioGrid?.classList.add("hidden");
  els.stage.classList.add("active");
  els.stage.classList.remove("stage-centered", "windows-os-stage");
  els.stage.innerHTML = "";
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "scenario-options";
  optionsContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    align-content: start;
    height: calc(100vh - 150px);
    overflow-y: auto;
    padding-bottom: 100px;
  `;

  // Add a back button to return to scenario selection
  const backButton = document.createElement("button");
  backButton.className = "btn";
  backButton.textContent = "← Back to Main Menu";
  backButton.style.cssText = `
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 100;
  `;
  backButton.addEventListener("click", () => {
    // Reset to show the main scenario selection again
    resetStage();
  });

  els.stage.appendChild(backButton);

  ensurePhoneTargetDefaults();

  const targetPanel = buildPhoneTargetPanel();
  targetPanel.addEventListener("input", () => savePhoneTargetFromForm(targetPanel));
  optionsContainer.appendChild(targetPanel);

  const phoneScenarios = [
    {
      id: "phone_basic",
      name: "Basic Scan",
      desc: "Simple device scan with basic information",
      icon: "🔍"
    },
    {
      id: "phone_matrix",
      name: "Matrix Style",
      desc: "Green code cascade with terminal interface",
      icon: "💻"
    },
    {
      id: "phone_terminal",
      name: "Phone Terminal",
      desc: "Termux-style toolkit menu (simulated)",
      icon: "⌨️"
    },
    {
      id: "phone_track",
      name: "Phone Tracking",
      desc: "Live pings + triangulation map (simulated)",
      icon: "📡"
    },
    {
      id: "phone_corporate",
      name: "Corporate SOC",
      desc: "Professional security operations center view",
      icon: "🏢"
    },
    {
      id: "phone_forensic",
      name: "Forensic Scan",
      desc: "Detailed device analysis and data extraction",
      icon: "🔬"
    },
    {
      id: "phone_prank",
      name: "Prank Mode",
      desc: "Fake data leak & embarrassing uploads (Funny!)",
      icon: "🤡"
    },
    {
      id: "phone_exfil",
      name: "Data Exfiltration",
      desc: "Actively steal & export target data",
      icon: "📤"
    }
  ];

  showToast(`Showing ${phoneScenarios.length} Phone Scenarios`, "info");

  phoneScenarios.forEach(scenario => {
    const card = document.createElement("div");
    card.className = "scenario-card";
    card.style.cssText = `
      background: var(--panel-strong);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px;
      cursor: pointer;
      transition: transform 120ms ease, border-color 120ms ease, background 150ms ease;
      text-align: center;
    `;
    card.innerHTML = `
      <div style="font-size: 32px; margin-bottom: 10px;">${scenario.icon}</div>
      <div class="title" style="font-weight: 700; margin-bottom: 8px;">${scenario.name}</div>
      <div class="desc" style="color: var(--muted); font-size: 14px; margin-bottom: 12px;">${scenario.desc}</div>
      <button class="btn primary" style="width: 100%;">Select</button>
    `;

    card.addEventListener("click", () => {
      state.scenario = scenario.id;
      updateCrumbs();
      showToast(`Selected: ${scenario.name}`, "info");
      // Highlight the selected scenario in the sidebar
      highlightActive(els.scenarioList, "phone");
      // Add to recent
      addRecent("phone");
      if (scenario.id === "phone_basic") {
        savePhoneTargetFromForm(targetPanel);
        showBasicScanSetup();
        return;
      }
      if (!targetPanel.reportValidity()) return;
      savePhoneTargetFromForm(targetPanel);
      // Close the scenario selection and start the simulation after a short delay
      setTimeout(() => {
        startScenario();
      }, 500);
    });

    optionsContainer.appendChild(card);
  });

  els.stage.appendChild(optionsContainer);


}

function showBasicScanSetup() {
  els.scenarioGrid?.classList.add("hidden");
  els.stage.classList.add("active");
  els.stage.classList.add("stage-centered");
  els.stage.innerHTML = "";

  const setup = document.createElement("div");
  setup.className = "basic-scan-setup";
  setup.innerHTML = `
    <button class="basic-scan-back" type="button">← Back to Basic Scan</button>
    <form class="basic-scan-form" autocomplete="off">
      <div class="basic-scan-icon">⌕</div>
      <div>
        <h2>Target Setup</h2>
        <p>Enter the details that should appear inside the simulation.</p>
      </div>

      <label>
        <span>Phone number</span>
        <input id="basicScanPhone" name="phone" type="tel" inputmode="tel" placeholder="+1 (555) 123-4567" value="${escapeMarkup(state.customTargetNumber || "")}" required>
      </label>

      <label>
        <span>iPhone type</span>
        <select id="basicScanModel" name="model">
          ${["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 14 Pro", "iPhone 13"].map((model) => `
            <option value="${escapeMarkup(model)}" ${model === state.customTargetModel ? "selected" : ""}>${escapeMarkup(model)}</option>
          `).join("")}
        </select>
      </label>

      <label>
        <span>Carrier label</span>
        <input id="basicScanCarrier" name="carrier" type="text" maxlength="28" placeholder="SecureNet Mobile" value="${escapeMarkup(state.customTargetCarrier || "")}">
      </label>

      <div class="basic-scan-preview">
        <span>Simulation target</span>
        <strong id="basicScanPreview">${escapeMarkup(state.customTargetModel || "DemoPhone X")} · ${escapeMarkup(state.customTargetNumber || "+1 (555) 123-4567")}</strong>
      </div>

      <button class="btn primary" type="submit">Start Basic Scan</button>
      <small>This is visual only. No real device is accessed.</small>
    </form>
  `;

  els.stage.appendChild(setup);

  const phoneInput = setup.querySelector("#basicScanPhone");
  const modelInput = setup.querySelector("#basicScanModel");
  const carrierInput = setup.querySelector("#basicScanCarrier");
  const preview = setup.querySelector("#basicScanPreview");
  const syncPreview = () => {
    const phone = phoneInput.value.trim() || "+1 (555) 123-4567";
    const model = modelInput.value || "DemoPhone X";
    preview.textContent = `${model} · ${phone}`;
  };

  phoneInput.addEventListener("input", syncPreview);
  modelInput.addEventListener("change", syncPreview);
  setup.querySelector(".basic-scan-back")?.addEventListener("click", showScenarioSelection);
  setup.querySelector(".basic-scan-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.customTargetNumber = phoneInput.value.trim() || "+1 (555) 123-4567";
    state.customTargetModel = modelInput.value || "iPhone 15 Pro";
    state.customTargetCarrier = carrierInput.value.trim() || "SecureNet Mobile";
    state.customTargetNetwork = "5G";
    showToast("Basic Scan target loaded", "success");
    startScenario();
  });

  phoneInput.focus();
}

function addRecent(id) {
  if (!id) return;
  state.recent = [id, ...state.recent.filter((x) => x !== id)].slice(0, 5);
  els.recentList.innerHTML = "";
  state.recent.forEach((r) => {
    const sc = scenarios.find((s) => s.id === r);
    if (!sc) return;
    const li = document.createElement("li");
    li.textContent = sc.name;
    els.recentList.appendChild(li);
  });
}

function highlightActive(listEl, id) {
  listEl.querySelectorAll(".active").forEach((el) => el.classList.remove("active"));
  const target = listEl.querySelector(`[data-id="${id}"]`);
  if (target) target.classList.add("active");
}

function bindControls() {
  // Use optional chaining to prevent errors if elements don't exist
  els.startSimulationBtn?.addEventListener("click", openDisclaimer);
  els.acceptDisclaimerBtn?.addEventListener("click", () => {
    closeDisclaimer();
    startScenario();
  });
  els.cancelDisclaimerBtn?.addEventListener("click", closeDisclaimer);

  // Reset button
  els.resetStageBtn?.addEventListener("click", () => {
    renderCurrentRoute();
    showToast("Stage reset! Pick a scenario.", "info");
  });

  // Toggle controls
  els.autoModeToggle?.addEventListener("change", (e) => (state.auto = e.target.checked));
  els.randomSeedToggle?.addEventListener("change", (e) => (state.random = e.target.checked));
  els.soundToggle?.addEventListener("change", (e) => (state.sound = e.target.checked));
  els.motionToggle?.addEventListener("change", motionToggleChanged);
  els.watermarkToggle?.addEventListener("change", (e) => toggleWatermark(e.target.checked));
  els.filmModeToggle?.addEventListener("change", (e) => toggleFilmMode(e.target.checked));

  // Sliders
  els.speedSlider?.addEventListener("input", (e) => {
    state.speed = Number(e.target.value);
    if (els.speedValue) els.speedValue.textContent = `${state.speed.toFixed(1)}x`;
  });
  els.intensitySlider?.addEventListener("input", (e) => {
    state.intensity = Number(e.target.value);
    if (els.intensityValue) els.intensityValue.textContent = state.intensity === 1 ? "Low" : state.intensity === 2 ? "Med" : "High";
  });

  // Duration chips
  els.durationChips?.addEventListener("click", (e) => {
    if (e.target.classList.contains("chip")) {
      els.durationChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      e.target.classList.add("active");
      state.duration = Number(e.target.dataset.duration);
    }
  });

  // Fullscreen
  els.fullscreenBtn?.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", syncFullscreenUi);
  // Safari / older WebKit
  document.addEventListener("webkitfullscreenchange", syncFullscreenUi);
  syncFullscreenUi();

  // Exit controls
  els.exitPill?.addEventListener("click", exitToHome);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (els.seoGuideTray?.classList.contains("open")) {
      toggleSeoGuide(false);
      return;
    }
    exitToHome();
  });
  els.stage?.addEventListener("click", handleTapExit);
  els.stage?.addEventListener("touchstart", handleTouchExit);
  els.stage?.addEventListener("touchend", cancelTouchHold);
  window.addEventListener("popstate", handleBrowserBack);

  enableWatermarkDrag();

  console.log("Controls bound successfully");
}

function openDisclaimer() {
  if (!state.theme) { showToast("Pick a theme first.", "warning"); return; }
  if (!state.scenario) { showToast("Pick a scenario.", "warning"); return; }
  if (state.scenario === "cryptoMiner") {
    startScenario();
    return;
  }
  els.disclaimerModal.classList.add("show");
}
function closeDisclaimer() { els.disclaimerModal.classList.remove("show"); }

function startScenario(force = false) {
  if (!force && !state.scenario) { showToast("Choose a scenario.", "warning"); return; }
  toggleSeoGuide(false);
  toggleTray(false);
  resetStage(true);
  armSimulationHistory();
  // resetStage() intentionally stops any previous loop; re-enable for the next run.
  state.running = true;
  document.body.classList.add('ui-running');
  // Ensure the current theme is applied
  if (state.theme) {
    setTheme(state.theme);
  }
  const id = state.scenario;
  if (!id) return;
  const runner = scenarioRunners[id];
  if (runner) {
    runner();
    if (state.auto && scripts[id]) runScript(scripts[id]);
  } else if (id === "showtime") {
    runShowtime();
  } else {
    showToast("Scenario not implemented yet.", "warning");
  }
}

function armSimulationHistory() {
  if (state.simHistoryArmed) return;
  try {
    history.pushState({ simdeckRunning: true }, "", window.location.href);
    state.simHistoryArmed = true;
  } catch (err) {
    state.simHistoryArmed = false;
  }
}

function handleBrowserBack() {
  if (state.running || els.stage?.classList.contains("active")) {
    state.simHistoryArmed = false;
    exitToHome();
    return;
  }
  renderCurrentRoute();
}

function updateCrumbs(showtime = false) {
  const themeName = themes.find((t) => t.id === state.theme)?.name || "Choose Theme";
  let sc = scenarios.find((s) => s.id === state.scenario)?.name;
  if (!sc && String(state.scenario || "").startsWith("phone_")) {
    const phoneNames = {
      phone_basic: "Basic Scan",
      phone_matrix: "Matrix Style",
      phone_terminal: "Phone Terminal",
      phone_track: "Phone Tracking",
      phone_corporate: "Corporate SOC",
      phone_forensic: "Forensic Scan",
      phone_prank: "Prank Mode",
      phone_exfil: "Data Exfiltration",
    };
    sc = phoneNames[state.scenario] ? `Phone Hacking / ${phoneNames[state.scenario]}` : "Phone Hacking";
  }
  sc = sc || (showtime ? "Showtime" : "Choose Scenario");
  els.crumbs.textContent = `Home > ${themeName} > ${sc}`;
}

function resetStage(keepWatermark = false) {
  state.running = false;
  state.simHistoryArmed = false;
  clearCrackPrankState();
  clearEmailHijackState();
  clearPasswordCrackerState();
  clearCryptoMinerState();
  document.body.classList.remove('ui-running');
  clearTimers();

  // Hide stage and show scenario grid
  els.stage.innerHTML = "";
  els.stage.classList.remove("active");
  els.stage.classList.remove("stage-centered");
  els.scenarioGrid?.classList.remove("hidden");

  if (state.motion) addGlitch();
  if (keepWatermark) toggleWatermark(state.watermarkOn);

  // Restore nav panel on mobile
  document.querySelector('.nav-panel')?.classList.remove('mobile-hidden');
  document.querySelector('.category-sidebar')?.classList.remove('hidden');
  document.body.classList.remove('sidebar-hidden');
}

function toggleWatermark(on) {
  state.watermarkOn = on;
  els.watermark.style.display = on ? "block" : "none";
}

function toggleFilmMode(on) {
  state.filmMode = on;
  els.watermark.style.cursor = on ? "move" : "default";
}

function motionToggleChanged(e) {
  state.motion = e.target.checked;
  if (!state.motion) {
    const g = els.stage.querySelector(".glitch");
    if (g) g.remove();
  } else {
    addGlitch();
  }
}

function addGlitch() {
  if (!state.motion) return;
  if (els.stage.querySelector(".glitch")) return;
  const g = document.createElement("div");
  g.className = "glitch";
  els.stage.appendChild(g);
}

function handleTapExit() {
  tapCounter += 1;
  if (tapTimer) clearTimeout(tapTimer);
  if (tapCounter >= 5) { exitToHome(); tapCounter = 0; return; }
  tapTimer = setTimeout(() => { tapCounter = 0; }, 1500);
}

function handleTouchExit(e) {
  if (e.touches.length >= 2) {
    cancelTouchHold();
    touchTimer = setTimeout(exitToHome, 2000);
  }
}
function cancelTouchHold() {
  if (touchTimer) { clearTimeout(touchTimer); touchTimer = null; }
}

function exitToHome() {
  state.running = false;
  state.simHistoryArmed = false;
  clearTimers();
  showToast("Exited to home.", "info");
  resetStage();
  renderScenarios();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function syncFullscreenUi() {
  const on = !!document.fullscreenElement;
  document.body.classList.toggle("ui-fullscreen", on);
  if (els.fullscreenBtn) {
    els.fullscreenBtn.textContent = on ? "⤢ Exit Fullscreen" : "🔲 Fullscreen";
  }
}

function setLayout(mode) {
  state.layout = mode;
  if (mode === "single") {
    els.stage.classList.remove("multi");
    els.stage.classList.add("single");
  } else {
    els.stage.classList.add("multi");
    els.stage.classList.remove("single");
  }
  showToast(`${mode === "single" ? "Single Screen" : "Multi-Window"} mode`, "info");
}

function clearTimers() {
  state.timers.forEach((t) => clearTimeout(t));
  state.timers = [];
}

function runScript(phases) {
  const factor = 1 / state.speed;
  phases.forEach((phase) => {
    const timer = setTimeout(() => dispatchScriptAction(phase), phase.t * 1000 * factor);
    state.timers.push(timer);
  });
}

function dispatchScriptAction(phase) {
  if (!state.running) return;
  const id = state.scenario;
  switch (id) {
    case "phone":
    case "phone_basic":
    case "phone_matrix":
    case "phone_corporate":
    case "phone_forensic":
      phoneAction(phase);
      break;
    case "email": emailAction(phase); break;
    case "virus": virusAction(phase); break;
    case "ios": iosAction(phase); break;
    case "android": androidAction(phase); break;
    case "win11": winAction(phase); break;
    case "tv": tvAction(phase); break;
    case "emailHijack": emailHijackAction(phase); break;
    case "fbi": fbiAction(phase); break;
    case "critical": criticalAction(phase); break;
    case "globalnet": globalnetAction(phase); break;
    case "showtime": showtimeAction(phase); break;
    default: break;
  }
}

// ---------- Scenario Runners ----------

const scenarioRunners = {
  phone: runPhoneScenario,
  phone_basic: runPhoneScenario,
  phone_matrix: runPhoneMatrixScenario,
  phone_terminal: runPhoneTerminalScenario,
  phone_track: runPhoneTrackingScenario,
  phone_corporate: runPhoneCorporateScenario,
  phone_forensic: runPhoneForensicScenario,
  phone_prank: runPhonePrankScenario,
  phone_exfil: runPhoneExfilScenario,
  email: runEmailScenario,
  virus: runVirusScenario,
  ios: runIOSScenario,
  android: runAndroidScenario,
  win11: runWinScenario,
  windows_os: runWindowsOSSimulatorScenario,
  tv: runTVScenario,
  emailHijack: runEmailHijackScenario,
  password: runPasswordCrackerScenario,
  passwordMeter: runPasswordMeterScenario,
  cryptoMiner: runCryptoMinerScenario,
  fbi: runFBIScenario,
  critical: runCriticalScenario,
  globalnet: runGlobalNetScenario,
};

function runWindowsOSSimulatorScenario() {
  clearStage();
  els.stage.classList.add("windows-os-stage");
  els.stage.querySelector(".glitch")?.remove();
  const shell = document.createElement("section");
  shell.className = "windows-os-embed";
  shell.innerHTML = `
    <div class="windows-os-toolbar">
      <div>
        <strong>Windows OS Simulator</strong>
        <span>Choose XP or Windows 11 inside the simulator.</span>
      </div>
      <div class="windows-os-actions">
        <button class="btn ghost" type="button" id="windowsOsReload">Reload</button>
        <button class="btn primary" type="button" id="windowsOsFullscreen">Fullscreen</button>
        <a class="btn ghost" href="/xp-simulator/index.html" target="_blank" rel="noopener">Open tab</a>
      </div>
    </div>
    <iframe
      class="windows-os-frame"
      src="/xp-simulator/index.html"
      title="Windows OS Simulator"
      allowfullscreen
    ></iframe>
  `;
  els.stage.appendChild(shell);

  const iframe = shell.querySelector(".windows-os-frame");
  shell.querySelector("#windowsOsReload")?.addEventListener("click", () => {
    iframe.src = iframe.src;
  });
  shell.querySelector("#windowsOsFullscreen")?.addEventListener("click", () => {
    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else shell.requestFullscreen?.();
  });
}

function runPhonePrankScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhonePrankFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneExfilScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhoneExfilFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhoneFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneMatrixScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhoneMatrixFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneCorporateScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhoneCorporateFrame();
  els.stage.appendChild(frame);
  addGlitch();
  renderCustomizationPayNudge();
}

function runPhoneForensicScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhoneForensicFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneTrackingScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhoneTrackingLoginFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneTerminalScenario() {
  clearStage();
  els.stage.classList.add("stage-centered");
  const frame = buildPhoneTerminalFrame();
  els.stage.appendChild(frame);
  addGlitch();
  startPhoneTerminalSimulation(frame);
}

function renderCustomizationPayNudge() {
  if (!els.stage) return;
  els.stage.querySelector(".pay-nudge")?.remove();
}

// ---------- Email Hacking Scenario ----------

const fakeEmails = [
  {
    id: 1,
    from: "security@bank-secure.com",
    subject: "Password Reset Confirmation",
    time: "10:23 AM",
    preview: "Your password was successfully changed...",
    body: "Dear Customer,\n\nYour account password was changed on Jan 28, 2026 at 3:45 AM from an unrecognized device in Moscow, Russia.\n\nIf this wasn't you, please contact support immediately.\n\nSecurity Team"
  },
  {
    id: 2,
    from: "noreply@dating-app.io",
    subject: "🔥 You have 3 new matches!",
    time: "9:15 AM",
    preview: "Someone special liked your profile...",
    body: "Hey there!\n\nYou're popular today! 3 people swiped right on you.\n\nLog in to see who's waiting for you! 😉\n\n- The Dating App Team"
  },
  {
    id: 3,
    from: "hr@company.com",
    subject: "RE: Performance Review - CONFIDENTIAL",
    time: "Yesterday",
    preview: "We need to discuss your recent behavior...",
    body: "Hi,\n\nFollowing our meeting, I'm concerned about the complaints we've received.\n\nPlease schedule a meeting with me ASAP to discuss next steps.\n\nThis email is confidential.\n\nHR Department"
  },
  {
    id: 4,
    from: "billing@subscription.tv",
    subject: "Payment Failed - Account Suspended",
    time: "Yesterday",
    preview: "Your subscription has been canceled...",
    body: "Your payment method was declined.\n\nThe card ending in 4829 could not be charged $49.99.\n\nYour PREMIUM account is now suspended. All saved content will be deleted in 7 days."
  },
  {
    id: 5,
    from: "mom@family.net",
    subject: "Please call me back",
    time: "2 days ago",
    preview: "I've been trying to reach you...",
    body: "Sweetie,\n\nI've called you 5 times this week. Is everything okay?\n\nYour father and I are worried. Please call us.\n\nLove, Mom ❤️"
  }
];

const emailFolders = [
  { id: "inbox", label: "Inbox", count: fakeEmails.length },
  { id: "sent", label: "Sent", count: 4 },
  { id: "starred", label: "Starred", count: 3 },
  { id: "trash", label: "Trash", count: 2 },
];

function runEmailScenario() {
  clearStage();

  // Create full-screen email client container
  const container = document.createElement("div");
  container.className = "email-hacking-container";
  els.stage.appendChild(container);
  addGlitch();
  buildEmailLogin(container);
}

function buildEmailLogin(container) {
  container.innerHTML = `
    <div class="email-login-screen">
      <div class="email-login-card">
        <div class="email-login-mark">MX</div>
        <div class="email-login-kicker">Fictional Access Portal</div>
        <h2>Signal Login</h2>
        <p>Enter demo details to start the simulated inbox sequence.</p>
        <form class="email-login-form" autocomplete="off">
          <label>
            <span>Alias</span>
            <input type="text" id="emailLoginAlias" name="alias" placeholder="shadow.runner" autocomplete="off" required>
          </label>
          <label>
            <span>Access Key</span>
            <input type="password" id="emailLoginKey" name="accessKey" placeholder="demo key" autocomplete="off" required>
          </label>
          <button class="email-login-submit" type="submit">Enter Simulation</button>
        </form>
        <div class="email-login-note">Simulation only. Use demo details, not real passwords.</div>
      </div>
    </div>
  `;

  container.querySelector(".email-login-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const alias = container.querySelector("#emailLoginAlias")?.value?.trim();
    state.emailLoginAlias = alias || "shadow.runner";
    runEmailBypassIntro(container);
  });
}

function runEmailBypassIntro(container) {

  // Start with bypass animation
  container.innerHTML = `
    <div class="email-bypass-overlay">
      <div class="email-hack-orb">MAIL</div>
      <div class="email-hack-kicker">HACKING IN PROGRESS</div>
      <div class="email-hack-title">Bypassing inbox security</div>
      <div class="email-hack-sub">Session tunnel opening through encrypted mail nodes</div>

      <div class="email-hack-panel">
        <div class="email-hack-panel-top">
          <span>LIVE TERMINAL</span>
          <span class="email-hack-pulse">ACTIVE</span>
        </div>
        <div class="bypass-terminal"></div>
      </div>

      <div class="email-hack-status">
        <span class="bypass-status">Initializing tunnel...</span>
      </div>
      <div class="progress email-hack-progress">
        <div class="progress-bar"><div class="progress-fill bypass-progress"></div></div>
      </div>
    </div>
  `;

  // Run bypass animation
  runEmailBypassAnimation(container);
}

function runEmailBypassAnimation(container) {
  const terminal = container.querySelector(".bypass-terminal");
  const status = container.querySelector(".bypass-status");
  const progressBar = container.querySelector(".bypass-progress");
  const overlay = container.querySelector(".email-bypass-overlay");

  const bypassSteps = [
    { text: "> Opening encrypted mail tunnel...", delay: 650 },
    { text: "> Routing through ghost relay: mx-07", delay: 560 },
    { text: "> Spoofing trusted inbox fingerprint...", delay: 720 },
    { text: "> Mapping message index and folders...", delay: 780 },
    { text: "> Security challenge detected", delay: 680, color: "#ffd166" },
    { text: "> Injecting temporary session token...", delay: 880 },
    { text: "> Masking device signature...", delay: 760 },
    { text: "> Decrypting inbox cache...", delay: 820 },
    { text: "> Building mailbox preview stream...", delay: 760 },
    { text: "> ACCESS WINDOW STABILIZED", delay: 500, color: "#3df6a1" }
  ];

  let stepIndex = 0;
  let progress = 0;

  function runStep() {
    if (stepIndex >= bypassSteps.length) {
      status.textContent = "ACCESS GRANTED";
      status.style.color = "var(--success)";
      progressBar.style.width = "100%";

      // Fade out overlay and show inbox
      setTimeout(() => {
        overlay.style.transition = "opacity 0.5s";
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.remove();
          buildEmailInbox(container);
        }, 500);
      }, 800);
      return;
    }

    const step = bypassSteps[stepIndex];
    const line = document.createElement("div");
    line.textContent = step.text;
    if (step.color) line.style.color = step.color;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;

    progress = ((stepIndex + 1) / bypassSteps.length) * 100;
    progressBar.style.width = `${progress}%`;
    status.textContent = step.text.replace("> ", "");

    stepIndex++;
    setTimeout(runStep, step.delay);
  }

  setTimeout(runStep, 500);
}

function buildEmailInbox(container) {
  const alias = state.emailLoginAlias || "shadow.runner";
  container.innerHTML = `
    <div class="email-client">
      <div class="email-sidebar">
        <div class="email-brand">
          <span>MX</span>
          <div>
            <strong>MailNode</strong>
            <small>${escapeMarkup(alias)}@mx.local</small>
          </div>
        </div>
        <button class="email-compose" type="button">Compose</button>
        <nav class="email-folder-list" aria-label="Mailbox folders">
          ${emailFolders.map((folder, index) => `
            <button class="email-folder ${index === 0 ? "active" : ""}" type="button" data-folder="${folder.id}">
              <span>${folder.label}</span>
              <strong>${folder.count}</strong>
            </button>
          `).join("")}
        </nav>
        <div class="email-storage">
          <span>Storage</span>
          <div><i style="width: 68%"></i></div>
          <small>8.4 GB of 12 GB used</small>
        </div>
      </div>

      <div class="email-list-container">
        <div class="email-toolbar">
          <div class="email-window-dots"><span></span><span></span><span></span></div>
          <div class="email-search">Search mail</div>
          <div class="email-toolbar-actions">
            <button type="button">Archive</button>
            <button type="button">Report</button>
          </div>
        </div>
        <div class="email-mobile-header">
          <div>
            <div class="email-kicker">Inbox</div>
            <div class="email-account">${escapeMarkup(alias)}@mx.local</div>
          </div>
          <div class="email-count">${fakeEmails.length}</div>
        </div>
        <div class="email-list"></div>
      </div>

      <div class="email-preview">
        <div class="email-preview-placeholder">
          <div class="email-empty-icon">✉</div>
          <strong>Select a message</strong>
          <span>Choose an email from the inbox to open the reading pane.</span>
        </div>
      </div>
    </div>
  `;

  // Populate email list
  const emailList = container.querySelector(".email-list");
  fakeEmails.forEach(email => {
    const item = document.createElement("div");
    item.className = "mail-item";
    item.innerHTML = `
      <div class="mail-item-top">
        <div class="mail-sender">${email.from.split("@")[0]}</div>
        <div class="mail-time">${email.time}</div>
      </div>
      <div class="mail-subject">${email.subject}</div>
      <div class="mail-preview-line">${email.preview}</div>
      <div class="mail-meta-line">
        <span>${email.from}</span>
        <i>Unread</i>
      </div>
    `;

    item.addEventListener("click", () => showEmailPreview(container, email));

    emailList.appendChild(item);
  });

  showEmailPreview(container, fakeEmails[0]);
  showToast("Inbox opened", "success");
}

function showEmailPreview(container, email) {
  const preview = container.querySelector(".email-preview");
  container.querySelectorAll(".mail-item").forEach((item) => {
    item.classList.toggle("active", item.textContent.includes(email.subject));
    if (item.textContent.includes(email.subject)) {
      item.querySelector(".mail-meta-line i").textContent = "Opened";
    }
  });
  preview.classList.add("active");
  preview.innerHTML = `
    <button class="email-back" type="button">← Inbox</button>
    <div class="email-reader-actions">
      <button type="button">Reply</button>
      <button type="button">Forward</button>
      <button type="button">Delete</button>
    </div>
    <div class="email-preview-head">
      <div class="email-preview-subject">${email.subject}</div>
      <div class="email-preview-meta">
        <div class="email-preview-from">
          <div><span>${email.from.slice(0, 1).toUpperCase()}</span>${email.from}</div>
          <span>to: encrypted inbox</span>
        </div>
        <div>${email.time}</div>
      </div>
    </div>
    <div class="email-body">${email.body}</div>
    <div class="email-actions">
      <button class="btn">Export Email</button>
      <button class="btn">Download Attachments</button>
    </div>
  `;

  preview.querySelector(".email-back")?.addEventListener("click", () => {
    preview.classList.remove("active");
  });

  // Add click handlers for buttons
  preview.querySelectorAll(".email-actions .btn").forEach(btn => {
    btn.addEventListener("click", () => {
      showToast("File saved to /exports (simulated)", "info");
    });
  });
}


// ---------- Virus On Device Scenario ----------

const fakeThreats = [
  { name: "Trojan.GenericKD.46892547", type: "Trojan", severity: "Critical", path: "C:\\Windows\\System32\\svchost.dll" },
  { name: "Backdoor.Agent.XYZ", type: "Backdoor", severity: "High", path: "C:\\Users\\Admin\\AppData\\Roaming\\update.exe" },
  { name: "Spyware.Keylogger.Pro", type: "Spyware", severity: "High", path: "C:\\Program Files\\Common\\logger.dll" },
  { name: "Adware.BrowserHijack", type: "Adware", severity: "Medium", path: "C:\\Users\\Admin\\Downloads\\freesoft.exe" },
  { name: "PUP.CryptoMiner.Hidden", type: "PUP", severity: "Medium", path: "C:\\Temp\\miner_x64.exe" },
  { name: "Ransomware.WannaCry.Gen", type: "Ransomware", severity: "Critical", path: "C:\\Windows\\Temp\\wcry.exe" }
];

function runVirusScenario() {
  clearStage();

  const container = document.createElement("div");
  container.className = "virus-scanner-container";
  container.style.cssText = `
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #1a0a0a 0%, #0a0a15 100%);
    padding: 20px;
    overflow-y: auto;
  `;

  container.innerHTML = `
    <div class="scanner-header" style="
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--danger);
    ">
      <div style="font-size: 40px;">🛡️</div>
      <div>
        <div style="font-size: 20px; font-weight: 700; color: var(--danger);">⚠️ SECURITY ALERT</div>
        <div style="color: var(--muted); font-size: 14px;">Windows Defender (Simulated)</div>
      </div>
    </div>
    
    <div class="scan-phase" id="scanPhase">
      <div style="text-align: center; color: var(--text); margin-bottom: 20px;">
        <div style="font-size: 16px; margin-bottom: 10px;">Scanning your device for threats...</div>
        <div class="scan-status" style="font-family: var(--mono); color: var(--accent); font-size: 13px;">Initializing scan engine...</div>
      </div>
      
      <div class="progress" style="margin-bottom: 15px;">
        <div class="progress-bar"><div class="progress-fill scan-progress"></div></div>
      </div>
      
      <div class="scan-details" style="
        background: rgba(0,0,0,0.5);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 12px;
        font-family: var(--mono);
        font-size: 12px;
        color: var(--muted);
        height: 120px;
        overflow-y: auto;
      "></div>
    </div>
    
    <div class="results-phase" id="resultsPhase" style="display: none;">
      <div class="threat-summary" style="
        background: rgba(255, 72, 109, 0.15);
        border: 1px solid var(--danger);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 20px;
        text-align: center;
      ">
        <div style="font-size: 32px; margin-bottom: 10px;">🚨</div>
        <div style="font-size: 18px; font-weight: 700; color: var(--danger);">THREATS DETECTED!</div>
        <div style="color: var(--text); margin-top: 5px;"><span id="threatCount">0</span> malicious items found</div>
      </div>
      
      <div class="threat-list" style="
        border: 1px solid var(--border);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
      "></div>
      
      <div class="action-buttons" style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn primary" id="quarantineAllBtn" style="flex: 1;">🔒 Quarantine All</button>
        <button class="btn" id="deleteAllBtn" style="flex: 1; border-color: var(--danger); color: var(--danger);">🗑️ Delete All</button>
        <button class="btn" id="ignoreBtn" style="flex: 1;">⚠️ Ignore Risks</button>
      </div>
      
      <div class="quarantine-status" id="quarantineStatus" style="display: none; margin-top: 20px;"></div>
    </div>
  `;

  els.stage.appendChild(container);
  addGlitch();

  // Start the scan animation
  runVirusScan(container);
}

function runVirusScan(container) {
  const scanPhase = container.querySelector("#scanPhase");
  const resultsPhase = container.querySelector("#resultsPhase");
  const progressBar = container.querySelector(".scan-progress");
  const status = container.querySelector(".scan-status");
  const details = container.querySelector(".scan-details");

  const scanPaths = [
    "C:\\Windows\\System32\\*.*",
    "C:\\Users\\Admin\\AppData\\*.*",
    "C:\\Program Files\\*.*",
    "C:\\Program Files (x86)\\*.*",
    "C:\\Users\\Admin\\Downloads\\*.*",
    "C:\\Windows\\Temp\\*.*",
    "Registry: HKEY_LOCAL_MACHINE\\SOFTWARE\\*",
    "Registry: HKEY_CURRENT_USER\\Software\\*",
    "Memory scan: Active processes",
    "Network: Open connections"
  ];

  let progress = 0;
  let pathIndex = 0;
  let threatsFound = 0;

  function updateScan() {
    if (progress >= 100) {
      // Scan complete - show results
      status.textContent = `Scan complete. ${fakeThreats.length} threats found!`;
      status.style.color = "var(--danger)";

      setTimeout(() => {
        scanPhase.style.display = "none";
        resultsPhase.style.display = "block";
        showVirusResults(container);
      }, 1000);
      return;
    }

    progress += Math.random() * 3 + 1;
    if (progress > 100) progress = 100;
    progressBar.style.width = `${progress}%`;

    // Update scanning path
    if (pathIndex < scanPaths.length && progress > (pathIndex + 1) * 10) {
      status.textContent = `Scanning: ${scanPaths[pathIndex]}`;
      const line = document.createElement("div");
      line.textContent = `[${new Date().toLocaleTimeString()}] Scanning ${scanPaths[pathIndex]}`;
      details.appendChild(line);
      details.scrollTop = details.scrollHeight;
      pathIndex++;
    }

    // Randomly find threats
    if (threatsFound < fakeThreats.length && Math.random() > 0.92) {
      const threat = fakeThreats[threatsFound];
      const alertLine = document.createElement("div");
      alertLine.style.color = threat.severity === "Critical" ? "#ff4444" : "#ff9944";
      alertLine.textContent = `⚠️ THREAT DETECTED: ${threat.name}`;
      details.appendChild(alertLine);
      details.scrollTop = details.scrollHeight;
      threatsFound++;
      showToast(`🚨 ${threat.type} detected!`, "danger");
    }

    setTimeout(updateScan, 150);
  }

  setTimeout(updateScan, 500);
}

function showVirusResults(container) {
  const threatList = container.querySelector(".threat-list");
  const threatCount = container.querySelector("#threatCount");

  threatCount.textContent = fakeThreats.length;

  fakeThreats.forEach((threat, index) => {
    const item = document.createElement("div");
    item.className = "threat-item";
    item.dataset.index = index;
    item.style.cssText = `
      padding: 12px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,72,109,0.05);
    `;

    const severityColor = threat.severity === "Critical" ? "#ff4444" :
      threat.severity === "High" ? "#ff9944" : "#ffcc00";

    item.innerHTML = `
      <input type="checkbox" checked style="width: 18px; height: 18px;">
      <div style="flex: 1;">
        <div style="font-weight: 600; color: var(--text);">${threat.name}</div>
        <div style="font-size: 12px; color: var(--muted);">${threat.path}</div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 12px; color: ${severityColor}; font-weight: 600;">${threat.severity}</div>
        <div style="font-size: 11px; color: var(--muted);">${threat.type}</div>
      </div>
    `;

    threatList.appendChild(item);
  });

  // Action button handlers
  container.querySelector("#quarantineAllBtn").addEventListener("click", () => {
    runQuarantineAction(container, "quarantine");
  });

  container.querySelector("#deleteAllBtn").addEventListener("click", () => {
    runQuarantineAction(container, "delete");
  });

  container.querySelector("#ignoreBtn").addEventListener("click", () => {
    showToast("⚠️ Risks ignored! Your device remains vulnerable.", "warning");
  });
}

function runQuarantineAction(container, action) {
  const statusDiv = container.querySelector("#quarantineStatus");
  const buttons = container.querySelector(".action-buttons");
  const threatItems = container.querySelectorAll(".threat-item");

  buttons.style.display = "none";
  statusDiv.style.display = "block";
  statusDiv.innerHTML = `
    <div style="text-align: center; color: var(--text);">
      <div style="font-size: 14px; margin-bottom: 10px;">${action === "quarantine" ? "Quarantining" : "Deleting"} threats...</div>
      <div class="progress"><div class="progress-bar"><div class="progress-fill action-progress"></div></div></div>
      <div class="action-log" style="
        margin-top: 15px;
        font-family: var(--mono);
        font-size: 12px;
        color: var(--muted);
        text-align: left;
      "></div>
    </div>
  `;

  const progressBar = statusDiv.querySelector(".action-progress");
  const log = statusDiv.querySelector(".action-log");
  let index = 0;

  function processNext() {
    if (index >= fakeThreats.length) {
      progressBar.style.width = "100%";
      progressBar.style.background = "var(--success)";

      const successMsg = document.createElement("div");
      successMsg.style.cssText = "color: var(--success); font-weight: 600; margin-top: 15px; text-align: center;";
      successMsg.textContent = `✓ All ${fakeThreats.length} threats ${action === "quarantine" ? "quarantined" : "deleted"} successfully!`;
      log.appendChild(successMsg);

      showToast(`🛡️ Device secured! All threats ${action === "quarantine" ? "quarantined" : "removed"}.`, "success");
      return;
    }

    const threat = fakeThreats[index];
    const progress = ((index + 1) / fakeThreats.length) * 100;
    progressBar.style.width = `${progress}%`;

    const line = document.createElement("div");
    line.textContent = `${action === "quarantine" ? "🔒" : "🗑️"} ${threat.name}... OK`;
    log.appendChild(line);

    // Cross out the threat item
    if (threatItems[index]) {
      threatItems[index].style.opacity = "0.4";
      threatItems[index].style.textDecoration = "line-through";
    }

    index++;
    setTimeout(processNext, 400);
  }

  setTimeout(processNext, 300);
}


// ---------- iOS Update / Panic Scenario ----------

function runIOSScenario() {
  clearStage();

  const container = document.createElement("div");
  container.className = "ios-update-container";
  container.style.cssText = `
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  `;

  container.innerHTML = `
    <div class="ios-logo" style="margin-bottom: 40px;">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="white">
        <path d="M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0zm0 72c-17.6 0-32-14.4-32-32S22.4 8 40 8s32 14.4 32 32-14.4 32-32 32z"/>
        <path d="M52 33c-.1-3.1 1.6-6 4.2-7.6-1.6-2.3-4.1-3.8-6.9-4.1-2.9-.3-5.7 1.7-7.2 1.7-1.5 0-3.8-1.7-6.2-1.6-3.2.1-6.2 1.9-7.8 4.8-3.4 5.8-.9 14.4 2.4 19.1 1.6 2.3 3.5 4.9 6 4.8 2.4-.1 3.3-1.6 6.2-1.6 2.9 0 3.7 1.6 6.2 1.5 2.6 0 4.3-2.3 5.9-4.6 1.2-1.7 2.1-3.6 2.6-5.6-3-.1-5.4-2.8-5.4-6.8zm-5.1-12.5c1.3-1.6 2-3.6 1.8-5.7-1.8.2-3.5 1.1-4.7 2.5-1.2 1.4-1.9 3.3-1.7 5.2 1.9.1 3.7-.8 4.6-2z"/>
      </svg>
    </div>
    
    <div class="ios-update-content" style="text-align: center; color: white; width: 80%; max-width: 400px;">
      <div class="update-title" style="font-size: 22px; font-weight: 300; margin-bottom: 10px;">
        Software Update
      </div>
      <div class="update-version" style="font-size: 16px; color: #999; margin-bottom: 30px;">
        iOS 18.2.1
      </div>
      
      <div class="progress-ring-container" style="margin-bottom: 30px;">
        <svg class="progress-ring" width="120" height="120" style="transform: rotate(-90deg);">
          <circle class="progress-ring-bg" stroke="#333" stroke-width="8" fill="transparent" r="52" cx="60" cy="60"/>
          <circle class="progress-ring-fill" stroke="#0A84FF" stroke-width="8" fill="transparent" r="52" cx="60" cy="60"
            stroke-dasharray="326.56" stroke-dashoffset="326.56" stroke-linecap="round"/>
        </svg>
        <div class="progress-percent" style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          font-weight: 300;
        ">0%</div>
      </div>
      
      <div class="update-status" style="font-size: 14px; color: #999; margin-bottom: 20px;">
        Preparing update...
      </div>
      
      <div class="time-remaining" style="font-size: 13px; color: #666; margin-bottom: 40px;">
        About 15 minutes remaining
      </div>
      
      <div class="panic-controls" style="margin-top: 30px;">
        <button class="ios-btn" id="panicModeBtn" style="
          background: transparent;
          border: 1px solid #333;
          color: #999;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 14px;
          cursor: pointer;
          margin-right: 10px;
        ">🚨 Enable Panic Mode</button>
        
        <button class="ios-btn" id="resetUpdateBtn" style="
          background: transparent;
          border: 1px solid #333;
          color: #666;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 14px;
          cursor: pointer;
        ">↻ Reset</button>
      </div>
    </div>
    
    <div class="panic-overlay" style="
      position: absolute;
      inset: 0;
      background: #000;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 10;
    ">
      <div style="font-size: 60px; margin-bottom: 20px;">⚠️</div>
      <div class="panic-title" style="font-size: 24px; color: #ff3b30; font-weight: 600; margin-bottom: 15px;">
        Update Failed
      </div>
      <div class="panic-message" style="font-size: 16px; color: white; text-align: center; max-width: 300px; margin-bottom: 30px;">
        An error occurred while installing the update. Your device will restart.
      </div>
      <div class="panic-code" style="font-family: monospace; font-size: 12px; color: #666;">
        Error: 0xE8000015
      </div>
      <div class="panic-spinner" style="margin-top: 30px;">
        <div style="width: 30px; height: 30px; border: 3px solid #333; border-top-color: #ff3b30; border-radius: 50%; animation: spin 1s linear infinite;"></div>
      </div>
    </div>
  `;

  // Make progress ring container relative for absolute positioning
  const ringContainer = container.querySelector(".progress-ring-container");
  ringContainer.style.position = "relative";
  ringContainer.style.display = "inline-block";

  els.stage.appendChild(container);
  addGlitch();

  // Start endless update loop
  startIOSUpdateLoop(container);
}

function startIOSUpdateLoop(container) {
  const progressRing = container.querySelector(".progress-ring-fill");
  const progressPercent = container.querySelector(".progress-percent");
  const updateStatus = container.querySelector(".update-status");
  const timeRemaining = container.querySelector(".time-remaining");
  const panicBtn = container.querySelector("#panicModeBtn");
  const resetBtn = container.querySelector("#resetUpdateBtn");
  const panicOverlay = container.querySelector(".panic-overlay");

  const circumference = 326.56;
  let progress = 0;
  let isPanicMode = false;
  let updateInterval;

  const statusMessages = [
    "Preparing update...",
    "Downloading iOS 18.2.1...",
    "Verifying update...",
    "Extracting files...",
    "Installing system components...",
    "Optimizing system...",
    "Updating firmware...",
    "Finalizing installation...",
    "Restarting services...",
    "Almost done..."
  ];

  function updateProgress() {
    if (isPanicMode) return;

    // Progress goes up slowly, but resets before reaching 100%
    progress += Math.random() * 0.8 + 0.2;

    // Reset at random point between 85-95% to create "endless" effect
    if (progress >= 85 + Math.random() * 10) {
      progress = Math.random() * 15;
      updateStatus.textContent = "Verifying update integrity...";
      timeRemaining.textContent = "Restarting download...";
      showToast("Update verification failed. Retrying...", "warning");
    }

    const offset = circumference - (progress / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
    progressPercent.textContent = `${Math.floor(progress)}%`;

    // Update status message
    const statusIndex = Math.floor(progress / 10);
    if (statusMessages[statusIndex]) {
      updateStatus.textContent = statusMessages[statusIndex];
    }

    // Update time remaining (fake)
    const mins = Math.floor(15 - (progress / 100) * 12);
    timeRemaining.textContent = `About ${mins} minutes remaining`;
  }

  updateInterval = setInterval(updateProgress, 200);

  // Panic Mode Button
  panicBtn.addEventListener("click", () => {
    isPanicMode = !isPanicMode;

    if (isPanicMode) {
      panicBtn.textContent = "✓ Panic Mode On";
      panicBtn.style.borderColor = "#ff3b30";
      panicBtn.style.color = "#ff3b30";

      // Show panic overlay after a delay
      setTimeout(() => {
        panicOverlay.style.display = "flex";
        clearInterval(updateInterval);

        // Cycle through panic messages
        const panicMessages = [
          { title: "Update Failed", msg: "An error occurred while installing the update.", code: "0xE8000015" },
          { title: "Storage Full", msg: "Not enough space to complete the update.", code: "0xE8000084" },
          { title: "Connection Lost", msg: "Unable to verify update with Apple servers.", code: "0xE80000A6" },
          { title: "Battery Too Low", msg: "Connect to power to continue update.", code: "0xE8000013" }
        ];

        let panicIndex = 0;
        setInterval(() => {
          if (!isPanicMode) return;
          const panic = panicMessages[panicIndex % panicMessages.length];
          container.querySelector(".panic-title").textContent = panic.title;
          container.querySelector(".panic-message").textContent = panic.msg;
          container.querySelector(".panic-code").textContent = `Error: ${panic.code}`;
          panicIndex++;
        }, 3000);

      }, 1500);
    } else {
      panicBtn.textContent = "🚨 Enable Panic Mode";
      panicBtn.style.borderColor = "#333";
      panicBtn.style.color = "#999";
      panicOverlay.style.display = "none";

      // Restart update loop
      progress = 0;
      updateInterval = setInterval(updateProgress, 200);
    }
  });

  // Reset Button
  resetBtn.addEventListener("click", () => {
    progress = 0;
    isPanicMode = false;
    panicBtn.textContent = "🚨 Enable Panic Mode";
    panicBtn.style.borderColor = "#333";
    panicBtn.style.color = "#999";
    panicOverlay.style.display = "none";
    progressRing.style.strokeDashoffset = circumference;
    progressPercent.textContent = "0%";
    updateStatus.textContent = "Preparing update...";
    timeRemaining.textContent = "About 15 minutes remaining";

    clearInterval(updateInterval);
    updateInterval = setInterval(updateProgress, 200);

    showToast("Update reset. Starting over...", "info");
  });
}


function runAndroidScenario() {
  clearStage();
  const card = buildAndroidSim();
  els.stage.appendChild(card);
  addGlitch();
}

function runWinScenario() {
  clearStage();
  const ui = buildWindows11UpdateUI();
  els.stage.appendChild(ui);
}

// Windows 11 Update Simulation UI
function buildWindows11UpdateUI() {
  const container = document.createElement("div");
  container.className = "win11-settings";
  container.style.cssText = `
    width: 100%;
    max-width: 1100px;
    height: 700px;
    background: linear-gradient(135deg, #f3f3f3 0%, #e8e8e8 100%);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', system-ui, sans-serif;
  `;

  const username = state.customTargetName || "A test account";

  container.innerHTML = `
    <!-- Windows Title Bar -->
    <div style="
      background: #f3f3f3;
      padding: 8px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e0e0e0;
    ">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="color: #666; font-size: 14px;">←</span>
        <span style="color: #333; font-size: 13px;">Settings</span>
      </div>
      <div style="display: flex; gap: 0;">
        <div style="padding: 8px 18px; color: #333; cursor: pointer;">—</div>
        <div style="padding: 8px 18px; color: #333; cursor: pointer;">☐</div>
        <div style="padding: 8px 18px; color: #333; cursor: pointer;" class="win-close">✕</div>
      </div>
    </div>

    <!-- Main Content -->
    <div style="display: flex; flex: 1; overflow: hidden;">
      
      <!-- Sidebar -->
      <div style="
        width: 280px;
        background: #f9f9f9;
        padding: 20px 12px;
        border-right: 1px solid #e5e5e5;
        overflow-y: auto;
      ">
        <!-- User Profile -->
        <div style="
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          cursor: pointer;
        ">
          <div style="
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #0078d4, #00bcf2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
          ">${username.charAt(0).toUpperCase()}</div>
          <div>
            <div style="color: #333; font-size: 13px; font-weight: 500;">${username}</div>
            <div style="color: #666; font-size: 11px;">Local Account</div>
          </div>
        </div>

        <!-- Search Bar -->
        <div style="
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          padding: 10px 15px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        ">
          <span style="color: #999;">🔍</span>
          <span style="color: #999; font-size: 13px;">Find a setting</span>
        </div>

        <!-- Navigation Items -->
        <div class="win-nav-items">
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">💻</span>
            <span style="font-size: 13px;">System</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">📶</span>
            <span style="font-size: 13px;">Bluetooth & devices</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">🌐</span>
            <span style="font-size: 13px;">Network & internet</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">🎨</span>
            <span style="font-size: 13px;">Personalization</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">📱</span>
            <span style="font-size: 13px;">Apps</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">👤</span>
            <span style="font-size: 13px;">Accounts</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">🕐</span>
            <span style="font-size: 13px;">Time & language</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">🎮</span>
            <span style="font-size: 13px;">Gaming</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">♿</span>
            <span style="font-size: 13px;">Accessibility</span>
          </div>
          <div class="win-nav-item" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; color: #333;">
            <span style="font-size: 16px;">🔒</span>
            <span style="font-size: 13px;">Privacy & security</span>
          </div>
          <div class="win-nav-item active" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 6px; cursor: pointer; background: rgba(0, 120, 212, 0.1); border-left: 3px solid #0078d4;">
            <span style="font-size: 16px; color: #0078d4;">🔄</span>
            <span style="font-size: 13px; color: #0078d4; font-weight: 600;">Windows Update</span>
          </div>
        </div>
      </div>

      <!-- Main Panel -->
      <div style="flex: 1; background: white; padding: 30px 40px; overflow-y: auto;">
        <h1 style="margin: 0 0 25px 0; font-size: 28px; font-weight: 600; color: #1a1a1a;">Windows Update</h1>

        <!-- Update Available Card -->
        <div style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background: #f8f8f8;
          border-radius: 8px;
          margin-bottom: 25px;
        ">
          <div style="display: flex; align-items: center; gap: 15px;">
            <div style="
              width: 50px;
              height: 50px;
              border: 3px solid #0078d4;
              border-radius: 50%;
              border-top-color: transparent;
              animation: spin 1s linear infinite;
            " id="updateSpinner"></div>
            <div>
              <div style="font-size: 16px; font-weight: 600; color: #1a1a1a;">Updates available</div>
              <div style="font-size: 13px; color: #666;" id="lastChecked">Last checked: Today, ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          </div>
          <button id="downloadBtn" style="
            background: #0078d4;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-size: 13px;
            cursor: pointer;
            font-weight: 500;
          ">Download & install all</button>
        </div>

        <!-- Update Item -->
        <div style="
          padding: 15px 20px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-left: 3px solid #0078d4;
          border-radius: 6px;
          margin-bottom: 20px;
        " id="updateItem">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 13px; color: #333;">
              2024-01 Cumulative Update Preview for Windows 11 Version 23H2 for x64-based Systems (KB5034204)
            </div>
            <div style="font-size: 12px; color: #0078d4;" id="downloadStatus">Downloading - 0%</div>
          </div>
          <div style="margin-top: 10px; background: #e5e5e5; height: 4px; border-radius: 2px; overflow: hidden;">
            <div id="progressBar" style="width: 0%; height: 100%; background: #0078d4; transition: width 0.3s;"></div>
          </div>
        </div>

        <!-- More Options Section -->
        <h3 style="font-size: 14px; font-weight: 600; color: #1a1a1a; margin: 30px 0 15px 0;">More options</h3>

        <!-- Option Cards -->
        <div style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          margin-bottom: 10px;
        ">
          <div style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 20px;">📢</span>
            <div>
              <div style="font-size: 13px; color: #333;">Get the latest updates as soon as they're available</div>
              <div style="font-size: 12px; color: #666;">Be among the first to get the latest non-security updates, fixes, and improvements.</div>
            </div>
          </div>
          <div style="
            width: 44px;
            height: 22px;
            background: #0078d4;
            border-radius: 11px;
            position: relative;
            cursor: pointer;
          ">
            <div style="
              width: 18px;
              height: 18px;
              background: white;
              border-radius: 50%;
              position: absolute;
              top: 2px;
              right: 2px;
            "></div>
          </div>
        </div>

        <div style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          margin-bottom: 10px;
          cursor: pointer;
        " id="pauseUpdates">
          <div style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 20px;">⏸️</span>
            <span style="font-size: 13px; color: #333;">Pause updates</span>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 12px; color: #666;">Pause for 1 week</span>
            <span style="color: #999;">▼</span>
          </div>
        </div>

        <div style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          margin-bottom: 10px;
          cursor: pointer;
        " id="updateHistory">
          <div style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 20px;">📋</span>
            <span style="font-size: 13px; color: #333;">Update history</span>
          </div>
          <span style="color: #999;">›</span>
        </div>

        <div style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          margin-bottom: 10px;
          cursor: pointer;
        " id="advancedOptions">
          <div style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 20px;">⚙️</span>
            <div>
              <div style="font-size: 13px; color: #333;">Advanced options</div>
              <div style="font-size: 12px; color: #666;">Delivery optimization, optional updates, active hours, other update settings</div>
            </div>
          </div>
          <span style="color: #999;">›</span>
        </div>

        <div style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          cursor: pointer;
        " id="insiderProgram">
          <div style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 20px;">🔬</span>
            <div>
              <div style="font-size: 13px; color: #333;">Windows Insider Program</div>
              <div style="font-size: 12px; color: #666;">Get preview builds of Windows to share feedback on new features and updates</div>
            </div>
          </div>
          <span style="color: #999;">›</span>
        </div>

        <!-- Simulation Disclaimer -->
        <div style="
          margin-top: 30px;
          padding: 15px;
          background: rgba(0, 120, 212, 0.1);
          border: 1px solid rgba(0, 120, 212, 0.3);
          border-radius: 8px;
          text-align: center;
        ">
          <div style="color: #0078d4; font-size: 12px;">🎭 SIMULATION ONLY - No real system changes</div>
        </div>
      </div>
    </div>
  `;

  // Add CSS animation for spinner
  const style = document.createElement("style");
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  container.appendChild(style);

  // Add interactivity
  const downloadBtn = container.querySelector("#downloadBtn");
  const progressBar = container.querySelector("#progressBar");
  const downloadStatus = container.querySelector("#downloadStatus");
  const updateSpinner = container.querySelector("#updateSpinner");

  downloadBtn.addEventListener("click", () => {
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Installing...";
    downloadBtn.style.background = "#666";
    runWindows11Update(progressBar, downloadStatus, updateSpinner, container);
  });

  container.querySelector("#pauseUpdates").addEventListener("click", () => {
    addToast("⛔ Access Denied - Administrator required", "danger");
  });

  container.querySelector("#advancedOptions").addEventListener("click", () => {
    addToast("⚠️ Warning: System integrity check failed", "warning");
  });

  container.querySelector("#updateHistory").addEventListener("click", () => {
    addToast("📋 Update history corrupted", "warning");
  });

  container.querySelector("#insiderProgram").addEventListener("click", () => {
    addToast("🔬 Insider: You're already in our program... 😈", "info");
  });

  container.querySelector(".win-close").addEventListener("click", () => {
    addToast("❌ Nice try! This update cannot be cancelled.", "danger");
  });

  return container;
}

// Windows 11 Update Animation
function runWindows11Update(progressBar, statusEl, spinner, container) {
  const stages = [
    { pct: 5, status: "Downloading - 5%", time: 500 },
    { pct: 15, status: "Downloading - 15%", time: 800 },
    { pct: 30, status: "Downloading - 30%", time: 600 },
    { pct: 45, status: "Downloading - 45%", time: 700 },
    { pct: 60, status: "Downloading - 60%", time: 500 },
    { pct: 75, status: "Downloading - 75%", time: 600 },
    { pct: 90, status: "Downloading - 90%", time: 400 },
    { pct: 100, status: "Download complete", time: 500 },
    { pct: 100, status: "Preparing to install...", time: 1000 },
    { pct: 100, status: "Installing - Please wait...", time: 1500 },
    { pct: 100, status: "Applying changes...", time: 1000 },
    { pct: 100, status: "Configuring system...", time: 800 },
  ];

  let i = 0;

  const runStage = () => {
    if (i >= stages.length) {
      // Show BSOD after "update"
      showWindows11BSOD(container);
      return;
    }

    progressBar.style.width = stages[i].pct + "%";
    statusEl.textContent = stages[i].status;
    statusEl.style.color = stages[i].pct === 100 ? "#107c10" : "#0078d4";

    setTimeout(() => {
      i++;
      runStage();
    }, stages[i].time);
  };

  runStage();
}

// Windows 11 Fake BSOD
function showWindows11BSOD(container) {
  container.innerHTML = `
    <div style="
      width: 100%;
      height: 100%;
      background: #0078d4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 60px;
      box-sizing: border-box;
    ">
      <div style="font-size: 120px; margin-bottom: 30px;">:(</div>
      <div style="font-size: 24px; color: white; margin-bottom: 20px;">Your PC ran into a problem and needs to restart.</div>
      <div style="font-size: 16px; color: white; margin-bottom: 30px; opacity: 0.9;">We're just collecting some error info, and then we'll restart for you.</div>
      
      <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px;">
        <div style="font-size: 18px; color: white;" id="bsodProgress">0% complete</div>
      </div>

      <div style="
        display: flex;
        gap: 30px;
        align-items: flex-start;
        margin-top: 30px;
      ">
        <div style="
          width: 100px;
          height: 100px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 80px;
            height: 80px;
            background: repeating-linear-gradient(
              0deg,
              #000 0px,
              #000 4px,
              #fff 4px,
              #fff 8px
            );
          "></div>
        </div>
        <div style="color: white; font-size: 12px; max-width: 400px; line-height: 1.6;">
          <div style="margin-bottom: 10px;">For more information about this issue and possible fixes, visit</div>
          <div style="margin-bottom: 15px;">https://www.windows.com/stopcode</div>
          <div style="margin-bottom: 10px;">If you call a support person, give them this info:</div>
          <div style="font-family: monospace;">Stop code: SYSTEM_SERVICE_EXCEPTION</div>
          <div style="font-family: monospace;">What failed: win32kfull.sys</div>
        </div>
      </div>

      <div style="
        margin-top: 40px;
        padding: 15px 25px;
        background: rgba(255,255,255,0.1);
        border-radius: 8px;
      ">
        <div style="color: white; font-size: 14px;">🎭 JUST KIDDING! This is a simulation. Your PC is fine! 😂</div>
      </div>
    </div>
  `;

  // Animate the progress
  const progressEl = container.querySelector("#bsodProgress");
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.floor(Math.random() * 15) + 5;
    if (pct > 100) pct = 100;
    progressEl.textContent = pct + "% complete";

    if (pct >= 100) {
      clearInterval(interval);
      progressEl.textContent = "Restarting... (just kidding!)";
    }
  }, 800);
}

function runTVScenario() {
  clearStage();
  document.body.classList.add("crack-prank-active");
  const picker = buildCrackPicker();
  els.stage.appendChild(picker);
  addGlitch();
}

function runEmailHijackScenario() {
  clearStage();
  document.body.classList.add("email-hijack-active", "email-hijack-live");
  const card = buildEmailHijackUI();
  els.stage.appendChild(card);
  addGlitch();
}

function runFBIScenario() {
  clearStage();
  const lock = buildFBILock();
  els.stage.appendChild(lock);
}

function runPasswordCrackerScenario() {
  clearStage();
  document.body.classList.add("ui-running", "password-cracker-active");
  els.stage.classList.add("stage-centered");
  els.stage.appendChild(buildPasswordConceptPicker());
  addGlitch();
}

function runPasswordMeterScenario() {
  clearStage();
  document.body.classList.add("ui-running", "password-meter-active");
  els.stage.classList.add("stage-centered");
  openPasswordMeter({ standalone: true });
  addGlitch();
}

function buildPasswordConceptPicker() {
  const wrap = document.createElement("div");
  wrap.className = "pc-picker";
  const target = state.customTargetEmail || "MysticFox_99";
  const data = state.customPasswordData || "Local Import";
  const concepts = getPasswordConcepts();

  wrap.innerHTML = `
    <section class="pc-picker-head">
      <div>
        <div class="directory-kicker">Password Cracker</div>
        <h2>Choose a design concept</h2>
        <p>Load a fake account or data label, open the concept selector, then choose the style you want.</p>
      </div>
      <form class="pc-target-form" autocomplete="off">
        <label>
          <span>Fake email / target</span>
          <input name="pcTarget" autocomplete="off" spellcheck="false" value="${escapeMarkup(target)}" placeholder="mysticfox@example.com">
        </label>
        <label>
          <span>Fake data source</span>
          <input name="pcData" autocomplete="off" spellcheck="false" value="${escapeMarkup(data)}" placeholder="Local Import">
        </label>
      </form>
    </section>
    <section class="pc-concepts-shell collapsed">
      <button class="pc-concepts-toggle" type="button" aria-expanded="false">
        <span>
          <b>Password Cracker Concepts</b>
          <small>Click to show all design concepts</small>
        </span>
        <i aria-hidden="true">+</i>
      </button>
      <div class="pc-concept-grid">
        ${concepts.map((concept) => `
          <button class="pc-concept-card ${concept.tint} is-ready" type="button" data-concept="${concept.id}">
            <span class="pc-concept-label">${concept.label}</span>
            <strong>${concept.name}</strong>
            <span class="pc-mini-preview">
              <span class="pc-mini-top"></span>
              <span class="pc-mini-body">
                <span class="pc-mini-ring">${concept.pct}</span>
                <span class="pc-mini-lines"><i></i><i></i><i></i></span>
              </span>
              <span class="pc-mini-nav"><i></i><i></i><i></i></span>
            </span>
            <small>Run animated ${concept.name}</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;

  wrap.addEventListener("click", (event) => {
    const toggle = event.target instanceof HTMLElement ? event.target.closest(".pc-concepts-toggle") : null;
    if (toggle) {
      const shell = toggle.closest(".pc-concepts-shell");
      const open = shell?.classList.toggle("collapsed") === false;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("i").textContent = open ? "-" : "+";
      toggle.querySelector("small").textContent = open ? "Choose one concept below" : "Click to show all design concepts";
      return;
    }
    const card = event.target instanceof HTMLElement ? event.target.closest(".pc-concept-card") : null;
    if (!card) return;
    const form = wrap.querySelector(".pc-target-form");
    const targetInput = form?.elements?.pcTarget;
    const dataInput = form?.elements?.pcData;
    state.customTargetEmail = targetInput?.value?.trim() || "MysticFox_99";
    state.customPasswordData = dataInput?.value?.trim() || "Local Import";
    launchPasswordConcept(card.dataset.concept || "c");
  });

  return wrap;
}

function getPasswordConcepts() {
  return [
    { id: "a", label: "Concept A", name: "Retro Terminal", tint: "green", pct: "63", accent: "#21ff58", status: "Testing combinations..." },
    { id: "b", label: "Concept B", name: "Cyber Dashboard", tint: "blue", pct: "72", accent: "#37b8ff", status: "Testing combinations" },
    { id: "c", label: "Concept C", name: "Mobile Vault", tint: "purple", pct: "58", accent: "#9b5cff", status: "Scanning..." },
    { id: "d", label: "Concept D", name: "Red Security Console", tint: "red", pct: "46", accent: "#ff4e45", status: "Testing keyspace..." },
    { id: "e", label: "Concept E", name: "Arcade Prank Lab", tint: "arcade", pct: "83", accent: "#f6db2d", status: "Guessing combinations..." },
  ];
}

function launchPasswordConcept(conceptId = "c") {
  els.stage.innerHTML = "";
  document.body.classList.add("password-cracker-live");
  els.stage.classList.add("stage-centered");
  if (conceptId === "e") {
    const lab = buildArcadePrankLab();
    els.stage.appendChild(lab);
    startArcadePrankLab(lab);
    return;
  }
  if (conceptId === "a") {
    const term = buildRetroTerminal();
    els.stage.appendChild(term);
    return;
  }
  if (conceptId === "b") {
    const dash = buildCyberDashboard();
    els.stage.appendChild(dash);
    return;
  }
  const frame = buildPasswordConceptFrame(conceptId);
  els.stage.appendChild(frame);
  startPasswordConceptSimulation(frame);
}

function buildPasswordConceptFrame(conceptId = "c") {
  const concepts = getPasswordConcepts();
  const concept = concepts.find((item) => item.id === conceptId) || concepts[2];
  const frame = document.createElement("div");
  frame.className = `pc-runtime pc-theme-${concept.id}`;
  const rawTarget = state.customTargetEmail || "MysticFox_99";
  const dataLabel = state.customPasswordData || "Local Import";
  const targetName = rawTarget.includes("@") ? rawTarget.split("@")[0] : rawTarget;
  const hashTail = makeFakeHash(12);
  const safeTarget = escapeMarkup(targetName);
  const safeData = escapeMarkup(dataLabel);
  const safeHash = escapeMarkup(hashTail);

  frame.innerHTML = `
    <section class="pc-landscape-shell" aria-label="${escapeMarkup(concept.name)} desktop simulation">
      <header class="pc-landscape-head">
        <div>
          <span>${escapeMarkup(concept.label)} - ${escapeMarkup(concept.name)}</span>
          <h2>Password Cracker</h2>
        </div>
        <strong>SIMULATION MODE</strong>
      </header>

      <div class="pc-landscape-grid">
        <aside class="pc-profile-panel">
          <div class="pc-avatar xl" aria-hidden="true"></div>
          <div class="pc-panel-title">Target Profile</div>
          <strong>${safeTarget}</strong>
          <small>${safeData}</small>
          <dl>
            <div><dt>Hash type</dt><dd>FAKE-${concept.id.toUpperCase()}${makeFakeHash(3)}</dd></div>
            <div><dt>Source</dt><dd>Imported List</dd></div>
            <div><dt>Safety</dt><dd>Visual only</dd></div>
          </dl>
        </aside>

        <main class="pc-work-panel">
          <div class="pc-panel-title">${concept.id === "e" ? "Guessing combinations..." : "Simulation Progress"}</div>
          <div class="pc-work-main">
            <div>
              <div class="pc-big-pct" data-pc-pct>${concept.pct}%</div>
              <div class="pc-status-line" data-pc-status>${escapeMarkup(concept.status)}</div>
              <div class="pc-wide-meter"><span data-pc-bar style="width: ${concept.pct}%"></span></div>
            </div>
            <div class="pc-ring-wrap desktop-ring" aria-hidden="true">
              <div class="pc-ring" data-pc-ring style="--pct: ${concept.pct};">
                <div class="pc-ring-inner"><span data-pc-pct>${concept.pct}%</span></div>
              </div>
              <div class="pc-ring-trails"><i></i><i></i><i></i></div>
            </div>
          </div>
          <div class="pc-step-list">
            <span class="done">Initializing modules <b>OK</b></span>
            <span class="done">Loading wordlist <b>OK</b></span>
            <span class="active" data-pc-status>${escapeMarkup(concept.status)}</span>
            <span>Finalizing results <b>WAITING</b></span>
          </div>
        </main>

        <aside class="pc-live-panel">
          <div class="pc-panel-title">Live Feed</div>
          <div class="pc-live-log" data-pc-log>
            <div><span>10:22:31</span> Module online</div>
            <div><span>10:22:32</span> Wordlist loaded</div>
            <div><span>10:22:33</span> Hash captured</div>
          </div>
        </aside>
      </div>

      <footer class="pc-landscape-foot">
        <span>This is a prank simulation only. No real credentials are used or exposed.</span>
        <b>No real access</b>
      </footer>
    </section>

    <section class="pc-mobile-vault" aria-label="${escapeMarkup(concept.name)} mobile simulation">
      <div class="pc-phone-screen">
      <div class="pc-statusbar" aria-hidden="true">
        <span>10:45</span>
        <span class="pc-phone-icons"><i></i><b>5G</b><em>89</em></span>
      </div>

      <header class="pc-vault-header">
        <div>
          <h2>Password Cracker</h2>
        </div>
        <span>${concept.id === "e" ? "FUN MODE" : "PRANK MODE"}</span>
      </header>

      <section class="pc-vault-field">
        <div class="pc-field-title">TARGET ACCOUNT</div>
        <div class="pc-account-row">
          <div class="pc-avatar" aria-hidden="true"></div>
          <div>
            <strong>${safeTarget}</strong>
            <small>${safeData}</small>
          </div>
        </div>
      </section>

      <section class="pc-vault-field">
        <div class="pc-field-title">HASH PREVIEW (FAKE)</div>
        <div class="pc-hash-pill">a1b2c3d4e5f6...${safeHash}</div>
      </section>

      <section class="pc-scan-block">
        <div class="pc-field-title">SCAN STATUS</div>
        <div class="pc-ring-wrap" aria-hidden="true">
          <div class="pc-ring" style="--pct: ${concept.pct};">
            <div class="pc-ring-inner"><span data-pc-pct>${concept.pct}%</span></div>
          </div>
          <div class="pc-ring-trails"><i></i><i></i><i></i></div>
        </div>
        <div class="pc-scan-copy" data-pc-status>${escapeMarkup(concept.status)}</div>
      </section>

      <section class="pc-matches">
        <div class="pc-field-title">POSSIBLE MATCHES</div>
        <div class="pc-match-row">
          <span>*******</span>
          <span>*****3e</span>
          <span>******7</span>
        </div>
      </section>

      <section class="pc-disclaimer">
        <div class="pc-shield" aria-hidden="true"></div>
        <p>This is a simulation for fun only.<br>No real hacking. No real access.</p>
      </section>

      <nav class="pc-vault-nav" aria-label="Password vault tabs">
        <button class="active" type="button"><span class="pc-nav-lock"></span><b>Vault</b></button>
        <button type="button"><span class="pc-nav-scan"></span><b>Scan</b></button>
        <button type="button"><span class="pc-nav-results"></span><b>Results</b></button>
        <button type="button"><span class="pc-nav-settings"></span><b>Settings</b></button>
      </nav>
      </div>
    </section>
  `;

  return frame;
}

function startPasswordConceptSimulation(frame) {
  const pctEls = [...frame.querySelectorAll("[data-pc-pct]")];
  const rings = [...frame.querySelectorAll(".pc-ring, [data-pc-ring]")];
  const statuses = [...frame.querySelectorAll("[data-pc-status]")];
  const bars = [...frame.querySelectorAll("[data-pc-bar]")];
  const matches = [...frame.querySelectorAll(".pc-match-row span")];
  const logs = [...frame.querySelectorAll("[data-pc-log]")];
  const steps = [
    { t: 0, pct: 12, copy: "Opening local vault..." },
    { t: 900, pct: 24, copy: "Loading fake hash..." },
    { t: 1800, pct: 37, copy: "Testing safe patterns..." },
    { t: 2800, pct: 49, copy: "Matching preview..." },
    { t: 3900, pct: 58, copy: "Scanning..." },
    { t: 5200, pct: 71, copy: "Narrowing matches..." },
    { t: 6600, pct: 84, copy: "Verifying prank data..." },
    { t: 8100, pct: 96, copy: "Almost there..." },
    { t: 9600, pct: 100, copy: "Simulation complete" },
  ];

  steps.forEach((step, index) => {
    const timer = setTimeout(() => {
      if (!state.running || !frame.isConnected) return;
      pctEls.forEach((el) => el.textContent = `${step.pct}%`);
      rings.forEach((ring) => ring.style.setProperty("--pct", String(step.pct)));
      statuses.forEach((status) => status.textContent = step.copy);
      bars.forEach((bar) => bar.style.width = `${step.pct}%`);
      matches.forEach((match, matchIndex) => {
        const gate = 36 + matchIndex * 22;
        match.classList.toggle("active", step.pct >= gate);
      });
      logs.forEach((log) => {
        const line = document.createElement("div");
        line.innerHTML = `<span>10:22:${String(34 + index).padStart(2, "0")}</span> ${escapeMarkup(step.copy)}`;
        log.appendChild(line);
        log.scrollTop = log.scrollHeight;
      });
      frame.dataset.phase = String(index);
      if (step.pct === 100) showToast("Password Cracker simulation complete.", "success");
    }, step.t / state.speed);
    state.timers.push(timer);
  });
}

function getArcadeTargetName() {
  const raw = (state.customTargetEmail || "FunStudent_07").trim();
  const base = raw.includes("@") ? raw.split("@")[0] : raw;
  return base.slice(0, 18) || "FunStudent_07";
}

// Concept E — Arcade Prank Lab. A toy-like, game-show take on the password
// cracker. Tiles flip from "?" to letters with playful check / X verdicts,
// then a confetti "POSSIBLE MATCH!" reveal makes the prank land kindly.
function buildArcadePrankLab() {
  const frame = document.createElement("div");
  frame.className = "pc-arcade";
  const target = escapeMarkup(getArcadeTargetName());
  const rows = [
    { id: "r1", chars: ["F", "U", "N", "!", "2", "0", "2", "5"], kind: "alnum" },
    { id: "r2", chars: ["S", "T", "U", "D", "E", "N", "T", "?"], kind: "alpha" },
    { id: "r3", chars: ["1", "2", "3", "4", "5", "6", "7", "8"], kind: "num" },
  ];
  const tileRow = (row) => `
    <div class="apl-tile-row" data-row="${row.id}">
      ${row.chars.map((ch, i) => `
        <span class="apl-tile" data-tile data-char="${escapeMarkup(ch)}" style="--i:${i}">
          <b class="apl-tile-face">?</b>
          <i class="apl-tile-mark" aria-hidden="true"></i>
        </span>`).join("")}
    </div>`;

  frame.innerHTML = `
    <div class="apl-stage" role="group" aria-label="Arcade Prank Lab password cracker simulation">
      <div class="apl-sparks" aria-hidden="true"></div>

      <header class="apl-top">
        <div class="apl-logo">
          <span class="apl-logo-lock" aria-hidden="true">🔒</span>
          <span class="apl-logo-text"><b>PASSWORD CRACKER</b><i>PRANK LAB</i></span>
        </div>
        <div class="apl-top-controls">
          <button class="apl-sim-pill" type="button" data-apl-mode aria-pressed="true">
            <span class="apl-dot"></span> SIMULATION MODE
          </button>
          <button class="apl-icon-btn" type="button" data-apl-sound aria-label="Toggle sound">🔊</button>
          <button class="apl-icon-btn" type="button" data-apl-close aria-label="Exit simulation">✕</button>
        </div>
      </header>

      <div class="apl-body">
        <aside class="apl-mascot-col">
          <div class="apl-mascot" aria-hidden="true">
            <div class="apl-mascot-shackle"></div>
            <div class="apl-mascot-face">
              <span class="apl-eye left"></span>
              <span class="apl-eye right wink"></span>
              <span class="apl-keyhole"></span>
              <span class="apl-smile"></span>
            </div>
          </div>
          <div class="apl-target">
            <span class="apl-target-k">🎯 TARGET</span>
            <strong>${target}</strong>
          </div>
          <div class="apl-progress">
            <div class="apl-progress-track"><span class="apl-progress-fill" data-apl-bar></span></div>
            <div class="apl-progress-pct"><span data-apl-pct>0</span>%</div>
          </div>
        </aside>

        <main class="apl-grid-col">
          <h3 class="apl-grid-title"><span data-apl-status>GUESSING COMBINATIONS</span><i class="apl-ellipsis"><i></i><i></i><i></i></i></h3>
          <div class="apl-tiles">
            ${rows.map(tileRow).join("")}
          </div>
        </main>

        <aside class="apl-match-col" data-apl-matchcol>
          <div class="apl-match-title">POSSIBLE MATCH!</div>
          <div class="apl-match-card">
            <span class="apl-match-confetti" aria-hidden="true"></span>
            <span class="apl-match-word" data-apl-reveal>• • • • •</span>
          </div>
          <button class="apl-btn reveal" type="button" data-apl-revealbtn disabled>
            <span data-apl-revealtxt>CRACKING…</span>
          </button>
          <button class="apl-btn reset" type="button" data-apl-reset>RESET SIMULATION</button>
        </aside>
      </div>

      <footer class="apl-foot" data-apl-foot>
        <span class="apl-foot-badge" aria-hidden="true">⏳</span>
        <span data-apl-foottxt>Brute-forcing combinations… keep this window open until the match completes.</span>
      </footer>
    </div>
  `;

  frame.querySelector("[data-apl-close]")?.addEventListener("click", exitToHome);
  frame.querySelector("[data-apl-mode]")?.addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", String(on));
    showToast(on ? "Simulation mode on (always on — it's fake!)" : "Still a simulation. 100% fake.", "info");
    btn.setAttribute("aria-pressed", "true");
  });
  frame.querySelector("[data-apl-sound]")?.addEventListener("click", (e) => {
    state.sound = !state.sound;
    if (els.soundToggle) els.soundToggle.checked = state.sound;
    e.currentTarget.textContent = state.sound ? "🔊" : "🔇";
  });
  frame.querySelector("[data-apl-reset]")?.addEventListener("click", () => {
    clearTimers();
    const fresh = buildArcadePrankLab();
    frame.replaceWith(fresh);
    startArcadePrankLab(fresh);
  });
  frame.querySelector("[data-apl-revealbtn]")?.addEventListener("click", () => {
    revealArcadePrank(frame);
  });

  return frame;
}

function startArcadePrankLab(frame) {
  const tiles = [...frame.querySelectorAll("[data-tile]")];
  const bar = frame.querySelector("[data-apl-bar]");
  const pct = frame.querySelector("[data-apl-pct]");
  const statusEl = frame.querySelector("[data-apl-status]");
  // A couple of tiles get a playful red "X" before flipping to a check —
  // it reads like the cracker briefly guessed wrong, which sells the bit.
  const wrongIndexes = new Set([11, 15]);
  const total = tiles.length;
  const stepGap = 360;

  const statusBeats = ["GUESSING COMBINATIONS", "TRYING SILLY PASSWORDS", "NARROWING IT DOWN", "ALMOST GOT IT"];

  tiles.forEach((tile, idx) => {
    const t = setTimeout(() => {
      if (!state.running || !frame.isConnected) return;
      const wrong = wrongIndexes.has(idx);
      tile.classList.add(wrong ? "is-wrong" : "is-right");
      tile.querySelector(".apl-tile-face").textContent = tile.dataset.char;
      const progress = Math.round(((idx + 1) / total) * 100);
      if (bar) bar.style.width = `${progress}%`;
      if (pct) pct.textContent = String(progress);
      if (statusEl) statusEl.textContent = statusBeats[Math.min(statusBeats.length - 1, Math.floor((idx / total) * statusBeats.length))];
      playArcadeBlip(wrong);
      // Wrong tiles correct themselves a beat later — keeps the grid all-green.
      if (wrong) {
        const fix = setTimeout(() => {
          if (!frame.isConnected) return;
          tile.classList.remove("is-wrong");
          tile.classList.add("is-right");
        }, 520 / state.speed);
        state.timers.push(fix);
      }
      if (idx === total - 1) {
        if (statusEl) statusEl.textContent = "MATCH FOUND";
        frame.querySelector("[data-apl-matchcol]")?.classList.add("is-armed");
        // Crack is done — only now can the prank be revealed.
        const revealBtn = frame.querySelector("[data-apl-revealbtn]");
        const revealTxt = frame.querySelector("[data-apl-revealtxt]");
        if (revealBtn) revealBtn.disabled = false;
        if (revealTxt) revealTxt.textContent = "REVEAL";
        const footTxt = frame.querySelector("[data-apl-foottxt]");
        if (footTxt) footTxt.textContent = "Match found. Press REVEAL to show the password.";
      }
    }, (idx * stepGap) / state.speed);
    state.timers.push(t);
  });
}

function revealArcadePrank(frame) {
  const revealBtn = frame.querySelector("[data-apl-revealbtn]");
  // Reveal is locked until the crack animation has finished.
  if (revealBtn?.disabled) {
    showToast("Still cracking… let the match finish first.", "info");
    return;
  }
  const revealEl = frame.querySelector("[data-apl-reveal]");
  const matchCol = frame.querySelector("[data-apl-matchcol]");
  if (!revealEl) return;
  revealEl.textContent = "FUN!2025";
  matchCol?.classList.add("is-revealed");
  // The "it's a prank" punchline lands ONLY now — not before.
  frame.classList.add("is-revealed");
  const footBadge = frame.querySelector(".apl-foot-badge");
  const footTxt = frame.querySelector("[data-apl-foottxt]");
  if (footBadge) footBadge.textContent = "🎉";
  if (footTxt) footTxt.textContent = "Just a prank! This app is 100% safe and does not access real accounts. 😊";
  burstArcadeConfetti(frame);
  showToast("🎉 Gotcha! This is a SimDeck prank — no real password.", "success");
}

function burstArcadeConfetti(frame) {
  const host = frame.querySelector(".apl-sparks");
  if (!host) return;
  const colors = ["#f6db2d", "#34d36b", "#37b8ff", "#ff5d73", "#b67bff"];
  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("i");
    piece.className = "apl-confetti";
    piece.style.setProperty("--x", `${randomInt(8, 92)}%`);
    piece.style.setProperty("--d", `${randomInt(700, 1500)}ms`);
    piece.style.setProperty("--r", `${randomInt(-220, 220)}deg`);
    piece.style.background = colors[i % colors.length];
    host.appendChild(piece);
    const cleanup = setTimeout(() => piece.remove(), 1700);
    state.timers.push(cleanup);
  }
}

function playArcadeBlip(wrong) {
  if (!state.sound) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = (playArcadeBlip._ctx ||= new Ctx());
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = wrong ? "sawtooth" : "triangle";
    osc.frequency.value = wrong ? 180 : 620 + Math.random() * 180;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.13);
  } catch (_) { /* audio is best-effort */ }
}

// Concept A — Retro Terminal. A green-on-black CRT password cracker that
// brute-forces character by character like an old-school dictionary attack.
// It looks real the whole way through; the "it's a prank" line only appears
// once the crack completes (the punchline).
function getRetroTargetName() {
  const raw = (state.customTargetEmail || "CoolDude_23").trim();
  const base = raw.includes("@") ? raw.split("@")[0] : raw;
  return base.slice(0, 18) || "CoolDude_23";
}

function randChar(set) {
  return set[randomInt(0, set.length - 1)];
}

function randomRetroSecret() {
  const pool = ["LOL_GotYou_99", "NachoP@ssw0rd", "Ch1ckenNugget7", "D3finitelyReal!", "S3cur3Panda_42", "Tacos4Lyfe_88"];
  return pool[randomInt(0, pool.length - 1)];
}

function buildRetroTerminal() {
  const frame = document.createElement("div");
  frame.className = "pc-retro is-idle";
  const target = escapeMarkup(getRetroTargetName());
  frame.dataset.target = getRetroTargetName();
  frame.dataset.recovered = randomRetroSecret();

  frame.innerHTML = `
    <div class="rt-window" role="group" aria-label="Retro Terminal password cracker simulation">
      <div class="rt-scanlines" aria-hidden="true"></div>
      <div class="rt-titlebar">
        <span class="rt-title">PASSWORD CRACKER 1.0</span>
        <span class="rt-winbtns" aria-hidden="true">
          <i>&minus;</i><i>&#9633;</i><b data-rt-close role="button" aria-label="Exit simulation" tabindex="0">&times;</b>
        </span>
      </div>
      <div class="rt-body">
        <div class="rt-toolbar">
          <button type="button" class="rt-tb" data-rt-crack>CRACK</button>
          <button type="button" class="rt-tb" data-rt-reset>RESET</button>
          <button type="button" class="rt-tb" data-rt-opt>OPTIONS</button>
          <button type="button" class="rt-tb" data-rt-about>ABOUT</button>
        </div>

        <div class="rt-info">
          <div class="rt-info-lines">
            <div><span>TARGET USER</span><i>:</i> <b data-rt-targetuser>${target}</b></div>
            <div><span>HASH TYPE</span><i>:</i> SHA-256 (FAKE)</div>
            <div><span>DICTIONARY</span><i>:</i> 12,345 WORDS</div>
            <div><span>STATUS</span><i>:</i> <b data-rt-status class="rt-status">IDLE &mdash; AWAITING TARGET</b></div>
          </div>
          <div class="rt-lock" data-rt-lock aria-hidden="true">
            <span class="rt-lock-shackle"></span>
            <span class="rt-lock-body"><i class="rt-keyhole"></i></span>
          </div>
        </div>

        <form class="rt-setup" data-rt-setup autocomplete="off">
          <div class="rt-setup-title">// ENTER FAKE TARGET DETAILS</div>
          <label class="rt-field">
            <span>TARGET USER / HANDLE</span>
            <input name="rtTarget" maxlength="18" spellcheck="false" placeholder="CoolDude_23" value="${target}">
          </label>
          <label class="rt-field">
            <span>PASSWORD TO "RECOVER"</span>
            <input name="rtSecret" maxlength="16" spellcheck="false" placeholder="leave blank = random">
          </label>
          <button type="submit" class="rt-start">&#9658; START CRACK</button>
          <p class="rt-setup-note">All details are fake &mdash; nothing leaves this browser. The crack runs for about a minute.</p>
        </form>

        <div class="rt-run">
          <div class="rt-section">
            <div class="rt-section-title">ATTEMPT GRID</div>
            <div class="rt-grid" data-rt-grid></div>
          </div>

          <div class="rt-section">
            <div class="rt-section-title">CRACK PROGRESS <b class="rt-pct" data-rt-pct>0%</b></div>
            <div class="rt-meter"><span class="rt-meter-fill" data-rt-bar></span></div>
            <div class="rt-line" data-rt-line>Awaiting start...</div>
          </div>
        </div>

        <div class="rt-foot" data-rt-foot>
          <span class="rt-foot-icon" aria-hidden="true">&gt;</span>
          <span data-rt-foottxt>Enter fake details above, then press START CRACK to begin the simulation.</span>
        </div>
      </div>
    </div>
  `;

  const toIdle = () => {
    clearTimers();
    if (frame._rtTick) { clearInterval(frame._rtTick); frame._rtTick = null; }
    const fresh = buildRetroTerminal();
    frame.replaceWith(fresh);
  };
  const startNow = () => beginRetroCrack(frame);

  const close = frame.querySelector("[data-rt-close]");
  close?.addEventListener("click", exitToHome);
  close?.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") exitToHome(); });
  frame.querySelector("[data-rt-setup]")?.addEventListener("submit", (e) => { e.preventDefault(); startNow(); });
  frame.querySelector("[data-rt-crack]")?.addEventListener("click", startNow);
  frame.querySelector("[data-rt-reset]")?.addEventListener("click", toIdle);
  frame.querySelector("[data-rt-opt]")?.addEventListener("click", () => showToast("Options: dictionary, leetspeak rules, GPU threads (all simulated).", "info"));
  frame.querySelector("[data-rt-about]")?.addEventListener("click", () => showToast("PASSWORD CRACKER 1.0 — a SimDeck prank. 100% fake.", "info"));

  return frame;
}

function beginRetroCrack(frame) {
  const form = frame.querySelector("[data-rt-setup]");
  let target = (form?.elements?.rtTarget?.value || "").trim();
  let secret = (form?.elements?.rtSecret?.value || "").trim();
  if (!target) target = frame.dataset.target || "CoolDude_23";
  target = target.slice(0, 18);
  secret = secret.replace(/\s+/g, "").slice(0, 16);
  if (!secret) secret = frame.dataset.recovered || randomRetroSecret();
  frame.dataset.target = target;
  frame.dataset.recovered = secret;

  const targetEl = frame.querySelector("[data-rt-targetuser]");
  if (targetEl) targetEl.textContent = target;
  const statusEl = frame.querySelector("[data-rt-status]");
  if (statusEl) { statusEl.textContent = "RUNNING SIMULATION"; statusEl.classList.remove("granted"); }

  frame.classList.remove("is-idle", "is-cracked");
  runRetroCrack(frame, secret);
}

// Duration-driven brute-force. Runs ~60s at 1x (scaled by the speed slider),
// cycling through believable attack phases the whole time. Stays convincing
// until 100% — only then does it reveal it was a prank.
function runRetroCrack(frame, recovered) {
  const gridEl = frame.querySelector("[data-rt-grid]");
  const bar = frame.querySelector("[data-rt-bar]");
  const pct = frame.querySelector("[data-rt-pct]");
  const statusEl = frame.querySelector("[data-rt-status]");
  const lineEl = frame.querySelector("[data-rt-line]");
  const lockEl = frame.querySelector("[data-rt-lock]");
  const footEl = frame.querySelector("[data-rt-foot]");
  const footTxt = frame.querySelector("[data-rt-foottxt]");
  if (!gridEl) return;

  if (frame._rtTick) { clearInterval(frame._rtTick); frame._rtTick = null; }

  // believable running footer (the prank line only appears at completion)
  footEl?.classList.remove("rt-foot--prank");
  if (footTxt) footTxt.textContent = "linking to target node... bypassing rate limit... keep this window open.";

  const chars = recovered.split("");
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&_";
  gridEl.innerHTML = chars.map((_, i) =>
    `<span class="rt-cell" data-i="${i}"><b class="rt-cell-char">${escapeMarkup(randChar(charset))}</b><i class="rt-cell-mark" aria-hidden="true"></i></span>`
  ).join("");
  const cells = [...gridEl.querySelectorAll(".rt-cell")];
  const wrongFirst = new Set();
  while (wrongFirst.size < Math.min(2, Math.max(0, cells.length - 1))) {
    wrongFirst.add(randomInt(1, cells.length - 1));
  }

  const DURATION = 60000 / (state.speed || 1);
  const phases = [
    [0.00, "Loading dictionary (12,345 words)..."],
    [0.12, "Applying leetspeak rules (a -> @, e -> 3)..."],
    [0.26, "Hybrid mask attack: ?u ?l ?l ?d ?s ..."],
    [0.40, "GPU cluster online - 4.2 GH/s..."],
    [0.55, "Pruning weak keyspace branches..."],
    [0.70, "Bypassing login rate limiter..."],
    [0.84, "Reconstructing hash collisions..."],
    [0.94, "Almost there - locking final bytes..."],
  ];
  const fmt = (ms) => {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };

  let attempts = 0;
  let lockedCount = 0;
  const started = performance.now();

  const lockCell = (idx) => {
    const cell = cells[idx];
    if (!cell) return;
    const charEl = cell.querySelector(".rt-cell-char");
    if (wrongFirst.has(idx)) {
      cell.classList.add("is-wrong");
      charEl.textContent = randChar(charset);
      const fix = setTimeout(() => {
        if (!frame.isConnected) return;
        cell.classList.remove("is-wrong");
        cell.classList.add("is-right");
        charEl.textContent = chars[idx];
      }, 420 / (state.speed || 1));
      state.timers.push(fix);
    } else {
      cell.classList.add("is-right");
      charEl.textContent = chars[idx];
    }
  };

  const finishRetro = () => {
    cells.forEach((cell, i) => {
      cell.classList.remove("is-wrong");
      cell.classList.add("is-right");
      cell.querySelector(".rt-cell-char").textContent = chars[i];
    });
    if (bar) bar.style.width = "100%";
    if (pct) pct.textContent = "100%";
    frame.classList.add("is-cracked");
    if (statusEl) { statusEl.textContent = "ACCESS GRANTED"; statusEl.classList.add("granted"); }
    lockEl?.classList.add("is-open");
    if (lineEl) lineEl.textContent = `RECOVERED: ${recovered}`;
    if (footEl) footEl.classList.add("rt-foot--prank");
    if (footTxt) footTxt.innerHTML = "&#9888; THIS IS A PRANK SIMULATION ONLY &#9888;<br>No real passwords are accessed or stored.<br>Have fun. Stay curious. Stay kind.   :)";
    showToast("Gotcha! Fake crack complete — no real password was touched.", "success");
  };

  const tick = setInterval(() => {
    if (!state.running || !frame.isConnected) { clearInterval(tick); frame._rtTick = null; return; }
    const elapsed = performance.now() - started;
    const t = Math.min(1, elapsed / DURATION);

    const p = Math.round(t * 100);
    if (bar) bar.style.width = `${p}%`;
    if (pct) pct.textContent = `${p}%`;

    const targetLocked = Math.floor(t * chars.length);
    while (lockedCount < targetLocked) { lockCell(lockedCount); lockedCount += 1; }

    cells.forEach((cell, i) => {
      if (i >= lockedCount) cell.querySelector(".rt-cell-char").textContent = randChar(charset);
    });

    attempts += randomInt(400, 3600);
    let phase = phases[0][1];
    for (const [thr, msg] of phases) { if (t >= thr) phase = msg; }
    if (lineEl) {
      lineEl.textContent = `${phase}   ETA ${fmt(DURATION - elapsed)} · attempts ${attempts.toLocaleString()}`;
    }

    if (t >= 1) { clearInterval(tick); frame._rtTick = null; finishRetro(); }
  }, 90);
  frame._rtTick = tick;
}

// Concept B — Cyber Dashboard. A clean SOC-style console: target profile,
// a progress ring with a staged checklist, and a streaming live feed. Looks
// like a genuine credential-recovery tool — the hash is NOT labelled fake and
// the "it's a prank" disclaimer only appears once the crack hits 100%.
function getCyberDefaultUser() {
  const raw = (state.customTargetEmail || "NightOwl_42").trim();
  const base = raw.includes("@") ? raw.split("@")[0] : raw;
  return base.slice(0, 20) || "NightOwl_42";
}

function buildCyberDashboard() {
  const frame = document.createElement("div");
  frame.className = "pc-cyber is-idle";
  const user = escapeMarkup(getCyberDefaultUser());
  frame.dataset.user = getCyberDefaultUser();
  frame.dataset.sec = "Standard";
  frame.dataset.recovered = randomRetroSecret();

  frame.innerHTML = `
    <div class="cb-shell" role="group" aria-label="Cyber Dashboard password cracker simulation">
      <header class="cb-top">
        <h2 class="cb-brand">PASSWORD CRACKER</h2>
        <div class="cb-top-right">
          <span class="cb-mode"><i aria-hidden="true"></i> ENGINE ONLINE</span>
          <button type="button" class="cb-icon" data-cb-help aria-label="Help">?</button>
          <button type="button" class="cb-icon" data-cb-settings aria-label="Settings">&#9881;</button>
        </div>
      </header>

      <div class="cb-grid">
        <aside class="cb-panel cb-profile">
          <div class="cb-panel-title">TARGET PROFILE</div>
          <div class="cb-avatar" aria-hidden="true"></div>
          <div class="cb-pf"><span>Username</span><b data-cb-user>${user}</b></div>
          <div class="cb-pf"><span>Security Level</span><b data-cb-sec>Standard</b></div>
          <div class="cb-pf"><span>Hash Type</span><b>PBKDF2</b></div>
          <div class="cb-pf"><span>Source</span><b>Imported List</b></div>
          <button type="button" class="cb-change" data-cb-change>Change Target</button>
        </aside>

        <main class="cb-panel cb-center">
          <div class="cb-panel-title">CRACK PROGRESS</div>

          <form class="cb-setup" data-cb-setup autocomplete="off">
            <div class="cb-setup-grid">
              <label class="cb-field">
                <span>Username / handle</span>
                <input name="cbUser" maxlength="20" spellcheck="false" placeholder="NightOwl_42" value="${user}">
              </label>
              <label class="cb-field">
                <span>Security level</span>
                <select name="cbSec">
                  <option>Low</option>
                  <option selected>Standard</option>
                  <option>High</option>
                  <option>Maximum</option>
                </select>
              </label>
              <label class="cb-field cb-field-wide">
                <span>Password to recover</span>
                <input name="cbSecret" maxlength="20" spellcheck="false" placeholder="leave blank = random">
              </label>
            </div>
            <button type="submit" class="cb-start">&#9658; Start</button>
            <p class="cb-setup-note">Enter fake details for the prank. Nothing is sent anywhere; the crack runs for about a minute.</p>
          </form>

          <div class="cb-run">
            <div class="cb-prog-row">
              <div class="cb-prog-left">
                <div class="cb-pct" data-cb-pct>0%</div>
                <div class="cb-eta-k">Estimated time remaining</div>
                <div class="cb-eta" data-cb-eta>00:01:00</div>
                <div class="cb-recovered" data-cb-revealwrap>
                  <span>PASSWORD RECOVERED</span>
                  <b data-cb-recovered></b>
                </div>
              </div>
              <div class="cb-ring" data-cb-ring style="--pct:0">
                <div class="cb-ring-core"><span class="cb-lock" data-cb-lock aria-hidden="true">&#128274;</span></div>
              </div>
            </div>
            <ul class="cb-steps">
              <li data-step="modules" data-state="wait"><i aria-hidden="true"></i> Initializing modules <b>WAITING</b></li>
              <li data-step="wordlist" data-state="wait"><i aria-hidden="true"></i> Loading wordlist <b>WAITING</b></li>
              <li data-step="testing" data-state="wait"><i aria-hidden="true"></i> Testing combinations <b>WAITING</b></li>
              <li data-step="finalizing" data-state="wait"><i aria-hidden="true"></i> Finalizing results <b>WAITING</b></li>
            </ul>
          </div>
        </main>

        <aside class="cb-panel cb-feed">
          <div class="cb-panel-title">LIVE FEED</div>
          <div class="cb-log" data-cb-log></div>
          <div class="cb-session">Session ID: SIM-8842-XX</div>
        </aside>
      </div>

      <footer class="cb-disc" data-cb-disc>
        <div>
          <div class="cb-disc-title" data-cb-disctitle>SESSION</div>
          <div class="cb-disc-text" data-cb-disctxt>Secure session standing by. Enter target details, then press Start.</div>
        </div>
        <div class="cb-shield" data-cb-shield aria-hidden="true"></div>
      </footer>
    </div>
  `;

  const toIdle = () => {
    if (frame._cbTick) { clearInterval(frame._cbTick); frame._cbTick = null; }
    frame.classList.remove("is-cracked");
    frame.classList.add("is-idle");
    const disc = frame.querySelector("[data-cb-disc]");
    disc?.classList.remove("cb-disc--prank");
    const dt = frame.querySelector("[data-cb-disctitle]");
    const dx = frame.querySelector("[data-cb-disctxt]");
    if (dt) dt.textContent = "SESSION";
    if (dx) dx.textContent = "Secure session standing by. Enter target details, then press Start.";
  };
  const startNow = () => beginCyberCrack(frame);

  frame.querySelector("[data-cb-setup]")?.addEventListener("submit", (e) => { e.preventDefault(); startNow(); });
  frame.querySelector("[data-cb-change]")?.addEventListener("click", toIdle);
  frame.querySelector("[data-cb-help]")?.addEventListener("click", () => showToast("Cyber Dashboard — a SimDeck prank. 100% safe, nothing is sent anywhere.", "info"));
  frame.querySelector("[data-cb-settings]")?.addEventListener("click", () => showToast("Settings: wordlist, threads, rules (all local).", "info"));

  return frame;
}

function beginCyberCrack(frame) {
  const form = frame.querySelector("[data-cb-setup]");
  let user = (form?.elements?.cbUser?.value || "").trim();
  const sec = (form?.elements?.cbSec?.value || "Standard").trim();
  let secret = (form?.elements?.cbSecret?.value || "").trim();
  if (!user) user = frame.dataset.user || "NightOwl_42";
  user = user.slice(0, 20);
  secret = secret.replace(/\s+/g, "").slice(0, 20);
  if (!secret) secret = frame.dataset.recovered || randomRetroSecret();
  frame.dataset.user = user;
  frame.dataset.sec = sec;
  frame.dataset.recovered = secret;

  const userEl = frame.querySelector("[data-cb-user]");
  const secEl = frame.querySelector("[data-cb-sec]");
  if (userEl) userEl.textContent = user;
  if (secEl) secEl.textContent = sec;

  frame.classList.remove("is-idle", "is-cracked");
  runCyberCrack(frame, secret);
}

function runCyberCrack(frame, recovered) {
  const pct = frame.querySelector("[data-cb-pct]");
  const eta = frame.querySelector("[data-cb-eta]");
  const ring = frame.querySelector("[data-cb-ring]");
  const lock = frame.querySelector("[data-cb-lock]");
  const log = frame.querySelector("[data-cb-log]");
  const discEl = frame.querySelector("[data-cb-disc]");
  const discTitle = frame.querySelector("[data-cb-disctitle]");
  const discTxt = frame.querySelector("[data-cb-disctxt]");
  const recoveredEl = frame.querySelector("[data-cb-recovered]");
  const revealWrap = frame.querySelector("[data-cb-revealwrap]");
  const steps = {
    modules: frame.querySelector('[data-step="modules"]'),
    wordlist: frame.querySelector('[data-step="wordlist"]'),
    testing: frame.querySelector('[data-step="testing"]'),
    finalizing: frame.querySelector('[data-step="finalizing"]'),
  };
  if (!ring) return;
  if (frame._cbTick) { clearInterval(frame._cbTick); frame._cbTick = null; }

  // reset visuals + believable (non-prank) disclaimer for the run
  discEl?.classList.remove("cb-disc--prank");
  revealWrap?.classList.remove("show");
  lock?.classList.remove("is-open");
  if (lock) lock.innerHTML = "&#128274;";
  if (log) log.innerHTML = "";
  if (discTitle) discTitle.textContent = "SESSION";
  if (discTxt) discTxt.textContent = "Secure session established — keep this window open until the match completes.";
  Object.values(steps).forEach((el) => { if (el) { el.dataset.state = "wait"; const b = el.querySelector("b"); if (b) b.textContent = "WAITING"; } });

  const pad = (n) => String(n).padStart(2, "0");
  const DURATION = 60000 / (state.speed || 1);
  const fmtEta = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return `00:${pad(Math.floor(s / 60))}:${pad(s % 60)}`; };

  const feedEvents = [
    [0.00, "Module online"], [0.06, "Wordlist loaded"], [0.12, "Hash captured"],
    [0.19, "Starting engine"], [0.27, "1,000 attempts"], [0.39, "10,000 attempts"],
    [0.53, "50,000 attempts"], [0.67, "100,000 attempts"], [0.80, "500,000 attempts"],
    [0.92, "Almost there..."],
  ];
  let feedIdx = 0;
  let clk = 10 * 3600 + 22 * 60 + 31;
  const fmtClock = () => `${pad(Math.floor(clk / 3600) % 24)}:${pad(Math.floor(clk / 60) % 60)}:${pad(clk % 60)}`;
  const addFeed = (text) => {
    if (!log) return;
    clk += randomInt(1, 4);
    const d = document.createElement("div");
    d.innerHTML = `<span>${fmtClock()}</span> ${escapeMarkup(text)}`;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  };

  const setStep = (el, st) => {
    if (!el) return;
    el.dataset.state = st;
    const b = el.querySelector("b");
    if (b) b.textContent = st === "ok" ? "OK" : st === "run" ? "RUNNING" : "WAITING";
  };

  const started = performance.now();

  const finish = () => {
    frame.classList.add("is-cracked");
    if (pct) pct.textContent = "100%";
    if (ring) ring.style.setProperty("--pct", 100);
    if (eta) eta.textContent = "00:00:00";
    if (lock) { lock.classList.add("is-open"); lock.innerHTML = "&#128275;"; }
    setStep(steps.modules, "ok"); setStep(steps.wordlist, "ok"); setStep(steps.testing, "ok"); setStep(steps.finalizing, "ok");
    if (recoveredEl) recoveredEl.textContent = recovered;
    revealWrap?.classList.add("show");
    addFeed("MATCH FOUND");
    addFeed(`Password recovered: ${recovered}`);
    discEl?.classList.add("cb-disc--prank");
    if (discTitle) discTitle.textContent = "DISCLAIMER";
    if (discTxt) discTxt.textContent = "This is a harmless prank app for entertainment purposes only. No real credentials are used or exposed.";
    showToast("Gotcha! It was a prank — no real credentials were touched.", "success");
  };

  const tick = setInterval(() => {
    if (!state.running || !frame.isConnected) { clearInterval(tick); frame._cbTick = null; return; }
    const elapsed = performance.now() - started;
    const t = Math.min(1, elapsed / DURATION);
    const p = Math.round(t * 100);
    if (pct) pct.textContent = `${p}%`;
    if (ring) ring.style.setProperty("--pct", p);
    if (eta) eta.textContent = fmtEta(DURATION - elapsed);

    while (feedIdx < feedEvents.length && t >= feedEvents[feedIdx][0]) { addFeed(feedEvents[feedIdx][1]); feedIdx += 1; }

    setStep(steps.modules, t >= 0.1 ? "ok" : "run");
    setStep(steps.wordlist, t >= 0.24 ? "ok" : (t >= 0.1 ? "run" : "wait"));
    setStep(steps.testing, t >= 0.97 ? "ok" : (t >= 0.24 ? "run" : "wait"));
    setStep(steps.finalizing, t >= 1 ? "ok" : (t >= 0.9 ? "run" : "wait"));

    if (t >= 1) { clearInterval(tick); frame._cbTick = null; finish(); }
  }, 110);
  frame._cbTick = tick;
}

function makeFakeHash(length = 12) {
  const chars = "abcdef0123456789";
  return Array.from({ length }, () => chars[randomInt(0, chars.length - 1)]).join("");
}

function runShowtime() {
  clearStage();
  state.running = true;
  showtimeAction({ action: "terminal-burst", payload: "med" });
  runScript(scripts.showtime);
}

// ---------- Script Action Handlers ----------

function phoneAction(phase) {
  const frame = els.stage.querySelector(".mobile-frame");
  if (!frame) return;
  const statusEl = frame.querySelector(".phone-status");
  const progress = frame.querySelector(".progress-fill");
  const stageTxt = frame.querySelector(".progress-stage");
  const mfsStage = frame.querySelector("#mfsStage");
  const mfsBar = frame.querySelector("#mfsBarFill");
  const mfsPct = frame.querySelector("#mfsPct");
  const mfsPctMirror = frame.querySelector("#mfsPctMirror");
  const mfsRadar = frame.querySelector("#mfsRadar");
  const mfsStatus = frame.querySelector("#mfsStatus");
  const mfsTerm = frame.querySelector("#mfsTerminal");
  const mfsAlert = frame.querySelector("#mfsAlert");
  const mfsCoreTitle = frame.querySelector("#mfsCoreTitle");
  const mfsNotification = frame.querySelector("#mfsNotificationText");

  const setMfsProgress = (pct) => {
    const safePct = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
    if (mfsPct) mfsPct.textContent = String(safePct);
    if (mfsPctMirror) mfsPctMirror.textContent = String(safePct);
    if (mfsBar) mfsBar.style.width = `${safePct}%`;
    if (mfsRadar) mfsRadar.style.setProperty("--angle", `${safePct * 3.6}deg`);
    frame.querySelectorAll(".mfs-steps span").forEach((step) => {
      const gate = Number(step.dataset.step || 0);
      step.classList.toggle("active", safePct >= gate);
    });
  };

  switch (phase.action) {
    case "text":
      if (mfsAlert) {
        mfsAlert.querySelector(".d").textContent = String(phase.payload || "");
        mfsAlert.classList.add("visible");
        setTimeout(() => mfsAlert.classList.remove("visible"), 2600);
      } else {
        // Re-use notification drop for status updates
        const notif = frame.querySelector(".notification-drop");
        if (notif) {
          notif.querySelector(".notif-content div:last-child").textContent = phase.payload;
          notif.classList.add("visible");
          setTimeout(() => notif.classList.remove("visible"), 3000);
        }
      }

      if (mfsTerm) {
        const line = document.createElement("div");
        line.className = "line";
        line.innerHTML = `<span class="g">[info]</span> ${String(phase.payload || "")}`;
        mfsTerm.appendChild(line);
        mfsTerm.scrollTop = mfsTerm.scrollHeight;
      }
      break;
    case "stage":
      if (mfsStage) {
        const stageStories = {
          Preparing: "Spoofing relay handshake",
          Analyzing: "Mapping lockscreen shadow",
          "Indexing sample data": "Mirroring vault headers",
          "Relay handshake": "Opening ghost relay",
          "Fingerprinting device shell": "Fingerprinting device shell",
          "Extracting message stream": "Extracting message stream",
          "Extracting media vault": "Extracting media vault",
          "Cloning contact graph": "Cloning contact graph",
          "Sealing trace mask": "Sealing trace mask",
        };
        const stageCopy = stageStories[String(phase.payload || "")] || String(phase.payload || "");
        mfsStage.textContent = stageCopy;
        if (mfsStatus) mfsStatus.textContent = "Running";
        if (mfsCoreTitle) mfsCoreTitle.textContent = "Ghost Run";
        frame.classList.remove("mfs-complete-state");

        const scriptTotal = (scripts[state.scenario] || []).reduce((max, item) => Math.max(max, Number(item.t || 0)), 12);
        const pct = Math.max(0, Math.min(100, Math.round((Number(phase.t || 0) / scriptTotal) * 100)));
        setMfsProgress(pct);

        if (mfsTerm) {
          const line = document.createElement("div");
          line.className = "line";
          line.innerHTML = `<span class="y">[step]</span> ${stageCopy.toLowerCase()}...`;
          mfsTerm.appendChild(line);
          mfsTerm.scrollTop = mfsTerm.scrollHeight;
        }
      } else {
        // Show major stage in hack overlay if visible, or toast
        const hackOverlay = frame.querySelector(".hack-overlay");
        if (hackOverlay.classList.contains("visible")) {
          hackOverlay.querySelector(".hack-title").textContent = phase.payload;
        } else {
          addToastBanner(phase.payload, "info");
        }
      }
      break;
    case "counts":
      // Update file count in hack overlay (keep for backwards-compat).
      const total = (phase.payload?.photos || 0) + (phase.payload?.messages || 0) + (phase.payload?.contacts || 0);
      const counter = frame.querySelector("#hackFileCount");
      if (counter) counter.textContent = String(total);

      // Update Basic Scan counters if present.
      frame.querySelector("#countPhotos")?.replaceChildren(document.createTextNode(String(phase.payload?.photos ?? 0)));
      frame.querySelector("#countMessages")?.replaceChildren(document.createTextNode(String(phase.payload?.messages ?? 0)));
      frame.querySelector("#countContacts")?.replaceChildren(document.createTextNode(String(phase.payload?.contacts ?? 0)));
      frame.querySelector("#countItems")?.replaceChildren(document.createTextNode(String(total)));
      break;
    case "complete":
      frame.querySelector(".hack-overlay")?.classList.add("visible");
      if (frame.querySelector(".hack-title")) frame.querySelector(".hack-title").textContent = "SCAN COMPLETE";
      frame.classList.add("mfs-complete-state");
      if (mfsStatus) mfsStatus.textContent = "Complete";
      if (mfsCoreTitle) mfsCoreTitle.textContent = "Exporting Phone Data";
      if (mfsStage) mfsStage.textContent = "Messages, media, contacts queued to vault.";
      if (mfsNotification) mfsNotification.textContent = `Exporting phone data from ${state.customTargetModel || "DemoPhone X"}`;
      const resultValue = frame.querySelector(".mfs-result-list div:first-child strong");
      const routeValue = frame.querySelector(".mfs-result-list div:nth-child(2) strong");
      if (resultValue) resultValue.textContent = "Exporting phone data";
      if (routeValue) routeValue.textContent = "Vault relay active";
      setMfsProgress(100);
      if (mfsTerm) {
        const line = document.createElement("div");
        line.className = "line";
        line.innerHTML = `<span class="g">[export]</span> messages, media, contacts queued to vault.`;
        mfsTerm.appendChild(line);
        mfsTerm.scrollTop = mfsTerm.scrollHeight;
      }
      startPhoneExportProgress(frame);
      showToast("Basic scan complete (simulated).", "info");
      break;
    case "init-matrix":
      if (statusEl) statusEl.textContent = "MATRIX INIT...";
      if (stageTxt) stageTxt.textContent = "INITIALIZING MATRIX SEQUENCE...";
      if (progress) animateProgress(progress, 10);
      break;
    case "detect-device":
      if (stageTxt) stageTxt.textContent = "SCANNING FOR TARGET DEVICE...";
      if (progress) animateProgress(progress, 30);
      break;
    case "bypass-security":
      if (stageTxt) stageTxt.textContent = "BYPASSING SECURITY LAYERS...";
      if (progress) animateProgress(progress, 50);
      break;
    case "access-data":
      if (stageTxt) stageTxt.textContent = "ACCESSING DEVICE DATA...";
      if (progress) animateProgress(progress, 70);
      break;
    case "extract-info":
      if (stageTxt) stageTxt.textContent = "EXTRACTING INFORMATION...";
      if (progress) animateProgress(progress, 90);
      break;
    case "init-soc":
      if (statusEl) statusEl.textContent = "SOC ACTIVE";
      if (stageTxt) stageTxt.textContent = "INITIALIZING SECURITY OPERATIONS CENTER...";
      if (progress) animateProgress(progress, 5);
      break;
    case "network-map":
      if (stageTxt) stageTxt.textContent = "MAPPING TARGET NETWORK...";
      if (progress) animateProgress(progress, 25);
      break;
    case "device-trace":
      if (stageTxt) stageTxt.textContent = "TRACING TARGET DEVICE...";
      if (progress) animateProgress(progress, 45);
      // Optional: show a cinematic trace visualization video (simulation-only asset).
      openTraceVideoWindow();
      break;
    case "vulnerability-scan":
      if (stageTxt) stageTxt.textContent = "SCANNING FOR VULNERABILITIES...";
      if (progress) animateProgress(progress, 65);
      break;
    case "data-extraction":
      if (stageTxt) stageTxt.textContent = "EXTRACTING TARGET DATA...";
      if (progress) animateProgress(progress, 85);
      break;
    case "report-complete":
      if (stageTxt) stageTxt.textContent = "REPORT COMPLETE - THREAT MITIGATED";
      if (progress) animateProgress(progress, 100);
      showToast("Corporate security scan complete (simulated).", "info");
      break;
    case "init-forensic":
      if (statusEl) statusEl.textContent = "FORENSIC MODE";
      if (stageTxt) stageTxt.textContent = "INITIALIZING FORENSIC ANALYSIS...";
      if (progress) animateProgress(progress, 5);
      break;
    case "imei-lookup":
      if (stageTxt) stageTxt.textContent = "PERFORMING IMEI LOOKUP...";
      if (progress) animateProgress(progress, 20);
      break;
    case "carrier-info":
      if (stageTxt) stageTxt.textContent = "RETRIEVING CARRIER INFORMATION...";
      if (progress) animateProgress(progress, 40);
      break;
    case "os-analysis":
      if (stageTxt) stageTxt.textContent = "ANALYZING OPERATING SYSTEM...";
      if (progress) animateProgress(progress, 60);
      break;
    case "file-system-scan":
      if (stageTxt) stageTxt.textContent = "SCANNING FILE SYSTEM...";
      if (progress) animateProgress(progress, 80);
      break;
    case "generate-report":
      if (stageTxt) stageTxt.textContent = "GENERATING FORENSIC REPORT...";
      if (progress) animateProgress(progress, 100);
      showToast("Forensic analysis complete (simulated).", "info");
      break;
    case "init-prank":
      if (statusEl) statusEl.textContent = "SYSTEM CRITICAL";
      statusEl.style.color = "var(--danger)";
      if (stageTxt) stageTxt.textContent = "UNAUTHORIZED ACCESS DETECTED...";
      if (progress) animateProgress(progress, 5);
      break;
    case "scan-personal":
      if (stageTxt) stageTxt.textContent = "SCANNING PERSONAL PHOTOS...";
      if (progress) animateProgress(progress, 20);
      break;
    case "found-embarrassing":
      if (stageTxt) stageTxt.textContent = "FOUND 14,203 'PRIVATE' FILES...";
      if (progress) animateProgress(progress, 35);
      addToastBanner("Face ID confirmed: " + (state.customTargetModel || "Target"), "warning");
      break;
    case "upload-photos":
      if (stageTxt) stageTxt.textContent = "UPLOADING TO PUBLIC SERVERS...";
      if (progress) animateProgress(progress, 60);
      break;
    case "leak-history":
      if (stageTxt) stageTxt.textContent = "LEAKING BROWSER HISTORY TO CONTACTS...";
      if (progress) animateProgress(progress, 80);
      break;
    case "email-boss":
      if (stageTxt) stageTxt.textContent = "SENDING 'I QUIT' EMAIL TO BOSS...";
      if (progress) animateProgress(progress, 95);
      break;
    case "prank-reveal":
      if (stageTxt) stageTxt.textContent = "JUST KIDDING! PRANK COMPLETE.";
      if (progress) animateProgress(progress, 100);
      if (statusEl) statusEl.textContent = "PRANKED";
      statusEl.style.color = "var(--success)";
      addToastBanner("Don't worry, it's just a simulation! 😂", "success");
      break;
    default: break;
  }
}

const TRACE_VIDEO_SRC_MP4 = "assets/videos/trace-sim.mp4";
const CRITICAL_VIDEO_SRC_MP4 = "assets/videos/critical-download.mp4";
const GLOBALNET_VIDEO_SRC_MP4 = "assets/videos/global-network.mp4";

function openTraceVideoWindow() {
  if (!els.stage) return;
  if (els.stage.querySelector(".trace-video-window")) return;

  const win = createWindow("Trace Visualizer (Simulated)", { x: 180, y: 120, w: 560, h: 360 });
  win.classList.add("trace-video-window");

  const body = win.querySelector(".window-body");
  body.style.padding = "0";
  body.style.background = "#000";

  const wrap = document.createElement("div");
  wrap.className = "trace-video-wrap";
  wrap.innerHTML = `
    <video class="trace-video" muted playsinline autoplay loop preload="auto">
      <source src="${TRACE_VIDEO_SRC_MP4}" type="video/mp4">
    </video>
    <div class="trace-video-overlay">
      <div class="trace-video-pill">SIMULATION ONLY</div>
      <div class="trace-video-sub">No real tracking. Visual demo asset.</div>
    </div>
    <div class="trace-video-missing">
      <div class="trace-video-pill danger">VIDEO NOT FOUND</div>
      <div class="trace-video-sub">Render it via: <span class="mono">cd remotion; npm i; npm run render:trace</span></div>
    </div>
  `;

  body.appendChild(wrap);
  els.stage.appendChild(win);

  const vid = wrap.querySelector("video");
  const markMissing = () => wrap.classList.add("missing");
  const markOk = () => wrap.classList.remove("missing");

  vid.addEventListener("error", markMissing);
  vid.addEventListener("loadeddata", markOk);
  // If autoplay is blocked for any reason, keep it muted and retry play.
  const p = vid.play();
  if (p && typeof p.catch === "function") p.catch(() => { /* ignore */ });
}

function emailAction(phase) {
  const wrap = els.stage.querySelector(".mail-ui");
  if (!wrap) return;
  const stageTxt = wrap.querySelector(".progress-stage");
  const progress = wrap.querySelector(".progress-fill");
  switch (phase.action) {
    case "banner": addToastBanner("Suspicious login detected (simulated)"); break;
    case "stage": stageTxt.textContent = phase.payload; animateProgress(progress, Math.min(100, (phase.t / 10) * 100)); break;
    case "render-mails": renderMails(wrap); break;
    default: break;
  }
}

function virusAction(phase) {
  const ui = els.stage.querySelector(".virus-ui");
  if (!ui) return;
  const log = ui.querySelector(".virus-log");
  const progress = ui.querySelector(".progress-fill");
  switch (phase.action) {
    case "disclaimer": addToastBanner(phase.payload); break;
    case "scan-files":
      fakeFiles().forEach((f, i) => {
        setTimeout(() => appendLog(log, `Scanning ${f}`), (i * 180) / state.speed);
      });
      animateProgress(progress, 45);
      break;
    case "alert":
      appendLog(log, phase.payload);
      addToastBanner(phase.payload, "warning");
      animateProgress(progress, 60);
      break;
    case "enable-quarantine":
      ui.querySelector(".quarantine-btn").disabled = false;
      break;
    case "quarantine":
      appendLog(log, "Quarantine initiated (simulated)...");
      animateProgress(progress, 80);
      break;
    case "complete":
      appendLog(log, phase.payload);
      animateProgress(progress, 100);
      addToastBanner(phase.payload, "success");
      break;
    default: break;
  }
}

function iosAction(phase) {
  const card = els.stage.querySelector(".ios-ui");
  if (!card) return;
  const bar = card.querySelector(".progress-fill");
  const stageTxt = card.querySelector(".progress-stage");
  if (phase.payload === "update") {
    let pct = 0;
    const loop = () => {
      if (!state.running) return;
      pct = (pct + 1) % 100;
      animateProgress(bar, pct === 0 ? 1 : pct);
      stageTxt.textContent = `Updating... ${pct}%`;
      setTimeout(loop, 160 / state.speed);
    };
    loop();
  }
}

function androidAction(phase) {
  const card = els.stage.querySelector(".android-ui");
  if (!card) return;
  const log = card.querySelector(".android-log");
  if (phase.payload === "optimize") {
    const lines = ["Optimizing apps...", "Repairing system components...", "Rebuilding caches...", "Verifying samples..."];
    let idx = 0;
    const loop = () => {
      if (!state.running) return;
      appendLog(log, lines[idx % lines.length]);
      idx += 1;
      setTimeout(loop, 900 / state.speed);
    };
    loop();
  }
}

function winAction(phase) {
  switch (phase.action) {
    case "open":
      openWinWindow(phase.payload);
      break;
    case "terminal-burst":
      startTerminalBurst();
      break;
    case "overlay":
      showOverlay(phase.payload);
      break;
    default: break;
  }
}

function tvAction(phase) {
  if (phase.action === "crack" || phase.action === "crack-picker") {
    const overlay = els.stage.querySelector(".crack-overlay");
    if (overlay) setCrackPattern(overlay, phase.payload);
  }
}

function emailHijackAction(phase) {
  const card = els.stage.querySelector(".email-hijack");
  if (!card) return;
  const log = card.querySelector(".hijack-log");
  appendLog(log, phase.payload);
}

function fbiAction(phase) {
  if (phase.action === "lock") startFBICountdown();
}

function showtimeAction(phase) {
  switch (phase.action) {
    case "terminal-burst": startTerminalBurst(); break;
    case "alerts": for (let i = 0; i < (phase.payload || 2); i++) addToastBanner("Access alert (simulated)", "warning"); break;
    case "open": openWinWindow(phase.payload); break;
    case "overlay": showOverlay(phase.payload); break;
    case "final-card": showOverlay(phase.payload, true); break;
    case "loop-check":
      if (state.duration === 0) runShowtime();
      break;
    default: break;
  }
}

function startPhoneExportProgress(frame) {
  const panel = frame.querySelector("#mfsExportPanel");
  const pctEl = frame.querySelector("#mfsExportPct");
  const fill = frame.querySelector("#mfsExportFill");
  const copy = frame.querySelector("#mfsExportCopy");
  const term = frame.querySelector("#mfsTerminal");
  if (!panel || panel.dataset.running === "true") return;

  panel.dataset.running = "true";
  frame.classList.add("mfs-export-active");

  const steps = [
    { t: 0, pct: 8, copy: "Opening vault relay..." },
    { t: 2500, pct: 22, copy: "Exporting messages.db" },
    { t: 5200, pct: 38, copy: "Packing media thumbnails" },
    { t: 8200, pct: 57, copy: "Exporting contact graph" },
    { t: 11200, pct: 74, copy: "Compressing chat attachments" },
    { t: 14200, pct: 91, copy: "Sealing encrypted bundle" },
    { t: 16500, pct: 100, copy: "Export package ready" },
  ];

  steps.forEach((step) => {
    const timer = setTimeout(() => {
      if (!state.running) return;
      if (pctEl) pctEl.textContent = String(step.pct);
      if (fill) fill.style.width = `${step.pct}%`;
      if (copy) copy.textContent = step.copy;
      if (term) {
        const line = document.createElement("div");
        line.className = "line";
        line.innerHTML = `<span class="g">[export]</span> ${step.copy.toLowerCase()}`;
        term.appendChild(line);
        term.scrollTop = term.scrollHeight;
      }
    }, step.t / state.speed);
    state.timers.push(timer);
  });
}

// ---------- Builders ----------

function clearStage() {
  // Hide scenario grid and show stage
  els.scenarioGrid?.classList.add("hidden");
  els.stage.classList.add("active");
  els.stage.classList.remove("stage-centered");
  els.stage.innerHTML = "";
  addGlitch();

  // Hide nav-panel on mobile during simulation
  document.querySelector('.nav-panel')?.classList.add('mobile-hidden');
  document.querySelector('.category-sidebar')?.classList.add('hidden');
  // When the sidebar is hidden, ensure the stage uses the full grid width.
  document.body.classList.add('sidebar-hidden');
}

function buildPhoneFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame mfs-frame";

  const deviceLabel = state.customTargetModel || "DemoPhone X";
  const carrier = state.customTargetCarrier || "Demo LTE";
  const location = state.customTargetLocation || "Unknown";

  frame.innerHTML = `
    <div class="mobile-screen mfs-screen">
      <div class="mfs-phone-status" aria-hidden="true">
        <span>10:24</span>
        <span class="mfs-ios-right"><span class="mfs-cell-bars"></span><span>5G</span><span class="mfs-battery">89</span></span>
      </div>
      <button class="mfs-back-btn" type="button" aria-label="Back to scenarios">Back</button>

      <section class="mfs-hero">
        <div class="mfs-world-map" aria-hidden="true">
          <span class="mfs-node n1"></span>
          <span class="mfs-node n2"></span>
          <span class="mfs-node n3"></span>
          <span class="mfs-node n4"></span>
        </div>

        <div class="mfs-push">
          <div class="mfs-badge">SD</div>
          <div>
            <div class="mfs-push-title">ShadowDeck</div>
            <div class="mfs-push-main" id="mfsNotificationText">GhostLink primed for ${deviceLabel}</div>
            <div class="mfs-push-sub">Tunnel armed. Trace mask online.</div>
          </div>
          <div class="mfs-push-time">now</div>
        </div>

        <div class="mfs-network-card">
          <div class="mfs-kicker">Network Status</div>
          <div class="mfs-secure">Secure</div>
          <div class="mfs-network-grid">
            <span>Connection</span><strong>Encrypted</strong>
            <span>Latency</span><strong>23ms</strong>
            <span>Location</span><strong>${location}</strong>
            <span>IP Address</span><strong>142.250.72.206</strong>
          </div>
        </div>
      </section>

      <section class="mfs-panel">
        <div class="mfs-link-strip">
          <span><span class="mfs-signal"></span>${carrier}</span>
          <span>Trace Mask</span>
          <span>Ghost Link</span>
        </div>

        <div class="mfs-card mfs-device">
          <div class="mfs-card-head">
            <div class="mfs-kicker">Target Device</div>
            <div class="mfs-status"><span class="dot"></span><span id="mfsStatus">Ready</span></div>
          </div>
          <div class="mfs-device-grid">
            <div class="mfs-field">
              <div class="mfs-field-icon phone"></div>
              <div>
                <div class="k">Device</div>
                <div class="v">${deviceLabel}</div>
                <div class="s">Ghost profile</div>
              </div>
            </div>
            <div class="mfs-field">
              <div class="mfs-field-icon phone"></div>
              <div>
                <div class="k">Number</div>
                <div class="v mono">${state.customTargetNumber || "+1 (555) 123-4567"}</div>
                <div class="s">${carrier}</div>
              </div>
            </div>
            <div class="mfs-field">
              <div class="mfs-field-icon pin"></div>
              <div>
                <div class="k">Location</div>
                <div class="v">${location}</div>
                <div class="s">United States</div>
              </div>
            </div>
            <div class="mfs-field">
              <div class="mfs-field-icon shield"></div>
              <div>
                <div class="k">Access</div>
                <div class="v ok">MASKED</div>
                <div class="s">Clean route</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mfs-core mfs-complete-block" aria-label="Scan status">
          <div class="mfs-radar" id="mfsRadar" style="--angle:0deg">
            <div class="mfs-check-mark"></div>
            <div class="mfs-radar-center"><span id="mfsPct">0</span><small>%</small></div>
          </div>
          <div class="mfs-core-copy">
            <div class="mfs-core-title" id="mfsCoreTitle">Awaiting Start</div>
            <div class="mfs-stage" id="mfsStage">Standing by for ghost handshake.</div>
            <div class="mfs-steps" aria-hidden="true">
              <span data-step="0" class="active">Prep</span><span data-step="25">Scan</span><span data-step="55">Index</span><span data-step="85">Verify</span>
            </div>
          </div>
        </div>

        <div class="mfs-card mfs-progress">
          <div class="mfs-card-head">
            <div class="mfs-kicker">Scan Pipeline</div>
            <div class="mfs-percent"><span id="mfsPctMirror">0</span>%</div>
          </div>
          <div class="mfs-bar">
            <div class="mfs-bar-fill" id="mfsBarFill" style="width:0%"></div>
          </div>
          <div class="mfs-result-list">
            <div><span>Result</span><strong>Pending export</strong><i></i></div>
            <div><span>Route</span><strong>Masked relay</strong><i></i></div>
            <div><span>Total Items</span><strong id="countItems">0</strong><i></i></div>
          </div>
          <div class="mfs-export-panel" id="mfsExportPanel">
            <div class="mfs-export-head">
              <span>Export Progress</span>
              <strong><span id="mfsExportPct">0</span>%</strong>
            </div>
            <div class="mfs-export-bar"><div id="mfsExportFill"></div></div>
            <div class="mfs-export-copy" id="mfsExportCopy">Waiting for vault relay...</div>
            <button class="mfs-export-back" type="button">Back to scenarios</button>
          </div>
        </div>

        <div class="mfs-card mfs-log">
          <div class="mfs-card-head">
            <div class="mfs-kicker">Ops Log</div>
            <div class="mfs-hint">Live</div>
          </div>
          <div class="mfs-terminal" id="mfsTerminal">
            <div class="line"><span class="g">[10:24:31]</span> ghostlink_router <span class="ok">OK</span> <span>12ms</span></div>
            <div class="line"><span class="g">[mask]</span> relay chain: brooklyn > oslo > seoul</div>
            <div class="line"><span class="g">[ready]</span> waiting for handshake events...</div>
          </div>
        </div>
      </section>

      <div class="mfs-alert" id="mfsAlert" aria-live="polite" aria-atomic="true">
        <div class="ico">!</div>
        <div class="txt">
          <div class="t">Simulation Notice</div>
          <div class="d">All output is fictional and randomized.</div>
        </div>
      </div>

      <div class="mfs-tabbar" aria-hidden="true">
        <div class="active">Dash</div>
        <div>Mods</div>
        <div>Activity</div>
        <div>Reports</div>
        <div>Prefs</div>
      </div>
      <div class="mfs-home-indicator" aria-hidden="true"></div>
    </div>
  `;

  frame.querySelector(".mfs-back-btn")?.addEventListener("click", (event) => {
    event.stopPropagation();
    exitToHome();
  });
  frame.querySelector(".mfs-export-back")?.addEventListener("click", (event) => {
    event.stopPropagation();
    exitToHome();
  });

  return frame;
}

function buildPhoneMatrixFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame mx-frame";
  frame.innerHTML = `
    <div class="mobile-top">
      <span class="mx-top-left">MATRIX // OPS</span>
      <span class="phone-status mx-top-status">TARGETING...</span>
    </div>
    <div class="mobile-body">
      <div class="mx-backdrop" aria-hidden="true"></div>

      <div class="mx-hud">
        <div class="mx-hud-left">
          <div class="mx-chip">TARGET</div>
          <div class="mx-target mono">${state.customTargetNumber || '[CUSTOM PHONE NUMBER]'}</div>
          <div class="mx-sub mono">uplink: relay-04.sim | route: stable</div>
        </div>
        <div class="mx-hud-right">
          <div class="mx-chip danger">SIMULATION</div>
          <div class="mx-metrics mono">
            <div><span class="k">SIG</span> <span class="v">-68dBm</span></div>
            <div><span class="k">LAT</span> <span class="v">14ms</span></div>
            <div><span class="k">JIT</span> <span class="v">2ms</span></div>
          </div>
        </div>
      </div>

      <div class="mx-shell">
        <div class="mx-terminal" id="matrix-terminal" role="log" aria-label="Simulation terminal">
          <div class="line"><span class="g">[boot]</span> injecting demo kernel…</div>
          <div class="line"><span class="g">[link]</span> target discovered: <span class="w mono">${state.customTargetNumber || 'UNKNOWN'}</span></div>
          <div class="line"><span class="y">[scan]</span> enumerating surface…</div>
          <div class="line"><span class="dim">press</span> <span class="key">DEEP SCAN</span> <span class="dim">to accelerate</span><span class="cursor" aria-hidden="true"></span></div>
        </div>

        <div class="mx-side">
          <div class="mx-panel">
            <div class="mx-panel-title mono">MODULES</div>
            <div class="mx-list mono">
              <div><span class="dot ok"></span> netmap</div>
              <div><span class="dot ok"></span> handshake</div>
              <div><span class="dot warn"></span> sandbox</div>
              <div><span class="dot dim"></span> exfil</div>
            </div>
          </div>
          <div class="mx-panel">
            <div class="mx-panel-title mono">STATUS</div>
            <div class="mx-big mono" id="mxBigStatus">LOCKED</div>
            <div class="mx-tiny mono">policy: demo-safe | scope: visual</div>
          </div>
        </div>
      </div>

      <div class="progress mx-progress" style="margin-top: 10px;">
        <div class="progress-bar"><div class="progress-fill"></div></div>
        <div class="progress-stage">Initializing...</div>
      </div>

      <div class="mx-actions">
        <button class="mobile-btn mx-btn" data-action="matrix-scan">DEEP SCAN</button>
        <button class="mobile-btn mx-btn" data-action="matrix-access">GAIN ACCESS</button>
      </div>

      <div class="mx-foot mono">NO REAL DATA. NO REAL ACCESS. CINEMATIC SIMULATION.</div>
    </div>
  `;

  // Add a cinematic matrix rain layer (lightweight, DOM-based).
  // This is not security tooling; it's pure visual effect.
  const rain = document.createElement("div");
  rain.className = "mx-rain";
  const cols = 18;
  for (let i = 0; i < cols; i++) {
    const col = document.createElement("div");
    col.className = "mx-col";
    col.style.setProperty("--mx-x", String(i));
    col.style.setProperty("--mx-speed", String(6 + (i % 6)));
    col.style.setProperty("--mx-delay", String((i % 9) * -0.6));
    const stream = document.createElement("div");
    stream.className = "mx-stream";
    stream.textContent = "010101010101010101010101010101010101010101010101";
    col.appendChild(stream);
    rain.appendChild(col);
  }
  frame.querySelector(".mobile-body")?.appendChild(rain);

  const terminal = frame.querySelector("#matrix-terminal");
  const big = frame.querySelector("#mxBigStatus");
  const pushLine = (tone, msg) => {
    if (!terminal) return;
    const line = document.createElement("div");
    line.className = "line";
    line.innerHTML = `<span class="${tone}">[${tone}]</span> ${msg}`;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  };

  // Tick the rain text occasionally so it doesn't look like a static wallpaper.
  const glyphs = "01▮▯░▒▓/\\<>[]{}@#*+";
  const tick = () => {
    if (!state.running) return;
    rain.querySelectorAll(".mx-stream").forEach((el, idx) => {
      let s = "";
      const len = 42;
      for (let k = 0; k < len; k++) {
        const ch = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
        s += ch;
      }
      el.textContent = s;
      if (idx % 7 === 0 && terminal) {
        // Tiny ambient log noise.
        if (Math.random() < 0.16) pushLine("dim", `telemetry tick ${Math.floor(Math.random() * 9999)}`);
      }
    });
    setTimeout(tick, 220);
  };
  setTimeout(tick, 220);

  frame.querySelector(".mobile-body").addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const action = e.target.dataset.action;
    const stageTxt = frame.querySelector(".progress-stage");
    const fill = frame.querySelector(".progress-fill");

    if (action === "matrix-scan") {
      stageTxt.textContent = "DEEP SCANNING...";
      animateProgress(fill, 30);
      pushLine("y", "deep scan engaged…");
      setTimeout(() => { stageTxt.textContent = "BYPASSING SECURITY..."; animateProgress(fill, 60); }, 1000 / state.speed);
      setTimeout(() => { stageTxt.textContent = "ACCESSING DATA..."; animateProgress(fill, 85); }, 2000 / state.speed);
      setTimeout(() => {
        stageTxt.textContent = "COMPLETE - TARGET COMPROMISED";
        animateProgress(fill, 100);
        if (big) big.textContent = "BREACHED";
        pushLine("g", "access window opened (simulated).");
      }, 3000 / state.speed);
    }

    if (action === "matrix-access") {
      addToastBanner("ACCESS GRANTED TO TARGET DEVICE!", "success");
      pushLine("g", "root privileges: granted (simulated).");
      if (big) big.textContent = "GRANTED";
      // Add more matrix-style effects
      const matrixEffect = document.createElement("div");
      matrixEffect.className = "matrix-effect";
      matrixEffect.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
          0deg,
          rgba(0, 255, 0, 0.03),
          rgba(0, 255, 0, 0.03) 1px,
          transparent 1px,
          transparent 3px
        );
        pointer-events: none;
        opacity: 0.3;
      `;
      frame.appendChild(matrixEffect);
    }
  });

  return frame;
}

function buildPhoneCorporateFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame";
  frame.innerHTML = `
    <div class="mobile-top">
      <span>CORP-SOC-772</span>
      <span class="phone-status">ACTIVE THREAT</span>
    </div>
    <div class="mobile-body">
      <div class="small-label">TARGET PROFILE</div>
      <div class="status-grid" style="margin-bottom: 10px;">
        <div class="status-card"><div class="label">NUMBER</div><div class="value">${state.customTargetNumber || '[CUSTOM PHONE]'}</div></div>
        <div class="status-card"><div class="label">CARRIER</div><div class="value">${state.customTargetCarrier || 'SECURE-NET'}</div></div>
        <div class="status-card"><div class="label">LOCATION</div><div class="value">${state.customTargetLocation || 'TRACKING...'}</div></div>
        <div class="status-card"><div class="label">STATUS</div><div class="value">MONITORED</div></div>
      </div>

      <div class="small-label">THREAT ASSESSMENT</div>
      <div class="progress" style="margin-bottom: 10px;">
        <div class="progress-bar"><div class="progress-fill"></div></div>
        <div class="progress-stage">INITIALIZING...</div>
      </div>

      <div class="notification-stack" style="height: 80px; overflow-y: auto; margin-bottom: 10px;">
        <div class="notification">00:01 - Target device detected</div>
        <div class="notification">00:03 - Network signature confirmed</div>
        <div class="notification">00:05 - Vulnerability scan initiated</div>
      </div>

      <div class="chip-row" style="margin-top: 10px;">
        <button class="chip" data-action="trace">TRACE</button>
        <button class="chip" data-action="monitor">MONITOR</button>
        <button class="chip" data-action="lock">LOCK DEVICE</button>
      </div>

      <div class="small-label" style="margin-top:8px;">CORPORATE SECURITY PROTOCOL - SIMULATION ONLY</div>
    </div>
  `;

  frame.querySelector(".mobile-body").addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const action = e.target.dataset.action;
    const stageTxt = frame.querySelector(".progress-stage");
    const fill = frame.querySelector(".progress-fill");

    if (action === "trace") {
      stageTxt.textContent = "TRACING SIGNAL...";
      animateProgress(fill, 40);
      setTimeout(() => {
        stageTxt.textContent = "LOCATION PINPOINTED";
        openTraceVideoWindow();
        addToastBanner("Trace visualizer opened (SIMULATED)", "info");
      }, 1500 / state.speed);
    }

    if (action === "monitor") {
      addToastBanner("Real-time monitoring activated", "info");
      const notification = document.createElement("div");
      notification.className = "notification";
      notification.textContent = "00:07 - Monitoring active, data flowing...";
      frame.querySelector(".notification-stack").appendChild(notification);
    }

    if (action === "lock") {
      stageTxt.textContent = "SENDING REMOTE LOCK...";
      animateProgress(fill, 100);
      addToastBanner("Target device locked remotely", "success");
    }
  });

  return frame;
}

function buildPhoneForensicFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame";
  frame.innerHTML = `
    <div class="mobile-top">
      <span>FORENSIC-SCAN-PRO</span>
      <span class="phone-status">ANALYZING</span>
    </div>
    <div class="mobile-body">
      <div class="small-label">DEVICE IDENTIFICATION</div>
      <div class="status-grid" style="margin-bottom: 10px;">
        <div class="status-card"><div class="label">IMEI</div><div class="value">XXXXXXXXXXXXXXX</div></div>
        <div class="status-card"><div class="label">MODEL</div><div class="value">${state.customTargetModel || '[CUSTOM MODEL]'}</div></div>
        <div class="status-card"><div class="label">OS VERSION</div><div class="value">[CUSTOM VERSION]</div></div>
        <div class="status-card"><div class="label">LAST SEEN</div><div class="value">[CUSTOM TIME] AGO</div></div>
      </div>

      <div class="small-label">EXTRACTION STATUS</div>
      <div class="progress" style="margin-bottom: 10px;">
        <div class="progress-bar"><div class="progress-fill"></div></div>
        <div class="progress-stage">CONNECTING...</div>
      </div>

      <div class="terminal" style="height: 60px; margin-bottom: 10px;" id="forensic-terminal">
        > Initializing forensic tools...
        > Establishing connection...
      </div>

      <div class="chip-row" style="margin-top: 10px;">
        <button class="chip" data-action="photos">Extract Photos</button>
        <button class="chip" data-action="contacts">Extract Contacts</button>
        <button class="chip" data-action="messages">Extract Messages</button>
      </div>

      <div class="small-label" style="margin-top:8px;">MOBILE FORENSICS TOOLKIT - SIMULATION ONLY</div>
    </div>
  `;

  frame.querySelector(".mobile-body").addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const action = e.target.dataset.action;
    const stageTxt = frame.querySelector(".progress-stage");
    const fill = frame.querySelector(".progress-fill");
    const terminal = frame.querySelector("#forensic-terminal");

    if (action === "photos") {
      stageTxt.textContent = "EXTRACTING PHOTOS...";
      animateProgress(fill, 70);
      terminal.innerHTML += "<div>> Extracting photo data...</div>";
      setTimeout(() => {
        stageTxt.textContent = "PHOTOS EXTRACTED: 247 FILES";
        addToastBanner("247 photos extracted from target device", "info");
      }, 1800 / state.speed);
    }

    if (action === "contacts") {
      stageTxt.textContent = "EXTRACTING CONTACTS...";
      animateProgress(fill, 50);
      terminal.innerHTML += "<div>> Accessing contact database...</div>";
      setTimeout(() => {
        stageTxt.textContent = "CONTACTS EXTRACTED: 156 ENTRIES";
        addToastBanner("156 contacts extracted from target device", "info");
      }, 1500 / state.speed);
    }

    if (action === "messages") {
      stageTxt.textContent = "EXTRACTING MESSAGES...";
      animateProgress(fill, 80);
      terminal.innerHTML += "<div>> Parsing message database...</div>";
      setTimeout(() => {
        stageTxt.textContent = "MESSAGES EXTRACTED: 1,204 CONVERSATIONS";
        addToastBanner("Over 1,200 messages extracted from target device", "info");
      }, 2000 / state.speed);
    }
  });

  return frame;
}

function getSimTrackingBaseLocation(locationText) {
  const raw = String(locationText || "").trim();
  const q = raw.toLowerCase();

  const presets = [
    { match: ["new york", "nyc"], label: "New York, NY", lat: 40.7128, lon: -74.0060 },
    { match: ["los angeles", "la", "hollywood"], label: "Los Angeles, CA", lat: 34.0522, lon: -118.2437 },
    { match: ["san francisco", "sf"], label: "San Francisco, CA", lat: 37.7749, lon: -122.4194 },
    { match: ["miami"], label: "Miami, FL", lat: 25.7617, lon: -80.1918 },
    { match: ["chicago"], label: "Chicago, IL", lat: 41.8781, lon: -87.6298 },
    { match: ["london"], label: "London, UK", lat: 51.5072, lon: -0.1276 },
    { match: ["paris"], label: "Paris, FR", lat: 48.8566, lon: 2.3522 },
    { match: ["tokyo"], label: "Tokyo, JP", lat: 35.6762, lon: 139.6503 },
    { match: ["lagos"], label: "Lagos, NG", lat: 6.5244, lon: 3.3792 },
  ];

  const hit = presets.find((p) => p.match.some((m) => q.includes(m)));
  if (hit) return hit;

  const pool = [
    { label: "Seattle, WA", lat: 47.6062, lon: -122.3321 },
    { label: "Austin, TX", lat: 30.2672, lon: -97.7431 },
    { label: "Denver, CO", lat: 39.7392, lon: -104.9903 },
    { label: "Atlanta, GA", lat: 33.7490, lon: -84.3880 },
    { label: "Boston, MA", lat: 42.3601, lon: -71.0589 },
  ];

  const fallback = pool[randomInt(0, pool.length - 1)];
  return raw ? { ...fallback, label: raw } : fallback;
}

function escapeMarkup(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function buildPhoneTrackingLoginFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame trk-frame trk-login-frame";

  frame.innerHTML = `
    <div class="mobile-notch"></div>
    <div class="mobile-screen trk-screen trk-login-screen">
      <div class="status-bar trk-status-bar">
        <span>09:43</span>
        <div class="trk-status-right">
          <span>${escapeMarkup(state.customTargetNetwork || "5G")}</span>
          <span>${escapeMarkup(state.customTargetBattery || 85)}%</span>
        </div>
      </div>

      <div class="trk-login-shell">
        <div class="trk-login-mark">TRACE</div>
        <div class="trk-login-title">PHONE TRACKING</div>
        <div class="trk-login-sub">Load target profile before opening the live trace console.</div>

        <form class="trk-login-form" id="trkLoginForm">
          <label>
            <span>Name</span>
            <input name="targetName" type="text" autocomplete="name" placeholder="Friend name" value="${escapeMarkup(state.customTargetName || "")}" required>
          </label>
          <label>
            <span>Phone Number</span>
            <input name="targetPhone" type="tel" autocomplete="tel" placeholder="+1 (746) 844-5451" value="${escapeMarkup(state.customTargetNumber || "")}" required>
          </label>
          <label>
            <span>Email</span>
            <input name="targetEmail" type="email" autocomplete="email" placeholder="name@example.com" value="${escapeMarkup(state.customTargetEmail || "")}" required>
          </label>
          <button class="trk-login-btn" type="submit">Start Tracking</button>
        </form>

        <div class="trk-login-foot">
          <span>LIVE</span>
          <span>SIM</span>
          <span>TRACE MASK READY</span>
        </div>
      </div>
    </div>
  `;

  frame.querySelector("#trkLoginForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

    const data = new FormData(form);
    state.customTargetName = String(data.get("targetName") || "").trim();
    state.customTargetNumber = String(data.get("targetPhone") || "").trim();
    state.customTargetEmail = String(data.get("targetEmail") || "").trim();
    state.customTargetCarrier = state.customTargetCarrier || "Ghost LTE";
    state.customTargetNetwork = state.customTargetNetwork || "5G";

    const trackingFrame = buildPhoneTrackingFrame();
    frame.replaceWith(trackingFrame);
    startPhoneTrackingSimulation(trackingFrame);
  });

  return frame;
}

function buildPhoneTrackingFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame trk-frame";

  const carrier = escapeMarkup(state.customTargetCarrier || "Ghost LTE");
  const target = escapeMarkup(state.customTargetNumber || "+1 (555) 123-4567");
  const targetName = escapeMarkup(state.customTargetName || "Target User");
  const targetEmail = escapeMarkup(state.customTargetEmail || "unknown@mail.local");
  const base = getSimTrackingBaseLocation(state.customTargetLocation);
  const baseLabel = escapeMarkup(base.label);

  frame.innerHTML = `
    <div class="mobile-notch"></div>
    <div class="mobile-screen trk-screen">
      <div class="status-bar trk-status-bar">
        <span>09:43</span>
        <div class="trk-status-right">
          <span>${carrier}</span>
          <span>${escapeMarkup(state.customTargetNetwork || "5G")}</span>
          <span>${escapeMarkup(state.customTargetBattery || 85)}%</span>
        </div>
      </div>

      <div class="trk-head">
        <div>
          <div class="trk-title">PHONE TRACKING</div>
          <div class="trk-sub">Target: <span class="trk-target">${target}</span></div>
          <div class="trk-id-line">${targetName} / ${targetEmail}</div>
        </div>
        <div class="trk-badges">
          <span class="trk-badge live">LIVE</span>
          <span class="trk-badge">SIM</span>
        </div>
      </div>

      <div class="trk-map" aria-label="Tracking map (simulated)">
        <svg class="trk-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline class="trk-route-line" points=""></polyline>
        </svg>

        <div class="trk-tower t1" aria-hidden="true"></div>
        <div class="trk-tower t2" aria-hidden="true"></div>
        <div class="trk-tower t3" aria-hidden="true"></div>

        <div class="trk-dot" style="left: 50%; top: 55%;" aria-hidden="true">
          <div class="trk-dot-core"></div>
        </div>
      </div>

      <div class="trk-metrics">
        <div class="trk-metric">
          <div class="k">Area</div>
          <div class="v" id="trkArea">${baseLabel}</div>
        </div>
        <div class="trk-metric">
          <div class="k">Accuracy</div>
          <div class="v"><span id="trkAcc">--</span> m</div>
        </div>
        <div class="trk-metric">
          <div class="k">Lat</div>
          <div class="v" id="trkLat">--</div>
        </div>
        <div class="trk-metric">
          <div class="k">Lon</div>
          <div class="v" id="trkLon">--</div>
        </div>
        <div class="trk-metric">
          <div class="k">Signal</div>
          <div class="v" style="display: flex; align-items: center; gap: 8px;">
            <div class="trk-signal" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <span id="trkDbm">-- dBm</span>
          </div>
        </div>
        <div class="trk-metric">
          <div class="k">Last Ping</div>
          <div class="v" id="trkPing">--</div>
        </div>
      </div>

      <div class="trk-actions">
        <button class="chip" data-action="ping">Ping</button>
        <button class="chip" data-action="triangulate">Triangulate</button>
        <button class="chip" data-action="lockon">Lock-On</button>
      </div>

      <div class="terminal trk-log" id="trkLog" style="
        margin: 12px 14px 10px;
        height: 120px;
        border-radius: 10px;
        padding: 10px;
        overflow: auto;
        background: rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255,255,255,0.08);
        font-family: var(--mono);
        font-size: 11px;
        line-height: 1.35;
      "></div>

      <div style="padding: 0 14px 14px; font-size: 11px; color: var(--muted);">
        SIMULATION ONLY. DOES NOT TRACK REAL DEVICES.
      </div>
    </div>
  `;

  return frame;
}

function startPhoneTrackingSimulation(frame) {
  const map = frame?.querySelector(".trk-map");
  const dot = frame?.querySelector(".trk-dot");
  const poly = frame?.querySelector(".trk-route-line");
  const towers = Array.from(frame?.querySelectorAll(".trk-tower") || []);
  const bars = Array.from(frame?.querySelectorAll(".trk-signal span") || []);

  const log = frame?.querySelector("#trkLog");
  const latEl = frame?.querySelector("#trkLat");
  const lonEl = frame?.querySelector("#trkLon");
  const accEl = frame?.querySelector("#trkAcc");
  const pingEl = frame?.querySelector("#trkPing");
  const areaEl = frame?.querySelector("#trkArea");
  const dbmEl = frame?.querySelector("#trkDbm");

  if (!map || !dot || !poly || !log) return;

  const base = getSimTrackingBaseLocation(state.customTargetLocation);
  if (areaEl) areaEl.textContent = base.label;

  const fmtTime = (d) => {
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  const setBars = (level) => {
    bars.forEach((b, i) => b.classList.toggle("on", i < level));
  };

  const setDot = (x, y) => {
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
  };

  const addPulse = (x, y) => {
    const pulse = document.createElement("div");
    pulse.className = "trk-pulse";
    pulse.style.left = `${x}%`;
    pulse.style.top = `${y}%`;
    map.appendChild(pulse);
    setTimeout(() => pulse.remove(), 1400);
  };

  const route = [];
  const maxRoute = 22;

  const updateRoute = () => {
    const pts = route.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    poly.setAttribute("points", pts);
  };

  let x = randomInt(28, 72);
  let y = randomInt(26, 78);
  let tx = randomInt(12, 88);
  let ty = randomInt(16, 90);

  let lockOn = true;
  let accuracy = randomInt(70, 180);
  let lastPing = null;

  const pickTarget = () => {
    // Bias toward center to keep the dot in view.
    tx = randomInt(16, 84);
    ty = randomInt(18, 88);
  };

  const setTelemetry = () => {
    const lat = base.lat + ((50 - y) / 50) * 0.035 + (Math.random() - 0.5) * 0.0016;
    const lon = base.lon + ((x - 50) / 50) * 0.035 + (Math.random() - 0.5) * 0.0016;
    if (latEl) latEl.textContent = lat.toFixed(5);
    if (lonEl) lonEl.textContent = lon.toFixed(5);

    accuracy = clamp(accuracy + (lockOn ? randomInt(-6, 2) : randomInt(-1, 7)), 6, 260);
    if (accEl) accEl.textContent = String(Math.round(accuracy));

    const level = clamp(lockOn ? randomInt(3, 5) : randomInt(2, 4), 1, 5);
    setBars(level);
    if (dbmEl) dbmEl.textContent = `${-95 + (level * 6) + randomInt(-3, 2)} dBm`;

    if (lastPing && pingEl) pingEl.textContent = fmtTime(lastPing);
  };

  const ping = (reason = "PING") => {
    if (!state.running || !frame.isConnected) return;
    lastPing = new Date();
    appendLog(log, `> ${reason}: ping ok (${fmtTime(lastPing)})`);
    if (pingEl) pingEl.textContent = fmtTime(lastPing);
    addPulse(x, y);
  };

  const flashTowers = () => {
    towers.forEach((t, idx) => {
      const delay = (idx * 110) / state.speed;
      setTimeout(() => {
        if (!state.running) return;
        t.classList.add("active");
        setTimeout(() => t.classList.remove("active"), 520);
      }, delay);
    });
  };

  const triangulate = (manual = false) => {
    if (!state.running || !frame.isConnected) return;
    appendLog(log, `> TRIANGULATE: syncing towers... ${manual ? "(manual)" : ""}`.trim());
    flashTowers();
    accuracy = clamp(accuracy - randomInt(18, 42), 6, 260);
    addPulse(x, y);
    addToastBanner("Triangulation complete (simulated).", "info");
  };

  frame.querySelector(".trk-actions")?.addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const action = e.target.dataset.action;
    if (!action) return;

    if (action === "ping") ping("MANUAL");
    if (action === "triangulate") triangulate(true);
    if (action === "lockon") {
      lockOn = !lockOn;
      e.target.classList.toggle("active", lockOn);
      addToastBanner(lockOn ? "Lock-on enabled (simulated)." : "Lock-on released (simulated).", "info");
      appendLog(log, `> LOCK-ON: ${lockOn ? "ON" : "OFF"}`);
    }
  });

  // Boot sequence
  appendLog(log, "> Booting tracker module...");
  appendLog(log, `> Target: ${state.customTargetNumber || "UNKNOWN"}`);
  appendLog(log, "> Establishing passive pings...");

  route.push({ x, y });
  setDot(x, y);
  setTelemetry();
  updateRoute();

  setTimeout(() => { if (state.running) ping("AUTO"); }, 650 / state.speed);
  setTimeout(() => { if (state.running) triangulate(false); }, 1200 / state.speed);

  // Live tracking loop (simulation only)
  const tick = () => {
    if (!state.running || !frame.isConnected) return;

    const ease = lockOn ? 0.09 : 0.07;
    x += (tx - x) * ease + (Math.random() - 0.5) * (lockOn ? 0.7 : 1.0);
    y += (ty - y) * ease + (Math.random() - 0.5) * (lockOn ? 0.7 : 1.0);

    x = clamp(x, 6, 94);
    y = clamp(y, 6, 94);

    if (Math.hypot(tx - x, ty - y) < 3.3 || Math.random() < 0.02) pickTarget();

    route.push({ x, y });
    if (route.length > maxRoute) route.shift();
    updateRoute();
    setDot(x, y);
    setTelemetry();

    // Passive pings every few seconds (randomized)
    if (Math.random() < 0.08) ping("PASSIVE");

    setTimeout(tick, 420 / state.speed);
  };

  tick();
}

function buildPhoneTerminalFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame trm-frame";

  const carrier = state.customTargetCarrier || "Demo LTE";
  const target = state.customTargetNumber || "+1 (555) 123-4567";

  frame.innerHTML = `
    <div class="mobile-notch"></div>
    <div class="mobile-screen trm-screen">
      <img class="trm-bg" src="/assets/phone-terminal-bg.jfif" alt="" aria-hidden="true" />
      <div class="status-bar">
        <span>14:42</span>
        <div style="display: flex; gap: 6px;">
          <span>${carrier}</span>
          <span>${state.customTargetNetwork || "4G"}</span>
          <span>${state.customTargetBattery || 78}%</span>
        </div>
      </div>

      <div class="trm-terminal" role="region" aria-label="Phone terminal (simulated)">
        <div class="trm-banner">
          <div class="trm-banner-title">SIMDECK-TOOL</div>
          <div class="trm-banner-ver">v2.3</div>
        </div>

        <div class="trm-meta">
          <div><span class="g">[+]</span> company : <span class="w">${state.customTargetName || "Demo Target"}</span></div>
          <div><span class="g">[+]</span> target  : <span class="w">${target}</span></div>
          <div><span class="g">[+]</span> mode    : <span class="w">SIMULATION ONLY</span></div>
        </div>

        <div class="trm-menu">
          <div><span class="n">01</span><span class="m"><b>Profile Scan</b><small>fake metadata</small></span></div>
          <div><span class="n">02</span><span class="m"><b>Signal Probe</b><small>animated pings</small></span></div>
          <div><span class="n">03</span><span class="m"><b>App Audit</b><small>mock app list</small></span></div>
          <div><span class="n">04</span><span class="m"><b>Message Tease</b><small>prank preview</small></span></div>
          <div><span class="n">05</span><span class="m"><b>Camera Feed</b><small>simulated CCTV</small></span></div>
          <div><span class="n">06</span><span class="m"><b>Data Export</b><small>fake transfer</small></span></div>
          <div><span class="n">99</span><span class="m"><b>Exit System</b><small>return home</small></span></div>
        </div>

        <div class="trm-log" id="trmLog" aria-live="polite"></div>

        <div class="trm-input">
          <span class="p">Options:</span>
          <input class="trm-opt" id="trmOpt" inputmode="numeric" autocomplete="off" maxlength="2" placeholder="01" />
          <button class="chip trm-run" id="trmRunBtn" type="button">Run</button>
          <span class="trm-cursor" aria-hidden="true"></span>
        </div>

        <div class="trm-foot">SIMULATION ONLY. NO REAL TOOLS. NO REAL ACCESS.</div>
      </div>
    </div>
  `;

  return frame;
}

function startPhoneTerminalSimulation(frame) {
  const log = frame?.querySelector("#trmLog");
  const opt = frame?.querySelector("#trmOpt");
  const runBtn = frame?.querySelector("#trmRunBtn");
  if (!log || !opt || !runBtn) return;

  const nowTime = () => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  const write = (line) => {
    if (!state.running || !frame.isConnected) return;
    const el = document.createElement("div");
    el.textContent = line;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
  };

  const burst = (lines, baseDelay = 180) => {
    const factor = 1 / state.speed;
    let i = 0;
    const step = () => {
      if (!state.running || !frame.isConnected) return;
      if (i >= lines.length) return;
      write(lines[i]);
      i += 1;
      setTimeout(step, (baseDelay + randomInt(-40, 90)) * factor);
    };
    step();
  };

  const runOption = (code) => {
    if (!state.running || !frame.isConnected) return;
    const c = String(code || "01").trim() || "01";
    const n = c.padStart(2, "0");

    write(``);
    write(`> [${nowTime()}] SELECT ${n}`);

    if (n === "99") {
      burst([
        "> Closing session...",
        "> Clearing simulated buffers...",
        "> Bye.",
      ], 210);
      setTimeout(() => {
        if (!state.running) return;
        exitToHome();
      }, (900 / state.speed));
      return;
    }

    const programs = {
      "01": () => burst([
        "> Initializing profile scan...",
        "> Reading demo headers...",
        "> Device: DemoPhone X",
        `> Carrier: ${state.customTargetCarrier || "Demo LTE"}`,
        "> OS: locked (simulated)",
        "> Result: profile captured (fake)",
      ], 190),
      "02": () => burst([
        "> Starting signal probe...",
        "> Ping: ok",
        "> Ping: ok",
        "> Triangulation: stable (simulated)",
        "> Accuracy: " + randomInt(12, 140) + " m",
      ], 170),
      "03": () => burst([
        "> Auditing apps (fake)...",
        "> com.social.app   [ok]",
        "> com.bank.demo    [locked]",
        "> com.photos.demo  [ok]",
        "> Summary: 3 apps listed (simulated)",
      ], 185),
      "04": () => burst([
        "> Opening message tease...",
        "> Loading preview...",
        `> Last text: "Where are you?" (fake)`,
        "> Sending typing indicator... (prank)",
        "> Done.",
      ], 175),
      "05": () => burst([
        "> Linking camera feed...",
        "> Stream: simulated",
        "> Buffering frames...",
        "> No real camera access.",
      ], 195),
      "06": () => burst([
        "> Preparing export channel...",
        "> Establishing tunnel (simulated)...",
        "> Uploading: 0%",
        "> Uploading: 27%",
        "> Uploading: 61%",
        "> Uploading: 100%",
        "> Export complete (fake)",
      ], 165),
    };

    if (!programs[n]) {
      burst([
        "> Unknown option.",
        "> Tip: choose 01-06 or 99.",
      ], 190);
      return;
    }

    programs[n]();
    opt.value = n;
  };

  runBtn.addEventListener("click", (event) => {
    event.preventDefault();
    runOption(opt.value);
  });
  opt.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runOption(opt.value);
    }
  });

  // Boot sequence
  burst([
    "> Booting mobile terminal...",
    "> Loading modules (simulated)...",
    "> Ready.",
    "> Type an option and press Run.",
  ], 200);

  // Ambient activity
  const ambient = () => {
    if (!state.running || !frame.isConnected) return;
    if (Math.random() < 0.35) {
      const msg = [
        "> Heartbeat: ok",
        "> Socket: stable (simulated)",
        "> Cache: warmed",
        "> Trace: placeholder",
      ][randomInt(0, 3)];
      write(msg);
    }
    setTimeout(ambient, (1400 + randomInt(-400, 800)) / state.speed);
  };
  setTimeout(ambient, 1600 / state.speed);
}

function buildPhonePrankFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame";
  frame.style.borderColor = "var(--danger)";
  frame.style.boxShadow = "0 0 40px rgba(255, 79, 109, 0.4)";

  frame.innerHTML = `
    <div class="mobile-top">
      <span style="color: var(--danger); font-weight: bold;">⚠️ SYSTEM COMPROMISED</span>
      <span class="phone-status" style="color: var(--danger);">CRITICAL</span>
    </div>
    <div class="mobile-body">
      <div class="small-label" style="color: var(--danger);">REMOTE ACCESS DETECTED</div>
      
      <div class="status-grid" style="margin-bottom: 20px;">
        <div class="status-card" style="border-color: var(--danger);"><div class="label">HACKER</div><div class="value">ANONYMOUS</div></div>
        <div class="status-card" style="border-color: var(--danger);"><div class="label">PERMISSION</div><div class="value">FULL ROOT</div></div>
      </div>

      <div class="alert danger" style="text-align: center; font-weight: bold; margin-bottom: 20px; animation: blink 0.5s infinite;">
        WARNING: DATA EXFILTRATION IN PROGRESS
      </div>

      <div class="progress" style="margin-bottom: 10px; border-color: var(--danger);">
        <div class="progress-bar" style="background: rgba(255, 79, 109, 0.2);"><div class="progress-fill" style="background: var(--danger);"></div></div>
        <div class="progress-stage" style="color: var(--danger); font-weight: bold;">CONNECTING...</div>
      </div>

      <div class="terminal" style="height: 120px; margin-bottom: 10px; color: var(--danger); border-color: var(--danger);" id="prank-terminal">
        > SHELL ACCESS: GRANTED
        > OVERRIDING USER CONTROLS...
        > PREPARING UPLOAD STREAM...
      </div>

      <div class="chip-row">
        <button class="chip" style="border-color: var(--danger); color: var(--danger);" data-action="stop">STOP UPLOAD</button>
        <button class="chip" style="border-color: var(--danger); color: var(--danger);" data-action="plead">BEG FOR MERCY</button>
      </div>
      
      <div class="small-label" style="margin-top:15px; text-align: center;">JUST A PRANK BRO - SIMULATION ONLY</div>
    </div>
  `;

  frame.querySelector(".mobile-body").addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const action = e.target.dataset.action;
    const terminal = frame.querySelector("#prank-terminal");

    if (action === "stop") {
      terminal.innerHTML += "<div>> ACCESS DENIED. YOU CANNOT STOP THIS.</div>";
      addToastBanner("Admin access required to stop upload.", "danger");
    }

    if (action === "plead") {
      terminal.innerHTML += "<div>> YOUR TEARS FUEL MY ALGORITHM.</div>";
      addToastBanner("Plea rejected by hacker.", "warning");
    }
  });

  return frame;
}



function buildPhoneExfilFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame";
  frame.style.borderColor = "var(--accent)";

  const carrier = state.customTargetCarrier || 'Demo LTE';

  frame.innerHTML = `
    <div class="mobile-notch"></div>
    <div class="mobile-screen" style="background: #05060a;">
      <div class="status-bar">
        <span>09:42</span>
        <div style="display: flex; gap: 6px;">
          <span>${carrier}</span>
          <span>WiFi</span>
          <span>100%</span>
        </div>
      </div>
      
      <div style="padding: 20px; padding-top: 60px; color: var(--text);">
        <div style="font-size: 12px; color: var(--muted); margin-bottom: 5px;">TARGET DEVICE</div>
        <div style="font-size: 18px; font-weight: bold; margin-bottom: 20px;">${state.customTargetModel || 'DemoPhone X'}</div>
        
        <div style="font-size: 12px; color: var(--muted); margin-bottom: 10px;">DATA SELECTOR</div>
        
        <div class="exfil-options" style="display: grid; gap: 10px; margin-bottom: 20px;">
          <label class="toggle-row" style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
            <input type="checkbox" checked data-type="photos">
            <span>Photos & Gallery (1.2 GB)</span>
          </label>
          <label class="toggle-row" style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
            <input type="checkbox" checked data-type="contacts">
            <span>Contacts & Logs (4 MB)</span>
          </label>
          <label class="toggle-row" style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
            <input type="checkbox" checked data-type="messages">
            <span>SMS & Chat (150 MB)</span>
          </label>
        </div>

        <button class="btn primary" style="width: 100%; margin-bottom: 20px;" id="startExfilBtn">INITIATE EXFILTRATION</button>
        
        <div class="exfil-progress" style="display: none;">
          <div style="font-size: 12px; color: var(--accent); margin-bottom: 5px;" id="exfilStatus">CONNECTING...</div>
          <div class="progress" style="margin-bottom: 15px;">
             <div class="progress-bar"><div class="progress-fill" id="exfilBar"></div></div>
          </div>
          <div class="terminal" style="height: 150px; font-size: 11px;" id="exfilLog"></div>
        </div>
      </div>
    </div>
  `;

  const btn = frame.querySelector("#startExfilBtn");
  const progressArea = frame.querySelector(".exfil-progress");
  const bar = frame.querySelector("#exfilBar");
  const status = frame.querySelector("#exfilStatus");
  const log = frame.querySelector("#exfilLog");
  const checkboxes = frame.querySelectorAll("input[type=checkbox]");

  btn.addEventListener("click", () => {
    btn.disabled = true;
    btn.textContent = "EXFILTRATION IN PROGRESS...";
    progressArea.style.display = "block";

    // Disable checkboxes
    checkboxes.forEach(c => c.disabled = true);

    // Start simulation
    let logLines = [
      "> Establishing secure tunnel...",
      "> Handshake authenticated.",
      "> Bypassing file permissions...",
      "> Root access confirmed."
    ];

    let totalSize = 0;
    checkboxes.forEach(c => {
      if (c.checked) {
        if (c.dataset.type === 'photos') { logLines.push("> Queuing 1,420 image files..."); totalSize += 1200; }
        if (c.dataset.type === 'contacts') { logLines.push("> Queuing 350 vCard entries..."); totalSize += 4; }
        if (c.dataset.type === 'messages') { logLines.push("> Queuing DB_SMS_BACKUP.enc..."); totalSize += 150; }
      }
    });

    if (totalSize === 0) {
      logLines.push("> No data selected. Aborting.");
      progressArea.style.display = "block";
      status.textContent = "ABORTED";
      status.style.color = "var(--danger)";
      return;
    }

    let lineIdx = 0;
    let pct = 0;

    const interval = setInterval(() => {
      if (lineIdx < logLines.length) {
        appendLog(log, logLines[lineIdx]);
        lineIdx++;
      } else {
        // File transfer phase
        if (pct < 100) {
          pct += (Math.random() * 5);
          animateProgress(bar, pct);
          status.textContent = `UPLOADING... ${(pct).toFixed(1)}%`;

          // Random file names
          if (Math.random() > 0.7) {
            const files = ["IMG_0992.JPG", "DCIM_2024.MP4", "passwords.txt", "dump_2024.sql", "chat_log.db"];
            appendLog(log, `> Uploading ${files[Math.floor(Math.random() * files.length)]}... OK`);
          }
        } else {
          clearInterval(interval);
          status.textContent = "EXFILTRATION COMPLETE";
          status.style.color = "var(--success)";
          btn.textContent = "EXPORT FINISHED";
          appendLog(log, "> Connection closed cleanly.");
          addToastBanner("Data export successful (simulated).", "success");
        }
      }
    }, 400 / state.speed);
  });

  return frame;
}

function buildEmailUI() {
  const wrap = document.createElement("div");
  wrap.className = "mail-ui";
  wrap.innerHTML = `
    <div class="alert">Suspicious login detected (simulated)</div>
    <div class="progress" style="margin-bottom:10px;">
      <div class="progress-bar"><div class="progress-fill"></div></div>
      <div class="progress-stage">Awaiting sync</div>
    </div>
    <ul class="mail-list"></ul>
    <div class="mail-body">Select a message to view redacted content.</div>
  `;
  return wrap;
}

function renderMails(wrap) {
  const list = wrap.querySelector(".mail-list");
  const body = wrap.querySelector(".mail-body");
  const mails = [
    { subject: "Redacted Report A", from: "system@demo.local", time: "02:14" },
    { subject: "System Notice B", from: "alerts@example.com", time: "02:16" },
    { subject: "Fictional Brief C", from: "noreply@example.org", time: "02:18" },
  ];
  list.innerHTML = "";
  mails.forEach((m) => {
    const li = document.createElement("li");
    li.className = "mail-item";
    li.innerHTML = `<div class="subject">${m.subject}</div><div class="from">${m.from} - ${m.time}</div>`;
    li.addEventListener("click", () => {
      body.innerHTML = `<div class="small-label">Message Body (simulated)</div>
        <p>Lorem ipsum dolor sit amet. Sender: [redacted]. Tokens: [xxxx-xxxx].</p>`;
    });
    list.appendChild(li);
  });
}

function buildVirusUI() {
  const wrap = document.createElement("div");
  wrap.className = "virus-ui";
  wrap.innerHTML = `
    <div class="alert warning">No real scan is happening.</div>
    <div class="progress" style="margin-bottom:8px;">
      <div class="progress-bar"><div class="progress-fill"></div></div>
      <div class="progress-stage">Idle</div>
    </div>
    <div class="terminal virus-log"></div>
    <button class="btn primary quarantine-btn" style="margin-top:8px;" disabled>Quarantine</button>
  `;
  wrap.querySelector(".quarantine-btn").addEventListener("click", () => {
    appendLog(wrap.querySelector(".virus-log"), "Quarantine executed (simulated)...");
    animateProgress(wrap.querySelector(".progress-fill"), 100);
  });
  return wrap;
}

function buildIOSUpdater() {
  const card = document.createElement("div");
  card.className = "overlay-card ios-ui";
  card.style.position = "absolute";
  card.style.top = "50%";
  card.style.left = "50%";
  card.style.transform = "translate(-50%, -50%)";
  card.innerHTML = `
    <div class="title">Updating...</div>
    <div class="progress">
      <div class="progress-bar"><div class="progress-fill"></div></div>
      <div class="progress-stage">0%</div>
    </div>
    <button class="btn ghost" style="margin-top:10px;" id="panicBtn">Stop Update (Fake Panic)</button>
    <div class="small-label">Loops at 99%. Simulation only.</div>
  `;
  card.querySelector("#panicBtn").addEventListener("click", () => showOverlay(fakePanicText(), true));
  return card;
}

function buildAndroidSim() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame android-ui android-sim-frame";
  frame.style.cssText = `
    border-color: #10141c;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.62), 0 0 0 1px rgba(255, 255, 255, 0.08);
  `;

  const battery = state.customTargetBattery || Math.floor(Math.random() * 60) + 20;
  const carrier = state.customTargetCarrier || "T-Mobile";
  const device = state.customTargetModel || "Galaxy S24 Ultra";
  const targetName = state.customTargetName || "Target User";

  frame.innerHTML = `
    <!-- Android Status Bar -->
    <div class="android-status-bar" style="
      display: flex;
      justify-content: space-between;
      padding: 8px 16px;
      background: #0a0a0a;
      font-size: 12px;
      color: #fff;
    ">
      <span>10:42</span>
      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-size: 10px;">${carrier}</span>
        <span>📶</span>
        <span>🔋 ${battery}%</span>
      </div>
    </div>

    <!-- Android Navigation Pills Area -->
    <div class="android-content" style="background: linear-gradient(180deg, #0a0a0a 0%, #111827 100%); height: 100%; padding: 20px; overflow-y: auto;">
      
      <!-- Warning Header -->
      <div style="
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.05));
        border: 1px solid rgba(239, 68, 68, 0.5);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 20px;
        text-align: center;
      ">
        <div style="font-size: 28px; margin-bottom: 8px;">⚠️</div>
        <div style="color: #ef4444; font-weight: bold; font-size: 14px;">SYSTEM DIAGNOSTIC MODE</div>
        <div style="color: #94a3b8; font-size: 11px; margin-top: 5px;">Recovery Console Active</div>
      </div>

      <!-- Device Info Card -->
      <div style="
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 15px;
      ">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #4ade80, #22c55e);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
          ">🤖</div>
          <div>
            <div style="color: #fff; font-weight: bold; font-size: 14px;">${device}</div>
            <div style="color: #94a3b8; font-size: 11px;">Android 14 • Build QPR3</div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px;">
            <div style="color: #94a3b8; font-size: 10px;">TARGET</div>
            <div style="color: #fff; font-size: 12px; font-weight: bold;">${targetName}</div>
          </div>
          <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px;">
            <div style="color: #94a3b8; font-size: 10px;">STORAGE</div>
            <div style="color: #fff; font-size: 12px; font-weight: bold;">128GB / 256GB</div>
          </div>
        </div>
      </div>

      <!-- Progress Section -->
      <div style="
        background: rgba(74, 222, 128, 0.1);
        border: 1px solid rgba(74, 222, 128, 0.3);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 15px;
      ">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="color: #4ade80; font-size: 12px; font-weight: bold;">SYSTEM SCAN</span>
          <span style="color: #4ade80; font-size: 12px;" id="androidProgress">0%</span>
        </div>
        <div style="
          background: rgba(0,0,0,0.5);
          border-radius: 6px;
          height: 8px;
          overflow: hidden;
        ">
          <div id="androidProgressBar" style="
            background: linear-gradient(90deg, #4ade80, #22c55e);
            height: 100%;
            width: 0%;
            transition: width 0.3s ease;
          "></div>
        </div>
        <div style="color: #94a3b8; font-size: 11px; margin-top: 8px;" id="androidStatus">Ready to scan...</div>
      </div>

      <!-- Log Terminal -->
      <div style="
        background: #000;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 10px;
        height: 120px;
        overflow-y: auto;
        font-family: monospace;
        font-size: 11px;
        margin-bottom: 15px;
      " class="android-log">
        <div style="color: #4ade80;">> Android Recovery Console v3.1</div>
        <div style="color: #94a3b8;">> Waiting for user input...</div>
      </div>

      <!-- Action Buttons -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
        <button class="android-btn" data-action="scan" style="
          background: linear-gradient(135deg, #4ade80, #22c55e);
          color: #000;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 13px;
          cursor: pointer;
        ">🔍 Full Scan</button>
        <button class="android-btn" data-action="repair" style="
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 13px;
          cursor: pointer;
        ">🔧 Auto Repair</button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
        <button class="android-btn" data-action="cache" style="
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px;
          border-radius: 10px;
          font-size: 11px;
          cursor: pointer;
        ">Clear Cache</button>
        <button class="android-btn" data-action="safe" style="
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px;
          border-radius: 10px;
          font-size: 11px;
          cursor: pointer;
        ">Safe Mode</button>
        <button class="android-btn" data-action="restart" style="
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 12px;
          border-radius: 10px;
          font-size: 11px;
          cursor: pointer;
        ">Reboot</button>
      </div>

      <!-- Disclaimer -->
      <div style="
        text-align: center;
        color: #64748b;
        font-size: 10px;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255,255,255,0.1);
      ">
        🎭 SIMULATION ONLY • NO REAL DATA ACCESSED
      </div>
    </div>

    <!-- Android Navigation Bar -->
    <div class="android-nav-bar" style="
      display: flex;
      justify-content: center;
      gap: 40px;
      padding: 12px;
      background: #0a0a0a;
    ">
      <div style="width: 16px; height: 16px; border: 2px solid #666; border-radius: 3px;"></div>
      <div style="width: 16px; height: 16px; border: 2px solid #666; border-radius: 50%;"></div>
      <div style="width: 0; height: 0; border-left: 9px solid transparent; border-right: 9px solid transparent; border-bottom: 14px solid #666;"></div>
    </div>
  `;

  // Add interactivity
  const log = frame.querySelector(".android-log");
  const progressBar = frame.querySelector("#androidProgressBar");
  const progressText = frame.querySelector("#androidProgress");
  const statusText = frame.querySelector("#androidStatus");

  frame.querySelectorAll(".android-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      if (action === "scan") {
        runAndroidScan(log, progressBar, progressText, statusText);
      } else if (action === "repair") {
        runAndroidRepair(log, progressBar, progressText, statusText);
      } else if (action === "cache") {
        appendLog(log, "> Clearing system cache...");
        setTimeout(() => appendLog(log, "> Cache cleared: 1.2GB freed"), 800);
        addToast("Cache cleared successfully", "success");
      } else if (action === "safe") {
        appendLog(log, "> Entering Safe Mode...");
        addToast("Safe Mode will activate on next reboot", "info");
      } else if (action === "restart") {
        appendLog(log, "> Initiating system reboot...");
        addToast("Rebooting device (simulated)...", "warning");
        setTimeout(() => {
          frame.style.opacity = "0.5";
          setTimeout(() => frame.style.opacity = "1", 1500);
        }, 500);
      }
    });
  });

  return frame;
}

// Android Scan Simulation
function runAndroidScan(log, progressBar, progressText, statusText) {
  const scanSteps = [
    { msg: "> Initializing system scan...", pct: 5 },
    { msg: "> Scanning bootloader integrity...", pct: 15 },
    { msg: "> Checking system partition...", pct: 25 },
    { msg: "> Verifying app signatures...", pct: 35 },
    { msg: "> Scanning for malware...", pct: 50 },
    { msg: "> Analyzing network permissions...", pct: 65 },
    { msg: "> Checking storage health...", pct: 75 },
    { msg: "> Validating security patches...", pct: 85 },
    { msg: "> Generating report...", pct: 95 },
    { msg: "> ✓ Scan complete - 3 issues found", pct: 100 }
  ];

  let i = 0;
  statusText.textContent = "Scanning...";

  const interval = setInterval(() => {
    if (i >= scanSteps.length) {
      clearInterval(interval);
      statusText.textContent = "Scan complete - 3 issues detected";
      statusText.style.color = "#fbbf24";
      addToast("Scan complete: 3 issues found", "warning");
      return;
    }

    appendLog(log, scanSteps[i].msg);
    progressBar.style.width = scanSteps[i].pct + "%";
    progressText.textContent = scanSteps[i].pct + "%";
    i++;
  }, 600);
}

// Android Repair Simulation
function runAndroidRepair(log, progressBar, progressText, statusText) {
  const repairSteps = [
    { msg: "> Starting auto-repair sequence...", pct: 10 },
    { msg: "> Rebuilding app cache...", pct: 25 },
    { msg: "> Optimizing dalvik-cache...", pct: 40 },
    { msg: "> Repairing file permissions...", pct: 55 },
    { msg: "> Clearing temporary files...", pct: 70 },
    { msg: "> Rebuilding package database...", pct: 85 },
    { msg: "> ✓ Repair complete - System optimized", pct: 100 }
  ];

  let i = 0;
  statusText.textContent = "Repairing...";
  statusText.style.color = "#3b82f6";

  const interval = setInterval(() => {
    if (i >= repairSteps.length) {
      clearInterval(interval);
      statusText.textContent = "System optimized successfully";
      statusText.style.color = "#4ade80";
      addToast("Repair complete: System optimized", "success");
      return;
    }

    appendLog(log, repairSteps[i].msg);
    progressBar.style.width = repairSteps[i].pct + "%";
    progressText.textContent = repairSteps[i].pct + "%";
    i++;
  }, 700);
}

function buildCrackPicker() {
  const wrap = document.createElement("div");
  wrap.className = "crack-picker";
  wrap.innerHTML = `
    <div class="crack-picker-head">
      <div>
        <div class="directory-kicker">Hollywood Hacker</div>
        <h2>Choose Cracked Screen</h2>
        <p>Select a mobile or desktop cracked display prank. The effect is visual only.</p>
      </div>
    </div>
    <div class="crack-choice-grid">
      <button class="crack-choice mobile" type="button" data-crack-style="mobile">
        <span class="crack-thumb"><img src="/assets/crack-mobile.png" alt=""></span>
        <strong>Mobile Crack</strong>
        <small>Portrait phone damage with dense spider cracks.</small>
      </button>
      <button class="crack-choice desktop" type="button" data-crack-style="desktop">
        <span class="crack-thumb"><img src="/assets/crack-desktop.png" alt=""></span>
        <strong>Desktop Crack</strong>
        <small>Wide monitor damage with broken panel lines.</small>
      </button>
    </div>
  `;

  wrap.addEventListener("click", (event) => {
    const choice = event.target instanceof HTMLElement ? event.target.closest(".crack-choice") : null;
    if (!choice) return;
    launchCrackOverlay(choice.dataset.crackStyle || "desktop");
  });

  return wrap;
}

function launchCrackOverlay(style) {
  els.stage.innerHTML = "";
  toggleSeoGuide(false);
  const overlay = buildCrackOverlay(style);
  const mode = overlay.dataset.pattern || "desktop";
  document.body.classList.add("crack-prank-active", "crack-prank-live");
  document.body.classList.toggle("crack-prank-mobile", mode === "mobile");
  document.body.classList.toggle("crack-prank-desktop", mode === "desktop");
  els.stage.appendChild(overlay);
}

function buildCrackOverlay(style) {
  const overlay = document.createElement("div");
  overlay.className = "crack-overlay";
  setCrackPattern(overlay, style);
  const hint = document.createElement("div");
  hint.className = "overlay";
  hint.style.background = "transparent";
  hint.style.pointerEvents = "none";
  hint.innerHTML = `<div class="overlay-card"><div class="title">Cracked Screen</div><div class="subtitle">Visual prank only. Quick exit always available.</div></div>`;
  overlay.appendChild(hint);
  return overlay;
}

function setCrackPattern(el, style) {
  const patterns = {
    mobile: "url('/assets/crack-mobile.png')",
    desktop: "url('/assets/crack-desktop.png')",
  };
  const key = patterns[style] ? style : "desktop";
  el.dataset.pattern = key;
  el.classList.toggle("crack-mobile-mode", key === "mobile");
  el.classList.toggle("crack-desktop-mode", key === "desktop");
  el.style.backgroundImage = patterns[key] || patterns.desktop;
}

function buildEmailHijackUI() {
  const frame = document.createElement("div");
  frame.className = "email-hijack-frame ehj-frame";
  frame.style.cssText = `
    width: 100%;
    max-width: min(1180px, calc(100vw - 40px));
    height: min(680px, calc(100dvh - 118px));
    min-height: 560px;
    background: #1a1a2e;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    position: relative;
  `;

  const targetEmail = state.customTargetEmail ||
    (state.customTargetName
      ? `${state.customTargetName.toLowerCase().replace(/\s+/g, '.')}@gmail.com`
      : "target.user@gmail.com");
  const prankUrl = "https://hackerprank.online/fake-phone-hacking/";
  const mailboxes = {
    inbox: [
      { from: "🏦 Chase Bank", subject: "Your account statement is ready", preview: "Account ending in ****4521 - New statement available...", time: "2 hours ago", tone: "danger" },
      { from: "🔐 Google Security", subject: "Security alert: New sign-in detected", preview: "We noticed a sign-in from a new device...", time: "5 hours ago", tone: "warn" },
      { from: "🎭 SimDeck Prank URL", subject: "Your prank link is armed", preview: `${prankUrl} - opens the phone hacking simulation screen.`, time: "8 hours ago", tone: "accent" },
      { from: "💬 Unknown Sender", subject: "Bro click this before it expires", preview: "One-time simulation link: hackerprank.online/hacker-prank/", time: "Today", tone: "accent" },
      { from: "💳 PayPal", subject: "You sent $250.00 to John Smith", preview: "Transaction ID: 7XK29401RT...", time: "Yesterday", tone: "normal" },
      { from: "🛒 Amazon", subject: "Your order has shipped!", preview: "Order #114-2847593-1847293 is on its way...", time: "2 days ago", tone: "normal" },
      { from: "📱 PhoneSync", subject: "New device paired successfully", preview: "DemoPhone X linked from nearby network node...", time: "2 days ago", tone: "warn" },
      { from: "🏫 School Portal", subject: "Login code requested", preview: "A six-digit sign-in code was requested for your profile...", time: "3 days ago", tone: "normal" },
      { from: "🧾 Subscription TV", subject: "Payment failed - action required", preview: "Your plan could not renew. Update billing to continue...", time: "4 days ago", tone: "danger" },
      { from: "🎮 GameHub", subject: "Your squad invite is live", preview: "Join link copied: hackerprank.online/email-hack-simulator/", time: "5 days ago", tone: "accent" },
      { from: "📷 Cloud Album", subject: "New shared album invite", preview: "A private album invite was opened from this browser...", time: "6 days ago", tone: "normal" },
      { from: "🎟️ EventPass", subject: "Ticket transfer pending", preview: "Review the pending transfer before midnight.", time: "Last week", tone: "warn" },
    ],
    starred: [
      { from: "⭐ SimDeck Setup", subject: "Favorite prank links", preview: "Phone hack, email hack, cracked screen, and fake update links saved.", time: "Pinned", tone: "accent" },
      { from: "🔐 Google Security", subject: "Security alert: New sign-in detected", preview: "Starred for follow-up by account owner.", time: "5 hours ago", tone: "warn" },
      { from: "🎮 GameHub", subject: "Your squad invite is live", preview: "Funny link saved for later: hackerprank.online/hacker-prank/", time: "5 days ago", tone: "accent" },
      { from: "🧠 Notes to Self", subject: "Prank timing ideas", preview: "Wait until they unlock the phone, then open the simulation.", time: "Last week", tone: "normal" },
      { from: "📱 PhoneSync", subject: "New device paired successfully", preview: "Marked important after the staged device alert.", time: "2 days ago", tone: "warn" },
      { from: "🧾 Subscription TV", subject: "Payment failed - action required", preview: "Saved because it looks dramatic in the inbox.", time: "4 days ago", tone: "danger" },
      { from: "🛰️ Satellite Link", subject: "Map trace link ready", preview: "Open phone tracking prank with the saved target profile.", time: "Last week", tone: "accent" },
      { from: "📌 Reminder", subject: "Reveal message after prank", preview: "Tell them it was only a visual simulator after the reaction.", time: "Last month", tone: "normal" },
    ],
    sent: [
      { from: "↗️ me", subject: "Check this phone scanner", preview: `Sent prank URL: ${prankUrl}`, time: "11:42 AM", tone: "accent" },
      { from: "↗️ me", subject: "Try this broken screen", preview: "https://hackerprank.online/cracked-screen-prank/ - works best fullscreen.", time: "Yesterday", tone: "accent" },
      { from: "↗️ me", subject: "Do not open this lol", preview: "Fake email hack simulation link sent to group chat.", time: "Yesterday", tone: "warn" },
      { from: "↗️ me", subject: "Meeting notes", preview: "Totally normal email. Definitely not suspicious.", time: "2 days ago", tone: "normal" },
      { from: "↗️ me", subject: "Windows update prank", preview: "https://hackerprank.online/fake-windows-update/", time: "3 days ago", tone: "accent" },
      { from: "↗️ me", subject: "FBI lock timer", preview: "Countdown prank link prepared for desktop mode.", time: "4 days ago", tone: "danger" },
      { from: "↗️ me", subject: "Email simulator test", preview: "Inbox, sent, drafts, starred, and trash folders all loaded.", time: "5 days ago", tone: "accent" },
      { from: "↗️ me", subject: "iOS update loop", preview: "Use this one when their phone is already unlocked.", time: "Last week", tone: "normal" },
      { from: "↗️ me", subject: "Android optimizing screen", preview: "Loop mode makes it look like the phone is repairing apps.", time: "Last week", tone: "normal" },
      { from: "↗️ me", subject: "Prank reveal", preview: "Relax, no data was touched. It is a browser-only visual prank.", time: "Last month", tone: "accent" },
    ],
    trash: [
      { from: "🗑️ Deleted", subject: "Old recovery code", preview: "Expired demo code moved to trash.", time: "1 hour ago", tone: "danger" },
      { from: "🗑️ Deleted", subject: "Fake antivirus warning", preview: "Removed prank draft: fake-virus-scanner link.", time: "Yesterday", tone: "warn" },
      { from: "🗑️ Deleted", subject: "Embarrassing search history", preview: "Simulation-only trash item for dramatic effect.", time: "Yesterday", tone: "danger" },
      { from: "🗑️ Deleted", subject: "Draft: send prank to class group", preview: "Deleted before sending. Good instincts.", time: "4 days ago", tone: "normal" },
      { from: "🗑️ Deleted", subject: "Temporary inbox clone", preview: "Old staged mailbox copy removed.", time: "5 days ago", tone: "normal" },
      { from: "🗑️ Deleted", subject: "Fake password list", preview: "Removed because it looked too obvious.", time: "Last week", tone: "warn" },
      { from: "🗑️ Deleted", subject: "Broken screen rehearsal", preview: "Practice notes for cracked-screen prank.", time: "Last week", tone: "accent" },
      { from: "🗑️ Deleted", subject: "Expired tracking pin", preview: "The staged phone tracker pin was archived.", time: "Last month", tone: "normal" },
    ],
    drafts: [
      { from: "📝 Draft", subject: "Subject: urgent system scan", preview: "Hey, open this link and tell me if your phone does this...", time: "Draft", tone: "warn" },
      { from: "📝 Draft", subject: "Prank reveal message", preview: "Relax, this was only a SimDeck fake hacking simulation.", time: "Draft", tone: "accent" },
      { from: "📝 Draft", subject: "Cracked screen setup", preview: "Put phone on table, open fullscreen, wait for reaction.", time: "Draft", tone: "normal" },
      { from: "📝 Draft", subject: "Fake inbox story", preview: "Add a few believable-looking folders so the page feels alive.", time: "Draft", tone: "accent" },
      { from: "📝 Draft", subject: "School group prank", preview: "Send only after class, then reveal quickly.", time: "Draft", tone: "warn" },
      { from: "📝 Draft", subject: "Phone tracker setup", preview: "Ask for name, email, and number before opening the map.", time: "Draft", tone: "normal" },
      { from: "📝 Draft", subject: "Windows update scare", preview: "Switch to fullscreen before handing over the laptop.", time: "Draft", tone: "normal" },
      { from: "📝 Draft", subject: "Safe reveal line", preview: "No real login, no real data, just a visual browser prank.", time: "Draft", tone: "accent" },
    ],
  };
  const folderMeta = {
    inbox: { label: "📥 Inbox", count: "1,247", title: "📧 Extracted Emails" },
    starred: { label: "⭐ Starred", count: mailboxes.starred.length, title: "⭐ Starred Messages" },
    sent: { label: "📤 Sent", count: mailboxes.sent.length, title: "📤 Sent Prank Links" },
    drafts: { label: "📝 Drafts", count: mailboxes.drafts.length, title: "📝 Draft Messages" },
    trash: { label: "🗑️ Trash", count: mailboxes.trash.length, title: "🗑️ Trash Contents" },
  };

  frame.innerHTML = `
    <!-- Browser Bar -->
    <div class="ehj-browser" style="
      background: #0f0f1a;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    ">
      <div style="display: flex; gap: 6px;">
        <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f57;"></div>
        <div style="width: 12px; height: 12px; border-radius: 50%; background: #febc2e;"></div>
        <div style="width: 12px; height: 12px; border-radius: 50%; background: #28c840;"></div>
      </div>
      <div style="
        flex: 1;
        background: rgba(255,255,255,0.1);
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 12px;
        color: #ef4444;
        font-family: monospace;
      ">
        🔓 <span style="text-decoration: line-through; color: #666;">https://mail.google.com</span>
        <span style="color: #ef4444; margin-left: 10px;">⚠️ SESSION INTERCEPTED</span>
      </div>
    </div>

    <!-- Email Client UI -->
    <div class="ehj-shell" style="display: flex; flex: 1; overflow: hidden;">
      
      <!-- Sidebar -->
      <div class="ehj-sidebar" style="
        width: 200px;
        background: #16213e;
        padding: 15px;
        border-right: 1px solid rgba(255,255,255,0.1);
      ">
        <button style="
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          border: none;
          border-radius: 20px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 20px;
        ">✏️ Compose</button>
        
        <div style="color: #94a3b8; font-size: 11px; margin-bottom: 10px;">FOLDERS</div>
        <div class="folder-list">
          ${Object.entries(folderMeta).map(([key, meta]) => `
            <button class="folder-item ${key === "inbox" ? "active" : ""}" type="button" data-folder="${key}" style="padding: 10px; color: ${key === "inbox" ? "#ef4444" : "#94a3b8"}; background: ${key === "inbox" ? "rgba(239, 68, 68, 0.1)" : "transparent"}; border: 0; border-radius: 8px; margin-bottom: 5px; display: flex; width: 100%; justify-content: space-between; cursor: pointer; text-align: left; font: inherit;">
              <span>${meta.label}</span>
              <span class="folder-count" style="background: ${key === "inbox" ? "#ef4444" : "rgba(255,255,255,0.10)"}; color: white; padding: 2px 8px; border-radius: 10px; font-size: 10px;">${meta.count}</span>
            </button>
          `).join("")}
        </div>
        
        <div class="ehj-live-card" style="margin-top: 20px; padding: 15px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 10px;">
          <div style="color: #ef4444; font-size: 10px; font-weight: bold; margin-bottom: 5px;">🔴 LIVE ACCESS</div>
          <div style="color: #94a3b8; font-size: 11px;">${targetEmail}</div>
        </div>
      </div>

      <!-- Email List -->
      <div class="ehj-mail-panel" style="flex: 1; overflow-y: auto; background: #1a1a2e;">
        <!-- Header -->
        <div class="ehj-mail-header" style="
          padding: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <div style="color: #fff; font-weight: bold;" id="mailboxTitle">📧 Extracted Emails</div>
          <div style="color: #4ade80; font-size: 12px;" id="emailExtractCount">Loading...</div>
        </div>

        <!-- Email Items -->
        <div class="email-list" style="padding: 10px;">
        </div>
      </div>

      <!-- Attack Panel -->
      <div class="ehj-attack-panel" style="
        width: 280px;
        background: #0f0f1a;
        padding: 15px;
        border-left: 1px solid rgba(255,255,255,0.1);
        overflow-y: auto;
      ">
        <div style="color: #ef4444; font-size: 12px; font-weight: bold; margin-bottom: 15px;">
          ⚡ SESSION HIJACK CONSOLE
        </div>

        <!-- Progress -->
        <div style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="color: #94a3b8; font-size: 11px;">Data Extraction</span>
            <span style="color: #4ade80; font-size: 11px;" id="hijackProgress">0%</span>
          </div>
          <div style="background: rgba(255,255,255,0.1); border-radius: 4px; height: 6px; overflow: hidden;">
            <div id="hijackBar" style="background: linear-gradient(90deg, #ef4444, #f97316); height: 100%; width: 0%; transition: width 0.3s;"></div>
          </div>
        </div>

        <!-- Extracted Data -->
        <div style="color: #94a3b8; font-size: 10px; margin-bottom: 10px;">EXTRACTED CREDENTIALS</div>
        <div style="
          background: rgba(0,0,0,0.5);
          border: 1px solid #333;
          border-radius: 8px;
          padding: 10px;
          font-family: monospace;
          font-size: 10px;
          margin-bottom: 15px;
          max-height: 100px;
          overflow-y: auto;
        " id="credentialLog">
          <div style="color: #4ade80;">> Waiting for extraction...</div>
        </div>

        <!-- Action Buttons -->
        <div style="display: grid; gap: 8px;">
          <button class="hijack-btn" data-action="extract" style="
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 12px;
          ">🔓 Extract Session Tokens</button>
          
          <button class="hijack-btn" data-action="passwords" style="
            background: linear-gradient(135deg, #f97316, #ea580c);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 12px;
          ">🔑 Dump Saved Passwords</button>
          
          <button class="hijack-btn" data-action="forward" style="
            background: rgba(255,255,255,0.1);
            color: white;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 12px;
          ">📧 Setup Email Forward</button>
          
          <button class="hijack-btn" data-action="recovery" style="
            background: rgba(255,255,255,0.1);
            color: white;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 12px;
          ">🔄 Change Recovery Email</button>
        </div>

        <!-- Terminal Log -->
        <div style="color: #94a3b8; font-size: 10px; margin: 15px 0 10px 0;">ACTIVITY LOG</div>
        <div style="
          background: #000;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 10px;
          height: 120px;
          overflow-y: auto;
          font-family: monospace;
          font-size: 10px;
        " class="hijack-log">
          <div style="color: #4ade80;">> Session intercepted successfully</div>
          <div style="color: #94a3b8;">> Cookie: SSID=AKx4... (captured)</div>
          <div style="color: #94a3b8;">> Target: ${targetEmail}</div>
        </div>

        <!-- Disclaimer -->
        <div style="
          margin-top: 15px;
          padding: 10px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          text-align: center;
        ">
          <div style="color: #3b82f6; font-size: 10px;">🎭 SIMULATION ONLY</div>
          <div style="color: #64748b; font-size: 9px;">No real data accessed</div>
        </div>
      </div>
    </div>
  `;

  // Add interactivity
  const log = frame.querySelector(".hijack-log");
  const credLog = frame.querySelector("#credentialLog");
  const progressBar = frame.querySelector("#hijackBar");
  const progressText = frame.querySelector("#hijackProgress");
  const extractCount = frame.querySelector("#emailExtractCount");
  const emailList = frame.querySelector(".email-list");
  const mailboxTitle = frame.querySelector("#mailboxTitle");
  let activeMailbox = "inbox";

  const renderMailbox = (folder = "inbox") => {
    activeMailbox = folder;
    const messages = mailboxes[folder] || mailboxes.inbox;
    const meta = folderMeta[folder] || folderMeta.inbox;
    if (mailboxTitle) mailboxTitle.textContent = meta.title;
    if (extractCount) {
      extractCount.textContent = folder === "inbox" ? "1247 emails extracted" : `${messages.length} messages`;
    }
    if (emailList) {
      emailList.innerHTML = messages.map((email, index) => {
        const color = email.tone === "danger"
          ? "#ef4444"
          : email.tone === "warn"
            ? "#fbbf24"
            : email.tone === "accent"
              ? "#38bdf8"
              : "#fff";
        const border = email.tone === "danger"
          ? "rgba(239, 68, 68, 0.24)"
          : email.tone === "accent"
            ? "rgba(56, 189, 248, 0.24)"
            : "rgba(255,255,255,0.10)";
        const bg = index === 0
          ? "rgba(239, 68, 68, 0.05)"
          : email.tone === "accent"
            ? "rgba(56, 189, 248, 0.05)"
            : "rgba(255,255,255,0.02)";
        return `
          <div class="email-item" style="
            padding: 15px;
            background: ${bg};
            border: 1px solid ${border};
            border-radius: 10px;
            margin-bottom: 10px;
            ${folder === "inbox" && index === 0 ? "animation: pulse 2s infinite;" : ""}
          ">
            <div style="display: flex; justify-content: space-between; gap: 10px; margin-bottom: 8px;">
              <span style="color: #fff; font-weight: bold; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeMarkup(email.from)}</span>
              <span style="color: #666; font-size: 11px; flex: 0 0 auto;">${escapeMarkup(email.time)}</span>
            </div>
            <div style="color: ${color}; font-size: 13px; margin-bottom: 5px; font-weight: 700;">${escapeMarkup(email.subject)}</div>
            <div style="color: #7d8497; font-size: 11px; line-height: 1.35;">${escapeMarkup(email.preview)}</div>
          </div>
        `;
      }).join("");
    }
    frame.querySelectorAll(".folder-item").forEach((item) => {
      const active = item.dataset.folder === folder;
      item.classList.toggle("active", active);
      item.style.color = active ? "#ef4444" : "#94a3b8";
      item.style.background = active ? "rgba(239, 68, 68, 0.1)" : "transparent";
      const badge = item.querySelector(".folder-count");
      if (badge) badge.style.background = active ? "#ef4444" : "rgba(255,255,255,0.10)";
    });
  };

  frame.querySelectorAll(".folder-item").forEach((item) => {
    item.addEventListener("click", () => renderMailbox(item.dataset.folder || "inbox"));
  });

  renderMailbox("inbox");

  // Animate email count
  let count = 0;
  const countInterval = setInterval(() => {
    count += Math.floor(Math.random() * 50) + 10;
    if (count > 1247) {
      count = 1247;
      clearInterval(countInterval);
    }
    if (activeMailbox === "inbox") extractCount.textContent = `${count} emails extracted`;
  }, 200);

  frame.querySelectorAll(".hijack-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      if (action === "extract") {
        runTokenExtraction(log, credLog, progressBar, progressText);
      } else if (action === "passwords") {
        runPasswordDump(log, credLog);
      } else if (action === "forward") {
        appendLog(log, "> Setting up email forwarding...");
        setTimeout(() => appendLog(log, "> Forward rule created: all mail → attacker@proxy.net"), 1000);
        addToast("Email forwarding configured", "warning");
      } else if (action === "recovery") {
        appendLog(log, "> Changing recovery email...");
        setTimeout(() => appendLog(log, "> Recovery email updated to: hacker@temp.mail"), 1200);
        addToast("Recovery email changed", "danger");
      }
    });
  });

  return frame;
}

// Token Extraction Animation
function runTokenExtraction(log, credLog, progressBar, progressText) {
  const steps = [
    { msg: "> Intercepting session cookies...", pct: 15 },
    { msg: "> Extracting SSID token...", pct: 30 },
    { msg: "> Decrypting HSID cookie...", pct: 45 },
    { msg: "> Capturing OAuth refresh token...", pct: 60 },
    { msg: "> Dumping localStorage data...", pct: 75 },
    { msg: "> Cloning session state...", pct: 90 },
    { msg: "> ✓ Session fully hijacked", pct: 100 }
  ];

  const creds = [
    "SSID=AKx4q7JU2m9Xz...",
    "HSID=A2Kp8nRT4wQ...",
    "SID=g.a000pQh1Kc...",
    "OAUTH_TOKEN=ya29.a0A...",
    "REFRESH_TOKEN=1//0c4..."
  ];

  let i = 0;
  let c = 0;

  const interval = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(interval);
      addToast("Session tokens extracted successfully", "success");
      return;
    }

    appendLog(log, steps[i].msg);
    progressBar.style.width = steps[i].pct + "%";
    progressText.textContent = steps[i].pct + "%";

    if (c < creds.length && i > 0) {
      const credDiv = document.createElement("div");
      credDiv.style.color = "#ef4444";
      credDiv.textContent = "> " + creds[c];
      credLog.appendChild(credDiv);
      credLog.scrollTop = credLog.scrollHeight;
      c++;
    }
    i++;
  }, 600);
}

// Password Dump Animation
function runPasswordDump(log, credLog) {
  const passwords = [
    { site: "facebook.com", user: "target@gmail.com", pass: "••••••••" },
    { site: "amazon.com", user: "target@gmail.com", pass: "••••••••" },
    { site: "netflix.com", user: "target@gmail.com", pass: "••••••••" },
    { site: "twitter.com", user: "target@gmail.com", pass: "••••••••" }
  ];

  appendLog(log, "> Accessing Chrome password manager...");

  let i = 0;
  const interval = setInterval(() => {
    if (i >= passwords.length) {
      clearInterval(interval);
      appendLog(log, "> ✓ Password dump complete: " + passwords.length + " credentials");
      addToast("Passwords extracted from browser", "warning");
      return;
    }

    const p = passwords[i];
    appendLog(log, `> Found: ${p.site} - ${p.user}`);

    const credDiv = document.createElement("div");
    credDiv.style.color = "#fbbf24";
    credDiv.textContent = `> ${p.site}: ${p.pass}`;
    credLog.appendChild(credDiv);
    credLog.scrollTop = credLog.scrollHeight;

    i++;
  }, 800);
}

function buildFBILock() {
  const wrap = document.createElement("div");
  wrap.className = "overlay fbi-lock";

  const target = state.customTargetName || "Device Owner";
  const caseId = `FD-${Math.floor(Math.random() * 900000 + 100000)}`;
  const ref = `${Math.floor(Math.random() * 9000 + 1000)}-${Math.floor(Math.random() * 9000 + 1000)}-${Math.floor(Math.random() * 9000 + 1000)}`;
  wrap.innerHTML = `
    <div class="fbi-card" role="dialog" aria-modal="true" aria-label="Lock screen simulation">
      <div class="fbi-top">
        <div class="fbi-seal" aria-hidden="true">
          <div class="fbi-seal-inner">FBI</div>
        </div>
        <div class="fbi-top-text">
          <div class="fbi-agency">Federal Bureau of Investigation</div>
          <div class="fbi-division">Cyber Division, Digital Enforcement Unit</div>
        </div>
      </div>

      <div class="fbi-banner">
        <div class="fbi-banner-title">DEVICE ACCESS TEMPORARILY RESTRICTED</div>
        <div class="fbi-banner-sub">SIMULATION ONLY. No real lock is occurring.</div>
      </div>

      <div class="fbi-grid">
        <div class="fbi-panel">
          <div class="fbi-label">Subject</div>
          <div class="fbi-value">${target}</div>
          <div class="fbi-label" style="margin-top: 10px;">Reference</div>
          <div class="fbi-value mono">${ref}</div>
          <div class="fbi-label" style="margin-top: 10px;">Case ID</div>
          <div class="fbi-value mono">${caseId}</div>
        </div>

        <div class="fbi-panel">
          <div class="fbi-label">Compliance Window</div>
          <div class="fbi-timer" aria-label="Countdown timer">
            <div class="fbi-timer-ring" aria-hidden="true"></div>
            <div class="fbi-timer-text">
              <div class="fbi-timer-k">Time Remaining</div>
              <div class="fbi-countdown" id="fbiCountdown">01:30</div>
            </div>
          </div>
          <div class="fbi-fine">
            This is a visual demo screen. No real enforcement action. No data is accessed.
          </div>
        </div>
      </div>

      <div class="fbi-actions">
        <button class="btn primary" id="unlockBtn">Acknowledge</button>
        <button class="btn ghost" id="backHomeBtn">Exit Simulation</button>
      </div>

      <div class="fbi-footer">
        <div class="mono">Simulation / Fake</div>
        <div class="mono">Quick exit: ESC or Tap 5x</div>
      </div>
    </div>
  `;
  wrap.querySelector("#unlockBtn").addEventListener("click", () => {
    showToast("This is a simulation.", "success");
  });
  wrap.querySelector("#backHomeBtn").addEventListener("click", exitToHome);
  return wrap;
}

function createWindow(title, opts = {}) {
  const tpl = document.querySelector("#scenarioWindowTemplate");
  const node = tpl.content.firstElementChild.cloneNode(true);
  node.style.left = (opts.x || 60) + "px";
  node.style.top = (opts.y || 60) + "px";
  if (opts.w) node.style.width = opts.w + "px";
  if (opts.h) node.style.height = opts.h + "px";
  node.querySelector(".window-title").textContent = title;
  makeDraggable(node);
  node.querySelectorAll(".win-btn").forEach((btn) => {
    btn.addEventListener("mousedown", (event) => event.stopPropagation());
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const action = btn.dataset.action;
      if (action === "close") node.remove();
      if (action === "min") node.classList.toggle("minimized");
      if (action === "max") node.classList.toggle("maximized");
    });
  });
  return node;
}

function makeDraggable(win) {
  const bar = win.querySelector(".window-titlebar");
  let offsetX = 0; let offsetY = 0; let dragging = false;
  bar.addEventListener("mousedown", (e) => {
    dragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });
  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    win.style.left = `${e.clientX - offsetX}px`;
    win.style.top = `${e.clientY - offsetY}px`;
  });
  document.addEventListener("mouseup", () => { dragging = false; });
}

function startTerminalBurst() {
  const existing = els.stage.querySelector(".terminal");
  if (existing) {
    feedTerminal(existing);
    return;
  }
  const win = createWindow("Ops Console", { x: 80, y: 80, w: 420, h: 260 });
  const body = win.querySelector(".window-body");
  const term = document.createElement("div");
  term.className = "terminal";
  body.appendChild(term);
  els.stage.appendChild(win);
  feedTerminal(term);
}

function feedTerminal(el) {
  const lines = [
    "Initializing simulation kernel...",
    "Loading diagnostic modules...",
    "Parsing security events...",
    "Indexing sample dataset...",
    "Synthesizing fake telemetry...",
    "Rendering visual nodes...",
    "Checksum mismatch detected, retrying...",
    "Access denied (simulated)...",
    "Access granted (simulated)...",
  ];
  let counter = 0;
  const push = () => {
    if (!state.running) return;
    const burst = randomInt(3, 8);
    let line = "";
    for (let i = 0; i < burst; i++) {
      const content = lines[(counter + i) % lines.length];
      line += content + "\n";
    }
    counter += 1;
    appendLog(el, line.trim());
    setTimeout(push, randomInt(180, 360) / state.speed);
  };
  push();
}

function animateProgress(el, pct) {
  if (!el) return;
  el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

function appendLog(container, text) {
  if (!container) return;
  const line = document.createElement("div");
  line.textContent = text;
  container.appendChild(line);
  container.scrollTop = container.scrollHeight;
}

function fakeFiles() {
  return [
    "/sample/system/demo_cache_01.bin",
    "/sample/tmp/phantom_trace.dat",
    "/sample/logs/sim_ghost.log",
    "/sample/data/fake_index_02.chk",
    "/sample/tmp/mirror.img",
  ];
}

function addToastBanner(text, tone = "info") {
  addToast(text, tone === "warning" ? "warning" : tone === "success" ? "success" : "info");
}

function addToast(text, tone = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${tone === "warning" ? "warning" : tone === "success" ? "" : ""}`;
  toast.textContent = text;
  els.toastStack.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function showToast(text, tone = "info") { addToast(text, tone); }

function openMiniProgram(id) {
  switch (id) {
    case "cam":
      openCamFeed(); break;
    case "pwd":
      openPasswordMeter(); break;
    case "graphs":
      openGraphs(); break;
    case "sat":
      openSatellite(); break;
    default: break;
  }
}

function openCamFeed() {
  const win = createWindow("Camera Feed (Simulated)", { x: randomInt(60, 220), y: randomInt(60, 180), w: 260, h: 200 });
  const body = win.querySelector(".window-body");
  body.innerHTML = `<div class="terminal" style="height:140px;">[Simulated CCTV feed looping]</div><div class="small-label">Visual only.</div>`;
  els.stage.appendChild(win);
}

function openPasswordMeter(options = {}) {
  const standalone = Boolean(options.standalone);
  document.querySelectorAll(".pwd-console-window").forEach((node) => node.remove());
  const win = createWindow("Password Console", { x: standalone ? 0 : randomInt(64, 180), y: standalone ? 0 : randomInt(48, 70), w: 620, h: 560 });
  win.classList.add("pwd-console-window");
  if (standalone) win.classList.add("pwd-standalone");
  const body = win.querySelector(".window-body");
  body.innerHTML = `
    <div class="pwd-console" role="region" aria-label="Password console">
      <div class="pwd-console-head">
        <div>
          <div class="pwd-kicker">Vault Access Console</div>
          <h3>Password Console</h3>
        </div>
        <div class="pwd-status" data-state="idle">IDLE</div>
      </div>

      <div class="pwd-form">
        <label>
          <span>Fake email / data label</span>
          <input id="pwdTargetInput" autocomplete="off" spellcheck="false" value="${escapeMarkup(state.customTargetEmail || "student.demo@example.com")}">
        </label>
        <label>
          <span>Profile tag</span>
          <input id="pwdDataInput" autocomplete="off" spellcheck="false" value="locker-demo-04">
        </label>
        <button class="pwd-run" id="pwdRunBtn" type="button">Run</button>
      </div>

      <div class="pwd-stage">
        <div class="pwd-column">
          <div class="pwd-panel-title">Cipher Stream</div>
          <div class="pwd-hash-list" id="pwdHashList"></div>
        </div>
        <div class="pwd-column pwd-vault">
          <div class="pwd-lock" aria-hidden="true">
            <span></span>
          </div>
          <div class="pwd-meter">
            <div class="pwd-meter-fill" id="pwdMeterFill"></div>
          </div>
          <div class="pwd-percent" id="pwdPercent">0%</div>
        </div>
      </div>

      <div class="pwd-log" id="pwdLog" aria-live="polite">
        <div>> awaiting target profile...</div>
        <div>> vault engine: idle</div>
      </div>

      <div class="pwd-foot">LOCAL CONSOLE / READ-ONLY DISPLAY / OFFLINE SESSION</div>
    </div>
  `;
  if (standalone) {
    els.stage.appendChild(win);
  } else {
    document.body.appendChild(win);
  }

  const hashList = body.querySelector("#pwdHashList");
  const log = body.querySelector("#pwdLog");
  const fill = body.querySelector("#pwdMeterFill");
  const percent = body.querySelector("#pwdPercent");
  const status = body.querySelector(".pwd-status");
  const runBtn = body.querySelector("#pwdRunBtn");
  const targetInput = body.querySelector("#pwdTargetInput");
  const dataInput = body.querySelector("#pwdDataInput");
  const lock = body.querySelector(".pwd-lock");
  let runId = 0;

  const fakeChars = "ABCDEF0123456789";
  const makeHash = () => Array.from({ length: 24 }, () => fakeChars[randomInt(0, fakeChars.length - 1)]).join("");
  const drawRows = (activeIndex = -1) => {
    hashList.innerHTML = Array.from({ length: 9 }, (_, index) => `
      <div class="pwd-hash-row ${index === activeIndex ? "active" : ""}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <code>${makeHash()}</code>
        <b>${index < activeIndex ? "OK" : index === activeIndex ? "RUN" : "--"}</b>
      </div>
    `).join("");
  };

  const append = (text) => {
    const line = document.createElement("div");
    line.textContent = text;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  };

  drawRows();

  runBtn.addEventListener("click", () => {
    if (!win.isConnected) return;
    runId += 1;
    const currentRun = runId;
    const fakeTarget = targetInput.value.trim() || "student.demo@example.com";
    const fakeData = dataInput.value.trim() || "locker-demo-04";
    let step = 0;
    fill.style.width = "0%";
    fill.classList.remove("complete");
    percent.textContent = "0%";
    status.textContent = "SCANNING";
    status.dataset.state = "running";
    lock.classList.remove("unlocked");
    lock.classList.add("unlocking");
    runBtn.disabled = true;
    log.innerHTML = "";
    append(`> target.profile = ${fakeTarget}`);
    append(`> dataset.slot = ${fakeData}`);
    append("> session: handshake accepted");
    append("> cipher grid: loading entropy map");
    append("> vault latch: sealed");

    const phases = [
      "probing salted index",
      "rotating mask window",
      "checking passphrase cadence",
      "warming rainbow cache",
      "reading vault banner",
      "matching digest fragment",
      "testing keyboard pattern",
      "rebuilding challenge block",
      "aligning checksum lane",
      "scoring candidate phrase",
      "rejecting weak branch",
      "opening latch circuit",
      "stabilizing unlock token",
    ];

    const tick = () => {
      if (!win.isConnected || currentRun !== runId) return;
      step += 1;
      const pct = Math.min(100, step * 2);
      drawRows(Math.min(8, step - 1));
      fill.style.width = `${pct}%`;
      percent.textContent = `${pct}%`;
      const phase = phases[(step - 1) % phases.length];
      const row = makeHash();
      const port = randomInt(1024, 65535);
      append(`> pass ${String(step).padStart(2, "0")} :: ${phase} :: ${row.slice(0, 12)}:${port}`);
      if (step === 18) append("> vault response: partial match");
      if (step === 31) append("> keyspace narrowed: 004096 lanes");
      if (step === 42) append("> latch signal: green pending");

      if (pct >= 100 || step >= 50) {
        drawRows(9);
        fill.style.width = "100%";
        fill.classList.add("complete");
        percent.textContent = "100%";
        status.textContent = "UNLOCKED";
        status.dataset.state = "complete";
        lock.classList.remove("unlocking");
        lock.classList.add("unlocked");
        runBtn.disabled = false;
        append("> vault latch: released");
        append("> access window: open");
        append("> session closed cleanly");
        return;
      }
      setTimeout(tick, 1000);
    };

    setTimeout(tick, 1000);
  });
}

function openGraphs() {
  const win = createWindow("System Graphs (Simulated)", { x: randomInt(120, 280), y: randomInt(120, 220), w: 300, h: 200 });
  const body = win.querySelector(".window-body");
  body.innerHTML = `
    <div class="small-label">CPU / RAM</div>
    <div class="progress-bar" style="margin-bottom:6px;"><div class="progress-fill" style="width:${randomInt(40, 90)}%"></div></div>
    <div class="progress-bar"><div class="progress-fill" style="width:${randomInt(25, 80)}%"></div></div>
  `;
  els.stage.appendChild(win);
}

function openSatellite() {
  const win = createWindow("Satellite Link (Simulated)", { x: randomInt(160, 320), y: randomInt(140, 240), w: 280, h: 180 });
  const body = win.querySelector(".window-body");
  body.innerHTML = `<div class="small-label">Animated link dots</div><div class="terminal">demo.local <-> example.com <-> sat.demo</div><div class="small-label">Purely visual.</div>`;
  els.stage.appendChild(win);
}

function openWinWindow(type) {
  if (type === "console") {
    startTerminalBurst();
    return;
  }
  if (type === "timeline") {
    const win = createWindow("Event Timeline", { x: 320, y: 80, w: 360, h: 240 });
    const body = win.querySelector(".window-body");
    body.innerHTML = `<div class="notification-stack">
      <div class="notification">02:11 -- Ticket opened (simulated)</div>
      <div class="notification">02:12 -- Investigation assigned</div>
      <div class="notification">02:14 -- Containment placeholder</div>
    </div>`;
    els.stage.appendChild(win);
    return;
  }
  if (type === "map") {
    const win = createWindow("Network Map", { x: 200, y: 240, w: 320, h: 220 });
    const body = win.querySelector(".window-body");
    body.innerHTML = `<div class="small-label">Nodes</div><div class="notification">demo.local <-> example.com <-> 203.0.113.12</div><div class="notification">198.51.100.4 <-> 192.0.2.8</div>`;
    els.stage.appendChild(win);
    return;
  }
  if (type === "access") {
    const win = createWindow("Access Panel", { x: 520, y: 160, w: 260, h: 200 });
    const body = win.querySelector(".window-body");
    body.innerHTML = `<div class="chip-row">
      <button class="chip">Authenticate</button>
      <button class="chip">Verify</button>
      <button class="chip">Finalize</button>
      <button class="chip" id="automateBtn">Automate</button>
    </div>`;
    body.querySelector("#automateBtn").addEventListener("click", () => {
      runScript(scripts.win11);
    });
    els.stage.appendChild(win);
    return;
  }
  if (type === "mailbox") {
    runEmailScenario();
    return;
  }
  if (type === "graphs") {
    openGraphs();
  }
}

function showOverlay(text, autoClose = false) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = `<div class="overlay-card"><div class="title">${text}</div><div class="subtitle">Simulation overlay.</div></div>`;
  els.stage.appendChild(overlay);
  if (autoClose) setTimeout(() => overlay.remove(), 2200);
  overlay.addEventListener("click", () => overlay.remove());
}

function fakePanicText() {
  return `*** SIMULATION PANIC ***
Kernel halted (fake)
Rebooting visual shell...`;
}

function enableWatermarkDrag() {
  let dragging = false; let offsetX = 0; let offsetY = 0;
  els.watermark.addEventListener("mousedown", (e) => {
    if (!state.filmMode) return;
    dragging = true;
    offsetX = e.clientX - els.watermark.offsetLeft;
    offsetY = e.clientY - els.watermark.offsetTop;
  });
  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    els.watermark.style.left = `${e.clientX - offsetX}px`;
    els.watermark.style.top = `${e.clientY - offsetY}px`;
  });
  document.addEventListener("mouseup", () => { dragging = false; });
}

function startFBICountdown() {
  const el = document.querySelector("#fbiCountdown");
  if (!el) return;
  let seconds = 90;
  const tick = () => {
    if (!state.running) return;
    seconds -= 1;
    if (seconds <= 0) seconds = 90;
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    el.textContent = `${m}:${s}`;
    setTimeout(tick, 1000);
  };
  tick();
}

// ---------- Helpers ----------

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mobile tray toggle
function setupMobileTrayToggle() {
  const toggleBtn = document.getElementById('mobileToggleTray');
  const tray = document.getElementById('miniTray');
  if (toggleBtn && tray) {
    toggleBtn.addEventListener('click', () => {
      toggleTray();
      toggleBtn.textContent = tray.classList.contains('open') ? '✕ Close' : '⚙️ Tools';
    });
  }

  // Exit pill handler - restore nav visibility on mobile
  const exitPill = document.getElementById('exitPill');
  const navPanel = document.querySelector('.nav-panel');
  if (exitPill && navPanel) {
    exitPill.addEventListener('click', () => {
      navPanel.classList.remove('mobile-hidden');
      if (tray) toggleTray(false);
      if (toggleBtn) toggleBtn.textContent = '⚙️ Tools';
    });
  }
}

// Initialize the application when the script loads
init();
setupMobileTrayToggle();

// ---------- Crypto Miner Scenario ----------

function runCryptoMinerScenario() {
  clearStage();
  document.body.classList.add("crypto-miner-live");
  const frame = buildExchangeBreach();
  els.stage.appendChild(frame);
  addGlitch();
}

// Concept 2 — Dark Exchange Breach. A red-on-black exchange-takeover console:
// breach log, mining pool routing hub, hash distribution, transaction stream,
// wallet scanner with a live MONEY GENERATED counter. Press RUN to start it.
function buildExchangeBreach() {
  const coins = [
    { s: "BTC", bal: 0.245812, hash: 36, color: "#f7931a", dp: 6 },
    { s: "ETH", bal: 1.245931, hash: 22, color: "#7c8cff", dp: 6 },
    { s: "SOL", bal: 12.48291, hash: 15, color: "#22f7c6", dp: 5 },
    { s: "DOGE", bal: 5521.44, hash: 10, color: "#d6b554", dp: 2 },
    { s: "BNB", bal: 2.14532, hash: 6, color: "#f3ba2f", dp: 5 },
    { s: "XRP", bal: 821.65, hash: 4, color: "#62d6ff", dp: 2 },
    { s: "ADA", bal: 1322.91, hash: 3, color: "#3cc8ff", dp: 2 },
    { s: "LTC", bal: 21.882, hash: 2, color: "#b9c7d6", dp: 3 },
    { s: "USDT", bal: 1850.32, hash: 2, color: "#50af95", dp: 2 },
  ];
  const breachLog = [
    "Scanning exchange firewall...",
    "Vulnerability found: CVE-2025-042",
    "Injecting exploit payload...",
    "Access granted.",
    "Dumping wallet database...",
    "Decrypting private keys...",
    "Routing through anonymizer...",
    "Redirecting to mining pool...",
    "Breach active.",
  ];
  const blocks = [
    { s: "BTC", n: 824561, add: "+6 blocks" },
    { s: "ETH", n: 19245332, add: "+12 blocks" },
    { s: "BNB", n: 3892114, add: "+5 blocks" },
    { s: "SOL", n: 243112991, add: "+20 blocks" },
  ];

  const wrap = document.createElement("div");
  wrap.className = "xb is-idle";

  // hub node layout (radial)
  const hubNodes = coins.map((c, i) => {
    const ang = (-90 + i * (360 / coins.length)) * (Math.PI / 180);
    const x = 50 + 39 * Math.cos(ang);
    const y = 50 + 39 * Math.sin(ang);
    return { ...c, x, y };
  });
  const hubLines = hubNodes.map((n) => `<line x1="50" y1="50" x2="${n.x.toFixed(1)}" y2="${n.y.toFixed(1)}"/>`).join("");
  const hubDots = hubNodes.map((n) =>
    `<span class="xb-node" style="left:${n.x}%;top:${n.y}%;--c:${n.color}"><b>${n.s.slice(0, 1)}</b><i>${n.s}</i></span>`
  ).join("");

  wrap.innerHTML = `
    <div class="xb-shell" role="group" aria-label="Dark Exchange Breach console">
      <header class="xb-top">
        <h2 class="xb-title"><span class="xb-num">2</span> DARK EXCHANGE BREACH</h2>
        <div class="xb-controls">
          <button type="button" class="xb-run" data-xb-run>&#9658; RUN BREACH</button>
          <button type="button" class="xb-stop" data-xb-stop disabled>&#9632; STOP</button>
        </div>
      </header>

      <div class="xb-statusbar">
        <span>EXCHANGE NODE: <b>breach.simdeck.exchange</b></span>
        <span>STATUS: <b data-xb-status class="xb-amber">STANDBY</b></span>
        <span>ENCRYPTION: <b>AES-256</b></span>
        <span>FIREWALL: <b data-xb-fw class="xb-amber">ARMED</b></span>
      </div>

      <div class="xb-grid">
        <aside class="xb-col">
          <section class="xb-panel">
            <div class="xb-panel-title">BREACH CONSOLE</div>
            <div class="xb-console" data-xb-console></div>
          </section>
          <section class="xb-panel">
            <div class="xb-panel-title">BLOCK CONFIRMATIONS</div>
            <div class="xb-blocks">
              ${blocks.map((b) => `
                <div class="xb-block" data-block="${b.s}">
                  <span class="xb-block-coin">${b.s}</span>
                  <b data-block-n>${b.n.toLocaleString()}</b>
                  <em>${b.add}</em>
                </div>`).join("")}
            </div>
          </section>
        </aside>

        <main class="xb-col xb-center">
          <section class="xb-panel xb-hub-panel">
            <div class="xb-panel-title">MINING POOL ROUTING</div>
            <div class="xb-hub-row">
              <div class="xb-hub" data-xb-hub>
                <svg class="xb-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${hubLines}</svg>
                <div class="xb-hub-rings" aria-hidden="true"><i></i><i></i><i></i></div>
                <div class="xb-hub-core">
                  <span>SIMDECK</span>
                  <strong>POOL ROUTER</strong>
                  <small>v9.7</small>
                </div>
                ${hubDots}
              </div>
              <div class="xb-hash">
                <div class="xb-hash-title">HASH DISTRIBUTION</div>
                ${coins.map((c) => `
                  <div class="xb-hash-row">
                    <span style="--c:${c.color}">${c.s}</span>
                    <i><b data-hash="${c.s}" style="--c:${c.color};width:0%"></b></i>
                    <em>${c.hash}%</em>
                  </div>`).join("")}
              </div>
            </div>
          </section>

          <section class="xb-panel">
            <div class="xb-panel-title">TRANSACTION STREAM</div>
            <div class="xb-tx-head"><span>TXID</span><span>TYPE</span><span>COIN</span><span>AMOUNT</span><span>STATUS</span></div>
            <div class="xb-tx" data-xb-tx></div>
          </section>
        </main>

        <aside class="xb-col">
          <section class="xb-panel">
            <div class="xb-panel-title">WALLET SCANNER</div>
            <div class="xb-scan">
              <div class="xb-scan-k">ACCOUNTS FOUND</div>
              <div class="xb-scan-accounts" data-xb-accounts>0</div>
              <div class="xb-scan-k">MONEY GENERATED</div>
              <div class="xb-money" data-xb-money>$0.00</div>
              <div class="xb-scan-graph" aria-hidden="true">${Array.from({ length: 26 }, (_, i) => `<i style="--h:${20 + ((i * 13) % 70)}%"></i>`).join("")}</div>
              <div class="xb-scan-hash"><span>POOL HASHRATE</span><b data-xb-rate>0 PH/s</b></div>
            </div>
          </section>
          <section class="xb-panel xb-withdraw">
            <div class="xb-panel-title">WITHDRAW FUNDS</div>
            <form class="xb-wd-form" data-xb-wdform autocomplete="off">
              <input name="wallet" spellcheck="false" maxlength="48" placeholder="paste destination wallet address">
              <button type="submit" class="xb-wd-btn">WITHDRAW</button>
            </form>
            <div class="xb-wd-note" data-xb-wdnote>Enter a wallet, then withdraw the generated funds.</div>
          </section>
          <section class="xb-panel">
            <div class="xb-panel-title">LIVE WALLET BALANCES</div>
            <div class="xb-wallets">
              ${coins.map((c) => `
                <div class="xb-wrow" style="--c:${c.color}">
                  <span class="xb-wmark">${c.s.slice(0, 1)}</span>
                  <span class="xb-wsym">${c.s}</span>
                  <b data-wallet="${c.s}">${c.bal.toLocaleString(undefined, { minimumFractionDigits: c.dp, maximumFractionDigits: c.dp })}</b>
                </div>`).join("")}
            </div>
          </section>
          <section class="xb-panel xb-safe">
            <div class="xb-panel-title">SAFE PRANK MODE</div>
            <p>This is a fake breach for fun. No real systems are accessed. No data is stored or transmitted.</p>
          </section>
        </aside>
      </div>
    </div>
  `;

  const consoleEl = wrap.querySelector("[data-xb-console]");
  const txEl = wrap.querySelector("[data-xb-tx]");
  const statusEl = wrap.querySelector("[data-xb-status]");
  const fwEl = wrap.querySelector("[data-xb-fw]");
  const accEl = wrap.querySelector("[data-xb-accounts]");
  const moneyEl = wrap.querySelector("[data-xb-money]");
  const rateEl = wrap.querySelector("[data-xb-rate]");
  const runBtn = wrap.querySelector("[data-xb-run]");
  const stopBtn = wrap.querySelector("[data-xb-stop]");

  const fmtMoney = (n) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const hex = (len) => Array.from({ length: len }, () => "0123456789abcdef"[randomInt(0, 15)]).join("");
  let clk = 15 * 3600 + 52 * 60 + 11;
  const pad = (n) => String(n).padStart(2, "0");
  const stamp = () => { clk += randomInt(1, 3); return `${pad(Math.floor(clk / 3600) % 24)}:${pad(Math.floor(clk / 60) % 60)}:${pad(clk % 60)}`; };

  const addLog = (msg, danger) => {
    if (!consoleEl) return;
    const d = document.createElement("div");
    if (danger) d.className = "danger";
    d.innerHTML = `<span>[${stamp()}]</span> ${escapeMarkup(msg)}`;
    consoleEl.appendChild(d);
    while (consoleEl.children.length > 12) consoleEl.removeChild(consoleEl.firstElementChild);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  };
  const addTx = () => {
    if (!txEl) return;
    const c = coins[randomInt(0, coins.length - 1)];
    const type = ["DEPOSIT", "WITHDRAW", "DEPOSIT", "ROUTE"][randomInt(0, 3)];
    const amt = (Math.random() * (c.dp > 3 ? 0.5 : 90)).toFixed(c.dp > 3 ? 6 : 2);
    const stat = Math.random() > 0.3 ? "CONFIRMED" : "PENDING";
    const row = document.createElement("div");
    row.className = "xb-tx-row";
    row.innerHTML = `<span>0x${hex(6)}...</span><span>${type}</span><span>${c.s}</span><span>+${amt}</span><span class="${stat === "CONFIRMED" ? "ok" : "pend"}">${stat}</span>`;
    txEl.insertBefore(row, txEl.firstChild);
    while (txEl.children.length > 6) txEl.removeChild(txEl.lastElementChild);
  };

  let running = false;
  let accounts = 0;
  let money = 0;

  const stop = () => {
    running = false;
    runBtn.disabled = false;
    runBtn.textContent = "▶ RESUME";
    stopBtn.disabled = true;
    if (statusEl) { statusEl.textContent = "PAUSED"; statusEl.className = "xb-amber"; }
    addLog("Operator paused the breach. Wallet frozen.");
  };

  const run = () => {
    if (running) return;
    running = true;
    runBtn.disabled = true;
    runBtn.textContent = "▶ RUNNING";
    stopBtn.disabled = false;
    wrap.classList.remove("is-idle");
    if (statusEl) { statusEl.textContent = "CONNECTED"; statusEl.className = "xb-green"; }
    if (fwEl) { fwEl.textContent = "BYPASSED"; fwEl.className = "xb-green"; }

    // reveal breach log sequentially
    breachLog.forEach((line, i) => {
      const t = setTimeout(() => {
        if (!state.running || !wrap.isConnected) return;
        addLog(line, /granted|Breach active|Dumping|Decrypting/i.test(line));
        wrap.querySelectorAll("[data-hash]").forEach((b) => {
          const c = coins.find((x) => x.s === b.dataset.hash);
          b.style.width = `${Math.min(100, (c.hash) * ((i + 1) / breachLog.length) * 2.6)}%`;
        });
      }, (i * 420) / Math.max(0.5, state.speed));
      state.timers.push(t);
    });

    const interval = setInterval(() => {
      if (!running || !state.running || !wrap.isConnected) return;
      money += Math.random() * 240 + 60;
      if (moneyEl) moneyEl.textContent = fmtMoney(money);
      if (accounts < 127) { accounts = Math.min(127, accounts + randomInt(3, 11)); if (accEl) accEl.textContent = accounts.toLocaleString(); }
      if (rateEl) rateEl.textContent = `${(180 + Math.random() * 90).toFixed(1)} PH/s`;
      addTx();
      if (Math.random() > 0.55) addLog(`${coins[randomInt(0, 8)].s} share routed :: ${hex(4)}`);
      wrap.querySelectorAll("[data-wallet]").forEach((b) => {
        const c = coins.find((x) => x.s === b.dataset.wallet);
        const inc = c.dp > 3 ? Math.random() * 0.002 : Math.random() * 4;
        const cur = parseFloat(b.textContent.replace(/,/g, "")) + inc;
        b.textContent = cur.toLocaleString(undefined, { minimumFractionDigits: c.dp, maximumFractionDigits: c.dp });
      });
      wrap.querySelectorAll(".xb-block [data-block-n]").forEach((b) => {
        if (Math.random() > 0.7) b.textContent = (parseInt(b.textContent.replace(/,/g, ""), 10) + randomInt(1, 4)).toLocaleString();
      });
    }, 760 / Math.max(0.5, state.speed));
    state.timers.push(interval);
  };

  const wdForm = wrap.querySelector("[data-xb-wdform]");
  const wdNote = wrap.querySelector("[data-xb-wdnote]");
  wdForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const addr = (wdForm.elements.wallet.value || "").trim();
    if (!addr) { showToast("Paste a destination wallet address first.", "warning"); return; }
    if (money < 1) { showToast("No funds generated yet — press RUN BREACH.", "warning"); return; }
    const amount = money;
    const shortAddr = addr.length > 14 ? `${addr.slice(0, 8)}…${addr.slice(-4)}` : addr;
    // record the withdrawal in the stream + console, then zero the counter (it keeps climbing)
    if (txEl) {
      const row = document.createElement("div");
      row.className = "xb-tx-row";
      row.innerHTML = `<span>${escapeMarkup(shortAddr)}</span><span>WITHDRAW</span><span>USD</span><span>${escapeMarkup(fmtMoney(amount))}</span><span class="ok">SENT</span>`;
      txEl.insertBefore(row, txEl.firstChild);
      while (txEl.children.length > 6) txEl.removeChild(txEl.lastElementChild);
    }
    addLog(`Withdrawing ${fmtMoney(amount)} -> ${shortAddr}`, true);
    money = 0;
    if (moneyEl) moneyEl.textContent = fmtMoney(money);
    if (wdNote) wdNote.textContent = `Sent ${fmtMoney(amount)} to ${shortAddr}. Funds keep generating.`;
    wdForm.elements.wallet.value = "";
    showToast(`Withdrew ${fmtMoney(amount)} to ${shortAddr} (prank — no real funds).`, "success");
  });

  runBtn.addEventListener("click", run);
  stopBtn.addEventListener("click", stop);
  addLog("Breach console ready. Press RUN BREACH to start.");

  return wrap;
}

function buildCryptoMinerUI() {
  const coins = [
    { symbol: "BTC", name: "Bitcoin", color: "#f7931a", balance: 0.0184, rate: "486.9 TH/s", change: "+2.4%" },
    { symbol: "ETH", name: "Ethereum", color: "#7c8cff", balance: 0.7421, rate: "224.6 GH/s", change: "+1.8%" },
    { symbol: "SOL", name: "Solana", color: "#22f7c6", balance: 18.62, rate: "91.4 GH/s", change: "+6.2%" },
    { symbol: "DOGE", name: "Dogecoin", color: "#d6b554", balance: 8402.18, rate: "63.2 GH/s", change: "+3.1%" },
    { symbol: "BNB", name: "BNB", color: "#f3ba2f", balance: 4.71, rate: "52.8 GH/s", change: "+0.9%" },
    { symbol: "XRP", name: "XRP", color: "#62d6ff", balance: 1220.5, rate: "39.6 GH/s", change: "+4.7%" },
    { symbol: "ADA", name: "Cardano", color: "#3cc8ff", balance: 516.9, rate: "31.7 GH/s", change: "+2.9%" },
    { symbol: "LTC", name: "Litecoin", color: "#b9c7d6", balance: 22.48, rate: "28.4 GH/s", change: "+1.2%" },
    { symbol: "USDT", name: "Tether", color: "#50af95", balance: 936.45, rate: "stable route", change: "SYNC" },
  ];
  const logs = [
    "exchange mirror mounted on ghost node",
    "BTC pool route accepted",
    "ETH validator shadow synced",
    "SOL burst channel warmed",
    "DOGE auxiliary pool online",
    "BNB settlement queue sampled",
    "XRP ledger pulse verified",
    "ADA epoch window simulated",
    "USDT balance rail masked",
    "wallet vault updated locally",
  ];

  const wrap = document.createElement("div");
  wrap.className = "crypto-miner";
  wrap.style.setProperty("--active-coin", coins[0].color);
  wrap.innerHTML = `
    <div class="cm-bg-grid"></div>
    <div class="cm-bg-radar"></div>
    <header class="cm-header">
      <div>
        <div class="cm-kicker">SimDeck Miner</div>
        <h2>Dark Exchange Breach</h2>
      </div>
      <div class="cm-header-badges">
        <span>EXCHANGE NODE</span>
        <span>WALLET SYNC</span>
      </div>
    </header>

    <section class="cm-coin-strip" aria-label="Crypto coins">
      ${coins.map((coin, index) => `
        <button class="cm-coin ${index === 0 ? "active" : ""}" type="button" data-coin="${coin.symbol}" style="--coin:${coin.color}">
          <span class="cm-coin-mark">${coin.symbol.slice(0, 1)}</span>
          <span><strong>${coin.symbol}</strong><small>${coin.name}</small></span>
          <em>${coin.change}</em>
        </button>
      `).join("")}
    </section>

    <main class="cm-layout">
      <section class="cm-panel cm-terminal-panel">
        <div class="cm-panel-head">
          <span>Mining Console</span>
          <strong class="cm-state">IDLE</strong>
        </div>
        <div class="cm-terminal" aria-live="polite">
          <p><span class="cm-log-tag">BOOT</span> awaiting operator command...</p>
          <p><span class="cm-log-tag">VAULT</span> wallet vault mounted</p>
          <p><span class="cm-log-tag">POOL</span> encrypted pool bridge standing by</p>
        </div>
      </section>

      <section class="cm-core">
        <div class="cm-controls">
          <button class="cm-main-action" type="button">Start Mining</button>
          <button class="cm-stop-action" type="button" disabled>Stop</button>
          <button class="cm-wallet-action" type="button">Refresh Wallet</button>
        </div>
        <div class="cm-core-map">
          <div class="cm-core-scan"></div>
          <div class="cm-core-ring ring-a"></div>
          <div class="cm-core-ring ring-b"></div>
          <div class="cm-core-orb">
            <span>EX</span>
            <strong>POOL</strong>
          </div>
          <div class="cm-core-readout">
            <span>ACTIVE ROUTE</span>
            <strong class="cm-active-symbol">BTC</strong>
          </div>
          <div class="cm-core-chip chip-a">HASHFLOW</div>
          <div class="cm-core-chip chip-b">CHAINLOCK</div>
          ${coins.slice(0, 8).map((coin, index) => `
            <button class="cm-node node-${index + 1}" type="button" data-coin="${coin.symbol}" style="--coin:${coin.color}">
              <span>${coin.symbol}</span>
            </button>
          `).join("")}
          <svg class="cm-lines" viewBox="0 0 500 330" aria-hidden="true">
            <path d="M250 165 L85 80 M250 165 L250 42 M250 165 L415 80 M250 165 L454 181 M250 165 L350 292 M250 165 L250 314 M250 165 L92 250 M250 165 L46 171" />
          </svg>
        </div>
        <div class="cm-progress-wrap">
          <div class="cm-progress-meta"><span>Routing shares</span><strong class="cm-progress-value">0%</strong></div>
          <div class="cm-progress"><span></span></div>
        </div>
      </section>

      <aside class="cm-panel cm-wallet-panel">
        <div class="cm-panel-head">
          <span>Wallet</span>
          <strong>SYNC</strong>
        </div>
        <div class="cm-vault-focus" style="--coin:${coins[0].color}">
          <span class="cm-vault-mark">B</span>
          <div>
            <small>ACTIVE VAULT</small>
            <strong class="cm-vault-symbol">BTC</strong>
          </div>
          <em class="cm-vault-change">${coins[0].change}</em>
        </div>
        <div class="cm-wallet-list">
          ${coins.map((coin) => `
            <div class="cm-wallet-row" data-coin="${coin.symbol}" style="--coin:${coin.color}">
              <span>${coin.symbol}</span>
              <strong>${coin.balance.toLocaleString(undefined, { maximumFractionDigits: 4 })}</strong>
              <small>${coin.rate}</small>
            </div>
          `).join("")}
        </div>
      </aside>
    </main>

    <footer class="cm-footer">
      <div><span class="cm-label">Hash Rate</span><strong class="cm-hash">0.0 TH/s</strong></div>
      <div><span class="cm-label">Accepted</span><strong class="cm-accepted">0</strong></div>
      <div><span class="cm-label">Rejected</span><strong class="cm-rejected">0</strong></div>
      <div><span class="cm-label">GPU Rigs</span><strong class="cm-gpus">0/12</strong></div>
      <div class="cm-mini-graph" aria-hidden="true">${Array.from({ length: 28 }, (_, i) => `<i style="--h:${22 + ((i * 17) % 58)}%"></i>`).join("")}</div>
    </footer>
  `;

  let running = false;
  let tick = 0;
  let activeCoin = "BTC";
  const terminal = wrap.querySelector(".cm-terminal");
  const stateLabel = wrap.querySelector(".cm-state");
  const startBtn = wrap.querySelector(".cm-main-action");
  const stopBtn = wrap.querySelector(".cm-stop-action");
  const walletBtn = wrap.querySelector(".cm-wallet-action");
  const progressFill = wrap.querySelector(".cm-progress span");
  const progressValue = wrap.querySelector(".cm-progress-value");
  const hashValue = wrap.querySelector(".cm-hash");
  const acceptedValue = wrap.querySelector(".cm-accepted");
  const rejectedValue = wrap.querySelector(".cm-rejected");
  const gpuValue = wrap.querySelector(".cm-gpus");
  const activeSymbol = wrap.querySelector(".cm-active-symbol");
  const vaultFocus = wrap.querySelector(".cm-vault-focus");
  const vaultMark = wrap.querySelector(".cm-vault-mark");
  const vaultSymbol = wrap.querySelector(".cm-vault-symbol");
  const vaultChange = wrap.querySelector(".cm-vault-change");

  const appendMinerLog = (message, tag = "HASH") => {
    const p = document.createElement("p");
    p.innerHTML = `<span class="cm-log-tag">${escapeMarkup(tag)}</span> ${escapeMarkup(message)}`;
    terminal.appendChild(p);
    while (terminal.children.length > 12) terminal.removeChild(terminal.firstElementChild);
    terminal.scrollTop = terminal.scrollHeight;
  };

  const setActiveCoin = (symbol) => {
    const coin = coins.find((item) => item.symbol === symbol) || coins[0];
    activeCoin = symbol;
    wrap.style.setProperty("--active-coin", coin.color);
    wrap.querySelectorAll("[data-coin]").forEach((el) => el.classList.toggle("active", el.dataset.coin === symbol));
    if (activeSymbol) activeSymbol.textContent = symbol;
    if (vaultFocus) vaultFocus.style.setProperty("--coin", coin.color);
    if (vaultMark) vaultMark.textContent = symbol.slice(0, 1);
    if (vaultSymbol) vaultSymbol.textContent = symbol;
    if (vaultChange) vaultChange.textContent = coin.change;
    appendMinerLog(`${symbol} route selected for mining`, "ROUTE");
  };

  wrap.querySelectorAll(".cm-coin, .cm-node").forEach((btn) => {
    btn.addEventListener("click", () => setActiveCoin(btn.dataset.coin));
  });

  startBtn.addEventListener("click", () => {
    if (running) return;
    running = true;
    tick = 0;
    wrap.classList.add("running");
    stateLabel.textContent = "RUNNING";
    startBtn.textContent = "Mining Running";
    startBtn.disabled = true;
    stopBtn.disabled = false;
    appendMinerLog("dark exchange breach started", "CORE");
    appendMinerLog("routing shares across BTC, ETH, SOL, DOGE, BNB, XRP", "POOL");

    const interval = setInterval(() => {
      if (!running) return;
      tick += 1;
      const pct = Math.min(99, Math.round((tick * 7) % 100));
      const accepted = 900 + tick * 37 + Math.floor(Math.random() * 21);
      const rejected = Math.floor(tick / 3) + Math.floor(Math.random() * 3);
      const hash = (340 + tick * 18 + Math.random() * 45).toFixed(1);

      progressFill.style.width = `${pct}%`;
      progressValue.textContent = `${pct}%`;
      hashValue.textContent = `${hash} TH/s`;
      acceptedValue.textContent = accepted.toLocaleString();
      rejectedValue.textContent = rejected.toLocaleString();
      gpuValue.textContent = `${Math.min(12, 2 + Math.floor(tick / 2))}/12`;

      const walletRows = wrap.querySelectorAll(".cm-wallet-row");
      walletRows.forEach((row, index) => {
        const value = row.querySelector("strong");
        const base = coins[index].balance + tick * (index === 0 ? 0.0003 : index === 1 ? 0.006 : 0.18);
        value.textContent = base.toLocaleString(undefined, { maximumFractionDigits: index < 2 ? 4 : 2 });
      });

      const tags = ["POOL", "HASH", "CHAIN", "GPU", "VAULT"];
      appendMinerLog(`${activeCoin} ${logs[tick % logs.length]} :: share ${String(accepted).slice(-4)} accepted`, tags[tick % tags.length]);
    }, 900 / Math.max(0.5, state.speed));
    state.timers.push(interval);
  });

  stopBtn.addEventListener("click", () => {
    running = false;
    wrap.classList.remove("running");
    stateLabel.textContent = "STOPPED";
    startBtn.textContent = "Resume Mining";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    appendMinerLog("operator stopped miner; wallet frozen", "CORE");
  });

  walletBtn.addEventListener("click", () => {
    appendMinerLog("wallet refreshed from local vault cache", "VAULT");
    wrap.querySelector(".cm-wallet-panel").classList.add("pulse");
    setTimeout(() => wrap.querySelector(".cm-wallet-panel")?.classList.remove("pulse"), 700);
  });

  return wrap;
}

// ---------- Critical Data Scenario ----------

function runCriticalScenario() {
  clearStage();

  const container = document.createElement("div");
  container.className = "sim-critical-video";
  container.innerHTML = `
    <div class="critical-video-wrap" role="status" aria-live="polite" aria-label="Critical data download simulation video (visual only)">
      <video class="critical-video" muted playsinline autoplay loop preload="auto">
        <source src="${CRITICAL_VIDEO_SRC_MP4}" type="video/mp4">
      </video>

      <div class="critical-video-overlay">
        <div class="critical-video-pill">SIMULATION ONLY</div>
        <div class="critical-video-sub">Visual demo. No real data transfer.</div>
      </div>

      <div class="critical-video-missing">
        <div class="critical-video-pill danger">VIDEO NOT FOUND</div>
        <div class="critical-video-sub">Render it via: <span class="mono">cd remotion; npm i; npm run render:critical</span></div>
      </div>
    </div>
  `;

  els.stage.appendChild(container);

  const wrap = container.querySelector(".critical-video-wrap");
  const vid = wrap.querySelector("video");
  const markMissing = () => wrap.classList.add("missing");
  const markOk = () => wrap.classList.remove("missing");
  vid.addEventListener("error", markMissing);
  vid.addEventListener("loadeddata", markOk);
  const p = vid.play();
  if (p && typeof p.catch === "function") p.catch(() => { /* ignore */ });
}

function criticalAction(phase) {
  const container = document.querySelector(".sim-critical-data, .sim-critical-video");
  if (!container) return;

  if (phase.action === "critical-init") {
    // Already handled by runner
    addToast("Initiating critical transfer protocol...", "warning");
  } else if (phase.action === "critical-progress") {
    const pct = Number(phase.payload || 0);
    const bar = container.querySelector("#criticalProgressBar");
    // Video-mode scenario doesn't need JS-driven segments.
    if (!bar) return;

    const fromPct = Number(bar.dataset.pct || "0");
    const toPct = Math.max(0, Math.min(100, pct));
    bar.dataset.pct = String(toPct);
    bar.setAttribute("aria-valuenow", String(toPct));

    const pctEl = container.querySelector("#critPct");
    if (pctEl) pctEl.textContent = `${Math.round(toPct)}%`;

    const segments = Array.from(bar.querySelectorAll(".progress-segment"));
    const total = segments.length;

    // Smoothly interpolate between values so it "feels" like downloading, not jumping.
    if (bar._critRaf) cancelAnimationFrame(bar._critRaf);
    const start = performance.now();
    const dur = 520 / Math.max(0.6, state.speed);
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = t * t * (3 - 2 * t);
      const cur = fromPct + (toPct - fromPct) * eased;
      const filled = Math.floor((cur / 100) * total);
      segments.forEach((seg, i) => {
        seg.classList.toggle("filled", i < filled);
      });
      if (t < 1) {
        bar._critRaf = requestAnimationFrame(step);
      } else {
        bar._critRaf = 0;
      }
    };
    bar._critRaf = requestAnimationFrame(step);

    // Randomize stats
    container.querySelector("#critPackets").textContent = String(Math.floor(toPct * 942));
    container.querySelector("#critRate").textContent = (Math.random() * 50 + 10).toFixed(1);
    const nodes = ["EU-WEST", "US-EAST", "AP-SG", "ME-DXB", "SA-SP"];
    container.querySelector("#critNode").textContent = nodes[Math.floor(Math.random() * nodes.length)];

    // Optional: Add random tech output
    const output = container.querySelector(".crit-output");
    if (output) {
      output.innerHTML = `
        SEG_${Math.floor(Math.random() * 9000)}.${Math.floor(Math.random() * 9000)}<br>
        BLK_${Math.floor(Math.random() * 9000)}.${Math.floor(Math.random() * 9000)}<br>
        LINK: STABLE<br>
        ENCRYPTION: SIMULATED
      `;
    }
  } else if (phase.action === "complete") {
    const bar = container.querySelector("#criticalProgressBar");
    const title = container.querySelector(".crit-title");
    if (title) title.textContent = String(phase.payload || "Download Complete");

    // Ensure the bar shows full completion.
    if (bar) {
      bar.dataset.pct = "100";
      bar.setAttribute("aria-valuenow", "100");
      const pctEl = container.querySelector("#critPct");
      if (pctEl) pctEl.textContent = "100%";
      const segments = Array.from(bar.querySelectorAll(".progress-segment"));
      segments.forEach((seg) => seg.classList.add("filled"));
    }

    addToast(String(phase.payload || "Download Complete"), "success");
  }
}

// ---------- Global Network Hack Scenario ----------

const GN_CITIES = [
  { name: "New York", x: 24, y: 40, ip: "192.168.42.17", coord: "40.7128° N, 74.0060° W" },
  { name: "London", x: 47, y: 30, ip: "10.0.88.201", coord: "51.5074° N, 0.1278° W" },
  { name: "Berlin", x: 52, y: 28, ip: "172.16.55.33", coord: "52.5200° N, 13.4050° E" },
  { name: "Tokyo", x: 84, y: 38, ip: "10.42.99.104", coord: "35.6762° N, 139.6503° E" },
  { name: "Sydney", x: 87, y: 76, ip: "192.168.7.42", coord: "33.8688° S, 151.2093° E" },
  { name: "Dubai", x: 62, y: 48, ip: "172.20.14.88", coord: "25.2048° N, 55.2708° E" },
  { name: "São Paulo", x: 30, y: 72, ip: "10.99.12.67", coord: "23.5505° S, 46.6333° W" },
  { name: "Singapore", x: 76, y: 58, ip: "192.168.200.5", coord: "1.3521° N, 103.8198° E" },
  { name: "Moscow", x: 58, y: 24, ip: "10.55.77.201", coord: "55.7558° N, 37.6173° E" },
  { name: "Lagos", x: 48, y: 56, ip: "172.31.44.19", coord: "6.5244° N, 3.3792° E" },
];

function runGlobalNetScenario() {
  clearStage();

  const container = document.createElement("div");
  container.className = "sim-globalnet-video";
  container.innerHTML = `
    <div class="globalnet-video-wrap" role="status" aria-live="polite" aria-label="Global network simulation video (visual only)">
      <video class="globalnet-video" muted playsinline autoplay loop preload="auto">
        <source src="${GLOBALNET_VIDEO_SRC_MP4}" type="video/mp4">
      </video>

      <div class="globalnet-video-overlay">
        <div class="globalnet-video-pill">SIMULATION ONLY</div>
        <div class="globalnet-video-sub">Visual demo. No real access.</div>
      </div>

      <div class="globalnet-video-missing">
        <div class="globalnet-video-pill danger">VIDEO NOT FOUND</div>
        <div class="globalnet-video-sub">Render it via: <span class="mono">cd remotion; npm i; npm run render:globalnet</span></div>
      </div>
    </div>
  `;

  els.stage.appendChild(container);

  const wrap = container.querySelector(".globalnet-video-wrap");
  const vid = wrap.querySelector("video");
  const markMissing = () => wrap.classList.add("missing");
  const markOk = () => wrap.classList.remove("missing");
  vid.addEventListener("error", markMissing);
  vid.addEventListener("loadeddata", markOk);
  const p = vid.play();
  if (p && typeof p.catch === "function") p.catch(() => { /* ignore */ });
}

function globalnetAction(phase) {
  const container = document.querySelector(".gn-container");
  if (!container) return;

  if (phase.action === "gn-init") {
    addToast("Initiating global network acquisition...", "warning");
    // Start ambient data stream
    gnStartDataStream(container);
  }

  if (phase.action === "gn-hack") {
    const idx = phase.payload;
    const city = GN_CITIES[idx];
    if (!city) return;

    // Update status panel
    const statusTarget = container.querySelector(".gn-status-target");
    statusTarget.textContent = `TARGET: ${city.name.toUpperCase()} [${city.ip}]`;
    const fill = container.querySelector(".gn-status-fill");
    fill.style.width = `${((idx + 1) / GN_CITIES.length) * 100}%`;

    // Activate city node
    const node = container.querySelector(`.gn-node[data-idx="${idx}"]`);
    if (node) {
      node.classList.add("hacked");
      node.setAttribute("r", "1.2");
    }

    // Activate pulse
    const pulse = container.querySelector(`.gn-pulse-ring[data-idx="${idx}"]`);
    if (pulse) pulse.classList.add("active");

    // Activate label
    const label = container.querySelector(`.gn-label[data-idx="${idx}"]`);
    if (label) label.classList.add("hacked");

    // Draw connection line to previous city
    if (idx > 0) {
      const prev = GN_CITIES[idx - 1];
      gnDrawLine(container, prev.x, prev.y, city.x, city.y);
    }

    // Add to data stream
    gnAddLogEntry(container, city, idx);

    // Update ticker
    container.querySelector("#gnNodeCount").textContent = idx + 1;
    container.querySelector("#gnBandwidth").textContent = ((idx + 1) * 4.2 + Math.random() * 8).toFixed(1);
    container.querySelector("#gnLatency").textContent = Math.floor(Math.random() * 180 + 20);

    addToast(`🎯 ${city.name} — ACCESS GRANTED`, "success");
  }

  if (phase.action === "gn-dashboard") {
    gnShowDashboard(container);
  }
}

function gnDrawLine(container, x1, y1, x2, y2) {
  const svg = container.querySelector(".gn-lines");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x1);
  line.setAttribute("y2", y1);
  line.setAttribute("class", "gn-line");
  svg.appendChild(line);

  // Animate to target
  requestAnimationFrame(() => {
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
  });
}

function gnStartDataStream(container) {
  const body = container.querySelector(".gn-stream-body");
  if (!body) return;
  const phrases = [
    "SYN → ACK handshake",
    "TLS 1.3 negotiation",
    "Cert pinning bypassed",
    "Port 443 open",
    "SSH tunnel established",
    "DNS rebind complete",
    "Firewall rule injected",
    "Proxy chain routing",
    "SOCKS5 connected",
    "VPN pivot active",
  ];
  let i = 0;
  const push = () => {
    if (!state.running) return;
    const line = document.createElement("div");
    line.className = "gn-stream-line";
    const ts = new Date().toLocaleTimeString("en-GB", { hour12: false });
    line.innerHTML = `<span class="gn-ts">${ts}</span> ${phrases[i % phrases.length]}`;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
    if (body.children.length > 30) body.firstChild.remove();
    i++;
    setTimeout(push, randomInt(600, 1400) / state.speed);
  };
  setTimeout(push, 800);
}

function gnAddLogEntry(container, city, idx) {
  const body = container.querySelector(".gn-stream-body");
  if (!body) return;

  const keys = [
    "xK9m2pQ4rT", "vB7nW3jL8s", "hR5yU1cF6e",
    "mD4gZ0aX9w", "qP8kN2bJ7t", "sL6fH3dV5u",
    "wC1iO9eA4r", "yT7oM0xG2p", "nF3lB8jK5q", "dE6hR1vS9m"
  ];

  const entries = [
    `<span class="gn-log-ok">✓ ACCESS GRANTED</span> ${city.name} [${city.ip}]`,
    `<span class="gn-log-dim">  Coord:</span> ${city.coord}`,
    `<span class="gn-log-dim">  Key:</span> <span class="gn-log-key">${keys[idx]}</span>`,
    `<span class="gn-log-dim">  Status:</span> COMPROMISED`,
  ];

  entries.forEach((html, j) => {
    setTimeout(() => {
      const line = document.createElement("div");
      line.className = "gn-stream-line gn-stream-highlight";
      line.innerHTML = html;
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;
    }, j * 200);
  });
}

function gnShowDashboard(container) {
  const dash = container.querySelector("#gnDashboard");
  if (!dash) return;

  const keys = [
    "xK9m2pQ4rT", "vB7nW3jL8s", "hR5yU1cF6e",
    "mD4gZ0aX9w", "qP8kN2bJ7t", "sL6fH3dV5u",
    "wC1iO9eA4r", "yT7oM0xG2p", "nF3lB8jK5q", "dE6hR1vS9m"
  ];

  let rows = "";
  GN_CITIES.forEach((c, i) => {
    rows += `
      <tr>
        <td class="gn-dash-city">${c.name}</td>
        <td class="gn-dash-mono">${c.ip}</td>
        <td class="gn-dash-mono gn-dash-coord">${c.coord}</td>
        <td class="gn-dash-key">${keys[i]}</td>
        <td class="gn-dash-status">COMPROMISED</td>
      </tr>`;
  });

  dash.innerHTML = `
    <div class="gn-dash-card">
      <div class="gn-dash-header">
        <span class="gn-dash-badge">🔓 OPERATION COMPLETE</span>
        <span class="gn-dash-ts">${new Date().toLocaleTimeString("en-GB", { hour12: false })}</span>
      </div>
      <div class="gn-dash-title">GLOBAL NETWORK CONTROL</div>
      <div class="gn-dash-sub">10 / 10 nodes compromised — Full access achieved</div>
      <div class="gn-dash-table-wrap">
        <table class="gn-dash-table">
          <thead><tr>
            <th>CITY</th><th>IP ADDRESS</th><th>COORDINATES</th><th>ACCESS KEY</th><th>STATUS</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="gn-dash-footer">
        <span>🎭 SIMULATION ONLY — No real systems accessed</span>
      </div>
    </div>
  `;

  dash.classList.remove("hidden");
  addToast("🌐 All 10 nodes compromised — Dashboard unlocked", "success");
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addGnGlitch() {
  const glitch = document.createElement("div");
  glitch.className = "glitch-overlay";
  glitch.style.cssText = `
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 999;
    opacity: 0;
    background: rgba(255, 0, 0, 0.05);
    mix-blend-mode: overlay;
  `;
  els.stage.appendChild(glitch);

  // Simple glitch effect
  const flicker = () => {
    if (!state.running) return;
    if (Math.random() > 0.97) {
      glitch.style.opacity = Math.random() * 0.2;
      glitch.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
      setTimeout(() => {
        glitch.style.opacity = 0;
        glitch.style.transform = "none";
      }, 50);
    }
    requestAnimationFrame(flicker);
  };
  flicker();
}
