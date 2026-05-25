const desktop = document.querySelector("#desktop");
const osChooser = document.querySelector("#osChooser");
const iconLayer = document.querySelector("#desktopIcons");
const windowLayer = document.querySelector("#windowLayer");
const taskButtons = document.querySelector("#taskButtons");
const startButton = document.querySelector("#startButton");
const startMenu = document.querySelector("#startMenu");
const allProgramsBtn = document.querySelector("#allProgramsBtn");
const programsFlyout = document.querySelector("#programsFlyout");
const contextMenu = document.querySelector("#contextMenu");
const notification = document.querySelector("#notification");
const clock = document.querySelector("#clock");

const apps = {
  computer: { title: "My Computer", icon: "computer", w: 660, h: 440, content: computerApp },
  documents: { title: "My Documents", icon: "documents", w: 610, h: 420, content: documentsApp },
  pictures: { title: "My Pictures", icon: "pictures", w: 610, h: 420, content: picturesApp },
  music: { title: "My Music", icon: "music", w: 560, h: 360, content: musicApp },
  recycle: { title: "Recycle Bin", icon: "recycle", w: 520, h: 360, content: recycleApp },
  ie: { title: "Internet Explorer - IE7", icon: "ie", w: 840, h: 560, content: internetExplorerApp },
  notepad: { title: "Untitled - Notepad", icon: "notepad", w: 600, h: 420, content: notepadApp },
  paint: { title: "untitled - Paint", icon: "paint", w: 720, h: 510, content: paintApp },
  calculator: { title: "Calculator", icon: "calculator", w: 260, h: 330, content: calculatorApp },
  cmd: { title: "Command Prompt", icon: "▣", w: 620, h: 360, content: commandPromptApp },
  control: { title: "Control Panel", icon: "control", w: 640, h: 420, content: controlPanelApp },
  search: { title: "Search Results", icon: "search", w: 600, h: 400, content: searchApp },
  run: { title: "Run", icon: "run", w: 380, h: 190, content: runApp },
  minesweeper: { title: "Minesweeper", icon: "minesweeper", w: 280, h: 360, content: minesweeperApp },
  media: { title: "Windows Media Player", icon: "media", w: 520, h: 390, content: mediaPlayerApp },
  explorer: { title: "Windows Explorer", icon: "folder", w: 680, h: 440, content: explorerApp },
};

const desktopIcons = [
  { id: "ie", label: "Internet Explorer", icon: "ie", x: 20, y: 18 },
  { id: "computer", label: "My Computer", icon: "computer", x: 20, y: 104 },
  { id: "documents", label: "My Documents", icon: "documents", x: 20, y: 190 },
  { id: "recycle", label: "Recycle Bin", icon: "recycle", x: 20, y: 276 },
  { id: "control", label: "Control Panel", icon: "control", x: 20, y: 362 },
  { id: "notepad", label: "Notepad", icon: "notepad", x: 112, y: 18 },
  { id: "paint", label: "Paint", icon: "paint", x: 112, y: 104 },
  { id: "cmd", label: "Command Prompt", icon: "▣", x: 112, y: 190 },
  { id: "minesweeper", label: "Minesweeper", icon: "minesweeper", x: 112, y: 276 },
];

const state = {
  windows: [],
  nextId: 1,
  z: 20,
  selectedIcon: null,
  paintColor: "#000000",
  allMinimized: false,
  os: localStorage.getItem("xp-sim-os") || "xp",
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const taskbarHeight = () => document.querySelector(".taskbar").getBoundingClientRect().height;
const desktopBounds = () => ({ width: innerWidth, height: innerHeight - taskbarHeight() });

function iconSvg(name, size = 40) {
  const common = `width="${size}" height="${size}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"`;
  const defs = `
    <defs>
      <linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ed0ff"/><stop offset="1" stop-color="#0862bd"/></linearGradient>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff8a8"/><stop offset="1" stop-color="#e0a320"/></linearGradient>
      <linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f9fbff"/><stop offset="1" stop-color="#aeb8c9"/></linearGradient>
    </defs>`;
  const icons = {
    ie: `${defs}<circle cx="24" cy="24" r="15" fill="url(#b)" stroke="#063d9b" stroke-width="2"/><path d="M9 27c8-12 23-18 33-12M7 31c9 7 26 5 34-5" fill="none" stroke="#f2d45a" stroke-width="4" stroke-linecap="round"/><text x="16" y="31" fill="#fff" font-family="Georgia" font-size="24" font-weight="700">e</text>`,
    computer: `${defs}<path d="M9 10h28a3 3 0 0 1 3 3v18H6V13a3 3 0 0 1 3-3Z" fill="url(#s)" stroke="#596a80"/><rect x="9" y="13" width="28" height="15" fill="#2a83df"/><path d="M18 32h12l2 5H16Z" fill="#8d99aa"/><rect x="13" y="37" width="24" height="4" rx="1" fill="#dfe6ee" stroke="#687789"/>`,
    documents: `${defs}<path d="M9 16h13l4-5h13v26a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3Z" fill="url(#g)" stroke="#9d6a00"/><path d="M7 20h34v17a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3Z" fill="#ffd85f"/>`,
    folder: `${defs}<path d="M8 16h13l4-5h15v28H8Z" fill="#ffc64a" stroke="#9d6a00"/><path d="M7 21h35v16a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3Z" fill="#ffe07a"/>`,
    recycle: `${defs}<path d="M16 18h19l-2 22H18Z" fill="#e9f7ff" stroke="#6293a2"/><path d="M19 14h13l3 4H16Z" fill="#bdeeff" stroke="#6293a2"/><path d="M18 27c5-8 14-8 18 0M20 27h-5v-5M35 27h5v-5M23 33c5 4 10 4 14-2" fill="none" stroke="#20a24a" stroke-width="2" stroke-linecap="round"/>`,
    control: `${defs}<circle cx="24" cy="24" r="15" fill="#cfd7e2" stroke="#657182" stroke-width="2"/><path d="M24 8v8M24 32v8M8 24h8M32 24h8M13 13l6 6M29 29l6 6M35 13l-6 6M19 29l-6 6" stroke="#51606f" stroke-width="4" stroke-linecap="round"/><circle cx="24" cy="24" r="7" fill="#6ca6df"/>`,
    notepad: `${defs}<rect x="12" y="7" width="26" height="34" rx="2" fill="#fff" stroke="#738196"/><path d="M12 13h26" stroke="#3d7dd6" stroke-width="3"/><path d="M17 20h15M17 25h16M17 30h12M17 35h14" stroke="#8c96a6" stroke-width="2"/><path d="M10 10h6M10 15h6M10 20h6" stroke="#d3262d" stroke-width="2"/>`,
    paint: `${defs}<path d="M10 30c-2-13 8-22 21-19 11 3 15 15 7 23-3 3-6 2-8 0-2-3-5-2-6 2-1 4-4 6-8 4-3-1-5-5-6-10Z" fill="#f7d58b" stroke="#9b6b18"/><circle cx="18" cy="19" r="3" fill="#e23c2f"/><circle cx="28" cy="17" r="3" fill="#2576d7"/><circle cx="35" cy="25" r="3" fill="#1ea852"/><path d="M27 33l11 9 3-3-10-11Z" fill="#7c4b24"/>`,
    calculator: `${defs}<rect x="12" y="7" width="25" height="35" rx="3" fill="#dce2ea" stroke="#596879"/><rect x="16" y="12" width="17" height="7" fill="#d7f7d4" stroke="#7c907a"/><g fill="#fff" stroke="#76808a"><rect x="16" y="23" width="5" height="5"/><rect x="23" y="23" width="5" height="5"/><rect x="30" y="23" width="5" height="5"/><rect x="16" y="31" width="5" height="5"/><rect x="23" y="31" width="5" height="5"/><rect x="30" y="31" width="5" height="5"/></g>`,
    minesweeper: `${defs}<rect x="9" y="9" width="30" height="30" fill="#c0c0c0" stroke="#777"/><g stroke="#fff"><path d="M9 18h30M9 28h30M18 9v30M28 9v30"/></g><circle cx="24" cy="24" r="5" fill="#111"/><path d="M24 14v20M14 24h20M17 17l14 14M31 17 17 31" stroke="#111" stroke-width="2"/>`,
    media: `${defs}<rect x="8" y="10" width="32" height="28" rx="4" fill="#102b65" stroke="#061538"/><circle cx="24" cy="24" r="11" fill="#2c8cff"/><path d="M21 17v14l11-7Z" fill="#fff"/>`,
    search: `${defs}<circle cx="21" cy="21" r="11" fill="#fff" stroke="#1267c6" stroke-width="4"/><path d="M29 29l10 10" stroke="#c68622" stroke-width="5" stroke-linecap="round"/>`,
    run: `${defs}<rect x="8" y="12" width="32" height="24" rx="3" fill="#eef3ff" stroke="#6e7f99"/><path d="M19 17v14l12-7Z" fill="#2383e7"/>`,
  };
  if (name === "▣" || name === "cmd") return `<span class="cmd-glyph">C:\\</span>`;
  return `<svg ${common}>${icons[name] || icons.folder}</svg>`;
}

function init() {
  applyOS(state.os);
  renderDesktopIcons();
  bindGlobalEvents();
  updateClock();
  setInterval(updateClock, 1000);
  setTimeout(() => document.querySelector("#bootScreen")?.classList.add("hide"), 900);
  if (!localStorage.getItem("xp-sim-os-picked")) {
    osChooser.hidden = false;
  } else {
    osChooser.hidden = true;
    launchDefaultDesktop();
  }
}

function renderDesktopIcons() {
  iconLayer.innerHTML = "";
  desktopIcons.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "desktop-icon";
    btn.dataset.app = item.id;
    btn.style.left = `${item.x}px`;
    btn.style.top = `${item.y}px`;
    btn.innerHTML = `<span class="xp-icon">${iconSvg(item.icon)}</span><span>${item.label}</span>`;
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      selectIcon(btn);
    });
    btn.addEventListener("dblclick", (event) => {
      event.stopPropagation();
      openApp(item.id);
    });
    btn.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      selectIcon(btn);
      showContextMenu(event.clientX, event.clientY, [
        ["Open", () => openApp(item.id)],
        ["Rename", () => toast("Rename is simulated.")],
        ["Delete", () => toast(`${item.label} moved nowhere. This is a simulator.`)],
        ["Properties", () => openProperties(item.label, item.icon)],
      ]);
    });
    makeIconDraggable(btn);
    iconLayer.appendChild(btn);
  });
}

function selectIcon(btn) {
  iconLayer.querySelectorAll(".desktop-icon").forEach((el) => el.classList.remove("selected"));
  btn.classList.add("selected");
  state.selectedIcon = btn;
}

function makeIconDraggable(icon) {
  icon.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    const startX = event.clientX;
    const startY = event.clientY;
    const rect = icon.getBoundingClientRect();
    let moved = false;
    icon.setPointerCapture(event.pointerId);
    const move = (e) => {
      if (Math.abs(e.clientX - startX) + Math.abs(e.clientY - startY) < 5 && !moved) return;
      moved = true;
      const b = desktopBounds();
      icon.style.left = `${clamp(rect.left + e.clientX - startX, 0, b.width - 84)}px`;
      icon.style.top = `${clamp(rect.top + e.clientY - startY, 0, b.height - 80)}px`;
    };
    const up = () => {
      icon.removeEventListener("pointermove", move);
      icon.removeEventListener("pointerup", up);
    };
    icon.addEventListener("pointermove", move);
    icon.addEventListener("pointerup", up);
  });
}

function bindGlobalEvents() {
  osChooser.querySelectorAll("[data-os]").forEach((button) => {
    button.addEventListener("click", () => {
      const os = button.dataset.os;
      applyOS(os);
      localStorage.setItem("xp-sim-os", os);
      localStorage.setItem("xp-sim-os-picked", "true");
      osChooser.hidden = true;
      if (!state.windows.length) launchDefaultDesktop();
    });
  });

  desktop.addEventListener("click", (event) => {
    if (!event.target.closest(".start-menu") && !event.target.closest(".start-button")) closeStartMenu();
    if (!event.target.closest(".desktop-icon")) iconLayer.querySelectorAll(".desktop-icon").forEach((el) => el.classList.remove("selected"));
    hideContextMenu();
  });

  desktop.addEventListener("contextmenu", (event) => {
    if (event.target.closest(".xp-window, .desktop-icon, .taskbar, .start-menu")) return;
    event.preventDefault();
    showContextMenu(event.clientX, event.clientY, [
      ["Arrange Icons By", arrangeIcons],
      ["Refresh", () => toast("Desktop refreshed.")],
      ["New Folder", () => toast("New Folder created (simulated).")],
      ["Properties", () => openApp("control")],
    ]);
  });

  startButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleStartMenu();
  });

  document.querySelectorAll("[data-app]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = button.dataset.app;
      if (!id) return;
      event.stopPropagation();
      closeStartMenu();
      openApp(id);
    });
  });

  allProgramsBtn.addEventListener("mouseenter", () => programsFlyout.hidden = false);
  allProgramsBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    programsFlyout.hidden = !programsFlyout.hidden;
  });

  document.querySelector("[data-action='show-desktop']").addEventListener("click", showDesktop);
  document.querySelector("#closeNotification").addEventListener("click", () => notification.hidden = true);
  document.querySelector("#osSwitchBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    closeStartMenu();
    osChooser.hidden = false;
  });
  document.querySelector("#logOffBtn").addEventListener("click", () => toast("Logging off is simulated."));
  document.querySelector("#turnOffBtn").addEventListener("click", () => openShutdownDialog());
  document.querySelector("#soundBtn").addEventListener("click", () => toast("Volume: ding!"));
  document.querySelector("#networkBtn").addEventListener("click", () => toast("Local Area Connection connected."));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeStartMenu();
      hideContextMenu();
    }
    if ((event.ctrlKey && event.key.toLowerCase() === "escape") || event.key === "Meta") {
      event.preventDefault();
      toggleStartMenu();
    }
  });

  addEventListener("resize", fitWindowsToScreen);
}

function launchDefaultDesktop() {
  setTimeout(() => notification.hidden = false, 250);
  openApp("ie", { x: state.os === "win11" ? 270 : 230, y: 48 });
  openApp("media", { x: 26, y: Math.max(260, innerHeight - 250) });
}

function applyOS(os) {
  state.os = os === "win11" ? "win11" : "xp";
  desktop.classList.toggle("win11", state.os === "win11");
  desktop.classList.toggle("xp-mode", state.os !== "win11");
  osChooser?.querySelectorAll(".os-option").forEach((btn) => btn.classList.toggle("active", btn.dataset.os === state.os));
  document.title = state.os === "win11" ? "Windows 11 Simulator" : "Windows XP Simulator";
  fitWindowsToScreen();
}

function openApp(appId, preferred = {}) {
  const app = apps[appId];
  if (!app) return;
  const existing = state.windows.find((win) => win.appId === appId && !["notepad", "cmd"].includes(appId));
  if (existing) {
    restoreWindow(existing.id);
    focusWindow(existing.id);
    return;
  }

  const b = desktopBounds();
  const cascade = state.windows.length % 6;
  const w = Math.min(app.w, b.width - 24);
  const h = Math.min(app.h, b.height - 24);
  const win = {
    id: `win-${state.nextId++}`,
    appId,
    title: app.title,
    icon: app.icon,
    x: preferred.x ?? clamp(170 + cascade * 28, 8, Math.max(8, b.width - w - 10)),
    y: preferred.y ?? clamp(44 + cascade * 28, 8, Math.max(8, b.height - h - 10)),
    w,
    h,
    restore: null,
    minimized: false,
    maximized: false,
    z: ++state.z,
  };
  state.windows.push(win);

  const el = document.createElement("section");
  el.className = "xp-window";
  el.id = win.id;
  el.dataset.id = win.id;
  el.innerHTML = `
    <div class="xp-titlebar">
      <span class="window-icon">${iconSvg(win.icon, 16)}</span>
      <span class="title-text">${win.title}</span>
      <div class="window-controls">
        <button class="win-control min" title="Minimize">_</button>
        <button class="win-control max" title="Maximize">□</button>
        <button class="win-control close" title="Close">×</button>
      </div>
    </div>
    <div class="xp-menubar">
      <button>File</button><button>Edit</button><button>View</button><button>Favorites</button><button>Tools</button><button>Help</button>
    </div>
    <div class="xp-body"></div>
    <div class="resize-handle" title="Resize"></div>
  `;
  windowLayer.appendChild(el);
  app.content(el.querySelector(".xp-body"), win);
  bindWindow(el, win);
  applyWindow(win);
  renderTaskbar();
  focusWindow(win.id);
}

function bindWindow(el, win) {
  el.addEventListener("pointerdown", () => focusWindow(win.id));
  el.querySelector(".win-control.min").addEventListener("click", (event) => {
    event.stopPropagation();
    minimizeWindow(win.id);
  });
  el.querySelector(".win-control.max").addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMaximize(win.id);
  });
  el.querySelector(".win-control.close").addEventListener("click", (event) => {
    event.stopPropagation();
    closeWindow(win.id);
  });
  el.querySelector(".xp-titlebar").addEventListener("dblclick", (event) => {
    if (event.target.closest(".window-controls")) return;
    toggleMaximize(win.id);
  });
  dragWindow(el, win);
  resizeWindow(el, win);
}

function dragWindow(el, win) {
  const bar = el.querySelector(".xp-titlebar");
  bar.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest(".window-controls")) return;
    focusWindow(win.id);
    if (win.maximized) return;
    event.preventDefault();
    const startX = event.clientX;
    const startY = event.clientY;
    const ox = win.x;
    const oy = win.y;
    bar.setPointerCapture(event.pointerId);
    const move = (e) => {
      const b = desktopBounds();
      win.x = clamp(ox + e.clientX - startX, -win.w + 80, b.width - 42);
      win.y = clamp(oy + e.clientY - startY, 0, b.height - 28);
      applyWindow(win);
    };
    const up = () => {
      bar.removeEventListener("pointermove", move);
      bar.removeEventListener("pointerup", up);
    };
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
  });
}

function resizeWindow(el, win) {
  const handle = el.querySelector(".resize-handle");
  handle.addEventListener("pointerdown", (event) => {
    if (win.maximized) return;
    event.preventDefault();
    focusWindow(win.id);
    const startX = event.clientX;
    const startY = event.clientY;
    const ow = win.w;
    const oh = win.h;
    handle.setPointerCapture(event.pointerId);
    const move = (e) => {
      const b = desktopBounds();
      win.w = clamp(ow + e.clientX - startX, 260, b.width - win.x);
      win.h = clamp(oh + e.clientY - startY, 170, b.height - win.y);
      applyWindow(win);
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
  });
}

function applyWindow(win) {
  const el = document.getElementById(win.id);
  if (!el) return;
  el.style.left = `${win.x}px`;
  el.style.top = `${win.y}px`;
  el.style.width = `${win.w}px`;
  el.style.height = `${win.h}px`;
  el.style.zIndex = win.z;
  el.hidden = win.minimized;
  el.classList.toggle("maximized", win.maximized);
}

function focusWindow(id) {
  const win = state.windows.find((item) => item.id === id);
  if (!win) return;
  win.minimized = false;
  win.z = ++state.z;
  state.windows.forEach((item) => {
    const el = document.getElementById(item.id);
    if (!el) return;
    el.classList.toggle("inactive", item.id !== id);
  });
  applyWindow(win);
  renderTaskbar(id);
}

function minimizeWindow(id) {
  const win = state.windows.find((item) => item.id === id);
  if (!win) return;
  win.minimized = true;
  applyWindow(win);
  renderTaskbar();
}

function restoreWindow(id) {
  const win = state.windows.find((item) => item.id === id);
  if (!win) return;
  win.minimized = false;
  applyWindow(win);
}

function toggleMaximize(id) {
  const win = state.windows.find((item) => item.id === id);
  if (!win) return;
  if (!win.maximized) {
    win.restore = { x: win.x, y: win.y, w: win.w, h: win.h };
    const b = desktopBounds();
    win.x = 0;
    win.y = 0;
    win.w = b.width;
    win.h = b.height;
    win.maximized = true;
  } else {
    Object.assign(win, win.restore || {});
    win.maximized = false;
  }
  applyWindow(win);
  focusWindow(id);
}

function closeWindow(id) {
  const index = state.windows.findIndex((win) => win.id === id);
  if (index < 0) return;
  document.getElementById(id)?.remove();
  state.windows.splice(index, 1);
  renderTaskbar();
}

function renderTaskbar(activeId) {
  const topWin = [...state.windows].filter((w) => !w.minimized).sort((a, b) => b.z - a.z)[0];
  const active = activeId || topWin?.id;
  taskButtons.innerHTML = "";
  state.windows.forEach((win) => {
    const btn = document.createElement("button");
    btn.className = "task-button";
    btn.classList.toggle("active", win.id === active && !win.minimized);
    btn.innerHTML = `<span class="task-ico">${iconSvg(win.icon, 16)}</span><span>${win.title}</span>`;
    btn.addEventListener("click", () => {
      if (!win.minimized && win.id === active) minimizeWindow(win.id);
      else {
        restoreWindow(win.id);
        focusWindow(win.id);
      }
    });
    taskButtons.appendChild(btn);
  });
}

function fitWindowsToScreen() {
  const b = desktopBounds();
  state.windows.forEach((win) => {
    if (win.maximized) {
      win.x = 0; win.y = 0; win.w = b.width; win.h = b.height;
    } else {
      win.w = Math.min(win.w, b.width - 12);
      win.h = Math.min(win.h, b.height - 12);
      win.x = clamp(win.x, -win.w + 80, b.width - 42);
      win.y = clamp(win.y, 0, b.height - 28);
    }
    applyWindow(win);
  });
}

function showDesktop() {
  const anyVisible = state.windows.some((win) => !win.minimized);
  state.windows.forEach((win) => {
    win.minimized = anyVisible;
    applyWindow(win);
  });
  renderTaskbar();
}

function toggleStartMenu() {
  startMenu.hidden = !startMenu.hidden;
  startButton.classList.toggle("active", !startMenu.hidden);
  startButton.setAttribute("aria-expanded", String(!startMenu.hidden));
  programsFlyout.hidden = true;
}

function closeStartMenu() {
  startMenu.hidden = true;
  startButton.classList.remove("active");
  startButton.setAttribute("aria-expanded", "false");
  programsFlyout.hidden = true;
}

function showContextMenu(x, y, items) {
  contextMenu.innerHTML = "";
  items.forEach(([label, action]) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      hideContextMenu();
      action();
    });
    contextMenu.appendChild(button);
  });
  contextMenu.hidden = false;
  contextMenu.style.left = `${Math.min(x, innerWidth - 190)}px`;
  contextMenu.style.top = `${Math.min(y, innerHeight - 160)}px`;
}

function hideContextMenu() {
  contextMenu.hidden = true;
}

function arrangeIcons() {
  iconLayer.querySelectorAll(".desktop-icon").forEach((icon, i) => {
    const col = Math.floor(i / 6);
    const row = i % 6;
    icon.style.left = `${20 + col * 92}px`;
    icon.style.top = `${18 + row * 86}px`;
  });
  toast("Icons arranged.");
}

function toast(text) {
  notification.hidden = false;
  notification.querySelector("strong").textContent = "Windows XP Simulator";
  notification.querySelector("span").textContent = text;
}

function updateClock() {
  const d = new Date();
  clock.dateTime = d.toISOString();
  clock.textContent = d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function openProperties(name, icon) {
  openDialog(`${name} Properties`, icon, `
    <h2>${iconSvg(icon, 28)} ${name}</h2>
    <p>Type: System object</p>
    <p>Location: Desktop</p>
    <p>Status: Fully simulated. No real files are changed.</p>
  `);
}

function openShutdownDialog() {
  openDialog("Turn Off Computer", "🔴", `
    <h2>Turn off computer?</h2>
    <p>This simulator will stay open, but the screen can pretend to shut down.</p>
    <div class="dialog-row">
      <button class="xp-button" data-dialog-action="standby">Stand By</button>
      <button class="xp-button" data-dialog-action="turnoff">Turn Off</button>
      <button class="xp-button" data-dialog-action="restart">Restart</button>
    </div>
  `, (body, win) => {
    body.querySelectorAll("button").forEach((btn) => btn.addEventListener("click", () => {
      toast(`${btn.textContent} requested. Still safely simulated.`);
      closeWindow(win.id);
    }));
  });
}

function openDialog(title, icon, html, after) {
  const id = `dialog-${Date.now()}`;
  apps[id] = { title, icon, w: 420, h: 260, content: (body, win) => {
    body.className += " dialog";
    body.innerHTML = html;
    after?.(body, win);
  } };
  openApp(id);
  delete apps[id];
}

function explorerChrome(body, title, path, main, side = defaultSide()) {
  body.innerHTML = `
    <div class="explorer-shell">
      <div class="toolbar"><button>Back</button><button>Forward</button><button>Up</button><button>Search</button><button>Folders</button><button>Views</button></div>
      <div class="addressbar"><span>Address</span><input value="${path}"><button>Go</button></div>
      <div class="explorer-content"><aside class="explorer-side">${side}</aside><section class="main-pane">${main}</section></div>
    </div>
  `;
  body.querySelectorAll(".toolbar button, .addressbar button").forEach((button) => button.addEventListener("click", () => toast(`${button.textContent} clicked in ${title}.`)));
}

function defaultSide() {
  return `<div class="task-panel"><h3>System Tasks</h3><p>View system information</p><p>Add or remove programs</p><p>Change a setting</p></div>`;
}

function fileGrid(items) {
  return `<div class="file-grid">${items.map((item) => `<button class="file-tile" data-open="${item.app || ""}"><span class="big">${iconSvg(item.icon, 34)}</span><span>${item.name}</span></button>`).join("")}</div>`;
}

function bindFileTiles(body) {
  body.querySelectorAll(".file-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      body.querySelectorAll(".file-tile").forEach((el) => el.classList.remove("selected"));
      tile.classList.add("selected");
    });
    tile.addEventListener("dblclick", () => {
      const id = tile.dataset.open;
      if (id) openApp(id);
      else toast(`${tile.textContent.trim()} opened.`);
    });
  });
}

function computerApp(body) {
  explorerChrome(body, "My Computer", "My Computer", fileGrid([
    { icon: "computer", name: "Local Disk (C:)" },
    { icon: "media", name: "DVD Drive (D:)" },
    { icon: "folder", name: "Shared Documents", app: "documents" },
    { icon: "control", name: "Control Panel", app: "control" },
  ]));
  bindFileTiles(body);
}

function documentsApp(body) {
  explorerChrome(body, "My Documents", "C:\\Documents and Settings\\Sim User\\My Documents", fileGrid([
    { icon: "notepad", name: "prank-notes.txt", app: "notepad" },
    { icon: "pictures", name: "My Pictures", app: "pictures" },
    { icon: "music", name: "My Music", app: "music" },
    { icon: "calculator", name: "budget.xls" },
    { icon: "notepad", name: "readme.doc" },
  ]));
  bindFileTiles(body);
}

function picturesApp(body) {
  explorerChrome(body, "My Pictures", "My Pictures", fileGrid([
    { icon: "pictures", name: "Bliss.jpg" },
    { icon: "pictures", name: "Vacation.png" },
    { icon: "paint", name: "Paint Sample", app: "paint" },
  ]), `<div class="task-panel"><h3>Picture Tasks</h3><p>View as a slide show</p><p>Order prints online</p><p>Print this picture</p></div>`);
  bindFileTiles(body);
}

function musicApp(body) {
  explorerChrome(body, "My Music", "My Music", fileGrid([
    { icon: "music", name: "XP startup.wav", app: "media" },
    { icon: "music", name: "sample track.mp3", app: "media" },
    { icon: "folder", name: "Playlists" },
  ]));
  bindFileTiles(body);
}

function recycleApp(body) {
  explorerChrome(body, "Recycle Bin", "Recycle Bin", fileGrid([
    { icon: "notepad", name: "old-shortcut.lnk" },
    { icon: "pictures", name: "deleted-wallpaper.bmp" },
  ]), `<div class="task-panel"><h3>Recycle Bin Tasks</h3><p>Empty the Recycle Bin</p><p>Restore all items</p></div>`);
  bindFileTiles(body);
}

function explorerApp(body) {
  explorerChrome(body, "Windows Explorer", "C:\\", fileGrid([
    { icon: "folder", name: "Program Files" },
    { icon: "folder", name: "WINDOWS" },
    { icon: "folder", name: "Documents and Settings" },
    { icon: "control", name: "System32" },
  ]));
  bindFileTiles(body);
}

function internetExplorerApp(body) {
  body.innerHTML = `
    <div class="explorer-shell">
      <div class="toolbar"><button>Back</button><button>Forward</button><button>Stop</button><button>Refresh</button><button>Home</button><button>Search</button><button>Favorites</button><button>Print</button></div>
      <div class="addressbar"><span>Address</span><input id="ieAddress" value="google.com"><button id="ieGo">Go</button></div>
      <div class="ie-page" id="iePage"></div>
    </div>
  `;
  const page = body.querySelector("#iePage");
  const address = body.querySelector("#ieAddress");
  const render = () => {
    const q = address.value.toLowerCase();
    if (q.includes("prank") || q.includes("xp")) {
      page.innerHTML = `<h1>Online Windows XP Simulator</h1><p>This browser desktop is fully simulated. Open windows, use the Start menu, play with apps, and close anything.</p><button class="xp-button" data-open="minesweeper">Open Minesweeper</button> <button class="xp-button" data-open="paint">Open Paint</button>`;
    } else {
      page.innerHTML = `<div class="google"><div class="google-logo"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><input><div><button class="xp-button">Google Search</button> <button class="xp-button">I'm Feeling Lucky</button></div><p><a>Advertising Programmes</a> · <a>Business Solutions</a> · <a>About Google</a></p><p>©2010 - Privacy</p></div>`;
    }
    page.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => openApp(button.dataset.open)));
  };
  body.querySelector("#ieGo").addEventListener("click", render);
  address.addEventListener("keydown", (e) => { if (e.key === "Enter") render(); });
  body.querySelectorAll(".toolbar button").forEach((button) => button.addEventListener("click", () => toast(`${button.textContent} clicked.`)));
  render();
}

function notepadApp(body) {
  body.innerHTML = `<textarea class="notepad-area" spellcheck="false">Welcome to Windows XP Simulator.

Try the Start menu, drag windows, minimize them, maximize them, and open every desktop icon.

This is a browser prank desktop. Nothing real is changed.</textarea>`;
}

function paintApp(body) {
  body.innerHTML = `
    <div class="paint-shell">
      <div class="paint-tools">
        <button data-tool="pencil" class="active" title="Pencil">✎</button>
        <button data-tool="eraser" title="Eraser">⌫</button>
        <button data-tool="clear" title="Clear">Clear</button>
        ${["#000000", "#d71920", "#f7d116", "#1fa04a", "#1557c8", "#ffffff"].map((c) => `<button class="color-swatch" data-color="${c}" style="background:${c}"></button>`).join("")}
      </div>
      <div class="paint-stage"><canvas id="paintCanvas" width="720" height="420"></canvas></div>
    </div>
  `;
  const canvas = body.querySelector("#paintCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let drawing = false;
  let tool = "pencil";
  const pos = (e) => {
    const r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * canvas.width / r.width, y: (e.clientY - r.top) * canvas.height / r.height };
  };
  canvas.addEventListener("pointerdown", (e) => { drawing = true; canvas.setPointerCapture(e.pointerId); const p = pos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); });
  canvas.addEventListener("pointermove", (e) => {
    if (!drawing) return;
    const p = pos(e);
    ctx.lineWidth = tool === "eraser" ? 18 : 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = tool === "eraser" ? "#fff" : state.paintColor;
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  });
  canvas.addEventListener("pointerup", () => drawing = false);
  body.querySelectorAll("[data-tool]").forEach((btn) => btn.addEventListener("click", () => {
    if (btn.dataset.tool === "clear") {
      ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, canvas.width, canvas.height); return;
    }
    tool = btn.dataset.tool;
    body.querySelectorAll("[data-tool]").forEach((el) => el.classList.remove("active"));
    btn.classList.add("active");
  }));
  body.querySelectorAll("[data-color]").forEach((btn) => btn.addEventListener("click", () => state.paintColor = btn.dataset.color));
}

function calculatorApp(body) {
  body.innerHTML = `<div class="calc"><div id="calcDisplay" class="calc-display">0</div><div class="calc-grid">${["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+","C"].map((n) => `<button>${n}</button>`).join("")}</div></div>`;
  const display = body.querySelector("#calcDisplay");
  let expr = "";
  body.querySelectorAll(".calc-grid button").forEach((btn) => btn.addEventListener("click", () => {
    const v = btn.textContent;
    if (v === "C") { expr = ""; display.textContent = "0"; return; }
    if (v === "=") {
      try {
        const result = Function(`"use strict"; return (${expr || "0"})`)();
        expr = String(Number.isFinite(result) ? result : 0);
        display.textContent = expr;
      } catch {
        display.textContent = "Error";
        expr = "";
      }
      return;
    }
    expr += v;
    display.textContent = expr;
  }));
}

function commandPromptApp(body) {
  body.innerHTML = `<div class="cmd-body" id="cmdBody"><div>Microsoft Windows XP [Version 5.1.2600]</div><div>(C) Copyright 1985-2001 Microsoft Corp.</div><br></div>`;
  const shell = body.querySelector("#cmdBody");
  const writePrompt = () => {
    const row = document.createElement("div");
    row.className = "cmd-line";
    row.innerHTML = `<span>C:\\Documents and Settings\\Sim User&gt;</span><input autocomplete="off">`;
    shell.appendChild(row);
    const input = row.querySelector("input");
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const cmd = input.value.trim().toLowerCase();
      input.disabled = true;
      runCmd(cmd);
      writePrompt();
      shell.scrollTop = shell.scrollHeight;
    });
  };
  const line = (text = "") => shell.insertAdjacentHTML("beforeend", `<div>${text}</div>`);
  const runCmd = (cmd) => {
    if (cmd === "cls") { shell.innerHTML = ""; return; }
    if (cmd === "dir") { line(" Directory of C:\\Documents and Settings\\Sim User"); line("05/24/2026  10:42 AM    &lt;DIR&gt; Desktop"); line("05/24/2026  10:42 AM    &lt;DIR&gt; My Documents"); line("               0 File(s)              0 bytes"); return; }
    if (cmd === "help") { line("Supported commands: help, dir, cls, ver, prank, exit"); return; }
    if (cmd === "ver") { line("Microsoft Windows XP [Version 5.1.2600]"); return; }
    if (cmd === "prank") { line("Prank mode: armed. Still no real system access."); return; }
    if (cmd === "exit") { const win = shell.closest(".xp-window"); closeWindow(win.id); return; }
    if (cmd) line(`'${cmd}' is not recognized as an internal or external command.`);
  };
  writePrompt();
}

function controlPanelApp(body) {
  body.innerHTML = `<div class="control-grid">${[
    ["🖥️", "Display"], ["🌐", "Network Connections"], ["🔊", "Sounds and Audio Devices"], ["🖱️", "Mouse"], ["⌨️", "Keyboard"], ["📅", "Date and Time"], ["👥", "User Accounts"], ["🛡️", "Security Center"]
  ].map(([icon, label]) => `<button class="control-item"><span style="font-size:28px">${icon}</span><span>${label}</span></button>`).join("")}</div>`;
  body.querySelectorAll(".control-item").forEach((btn) => btn.addEventListener("click", () => openDialog(`${btn.textContent.trim()} Properties`, "⚙️", `<h2>${btn.textContent.trim()}</h2><p>This control panel item is interactive theater.</p><button class="xp-button">OK</button>`)));
}

function searchApp(body) {
  body.innerHTML = `<div class="dialog"><h2>Search Companion</h2><p>What do you want to search for?</p><input id="searchBox" style="width:100%;height:26px" placeholder="Type a file name"><div class="dialog-row"><button class="xp-button" id="searchBtn">Search</button></div><div id="searchResults" style="margin-top:16px"></div></div>`;
  body.querySelector("#searchBtn").addEventListener("click", () => {
    const q = body.querySelector("#searchBox").value || "*";
    body.querySelector("#searchResults").innerHTML = `<b>Results for "${q}"</b><p>prank-notes.txt</p><p>Bliss.jpg</p><p>startup.wav</p>`;
  });
}

function runApp(body) {
  body.innerHTML = `<div class="dialog"><h2>Run</h2><p>Type the name of a program, folder, document, or Internet resource.</p><input id="runInput" style="width:100%;height:26px" value="notepad"><div class="dialog-row"><button class="xp-button" id="runOk">OK</button><button class="xp-button" id="runCancel">Cancel</button></div></div>`;
  body.querySelector("#runOk").addEventListener("click", () => {
    const v = body.querySelector("#runInput").value.toLowerCase();
    const map = { notepad: "notepad", calc: "calculator", calculator: "calculator", cmd: "cmd", mspaint: "paint", iexplore: "ie" };
    openApp(map[v] || "explorer");
  });
  body.querySelector("#runCancel").addEventListener("click", () => closeWindow(body.closest(".xp-window").id));
}

function minesweeperApp(body) {
  const mines = new Set([3, 10, 14, 27, 31, 49, 59, 72, 76, 80]);
  body.innerHTML = `<div class="mines"><div class="mine-head"><b>010</b><button class="mine-face">🙂</button><b id="mineTimer">000</b></div><div class="mine-grid">${Array.from({length:81}, (_, i) => `<button class="mine-cell" data-i="${i}"></button>`).join("")}</div></div>`;
  let time = 0;
  const timer = setInterval(() => {
    if (!body.isConnected) return clearInterval(timer);
    body.querySelector("#mineTimer").textContent = String(++time).padStart(3, "0");
  }, 1000);
  body.querySelectorAll(".mine-cell").forEach((cell) => cell.addEventListener("click", () => {
    const i = Number(cell.dataset.i);
    cell.classList.add("open");
    if (mines.has(i)) {
      cell.textContent = "💣";
      body.querySelector(".mine-face").textContent = "😵";
      toast("Boom. Minesweeper is simulated.");
    } else {
      const count = [...mines].filter((m) => Math.abs((m % 9) - (i % 9)) <= 1 && Math.abs(Math.floor(m / 9) - Math.floor(i / 9)) <= 1).length;
      cell.textContent = count || "";
    }
  }));
  body.querySelector(".mine-face").addEventListener("click", () => openApp("minesweeper"));
}

function mediaPlayerApp(body) {
  body.innerHTML = `<div class="media-player"><h2>Windows Media Player</h2><div class="visualizer">${Array.from({length:24}, () => "<i></i>").join("")}</div><p>Now playing: XP Startup Remix</p><button class="xp-button" id="playBtn">Pause</button> <button class="xp-button">Stop</button> <button class="xp-button">Next</button></div>`;
  const visualizer = body.querySelector(".visualizer");
  body.querySelector("#playBtn").addEventListener("click", (e) => {
    visualizer.style.opacity = visualizer.style.opacity === "0.25" ? "1" : "0.25";
    e.target.textContent = e.target.textContent === "Pause" ? "Play" : "Pause";
  });
}

init();
