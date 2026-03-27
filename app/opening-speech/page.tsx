"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Maximize2,
  Minimize2,
  ArrowLeft,
  ArrowRight,
  X,
  Plus,
} from "lucide-react";

// --- IMPORT THE MAPPING HELPERS ---
import { getCountryData, getAllCountries } from "@/lib/munCountries";

interface NationEntry {
  id: string;
  name: string;
  code: string;
}

export default function OpeningSpeechesPage() {
  const [nations, setNations] = useState<NationEntry[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  // NEW: State for search suggestions
  const [suggestions, setSuggestions] = useState<
    { name: string; code: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFull, setIsFull] = useState(false);

  const allCountries = getAllCountries();

  // --- 1. Helper Functions ---
  const getFlagUrl = (
    code: string | undefined,
    size: "small" | "large" = "small",
  ) => {
    if (!code)
      return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    const width = size === "large" ? "w1280" : "w80";
    return `https://flagcdn.com/${width}/${code.toLowerCase()}.png`;
  };
  const handleGoLive = () => {
    setIsFull(true);
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => {
        console.error(`Fullscreen error: ${err.message}`);
      });
    }
  };

  const exitLive = () => {
    setIsFull(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  // NEW: Filter suggestions as you type
  const handleInputChange = (val: string) => {
    setCurrentInput(val);
    if (val.trim().length > 0) {
      const filtered = allCountries
        .filter((c) => c.name.toLowerCase().includes(val.toLowerCase()))
        .slice(0, 5); // Limit to 5 for clean UI
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // NEW: Helper to add from a clicked suggestion
  const addNationFromData = (data: { name: string; code: string }) => {
    if (nations.some((n) => n.code === data.code)) return;
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `id-${Math.random().toString(36).substring(2, 11)}`;

    setNations([...nations, { id, name: data.name, code: data.code }]);
    setCurrentInput("");
    setSuggestions([]);
  };

  const addNation = () => {
    const data = getCountryData(currentInput);
    if (data && data.name) {
      addNationFromData({ name: data.name, code: data.code });
    } else if (currentInput) {
      alert(`Country "${currentInput}" not recognized.`);
    }
  };

  const nextSpeech = useCallback(() => {
    if (currentIndex < nations.length - 1) setCurrentIndex((prev) => prev + 1);
  }, [currentIndex, nations.length]);

  const prevSpeech = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  }, [currentIndex]);

  // --- 2. Keyboard Navigation ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFull) return;
      if (e.key === "ArrowRight") nextSpeech();
      if (e.key === "ArrowLeft") prevSpeech();
      if (e.key === "Escape") exitLive();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFull, nextSpeech, prevSpeech]);

  const currentNation = nations[currentIndex];

  // --- 3. FULLSCREEN VIEW (Stage Mode) ---
  if (isFull && currentNation) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col justify-between p-6 z-50 text-white overflow-hidden select-none">
        <Button
          variant="ghost"
          className="absolute top-4 right-4 opacity-5 hover:opacity-100 text-white z-50"
          onClick={exitLive}
        >
          <Minimize2 className="w-4 h-4" />
        </Button>

        <div className="h-[5vh] flex justify-between items-center opacity-30 px-6 border-b border-white/5">
          <p className="text-lg tracking-[0.4em] font-light">SGMUN '26</p>
          <p className="text-lg tracking-[0.4em] font-light uppercase text-right">
            Opening Speeches
          </p>
        </div>

        <div className="grow flex flex-col items-center justify-center gap-4 py-4">
          <div className="relative h-[45vh] aspect-video shadow-[0_0_80px_rgba(255,255,255,0.05)] rounded-[1.5rem] overflow-hidden border border-white/10">
            <img
              key={currentNation.code}
              src={getFlagUrl(currentNation.code, "large")}
              className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
              alt="Flag"
            />
          </div>

          <div className="text-center w-[90vw] px-4 h-[30vh] flex flex-col justify-center">
            <p className="text-[2vh] uppercase tracking-[0.6em] text-zinc-500 font-medium mb-2">
              Now Speaking
            </p>
            <h1 className="text-[min(10vw,12vh)] font-black tracking-tighter leading-[1.1] m-0 p-0 drop-shadow-2xl uppercase break-words overflow-hidden">
              {currentNation.name}
            </h1>
          </div>
        </div>

        <div className="h-[15vh] grid grid-cols-2 gap-8 border-t border-white/10 px-8 items-center bg-zinc-950/50">
          {/* PREVIOUS SECTION */}
          <div
            className={`transition-all duration-500 ${nations[currentIndex - 1] ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-zinc-500 text-[1.2vh] uppercase tracking-[0.3em] mb-1">
              Previous
            </p>
            <div className="flex items-center gap-4">
              {nations[currentIndex - 1] && (
                <img
                  src={getFlagUrl(nations[currentIndex - 1].code)}
                  className="h-[4vh] aspect-3/2 rounded shadow-sm object-cover border border-white/5"
                  alt=""
                />
              )}
              <span className="text-[3vh] font-bold text-zinc-400 truncate">
                {nations[currentIndex - 1]?.name}
              </span>
            </div>
          </div>

          {/* NEXT SECTION */}
          <div
            className={`text-right transition-all duration-500 ${nations[currentIndex + 1] ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-zinc-500 text-[1.2vh] uppercase tracking-[0.3em] mb-1">
              Up Next
            </p>
            <div className="flex items-center gap-4 justify-end">
              <span className="text-[3vh] font-bold text-zinc-400 truncate">
                {nations[currentIndex + 1]?.name}
              </span>
              {nations[currentIndex + 1] && (
                <img
                  src={getFlagUrl(nations[currentIndex + 1].code)}
                  className="h-[4vh] aspect-3/2 rounded shadow-sm object-cover border border-white/5"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 4. CHAIR VIEW (Dashboard Mode) ---
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-12 max-w-6xl mx-auto space-y-10">
      <header className="space-y-2 border-b pb-8">
        <h2 className="text-5xl font-black tracking-tighter italic uppercase">
          SGMUN '26
        </h2>
        <p className="text-muted-foreground text-lg">
          Dashboard / Opening Speech Presentation Mode
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="grow space-y-6 w-full md:w-2/3">
          {/* SEARCH WRAPPER */}
          <div className="relative">
            <div className="flex gap-3 p-2 bg-muted/30 rounded-2xl border shadow-sm focus-within:ring-2 ring-primary/20">
              <Input
                placeholder="Enter Country (e.g. Turkey, Japan, Haiti...)"
                value={currentInput}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addNation()}
                className="bg-transparent border-none text-xl focus-visible:ring-0"
              />
              <Button onClick={addNation} size="lg" className="rounded-xl px-8">
                <Plus className="mr-2 h-5 w-5" /> Add Nation
              </Button>
            </div>

            {/* SEARCH SUGGESTIONS DROPDOWN */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-xl shadow-2xl z-20 overflow-hidden">
                {suggestions.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => addNationFromData(s)}
                    className="w-full flex items-center gap-4 px-4 py-3 hover:bg-accent text-left transition-colors border-b last:border-none"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${s.code}.png`}
                      className="w-8 h-5 object-cover rounded-sm border border-black/10 shadow-sm"
                      alt=""
                    />
                    <span className="font-bold text-lg">{s.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Card className="border-none bg-muted/20">
            <CardContent className="pt-6 space-y-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold italic tracking-tight uppercase">
                  Speakers Queue
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setNations([]);
                    setCurrentIndex(0);
                  }}
                  className="text-muted-foreground hover:text-destructive"
                >
                  Reset List
                </Button>
              </div>
              <div className="space-y-2 max-h-125 overflow-y-auto pr-2 custom-scrollbar">
                {nations.map((n, i) => (
                  <div
                    key={n.id}
                    className={`flex items-center gap-5 p-4 rounded-xl border transition-all grow ${i === currentIndex ? "bg-primary text-primary-foreground border-primary shadow-xl ring-2 ring-primary/20" : "bg-background hover:border-primary/50 cursor-pointer"}`}
                    onClick={() => setCurrentIndex(i)}
                  >
                    <span className="text-sm font-black opacity-40 w-5">
                      {i + 1}
                    </span>
                    <img
                      src={getFlagUrl(n.code)}
                      alt={n.name}
                      className="w-12 h-8 rounded shadow-sm object-cover border border-black/10"
                    />
                    <span className="text-2xl font-bold tracking-tight grow uppercase">
                      {n.name}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setNations(nations.filter((nat) => nat.id !== n.id));
                      }}
                      className="opacity-50 hover:opacity-100 hover:bg-destructive/10"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
                {nations.length === 0 && (
                  <p className="text-center py-20 text-muted-foreground italic">
                    Queue is empty. Add a nation to start.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="w-full md:w-1/3 space-y-4 sticky top-8">
          <Card className="bg-zinc-900 border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/5">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <p className="text-zinc-500 uppercase text-xs font-bold tracking-[0.2em] text-center">
                  Controls
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={prevSpeech}
                    disabled={currentIndex === 0 || nations.length === 0}
                    variant="outline"
                    className="w-full border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700 text-white"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Last
                  </Button>
                  <Button
                    onClick={nextSpeech}
                    disabled={
                      currentIndex >= nations.length - 1 || nations.length === 0
                    }
                    variant="outline"
                    className="w-full border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700 text-white"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleGoLive}
                disabled={nations.length === 0}
                size="lg"
                className="w-full bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-300 py-8 text-xl rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all active:scale-95"
              >
                <Maximize2 className="mr-3 h-6 w-6" /> Go Live
              </Button>
            </CardContent>
          </Card>

          <div className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 border-dashed text-sm space-y-3">
            <p className="font-bold text-zinc-400 uppercase tracking-tighter">
              Keyboard Shortcuts
            </p>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex justify-between items-center">
                <span>Next Speaker</span>
                <kbd className="bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 text-zinc-300">
                  →
                </kbd>
              </li>
              <li className="flex justify-between items-center">
                <span>Previous Speaker</span>
                <kbd className="bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 text-zinc-300">
                  ←
                </kbd>
              </li>
              <li className="flex justify-between items-center">
                <span>Exit Stage Mode</span>
                <kbd className="bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 text-zinc-300">
                  Esc
                </kbd>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
