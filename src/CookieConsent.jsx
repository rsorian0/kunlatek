import React, { useEffect, useRef, useState, useCallback } from "react";
import { Cookie, X, Shield, BarChart3, Megaphone, Check, Clock } from "lucide-react";

const STORAGE_KEY = "cc_consent";
const POLICY_VERSION = "2026-06-03";
const GA_ID = "G-6SP5MZXBVP";
const PRIVACY_URL = "/privacidade";

const CATEGORIES = [
  {
    id: "necessary",
    icon: Shield,
    title: "Necessários",
    locked: true,
    desc: "Essenciais para o funcionamento do site, segurança e navegação. Não podem ser desativados.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Desempenho e análise",
    desc: "Ajudam a entender como o site é usado para que possamos melhorá-lo. Os dados são agregados e anônimos (Google Analytics).",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    soon: true,
    desc: "Permitirão personalizar conteúdo e medir a eficácia de campanhas. Ainda não utilizamos cookies de marketing.",
  },
];

const ALL_ON  = { necessary: true, analytics: true,  marketing: false };
const ALL_OFF = { necessary: true, analytics: false, marketing: false };

/* ---- persistência ---- */
function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== POLICY_VERSION) return null;
    return data;
  } catch {
    return null;
  }
}

function writeConsent(prefs) {
  const payload = { version: POLICY_VERSION, date: new Date().toISOString(), prefs };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(payload)); } catch { /* noop */ }
  applyConsent(prefs);
  return payload;
}

/* ---- carrega GA dinamicamente (só após opt-in) ---- */
function loadGA() {
  if (window.__kl_ga_loaded) return;
  window.__kl_ga_loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.onload = () => {
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  };
  document.head.appendChild(s);
}

function applyConsent(prefs) {
  if (prefs.analytics) loadGA();
  if (typeof window !== "undefined")
    window.dispatchEvent(new CustomEvent("kunlatek:consent", { detail: prefs }));
}

export function useCookieConsent() {
  const [prefs, setPrefs] = useState(() => readConsent()?.prefs ?? null);
  useEffect(() => {
    const onChange = (e) => setPrefs(e.detail);
    window.addEventListener("kunlatek:consent", onChange);
    return () => window.removeEventListener("kunlatek:consent", onChange);
  }, []);
  return prefs;
}

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent("kunlatek:open-cookie-prefs"));
}

const CSS = `
.klc * { margin: 0; padding: 0; box-sizing: border-box; }
.klc {
  --violet: #4711cb; --violet-2: #5b22e8; --violet-50: #f4f1ff; --violet-100: #e9e3ff;
  --bg: #fbfbfd; --surface: #ffffff; --ink: #16111f; --body: #524d61; --muted: #837e92;
  --line: #ece9f4; --line-strong: #e1ddef;
  font-family: 'Hanken Grotesk', sans-serif; -webkit-font-smoothing: antialiased;
}

/* banner */
.klc-banner {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 1000;
  display: flex; justify-content: center; padding: 18px; pointer-events: none;
}
.klc-banner-in {
  pointer-events: auto; width: 100%; max-width: 960px;
  background: var(--surface); border: 1px solid var(--line-strong);
  border-radius: 20px; padding: 24px 26px;
  box-shadow: 0 20px 60px rgba(22,17,40,0.16);
  display: flex; align-items: center; gap: 22px; flex-wrap: wrap;
  transform: translateY(140%); opacity: 0;
  animation: klcUp .6s cubic-bezier(.2,.7,.2,1) forwards;
}
@keyframes klcUp { to { transform: none; opacity: 1; } }
.klc-banner-ico {
  flex: none; width: 46px; height: 46px; border-radius: 13px;
  display: grid; place-items: center; color: var(--violet); background: var(--violet-50);
}
.klc-banner-txt { flex: 1; min-width: 240px; }
.klc-banner-txt h4 { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 1.08rem; color: var(--ink); letter-spacing: -0.01em; }
.klc-banner-txt p { color: var(--body); font-size: 0.95rem; margin-top: 5px; line-height: 1.5; }
.klc-banner-txt a { color: var(--violet); font-weight: 600; text-decoration: none; }
.klc-banner-txt a:hover { text-decoration: underline; }
.klc-banner-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }

/* botões */
.klc-btn {
  display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
  font-family: 'Hanken Grotesk', sans-serif; font-weight: 600; font-size: 14px;
  padding: 11px 18px; border-radius: 11px; border: 1px solid transparent;
  white-space: nowrap; text-decoration: none;
  transition: transform .2s, box-shadow .25s, background .2s, border-color .2s, color .2s;
}
.klc-btn-primary { background: var(--violet); color: #fff; box-shadow: 0 8px 22px rgba(71,17,203,0.22); }
.klc-btn-primary:hover { background: var(--violet-2); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(71,17,203,0.32); }
.klc-btn-ghost { background: transparent; color: var(--body); border-color: var(--line-strong); }
.klc-btn-ghost:hover { border-color: var(--violet); color: var(--violet); }
.klc-btn-text { background: transparent; color: var(--muted); padding: 11px 8px; }
.klc-btn-text:hover { color: var(--ink); }

/* modal */
.klc-overlay {
  position: fixed; inset: 0; z-index: 1001;
  background: rgba(22,17,40,0.42); -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; padding: 20px;
  opacity: 0; animation: klcFade .25s ease forwards;
}
@keyframes klcFade { to { opacity: 1; } }
.klc-modal {
  width: 100%; max-width: 580px; max-height: 88vh; overflow-y: auto;
  background: var(--surface); border-radius: 24px; border: 1px solid var(--line);
  box-shadow: 0 30px 80px rgba(22,17,40,0.28);
  transform: translateY(18px) scale(.98); opacity: 0;
  animation: klcPop .4s cubic-bezier(.2,.7,.2,1) forwards;
}
@keyframes klcPop { to { transform: none; opacity: 1; } }
.klc-modal-head {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 26px 26px 18px; border-bottom: 1px solid var(--line); position: relative;
}
.klc-modal-head .klc-banner-ico { width: 42px; height: 42px; }
.klc-modal-head h3 { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 1.3rem; color: var(--ink); letter-spacing: -0.02em; }
.klc-modal-head p { color: var(--body); font-size: 0.92rem; margin-top: 4px; line-height: 1.5; }
.klc-close {
  position: absolute; top: 18px; right: 18px;
  width: 34px; height: 34px; border-radius: 10px; border: 1px solid var(--line);
  background: var(--surface); color: var(--muted); cursor: pointer;
  display: grid; place-items: center; transition: color .2s, border-color .2s, background .2s;
}
.klc-close:hover { color: var(--ink); border-color: var(--line-strong); background: var(--bg); }

.klc-cats { padding: 8px 26px 4px; }
.klc-cat { display: flex; gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--line); }
.klc-cat:last-child { border-bottom: none; }
.klc-cat-ico { flex: none; width: 40px; height: 40px; border-radius: 11px; display: grid; place-items: center; color: var(--violet); background: var(--violet-50); }
.klc-cat-body { flex: 1; }
.klc-cat-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.klc-cat-top h4 { font-family: 'Sora', sans-serif; font-weight: 600; font-size: 1.02rem; color: var(--ink); }
.klc-cat-body p { color: var(--body); font-size: 0.88rem; margin-top: 6px; line-height: 1.5; }

.klc-locked {
  font-family: 'Space Mono', monospace; font-size: 10.5px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--violet);
  display: inline-flex; align-items: center; gap: 5px;
}
.klc-soon {
  font-family: 'Space Mono', monospace; font-size: 10.5px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted); border: 1px solid var(--line-strong);
  border-radius: 999px; padding: 4px 10px;
  display: inline-flex; align-items: center; gap: 5px;
}

/* switch */
.klc-switch { flex: none; position: relative; width: 46px; height: 26px; }
.klc-switch input { position: absolute; opacity: 0; width: 100%; height: 100%; margin: 0; cursor: pointer; }
.klc-track { position: absolute; inset: 0; border-radius: 999px; background: var(--line-strong); transition: background .25s; }
.klc-track::before { content: ""; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(22,17,40,0.2); transition: transform .25s cubic-bezier(.2,.7,.2,1); }
.klc-switch input:checked + .klc-track { background: var(--violet); }
.klc-switch input:checked + .klc-track::before { transform: translateX(20px); }
.klc-switch input:disabled { cursor: not-allowed; }
.klc-switch input:disabled + .klc-track { background: var(--violet-100); }
.klc-switch input:disabled + .klc-track::before { background: var(--violet); box-shadow: none; }
.klc-switch input:focus-visible + .klc-track { outline: 2px solid var(--violet); outline-offset: 2px; }

.klc-modal-foot { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; padding: 18px 26px 24px; border-top: 1px solid var(--line); }
.klc-modal-foot .klc-btn-ghost { margin-right: auto; }

/* FAB */
.klc-fab {
  position: fixed; left: 18px; bottom: 18px; z-index: 999;
  width: 46px; height: 46px; border-radius: 14px; cursor: pointer;
  background: var(--surface); border: 1px solid var(--line-strong); color: var(--violet);
  display: grid; place-items: center; box-shadow: 0 8px 24px rgba(22,17,40,0.12);
  transition: transform .2s, box-shadow .25s, color .2s, border-color .2s, background .2s;
}
.klc-fab:hover { transform: translateY(-3px); color: #fff; background: var(--violet); border-color: var(--violet); box-shadow: 0 12px 30px rgba(71,17,203,0.3); }

@media (max-width: 620px) {
  .klc-banner { padding: 12px; }
  .klc-banner-in { padding: 20px; gap: 16px; }
  .klc-banner-actions { width: 100%; }
  .klc-banner-actions .klc-btn { flex: 1; justify-content: center; }
  .klc-btn-text { flex-basis: 100%; }
  .klc-modal-foot .klc-btn { flex: 1; justify-content: center; }
  .klc-modal-foot .klc-btn-ghost { margin-right: 0; flex-basis: 100%; }
}
@media (prefers-reduced-motion: reduce) {
  .klc-banner-in, .klc-overlay, .klc-modal { animation: none !important; opacity: 1 !important; transform: none !important; }
}
`;

export default function CookieConsent() {
  const [decided, setDecided] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState(ALL_OFF);
  const closeRef = useRef(null);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      setPrefs(saved.prefs);
      applyConsent(saved.prefs);
      setDecided(true);
    } else {
      setDecided(false);
    }
  }, []);

  useEffect(() => {
    const open = () => {
      const saved = readConsent();
      if (saved) setPrefs(saved.prefs);
      setShowModal(true);
    };
    window.addEventListener("kunlatek:open-cookie-prefs", open);
    return () => window.removeEventListener("kunlatek:open-cookie-prefs", open);
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => { if (e.key === "Escape") setShowModal(false); };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  const acceptAll = useCallback(() => {
    writeConsent(ALL_ON); setPrefs(ALL_ON); setDecided(true); setShowModal(false);
  }, []);
  const rejectAll = useCallback(() => {
    writeConsent(ALL_OFF); setPrefs(ALL_OFF); setDecided(true); setShowModal(false);
  }, []);
  const saveCustom = useCallback(() => {
    writeConsent(prefs); setDecided(true); setShowModal(false);
  }, [prefs]);

  const toggle = (id) =>
    setPrefs((p) => (id === "necessary" ? p : { ...p, [id]: !p[id] }));

  const showBanner = !decided && !showModal;
  const showFab    = decided && !showModal;

  return (
    <div className="klc">
      <style>{CSS}</style>

      {showBanner && (
        <div className="klc-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
          <div className="klc-banner-in">
            <div className="klc-banner-ico"><Cookie size={24} /></div>
            <div className="klc-banner-txt">
              <h4>A gente usa cookies por aqui 🍪</h4>
              <p>
                Usamos cookies para fazer o site funcionar e entender como ele é usado.
                Você decide o que aceitar.{" "}
                <a href={PRIVACY_URL}>Política de Privacidade</a>.
              </p>
            </div>
            <div className="klc-banner-actions">
              <button className="klc-btn klc-btn-text" onClick={() => setShowModal(true)}>Personalizar</button>
              <button className="klc-btn klc-btn-ghost" onClick={rejectAll}>Rejeitar</button>
              <button className="klc-btn klc-btn-primary" onClick={acceptAll}>Aceitar todos</button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="klc-overlay" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="klc-modal" role="dialog" aria-modal="true" aria-label="Preferências de cookies">
            <div className="klc-modal-head">
              <div className="klc-banner-ico"><Cookie size={22} /></div>
              <div>
                <h3>Preferências de cookies</h3>
                <p>Escolha quais categorias deseja permitir. Você pode mudar isso quando quiser.</p>
              </div>
              <button className="klc-close" ref={closeRef} onClick={() => setShowModal(false)} aria-label="Fechar">
                <X size={18} />
              </button>
            </div>

            <div className="klc-cats">
              {CATEGORIES.map((c) => {
                const Icon = c.icon;
                return (
                  <div className="klc-cat" key={c.id}>
                    <div className="klc-cat-ico"><Icon size={19} /></div>
                    <div className="klc-cat-body">
                      <div className="klc-cat-top">
                        <h4>{c.title}</h4>
                        {c.locked ? (
                          <span className="klc-locked"><Check size={12} /> Sempre ativo</span>
                        ) : c.soon ? (
                          <span className="klc-soon"><Clock size={11} /> Em breve</span>
                        ) : (
                          <label className="klc-switch">
                            <input
                              type="checkbox"
                              checked={!!prefs[c.id]}
                              onChange={() => toggle(c.id)}
                              aria-label={c.title}
                            />
                            <span className="klc-track" />
                          </label>
                        )}
                      </div>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="klc-modal-foot">
              <button className="klc-btn klc-btn-ghost" onClick={rejectAll}>Rejeitar tudo</button>
              <button className="klc-btn klc-btn-text" onClick={acceptAll}>Aceitar tudo</button>
              <button className="klc-btn klc-btn-primary" onClick={saveCustom}>Salvar preferências</button>
            </div>
          </div>
        </div>
      )}

      {showFab && (
        <button
          className="klc-fab"
          onClick={() => setShowModal(true)}
          aria-label="Preferências de cookies"
          title="Preferências de cookies"
        >
          <Cookie size={20} />
        </button>
      )}
    </div>
  );
}
