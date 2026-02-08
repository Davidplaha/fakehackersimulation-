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
  { id: "phone", name: "Phone Hacking", desc: "Fake mobile scan with zero data.", icon: "📱", category: "phone", tags: ["Mobile", "Cinematic"], intensity: "Med" },
  { id: "email", name: "Email Hack", desc: "Bypass animation & inbox access.", icon: "📧", category: "email", tags: ["Desktop"], intensity: "Med", isNew: true },
  { id: "virus", name: "Virus Scanner", desc: "Fake security center with threats.", icon: "🛡️", category: "desktop", tags: ["Desktop", "Scare"], intensity: "High", isNew: true },
  { id: "ios", name: "iOS Update", desc: "Endless updater with panic mode.", icon: "🍎", category: "scare", tags: ["Mobile", "Loop"], intensity: "Low", isNew: true },
  { id: "android", name: "Android Sim", desc: "Optimizing/repairing loop.", icon: "🤖", category: "phone", tags: ["Mobile"], intensity: "Low" },
  { id: "win11", name: "Windows 11", desc: "Multi-window ops desk.", icon: "🖥️", category: "desktop", tags: ["Desktop", "Cinematic"], intensity: "High" },
  { id: "tv", name: "Cracked Screen", desc: "Prank cracked glass overlay.", icon: "📺", category: "prank", tags: ["Prank"], intensity: "Low" },
  { id: "emailHijack", name: "Email Hijack", desc: "Account recovery theater.", icon: "🔓", category: "email", tags: ["Desktop"], intensity: "Med" },
  { id: "fbi", name: "FBI Lock", desc: "Fake lock with countdown timer.", icon: "🚨", category: "scare", tags: ["Prank", "Scare"], intensity: "Med", isHot: true },
];

const miniPrograms = [
  { id: "cam", label: "Camera Feed", note: "Simulated CCTV" },
  { id: "pwd", label: "Password Meter", note: "Fiction only" },
  { id: "graphs", label: "System Graphs", note: "Randomized" },
  { id: "sat", label: "Satellite Link", note: "Simulated link" },
];

const scripts = {
  phone_basic: [
    { t: 0, action: "text", payload: "Device detected: DemoPhone X" },
    { t: 1, action: "stage", payload: "Preparing" },
    { t: 3, action: "stage", payload: "Analyzing" },
    { t: 6, action: "stage", payload: "Indexing sample data" },
    { t: 9, action: "counts", payload: { photos: 0, messages: 0, contacts: 0 } },
    { t: 12, action: "complete", payload: "Session complete" },
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
    { t: 0, action: "crack", payload: "corner" },
    { t: 5, action: "crack", payload: "spider" },
    { t: 10, action: "crack", payload: "center" },
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
  customTargetNumber: '+1 (555) 123-4567',
  customTargetModel: 'DemoPhone X',
  customTargetCarrier: 'SecureNet Mobile',
  customTargetLocation: 'Unknown Location',
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
    console.log("Calling renderScenarios...");
    renderScenarios();
    console.log("Calling renderTray...");
    renderTray();
    console.log("Calling bindControls...");
    bindControls();
    console.log("Calling bindNewDashboard...");
    bindNewDashboard();
    console.log("Calling setTheme...");
    setTheme("hollywood");
    console.log("Calling updateCrumbs...");
    updateCrumbs();
    console.log("=== SimDeck Init Complete ===");
    showToast("Welcome to SimDeck! Pick a scenario to start.", "info");
    handleDonationReturnFromCoinbase();
  } catch (error) {
    console.error("=== SimDeck Init ERROR ===", error);
    alert("SimDeck Init Error: " + error.message);
  }
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

    card.innerHTML = `
      <div class="card-icon">${sc.icon || "🎯"}</div>
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

  // Donation button (top bar)
  injectDonateButton();
}

function injectDonateButton() {
  const topRight = document.querySelector(".top-bar-right");
  if (!topRight) return;
  if (document.getElementById("donateBtn")) return;

  const btn = document.createElement("button");
  btn.className = "btn compact ghost";
  btn.id = "donateBtn";
  btn.textContent = `Donate $${DONATION_USD}`;
  btn.addEventListener("click", () => showPaymentModal());

  const settingsBtn = document.getElementById("settingsBtn");
  if (settingsBtn && settingsBtn.parentElement === topRight) {
    topRight.insertBefore(btn, settingsBtn);
  } else {
    topRight.appendChild(btn);
  }
}


function renderTray() {
  els.tray.innerHTML = "";
  miniPrograms.forEach((m) => {
    const btn = document.createElement("button");
    btn.className = "tray-button";
    btn.innerHTML = `<span class="label">${m.label}</span><span class="tiny">${m.note}</span>`;
    btn.addEventListener("click", () => openMiniProgram(m.id));
    els.tray.appendChild(btn);
  });
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
    scenarioRunners[id]();
  } else {
    console.log("No handler found for scenario:", id);
  }
}

function showPhoneScenarioOptions() {
  console.log("showPhoneScenarioOptions called");
  showModeSelection();
}

// Check if user has premium unlocked
function isPremiumUnlocked() {
  return localStorage.getItem(STORAGE_KEYS.premium) === 'unlocked';
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
    showToast("Donation canceled.", "info");
    return;
  }

  if (donation !== "success") return;

  const code = localStorage.getItem(STORAGE_KEYS.lastChargeCode) || "";
  if (!code) {
    showToast("Return received. Click Donate and verify the charge.", "info");
    showPaymentModal();
    return;
  }

  showToast("Verifying donation...", "info");
  try {
    const st = await fetchCoinbaseDonationStatus(code);
    if (st && st.paid) {
      localStorage.setItem(STORAGE_KEYS.premiumChargeCode, String(st.code || code));
      unlockPremium("donation");
      return;
    }
    showToast(`Charge status: ${st.status || "UNKNOWN"}. You can verify again in a minute.`, "info");
    showPaymentModal();
  } catch (err) {
    console.warn(err);
    showToast("Could not verify donation yet. Open Donate and click Verify.", "warning");
    showPaymentModal();
  }
}

// Unlock premium (called after donation)
function unlockPremium(reason = "donation") {
  localStorage.setItem(STORAGE_KEYS.premium, 'unlocked');
  localStorage.setItem(STORAGE_KEYS.premiumUnlockedAt, String(Date.now()));
  if (reason === "test") {
    showToast("Test mode: Premium unlocked on this device.", "success");
    return;
  }
  showToast("Thanks for supporting SimDeck! Premium unlocked on this device.", "success");
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

// Mode Selection Screen
function showModeSelection() {
  els.scenarioGrid?.classList.add("hidden");
  els.stage.classList.add("active");
  els.stage.innerHTML = "";

  const isPremium = isPremiumUnlocked();

  const container = document.createElement("div");
  container.className = "mode-selection";
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    height: 100%;
    gap: 30px;
  `;

  container.innerHTML = `
    <div style="text-align: center;">
      <h2 style="color: var(--text); margin: 0 0 10px 0; font-size: 28px;">📱 Phone Hacking Simulator</h2>
      <p style="color: var(--muted); margin: 0;">Choose your experience mode</p>
    </div>

    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; max-width: 700px;">
      
      <!-- Free Demo Mode -->
      <div class="mode-card" id="freeModeCard" style="
        background: linear-gradient(145deg, rgba(61, 246, 161, 0.1), rgba(61, 246, 161, 0.05));
        border: 2px solid var(--accent);
        border-radius: 20px;
        padding: 30px;
        width: 280px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
      ">
        <div style="font-size: 48px; margin-bottom: 15px;">🆓</div>
        <h3 style="color: var(--accent); margin: 0 0 10px 0; font-size: 22px;">Free Demo</h3>
        <p style="color: var(--muted); font-size: 14px; margin-bottom: 20px;">
          Experience the simulation with randomly generated fake data
        </p>
        <ul style="text-align: left; color: var(--text); font-size: 13px; list-style: none; padding: 0; margin: 0 0 20px 0;">
          <li style="padding: 5px 0;">✅ All 6 phone scenarios</li>
          <li style="padding: 5px 0;">✅ Realistic animations</li>
          <li style="padding: 5px 0;">⚠️ Random target data only</li>
          <li style="padding: 5px 0; color: var(--muted);">❌ No customization</li>
        </ul>
        <button class="btn primary" style="width: 100%; padding: 12px;">
          Start Free Demo →
        </button>
      </div>

      <!-- Premium Custom Mode -->
      <div class="mode-card" id="customModeCard" style="
        background: linear-gradient(145deg, rgba(255, 215, 0, 0.15), rgba(255, 165, 0, 0.08));
        border: 2px solid ${isPremium ? '#4ade80' : '#ffd700'};
        border-radius: 20px;
        padding: 30px;
        width: 280px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
        position: relative;
      ">
        ${isPremium ? `
          <div style="position: absolute; top: -12px; right: -12px; background: #4ade80; color: #000; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px;">
            ✓ UNLOCKED
          </div>
        ` : `
          <div style="position: absolute; top: -12px; right: -12px; background: linear-gradient(90deg, #ffd700, #ff8c00); color: #000; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px;">
            💎 PREMIUM
          </div>
        `}
        <div style="font-size: 48px; margin-bottom: 15px;">🎯</div>
        <h3 style="color: #ffd700; margin: 0 0 10px 0; font-size: 22px;">Custom Target</h3>
        <p style="color: var(--muted); font-size: 14px; margin-bottom: 20px;">
          ${isPremium ? 'Customize everything for your prank!' : 'Perfect for pranking friends!'}
        </p>
        <ul style="text-align: left; color: var(--text); font-size: 13px; list-style: none; padding: 0; margin: 0 0 20px 0;">
          <li style="padding: 5px 0;">✅ Custom target name</li>
          <li style="padding: 5px 0;">✅ Custom phone number</li>
          <li style="padding: 5px 0;">✅ Custom battery & network</li>
          <li style="padding: 5px 0;">✅ Custom location & carrier</li>
        </ul>
        <button class="btn" style="
          width: 100%; 
          padding: 12px; 
          background: ${isPremium ? 'var(--accent)' : 'linear-gradient(90deg, #ffd700, #ff8c00)'};
          color: ${isPremium ? 'var(--bg)' : '#000'};
          font-weight: bold;
        ">
          ${isPremium ? 'Customize Target →' : `Donate $${DONATION_USD} (Crypto)`}
        </button>
      </div>
    </div>

    <button class="btn ghost" id="backToHome" style="margin-top: 20px;">
      ← Back to Scenarios
    </button>
  `;

  els.stage.appendChild(container);

  // Event listeners
  document.getElementById('freeModeCard').addEventListener('click', () => {
    // Generate random data and go to scenario selection
    const randomData = generateRandomTargetData();
    state.customTargetName = randomData.name;
    state.customTargetNumber = randomData.phone;
    state.customTargetModel = randomData.device;
    state.customTargetCarrier = randomData.carrier;
    state.customTargetLocation = randomData.location;
    state.customTargetBattery = randomData.battery;
    state.customTargetNetwork = randomData.network;
    state.isPremiumMode = false;
    showToast("Demo mode: Using random target data", "info");
    showScenarioSelection();
  });

  document.getElementById('customModeCard').addEventListener('click', () => {
    if (isPremiumUnlocked()) {
      showCustomizationForm();
    } else {
      showPaymentModal({ afterUnlock: "customize" });
    }
  });

  document.getElementById('backToHome').addEventListener('click', () => {
    resetStage();
  });
}

// Donation Modal (Coinbase Commerce)
function showPaymentModal(opts = {}) {
  const afterUnlock = opts && opts.afterUnlock ? opts.afterUnlock : null;
  const isLocal = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);

  const lastCode = localStorage.getItem(STORAGE_KEYS.lastChargeCode) || "";

  const modal = document.createElement("div");
  modal.className = "donation-modal";
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
      background: var(--panel-strong);
      border: 2px solid #ffd700;
      border-radius: 24px;
      padding: 30px;
      max-width: 450px;
      width: 100%;
      text-align: center;
      position: relative;
    ">
      <button id="closeDonationModal" style="
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        color: var(--muted);
        font-size: 24px;
        cursor: pointer;
      ">×</button>

      <div style="font-size: 48px; margin-bottom: 15px;">❤️</div>
      <h2 style="color: #ffd700; margin: 0 0 10px 0;">Support SimDeck</h2>
      <p style="color: var(--muted); margin: 0 0 18px 0; font-size: 14px;">
        Donate via Coinbase Commerce to unlock Premium Mode on this device.
      </p>

      <div style="
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.3);
        border-radius: 16px;
        padding: 18px;
        margin-bottom: 14px;
      ">
        <div style="font-size: 34px; font-weight: bold; color: #ffd700;">$${DONATION_USD} USD</div>
        <div style="color: var(--muted); font-size: 13px; margin-top: 6px;">Secure crypto checkout</div>
      </div>

      <div style="text-align:left; margin: 0 0 14px 0;">
        <div style="color: var(--text); font-size: 13px; font-weight: bold; margin-bottom: 8px;">
          Steps
        </div>
        <ol style="margin:0; padding-left: 18px; color: var(--muted); font-size: 12.5px; line-height: 1.5;">
          <li>Open the Coinbase checkout</li>
          <li>Send crypto payment</li>
          <li>Return here and click Verify</li>
        </ol>
      </div>

      <button id="openCoinbaseCheckout" class="btn primary" style="
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
      ">Donate with Coinbase</button>

      <button id="verifyDonation" class="btn" style="
        width: 100%;
        padding: 12px;
        background: linear-gradient(90deg, #ffd700, #ff8c00);
        color: #000;
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 10px;
      ">Verify Donation</button>

      <div id="donationStatus" style="
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 10px 12px;
        text-align: left;
        color: var(--muted);
        font-size: 12px;
        margin-bottom: 10px;
      ">
        ${lastCode ? `Last charge code: <span style="font-family: var(--mono); color: var(--text);">${lastCode}</span>` : "No checkout started yet."}
      </div>

      ${isLocal ? `
        <button id="testDonation" class="btn ghost" style="
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border-color: rgba(255, 255, 255, 0.18);
        ">Test Unlock (Localhost)</button>
        <button id="resetPremium" class="btn ghost compact" style="
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-color: rgba(255, 255, 255, 0.12);
          color: var(--muted);
        ">Reset Premium (Localhost)</button>
      ` : ``}

      <p style="color: var(--muted); font-size: 11px; margin: 0;">
        Premium unlock happens only after Coinbase confirms the charge.
      </p>
    </div>
  `;

  document.body.appendChild(modal);

  const statusEl = document.getElementById("donationStatus");

  document.getElementById("closeDonationModal")?.addEventListener("click", () => modal.remove());

  document.getElementById("openCoinbaseCheckout")?.addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    const prev = btn.textContent;
    btn.textContent = "Creating checkout...";
    try {
      const charge = await createCoinbaseDonationCharge();
      if (statusEl) {
        statusEl.innerHTML = `Last charge code: <span style="font-family: var(--mono); color: var(--text);">${charge.code}</span>`;
      }
      showToast("Redirecting to Coinbase checkout...", "info");
      window.location.href = charge.hosted_url;
    } catch (err) {
      console.warn(err);
      showToast(`${err && err.message ? err.message : "Could not start checkout."} (Requires Vercel /api)`, "warning");
      btn.disabled = false;
      btn.textContent = prev;
    }
  });

  document.getElementById("verifyDonation")?.addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    const code = localStorage.getItem(STORAGE_KEYS.lastChargeCode) || "";
    if (!code) {
      showToast("No charge found. Click 'Donate with Coinbase' first.", "warning");
      return;
    }
    btn.disabled = true;
    const prev = btn.textContent;
    btn.textContent = "Verifying...";
    try {
      const st = await fetchCoinbaseDonationStatus(code);
      if (statusEl) statusEl.textContent = `Charge ${st.code || code}: ${st.status || "UNKNOWN"}`;
      if (st && st.paid) {
        localStorage.setItem(STORAGE_KEYS.premiumChargeCode, String(st.code || code));
        unlockPremium("donation");
        modal.remove();
        if (afterUnlock === "customize") showCustomizationForm();
      } else {
        showToast(`Not confirmed yet (${st.status || "UNKNOWN"}). Try again shortly.`, "info");
      }
    } catch (err) {
      console.warn(err);
      showToast(err && err.message ? err.message : "Verify failed.", "warning");
    } finally {
      btn.disabled = false;
      btn.textContent = prev;
    }
  });

  if (isLocal) {
    document.getElementById("testDonation")?.addEventListener("click", () => {
      unlockPremium("test");
      modal.remove();
      if (afterUnlock === "customize") showCustomizationForm();
    });
    document.getElementById("resetPremium")?.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEYS.premium);
      localStorage.removeItem(STORAGE_KEYS.premiumUnlockedAt);
      localStorage.removeItem(STORAGE_KEYS.lastChargeCode);
      localStorage.removeItem(STORAGE_KEYS.premiumChargeCode);
      showToast("Premium reset on this device.", "info");
      modal.remove();
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// Customization Form (Premium Only)
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
      <div style="display: inline-block; background: linear-gradient(90deg, #ffd700, #ff8c00); color: #000; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 20px; margin-bottom: 10px;">
        💎 PREMIUM MODE
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
  document.getElementById('targetDeviceModel').value = state.customTargetModel || '';
  document.getElementById('targetCarrier').value = state.customTargetCarrier || '';
  document.getElementById('targetLocation').value = state.customTargetLocation || '';
  document.getElementById('targetBattery').value = state.customTargetBattery || '';

  // Event listeners
  document.getElementById('backToModeSelect').addEventListener('click', showModeSelection);

  document.getElementById('continueToScenarios').addEventListener('click', function () {
    state.customTargetName = document.getElementById('targetName').value || 'Target User';
    state.customTargetNumber = document.getElementById('targetPhoneNumber').value || '+1 (555) 123-4567';
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
  showToast("Showing 6 Phone Scenarios", "info");

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
      // Close the scenario selection and start the simulation after a short delay
      setTimeout(() => {
        startScenario();
      }, 500);
    });

    optionsContainer.appendChild(card);
  });

  els.stage.appendChild(optionsContainer);


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
    resetStage();
    renderScenarios(currentCategory);
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
    if (e.key === "Escape") exitToHome();
  });
  els.stage?.addEventListener("click", handleTapExit);
  els.stage?.addEventListener("touchstart", handleTouchExit);
  els.stage?.addEventListener("touchend", cancelTouchHold);

  enableWatermarkDrag();

  console.log("Controls bound successfully");
}

function openDisclaimer() {
  if (!state.theme) { showToast("Pick a theme first.", "warning"); return; }
  if (!state.scenario) { showToast("Pick a scenario.", "warning"); return; }
  els.disclaimerModal.classList.add("show");
}
function closeDisclaimer() { els.disclaimerModal.classList.remove("show"); }

function startScenario(force = false) {
  if (!force && !state.scenario) { showToast("Choose a scenario.", "warning"); return; }
  state.running = true;
  clearTimers();
  resetStage(true);
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

function updateCrumbs(showtime = false) {
  const themeName = themes.find((t) => t.id === state.theme)?.name || "Choose Theme";
  const sc = scenarios.find((s) => s.id === state.scenario)?.name || (showtime ? "Showtime" : "Choose Scenario");
  els.crumbs.textContent = `Home > ${themeName} > ${sc}`;
}

function resetStage(keepWatermark = false) {
  state.running = false;
  clearTimers();

  // Hide stage and show scenario grid
  els.stage.innerHTML = "";
  els.stage.classList.remove("active");
  els.scenarioGrid?.classList.remove("hidden");

  if (state.motion) addGlitch();
  if (keepWatermark) toggleWatermark(state.watermarkOn);

  // Restore nav panel on mobile
  document.querySelector('.nav-panel')?.classList.remove('mobile-hidden');
  document.querySelector('.category-sidebar')?.classList.remove('hidden');
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
    case "showtime": showtimeAction(phase); break;
    default: break;
  }
}

// ---------- Scenario Runners ----------

const scenarioRunners = {
  phone: runPhoneScenario,
  phone_basic: runPhoneScenario,
  phone_matrix: runPhoneMatrixScenario,
  phone_corporate: runPhoneCorporateScenario,
  phone_forensic: runPhoneForensicScenario,
  phone_prank: runPhonePrankScenario,
  phone_exfil: runPhoneExfilScenario,
  email: runEmailScenario,
  virus: runVirusScenario,
  ios: runIOSScenario,
  android: runAndroidScenario,
  win11: runWinScenario,
  tv: runTVScenario,
  emailHijack: runEmailHijackScenario,
  fbi: runFBIScenario,
};

function runPhonePrankScenario() {
  clearStage();
  const frame = buildPhonePrankFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneExfilScenario() {
  clearStage();
  const frame = buildPhoneExfilFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneScenario() {
  clearStage();
  const frame = buildPhoneFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneMatrixScenario() {
  clearStage();
  const frame = buildPhoneMatrixFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneCorporateScenario() {
  clearStage();
  const frame = buildPhoneCorporateFrame();
  els.stage.appendChild(frame);
  addGlitch();
}

function runPhoneForensicScenario() {
  clearStage();
  const frame = buildPhoneForensicFrame();
  els.stage.appendChild(frame);
  addGlitch();
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

function runEmailScenario() {
  clearStage();

  // Create full-screen email client container
  const container = document.createElement("div");
  container.className = "email-hacking-container";
  container.style.cssText = `
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: #0a0c10;
  `;

  // Start with bypass animation
  container.innerHTML = `
    <div class="email-bypass-overlay" style="
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 100;
      font-family: var(--mono);
    ">
      <div style="color: var(--accent); font-size: 14px; margin-bottom: 20px;">TARGET: victim@email.com</div>
      <div class="bypass-terminal" style="
        width: 90%;
        max-width: 500px;
        background: rgba(0,20,0,0.8);
        border: 1px solid var(--accent);
        border-radius: 8px;
        padding: 15px;
        font-size: 13px;
        color: #0f0;
        height: 200px;
        overflow: hidden;
      "></div>
      <div style="margin-top: 20px; color: var(--muted);">
        <span class="bypass-status">Initializing...</span>
      </div>
      <div class="progress" style="width: 90%; max-width: 500px; margin-top: 15px;">
        <div class="progress-bar"><div class="progress-fill bypass-progress"></div></div>
      </div>
    </div>
  `;

  els.stage.appendChild(container);
  addGlitch();

  // Run bypass animation
  runEmailBypassAnimation(container);
}

function runEmailBypassAnimation(container) {
  const terminal = container.querySelector(".bypass-terminal");
  const status = container.querySelector(".bypass-status");
  const progressBar = container.querySelector(".bypass-progress");
  const overlay = container.querySelector(".email-bypass-overlay");

  const bypassSteps = [
    { text: "> Connecting to mail server...", delay: 800 },
    { text: "> Server: mail.provider.com:993", delay: 600 },
    { text: "> Initiating SSL handshake...", delay: 700 },
    { text: "> Scanning for vulnerabilities...", delay: 1000 },
    { text: "> CVE-2024-1234 detected!", delay: 800, color: "#ff0" },
    { text: "> Exploiting authentication bypass...", delay: 1200 },
    { text: "> Bypassing 2FA token...", delay: 1000 },
    { text: "> Injecting session cookie...", delay: 900 },
    { text: "> Decrypting stored credentials...", delay: 1100 },
    { text: "> ██████████ PASSWORD FOUND ██████████", delay: 500, color: "#f00" },
    { text: "> Authenticating as victim@email.com...", delay: 800 },
    { text: "> ACCESS GRANTED", delay: 500, color: "#0f0" }
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
  container.innerHTML = `
    <div class="email-client" style="
      display: flex;
      flex: 1;
      overflow: hidden;
    ">
      <!-- Sidebar -->
      <div class="email-sidebar" style="
        width: 200px;
        background: rgba(255,255,255,0.03);
        border-right: 1px solid var(--border);
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      ">
        <div style="color: var(--danger); font-size: 12px; margin-bottom: 10px;">⚠️ SESSION HIJACKED</div>
        <div class="email-folder" style="padding: 8px 12px; background: var(--accent); color: #000; border-radius: 6px; font-weight: 600;">
          📥 Inbox (${fakeEmails.length})
        </div>
        <div class="email-folder" style="padding: 8px 12px; color: var(--muted);">📤 Sent</div>
        <div class="email-folder" style="padding: 8px 12px; color: var(--muted);">⭐ Starred</div>
        <div class="email-folder" style="padding: 8px 12px; color: var(--muted);">🗑️ Trash</div>
        <div style="margin-top: auto; font-size: 11px; color: var(--danger);">
          🔴 Recording session...
        </div>
      </div>
      
      <!-- Email List -->
      <div class="email-list-container" style="
        width: 300px;
        border-right: 1px solid var(--border);
        overflow-y: auto;
        background: rgba(0,0,0,0.3);
      ">
        <div style="padding: 12px; border-bottom: 1px solid var(--border); font-weight: 600; color: var(--text);">
          Inbox - victim@email.com
        </div>
        <div class="email-list"></div>
      </div>
      
      <!-- Email Preview -->
      <div class="email-preview" style="
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      ">
        <div class="email-preview-placeholder" style="
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
        ">
          Select an email to read
        </div>
      </div>
    </div>
  `;

  // Populate email list
  const emailList = container.querySelector(".email-list");
  fakeEmails.forEach(email => {
    const item = document.createElement("div");
    item.className = "mail-item";
    item.style.cssText = `
      padding: 12px;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      transition: background 0.2s;
    `;
    item.innerHTML = `
      <div style="font-weight: 600; color: var(--text); margin-bottom: 4px;">${email.subject}</div>
      <div style="font-size: 12px; color: var(--muted); margin-bottom: 4px;">${email.from}</div>
      <div style="font-size: 12px; color: var(--muted); opacity: 0.7;">${email.preview}</div>
      <div style="font-size: 11px; color: var(--muted); margin-top: 6px;">${email.time}</div>
    `;

    item.addEventListener("mouseenter", () => item.style.background = "rgba(255,255,255,0.05)");
    item.addEventListener("mouseleave", () => item.style.background = "transparent");
    item.addEventListener("click", () => showEmailPreview(container, email));

    emailList.appendChild(item);
  });

  showToast("📧 Inbox accessed (5 emails intercepted)", "success");
}

function showEmailPreview(container, email) {
  const preview = container.querySelector(".email-preview");
  preview.innerHTML = `
    <div style="border-bottom: 1px solid var(--border); padding-bottom: 15px; margin-bottom: 15px;">
      <div style="font-size: 18px; font-weight: 600; color: var(--text); margin-bottom: 10px;">${email.subject}</div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 14px; color: var(--text);">${email.from}</div>
          <div style="font-size: 12px; color: var(--muted);">to: victim@email.com</div>
        </div>
        <div style="font-size: 12px; color: var(--muted);">${email.time}</div>
      </div>
    </div>
    <div style="
      flex: 1;
      color: var(--text);
      line-height: 1.6;
      white-space: pre-wrap;
      font-size: 14px;
    ">${email.body}</div>
    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--border);">
      <button class="btn" style="margin-right: 8px;">📥 Export Email</button>
      <button class="btn">📎 Download Attachments</button>
    </div>
  `;

  // Add click handlers for buttons
  preview.querySelectorAll(".btn").forEach(btn => {
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
  const overlay = buildCrackOverlay("corner");
  els.stage.appendChild(overlay);
  overlay.addEventListener("click", cycleCrackPattern);
  addGlitch();
}

function runEmailHijackScenario() {
  clearStage();
  const card = buildEmailHijackUI();
  els.stage.appendChild(card);
  addGlitch();
}

function runFBIScenario() {
  clearStage();
  const lock = buildFBILock();
  els.stage.appendChild(lock);
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

  switch (phase.action) {
    case "text":
      // Re-use notification drop for status updates
      const notif = frame.querySelector(".notification-drop");
      if (notif) {
        notif.querySelector(".notif-content div:last-child").textContent = phase.payload;
        notif.classList.add("visible");
        setTimeout(() => notif.classList.remove("visible"), 3000);
      }
      break;
    case "stage":
      // Show major stage in hack overlay if visible, or toast
      const hackOverlay = frame.querySelector(".hack-overlay");
      if (hackOverlay.classList.contains("visible")) {
        hackOverlay.querySelector(".hack-title").textContent = phase.payload;
      } else {
        addToastBanner(phase.payload, "info");
      }
      break;
    case "counts":
      // Update file count in hack overlay
      const counter = frame.querySelector("#hackFileCount");
      if (counter) counter.textContent = phase.payload.photos + phase.payload.messages;
      break;
    case "complete":
      frame.querySelector(".hack-overlay").classList.add("visible");
      frame.querySelector(".hack-title").textContent = "DEVICE HACKED";
      showToast("Phone session complete (simulated).", "info");
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
  if (phase.action === "crack") {
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

// ---------- Builders ----------

function clearStage() {
  // Hide scenario grid and show stage
  els.scenarioGrid?.classList.add("hidden");
  els.stage.classList.add("active");
  els.stage.innerHTML = "";
  addGlitch();

  // Hide nav-panel on mobile during simulation
  document.querySelector('.nav-panel')?.classList.add('mobile-hidden');
  document.querySelector('.category-sidebar')?.classList.add('hidden');
}

function buildPhoneFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame";

  const carrier = state.customTargetCarrier || 'Demo LTE';

  frame.innerHTML = `
    <div class="mobile-notch"></div>
    <div class="mobile-screen">
      <!-- Status Bar -->
      <div class="status-bar">
        <span>09:41</span>
        <div style="display: flex; gap: 6px;">
          <span>${carrier}</span>
          <span>WiFi</span>
          <span>100%</span>
        </div>
      </div>

      <!-- App Grid -->
      <div class="app-grid">
        <div class="app-icon"><div class="app-shape app-photos">📷</div><span class="app-name">Photos</span></div>
        <div class="app-icon"><div class="app-shape app-mail">✉️</div><span class="app-name">Mail</span></div>
        <div class="app-icon"><div class="app-shape app-maps">📍</div><span class="app-name">Maps</span></div>
        <div class="app-icon"><div class="app-shape app-bank">🏦</div><span class="app-name">Bank</span></div>
        <div class="app-icon"><div class="app-shape app-camera">📸</div><span class="app-name">Camera</span></div>
        <div class="app-icon"><div class="app-shape app-settings">⚙️</div><span class="app-name">Settings</span></div>
      </div>

      <!-- Dock -->
      <div class="mobile-dock">
        <div class="app-icon"><div class="app-shape" style="background:#4cd964">📞</div></div>
        <div class="app-icon"><div class="app-shape" style="background:#007aff">🌐</div></div>
        <div class="app-icon"><div class="app-shape" style="background:#5ac8fa">💬</div></div>
        <div class="app-icon"><div class="app-shape" style="background:#ff2d55">🎵</div></div>
      </div>

      <!-- Overlays -->
      <div class="notification-drop">
        <div class="notif-icon">!</div>
        <div class="notif-content">
          <div>System Security</div>
          <div>Unusual activity detected.</div>
        </div>
      </div>

      <div class="hack-overlay">
        <div class="hack-spinner"></div>
        <div class="hack-title">SYSTEM COMPROMISED</div>
        <div style="font-family: monospace; color: white;">
          <div>Root access: GRANTED</div>
          <div>Files Exfiltrated: <span id="hackFileCount">0</span></div>
        </div>
      </div>
    </div>
  `;

  // Make apps interactive (fake)
  frame.querySelectorAll(".app-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      addToastBanner("App locked by administrator (simulated).", "warning");
    });
  });

  return frame;
}

function buildPhoneMatrixFrame() {
  const frame = document.createElement("div");
  frame.className = "mobile-frame";
  frame.innerHTML = `
    <div class="mobile-top">
      <span>MATRIX-HACK</span>
      <span class="phone-status">TARGETING...</span>
    </div>
    <div class="mobile-body">
      <div class="terminal" style="height: 140px; margin-bottom: 10px;" id="matrix-terminal">
        <div>> INITIATING SEQUENCE...</div>
        <div>> TARGET: ${state.customTargetNumber || '[CUSTOM PHONE NUMBER]'}</div>
        <div>> SCANNING NETWORK...</div>
      </div>
      <div class="progress" style="margin-bottom: 10px;">
        <div class="progress-bar"><div class="progress-fill"></div></div>
        <div class="progress-stage">Initializing...</div>
      </div>
      <div class="status-grid" style="margin-top:10px;">
        <div class="status-card"><div class="label">Signal</div><div class="value">TRACE-BYPASS</div></div>
        <div class="status-card"><div class="label">OS</div><div class="value">LOCKED</div></div>
        <div class="status-card"><div class="label">Security</div><div class="value">BYPASSED</div></div>
        <div class="status-card"><div class="label">Access</div><div class="value">GRANTED</div></div>
      </div>
      <div class="small-label" style="margin-top:10px;">EXPLOITS DEPLOYED</div>
      <div class="phone-counts">Data: Accessing... Files: Breaching...</div>
      <button class="mobile-btn" data-action="matrix-scan">DEEP SCAN</button>
      <button class="mobile-btn" data-action="matrix-access">GAIN ACCESS</button>
      <div class="small-label" style="margin-top:8px;">SIMULATION ONLY. NO REAL DATA ACCESSED.</div>
    </div>
  `;

  // Add matrix-style animation to the terminal
  const terminal = frame.querySelector("#matrix-terminal");
  let chars = "01";
  let lines = [];
  for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j < 40; j++) {
      line += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    lines.push(`<div class="matrix-line">${line}</div>`);
  }
  terminal.innerHTML += lines.join("");

  frame.querySelector(".mobile-body").addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const action = e.target.dataset.action;
    const stageTxt = frame.querySelector(".progress-stage");
    const fill = frame.querySelector(".progress-fill");

    if (action === "matrix-scan") {
      stageTxt.textContent = "DEEP SCANNING...";
      animateProgress(fill, 30);
      setTimeout(() => { stageTxt.textContent = "BYPASSING SECURITY..."; animateProgress(fill, 60); }, 1000 / state.speed);
      setTimeout(() => { stageTxt.textContent = "ACCESSING DATA..."; animateProgress(fill, 85); }, 2000 / state.speed);
      setTimeout(() => { stageTxt.textContent = "COMPLETE - TARGET COMPROMISED"; animateProgress(fill, 100); }, 3000 / state.speed);
    }

    if (action === "matrix-access") {
      addToastBanner("ACCESS GRANTED TO TARGET DEVICE!", "success");
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
        addToastBanner("Target located at: Fictional Address 123", "info");
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
  frame.className = "mobile-frame android-ui";
  frame.style.cssText = `
    border-color: #4ade80;
    box-shadow: 0 0 60px rgba(74, 222, 128, 0.3);
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
    <div style="background: linear-gradient(180deg, #0a0a0a 0%, #111827 100%); height: 100%; padding: 20px; overflow-y: auto;">
      
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
    <div style="
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

function buildCrackOverlay(style) {
  const overlay = document.createElement("div");
  overlay.className = "crack-overlay";
  setCrackPattern(overlay, style);
  const hint = document.createElement("div");
  hint.className = "overlay";
  hint.style.background = "transparent";
  hint.style.pointerEvents = "none";
  hint.innerHTML = `<div class="overlay-card"><div class="title">Tap to switch crack pattern</div><div class="subtitle">Quick exit always available.</div></div>`;
  overlay.appendChild(hint);
  return overlay;
}

function setCrackPattern(el, style) {
  const patterns = {
    corner: "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.4), transparent 35%), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 25%)",
    spider: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.35), transparent 38%), radial-gradient(circle at 55% 45%, rgba(255,255,255,0.25), transparent 32%)",
    center: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 48% 52%, rgba(255,255,255,0.2), transparent 28%)",
  };
  el.style.backgroundImage = patterns[style] || patterns.corner;
}

function cycleCrackPattern() {
  const overlay = els.stage.querySelector(".crack-overlay");
  if (!overlay) return;
  const seq = ["corner", "spider", "center"];
  const currentIdx = seq.findIndex((s) => overlay.style.backgroundImage.includes(s));
  const next = seq[(currentIdx + 1 + seq.length) % seq.length];
  setCrackPattern(overlay, next);
}

function buildEmailHijackUI() {
  const frame = document.createElement("div");
  frame.className = "email-hijack-frame";
  frame.style.cssText = `
    width: 100%;
    max-width: 900px;
    height: 600px;
    background: #1a1a2e;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    position: relative;
  `;

  const targetEmail = state.customTargetName ?
    `${state.customTargetName.toLowerCase().replace(/\s+/g, '.')}@gmail.com` :
    "target.user@gmail.com";

  frame.innerHTML = `
    <!-- Browser Bar -->
    <div style="
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
    <div style="display: flex; flex: 1; overflow: hidden;">
      
      <!-- Sidebar -->
      <div style="
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
        <div class="folder-item" style="padding: 10px; color: #ef4444; background: rgba(239, 68, 68, 0.1); border-radius: 8px; margin-bottom: 5px; display: flex; justify-content: space-between;">
          <span>📥 Inbox</span>
          <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 10px; font-size: 10px;">1,247</span>
        </div>
        <div class="folder-item" style="padding: 10px; color: #94a3b8;">⭐ Starred</div>
        <div class="folder-item" style="padding: 10px; color: #94a3b8;">📤 Sent</div>
        <div class="folder-item" style="padding: 10px; color: #94a3b8;">📝 Drafts <span style="color: #666;">(3)</span></div>
        <div class="folder-item" style="padding: 10px; color: #94a3b8;">🗑️ Trash</div>
        
        <div style="margin-top: 20px; padding: 15px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 10px;">
          <div style="color: #ef4444; font-size: 10px; font-weight: bold; margin-bottom: 5px;">🔴 LIVE ACCESS</div>
          <div style="color: #94a3b8; font-size: 11px;">${targetEmail}</div>
        </div>
      </div>

      <!-- Email List -->
      <div style="flex: 1; overflow-y: auto; background: #1a1a2e;">
        <!-- Header -->
        <div style="
          padding: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <div style="color: #fff; font-weight: bold;">📧 Extracted Emails</div>
          <div style="color: #4ade80; font-size: 12px;" id="emailExtractCount">Loading...</div>
        </div>

        <!-- Email Items -->
        <div class="email-list" style="padding: 10px;">
          <div class="email-item" style="
            padding: 15px;
            background: rgba(239, 68, 68, 0.05);
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 10px;
            margin-bottom: 10px;
            animation: pulse 2s infinite;
          ">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #fff; font-weight: bold;">🏦 Chase Bank</span>
              <span style="color: #666; font-size: 11px;">2 hours ago</span>
            </div>
            <div style="color: #ef4444; font-size: 13px; margin-bottom: 5px;">Your account statement is ready</div>
            <div style="color: #666; font-size: 11px;">Account ending in ****4521 - New statement available...</div>
          </div>

          <div class="email-item" style="
            padding: 15px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            margin-bottom: 10px;
          ">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #fff; font-weight: bold;">🔐 Google Security</span>
              <span style="color: #666; font-size: 11px;">5 hours ago</span>
            </div>
            <div style="color: #fbbf24; font-size: 13px; margin-bottom: 5px;">Security alert: New sign-in detected</div>
            <div style="color: #666; font-size: 11px;">We noticed a sign-in from a new device...</div>
          </div>

          <div class="email-item" style="
            padding: 15px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            margin-bottom: 10px;
          ">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #fff; font-weight: bold;">💳 PayPal</span>
              <span style="color: #666; font-size: 11px;">Yesterday</span>
            </div>
            <div style="color: #fff; font-size: 13px; margin-bottom: 5px;">You sent $250.00 to John Smith</div>
            <div style="color: #666; font-size: 11px;">Transaction ID: 7XK29401RT...</div>
          </div>

          <div class="email-item" style="
            padding: 15px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            margin-bottom: 10px;
          ">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #fff; font-weight: bold;">🛒 Amazon</span>
              <span style="color: #666; font-size: 11px;">2 days ago</span>
            </div>
            <div style="color: #fff; font-size: 13px; margin-bottom: 5px;">Your order has shipped!</div>
            <div style="color: #666; font-size: 11px;">Order #114-2847593-1847293 is on its way...</div>
          </div>
        </div>
      </div>

      <!-- Attack Panel -->
      <div style="
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

  // Animate email count
  let count = 0;
  const countInterval = setInterval(() => {
    count += Math.floor(Math.random() * 50) + 10;
    if (count > 1247) {
      count = 1247;
      clearInterval(countInterval);
    }
    extractCount.textContent = `${count} emails extracted`;
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
  wrap.className = "overlay";
  wrap.innerHTML = `
    <div class="overlay-card">
      <div class="title">SIMULATION -- DEVICE LOCK SCREEN (FAKE)</div>
      <div class="countdown" id="fbiCountdown">01:30</div>
      <button class="btn primary" id="unlockBtn">Unlock</button>
      <button class="btn ghost" id="backHomeBtn">Back to Home</button>
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
    btn.addEventListener("click", () => {
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

function openPasswordMeter() {
  const win = createWindow("Password Meter (Simulated)", { x: randomInt(80, 260), y: randomInt(80, 200), w: 240, h: 160 });
  const body = win.querySelector(".window-body");
  const bar = document.createElement("div");
  bar.className = "progress";
  bar.innerHTML = `<div class="progress-bar"><div class="progress-fill"></div></div><div class="progress-stage">Fiction only</div>`;
  body.appendChild(bar);
  els.stage.appendChild(win);
  animateProgress(bar.querySelector(".progress-fill"), randomInt(20, 95));
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
      tray.classList.toggle('mobile-visible');
      toggleBtn.textContent = tray.classList.contains('mobile-visible') ? '✕ Close' : '⚙️ Tools';
    });
  }

  // Exit pill handler - restore nav visibility on mobile
  const exitPill = document.getElementById('exitPill');
  const navPanel = document.querySelector('.nav-panel');
  if (exitPill && navPanel) {
    exitPill.addEventListener('click', () => {
      navPanel.classList.remove('mobile-hidden');
      if (tray) tray.classList.remove('mobile-visible');
      if (toggleBtn) toggleBtn.textContent = '⚙️ Tools';
    });
  }
}

// Initialize the application when the script loads
init();
setupMobileTrayToggle();
