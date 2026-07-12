"use client";

import { useState, useEffect } from "react";
import Opening from "@/components/popup/Opening";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Pengantin from "@/components/sections/Pengantin";
import EventOrder from "@/components/sections/EventOrder";
import Gallery from "@/components/sections/Gallery";
import Quote from "@/components/sections/Quote";
import Rsvp from "@/components/sections/Rsvp";
import Wishes from "@/components/sections/Wishes";
import Thankyou from "@/components/sections/Thankyou";
import Faq from "@/components/sections/Faq";

export default function Home() {
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    if (!start) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [start]);

  return (
    <>
      <main className="block">
        <Header />
        <Hero />
        <Profile />
        <Pengantin />
        <EventOrder />
        <Gallery />
        <Quote />
        <Rsvp />
        <Faq />
       
        <div className="relative w-full">
          <div className="sticky top-0 h-dvh -z-10 -mb-[100dvh]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/Wil-Maria-compressed.mp4" type="video/mp4" />
            </video>
          </div>
          <Wishes />
          <Thankyou />
        </div>

      </main>

      {!start && <Opening setStart={setStart} namaTamu="Sela" />}
    </>
  );
}