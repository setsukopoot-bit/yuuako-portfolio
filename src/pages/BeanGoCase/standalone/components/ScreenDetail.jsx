import React from "react";
import { uiScreens } from "../data/uiScreens.js";

export default function ScreenDetail({ screen, detail, index }) {
  const image = uiScreens[screen];
  const { x, y, width, height } = detail.crop;
  const cropStyle = {
    aspectRatio: (width / height).toString(),
    "--detail-image-width": `${(image.width / width) * 100}%`,
    "--detail-image-left": `${(-x / width) * 100}%`,
    "--detail-image-top": `${(-y / height) * 100}%`,
  };

  return (
    <div className="detail-item">
      <div className="detail-image" style={cropStyle}>
        <img
          src={image.src}
          alt={`${image.alt}局部：${detail.title}`}
          loading="lazy"
        />
      </div>
      <div className="detail-description">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div>
          <strong>{detail.title}</strong>
          <p>{detail.text}</p>
        </div>
      </div>
    </div>
  );
}
