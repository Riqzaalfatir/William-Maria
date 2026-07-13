"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE = [
  "/images/opening/OpeningBackground.webp",
  "/images/hero/Pengantin-Wm3.webp",
  "/images/profile/Layer-BM.png",
  "/images/pengantin/Sl-Wima.webp",
  "/images/gallery/Pengantin.webp",
];

const IMAGES_DESKTOP = [
  "/images/opening/OpeningBackgroundD.webp",
  "/images/hero/HeroD.webp",
  "/images/profile/LayerBunga2.webp",
  "/images/pengantin/Sl-WIMAD.webp",
  "/images/gallery/PengantinD.webp",
];

const IMAGES_COMMON = [
  "/images/opening/Wil-Mar.webp",
  "/images/hero/Logo-WmD.png",
  "/images/profile/William.webp",
  "/images/profile/Maria.webp",
  "/images/eventorder/LogoD.webp"
];

const VIDEO_MOBILE = "/video/Wil-Maria-compressed.mp4";
const VIDEO_DESKTOP = "/video/Wil-MariaD-compressed.mp4";

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= BREAKPOINT;
    const imagesToLoad = [
      ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),
      ...IMAGES_COMMON,
    ];
    const videoToLoad = isDesktop ? VIDEO_DESKTOP : VIDEO_MOBILE;

    const total = imagesToLoad.length + 1;

    if (total === 0) {
      const timer = setTimeout(() => {
        setLoaded(true);
        setProgress(100);
      }, 0);
      return () => clearTimeout(timer);
    }

    let count = 0;

    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      };
    });

    fetch(videoToLoad)
      .then(() => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      })
      .catch(() => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      });
  }, []);

  return { loaded, progress };
}