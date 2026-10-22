import React from "react";
import { uiScreens } from "../data/uiScreens.js";

export default function PhoneMockup({
  screen = "home",
  className = "",
  priority = false,
}) {
  const image = uiScreens[screen] ?? uiScreens.home;

  return (
    <figure
      className={`ui-screen-frame device-mockup ${className}`}
      data-screen={screen}
      style={{ "--screen-aspect": `${image.width} / ${image.height}` }}
    >
      <div className="device-frame">
        <div className="device-screen-mask">
          <img
            className="device-screen-content"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            decoding="async"
          />
        </div>
      </div>
    </figure>
  );
}
