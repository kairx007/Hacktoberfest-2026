"use client";

import { useRef, useState, type TouchEvent, type WheelEvent } from "react";
import EventDetails from "./EventDetails";
import OrganisingTeam from "./OrganisingTeam";

export default function HacktoberfestExperience() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommitteeFlipped, setIsCommitteeFlipped] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const touchStart = useRef<{ x: number; y: number; inPanel: boolean } | null>(null);

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    const touch = event.touches[0];
    if (!touch) return;
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      inPanel: event.target instanceof Element && Boolean(event.target.closest(".details-page")),
    };
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch || Math.abs(touch.clientY - start.y) < 50 || Math.abs(touch.clientY - start.y) < Math.abs(touch.clientX - start.x) * 1.2) return;

    const swipedUp = touch.clientY < start.y;
    if (!start.inPanel && swipedUp) setIsOpen(true);
    if (start.inPanel && !swipedUp && panelRef.current?.scrollTop === 0) setIsOpen(false);
  }

  function handleWheel(event: WheelEvent<HTMLElement>) {
    const panel = panelRef.current;
    const canScrollPanel = panel && (
      (event.deltaY < 0 && panel.scrollTop > 0) ||
      (event.deltaY > 0 && panel.scrollTop + panel.clientHeight < panel.scrollHeight - 1)
    );
    if (isOpen && canScrollPanel) return;
    event.preventDefault();
    if (event.deltaY > 0) setIsOpen(true);
    if (event.deltaY < 0) setIsOpen(false);
  }

  return (
    <main className="landing-experience" onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <section
        className={`landing-page${isOpen ? " is-open" : ""}`}
        aria-label="Zeroday OSS Hacktoberfest"
      >
        <picture>
          <source media="(max-width: 600px)" srcSet="/zeroday-landing-mobile.png" />
          <img src="/zeroday-landing.webp" alt="Zeroday OSS Hacktoberfest Dharwad 2026" className="landing-banner" />
        </picture>
        <div className="parallax-pixels" aria-hidden="true" />
        <div className="hero-copy" aria-labelledby="hero-title">
          <p className="hero-kicker"><span className="hero-signal" aria-hidden="true" /> Dharwad <span aria-hidden="true">·</span> 2026</p>
          <h1 id="hero-title">Zeroday <span>OSS</span></h1>
          <p className="hero-event-name">Hacktoberfest</p>
          <div className="hero-pillars" aria-label="Open source, learn, build, together">
            <span>Open source</span><i aria-hidden="true" />
            <span>Learn</span><i aria-hidden="true" />
            <span>Build</span><i aria-hidden="true" />
            <span>Together</span>
          </div>
          <p className="hero-tagline">Make something that matters.</p>
        </div>
        {!isOpen && (
          <button className="scroll-cue" onClick={() => setIsOpen(true)}>
            <span aria-hidden="true">↓</span> Scroll to explore
          </button>
        )}
      </section>

      <section
        ref={panelRef}
        className="details-page"
        aria-label="Event details and organising team"
        style={{ transform: `translateY(${isOpen ? 0 : 100}%)` }}
      >
        <button className="panel-close" onClick={() => setIsOpen(false)}>
          ↑ &nbsp; Back to banner
        </button>
        <div className="details-content">
          <EventDetails />
          <OrganisingTeam
            flipped={isCommitteeFlipped}
            onFlip={() => setIsCommitteeFlipped((value) => !value)}
            onUnflip={() => setIsCommitteeFlipped(false)}
          />
        </div>
      </section>
    </main>
  );
}
