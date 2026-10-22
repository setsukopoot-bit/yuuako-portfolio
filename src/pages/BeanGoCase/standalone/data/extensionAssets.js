const pngAssets = import.meta.glob("../assets/beango/**/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const svgAssets = import.meta.glob("../assets/beango/**/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

function findAsset(collection, fileName) {
  const entry = Object.entries(collection).find(([path]) =>
    path.endsWith(`/${fileName}`),
  );
  return entry?.[1] ?? "";
}

export function beangoPng(fileName) {
  return findAsset(pngAssets, fileName);
}

export function beangoSvg(fileName) {
  return findAsset(svgAssets, fileName);
}

export const mascotAssets = {
  twoD: beangoPng("mascot-2d.png"),
  threeD: beangoPng("mascot-3d.png"),
  threeView: beangoPng("mascot-three-view.png"),
  twoDView: beangoPng("mascot-three-view-2d.png"),
  lineView: beangoPng("mascot-three-view-line.png"),
};

export const dailyStickers = Array.from({ length: 7 }, (_, index) =>
  beangoPng(`sticker-daily-${String(index + 1).padStart(2, "0")}.png`),
);

export const opsStickers = Array.from({ length: 9 }, (_, index) =>
  beangoPng(`sticker-ops-${String(index + 1).padStart(2, "0")}.png`),
);

export const stateAssets = {
  loading: Array.from({ length: 3 }, (_, index) =>
    beangoPng(`loading-${String(index + 1).padStart(2, "0")}.png`),
  ),
  empty: Array.from({ length: 3 }, (_, index) =>
    beangoPng(`empty-${String(index + 1).padStart(2, "0")}.png`),
  ),
  popup: Array.from({ length: 6 }, (_, index) =>
    beangoPng(`popup-${String(index + 1).padStart(2, "0")}.png`),
  ),
};

export const entryExperienceAssets = {
  splash: beangoPng("entry-splash.png"),
  onboarding01: beangoPng("entry-onboarding-01.png"),
  onboarding03: beangoPng("entry-onboarding-03.png"),
};

export const campaignAssets = {
  h5: {
    banner: beangoPng("campaign-banner.png"),
    overview: beangoPng("campaign-overview.png"),
    why: beangoPng("campaign-why.png"),
    topics: beangoPng("campaign-topics.png"),
    howToJoin: beangoPng("campaign-how-to-join.png"),
    points: beangoPng("campaign-points.png"),
    rules: beangoPng("campaign-rules.png"),
    featuredPopup: beangoPng("campaign-featured-popup.png"),
    publishSuccess: beangoPng("campaign-publish-success.png"),
    share: beangoPng("campaign-share.png"),
  },
  newcomer: {
    banner: beangoPng("campaign-newcomer-banner.png"),
    overview: beangoPng("campaign-newcomer-overview.png"),
    why: beangoPng("campaign-newcomer-why.png"),
    howToJoin: beangoPng("campaign-newcomer-how-to-join.png"),
    rewards: beangoPng("campaign-newcomer-rewards.png"),
    benefitsPopup: beangoPng("campaign-newcomer-benefits-popup.png"),
    rewardSuccess: beangoPng("campaign-newcomer-reward-success.png"),
    noReward: beangoPng("campaign-newcomer-no-reward.png"),
    shareRewards: beangoPng("campaign-newcomer-share-rewards.png"),
    sharePopup: beangoPng("campaign-newcomer-share-popup.png"),
    rules: beangoPng("campaign-newcomer-rules.png"),
  },
};

export function iconSource(fileName, type) {
  return type === "svg" ? beangoSvg(fileName) : beangoPng(fileName);
}

export const logoAsset = beangoSvg("beango-logo.svg");
