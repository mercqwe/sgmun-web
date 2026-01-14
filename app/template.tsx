"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/utils/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      {/* Full banner */}
      <div
        id="banner"
        className="fixed inset-0 bg-neutral-950 z-200 flex flex-col items-center justify-center gap-6"
      >
        <div className="text-white text-3xl font-bold tracking-wide">
          SGMUN&apos;26
        </div>

        {/* Spinner */}
        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </div>

      {/* Top panel */}
      <div
        id="panel-top"
        className="fixed top-0 left-0 w-full h-1/2 bg-neutral-950 z-199"
      />

      {/* Bottom panel */}
      <div
        id="panel-bottom"
        className="fixed bottom-0 left-0 w-full h-1/2 bg-neutral-950 z-199"
      />

      {children}
    </div>
  );
}
