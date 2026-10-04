import Image from "next/image";

export default function EventDetails() {
  return (
    <section className="event-column" aria-labelledby="event-title">
      <p className="eyebrow">⛏ &nbsp;Your next build starts here</p>
      <h1 id="event-title" className="event-title mx-auto max-w-full text-center text-[10vw] font-black leading-none sm:text-6xl">
        Register &amp; Join
      </h1>
      <p className="intro">
        Join the Dharwad open source community to learn, build, contribute, and connect.
      </p>

      <div className="event-facts">
        <article className="pixel-card detail-card">
          <span className="card-icon" aria-hidden="true">📅</span>
          <div>
            <p className="card-label">When</p>
            <h2>18th October 2026, IIIT Dharwad</h2>
          </div>
        </article>
      </div>

      <div className="event-actions">
        <a
          className="register-button"
          href="https://hacktoberfest.com/fests/?q=Dharwad&amp;fest=01a0f6f3-9a2c-d7f1-88f0-b03cfcc5b1a1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
        <a
          className="community-button"
          href="https://chat.whatsapp.com/F6P151g0I9ZA4AIVF8I9ix"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join WhatsApp Community
        </a>
      </div>

      <section className="sponsors-section" aria-labelledby="sponsors-title">
        <p className="card-label">Proudly sponsored by</p>
        <h2 id="sponsors-title">MLIH</h2>
        <Image src="/sponsor-mlih.png" alt="Major League Hacking (MLH)" width={600} height={600} />
      </section>
    </section>
  );
}
