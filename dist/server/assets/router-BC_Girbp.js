import { createRootRoute, HeadContent, Scripts, createFileRoute, createRouter } from "@tanstack/react-router";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NOC CRQ Analytics | Telecom Command Center" },
      { name: "description", content: "Enterprise Telecom Network Operations Center – Change Request Intelligence Dashboard" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const Route = createFileRoute("/")({ component: Home });
const CRQs = [
  { id: "CRQ-001", act: "Link Upgrade", tech: "MPLS", domain: "IP Core", circle: "GJ", impact: "SA", window: "03:00–05:00", host: "RTR-BLR01", sched: "Mar 26, 2026", stage: "CAB Approval", sla: 85, slaCls: "s-re", urgency: "#dc2626", tracker: [{ l: "L1 — Manager", sub: "Approved: Mar 24, 2026 09:00", s: "done" }, { l: "L2 — CAB", sub: "Current · Waiting for quorum", s: "act" }, { l: "L4 — Implementation", sub: "Upcoming", s: "pend" }] },
  { id: "CMC-031", act: "GPON Config", tech: "GPON", domain: "PVoIcc", circle: "MH", impact: "NSA", window: "02:00–04:00", host: "OLT-MUM01", sched: "Mar 26, 2026", stage: "Stakeholder", sla: 45, slaCls: "s-am", urgency: "#d97706", tracker: [{ l: "L1 — Manager", sub: "Approved: Mar 23, 2026", s: "done" }, { l: "L2 — Stakeholder", sub: "Current · 3/5 approved", s: "act" }, { l: "L2 — CAB", sub: "Upcoming", s: "pend" }, { l: "L4 — Implementation", sub: "Upcoming", s: "pend" }] },
  { id: "CMP-023", act: "BGP Change", tech: "BGP", domain: "IP Core", circle: "KA", impact: "SA", window: "01:00–03:00", host: "RTR-BNG02", sched: "Mar 26, 2026", stage: "MOP Validation", sla: 85, slaCls: "s-re", urgency: "#dc2626", tracker: [{ l: "L1 — Manager", sub: "Approved", s: "done" }, { l: "L3 — MOP Validation", sub: "Current · Pending MOP review", s: "act" }, { l: "L2 — CAB", sub: "Upcoming", s: "pend" }] },
  { id: "CMC-003", act: "BLJ Chang", tech: "BGP", domain: "Packet", circle: "DL", impact: "NSA", window: "04:00–06:00", host: "RTR-DEL03", sched: "Mar 26, 2026", stage: "Authorization", sla: 72, slaCls: "s-gr", urgency: "#2563eb", tracker: [{ l: "L1 — Authorization", sub: "Current · Pending NOC Manager", s: "act" }, { l: "L2 — Stakeholder", sub: "Upcoming", s: "pend" }, { l: "L2 — CAB", sub: "Upcoming", s: "pend" }] },
  { id: "CRQ-002", act: "MPLS Reroute", tech: "MPLS", domain: "Optics", circle: "RJ", impact: "SA", window: "00:00–02:00", host: "RTR-JAI01", sched: "Mar 27, 2026", stage: "Stakeholder", sla: 38, slaCls: "s-am", urgency: "#d97706", tracker: [{ l: "L1 — Manager", sub: "Approved", s: "done" }, { l: "L2 — Stakeholder", sub: "Current · 2/4 approved", s: "act" }, { l: "L2 — CAB", sub: "Upcoming", s: "pend" }] },
  { id: "CMC-002", act: "Router Swap", tech: "Router", domain: "Embedded", circle: "GJ", impact: "NSA", window: "05:00–07:00", host: "RTR-GAN01", sched: "Mar 27, 2026", stage: "Rejected", sla: 0, slaCls: "s-br", urgency: "#9ca3af", tracker: [{ l: "L1 — Manager", sub: "Rejected: Mar 22, 2026", s: "done" }, { l: "Closed", sub: "CRQ cancelled", s: "done" }] },
  { id: "CRQ-003", act: "BGP Policy Update", tech: "BGP", domain: "IP Core", circle: "MH", impact: "SA", window: "02:00–04:00", host: "RTR-MUM04", sched: "Mar 28, 2026", stage: "MOP Creation", sla: 60, slaCls: "s-gr", urgency: "#0d9488", tracker: [{ l: "L1 — Manager", sub: "Approved", s: "done" }, { l: "L2 — Stakeholder", sub: "Approved", s: "done" }, { l: "L3 — MOP Creation", sub: "Current · MOP in progress", s: "act" }, { l: "L2 — CAB", sub: "Upcoming", s: "pend" }] },
  { id: "CMC-004", act: "Fiber Splice", tech: "Optics", domain: "Optics", circle: "KA", impact: "SA", window: "01:00–03:00", host: "OLT-BNG03", sched: "Mar 29, 2026", stage: "CAB Approval", sla: 30, slaCls: "s-am", urgency: "#d97706", tracker: [{ l: "L1 — Manager", sub: "Approved", s: "done" }, { l: "L2 — Stakeholder", sub: "Approved", s: "done" }, { l: "L2 — CAB", sub: "Current", s: "act" }] },
  { id: "CRQ-004", act: "Router Upgrade", tech: "Router", domain: "IP Core", circle: "RJ", impact: "NSA", window: "03:00–05:00", host: "RTR-JAI02", sched: "Mar 29, 2026", stage: "Authorization", sla: 90, slaCls: "s-re", urgency: "#dc2626", tracker: [{ l: "L1 — Authorization", sub: "CRITICAL · SLA near breach", s: "act" }] },
  { id: "CMC-005", act: "VLAN Change", tech: "Packet", domain: "Embedded", circle: "DL", impact: "NSA", window: "04:00–06:00", host: "SW-DEL01", sched: "Mar 30, 2026", stage: "Impact Validation", sla: 55, slaCls: "s-gr", urgency: "#2563eb", tracker: [{ l: "L1 — Manager", sub: "Approved", s: "done" }, { l: "Plan & Inventory", sub: "Validated", s: "done" }, { l: "Impact Validation", sub: "Current · Running analysis", s: "act" }] }
];
const stageBadges = {
  "Authorization": '<span class="bg bg-te">Authorization</span>',
  "Stakeholder": '<span class="bg bg-am">Stakeholder</span>',
  "CAB Approval": '<span class="bg bg-pu">CAB Approval</span>',
  "MOP Validation": '<span class="bg bg-bl">MOP Validation</span>',
  "MOP Creation": '<span class="bg bg-bl">MOP Creation</span>',
  "Impact Validation": '<span class="bg bg-te">Impact Validation</span>',
  "Rejected": '<span class="bg bg-re">Rejected</span>'
};
const stepMap = ["Authorization", "Plan & Inventory", "Impact Validation", "Stakeholder", "MOP Creation", "MOP Validation", "CAB Approval", "Network Exec", "Closed"];
const stageStep = {
  "Authorization": 0,
  "Plan & Inventory": 1,
  "Impact Validation": 2,
  "Stakeholder": 3,
  "MOP Creation": 4,
  "MOP Validation": 5,
  "CAB Approval": 6,
  "Network Exec": 7,
  "Closed": 8,
  "Rejected": 8
};
const pgTitles = {
  dashboard: "Dashboard",
  crqs: "All CRQs",
  myapprovals: "My Approvals",
  cabsessions: "CAB Sessions",
  cabplanning: "CAB Planning",
  analytics: "Analytics",
  admin: "Admin Configuration"
};
function renderStepper(stage) {
  const active = stageStep[stage] ?? 6;
  return stepMap.map((s, i) => {
    const cls = i < active ? "done" : i === active ? "active" : "pend";
    return `<div class="sn ${cls}"><div class="sn-dot"></div>${s}</div>`;
  }).join("");
}
function renderTracker(tracker) {
  return tracker.map((t, i) => {
    const iconCls = t.s === "done" ? "tr-done" : t.s === "act" ? "tr-act" : "tr-pend";
    const rowCls = t.s === "done" ? "done" : t.s === "act" ? "act" : "";
    const icon = t.s === "done" ? "✓" : t.s === "act" ? "●" : String(i + 1);
    const bg = t.s === "done" ? "bg-gr" : t.s === "act" ? "bg-bl" : "bg-gy";
    return `<div class="tr-row ${rowCls}"><div class="tr-icon ${iconCls}">${icon}</div><div style="flex:1"><div class="tr-lbl">${t.l}</div><div class="tr-sub">${t.sub}</div></div><span class="bg ${bg}" style="font-size:10px">${t.s === "done" ? "Done" : t.s === "act" ? "Active" : "Pending"}</span></div>`;
  }).join("");
}
function renderCrqDetail(crq, onApprove, onReject, onDelegate) {
  return `
  <div class="det-header">
    <div class="det-id">${crq.id} · Change Request</div>
    <div class="det-title">${crq.act}</div>
    <div class="det-actions">
      <button class="btn btn-ok" id="det-approve-btn">✓ Approve</button>
      <button class="btn btn-no" id="det-reject-btn">✗ Reject</button>
      <button class="btn btn-pu" id="det-delegate-btn">Delegate ▾</button>
      <button class="btn btn-s">Download MOP</button>
    </div>
    <div class="stepper">${renderStepper(crq.stage)}</div>
  </div>
  <div class="det-grid">
    <div class="info-card">
      <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--tx2)">CRQ Information</div>
      <div class="info-rows">
        <div class="ir"><div class="ir-lbl">CRQ No.</div><div class="ir-v" style="font-family:'DM Mono';font-size:12px">${crq.id}</div></div>
        <div class="ir"><div class="ir-lbl">Domain</div><div class="ir-v"><span class="bg bg-bl">${crq.domain}</span></div></div>
        <div class="ir"><div class="ir-lbl">Circle</div><div class="ir-v">${crq.circle}</div></div>
        <div class="ir"><div class="ir-lbl">Technology</div><div class="ir-v">${crq.tech}</div></div>
        <div class="ir"><div class="ir-lbl">Impact</div><div class="ir-v"><span class="bg ${crq.impact === "SA" ? "bg-re" : "bg-gy"}">${crq.impact}</span></div></div>
        <div class="ir"><div class="ir-lbl">Window</div><div class="ir-v">${crq.window}</div></div>
        <div class="ir"><div class="ir-lbl">Hostname</div><div class="ir-v" style="font-family:'DM Mono';font-size:12px">${crq.host}</div></div>
        <div class="ir"><div class="ir-lbl">Scheduled</div><div class="ir-v">${crq.sched}</div></div>
        <div class="ir"><div class="ir-lbl">Stage</div><div class="ir-v">${stageBadges[crq.stage] || crq.stage}</div></div>
        <div class="ir" style="border-bottom:none"><div class="ir-lbl">SLA</div><div class="ir-v"><div class="sla"><div class="slabg" style="width:80px"><div class="slaf ${crq.slaCls}" style="width:${crq.sla}%"></div></div><span class="slap" style="${crq.sla > 75 ? "color:var(--re)" : crq.sla > 50 ? "color:var(--am)" : "color:var(--gr)"}">${crq.sla}%</span></div></div></div>
      </div>
    </div>
    <div class="info-card">
      <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--tx2)">Approval Tracker</div>
      <div class="tracker">${renderTracker(crq.tracker)}</div>
    </div>
  </div>`;
}
function renderCrqList(data) {
  return data.map((crq) => {
    const slaColor = crq.sla > 75 ? "var(--re)" : crq.sla > 50 ? "var(--am)" : "var(--gr)";
    return `<div class="crq-item" id="li-${crq.id}" data-crqid="${crq.id}">
      <div style="position:absolute;top:0;right:0;width:3px;height:100%;background:${crq.urgency};border-radius:0 3px 3px 0"></div>
      <div class="crq-item-top">
        <span class="crq-id">${crq.id}</span>
        <span class="crq-time">${crq.sched}</span>
      </div>
      <div class="crq-title">${crq.act} <span style="font-size:11px;color:var(--tx3)">· ${crq.tech}</span></div>
      <div class="crq-meta">
        ${stageBadges[crq.stage] || `<span class="bg bg-gy">${crq.stage}</span>`}
        <span class="bg bg-gy" style="font-size:10px">${crq.domain}</span>
        <span class="bg bg-gy" style="font-size:10px">${crq.circle}</span>
        <div class="sla" style="margin-left:auto"><div class="slabg" style="width:44px"><div class="slaf ${crq.slaCls}" style="width:${crq.sla}%"></div></div><span class="slap" style="color:${slaColor};font-size:10px">${crq.sla}%</span></div>
      </div>
    </div>`;
  }).join("");
}
function renderApprovalList(data) {
  const pending = data.filter((c) => c.stage !== "Rejected" && c.stage !== "Closed");
  return pending.map((crq) => {
    const slaColor = crq.sla > 75 ? "var(--re)" : crq.sla > 50 ? "var(--am)" : "var(--gr)";
    return `<div class="crq-item" id="al-${crq.id}" data-approvalid="${crq.id}">
      <div style="position:absolute;top:0;right:0;width:3px;height:100%;background:${crq.urgency};border-radius:0 3px 3px 0"></div>
      <div class="crq-item-top">
        <span class="crq-id">${crq.id}</span>
        <div class="sla"><div class="slabg" style="width:44px"><div class="slaf ${crq.slaCls}" style="width:${crq.sla}%"></div></div><span class="slap" style="color:${slaColor};font-size:10px">${crq.sla}%</span></div>
      </div>
      <div class="crq-title">${crq.act}</div>
      <div class="crq-meta">
        ${stageBadges[crq.stage] || `<span class="bg bg-gy">${crq.stage}</span>`}
        <span class="bg bg-gy" style="font-size:10px">${crq.domain} · ${crq.circle}</span>
      </div>
    </div>`;
  }).join("");
}
function Home() {
  const [activePage, setActivePage] = useState("dashboard");
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [activeModal, setActiveModal] = useState(null);
  const [toast, setToast] = useState({ msg: "", visible: false });
  const [cabTab, setCabTab] = useState("cab-my");
  const [admTab, setAdmTab] = useState("adm-approvers");
  const [crqSearch, setCrqSearch] = useState("");
  const [fStage, setFStage] = useState("");
  const [fDomain, setFDomain] = useState("");
  const [fSla, setFSla] = useState("");
  const [selectedCrq, setSelectedCrq] = useState(null);
  const [selectedApproval, setSelectedApproval] = useState(null);
  const crqDetailRef = useRef(null);
  const approvalDetailRef = useRef(null);
  const crqListRef = useRef(null);
  const approvalListRef = useRef(null);
  const toastTimer = useRef(null);
  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);
  const showToast = useCallback((msg) => {
    setToast({ msg, visible: true });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3e3);
  }, []);
  const go = (id) => {
    setActivePage(id);
    setPageTitle(pgTitles[id] || id);
    setSelectedCrq(null);
    setSelectedApproval(null);
  };
  const getFilteredCrqs = () => {
    const q = crqSearch.toLowerCase();
    return CRQs.filter((c) => {
      if (q && !c.id.toLowerCase().includes(q) && !c.act.toLowerCase().includes(q) && !c.host.toLowerCase().includes(q)) return false;
      if (fStage && c.stage !== fStage) return false;
      if (fDomain && c.domain !== fDomain) return false;
      if (fSla === "critical" && c.sla <= 80) return false;
      if (fSla === "warn" && (c.sla < 50 || c.sla > 80)) return false;
      if (fSla === "ok" && c.sla >= 50) return false;
      return true;
    });
  };
  useEffect(() => {
    if (!crqListRef.current) return;
    const filtered = getFilteredCrqs();
    crqListRef.current.innerHTML = renderCrqList(filtered);
    const items = crqListRef.current.querySelectorAll(".crq-item");
    items.forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.crqid;
        if (!id) return;
        items.forEach((e) => e.classList.remove("sel"));
        el.classList.add("sel");
        const crq = CRQs.find((c) => c.id === id);
        if (crq) setSelectedCrq(crq);
      });
    });
  }, [crqSearch, fStage, fDomain, fSla, activePage]);
  useEffect(() => {
    if (!approvalListRef.current) return;
    approvalListRef.current.innerHTML = renderApprovalList(CRQs);
    const items = approvalListRef.current.querySelectorAll(".crq-item");
    items.forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.approvalid;
        if (!id) return;
        items.forEach((e) => e.classList.remove("sel"));
        el.classList.add("sel");
        const crq = CRQs.find((c) => c.id === id);
        if (crq) setSelectedApproval(crq);
      });
    });
  }, [activePage]);
  useEffect(() => {
    if (!crqDetailRef.current) return;
    if (!selectedCrq) {
      crqDetailRef.current.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;color:var(--tx3)"><div style="text-align:center"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:10px;opacity:.4"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg><div style="font-size:13px">Select a CRQ to view details</div></div></div>`;
      return;
    }
    crqDetailRef.current.innerHTML = renderCrqDetail(selectedCrq);
    crqDetailRef.current.querySelector("#det-approve-btn")?.addEventListener("click", () => openModal("m-approve"));
    crqDetailRef.current.querySelector("#det-reject-btn")?.addEventListener("click", () => openModal("m-reject"));
    crqDetailRef.current.querySelector("#det-delegate-btn")?.addEventListener("click", () => openModal("m-delegate"));
  }, [selectedCrq]);
  useEffect(() => {
    if (!approvalDetailRef.current) return;
    if (!selectedApproval) {
      approvalDetailRef.current.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;color:var(--tx3)"><div style="text-align:center"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:8px;opacity:.4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div style="font-size:13px">Select a CRQ to approve or reject</div></div></div>`;
      return;
    }
    approvalDetailRef.current.innerHTML = renderCrqDetail(selectedApproval);
    approvalDetailRef.current.querySelector("#det-approve-btn")?.addEventListener("click", () => openModal("m-approve"));
    approvalDetailRef.current.querySelector("#det-reject-btn")?.addEventListener("click", () => openModal("m-reject"));
    approvalDetailRef.current.querySelector("#det-delegate-btn")?.addEventListener("click", () => openModal("m-delegate"));
  }, [selectedApproval]);
  const filteredCrqs = getFilteredCrqs();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Mono:wght@400;500&display=swap');

:root{
  --nav:#0c1428;--nav-h:#162040;--nav-a:#1b3560;
  --ac:#2563eb;--ac2:#1d4ed8;--ac-s:#eff6ff;
  --te:#0d9488;--te-s:#f0fdfa;
  --am:#d97706;--am-s:#fffbeb;
  --re:#dc2626;--re-s:#fef2f2;
  --gr:#16a34a;--gr-s:#f0fdf4;
  --pu:#7c3aed;--pu-s:#f5f3ff;
  --bd:#e5e7eb;--bd2:#f3f4f6;
  --tx:#111827;--tx2:#6b7280;--tx3:#9ca3af;
  --bg:#f1f5f9;--wh:#fff;
  --r:10px;--sh:0 1px 3px rgba(0,0,0,.07),0 1px 2px rgba(0,0,0,.04);
  --sh2:0 4px 16px rgba(0,0,0,.1);
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--tx);display:flex;height:100vh;overflow:hidden;font-size:14px}
#root{display:flex;width:100%;height:100vh;overflow:hidden}

/* NAV */
.nav{width:210px;min-width:210px;background:var(--nav);display:flex;flex-direction:column;height:100vh;overflow-y:auto}
.nav-logo{padding:18px 16px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px}
.logo-mark{width:30px;height:30px;background:linear-gradient(135deg,#3b82f6,#06b6d4);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;letter-spacing:-.5px;flex-shrink:0}
.logo-name{color:#fff;font-size:15px;font-weight:600;letter-spacing:-.3px}
.logo-ver{color:rgba(255,255,255,.35);font-size:10px}
.nav-grp{padding:14px 8px 2px}
.nav-grp-lbl{color:rgba(255,255,255,.28);font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;padding:0 8px;margin-bottom:3px}
.ni{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:8px;cursor:pointer;color:rgba(255,255,255,.5);font-size:13px;font-weight:400;transition:all .13s;margin-bottom:1px;position:relative}
.ni:hover{background:var(--nav-h);color:rgba(255,255,255,.8)}
.ni.on{background:var(--nav-a);color:#fff;font-weight:500}
.ni svg{width:15px;height:15px;flex-shrink:0;opacity:.75}
.ni.on svg{opacity:1}
.ni-badge{margin-left:auto;background:var(--ac);color:#fff;font-size:10px;font-weight:600;padding:2px 6px;border-radius:10px;line-height:1.4}
.ni-badge.red{background:var(--re)}
.ni-badge.amber{background:var(--am)}
.nav-foot{margin-top:auto;padding:10px 8px;border-top:1px solid rgba(255,255,255,.07)}
.ucard{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:8px;cursor:pointer}
.ucard:hover{background:var(--nav-h)}
.uav{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#fff;flex-shrink:0}
.uname{color:rgba(255,255,255,.8);font-size:12px;font-weight:500}
.urole{color:rgba(255,255,255,.32);font-size:10px}

/* MAIN SHELL */
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:var(--wh);border-bottom:1px solid var(--bd);padding:0 20px;height:52px;display:flex;align-items:center;gap:12px;flex-shrink:0}
.page-ttl{font-size:15px;font-weight:600;flex:1}
.tb-actions{display:flex;align-items:center;gap:8px}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 13px;border-radius:8px;font-size:12px;font-weight:500;cursor:pointer;border:none;font-family:inherit;transition:all .13s;white-space:nowrap}
.btn-p{background:var(--ac);color:#fff}.btn-p:hover{background:var(--ac2)}
.btn-s{background:var(--wh);color:var(--tx);border:1px solid var(--bd)}.btn-s:hover{background:var(--bd2)}
.btn-ok{background:var(--gr-s);color:var(--gr);border:1px solid #86efac}
.btn-no{background:var(--re-s);color:var(--re);border:1px solid #fca5a5}
.btn-warn{background:var(--am-s);color:var(--am);border:1px solid #fcd34d}
.btn-pu{background:var(--pu-s);color:var(--pu);border:1px solid #c4b5fd}
.iBtn{width:32px;height:32px;border-radius:8px;background:var(--wh);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--tx2);transition:all .13s}
.iBtn:hover{background:var(--bd2);color:var(--tx)}

/* CONTENT AREA */
.content{flex:1;overflow:hidden;display:flex;flex-direction:column}
.page{display:none;flex:1;overflow:hidden;flex-direction:column}
.page.on{display:flex}

/* CARDS */
.card{background:var(--wh);border:1px solid var(--bd);border-radius:var(--r);box-shadow:var(--sh)}
.ch{padding:14px 18px;border-bottom:1px solid var(--bd2);display:flex;align-items:center;justify-content:space-between;gap:12px}
.ct{font-size:13px;font-weight:600}
.cb{padding:16px 18px}

/* BADGES */
.bg{display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:20px;font-size:11px;font-weight:500;white-space:nowrap}
.bg-bl{background:var(--ac-s);color:var(--ac)}
.bg-te{background:var(--te-s);color:var(--te)}
.bg-am{background:var(--am-s);color:var(--am)}
.bg-re{background:var(--re-s);color:var(--re)}
.bg-gr{background:var(--gr-s);color:var(--gr)}
.bg-pu{background:var(--pu-s);color:var(--pu)}
.bg-gy{background:var(--bd2);color:var(--tx2)}

/* METRICS ROW */
.mx{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:16px 16px 0;flex-shrink:0}
.mc{background:var(--wh);border:1px solid var(--bd);border-radius:var(--r);padding:14px 16px;position:relative;overflow:hidden}
.mc::after{content:'';position:absolute;top:0;left:0;width:3px;height:100%;border-radius:3px 0 0 3px}
.mc.bl::after{background:var(--ac)}.mc.te::after{background:var(--te)}.mc.am::after{background:var(--am)}.mc.re::after{background:var(--re)}
.mc-lbl{font-size:11px;color:var(--tx2);font-weight:500;margin-bottom:4px}
.mc-v{font-size:24px;font-weight:600;line-height:1;margin-bottom:2px}
.mc.bl .mc-v{color:var(--ac)}.mc.te .mc-v{color:var(--te)}.mc.am .mc-v{color:var(--am)}.mc.re .mc-v{color:var(--re)}
.mc-s{font-size:11px;color:var(--tx3)}

/* SLA */
.sla{display:flex;align-items:center;gap:7px}
.slabg{width:56px;height:5px;border-radius:3px;background:#e5e7eb;overflow:hidden;flex-shrink:0}
.slaf{height:100%;border-radius:3px}
.s-gr{background:#16a34a}.s-am{background:#d97706}.s-re{background:#dc2626}.s-br{background:#9ca3af}
.slap{font-size:11px;font-weight:600;min-width:30px}

/* TABLE */
.tw{overflow-x:auto}
table{width:100%;border-collapse:collapse}
thead th{background:var(--bd2);padding:9px 13px;text-align:left;font-size:11px;font-weight:600;color:var(--tx2);text-transform:uppercase;letter-spacing:.05em;white-space:nowrap}
thead th:first-child{border-radius:8px 0 0 8px}
thead th:last-child{border-radius:0 8px 8px 0}
tbody tr{border-bottom:1px solid var(--bd2);transition:background .1s;cursor:pointer}
tbody tr:last-child{border-bottom:none}
tbody tr:hover{background:#f8faff}
tbody tr.selected{background:#eff6ff!important;border-left:3px solid var(--ac)}
td{padding:11px 13px;font-size:13px;vertical-align:middle}

/* SPLIT LAYOUT */
.split{display:flex;flex:1;overflow:hidden;gap:0}
.split-list{width:380px;min-width:300px;border-right:1px solid var(--bd);display:flex;flex-direction:column;background:var(--wh);overflow:hidden;flex-shrink:0}
.split-detail{flex:1;overflow-y:auto;background:var(--bg);padding:16px}

/* CRQ LIST ITEMS */
.crq-list-header{padding:12px 14px;border-bottom:1px solid var(--bd2);display:flex;align-items:center;gap:8px;flex-shrink:0}
.crq-list-header input{flex:1;font-size:12px;padding:6px 10px;border:1px solid var(--bd);border-radius:7px;background:var(--bg);outline:none;font-family:inherit}
.crq-list-header input:focus{border-color:var(--ac)}
.crq-list-scr{overflow-y:auto;flex:1}
.crq-item{padding:12px 14px;border-bottom:1px solid var(--bd2);cursor:pointer;transition:background .1s;position:relative}
.crq-item:hover{background:#f8faff}
.crq-item.sel{background:#eff6ff;border-left:3px solid var(--ac)}
.crq-item-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:5px}
.crq-id{font-size:12px;font-weight:600;color:var(--ac);font-family:'DM Mono',monospace}
.crq-time{font-size:11px;color:var(--tx3)}
.crq-title{font-size:13px;font-weight:500;margin-bottom:4px;color:var(--tx)}
.crq-meta{display:flex;align-items:center;gap:6px;flex-wrap:wrap}

/* DETAIL PANEL */
.det-header{background:var(--wh);border:1px solid var(--bd);border-radius:var(--r);padding:16px 18px;margin-bottom:14px;box-shadow:var(--sh)}
.det-id{font-size:11px;color:var(--tx3);font-family:'DM Mono';margin-bottom:4px}
.det-title{font-size:17px;font-weight:600;margin-bottom:10px}
.det-actions{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}
.stepper{display:flex;overflow-x:auto;gap:0;margin-bottom:2px}
.sn{display:flex;align-items:center;gap:5px;padding:5px 12px;font-size:11px;font-weight:500;white-space:nowrap;background:var(--wh);border:1px solid var(--bd);border-right:none}
.sn:first-child{border-radius:7px 0 0 7px}
.sn:last-child{border-radius:0 7px 7px 0;border-right:1px solid var(--bd)}
.sn.done{background:var(--te-s);border-color:#99f6e4;color:var(--te)}
.sn.active{background:var(--ac-s);border-color:#93c5fd;color:var(--ac)}
.sn.pend{color:var(--tx3)}
.sn-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
.sn.done .sn-dot{background:var(--te)}.sn.active .sn-dot{background:var(--ac)}.sn.pend .sn-dot{background:var(--bd)}

.det-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.info-card{background:var(--wh);border:1px solid var(--bd);border-radius:var(--r);padding:14px 16px;box-shadow:var(--sh)}
.info-rows{display:grid;grid-template-columns:1fr 1fr;gap:0}
.ir{padding:9px 0;border-bottom:1px solid var(--bd2)}
.ir:nth-last-child(-n+2){border-bottom:none}
.ir-lbl{font-size:10px;color:var(--tx3);font-weight:500;text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}
.ir-v{font-size:13px;font-weight:500}

/* TRACKER */
.tracker{display:flex;flex-direction:column;gap:8px}
.tr-row{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;border:1px solid var(--bd)}
.tr-row.done{background:var(--te-s);border-color:#99f6e4}
.tr-row.act{background:var(--ac-s);border-color:#93c5fd}
.tr-icon{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0}
.tr-done{background:var(--te-s);color:var(--te);border:1.5px solid #99f6e4}
.tr-act{background:var(--ac-s);color:var(--ac);border:1.5px solid #93c5fd}
.tr-pend{background:var(--bd2);color:var(--tx3);border:1.5px solid var(--bd)}
.tr-lbl{font-size:13px;font-weight:500}
.tr-sub{font-size:11px;color:var(--tx2)}

/* MODAL */
.mbg{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;align-items:center;justify-content:center}
.mbg.open{display:flex}
.modal{background:var(--wh);border-radius:14px;width:460px;max-width:95vw;box-shadow:var(--sh2);overflow:hidden}
.mh{padding:16px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between}
.mt{font-size:14px;font-weight:600}
.mx-btn{cursor:pointer;color:var(--tx2);font-size:20px;line-height:1}
.mb{padding:18px}
.mf{padding:12px 18px;border-top:1px solid var(--bd);display:flex;gap:8px;justify-content:flex-end}
.fr{margin-bottom:12px}
.fl{font-size:11px;font-weight:500;color:var(--tx2);margin-bottom:4px;display:block}
.fr input,.fr select,.fr textarea{width:100%;font-family:inherit;font-size:13px;padding:8px 11px;border:1px solid var(--bd);border-radius:8px;background:var(--wh);color:var(--tx);outline:none;transition:border .13s}
.fr input:focus,.fr select:focus,.fr textarea:focus{border-color:var(--ac);box-shadow:0 0 0 3px rgba(37,99,235,.09)}

/* TABS */
.tabs{display:flex;border-bottom:1px solid var(--bd);flex-shrink:0;padding:0 16px}
.tab{padding:9px 16px;font-size:12px;font-weight:500;color:var(--tx2);cursor:pointer;border-bottom:2px solid transparent;transition:all .13s;margin-bottom:-1px}
.tab:hover{color:var(--tx)}
.tab.on{color:var(--ac);border-bottom-color:var(--ac)}

/* SCROLLABLE CONTENT */
.scrollable{overflow-y:auto;flex:1;padding:16px}

/* ALERT */
.alert{padding:10px 14px;border-radius:8px;font-size:12px;display:flex;align-items:flex-start;gap:9px;margin-bottom:14px}
.a-info{background:var(--ac-s);color:#1e40af;border:1px solid #bfdbfe}
.a-warn{background:var(--am-s);color:#92400e;border:1px solid #fcd34d}
.a-ok{background:var(--gr-s);color:#166534;border:1px solid #bbf7d0}

/* CHARTS */
.bar-ch{display:flex;align-items:flex-end;gap:8px;height:72px;padding-top:8px}
.bc{display:flex;flex-direction:column;align-items:center;gap:3px;flex:1}
.bb{width:100%;border-radius:4px 4px 0 0;min-height:4px}
.bl{font-size:10px;color:var(--tx3);white-space:nowrap}
.bv{font-size:11px;font-weight:600;color:var(--tx2)}

/* QUORUM */
.qbar{background:#e5e7eb;border-radius:4px;height:7px;overflow:hidden;margin:6px 0}
.qfill{height:100%;background:var(--ac);border-radius:4px}

/* TOAST */
#chm-toast{position:fixed;bottom:20px;right:20px;background:#111827;color:#fff;padding:11px 16px;border-radius:10px;font-size:12px;font-weight:500;box-shadow:var(--sh2);transition:all .28s;z-index:200;max-width:320px;pointer-events:none}

::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:#d1d5db;border-radius:4px}

.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.dv{height:1px;background:var(--bd2);margin:12px 0}
      ` }),
    /* @__PURE__ */ jsxs("aside", { className: "nav", children: [
      /* @__PURE__ */ jsxs("div", { className: "nav-logo", children: [
        /* @__PURE__ */ jsx("div", { className: "logo-mark", children: "CHM" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "logo-name", children: "CHM Portal" }),
          /* @__PURE__ */ jsx("div", { className: "logo-ver", children: "Change Management" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "nav-grp", children: [
        /* @__PURE__ */ jsx("div", { className: "nav-grp-lbl", children: "Main" }),
        /* @__PURE__ */ jsxs("div", { className: `ni${activePage === "dashboard" ? " on" : ""}`, onClick: () => go("dashboard"), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
            /* @__PURE__ */ jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
            /* @__PURE__ */ jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
            /* @__PURE__ */ jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
          ] }),
          "Dashboard"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "nav-grp", children: [
        /* @__PURE__ */ jsx("div", { className: "nav-grp-lbl", children: "CRQ Management" }),
        /* @__PURE__ */ jsxs("div", { className: `ni${activePage === "crqs" ? " on" : ""}`, onClick: () => go("crqs"), children: [
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" }) }),
          "All CRQs",
          /* @__PURE__ */ jsx("span", { className: "ni-badge", children: "42" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ni${activePage === "myapprovals" ? " on" : ""}`, onClick: () => go("myapprovals"), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
            /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
          ] }),
          "My Approvals",
          /* @__PURE__ */ jsx("span", { className: "ni-badge red", children: "8" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "nav-grp", children: [
        /* @__PURE__ */ jsx("div", { className: "nav-grp-lbl", children: "CAB" }),
        /* @__PURE__ */ jsxs("div", { className: `ni${activePage === "cabsessions" ? " on" : ""}`, onClick: () => go("cabsessions"), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
            /* @__PURE__ */ jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
            /* @__PURE__ */ jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
            /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
          ] }),
          "CAB Sessions",
          /* @__PURE__ */ jsx("span", { className: "ni-badge amber", children: "3" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ni${activePage === "cabplanning" ? " on" : ""}`, onClick: () => go("cabplanning"), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
          ] }),
          "CAB Planning"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "nav-grp", children: [
        /* @__PURE__ */ jsx("div", { className: "nav-grp-lbl", children: "Reports" }),
        /* @__PURE__ */ jsxs("div", { className: `ni${activePage === "analytics" ? " on" : ""}`, onClick: () => go("analytics"), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("line", { x1: "18", y1: "20", x2: "18", y2: "10" }),
            /* @__PURE__ */ jsx("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
            /* @__PURE__ */ jsx("line", { x1: "6", y1: "20", x2: "6", y2: "14" })
          ] }),
          "Analytics"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "nav-grp", children: [
        /* @__PURE__ */ jsx("div", { className: "nav-grp-lbl", children: "Admin" }),
        /* @__PURE__ */ jsxs("div", { className: `ni${activePage === "admin" ? " on" : ""}`, onClick: () => go("admin"), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
            /* @__PURE__ */ jsx("path", { d: "M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M21 12h-2M5 12H3M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 21v-2M12 5V3" })
          ] }),
          "Admin Config"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "nav-foot", children: /* @__PURE__ */ jsxs("div", { className: "ucard", children: [
        /* @__PURE__ */ jsx("div", { className: "uav", children: "AV" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "uname", children: "Amit Verma" }),
          /* @__PURE__ */ jsx("div", { className: "urole", children: "CTO · All Domains" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "main", children: [
      /* @__PURE__ */ jsxs("div", { className: "topbar", children: [
        /* @__PURE__ */ jsx("div", { className: "page-ttl", children: pageTitle }),
        /* @__PURE__ */ jsxs("div", { className: "tb-actions", children: [
          /* @__PURE__ */ jsx("div", { className: "iBtn", title: "Notifications", children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" }) }) }),
          /* @__PURE__ */ jsxs("button", { className: "btn btn-p", onClick: () => openModal("m-new-crq"), children: [
            /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
              /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
            ] }),
            "New CRQ"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content", children: [
        /* @__PURE__ */ jsxs("div", { className: `page${activePage === "dashboard" ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "mx", children: [
            /* @__PURE__ */ jsxs("div", { className: "mc bl", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Total Active CRQs" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "42" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "↑ 6 from last week" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc te", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Pending Approvals" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "17" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "Awaiting action" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc am", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "SLA Breaches" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "4" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "Auto-escalated" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc re", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Rejected CRQs" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "5" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "This week" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "scrollable", children: [
            /* @__PURE__ */ jsxs("div", { className: "g2", style: { marginBottom: "14px" }, children: [
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "ch", children: /* @__PURE__ */ jsx("div", { className: "ct", children: "CRQ Status" }) }),
                /* @__PURE__ */ jsx("div", { className: "cb", children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "20px" }, children: [
                  /* @__PURE__ */ jsxs("svg", { width: "90", height: "90", viewBox: "0 0 90 90", style: { flexShrink: 0 }, children: [
                    /* @__PURE__ */ jsx("circle", { cx: "45", cy: "45", r: "34", fill: "none", stroke: "#e5e7eb", strokeWidth: "12" }),
                    /* @__PURE__ */ jsx("circle", { cx: "45", cy: "45", r: "34", fill: "none", stroke: "#2563eb", strokeWidth: "12", strokeDasharray: "85 129", strokeDashoffset: "0", strokeLinecap: "round" }),
                    /* @__PURE__ */ jsx("circle", { cx: "45", cy: "45", r: "34", fill: "none", stroke: "#dc2626", strokeWidth: "12", strokeDasharray: "27 129", strokeDashoffset: "-85", strokeLinecap: "round" }),
                    /* @__PURE__ */ jsx("circle", { cx: "45", cy: "45", r: "34", fill: "none", stroke: "#d97706", strokeWidth: "12", strokeDasharray: "17 129", strokeDashoffset: "-112", strokeLinecap: "round" }),
                    /* @__PURE__ */ jsx("text", { x: "45", y: "41", textAnchor: "middle", fontSize: "16", fontWeight: "600", fill: "#111827", children: "42" }),
                    /* @__PURE__ */ jsx("text", { x: "45", y: "53", textAnchor: "middle", fontSize: "8", fill: "#9ca3af", children: "Total" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "7px" }, children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "7px", fontSize: "12px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#2563eb" } }),
                      "Approved ",
                      /* @__PURE__ */ jsx("b", { children: "27" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "7px", fontSize: "12px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#dc2626" } }),
                      "Rejected ",
                      /* @__PURE__ */ jsx("b", { children: "8" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "7px", fontSize: "12px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#d97706" } }),
                      "Pending ",
                      /* @__PURE__ */ jsx("b", { children: "5" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "7px", fontSize: "12px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#0d9488" } }),
                      "CAB Review ",
                      /* @__PURE__ */ jsx("b", { children: "2" })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "ch", children: /* @__PURE__ */ jsx("div", { className: "ct", children: "SLA Breaches by Domain" }) }),
                /* @__PURE__ */ jsx("div", { className: "cb", children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "9px" }, children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "3px" }, children: [
                      /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "IP Core" }),
                      /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, color: "var(--re)" }, children: "13" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { style: { background: "#e5e7eb", borderRadius: "3px", height: "7px" }, children: /* @__PURE__ */ jsx("div", { style: { background: "#dc2626", width: "85%", height: "100%", borderRadius: "3px" } }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "3px" }, children: [
                      /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Optics" }),
                      /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, color: "var(--am)" }, children: "8" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { style: { background: "#e5e7eb", borderRadius: "3px", height: "7px" }, children: /* @__PURE__ */ jsx("div", { style: { background: "#d97706", width: "52%", height: "100%", borderRadius: "3px" } }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "3px" }, children: [
                      /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Packet" }),
                      /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, color: "var(--ac)" }, children: "3" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { style: { background: "#e5e7eb", borderRadius: "3px", height: "7px" }, children: /* @__PURE__ */ jsx("div", { style: { background: "#2563eb", width: "20%", height: "100%", borderRadius: "3px" } }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "3px" }, children: [
                      /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Embedded" }),
                      /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, color: "var(--te)" }, children: "7" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { style: { background: "#e5e7eb", borderRadius: "3px", height: "7px" }, children: /* @__PURE__ */ jsx("div", { style: { background: "#0d9488", width: "45%", height: "100%", borderRadius: "3px" } }) })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", style: { marginBottom: "14px" }, children: [
              /* @__PURE__ */ jsxs("div", { className: "ch", children: [
                /* @__PURE__ */ jsx("div", { className: "ct", children: "Approval TAT by Stage (avg hrs)" }),
                /* @__PURE__ */ jsxs("select", { style: { fontSize: "11px", padding: "4px 8px", border: "1px solid var(--bd)", borderRadius: "6px", background: "var(--wh)" }, children: [
                  /* @__PURE__ */ jsx("option", { children: "This Week" }),
                  /* @__PURE__ */ jsx("option", { children: "This Month" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "cb", style: { paddingBottom: "8px" }, children: /* @__PURE__ */ jsxs("div", { className: "bar-ch", children: [
                /* @__PURE__ */ jsxs("div", { className: "bc", children: [
                  /* @__PURE__ */ jsx("div", { className: "bv", children: "22h" }),
                  /* @__PURE__ */ jsx("div", { className: "bb", style: { height: "68px", background: "#2563eb", opacity: 0.8 } }),
                  /* @__PURE__ */ jsx("div", { className: "bl", children: "Authorization" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bc", children: [
                  /* @__PURE__ */ jsx("div", { className: "bv", children: "16h" }),
                  /* @__PURE__ */ jsx("div", { className: "bb", style: { height: "48px", background: "#0d9488", opacity: 0.8 } }),
                  /* @__PURE__ */ jsx("div", { className: "bl", children: "Scheduling" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bc", children: [
                  /* @__PURE__ */ jsx("div", { className: "bv", children: "11h" }),
                  /* @__PURE__ */ jsx("div", { className: "bb", style: { height: "32px", background: "#7c3aed", opacity: 0.8 } }),
                  /* @__PURE__ */ jsx("div", { className: "bl", children: "CAB" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bc", children: [
                  /* @__PURE__ */ jsx("div", { className: "bv", children: "6h" }),
                  /* @__PURE__ */ jsx("div", { className: "bb", style: { height: "18px", background: "#d97706", opacity: 0.8 } }),
                  /* @__PURE__ */ jsx("div", { className: "bl", children: "Implementation" })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsxs("div", { className: "ch", children: [
                /* @__PURE__ */ jsx("div", { className: "ct", children: "Recent CRQ Activity" }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-s", onClick: () => go("crqs"), children: "View all →" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { children: "CRQ" }),
                  /* @__PURE__ */ jsx("th", { children: "Activity" }),
                  /* @__PURE__ */ jsx("th", { children: "Domain" }),
                  /* @__PURE__ */ jsx("th", { children: "Stage" }),
                  /* @__PURE__ */ jsx("th", { children: "SLA" }),
                  /* @__PURE__ */ jsx("th", { children: "Action" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxs("tr", { onClick: () => go("crqs"), children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'DM Mono'", fontSize: "11px", fontWeight: 500, color: "var(--ac)" }, children: "CRQ-001" }) }),
                    /* @__PURE__ */ jsx("td", { children: "Link Upgrade" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-bl", children: "IP Core" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-pu", children: "CAB Approval" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "sla", children: [
                      /* @__PURE__ */ jsx("div", { className: "slabg", children: /* @__PURE__ */ jsx("div", { className: "slaf s-gr", style: { width: "72%" } }) }),
                      /* @__PURE__ */ jsx("span", { className: "slap", style: { color: "var(--gr)" }, children: "72%" })
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-ok", onClick: (e) => {
                      e.stopPropagation();
                      openModal("m-approve");
                    }, children: "Approve" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { onClick: () => go("crqs"), children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'DM Mono'", fontSize: "11px", fontWeight: 500, color: "var(--ac)" }, children: "CMC-031" }) }),
                    /* @__PURE__ */ jsx("td", { children: "GPON Config" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-te", children: "PVoIcc" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-am", children: "Stakeholder" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "sla", children: [
                      /* @__PURE__ */ jsx("div", { className: "slabg", children: /* @__PURE__ */ jsx("div", { className: "slaf s-am", style: { width: "45%" } }) }),
                      /* @__PURE__ */ jsx("span", { className: "slap", style: { color: "var(--am)" }, children: "45%" })
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-no", onClick: (e) => {
                      e.stopPropagation();
                      openModal("m-reject");
                    }, children: "Reject" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { onClick: () => go("crqs"), children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'DM Mono'", fontSize: "11px", fontWeight: 500, color: "var(--re)" }, children: "CMP-023" }) }),
                    /* @__PURE__ */ jsx("td", { children: "BGP Change" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-bl", children: "IP Core" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-te", children: "MOP Validation" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "sla", children: [
                      /* @__PURE__ */ jsx("div", { className: "slabg", children: /* @__PURE__ */ jsx("div", { className: "slaf s-re", style: { width: "85%" } }) }),
                      /* @__PURE__ */ jsx("span", { className: "slap", style: { color: "var(--re)" }, children: "85%" })
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-warn", children: "Critical" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { onClick: () => go("crqs"), children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'DM Mono'", fontSize: "11px", fontWeight: 500, color: "var(--ac)" }, children: "CMC-003" }) }),
                    /* @__PURE__ */ jsx("td", { children: "BLJ Chang" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gy", children: "Packet" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-te", children: "Authorization" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "sla", children: [
                      /* @__PURE__ */ jsx("div", { className: "slabg", children: /* @__PURE__ */ jsx("div", { className: "slaf s-gr", style: { width: "72%" } }) }),
                      /* @__PURE__ */ jsx("span", { className: "slap", style: { color: "var(--gr)" }, children: "72%" })
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-ok", onClick: (e) => {
                      e.stopPropagation();
                      openModal("m-approve");
                    }, children: "Approve" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { onClick: () => go("crqs"), children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'DM Mono'", fontSize: "11px", fontWeight: 500, color: "var(--ac)" }, children: "CRQ-002" }) }),
                    /* @__PURE__ */ jsx("td", { children: "MPLS Reroute" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-pu", children: "Optics" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-am", children: "Stakeholder" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "sla", children: [
                      /* @__PURE__ */ jsx("div", { className: "slabg", children: /* @__PURE__ */ jsx("div", { className: "slaf s-am", style: { width: "38%" } }) }),
                      /* @__PURE__ */ jsx("span", { className: "slap", style: { color: "var(--am)" }, children: "38%" })
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-ok", onClick: (e) => {
                      e.stopPropagation();
                      openModal("m-approve");
                    }, children: "Approve" }) })
                  ] })
                ] })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `page${activePage === "crqs" ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { style: { padding: "10px 14px 0", display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, background: "var(--wh)", borderBottom: "1px solid var(--bd)" }, children: [
            /* @__PURE__ */ jsxs("select", { value: fStage, onChange: (e) => setFStage(e.target.value), style: { fontSize: "12px", padding: "5px 9px", border: "1px solid var(--bd)", borderRadius: "7px", background: "var(--wh)", fontFamily: "inherit", marginBottom: "10px" }, children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "All Stages" }),
              /* @__PURE__ */ jsx("option", { value: "Authorization", children: "Authorization" }),
              /* @__PURE__ */ jsx("option", { value: "CAB Approval", children: "CAB Approval" }),
              /* @__PURE__ */ jsx("option", { value: "Stakeholder", children: "Stakeholder" }),
              /* @__PURE__ */ jsx("option", { value: "MOP Validation", children: "MOP Validation" })
            ] }),
            /* @__PURE__ */ jsxs("select", { value: fDomain, onChange: (e) => setFDomain(e.target.value), style: { fontSize: "12px", padding: "5px 9px", border: "1px solid var(--bd)", borderRadius: "7px", background: "var(--wh)", fontFamily: "inherit", marginBottom: "10px" }, children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "All Domains" }),
              /* @__PURE__ */ jsx("option", { value: "IP Core", children: "IP Core" }),
              /* @__PURE__ */ jsx("option", { value: "Optics", children: "Optics" }),
              /* @__PURE__ */ jsx("option", { value: "Packet", children: "Packet" }),
              /* @__PURE__ */ jsx("option", { value: "Embedded", children: "Embedded" })
            ] }),
            /* @__PURE__ */ jsxs("select", { value: fSla, onChange: (e) => setFSla(e.target.value), style: { fontSize: "12px", padding: "5px 9px", border: "1px solid var(--bd)", borderRadius: "7px", background: "var(--wh)", fontFamily: "inherit", marginBottom: "10px" }, children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "All SLA" }),
              /* @__PURE__ */ jsx("option", { value: "critical", children: "Critical (>80%)" }),
              /* @__PURE__ */ jsx("option", { value: "warn", children: "Warning (50-80%)" }),
              /* @__PURE__ */ jsx("option", { value: "ok", children: "On Track (<50%)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { marginLeft: "auto", fontSize: "11px", color: "var(--tx3)", marginBottom: "10px" }, children: [
              filteredCrqs.length,
              " CRQs"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "split", children: [
            /* @__PURE__ */ jsxs("div", { className: "split-list", children: [
              /* @__PURE__ */ jsx("div", { className: "crq-list-header", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search CRQ ID, activity, hostname...", value: crqSearch, onChange: (e) => setCrqSearch(e.target.value) }) }),
              /* @__PURE__ */ jsx("div", { className: "crq-list-scr", ref: crqListRef })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "split-detail", ref: crqDetailRef })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `page${activePage === "myapprovals" ? " on" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "split", children: [
          /* @__PURE__ */ jsxs("div", { className: "split-list", children: [
            /* @__PURE__ */ jsxs("div", { className: "crq-list-header", children: [
              /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search pending approvals..." }),
              /* @__PURE__ */ jsx("span", { className: "bg bg-re", style: { flexShrink: 0 }, children: "8 pending" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "crq-list-scr", ref: approvalListRef })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "split-detail", ref: approvalDetailRef })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: `page${activePage === "cabsessions" ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "mx", children: [
            /* @__PURE__ */ jsxs("div", { className: "mc bl", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Active CRQs" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "12" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "In sessions" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc am", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Delegated" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "3" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "Pending CTO/COH" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc re", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Escalated" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "2" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "L2 escalation" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc re", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Rejected" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "5" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "This cycle" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "tabs", style: { background: "var(--wh)", borderBottom: "1px solid var(--bd)" }, children: [
            /* @__PURE__ */ jsx("div", { className: `tab${cabTab === "cab-my" ? " on" : ""}`, onClick: () => setCabTab("cab-my"), children: "My Sessions" }),
            /* @__PURE__ */ jsx("div", { className: `tab${cabTab === "cab-all" ? " on" : ""}`, onClick: () => setCabTab("cab-all"), children: "All Sessions" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "scrollable", children: [
            /* @__PURE__ */ jsxs("div", { style: { display: cabTab === "cab-my" ? "" : "none" }, children: [
              /* @__PURE__ */ jsxs("div", { className: "alert a-info", style: { marginTop: "4px" }, children: [
                /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", style: { flexShrink: 0, marginTop: "1px" }, children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
                ] }),
                "MS Teams invite sent for CAB-031 at 10:00 AM. Join button activates at meeting time."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", style: { marginBottom: "14px" }, children: [
                /* @__PURE__ */ jsx("div", { style: { padding: "14px 16px", borderBottom: "1px solid var(--bd2)" }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }, children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { style: { fontSize: "14px", fontWeight: 600, marginBottom: "3px" }, children: "CAB Session — CAB-031" }),
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap", fontSize: "12px", color: "var(--tx2)" }, children: [
                      /* @__PURE__ */ jsx("span", { children: "Mar 26, 2026 · 10:00 AM" }),
                      /* @__PURE__ */ jsx("span", { children: "·" }),
                      /* @__PURE__ */ jsx("span", { className: "bg bg-pu", children: "CAB Approval" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "6px", flexShrink: 0 }, children: [
                    /* @__PURE__ */ jsx("button", { className: "btn btn-p", onClick: () => openModal("m-cab-session"), children: "Join Session" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "···" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { style: { padding: "0" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { padding: "9px 16px", background: "var(--bd2)", fontSize: "11px", fontWeight: 600, color: "var(--tx2)", textTransform: "uppercase", letterSpacing: ".05em", display: "flex", gap: "12px" }, children: [
                    /* @__PURE__ */ jsx("span", { style: { width: "90px" }, children: "CRQ ID" }),
                    /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: "Activity" }),
                    /* @__PURE__ */ jsx("span", { style: { width: "80px" }, children: "Domain" }),
                    /* @__PURE__ */ jsx("span", { style: { width: "70px" }, children: "SLA" }),
                    /* @__PURE__ */ jsx("span", { style: { width: "90px" }, children: "Status" })
                  ] }),
                  [
                    { id: "CRQ-001", act: "Link Upgrade (MPLS)", dom: "IP Core", domCls: "bg-bl", sla: 85, slaCls: "s-re", slaColor: "var(--re)" },
                    { id: "CMC-031", act: "GPON Config", dom: "PVoIcc", domCls: "bg-te", sla: 45, slaCls: "s-am", slaColor: "var(--am)" },
                    { id: "CMP-023", act: "BGP Change", dom: "IP Core", domCls: "bg-bl", sla: 60, slaCls: "s-gr", slaColor: "var(--gr)" }
                  ].map((row, i, arr) => /* @__PURE__ */ jsxs("div", { style: { padding: "10px 16px", borderBottom: i < arr.length - 1 ? "1px solid var(--bd2)" : "none", display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", cursor: "pointer" }, onClick: () => openModal("m-cab-session"), children: [
                    /* @__PURE__ */ jsx("span", { style: { width: "90px", fontFamily: "'DM Mono'", fontSize: "12px", fontWeight: 500, color: "var(--ac)" }, children: row.id }),
                    /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: row.act }),
                    /* @__PURE__ */ jsx("span", { style: { width: "80px" }, children: /* @__PURE__ */ jsx("span", { className: `bg ${row.domCls}`, children: row.dom }) }),
                    /* @__PURE__ */ jsx("span", { style: { width: "70px" }, children: /* @__PURE__ */ jsxs("div", { className: "sla", children: [
                      /* @__PURE__ */ jsx("div", { className: "slabg", children: /* @__PURE__ */ jsx("div", { className: `slaf ${row.slaCls}`, style: { width: `${row.sla}%` } }) }),
                      /* @__PURE__ */ jsxs("span", { className: "slap", style: { color: row.slaColor, fontSize: "10px" }, children: [
                        row.sla,
                        "%"
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx("span", { style: { width: "90px" }, children: /* @__PURE__ */ jsx("span", { className: "bg bg-am", children: "In Review" }) })
                  ] }, row.id))
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { padding: "12px 16px", background: "var(--bd2)", borderTop: "1px solid var(--bd2)", display: "flex", alignItems: "center", gap: "14px" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { fontSize: "12px", color: "var(--tx2)" }, children: [
                    "Quorum: ",
                    /* @__PURE__ */ jsx("b", { children: "2/5" }),
                    " votes · Mandatory: ",
                    /* @__PURE__ */ jsx("b", { children: "1/2" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsx("div", { className: "qbar", children: /* @__PURE__ */ jsx("div", { className: "qfill", style: { width: "40%" } }) }) }),
                  /* @__PURE__ */ jsx("span", { className: "bg bg-am", children: "Waiting for Quorum" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", style: { opacity: 0.72, marginBottom: "14px" }, children: [
                /* @__PURE__ */ jsx("div", { style: { padding: "14px 16px", borderBottom: "1px solid var(--bd2)" }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between" }, children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { style: { fontSize: "14px", fontWeight: 600, marginBottom: "3px" }, children: "CAB Session — CAB-030" }),
                    /* @__PURE__ */ jsxs("div", { style: { fontSize: "12px", color: "var(--tx2)" }, children: [
                      "Mar 25, 2026 · 2:00 PM · ",
                      /* @__PURE__ */ jsx("span", { className: "bg bg-gr", style: { fontSize: "10px" }, children: "Completed" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "View Details" })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { style: { padding: "9px 16px", background: "var(--bd2)", fontSize: "11px", fontWeight: 600, color: "var(--tx2)", textTransform: "uppercase", letterSpacing: ".05em", display: "flex", gap: "12px" }, children: [
                  /* @__PURE__ */ jsx("span", { style: { width: "90px" }, children: "CRQ ID" }),
                  /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: "Activity" }),
                  /* @__PURE__ */ jsx("span", { style: { width: "80px" }, children: "Domain" }),
                  /* @__PURE__ */ jsx("span", { style: { width: "100px" }, children: "Decision" })
                ] }),
                [{ id: "CRQ-005", act: "Router Upgrade", dom: "Embedded", domCls: "bg-pu" }, { id: "CRQ-006", act: "MPLS Reroute", dom: "IP Core", domCls: "bg-bl" }].map((row, i, arr) => /* @__PURE__ */ jsxs("div", { style: { padding: "10px 16px", borderBottom: i < arr.length - 1 ? "1px solid var(--bd2)" : "none", display: "flex", alignItems: "center", gap: "12px", fontSize: "13px" }, children: [
                  /* @__PURE__ */ jsx("span", { style: { width: "90px", fontFamily: "'DM Mono'", fontSize: "12px", color: "var(--tx2)" }, children: row.id }),
                  /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: row.act }),
                  /* @__PURE__ */ jsx("span", { style: { width: "80px" }, children: /* @__PURE__ */ jsx("span", { className: `bg ${row.domCls}`, children: row.dom }) }),
                  /* @__PURE__ */ jsx("span", { style: { width: "100px" }, children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Approved" }) })
                ] }, row.id))
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { style: { display: cabTab === "cab-all" ? "" : "none" }, children: /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("th", { children: "Session ID" }),
                /* @__PURE__ */ jsx("th", { children: "Scheduled" }),
                /* @__PURE__ */ jsx("th", { children: "CRQs" }),
                /* @__PURE__ */ jsx("th", { children: "Quorum" }),
                /* @__PURE__ */ jsx("th", { children: "Status" }),
                /* @__PURE__ */ jsx("th", { children: "Decision" }),
                /* @__PURE__ */ jsx("th", { children: "Action" })
              ] }) }),
              /* @__PURE__ */ jsxs("tbody", { children: [
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: "CAB-031" }),
                  /* @__PURE__ */ jsx("td", { children: "Mar 26 10:00 AM" }),
                  /* @__PURE__ */ jsx("td", { children: "3" }),
                  /* @__PURE__ */ jsx("td", { children: "2/5" }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-am", children: "In Progress" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gy", children: "Pending" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-s", onClick: () => openModal("m-cab-session"), children: "Join" }) })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: "CAB-030" }),
                  /* @__PURE__ */ jsx("td", { children: "Mar 25 2:00 PM" }),
                  /* @__PURE__ */ jsx("td", { children: "2" }),
                  /* @__PURE__ */ jsx("td", { children: "5/5" }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Completed" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Approved" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "View" }) })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: "CAB-029" }),
                  /* @__PURE__ */ jsx("td", { children: "Mar 24 11:00 AM" }),
                  /* @__PURE__ */ jsx("td", { children: "4" }),
                  /* @__PURE__ */ jsx("td", { children: "4/5" }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Completed" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-re", children: "Rejected" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "View" }) })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: "CAB-028" }),
                  /* @__PURE__ */ jsx("td", { children: "Mar 22 9:00 AM" }),
                  /* @__PURE__ */ jsx("td", { children: "1" }),
                  /* @__PURE__ */ jsx("td", { children: "5/5" }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Completed" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-am", children: "Deferred" }) }),
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "View" }) })
                ] })
              ] })
            ] }) }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `page${activePage === "cabplanning" ? " on" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "scrollable", children: [
          /* @__PURE__ */ jsxs("div", { className: "alert a-warn", children: [
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", style: { flexShrink: 0, marginTop: "1px" }, children: [
              /* @__PURE__ */ jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
            ] }),
            "5 CRQs are ready for CAB session planning. All have completed Authorization, Impact Validation, and MOP approval."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsxs("div", { className: "ch", children: [
              /* @__PURE__ */ jsx("div", { className: "ct", children: "Waiting Queue — Ready for CAB" }),
              /* @__PURE__ */ jsx("button", { className: "btn btn-p", onClick: () => openModal("m-plan-session"), children: "Plan CAB Session" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("th", { children: /* @__PURE__ */ jsx("input", { type: "checkbox", style: { width: "13px", padding: "0" } }) }),
                /* @__PURE__ */ jsx("th", { children: "CRQ ID" }),
                /* @__PURE__ */ jsx("th", { children: "Activity" }),
                /* @__PURE__ */ jsx("th", { children: "Domain" }),
                /* @__PURE__ */ jsx("th", { children: "Circle" }),
                /* @__PURE__ */ jsx("th", { children: "Impact" }),
                /* @__PURE__ */ jsx("th", { children: "Scheduled" }),
                /* @__PURE__ */ jsx("th", { children: "Status" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: [
                { id: "CRQ-001", act: "Link Upgrade", dom: "IP Core", domCls: "bg-bl", circle: "GJ", impact: "SA", sched: "Mar 26", status: "Active" },
                { id: "CRQ-002", act: "GPON Config", dom: "Optics", domCls: "bg-te", circle: "MH", impact: "NSA", sched: "Mar 27", status: "NSA Hold" },
                { id: "CRQ-003", act: "BGP Change", dom: "Packet", domCls: "bg-gy", circle: "DL", impact: "SA", sched: "Mar 28", status: "Active" },
                { id: "CRQ-004", act: "Router Upgrade", dom: "Embedded", domCls: "bg-pu", circle: "RJ", impact: "NSA", sched: "Mar 29", status: "Active" },
                { id: "CRQ-005", act: "MPLS Reroute", dom: "IP Core", domCls: "bg-bl", circle: "KA", impact: "SA", sched: "Mar 30", status: "Active" }
              ].map((row) => /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("input", { type: "checkbox", style: { width: "13px", padding: "0" } }) }),
                /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px", color: "var(--ac)" }, children: row.id }),
                /* @__PURE__ */ jsx("td", { children: row.act }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: `bg ${row.domCls}`, children: row.dom }) }),
                /* @__PURE__ */ jsx("td", { children: row.circle }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: `bg ${row.impact === "SA" ? "bg-re" : "bg-gy"}`, children: row.impact }) }),
                /* @__PURE__ */ jsx("td", { children: row.sched }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: `bg ${row.status === "Active" ? "bg-gr" : "bg-am"}`, children: row.status }) })
              ] }, row.id)) })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: `page${activePage === "analytics" ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "mx", children: [
            /* @__PURE__ */ jsxs("div", { className: "mc bl", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Total CRQs (Month)" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "127" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "↑ 14% vs last month" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc te", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Avg Approval TAT" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "14h" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "↓ 2h improvement" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc am", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "SLA Compliance" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "87%" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "Target: 95%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mc re", children: [
              /* @__PURE__ */ jsx("div", { className: "mc-lbl", children: "Rejection Rate" }),
              /* @__PURE__ */ jsx("div", { className: "mc-v", children: "12%" }),
              /* @__PURE__ */ jsx("div", { className: "mc-s", children: "↑ 3% increase" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "scrollable", children: /* @__PURE__ */ jsxs("div", { className: "g2", style: { marginBottom: "14px" }, children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "ch", children: /* @__PURE__ */ jsx("div", { className: "ct", children: "SLA Indicator System" }) }),
              /* @__PURE__ */ jsx("div", { className: "cb", style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
                { color: "#16a34a", label: "Green — On Track", sub: "More than 50% time remaining", cls: "s-gr", w: "70%" },
                { color: "#d97706", label: "Amber — Monitor", sub: "Less than 50% remaining", cls: "s-am", w: "40%" },
                { color: "#dc2626", label: "Red — Near Breach", sub: "Critical threshold exceeded", cls: "s-re", w: "85%" },
                { color: "#9ca3af", label: "Breached — Auto-escalated", sub: "SLA crossed · L1→L2→L3 escalation", cls: "s-br", w: "100%" }
              ].map((row) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: "10px", height: "10px", borderRadius: "50%", background: row.color, flexShrink: 0 } }),
                /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ jsx("div", { style: { fontSize: "12px", fontWeight: 500 }, children: row.label }),
                  /* @__PURE__ */ jsx("div", { style: { fontSize: "11px", color: "var(--tx2)" }, children: row.sub })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "slabg", style: { width: "72px" }, children: /* @__PURE__ */ jsx("div", { className: `slaf ${row.cls}`, style: { width: row.w } }) })
              ] }, row.label)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "ch", children: /* @__PURE__ */ jsx("div", { className: "ct", children: "CRQ Volume by Domain" }) }),
              /* @__PURE__ */ jsx("div", { className: "cb", style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
                { label: "IP Core", val: 38, color: "#2563eb", w: "80%" },
                { label: "Embedded", val: 31, color: "#7c3aed", w: "65%" },
                { label: "Optics", val: 29, color: "#0d9488", w: "61%" },
                { label: "Packet", val: 29, color: "#d97706", w: "61%" }
              ].map((row) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "3px" }, children: [
                  /* @__PURE__ */ jsx("span", { children: row.label }),
                  /* @__PURE__ */ jsx("span", { style: { fontWeight: 600 }, children: row.val })
                ] }),
                /* @__PURE__ */ jsx("div", { style: { background: "#e5e7eb", borderRadius: "3px", height: "8px" }, children: /* @__PURE__ */ jsx("div", { style: { background: row.color, width: row.w, height: "100%", borderRadius: "3px" } }) })
              ] }, row.label)) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `page${activePage === "admin" ? " on" : ""}`, children: [
          /* @__PURE__ */ jsx("div", { className: "tabs", style: { background: "var(--wh)", borderBottom: "1px solid var(--bd)", padding: "0 16px" }, children: [
            { id: "adm-approvers", label: "Approver Config" },
            { id: "adm-sla", label: "SLA Config" },
            { id: "adm-rejection", label: "Rejection Reasons" },
            { id: "adm-escalation", label: "Escalation Matrix" },
            { id: "adm-users", label: "Users & Roles" }
          ].map((t) => /* @__PURE__ */ jsx("div", { className: `tab${admTab === t.id ? " on" : ""}`, onClick: () => setAdmTab(t.id), children: t.label }, t.id)) }),
          /* @__PURE__ */ jsxs("div", { className: "scrollable", children: [
            /* @__PURE__ */ jsxs("div", { style: { display: admTab === "adm-approvers" ? "" : "none" }, children: [
              /* @__PURE__ */ jsxs("div", { className: "card", style: { marginBottom: "14px" }, children: [
                /* @__PURE__ */ jsxs("div", { className: "ch", children: [
                  /* @__PURE__ */ jsx("div", { className: "ct", children: "Approver Master Configuration" }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
                    /* @__PURE__ */ jsxs("select", { style: { fontSize: "12px", padding: "5px 9px", border: "1px solid var(--bd)", borderRadius: "7px", fontFamily: "inherit" }, children: [
                      /* @__PURE__ */ jsx("option", { children: "All Roles" }),
                      /* @__PURE__ */ jsx("option", { children: "CTO" }),
                      /* @__PURE__ */ jsx("option", { children: "COH" }),
                      /* @__PURE__ */ jsx("option", { children: "Manager" })
                    ] }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-p", onClick: () => openModal("m-add-approver"), children: "+ Add Approver" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "Name" }),
                    /* @__PURE__ */ jsx("th", { children: "OLM ID" }),
                    /* @__PURE__ */ jsx("th", { children: "Role" }),
                    /* @__PURE__ */ jsx("th", { children: "Approval Levels" }),
                    /* @__PURE__ */ jsx("th", { children: "Domains" }),
                    /* @__PURE__ */ jsx("th", { children: "Circles" }),
                    /* @__PURE__ */ jsx("th", { children: "Delegation" }),
                    /* @__PURE__ */ jsx("th", { children: "Status" }),
                    /* @__PURE__ */ jsx("th", {})
                  ] }) }),
                  /* @__PURE__ */ jsx("tbody", { children: [
                    { init: "AV", name: "Amit Verma", olm: "amver01", role: "CTO", roleCls: "bg-pu", level: "L4", domains: "All", circles: "All", deleg: true, active: true },
                    { init: "PD", name: "Priya Deshmukh", olm: "prdesh02", role: "COH", roleCls: "bg-bl", level: "L4", domains: "Optics", circles: "MH, GJ", deleg: true, active: true },
                    { init: "RS", name: "Rahul Sharma", olm: "sharra79", role: "Manager", roleCls: "bg-te", level: "L1, L2", domains: "Embedded", circles: "KA", deleg: false, active: true },
                    { init: "SN", name: "Sheha Nair", olm: "nairsh04", role: "Engineer", roleCls: "bg-gy", level: "L1", domains: "WB", circles: "WB", deleg: false, active: false }
                  ].map((row) => /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "26px", height: "26px", borderRadius: "50%", background: "var(--pu-s)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600 }, children: row.init }),
                      /* @__PURE__ */ jsx("span", { style: { fontWeight: 500 }, children: row.name })
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: row.olm }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: `bg ${row.roleCls}`, children: row.role }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gy", children: row.level }) }),
                    /* @__PURE__ */ jsx("td", { children: row.domains }),
                    /* @__PURE__ */ jsx("td", { children: row.circles }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: `bg ${row.deleg ? "bg-gr" : "bg-am"}`, children: row.deleg ? "Yes" : "No" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: `bg ${row.active ? "bg-gr" : "bg-re"}`, children: row.active ? "Active" : "Inactive" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: row.active ? "···" : "Activate" }) })
                  ] }, row.olm)) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "ch", children: /* @__PURE__ */ jsx("div", { className: "ct", children: "Approval Level Definitions" }) }),
                /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "Level" }),
                    /* @__PURE__ */ jsx("th", { children: "Typical Meaning" }),
                    /* @__PURE__ */ jsx("th", { children: "Roles Mapped" }),
                    /* @__PURE__ */ jsx("th", { children: "Default SLA" }),
                    /* @__PURE__ */ jsx("th", { children: "Configurable" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("tbody", { children: [
                    /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gy", children: "L1" }) }),
                      /* @__PURE__ */ jsx("td", { children: "First-level operational approval" }),
                      /* @__PURE__ */ jsx("td", { children: "Engineer, NOC" }),
                      /* @__PURE__ */ jsx("td", { children: "8 hrs" }),
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Yes" }) })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-bl", children: "L2" }) }),
                      /* @__PURE__ */ jsx("td", { children: "Domain Lead / senior engineer" }),
                      /* @__PURE__ */ jsx("td", { children: "Domain SPOC, CAB" }),
                      /* @__PURE__ */ jsx("td", { children: "12 hrs" }),
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Yes" }) })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-te", children: "L3" }) }),
                      /* @__PURE__ */ jsx("td", { children: "Management / escalation" }),
                      /* @__PURE__ */ jsx("td", { children: "Manager" }),
                      /* @__PURE__ */ jsx("td", { children: "16 hrs" }),
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Yes" }) })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-pu", children: "L4" }) }),
                      /* @__PURE__ */ jsx("td", { children: "Top-level authority" }),
                      /* @__PURE__ */ jsx("td", { children: "CTO, COH" }),
                      /* @__PURE__ */ jsx("td", { children: "24 hrs" }),
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Yes" }) })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { style: { padding: "10px 16px", borderTop: "1px solid var(--bd2)" }, children: /* @__PURE__ */ jsx("div", { className: "alert a-info", style: { margin: "0", fontSize: "11px" }, children: "CTO/COH are configurable at any level. Hardcoding CTO = L4 is explicitly avoided in the system design." }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { style: { display: admTab === "adm-sla" ? "" : "none" }, children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsxs("div", { className: "ch", children: [
                /* @__PURE__ */ jsx("div", { className: "ct", children: "SLA Configuration by Stage" }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p", children: "+ Add Rule" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { children: "Stage" }),
                  /* @__PURE__ */ jsx("th", { children: "SLA Hours" }),
                  /* @__PURE__ */ jsx("th", { children: "Warning Threshold" }),
                  /* @__PURE__ */ jsx("th", { children: "Critical Threshold" }),
                  /* @__PURE__ */ jsx("th", { children: "Status" }),
                  /* @__PURE__ */ jsx("th", { children: "Action" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: "Authorization Approval" }),
                    /* @__PURE__ */ jsx("td", { children: "24 hrs" }),
                    /* @__PURE__ */ jsx("td", { children: "50%" }),
                    /* @__PURE__ */ jsx("td", { children: "80%" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: "Stakeholder Approvals" }),
                    /* @__PURE__ */ jsx("td", { children: "12 hrs" }),
                    /* @__PURE__ */ jsx("td", { children: "50%" }),
                    /* @__PURE__ */ jsx("td", { children: "80%" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: "CAB Approval" }),
                    /* @__PURE__ */ jsx("td", { children: "48 hrs" }),
                    /* @__PURE__ */ jsx("td", { children: "40%" }),
                    /* @__PURE__ */ jsx("td", { children: "75%" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: "MOP Validation" }),
                    /* @__PURE__ */ jsx("td", { children: "8 hrs" }),
                    /* @__PURE__ */ jsx("td", { children: "50%" }),
                    /* @__PURE__ */ jsx("td", { children: "80%" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] })
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { style: { display: admTab === "adm-rejection" ? "" : "none" }, children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsxs("div", { className: "ch", children: [
                /* @__PURE__ */ jsx("div", { className: "ct", children: "Rejection Reason Configuration" }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p", children: "+ Add Reason" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { children: "Stage" }),
                  /* @__PURE__ */ jsx("th", { children: "Reason" }),
                  /* @__PURE__ */ jsx("th", { children: "Mandatory Comments" }),
                  /* @__PURE__ */ jsx("th", { children: "Status" }),
                  /* @__PURE__ */ jsx("th", { children: "Action" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: "All Stages" }),
                    /* @__PURE__ */ jsx("td", { children: "Implementation Window Overlap" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Yes" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: "Authorization" }),
                    /* @__PURE__ */ jsx("td", { children: "Incorrect Approval Mapping" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Yes" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: "CAB Approval" }),
                    /* @__PURE__ */ jsx("td", { children: "Conflicting Change" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Yes" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] })
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { style: { display: admTab === "adm-escalation" ? "" : "none" }, children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsxs("div", { className: "ch", children: [
                /* @__PURE__ */ jsx("div", { className: "ct", children: "Escalation Matrix" }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p", children: "+ Add Level" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { children: "Level" }),
                  /* @__PURE__ */ jsx("th", { children: "Trigger" }),
                  /* @__PURE__ */ jsx("th", { children: "Escalate To" }),
                  /* @__PURE__ */ jsx("th", { children: "Channel" }),
                  /* @__PURE__ */ jsx("th", { children: "Delay" }),
                  /* @__PURE__ */ jsx("th", { children: "Status" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gy", children: "L1" }) }),
                    /* @__PURE__ */ jsx("td", { children: "SLA Breach" }),
                    /* @__PURE__ */ jsx("td", { children: "Domain Manager" }),
                    /* @__PURE__ */ jsx("td", { children: "Email + Portal" }),
                    /* @__PURE__ */ jsx("td", { children: "Immediate" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-bl", children: "L2" }) }),
                    /* @__PURE__ */ jsx("td", { children: "L1 No Response" }),
                    /* @__PURE__ */ jsx("td", { children: "Circle Manager" }),
                    /* @__PURE__ */ jsx("td", { children: "Email + Portal" }),
                    /* @__PURE__ */ jsx("td", { children: "+2 hrs" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-te", children: "L3" }) }),
                    /* @__PURE__ */ jsx("td", { children: "L2 No Response" }),
                    /* @__PURE__ */ jsx("td", { children: "NOC Head" }),
                    /* @__PURE__ */ jsx("td", { children: "Email + SMS" }),
                    /* @__PURE__ */ jsx("td", { children: "+4 hrs" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) })
                  ] })
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { style: { display: admTab === "adm-users" ? "" : "none" }, children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsxs("div", { className: "ch", children: [
                /* @__PURE__ */ jsx("div", { className: "ct", children: "Users & Role Management" }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
                  /* @__PURE__ */ jsx("input", { placeholder: "Search users...", style: { fontSize: "12px", padding: "5px 10px", border: "1px solid var(--bd)", borderRadius: "7px", fontFamily: "inherit", width: "180px" } }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-p", children: "+ Add User" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "tw", children: /* @__PURE__ */ jsxs("table", { children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { children: "Name" }),
                  /* @__PURE__ */ jsx("th", { children: "OLM ID" }),
                  /* @__PURE__ */ jsx("th", { children: "Role" }),
                  /* @__PURE__ */ jsx("th", { children: "Domain" }),
                  /* @__PURE__ */ jsx("th", { children: "Last Active" }),
                  /* @__PURE__ */ jsx("th", { children: "Status" }),
                  /* @__PURE__ */ jsx("th", { children: "Action" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "26px", height: "26px", borderRadius: "50%", background: "var(--pu-s)", color: "var(--pu)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600 }, children: "AV" }),
                      "Amit Verma"
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: "amver01" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-pu", children: "CTO" }) }),
                    /* @__PURE__ */ jsx("td", { children: "All" }),
                    /* @__PURE__ */ jsx("td", { children: "Today" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "26px", height: "26px", borderRadius: "50%", background: "var(--ac-s)", color: "var(--ac)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600 }, children: "PD" }),
                      "Priya Deshmukh"
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: "prdesh02" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-bl", children: "COH" }) }),
                    /* @__PURE__ */ jsx("td", { children: "Optics" }),
                    /* @__PURE__ */ jsx("td", { children: "Today" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gr", children: "Active" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Edit" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: "26px", height: "26px", borderRadius: "50%", background: "var(--bd2)", color: "var(--tx2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600 }, children: "SN" }),
                      "Sheha Nair"
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { style: { fontFamily: "'DM Mono'", fontSize: "11px" }, children: "nairsh04" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-gy", children: "Engineer" }) }),
                    /* @__PURE__ */ jsx("td", { children: "WB" }),
                    /* @__PURE__ */ jsx("td", { children: "5 days ago" }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-re", children: "Inactive" }) }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn btn-s", children: "Activate" }) })
                  ] })
                ] })
              ] }) })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `mbg${activeModal === "m-approve" ? " open" : ""}`, onClick: (e) => {
      if (e.target === e.currentTarget) closeModal();
    }, children: /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mh", children: [
        /* @__PURE__ */ jsx("div", { className: "mt", children: "Approve CRQ" }),
        /* @__PURE__ */ jsx("div", { className: "mx-btn", onClick: closeModal, children: "×" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb", children: [
        /* @__PURE__ */ jsxs("div", { style: { background: "var(--bg)", borderRadius: "8px", padding: "12px", marginBottom: "14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12px" }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "CRQ ID" }),
            /* @__PURE__ */ jsx("div", { style: { fontFamily: "'DM Mono'", fontWeight: 500 }, children: selectedCrq?.id || "CRQ-001" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "Approver" }),
            /* @__PURE__ */ jsx("div", { style: { fontWeight: 500 }, children: "Amit Verma" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "Domain" }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "bg bg-bl", children: "IP Core" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "OLM ID" }),
            /* @__PURE__ */ jsx("div", { style: { fontFamily: "'DM Mono'" }, children: "A1L575DH" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Comments (Optional)" }),
          /* @__PURE__ */ jsx("textarea", { rows: 3, placeholder: "Add your comments..." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mf", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-s", onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-ok", onClick: () => {
          closeModal();
          showToast("CRQ approved successfully");
        }, children: "✓ Confirm Approval" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `mbg${activeModal === "m-reject" ? " open" : ""}`, onClick: (e) => {
      if (e.target === e.currentTarget) closeModal();
    }, children: /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mh", children: [
        /* @__PURE__ */ jsx("div", { className: "mt", children: "Reject CRQ" }),
        /* @__PURE__ */ jsx("div", { className: "mx-btn", onClick: closeModal, children: "×" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb", children: [
        /* @__PURE__ */ jsxs("div", { style: { background: "var(--bg)", borderRadius: "8px", padding: "12px", marginBottom: "14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12px" }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "CRQ ID" }),
            /* @__PURE__ */ jsx("div", { style: { fontFamily: "'DM Mono'", fontWeight: 500 }, children: "CRQ-001" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "Approver" }),
            /* @__PURE__ */ jsx("div", { style: { fontWeight: 500 }, children: "Amit Verma" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Reason for Rejection *" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "— Select reason —" }),
            /* @__PURE__ */ jsx("option", { children: "Implementation Window Overlap" }),
            /* @__PURE__ */ jsx("option", { children: "Incorrect Approval Mapping" }),
            /* @__PURE__ */ jsx("option", { children: "Conflicting Change" }),
            /* @__PURE__ */ jsx("option", { children: "Insufficient Impact Analysis" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Additional Comments * (Mandatory)" }),
          /* @__PURE__ */ jsx("textarea", { rows: 3, placeholder: "Provide detailed rejection reason..." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mf", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-s", onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-no", onClick: () => {
          closeModal();
          showToast("CRQ rejected and status updated");
        }, children: "✗ Confirm Rejection" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `mbg${activeModal === "m-delegate" ? " open" : ""}`, onClick: (e) => {
      if (e.target === e.currentTarget) closeModal();
    }, children: /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mh", children: [
        /* @__PURE__ */ jsx("div", { className: "mt", children: "Delegate Change" }),
        /* @__PURE__ */ jsx("div", { className: "mx-btn", onClick: closeModal, children: "×" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb", children: [
        /* @__PURE__ */ jsxs("div", { style: { background: "var(--bg)", borderRadius: "8px", padding: "12px", marginBottom: "14px", fontSize: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "Delegator" }),
            /* @__PURE__ */ jsx("div", { style: { fontWeight: 500 }, children: "Anil Kumar" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { color: "var(--tx3)", marginBottom: "2px" }, children: "OLM ID" }),
            /* @__PURE__ */ jsx("div", { style: { fontFamily: "'DM Mono'" }, children: "A1D389FG" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Delegate To *" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "— Select approver —" }),
            /* @__PURE__ */ jsx("option", { children: "Suresh Sharma" }),
            /* @__PURE__ */ jsx("option", { children: "Priya Deshmukh" }),
            /* @__PURE__ */ jsx("option", { children: "Rahul Sharma" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "16px", marginBottom: "12px" }, children: [
          /* @__PURE__ */ jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }, children: [
            /* @__PURE__ */ jsx("input", { type: "radio", name: "dt", defaultChecked: true }),
            " Permanent"
          ] }),
          /* @__PURE__ */ jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }, children: [
            /* @__PURE__ */ jsx("input", { type: "radio", name: "dt" }),
            " Time-Based"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "Start Date" }),
            /* @__PURE__ */ jsx("input", { type: "date" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "End Date" }),
            /* @__PURE__ */ jsx("input", { type: "date" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mf", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-s", onClick: closeModal, children: "Close" }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-p", onClick: () => {
          closeModal();
          showToast("Delegation sent for CTO/COH approval");
        }, children: "✓ Confirm" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `mbg${activeModal === "m-cab-session" ? " open" : ""}`, onClick: (e) => {
      if (e.target === e.currentTarget) closeModal();
    }, children: /* @__PURE__ */ jsxs("div", { className: "modal", style: { width: "500px" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "mh", children: [
        /* @__PURE__ */ jsx("div", { className: "mt", children: "CAB Session — CAB-031" }),
        /* @__PURE__ */ jsx("div", { className: "mx-btn", onClick: closeModal, children: "×" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb", children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }, children: [
          /* @__PURE__ */ jsxs("div", { style: { background: "var(--bg)", padding: "12px", borderRadius: "8px" }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "11px", color: "var(--tx3)", fontWeight: 500, marginBottom: "8px" }, children: "CRQ Information" }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "CRQ ID" }),
                /* @__PURE__ */ jsx("span", { style: { fontFamily: "'DM Mono'" }, children: "CRQ-001" })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Domain" }),
                /* @__PURE__ */ jsx("span", { className: "bg bg-bl", style: { fontSize: "10px" }, children: "IP Core" })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Circle" }),
                /* @__PURE__ */ jsx("span", { children: "GJ" })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "SLA" }),
                /* @__PURE__ */ jsx("span", { style: { color: "var(--re)", fontWeight: 600 }, children: "8%" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { background: "var(--bg)", padding: "12px", borderRadius: "8px" }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "11px", color: "var(--tx3)", fontWeight: 500, marginBottom: "8px" }, children: "Quorum Status" }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Required" }),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 600 }, children: "5" })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Received" }),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 600 }, children: "2" })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--tx2)" }, children: "Mandatory" }),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 600 }, children: "1/2" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "qbar", children: /* @__PURE__ */ jsx("div", { className: "qfill", style: { width: "40%" } }) }),
            /* @__PURE__ */ jsx("span", { className: "bg bg-am", children: "Waiting for Quorum" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
          /* @__PURE__ */ jsx("button", { className: "btn btn-ok", style: { flex: 1 }, onClick: () => {
            closeModal();
            showToast("Vote recorded: Approved");
          }, children: "✓ Approve" }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-no", style: { flex: 1 }, onClick: () => {
            closeModal();
            openModal("m-reject");
          }, children: "— Reject" }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-warn", style: { flex: 1 }, onClick: () => {
            closeModal();
            showToast("Vote recorded: Deferred");
          }, children: "↻ Defer" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `mbg${activeModal === "m-plan-session" ? " open" : ""}`, onClick: (e) => {
      if (e.target === e.currentTarget) closeModal();
    }, children: /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mh", children: [
        /* @__PURE__ */ jsx("div", { className: "mt", children: "Plan CAB Session" }),
        /* @__PURE__ */ jsx("div", { className: "mx-btn", onClick: closeModal, children: "×" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb", children: [
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Session Date & Time *" }),
          /* @__PURE__ */ jsx("input", { type: "datetime-local" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Session Type" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "CAB Approval" }),
            /* @__PURE__ */ jsx("option", { children: "Emergency CAB" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Quorum Requirement" }),
          /* @__PURE__ */ jsx("input", { type: "number", defaultValue: 5, min: 1 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Notes / Agenda" }),
          /* @__PURE__ */ jsx("textarea", { rows: 2, placeholder: "Add agenda..." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "alert a-info", style: { margin: "0", fontSize: "11px" }, children: [
          /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", style: { flexShrink: 0, marginTop: "1px" }, children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
            /* @__PURE__ */ jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
            /* @__PURE__ */ jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
            /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
          ] }),
          "MS Teams meeting will be auto-created and invites sent."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mf", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-s", onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-p", onClick: () => {
          closeModal();
          showToast("CAB session planned · MS Teams invite sent");
        }, children: "Create Session" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `mbg${activeModal === "m-new-crq" ? " open" : ""}`, onClick: (e) => {
      if (e.target === e.currentTarget) closeModal();
    }, children: /* @__PURE__ */ jsxs("div", { className: "modal", style: { width: "500px" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "mh", children: [
        /* @__PURE__ */ jsx("div", { className: "mt", children: "New Change Request" }),
        /* @__PURE__ */ jsx("div", { className: "mx-btn", onClick: closeModal, children: "×" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb", children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "Activity Title *" }),
            /* @__PURE__ */ jsx("input", { placeholder: "e.g. Link Upgrade" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "Domain *" }),
            /* @__PURE__ */ jsxs("select", { children: [
              /* @__PURE__ */ jsx("option", { children: "IP Core" }),
              /* @__PURE__ */ jsx("option", { children: "Optics" }),
              /* @__PURE__ */ jsx("option", { children: "Packet" }),
              /* @__PURE__ */ jsx("option", { children: "Embedded" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "Circle *" }),
            /* @__PURE__ */ jsxs("select", { children: [
              /* @__PURE__ */ jsx("option", { children: "GJ" }),
              /* @__PURE__ */ jsx("option", { children: "MH" }),
              /* @__PURE__ */ jsx("option", { children: "KA" }),
              /* @__PURE__ */ jsx("option", { children: "DL" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "Technology *" }),
            /* @__PURE__ */ jsxs("select", { children: [
              /* @__PURE__ */ jsx("option", { children: "MPLS" }),
              /* @__PURE__ */ jsx("option", { children: "BGP" }),
              /* @__PURE__ */ jsx("option", { children: "GPON" }),
              /* @__PURE__ */ jsx("option", { children: "Router" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "Impact" }),
            /* @__PURE__ */ jsxs("select", { children: [
              /* @__PURE__ */ jsx("option", { children: "SA (Service Affecting)" }),
              /* @__PURE__ */ jsx("option", { children: "NSA" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
            /* @__PURE__ */ jsx("label", { className: "fl", children: "Scheduled Date *" }),
            /* @__PURE__ */ jsx("input", { type: "date" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Maintenance Window *" }),
          /* @__PURE__ */ jsx("input", { placeholder: "e.g. 03:00 – 05:00" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Hostname / Node" }),
          /* @__PURE__ */ jsx("input", { placeholder: "e.g. RTR-BLR01" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mf", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-s", onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-p", onClick: () => {
          closeModal();
          showToast("CRQ submitted · Routed for Authorization approval");
        }, children: "Submit CRQ" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `mbg${activeModal === "m-add-approver" ? " open" : ""}`, onClick: (e) => {
      if (e.target === e.currentTarget) closeModal();
    }, children: /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mh", children: [
        /* @__PURE__ */ jsx("div", { className: "mt", children: "Add Approver" }),
        /* @__PURE__ */ jsx("div", { className: "mx-btn", onClick: closeModal, children: "×" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb", children: /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Full Name *" }),
          /* @__PURE__ */ jsx("input", { placeholder: "Full name" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "OLM ID *" }),
          /* @__PURE__ */ jsx("input", { placeholder: "e.g. user01" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Role Type *" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "CTO" }),
            /* @__PURE__ */ jsx("option", { children: "COH" }),
            /* @__PURE__ */ jsx("option", { children: "Manager" }),
            /* @__PURE__ */ jsx("option", { children: "Engineer" }),
            /* @__PURE__ */ jsx("option", { children: "CAB Member" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Approval Levels *" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "L1" }),
            /* @__PURE__ */ jsx("option", { children: "L2" }),
            /* @__PURE__ */ jsx("option", { children: "L3" }),
            /* @__PURE__ */ jsx("option", { children: "L4" }),
            /* @__PURE__ */ jsx("option", { children: "L1, L2" }),
            /* @__PURE__ */ jsx("option", { children: "L3, L4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Domain *" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "All Domains" }),
            /* @__PURE__ */ jsx("option", { children: "IP Core" }),
            /* @__PURE__ */ jsx("option", { children: "Optics" }),
            /* @__PURE__ */ jsx("option", { children: "Embedded" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0 0 10px" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Circle" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "All" }),
            /* @__PURE__ */ jsx("option", { children: "GJ" }),
            /* @__PURE__ */ jsx("option", { children: "MH" }),
            /* @__PURE__ */ jsx("option", { children: "KA" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Delegation Allowed" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "Yes" }),
            /* @__PURE__ */ jsx("option", { children: "No" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fr", style: { margin: "0" }, children: [
          /* @__PURE__ */ jsx("label", { className: "fl", children: "Status" }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { children: "Active" }),
            /* @__PURE__ */ jsx("option", { children: "Inactive" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mf", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-s", onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-p", onClick: () => {
          closeModal();
          showToast("Approver added successfully");
        }, children: "Save Approver" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { id: "chm-toast", style: {
      transform: toast.visible ? "translateY(0)" : "translateY(70px)",
      opacity: toast.visible ? 1 : 0
    }, children: toast.msg })
  ] });
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
