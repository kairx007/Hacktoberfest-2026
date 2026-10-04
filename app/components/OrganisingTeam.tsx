import Image from "next/image";
import { organisers } from "../data/organisers";

type OrganisingTeamProps = {
  flipped: boolean;
  onFlip: () => void;
  onUnflip: () => void;
};

export default function OrganisingTeam({ flipped, onFlip, onUnflip }: OrganisingTeamProps) {
  return (
    <div
      className={`committee-flipper${flipped ? " is-flipped" : ""}`}
      onClick={onFlip}
    >
      <div className="committee-flip-inner">
        <section className="committee-column committee-face committee-front" aria-labelledby="committee-title" aria-hidden={flipped}>
          <p className="eyebrow">✦ &nbsp;The builders behind the event</p>
          <h2 id="committee-title">Organising team</h2>
          <article className="pixel-card organiser-card lead-organiser-card">
            <div className="organiser-photo-frame">
              <Image className="organiser-photo" src="/lead-organiser.png" alt="Lead organiser" width={900} height={1200} sizes="(max-width: 600px) 50vw, 168px" />
            </div>
            <div className="organiser-nameplate">
              <h3>Lead organiser</h3>
              <p>Name coming soon</p>
            </div>
          </article>
          <h3 className="organisers-label">Organisers</h3>
          <div className="organiser-list">
            {organisers.map((organiser) => (
              <article className="pixel-card organiser-card" key={organiser.image}>
                <div className="organiser-photo-frame">
                  <Image className="organiser-photo" src={organiser.image} alt={organiser.alt} width={900} height={900} sizes="(max-width: 600px) 40vw, 104px" />
                </div>
                <div className="organiser-nameplate">
                  <h3>Organiser</h3>
                  <p>{organiser.name}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="committee-back committee-face" aria-label="Event organisations" aria-hidden={!flipped}>
          <p className="eyebrow">✦ &nbsp;Built together</p>
          <h2>Organisations</h2>
          <p className="partners-intro">Communities building open source together.</p>
          <div className="partner-logos">
            <div className="org-logo"><Image src="/oscode-dharwad.png" alt="OSCode IIIT Dharwad Chapter" width={800} height={800} /></div>
            <div className="org-logo"><Image src="/velocity.png" alt="Velocity" width={800} height={900} /></div>
            <div className="org-logo"><Image src="/vidkarya.png" alt="Vidkarya" width={1200} height={400} /></div>
            <div className="org-logo"><Image src="/return0.png" alt="Return 0 Coding Club" width={800} height={800} /></div>
          </div>
          <button className="flip-hint back-hint" onClick={(event) => { event.stopPropagation(); onUnflip(); }}>
            ↶ Back to organisers
          </button>
        </section>
      </div>
    </div>
  );
}
