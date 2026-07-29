"use client";

import { useState } from "react";

const confessions = [
  "Ася, ты — моё самое тёплое мур-мур",
  "Люблю тебя до луны и обратно. На мягких лапках.",
  "Рядом с тобой даже понедельник — уютный",
  "Ты лучше коробки. А это очень серьёзно.",
];

function Cat({
  color,
  accent,
  className = "",
}: {
  color: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`cat ${className}`}
      style={{ "--cat": color, "--accent": accent } as React.CSSProperties}
      aria-hidden="true"
    >
      <span className="cat-tail" />
      <span className="cat-body" />
      <span className="cat-head">
        <i className="ear ear-left" />
        <i className="ear ear-right" />
        <i className="eye eye-left" />
        <i className="eye eye-right" />
        <i className="nose" />
        <i className="whisker whisker-left" />
        <i className="whisker whisker-right" />
      </span>
      <span className="cat-paw paw-left" />
      <span className="cat-paw paw-right" />
    </div>
  );
}

export default function Home() {
  const [note, setNote] = useState(0);
  const [burst, setBurst] = useState(0);

  const nextConfession = () => {
    setNote((current) => (current + 1) % confessions.length);
    setBurst((current) => current + 1);
  };

  return (
    <main>
      <div className="grain" />
      <div className="floating-hearts" aria-hidden="true">
        {["♡", "♥", "♡", "♥", "♡", "♥"].map((heart, index) => (
          <span key={`${burst}-${index}`} style={{ "--i": index } as React.CSSProperties}>
            {heart}
          </span>
        ))}
      </div>

      <nav aria-label="Главная навигация">
        <a className="logo" href="#top" aria-label="Котики любят Асю">
          котики <span>♥</span> асю
        </a>
        <a className="nav-note" href="#confession">
          одно важное мяу ↓
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">
          <span>официальное заявление</span>
          <span className="line" />
          <span>от всех котиков мира</span>
        </div>
        <h1>
          Ася, тебя
          <span className="scribble"> любят</span>
          <br />
          <em>очень-очень.</em>
        </h1>
        <p className="intro">
          Мы провели серьёзное кошачье исследование и выяснили:
          <br />
          ты — причина как минимум <strong>9 из 9</strong> счастливых мурчаний.
        </p>

        <div className="cat-stage">
          <div className="speech speech-left">
            <span>мяу!</span>
            это значит
            <br />
            «люблю Асю»
          </div>
          <Cat color="#ef8354" accent="#b7472c" className="cat-orange" />
          <div className="heart-main" aria-hidden="true">
            ♥
          </div>
          <Cat color="#262321" accent="#5e5751" className="cat-black" />
          <div className="speech speech-right">
            <span>мр-р-р</span>
            это тоже
            <br />
            про Асю
          </div>
          <div className="ground">
            <span>лапки здесь</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Кошачьи признания">
        <div>
          АСЯ — ЛЮБОВЬ · АСЯ — УЮТ · АСЯ — САМАЯ-САМАЯ · МУР-МУР-МУР ·{" "}
          АСЯ — ЛЮБОВЬ · АСЯ — УЮТ · АСЯ — САМАЯ-САМАЯ · МУР-МУР-МУР ·
        </div>
      </section>

      <section className="confession" id="confession">
        <div className="number">№ 09</div>
        <div className="note-card">
          <span className="tape" aria-hidden="true" />
          <p className="tiny">кошачья записка для аси</p>
          <blockquote key={note}>«{confessions[note]}»</blockquote>
          <button type="button" onClick={nextConfession}>
            Ещё одно признание
            <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="small-cat-wrap">
          <div className="mini-note">это чистая правда!</div>
          <Cat color="#e8d4b8" accent="#9d7658" className="cat-small" />
        </div>
      </section>

      <footer>
        <span>Сделано с любовью, шерстью и немножко магией</span>
        <strong>для Аси ♥</strong>
      </footer>
    </main>
  );
}
