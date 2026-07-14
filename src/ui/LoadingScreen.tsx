"use client";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  progress: number;
  onDone?: () => void;
};

export default function LoadingScreen({ progress, onDone }: Props) {
  const fading = progress === 100;

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => onDone?.(), 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#F9FBFA]"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 600ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-[24px] left-[24px] w-[24px] h-[24px] border-t border-l border-[#51483F]/25" />
      <div className="absolute top-[24px] right-[24px] w-[24px] h-[24px] border-t border-r border-[#51483F]/25" />
      <div className="absolute bottom-[24px] left-[24px] w-[24px] h-[24px] border-b border-l border-[#51483F]/25" />
      <div className="absolute bottom-[24px] right-[24px] w-[24px] h-[24px] border-b border-r border-[#51483F]/25" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p className="font-athelas italic text-[3.08vw] lg:text-[13px] text-[#717071] tracking-[0.2em]">
          The Wedding of
        </p>

        <h1 className="font-duende text-[13vw] lg:text-[52px] text-[#50473F] mt-[8px] leading-none">
          William & Maria
        </h1>

        <p className="font-athelas text-[2.82vw] lg:text-[12px] text-[#717071] mt-[14px] tracking-[0.15em]">
          19 SEPTEMBER 2026
        </p>

        {/* Progress bar */}
        <div className="mt-[36px] w-[46vw] lg:w-[220px] h-[1px] rounded-full overflow-hidden bg-[#51483F]/15">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out bg-[#51483F]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-athelas text-[2.56vw] lg:text-[10px] text-[#717071]/70 mt-[10px] tabular-nums">
          {progress}%
        </p>
      </div>
    </div>
  );
}
