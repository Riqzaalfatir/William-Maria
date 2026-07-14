"use client";

import { useSyncExternalStore, forwardRef } from "react";

type Props = {
  mobileSrc: string;
  desktopSrc: string;
  className?: string;
};

const QUERY = "(min-width: 1024px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

const ResponsiveVideo = forwardRef<HTMLVideoElement, Props>(
  ({ mobileSrc, desktopSrc, className }, ref) => {
    const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const hasMounted = useSyncExternalStore(
      () => () => {},
      () => true,
      () => false
    );

    if (!hasMounted) return null;

    return (
      <video
        ref={ref}
        key={isDesktop ? "desktop" : "mobile"}
        loop
        playsInline
        className={className}
      >
        <source src={isDesktop ? desktopSrc : mobileSrc} type="video/mp4" />
      </video>
    );
  }
);

ResponsiveVideo.displayName = "ResponsiveVideo";

export default ResponsiveVideo;