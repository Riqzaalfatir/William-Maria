import Header from "@/components/layout/Header" ;
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Pengantin from "@/components/sections/Pengantin";
import EventOrder from "@/components/sections/EventOrder";
import Gallery from "@/components/sections/Gallery";
import Quote from "@/components/sections/Quote";
import Rsvp from "@/components/sections/Rsvp";
import Wishes from "@/components/sections/Wishes";
import Thankyou from "@/components/sections/Thankyou";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Profile />
      <Pengantin />
      <EventOrder />
      <Gallery />
      <Quote />
      <Rsvp />

      <div className="relative w-full">
        <div className="sticky top-0 h-dvh -z-10 -mb-[100dvh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/Wishes.mp4" type="video/mp4" />
          </video>
        </div>

        <Wishes />
        <Thankyou />
      </div>
    </>
  );
}