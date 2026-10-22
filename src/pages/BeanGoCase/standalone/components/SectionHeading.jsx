import React from "react";
import Reveal from "./Reveal.jsx";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  light = false,
}) {
  const [english, ...chineseParts] = eyebrow.split(" / ");
  const chinese = chineseParts.join(" / ");

  return (
    <Reveal
      className={`section-heading ${light ? "section-heading-light" : ""}`}
    >
      <div className="section-title-lockup">
        <span className="section-index-orb">{index}</span>
        <div className="section-title-copy">
          <span className="section-heading-english">{english}</span>
          {chinese && <span className="section-heading-chinese">{chinese}</span>}
        </div>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}
