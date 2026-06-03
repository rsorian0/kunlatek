import React, { useEffect, useRef, useState } from "react";
import {
  Code2, Globe, Boxes, Compass, Users, HeartHandshake, Sparkles,
  ArrowUpRight, ArrowRight, Menu, X, MapPin, Mail, ChevronDown,
  Linkedin, Instagram, Phone,
} from "lucide-react";
import { openCookiePreferences } from "./CookieConsent";

const ICON_L = [
  "M246.92,248.03h23.99v159.92h-23.99v-159.92Z",
  "M382.18,364.98v27.76l-91.29-52.86v-23.99l91.29-52.64v27.76l-64.19,36.87,64.19,37.09Z",
];
const ICON_R = [
  "M412.83,364.98l64.19-37.09-64.19-36.87v-27.76l91.29,52.64v23.99l-91.29,52.86v-27.76Z",
  "M524.54,248.03h23.99v159.92h-23.99v-159.92Z",
];
const WORD = [
  "M220.64,493.39v1.52l-25.15,27.77,25.15,27.77v1.52h-12.93l-21.92-23.84h-13.13v23.84h-10.91v-77.77h10.91v43.03h13.13l21.92-23.84h12.93Z",
  "M286.48,493.39v45.45c0,7.27-5.86,13.13-13.13,13.13h-33.33c-7.27,0-13.13-5.86-13.13-13.13v-45.45h10.91v45.45c0,1.21,1.01,2.22,2.22,2.22h33.33c1.21,0,2.22-1.01,2.22-2.22v-45.45h10.91Z",
  "M356.78,506.52v45.45h-10.91v-45.45c0-1.21-1.01-2.22-2.22-2.22h-33.33c-1.21,0-2.22,1.01-2.22,2.22v45.45h-10.91v-58.58h46.46c7.27,0,13.13,5.86,13.13,13.13Z",
  "M367.28,474.2h10.91v64.64c0,1.21,1.01,2.22,2.22,2.22h10.91v10.91h-10.91c-7.27,0-13.13-5.86-13.13-13.13v-64.64Z",
  "M457.37,506.52v45.45h-46.46c-7.27,0-13.13-5.86-13.13-13.13v-21.61h48.68v-10.71c0-1.21-1.01-2.22-2.22-2.22h-46.46v-10.91h46.46c7.27,0,13.13,5.86,13.13,13.13ZM446.46,528.13h-37.77v10.71c0,1.21,1.01,2.22,2.22,2.22h35.55v-12.93Z",
  "M478.88,504.3v34.54c0,1.21,1.01,2.22,2.22,2.22h21.82v10.91h-21.82c-7.27,0-13.13-5.86-13.13-13.13v-64.64h10.91v19.19h24.04v10.91h-24.04Z",
  "M568.76,506.52v21.61h-48.68v10.71c0,1.21,1.01,2.22,2.22,2.22h46.46v10.91h-46.46c-7.27,0-13.13-5.86-13.13-13.13v-32.32c0-7.27,5.86-13.13,13.13-13.13h33.33c7.27,0,13.13,5.86,13.13,13.13ZM557.85,517.22v-10.71c0-1.21-1.01-2.22-2.22-2.22h-33.33c-1.21,0-2.22,1.01-2.22,2.22v10.71h37.77Z",
  "M638.25,493.39v1.52l-25.15,27.77,25.15,27.77v1.52h-12.93l-21.92-23.84h-13.13v23.84h-10.91v-77.77h10.91v43.03h13.13l21.92-23.84h12.93Z",
];

const BrandLogo = ({ height = 28 }) => (
  <svg viewBox="0 0 834.11 159.92" height={height} role="img" aria-label="Kunlatek"
    style={{ display: "block", fill: "currentColor", width: "auto" }}>
    <g transform="translate(-246.92,-248.03)">
      <g className="kl-mk-l">{ICON_L.map((d, i) => <path key={i} d={d} />)}</g>
      <g className="kl-mk-r">{ICON_R.map((d, i) => <path key={i} d={d} />)}</g>
    </g>
    <g transform="translate(195.86,-433.125)">
      <g className="kl-mk-w">{WORD.map((d, i) => <path key={i} d={d} />)}</g>
    </g>
  </svg>
);

const IconMark = ({ height = 90 }) => (
  <svg viewBox="246.92 248.03 301.61 159.92" height={height} aria-hidden
    style={{ display: "block", fill: "currentColor", width: "auto" }}>
    {[...ICON_L, ...ICON_R].map((d, i) => <path key={i} d={d} />)}
  </svg>
);

const KunlatalkLogo = ({ height = 34 }) => (
  <svg viewBox="54.07 440.72 1026.83 253.54" height={height} role="img" aria-label="Kunlatalk"
    style={{ display: "block", width: "auto" }}>
    <path fill="#4711cb" d="M281.22,518.97c-30.05-60.75-102.68-83.02-160.17-46.73-17.08,10.78-30.54,25.86-40.07,43.72-19.07,35.74-16.41,75.7,4.04,110.57l-8.22,35.77c-.95,4.15,2.28,8.29,4.36,10.25,2.98,2.82,7.28,3.99,11.87,2.58l32.71-10.01c14.21,8.19,29.38,13.6,45.83,14.62,7.33.45,13.55.92,21.17-.05,34.57-4.4,65.52-24.55,83.39-54.45,19.51-32.64,21.82-72.42,5.08-106.27ZM261.06,616.01c-27.11,44.11-82.22,60.37-127.49,33.17-10.17-6.44-23.86,3.06-37.07,6.72l6.8-26.68c1.26-4.95-.71-8.39-3.13-12.29-15.32-24.76-18.68-54.89-8.38-82.02,18.9-49.79,73.24-74.06,122.1-55.69,56.09,21.09,77.03,88.21,47.18,136.8Z" />
    <polygon fill="#15111f" points="442.05 539.25 413 539.06 377.42 577.91 377.31 504.62 353.22 504.62 353.21 631.55 377.41 631.61 377.42 599.82 386.54 592.03 415.67 631.55 444.42 631.1 405.01 579.57 442.05 539.25" />
    <path fill="#15111f" d="M765.31,541.37c-22.28-9.76-56.71-3.82-62.98,22l20.76,4.68c3.76-10.79,14.64-13.21,25.71-11.04,9.03,1.77,13.87,10.7,11.01,19.1-26.55-1.4-61.79.35-60.58,29.96.53,12.9,8.54,22.94,20.6,25.9,15.28,3.75,32.6.73,41.27-12.69l1.01,12.34,22.2.02-.2-62.08c-.04-12.5-7.36-23.17-18.8-28.19ZM756.98,607c-7.38,8.55-20.19,10.79-29.8,5.66-4.63-2.47-5.92-8.55-3.61-12.69,2.3-4.11,6.32-6.9,10.86-7.16l25.93-1.52c.66,5.59.56,11.14-3.39,15.71Z" />
    <path fill="#15111f" d="M516.68,538.94l-.09,50.6c-.01,6.4-2.46,12.81-7.26,17.05-7.19,6.36-18.74,7.21-26.63,1.58-4.52-3.23-6.89-9.43-6.91-14.89l-.2-54.4-24.16-.09.44,62.08c.14,20.19,16.98,33.52,36.42,32.45,12.23-.67,22.58-5.12,28.86-16.28l.66,14.61,23.12-.11-.19-92.57-24.07-.03Z" />
    <path fill="#15111f" d="M610.25,536.9c-12.43.26-23.39,4.57-30.38,15.98l-.39-13.97-22.57.16.04,92.46,23.69.03.35-53.26c.09-13,10.68-21.45,23.85-20.18,9.55.92,16.89,7.2,16.95,16.8l.37,56.63h24.15s-.58-62.46-.58-62.46c-1.27-19.84-16.48-32.6-35.49-32.2Z" />
    <polygon fill="#15111f" points="662.6 631.61 686.85 631.32 686.85 504.84 662.61 504.57 662.6 631.61" />
    <path fill="#15111f" d="M918.68,539.97c-20.37-6.58-47.4.5-52.48,22.17l8.89,2.23c5.31-15.59,21.02-20.13,36.9-16.83,9.81,2.04,17.49,9.2,17.7,19.3l.24,11.6-23,.7c-22.12.68-45.67,5.25-44.84,28.84.31,8.88,5.15,17.22,14.23,21.43,17.6,8.17,42.69,3.31,53.45-14.21l.52,16.27,10.08-.04-.46-63.72c-.1-13.26-9.03-23.79-21.23-27.74ZM923.43,612.56c-10.36,11.86-28.08,14.65-41.9,8.77-6.27-2.67-9.36-8.61-9.62-14.29-.3-6.58,3.46-12.11,9.66-15.09,5.89-2.56,12.13-4,18.61-4.17l29.61-.77c.47,8.73.07,18.2-6.35,25.55Z" />
    <path fill="#15111f" d="M1024.88,579.15l39.72-39.76-13.4-.45-48.56,50.18-.23-84.27h-9.74s0,126.51,0,126.51l9.85.21.06-30.02,16.19-15.7,35.44,45.48c4.45.4,8.29.53,12.69-.11l-42.03-52.09Z" />
    <path fill="#15111f" d="M827.05,621.58c-4.39-3.18-7.08-8.38-7.07-14.07l.07-59.8,29.64-.07-.02-8.63-29.61-.18-.03-22.18c-3.38-.49-6.44-.16-9.57,1.39l-.22,20.64-15.79.2.24,8.83,15.44-.03.58,62.31c.09,9.9,6.31,18.61,15.44,21.4,8.44,2.58,17.04,1.5,24.84-1.82-.47-3.22-.78-6.24-2.93-8.52-7.6,3.25-14.44,3.58-21.01.54Z" />
    <path fill="#15111f" d="M961.49,505.1l.05,126.42,10.08-.18-.03-126.48c-3.28-.32-6.57-.6-10.09.24Z" />
    <path fill="#15111f" d="M212.21,620.23l-51.68-35.72c-1-.69-2.6-.41-3.37-.13-1,.36-1.76,1.42-1.78,3.15l-.22,25.82c-.04,4.69-5.15,7.8-9.14,7.74-3.77-.06-9.62-2.71-9.63-7.53l-.1-86.93c0-5.59,5.08-8.83,9.77-8.98,4.71-.15,9.18,3.6,9.2,9.02l.08,38.88c5.15-.63,9.4.19,13.39,2.93l52.59,36.15c4.17,2.87,5.15,8.01,2.72,11.92-1.87,3.01-7.4,6.74-11.81,3.69Z" />
    <path fill="#15111f" d="M185.82,561.24c-4.47,3.39-9.25,3.18-12.86-.65-2.56-2.71-3.24-9.01.64-12.09l36.7-29.07c4.62-3.66,11.38-1.92,13.89,2.76,2.89,5.39.02,9.93-4.66,13.48l-33.71,25.56Z" />
  </svg>
);

const MezuriLogo = ({ height = 48 }) => (
  <svg viewBox="104.47 231.23 591.06 337.55" height={height} role="img" aria-label="Mezuri"
    style={{ display: "block", width: "auto" }}>
    <path fill="#15111f" d="M519.14,394.52c-.87-1.45-2.1-2.62-3.7-3.51-1.6-.89-3.75-1.33-6.44-1.33-2.85,0-5.38.62-7.59,1.87-2.21,1.25-3.98,3.16-5.3,5.76-.41-1.07-.9-2.06-1.49-2.97-.58-.92-1.32-1.72-2.21-2.4-.89-.69-1.97-1.23-3.24-1.64-1.27-.41-2.82-.61-4.65-.61-2.59,0-4.98.6-7.17,1.79-2.19,1.2-3.86,2.94-5.03,5.22h-.15v-5.95h-4.58v39.5h4.58v-21.28c0-.81.04-1.7.11-2.67.08-.97.22-1.93.42-2.9.2-.97.47-1.89.8-2.78.33-.89.75-1.66,1.26-2.33,1.17-1.53,2.53-2.66,4.08-3.39,1.55-.74,3.16-1.11,4.84-1.11,3.25,0,5.48.81,6.67,2.44,1.19,1.63,1.79,3.86,1.79,6.71v27.3h4.58v-21.28c0-.81.04-1.7.11-2.67.08-.97.22-1.93.42-2.9.2-.97.47-1.89.8-2.78.33-.89.75-1.66,1.26-2.33,1.17-1.53,2.53-2.66,4.08-3.39,1.55-.74,3.16-1.11,4.84-1.11,3.25,0,5.48.81,6.67,2.44,1.19,1.63,1.79,3.86,1.79,6.71v27.3h4.58v-24.94c0-1.98-.14-3.91-.42-5.8-.28-1.88-.85-3.55-1.72-4.99Z" />
    <path fill="#15111f" d="M560.62,395.28c-3.1-3.74-7.37-5.61-12.81-5.61-2.85,0-5.39.55-7.63,1.64-2.24,1.09-4.13,2.59-5.68,4.5-1.55,1.91-2.75,4.13-3.58,6.67-.84,2.54-1.26,5.26-1.26,8.16s.36,5.6,1.07,8.12c.71,2.52,1.8,4.7,3.28,6.56,1.47,1.86,3.36,3.32,5.64,4.38,2.29,1.07,5.01,1.6,8.16,1.6,2.49,0,4.68-.33,6.56-.99,1.88-.66,3.51-1.59,4.88-2.78,1.37-1.19,2.52-2.59,3.43-4.19.92-1.6,1.65-3.34,2.21-5.22h-5.11c-.71,2.9-2.14,5.14-4.27,6.71-2.14,1.58-4.7,2.36-7.7,2.36-2.19,0-4.12-.42-5.8-1.26-1.68-.84-3.06-1.96-4.16-3.36-1.09-1.4-1.92-3.05-2.48-4.96-.56-1.91-.84-3.93-.84-6.06h30.66c.05-7.12-1.48-12.54-4.58-16.28ZM534.54,407.75c.2-1.88.64-3.66,1.3-5.34.66-1.68,1.54-3.15,2.63-4.42,1.09-1.27,2.41-2.29,3.97-3.05,1.55-.76,3.34-1.14,5.38-1.14s3.84.37,5.41,1.11c1.58.74,2.88,1.73,3.93,2.97,1.04,1.25,1.83,2.72,2.36,4.42.53,1.7.8,3.52.8,5.45h-25.77Z" />
    <polygon fill="#15111f" points="603.25 394.79 603.25 390.75 572.9 390.75 572.9 394.56 597.38 394.56 571.15 426.21 571.15 430.25 604.24 430.25 604.24 426.44 577.02 426.44 603.25 394.79" />
    <path fill="#15111f" d="M639.02,412.25c0,2.19-.28,4.19-.84,6.02-.56,1.83-1.35,3.41-2.36,4.73-1.02,1.32-2.28,2.35-3.78,3.09-1.5.74-3.19,1.11-5.07,1.11-3.61,0-6.2-.9-7.78-2.71-1.58-1.8-2.36-4.41-2.36-7.82v-25.93h-4.58v26c0,2.09.24,4,.72,5.76.48,1.75,1.27,3.29,2.36,4.61,1.09,1.32,2.53,2.35,4.31,3.09,1.78.74,3.99,1.11,6.63,1.11,1.73,0,3.25-.22,4.58-.65,1.32-.43,2.48-.97,3.47-1.6.99-.64,1.87-1.33,2.63-2.1.76-.76,1.45-1.5,2.06-2.21v5.49h4.58v-39.5h-4.58v21.5Z" />
    <path fill="#15111f" d="M659.6,398.14h-.15v-7.4h-4.58v39.5h4.58v-19.37c0-2.19.19-4.28.57-6.29.38-2.01,1.07-3.75,2.06-5.22.99-1.47,2.33-2.64,4-3.51,1.68-.86,3.81-1.27,6.41-1.22v-4.96c-3.31,0-5.96.62-7.97,1.87-2.01,1.25-3.65,3.44-4.92,6.6Z" />
    <rect fill="#15111f" x="680.73" y="390.75" width="4.58" height="39.5" />
    <rect fill="#15111f" x="680.5" y="375.34" width="5.03" height="6.79" />
    <path fill="#15111f" d="M252.31,463.44c49.83,31.78,99.65,63.56,149.48,95.34.02-74.42.04-148.85.06-223.27-49.55-31.43-99.1-62.85-148.65-94.28-.3,74.07-.59,148.14-.89,222.22Z" />
    <polygon fill="#15111f" points="210.25 399.76 164.65 399.76 164.65 354.16 160.07 354.16 160.07 399.76 114.47 399.76 114.47 404.34 160.07 404.34 160.07 449.94 164.65 449.94 164.65 404.34 210.25 404.34 210.25 399.76" />
  </svg>
);

const HEADLINE = [
  { t: "Tecnologia" }, { t: "que" }, { t: "fala" }, { t: "a" },
  { t: "língua", hl: true }, { t: "das", hl: true }, { t: "pessoas.", hl: true },
];

const FLOATS = [
  { l: "7%", t: "20%", h: 120, dur: "19s", delay: "0s", op: 0.06, rot: 18 },
  { l: "84%", t: "14%", h: 86, dur: "23s", delay: "3s", op: 0.05, rot: -14 },
  { l: "72%", t: "60%", h: 150, dur: "27s", delay: "1.4s", op: 0.045, rot: 24 },
  { l: "14%", t: "64%", h: 78, dur: "21s", delay: "5s", op: 0.06, rot: -22 },
  { l: "46%", t: "80%", h: 60, dur: "25s", delay: "2.2s", op: 0.05, rot: 14 },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Hanken+Grotesk:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

.kl * { margin: 0; padding: 0; box-sizing: border-box; }
.kl {
  --violet: #4711cb; --violet-2: #5b22e8; --violet-50: #f4f1ff; --violet-100: #e9e3ff;
  --bg: #fbfbfd; --surface: #ffffff; --ink: #16111f; --body: #524d61; --muted: #837e92;
  --line: #ece9f4; --line-strong: #e1ddef;
  position: relative; background: var(--bg); color: var(--body);
  font-family: 'Hanken Grotesk', sans-serif; overflow-x: hidden;
  -webkit-font-smoothing: antialiased; line-height: 1.55;
}
.kl ::selection { background: var(--violet-100); color: var(--violet); }
html { scroll-behavior: smooth; }
.kl [id] { scroll-margin-top: 92px; }

.kl-progress { position: fixed; top: 0; left: 0; right: 0; height: 2.5px; z-index: 60; transform-origin: 0 50%; transform: scaleX(0); background: linear-gradient(90deg, var(--violet), var(--violet-2)); will-change: transform; }

.kl-wrap { position: relative; z-index: 2; overflow-x: clip; }
.kl-container { width: 100%; max-width: 1140px; margin: 0 auto; padding: 0 28px; }

.kl-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 40;
  background: rgba(251,251,253,0.82);
  -webkit-backdrop-filter: blur(14px) saturate(160%); backdrop-filter: blur(14px) saturate(160%);
  border-bottom: 1px solid var(--line); box-shadow: 0 1px 24px rgba(22,17,40,0.05);
  transform: translateY(-110%); opacity: 0; pointer-events: none;
  transition: transform .5s cubic-bezier(.2,.7,.2,1), opacity .4s ease;
}
.kl-nav.visible { transform: translateY(0); opacity: 1; pointer-events: auto; }
.kl-nav-in { position: relative; display: flex; align-items: center; justify-content: space-between; height: 70px; }
.kl-logo { color: var(--violet); display: inline-flex; align-items: center; transition: opacity .2s; }
.kl-logo:hover { opacity: 0.82; }
.kl-links { position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 42px; }
.kl-links a { position: relative; color: var(--body); text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.01em; padding: 4px 0; transition: color .25s; }
.kl-links a::after { content: ""; position: absolute; left: 50%; bottom: -3px; width: 100%; height: 1.5px; border-radius: 2px; background: var(--violet); transform: translateX(-50%) scaleX(0); transform-origin: center; transition: transform .35s cubic-bezier(.2,.7,.2,1); }
.kl-links a:hover { color: var(--ink); }
.kl-links a:hover::after, .kl-links a.active::after { transform: translateX(-50%) scaleX(1); }
.kl-links a.active { color: var(--violet); }
.kl-nav-cta { padding: 10px 18px; font-size: 14px; }
.kl-burger { display: none; background: none; border: none; color: var(--ink); cursor: pointer; padding: 10px; }
.kl-burger:focus-visible { outline: 2px solid var(--violet); outline-offset: 3px; border-radius: 8px; }

.kl-btn { display: inline-flex; align-items: center; gap: 9px; font-family: 'Hanken Grotesk'; font-weight: 600; font-size: 15px; padding: 12px 20px; border-radius: 12px; cursor: pointer; border: 1px solid transparent; text-decoration: none; transition: transform .2s ease, box-shadow .25s ease, background .2s, border-color .2s, color .2s; }
.kl-btn svg { transition: transform .25s cubic-bezier(.2,.7,.2,1); }
.kl-btn-primary { background: var(--violet); color: #fff; box-shadow: 0 8px 22px rgba(71,17,203,0.22); }
.kl-btn-primary:hover { background: var(--violet-2); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(71,17,203,0.32); }
.kl-btn-primary:hover svg { transform: translate(3px,-3px); }
.kl-btn-outline { background: var(--surface); color: var(--ink); border-color: var(--line-strong); }
.kl-btn-outline:hover { border-color: var(--violet); color: var(--violet); transform: translateY(-2px); }
.kl-btn-outline:hover svg { transform: translateX(3px); }
.kl-btn-white { background: #fff; color: var(--violet); }
.kl-btn-white:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(0,0,0,0.2); }
.kl-btn-white:hover svg { transform: translate(3px,-3px); }
.kl-btn-shine { position: relative; overflow: hidden; }
.kl-btn-shine::after { content: ""; position: absolute; top: 0; left: -130%; width: 55%; height: 100%; background: linear-gradient(100deg, transparent, rgba(255,255,255,0.45), transparent); transform: skewX(-20deg); animation: shine 5s ease-in-out infinite; }
@keyframes shine { 0%,55%{ left:-130%; } 78%,100%{ left:140%; } }

.kl-mobile { display: none; }

@keyframes klUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
.kl-enter { opacity: 0; animation: klUp .85s cubic-bezier(.2,.7,.2,1) forwards; }

.kl-hero { padding: 64px 0 96px; position: relative; text-align: center; overflow: hidden; }
.kl-parallax { position: absolute; inset: 0; z-index: 0; pointer-events: none; will-change: transform; transition: transform .3s ease-out; }
.kl-glow, .kl-glow2 { position: absolute; border-radius: 50%; }
.kl-glow { top: -220px; left: 50%; width: 1120px; height: 760px; background: radial-gradient(ellipse at center, rgba(71,17,203,0.16), transparent 62%); animation: glowA 13s ease-in-out infinite; }
.kl-glow2 { top: -40px; left: 46%; width: 640px; height: 560px; background: radial-gradient(ellipse at center, rgba(91,34,232,0.13), transparent 60%); animation: glowB 17s ease-in-out infinite; }
@keyframes glowA { 0%,100%{ transform: translateX(-50%) translateY(0) scale(1); opacity:.85 } 50%{ transform: translateX(-50%) translateY(20px) scale(1.08); opacity:1 } }
@keyframes glowB { 0%,100%{ transform: translateX(-52%) scale(1); } 50%{ transform: translateX(-44%) scale(1.14); } }
.kl-dots { position: absolute; inset: -40px; background-image: radial-gradient(rgba(71,17,203,0.12) 1.2px, transparent 1.5px); background-size: 26px 26px; -webkit-mask-image: radial-gradient(ellipse 72% 62% at 50% 28%, #000, transparent 76%); mask-image: radial-gradient(ellipse 72% 62% at 50% 28%, #000, transparent 76%); opacity: 0.6; animation: dots 22s linear infinite; }
@keyframes dots { to { background-position: 26px 26px; } }
.kl-floats { position: absolute; inset: 0; overflow: hidden; }
.kl-float { position: absolute; color: var(--violet); opacity: 0; animation: floatUp linear infinite; }
@keyframes floatUp { 0%{ transform: translateY(40px) rotate(0deg); opacity: 0; } 14%{ opacity: var(--op,0.06); } 86%{ opacity: var(--op,0.06); } 100%{ transform: translateY(-130px) rotate(var(--rot,20deg)); opacity: 0; } }

.kl-herologo { position: relative; color: var(--violet); display: flex; justify-content: center; margin-bottom: 30px; transform-origin: center top; will-change: opacity, transform; }
.kl-herologo::before { content: ""; position: absolute; width: 320px; height: 220px; left: 50%; top: 50%; transform: translate(-50%,-50%); background: radial-gradient(ellipse at center, rgba(71,17,203,0.18), transparent 65%); z-index: -1; animation: glowA 6s ease-in-out infinite; }
.kl-herologo svg { height: clamp(34px, 6vw, 66px); width: auto; }
.kl-herologo .kl-mk-l { opacity: 0; animation: mkL .95s cubic-bezier(.2,.85,.2,1) .12s forwards; }
.kl-herologo .kl-mk-r { opacity: 0; animation: mkR .95s cubic-bezier(.2,.85,.2,1) .12s forwards; }
.kl-herologo .kl-mk-w { opacity: 0; animation: mkW .8s cubic-bezier(.2,.7,.2,1) .45s forwards; }
@keyframes mkL { from { opacity: 0; transform: translateX(-80px); } to { opacity: 1; transform: none; } }
@keyframes mkR { from { opacity: 0; transform: translateX(80px); } to { opacity: 1; transform: none; } }
@keyframes mkW { from { opacity: 0; transform: translateY(46px); } to { opacity: 1; transform: none; } }

.kl-eyebrow { display: inline-flex; align-items: center; gap: 9px; font-family: 'Space Mono'; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--violet); border: 1px solid var(--line-strong); border-radius: 999px; padding: 7px 15px; background: var(--surface); box-shadow: 0 6px 18px rgba(71,17,203,0.06); }
.kl-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--violet); animation: pulse 2.2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{ box-shadow: 0 0 0 0 rgba(71,17,203,0.45);} 50%{ box-shadow: 0 0 0 6px rgba(71,17,203,0);} }

.kl-h1 { font-family: 'Sora'; font-weight: 700; color: var(--ink); font-size: clamp(2.4rem, 5.6vw, 4.4rem); line-height: 1.08; letter-spacing: -0.03em; margin: 26px auto 0; max-width: 16ch; }
.kl-word { display: inline-block; overflow: hidden; vertical-align: bottom; padding: 0.12em 0.03em 0.2em; margin: -0.12em -0.03em -0.2em; }
.kl-word-in { display: inline-block; transform: translateY(115%); opacity: 0; animation: wordUp .82s cubic-bezier(.2,.85,.2,1) forwards; }
@keyframes wordUp { to { transform: translateY(0); opacity: 1; } }
.kl-h1 .hl { background: linear-gradient(90deg, var(--violet), #9a6bff, var(--violet)); background-size: 220% 100%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: wordUp .82s cubic-bezier(.2,.85,.2,1) forwards, sweep 5s linear infinite 1s; }
@keyframes sweep { to { background-position: -220% 0; } }

.kl-lead { font-size: clamp(1.05rem, 1.8vw, 1.25rem); color: var(--body); max-width: 56ch; margin: 24px auto 0; }
.kl-hero-cta { display: flex; flex-wrap: wrap; gap: 13px; margin-top: 36px; justify-content: center; }
.kl-keys { margin-top: 44px; position: relative; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
.kl-keys-track { display: flex; gap: 12px; width: max-content; animation: keysScroll 30s linear infinite; }
.kl-keys:hover .kl-keys-track { animation-play-state: paused; }
@keyframes keysScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.kl-key { flex: none; display: inline-flex; align-items: center; gap: 9px; font-family: 'Space Mono'; font-size: 13px; color: var(--ink); border: 1px solid var(--line); background: var(--surface); border-radius: 999px; padding: 9px 16px; box-shadow: 0 4px 14px rgba(71,17,203,0.04); transition: transform .25s, border-color .25s, color .25s; }
.kl-key::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--violet); opacity: 0.85; }
.kl-key:hover { color: var(--violet); border-color: var(--violet-100); transform: translateY(-2px); }
.kl-scrollcue { margin: 50px auto 0; display: inline-flex; flex-direction: column; align-items: center; gap: 7px; font-family: 'Space Mono'; font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted); }
.kl-scrollcue svg { color: var(--violet); animation: bounce 1.9s ease-in-out infinite; }
@keyframes bounce { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(6px); } }

.kl-section { padding: 92px 0; }
.kl-head { max-width: 640px; }
.kl-kicker { font-family: 'Space Mono'; font-size: 12.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--violet); }
.kl-h2 { font-family: 'Sora'; font-weight: 700; color: var(--ink); font-size: clamp(1.9rem, 3.8vw, 2.9rem); line-height: 1.08; letter-spacing: -0.025em; margin-top: 14px; }
.kl-sec-lead { color: var(--body); max-width: 54ch; margin-top: 16px; font-size: 1.06rem; }

.kl-grid-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 48px; }
.kl-card { position: relative; border: 1px solid var(--line); border-radius: 20px; padding: 32px; background: var(--surface); overflow: hidden; transition: transform .3s cubic-bezier(.2,.7,.2,1), border-color .3s, box-shadow .3s; }
.kl-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 120px; background: radial-gradient(120px 80px at 100% 0, rgba(71,17,203,0.07), transparent 70%); opacity: 0; transition: opacity .35s; }
.kl-card:hover { transform: translateY(-5px); border-color: var(--violet-100); box-shadow: 0 22px 48px rgba(71,17,203,0.1); }
.kl-card:hover::before { opacity: 1; }
.kl-card-ico { width: 50px; height: 50px; border-radius: 13px; display: grid; place-items: center; background: var(--violet-50); color: var(--violet); margin-bottom: 20px; transition: transform .35s cubic-bezier(.2,.7,.2,1); }
.kl-card:hover .kl-card-ico { transform: scale(1.08) rotate(-3deg); }
.kl-card h3 { font-family: 'Sora'; font-weight: 600; font-size: 1.32rem; color: var(--ink); letter-spacing: -0.01em; }
.kl-card p { color: var(--body); margin-top: 11px; font-size: 1.01rem; }
.kl-card-arrow { position: absolute; bottom: 28px; right: 30px; color: var(--violet); opacity: 0; transform: translate(-5px,5px); transition: opacity .3s, transform .3s; }
.kl-card:hover .kl-card-arrow { opacity: 1; transform: none; }

.kl-why { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.kl-values { display: grid; gap: 2px; }
.kl-value { display: flex; gap: 18px; padding: 22px 12px; border-bottom: 1px solid var(--line); border-radius: 12px; transition: background .28s, transform .28s; }
.kl-value:last-child { border-bottom: none; }
.kl-value:hover { background: var(--violet-50); transform: translateX(5px); }
.kl-value-ico { flex: none; width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; background: var(--violet-50); color: var(--violet); transition: transform .28s; }
.kl-value:hover .kl-value-ico { transform: scale(1.08); }
.kl-value h4 { font-family: 'Sora'; font-weight: 600; font-size: 1.1rem; color: var(--ink); }
.kl-value p { color: var(--body); font-size: 0.98rem; margin-top: 3px; }

.kl-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 50px; }
.kl-step { padding: 28px 26px 28px 0; position: relative; }
.kl-step-bar { height: 2px; background: var(--line-strong); border-radius: 2px; overflow: hidden; }
.kl-step-bar::after { content: ""; display: block; height: 100%; width: 100%; background: var(--violet); transform: scaleX(0); transform-origin: left; transition: transform .8s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms); }
.kl-step.is-visible .kl-step-bar::after { transform: scaleX(1); }
.kl-step-n { font-family: 'Space Mono'; font-size: 13px; color: var(--violet); letter-spacing: 0.08em; display: block; margin-top: 22px; }
.kl-step h4 { font-family: 'Sora'; font-weight: 600; font-size: 1.22rem; color: var(--ink); margin-top: 12px; letter-spacing: -0.01em; }
.kl-step p { color: var(--body); margin-top: 9px; font-size: 0.97rem; }

.kl-prod-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 48px; }
.kl-prod { position: relative; display: flex; flex-direction: column; align-items: flex-start; border: 1px solid var(--line); border-radius: 20px; padding: 34px; background: var(--surface); overflow: hidden; transition: transform .3s cubic-bezier(.2,.7,.2,1), border-color .3s, box-shadow .3s; }
.kl-prod:hover { transform: translateY(-5px); border-color: var(--violet-100); box-shadow: 0 22px 48px rgba(71,17,203,0.1); }
.kl-prod.soon { background: linear-gradient(180deg, var(--violet-50), var(--surface)); }
.kl-prod-logo { display: flex; align-items: center; height: 52px; }
.kl-prod-name { font-family: 'Sora'; font-weight: 700; font-size: 1.6rem; letter-spacing: -0.02em; color: var(--ink); }
.kl-prod p { color: var(--body); margin-top: 18px; font-size: 1.02rem; }
.kl-prod-link { margin-top: 22px; display: inline-flex; align-items: center; gap: 8px; color: var(--violet); font-weight: 600; font-size: 14px; text-decoration: none; }
.kl-prod-link svg { transition: transform .25s; }
.kl-prod-link:hover svg { transform: translate(3px,-3px); }
.kl-prod-tag { position: absolute; top: 24px; right: 26px; font-family: 'Space Mono'; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); border: 1px solid var(--line); border-radius: 999px; padding: 5px 11px; }
.kl-manifesto { text-align: center; padding: 96px 0; }
.kl-quote { font-family: 'Sora'; font-weight: 600; color: var(--ink); font-size: clamp(1.6rem, 3.6vw, 2.7rem); line-height: 1.22; letter-spacing: -0.02em; max-width: 22ch; margin: 18px auto 0; }
.kl-quote em { font-style: normal; color: var(--violet); }

.kl-cta { position: relative; margin: 0 28px 104px; max-width: 1140px; border-radius: 28px; padding: 76px 40px; text-align: center; overflow: hidden; background: var(--violet); color: #fff; }
@media (min-width: 1196px) { .kl-cta { margin-left: auto; margin-right: auto; } }
.kl-cta::before { content: ""; position: absolute; width: 520px; height: 520px; border-radius: 50%; top: -180px; left: -120px; background: radial-gradient(circle, rgba(255,255,255,0.16), transparent 60%); animation: glowB 16s ease-in-out infinite; }
.kl-cta::after { content: ""; position: absolute; width: 460px; height: 460px; border-radius: 50%; bottom: -200px; right: -100px; background: radial-gradient(circle, rgba(91,34,232,0.5), transparent 62%); animation: glowA 14s ease-in-out infinite; }
.kl-cta h2 { position: relative; font-family: 'Sora'; font-weight: 700; font-size: clamp(1.9rem, 4.4vw, 3.1rem); letter-spacing: -0.03em; line-height: 1.06; }
.kl-cta p { position: relative; color: rgba(255,255,255,0.85); margin: 16px auto 0; max-width: 48ch; font-size: 1.08rem; }
.kl-cta-btns { position: relative; display: flex; flex-wrap: wrap; gap: 13px; justify-content: center; margin-top: 34px; }
.kl-cta .kl-btn-outline { background: transparent; color: #fff; border-color: rgba(255,255,255,0.42); }
.kl-cta .kl-btn-outline:hover { border-color: #fff; color: #fff; }

.kl-footer { border-top: 1px solid var(--line); padding: 60px 0 40px; }
.kl-foot-top { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px; }
.kl-foot-brand { max-width: 32ch; }
.kl-foot-brand p { color: var(--body); margin-top: 18px; font-size: 0.97rem; }
.kl-foot-social { display: flex; gap: 10px; margin-top: 22px; }
.kl-foot-social a { width: 40px; height: 40px; border-radius: 11px; display: grid; place-items: center; color: var(--ink); border: 1px solid var(--line-strong); background: var(--surface); transition: color .2s, border-color .2s, transform .2s, background .2s, box-shadow .2s; }
.kl-foot-social a:hover { color: #fff; background: var(--violet); border-color: var(--violet); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(71,17,203,0.28); }
.kl-foot-cols { display: flex; gap: 64px; flex-wrap: wrap; }
.kl-foot-col h5 { font-family: 'Space Mono'; font-size: 11.5px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
.kl-foot-col a, .kl-foot-col span { display: flex; align-items: center; gap: 8px; color: var(--ink); text-decoration: none; font-size: 0.96rem; margin-bottom: 12px; transition: color .2s, transform .2s; }
.kl-foot-col a:hover { color: var(--violet); transform: translateX(3px); }
.kl-foot-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 14px; margin-top: 50px; padding-top: 26px; border-top: 1px solid var(--line); font-family: 'Space Mono'; font-size: 12px; color: var(--muted); }

.reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms); }
.reveal.is-visible { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .kl-enter, .reveal, .kl-word-in, .kl-h1 .hl, .kl-mk-l, .kl-mk-r, .kl-mk-w { animation: none !important; opacity: 1 !important; transform: none !important; }
  .kl-h1 .hl { -webkit-text-fill-color: var(--violet); }
  .kl-glow, .kl-glow2, .kl-dots, .kl-float, .kl-cta::before, .kl-cta::after, .kl-eyebrow .dot, .kl-herologo::before, .kl-btn-shine::after, .kl-scrollcue svg, .kl-keys-track { animation: none !important; }
  .kl-float { display: none; }
}

@media (max-width: 900px) {
  .kl-links { display: none; }
  .kl-nav .kl-nav-cta { display: none; }
  .kl-burger { display: inline-flex; }
  .kl-grid-cards { grid-template-columns: 1fr; }
  .kl-prod-grid { grid-template-columns: 1fr; }
  .kl-why { grid-template-columns: 1fr; gap: 36px; }
  .kl-steps { grid-template-columns: 1fr 1fr; }
  .kl-mobile.open { display: block; position: fixed; inset: 0; z-index: 39; background: var(--bg); padding: 104px 28px max(28px, env(safe-area-inset-bottom)); overflow-y: auto; animation: klUp .4s ease forwards; }
  .kl-mobile.open a:not(.kl-btn) { display: block; font-family: 'Sora'; font-weight: 600; font-size: 1.6rem; color: var(--ink); padding: 16px 0; text-decoration: none; border-bottom: 1px solid var(--line); }
  .kl-mobile.open .kl-btn { margin-top: 24px; width: 100%; justify-content: center; }
}
@media (max-width: 560px) {
  .kl-container { padding: 0 18px; }
  .kl-steps { grid-template-columns: 1fr; }
  .kl-cta { padding: 54px 24px; margin: 0 18px 90px; }
  .kl-btn { min-height: 44px; }
  .kl-hero-cta { flex-direction: column; align-items: stretch; }
  .kl-hero-cta .kl-btn { width: 100%; justify-content: center; }
  .kl-float { display: none; }
  .kl-glow2 { animation: none; opacity: .5; }
}
`;

const services = [
  { icon: Code2, t: "Software sob medida", d: "Sistemas e aplicações customizáveis, construídos do zero para a realidade do seu negócio. Nada de templates engessados." },
  { icon: Globe, t: "Plataformas web", d: "Aplicações web rápidas, acessíveis e escaláveis, pensadas para crescer junto com a sua operação." },
  { icon: Boxes, t: "Produtos digitais", d: "Do protótipo ao produto: design, desenvolvimento e evolução contínua de experiências digitais completas." },
  { icon: Compass, t: "Consultoria & tecnologia", d: "Arquitetura, integração e estratégia digital para você tomar decisões técnicas com segurança." },
];
const values = [
  { icon: Users, t: "Modelo cooperativo", d: "Somos uma cooperativa de desenvolvimento de software: quem constrói é dono do próprio trabalho." },
  { icon: HeartHandshake, t: "Centrado em pessoas", d: "Traduzimos complexidade em interfaces inteligíveis e amigáveis." },
  { icon: Sparkles, t: "Impacto social positivo", d: "Acreditamos que tecnologia bem feita transforma realidades." },
  { icon: Code2, t: "Sob medida de verdade", d: "Cada solução nasce do seu problema, não de um molde pronto." },
];
const steps = [
  { n: "01", t: "Descoberta", d: "Entendemos o problema, o contexto e as pessoas envolvidas." },
  { n: "02", t: "Design", d: "Desenhamos a experiência e a arquitetura da solução." },
  { n: "03", t: "Desenvolvimento", d: "Construímos com qualidade, transparência e entregas contínuas." },
  { n: "04", t: "Evolução", d: "Acompanhamos, medimos e melhoramos o que está no ar." },
];
const navItems = [
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Produtos", href: "#produtos", id: "produtos" },
  { label: "Contato", href: "#contato", id: "contato" },
];
const keys = ["Sistemas web", "Aplicativos", "APIs", "Integrações", "SaaS", "Automação", "UX / UI", "Dashboards"];
const WHATSAPP = "https://wa.me/5582982051109?text=" + encodeURIComponent("Olá! Gostaria de falar com a Kunlatek sobre um projeto.");
const products = [
  { name: "Kunlatalk", logo: "kunlatalk", url: "https://kunlatalk.com.br/", d: "Atendentes de IA com a identidade da sua marca. Vendem, atendem e fidelizam pelo WhatsApp, 24 horas por dia." },
  { name: "Mezuri", logo: "mezuri", url: null, soon: true, d: "Novo produto da Kunlatek. Em breve por aqui." },
];

export default function KunlatekLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [active, setActive] = useState("");
  const rootRef = useRef(null);
  const progressRef = useRef(null);
  const heroLogoRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const y = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      const frac = max > 0 ? y / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${frac})`;
      if (heroLogoRef.current) {
        if (y <= 0) { heroLogoRef.current.style.opacity = ""; heroLogoRef.current.style.transform = ""; }
        else {
          const o = Math.max(0, Math.min(1, 1 - y / 96));
          heroLogoRef.current.style.opacity = String(o);
          heroLogoRef.current.style.transform = `translateY(${(1 - o) * -18}px) scale(${0.94 + o * 0.06})`;
        }
      }
      setShowBar(y > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll(".reveal, .kl-step") ?? [];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.14 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-50% 0px -48% 0px", threshold: 0 });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  const onHeroMove = (e) => {
    if (!parallaxRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    parallaxRef.current.style.transform = `translate3d(${x * -24}px, ${y * -18}px, 0)`;
  };
  const onHeroLeave = () => { if (parallaxRef.current) parallaxRef.current.style.transform = ""; };

  return (
    <div className="kl" ref={rootRef}>
      <style>{CSS}</style>
      <div className="kl-progress" ref={progressRef} aria-hidden />

      <div className="kl-wrap">
        <nav className={`kl-nav ${showBar ? "visible" : ""}`}>
          <div className="kl-container kl-nav-in">
            <a href="#top" className="kl-logo" aria-label="Kunlatek, início"><BrandLogo height={26} /></a>
            <div className="kl-links">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className={active === n.id ? "active" : ""}>{n.label}</a>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="kl-btn kl-btn-primary kl-nav-cta">Iniciar projeto <ArrowUpRight size={16} /></a>
              <button className="kl-burger" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Menu">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        <div className={`kl-mobile ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
          {navItems.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="kl-btn kl-btn-primary" onClick={() => setMenuOpen(false)}>Iniciar projeto <ArrowUpRight size={17} /></a>
        </div>

        <header className="kl-hero" id="top" onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
          <div className="kl-parallax" ref={parallaxRef} aria-hidden>
            <div className="kl-glow" />
            <div className="kl-glow2" />
            <div className="kl-dots" />
            <div className="kl-floats">
              {FLOATS.map((f, i) => (
                <span key={i} className="kl-float" style={{ left: f.l, top: f.t, animationDuration: f.dur, animationDelay: f.delay, "--op": f.op, "--rot": `${f.rot}deg` }}>
                  <IconMark height={f.h} />
                </span>
              ))}
            </div>
          </div>

          <div className="kl-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="kl-herologo" ref={heroLogoRef}><BrandLogo height={66} /></div>
            <h1 className="kl-h1">
              {HEADLINE.map((w, i) => (
                <React.Fragment key={i}>
                  <span className="kl-word"><span className={`kl-word-in${w.hl ? " hl" : ""}`} style={{ animationDelay: `${0.5 + i * 0.06}s` }}>{w.t}</span></span>{" "}
                </React.Fragment>
              ))}
            </h1>
            <p className="kl-lead kl-enter" style={{ animationDelay: "1s" }}>
              Desenvolvemos software sob medida, plataformas web e produtos digitais que conectam
              soluções tecnológicas a quem realmente importa: as pessoas.
            </p>
            <div className="kl-hero-cta kl-enter" style={{ animationDelay: "1.13s" }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="kl-btn kl-btn-primary kl-btn-shine">Iniciar um projeto <ArrowRight size={17} /></a>
              <a href="#sobre" className="kl-btn kl-btn-outline">Conhecer a Kunlatek</a>
            </div>
            <div className="kl-keys kl-enter" style={{ animationDelay: "1.26s" }} aria-label="O que desenvolvemos">
              <div className="kl-keys-track">
                {[...keys, ...keys].map((k, i) => (<span className="kl-key" key={i}>{k}</span>))}
              </div>
            </div>
            <div className="kl-scrollcue kl-enter" style={{ animationDelay: "1.4s" }}>
              <span>role para explorar</span>
              <ChevronDown size={18} />
            </div>
          </div>
        </header>

        <section className="kl-section" id="servicos">
          <div className="kl-container">
            <div className="kl-head reveal">
              <span className="kl-kicker">O que fazemos</span>
              <h2 className="kl-h2">Soluções digitais do conceito ao código.</h2>
              <p className="kl-sec-lead">Unimos design, engenharia e estratégia para construir produtos que funcionam de verdade e que as pessoas entendem na primeira vez.</p>
            </div>
            <div className="kl-grid-cards">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article key={s.t} className="kl-card reveal" style={{ "--d": `${(i % 2) * 90 + Math.floor(i / 2) * 60}ms` }}>
                    <ArrowUpRight className="kl-card-arrow" size={22} />
                    <div className="kl-card-ico"><Icon size={25} /></div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="kl-section" id="sobre">
          <div className="kl-container kl-why">
            <div className="kl-head reveal">
              <span className="kl-kicker">Por que a Kunlatek</span>
              <h2 className="kl-h2">Uma ponte amigável entre tecnologia e pessoas.</h2>
              <p className="kl-sec-lead">Nascemos como cooperativa de desenvolvimento de software com uma missão clara: viabilizar uma interface inteligível e amigável entre soluções tecnológicas e pessoas. Tecnologia bem feita não precisa ser complicada. Precisa ser humana.</p>
            </div>
            <div className="kl-values">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div className="kl-value reveal" key={v.t} style={{ "--d": `${i * 80}ms` }}>
                    <div className="kl-value-ico"><Icon size={21} /></div>
                    <div><h4>{v.t}</h4><p>{v.d}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="kl-section" id="processo">
          <div className="kl-container">
            <div className="kl-head reveal">
              <span className="kl-kicker">Como trabalhamos</span>
              <h2 className="kl-h2">Um processo transparente do início ao fim.</h2>
            </div>
            <div className="kl-steps">
              {steps.map((s, i) => (
                <div className="kl-step" key={s.n} style={{ "--d": `${i * 130}ms` }}>
                  <div className="kl-step-bar" />
                  <span className="kl-step-n">{s.n}</span>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="kl-section" id="produtos">
          <div className="kl-container">
            <div className="kl-head reveal">
              <span className="kl-kicker">Nossos produtos</span>
              <h2 className="kl-h2">Produtos próprios, criados pela Kunlatek.</h2>
              <p className="kl-sec-lead">Além dos projetos sob medida, desenvolvemos e mantemos produtos próprios para resolver problemas reais.</p>
            </div>
            <div className="kl-prod-grid">
              {products.map((p, i) => (
                <article key={p.name} className={`kl-prod reveal${p.soon ? " soon" : ""}`} style={{ "--d": `${i * 90}ms` }}>
                  {p.soon && <span className="kl-prod-tag">Em breve</span>}
                  <div className="kl-prod-logo">
                    {p.logo === "kunlatalk" ? <KunlatalkLogo height={34} /> : p.logo === "mezuri" ? <MezuriLogo height={48} /> : <span className="kl-prod-name">{p.name}</span>}
                  </div>
                  <p>{p.d}</p>
                  {p.url && (
                    <a className="kl-prod-link" href={p.url} target="_blank" rel="noreferrer">Visitar site <ArrowUpRight size={16} /></a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="kl-manifesto">
          <div className="kl-container">
            <span className="kl-kicker reveal">Nossa missão</span>
            <p className="kl-quote reveal" style={{ "--d": "100ms" }}>
              Viabilizar uma interface <em>inteligível</em> e <em>amigável</em> entre soluções tecnológicas e pessoas.
            </p>
          </div>
        </section>

        <section className="kl-cta reveal" id="contato">
          <h2>Vamos construir algo juntos?</h2>
          <p>Conte o que você precisa. A gente transforma a sua ideia em um produto digital sob medida.</p>
          <div className="kl-cta-btns">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="kl-btn kl-btn-white">Falar com a Kunlatek <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <footer className="kl-footer">
          <div className="kl-container">
            <div className="kl-foot-top">
              <div className="kl-foot-brand">
                <a href="#top" className="kl-logo" aria-label="Kunlatek"><BrandLogo height={24} /></a>
                <p>Cooperativa de desenvolvimento de software que constrói soluções sob medida com foco em pessoas.</p>
                <div className="kl-foot-social">
                  <a href="https://www.linkedin.com/company/kunlatek/" target="_blank" rel="noreferrer" aria-label="LinkedIn da Kunlatek"><Linkedin size={18} /></a>
                  <a href="https://www.instagram.com/kunlatek/" target="_blank" rel="noreferrer" aria-label="Instagram da Kunlatek"><Instagram size={18} /></a>
                </div>
              </div>
              <div className="kl-foot-cols">
                <div className="kl-foot-col">
                  <h5>Navegação</h5>
                  {navItems.map((n) => (<a key={n.href} href={n.href}>{n.label}</a>))}
                  <a href="#cookies" onClick={(e) => { e.preventDefault(); openCookiePreferences(); }}>Preferências de cookies</a>
                </div>
                <div className="kl-foot-col">
                  <h5>Contato</h5>
                  <a href="mailto:contato@kunlatek.com"><Mail size={15} /> contato@kunlatek.com</a>
                  <a href="https://wa.me/5582982051109" target="_blank" rel="noreferrer"><Phone size={15} /> +55 82 9 8205-1109</a>
                  <span><MapPin size={15} /> Maceió · Alagoas · Brasil</span>
                </div>
              </div>
            </div>
            <div className="kl-foot-bottom">
              <span>© {new Date().getFullYear()} Kunlatek · CNPJ 36.899.179/0001-08</span>
              <span>Feito com tecnologia + pessoas</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
