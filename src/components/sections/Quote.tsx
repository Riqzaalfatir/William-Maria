"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const Quote = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    // Slide 1 - Quote paragraph
    <p
      key="paragraph"
      className="font-athelas text-[2.56vw] text-white leading-[3.85vw]"
    >
      With joyful hearts and hopeful eyes, we’re stepping <br />
      into the next chapter. This wedding isn’t just a celebration of a
      day - <br />
      it’s a celebration of a journey, a promise, and the love we’re lucky{" "}
      <br />
      enough to call our own
    </p>,

    // Slide 2 - Numbers
    <div key="numbers" className="flex flex-col items-center -mt-[25px]">
      <Image
        src="/images/quote/Item.webp"
        alt="William"
        width={247}
        height={92}
        className="h-auto w-[248px] lg:w-[620px] ml-[0px]"
      />

      <div className="flex items-start justify-center gap-[29px] -ml-[9.5px] lg:gap-[45px] lg:-ml-[20px]">
        <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px]">
          <p className="font-urw text-[7.46px] lg:text-[20px] text-white">26</p>
          <p className="text-[5.97px] lg:text-[18px] text-white font-athelas leading-[12px] lg:leading-[26px]">
            ( 26.12.21 ) <br />
            <span className="text-[6.72px] lg:text-[20px]">William declared his love</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px]">
          <p className="font-urw text-[7.46px] lg:text-[20px] text-white">9</p>
          <p className="text-[5.97px] lg:text-[18px] text-white font-athelas leading-[8.96px] lg:leading-[26px]">
            ( 9.1.22 ) <br />
            <span className="text-[6.72px] lg:text-[20px] lg:leading-[20px]">
              The true beginning, <br />
              When hearts aligned
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px] ml-[3px]">
          <p className="font-urw text-[7.46px] lg:text-[20px] text-white">9,1,26</p>
          <p className="text-[5.97px] lg:text-[18px] text-white font-athelas leading-[8.96px] lg:leading-[26px]">
            ( 9.1.22 to 19.9.26 )<br />
            <span className="text-[6.72px] lg:text-[20px] lg:leading-[20px]">
              The true beginning, <br />
              When hearts aligned
            </span>
          </p>
        </div>
      </div>
    </div>,

    // Slide 3 - Features
    <div key="features" className="flex flex-col items-center -mt-[10px]">
      <Image
        src="/images/quote/Item2.webp"
        alt="William"
        width={247}
        height={92}
        className="h-auto w-[150px] lg:w-[620px]"
      />

      <div className="flex items-start justify-center gap-[20px] ml-[15px] lg:gap-[45px] lg:-ml-[20px] pt-[5px]">
        <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px]">
          <p className="font-athelas text-[8px] lg:text-[20px] text-white">UPWARD FLOW</p>
          <p className="text-[6px] lg:text-[18px] text-white font-athelas leading-[7px] lg:leading-[26px]">
            Love that grows, <br />
            always connected
          </p>
        </div>
        <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px]">
          <p className="font-urw text-[8px] lg:text-[20px] text-white">MIRRORED INITIALS</p>
          <p className="text-[6px] lg:text-[18px] text-white font-athelas leading-[7px] lg:leading-[26px]">
            Reflect each other, just like the <br />
            mirrors that first brought us together
          </p>
        </div>
      </div>
    </div>,
  ];

  const goTo = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= slides.length) return;
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) goTo(index + 1);
    else if (info.offset.x > swipeThreshold) goTo(index - 1);
  };

  // Auto-geser tiap 5 detik, reset timer kalau ada interaksi manual
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index, slides.length]);

  return (
    <section>
      <div className="relative w-full">
        <img
          src="/images/quote/Bg-Quotee.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none lg:hidden"
        />
        <img
          src="/images/quote/Bg-QuoteD.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none hidden lg:block"
        />
        <div className="absolute inset-0 bg-black/45 pointer-events-none hidden lg:block" />
        <div className="absolute inset-0 bg-[#C3D9E6]/[13%] pointer-events-none lg:hidden" />

        <div className="relative pt-[10.51vw] pb-[13.85vw] lg:pt-[73px] lg:pb-[108px] flex flex-col items-center text-center justify-center leading-none gap-[10.5vw] lg:gap-[10px]">
          <p className="font-averne text-[3.08vw] text-white tracking-wide">
            GOD KNEW OUR HEARTS NEED EACH OTHER
          </p>

          <div className="relative w-full flex items-center justify-center h-[15vw] lg:min-h-[180px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
    <motion.div
      key={index}
      custom={direction}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      initial={{ x: direction >= 0 ? "100%" : "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: direction >= 0 ? "-100%" : "100%" }}
      transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
      className="cursor-grab active:cursor-grabbing absolute w-full"
    >
      {slides[index]}
    </motion.div>
  </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;


// NORMAL VERSI TANPA SLIDE
// import React from "react";
// import Image from "next/image";

// const Quote = () => {
//   return (
//     <section>
//       <div className="relative w-full">
//         <img
//           src="/images/quote/Bg-Quotee.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none lg:hidden"
//         />
//         <img
//           src="/images/quote/Bg-QuoteD.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none hidden lg:block"
//         />
//         <div className="absolute inset-0 bg-black/45 pointer-events-none hidden lg:block" />
//         <div className="absolute inset-0 bg-[#C3D9E6]/[13%] pointer-events-none lg:hidden" />

//         <div className="relative pt-[10.51vw] pb-[13.85vw] lg:pt-[73px] lg:pb-[108px] flex flex-col items-center text-center justify-center leading-none gap-[10.5vw] lg:gap-[10px]">
//           <p className="font-averne text-[3.08vw] text-white tracking-wide">
//             GOD KNEW OUR HEARTS NEED EACH OTHER
//           </p>
//           <p className="font-athelas text-[2.56vw] text-white leading-[3.85vw]">
//             With joyful hearts and hopeful eyes, we’re stepping <br />
//             into the next chapter. This wedding isn’t just a celebration of a
//             day - <br />
//             it’s a celebration of a journey, a promise, and the love we’re lucky{" "}
//             <br />
//             enough to call our own
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Quote;

//  <Image
//             src="/images/quote/Item.webp"
//             alt="William"
//             width={247}
//             height={92}
//             className="h-auto w-[280px] lg:w-[620px]"
//           />

//           <div className="flex items-start justify-center gap-[25px] -ml-[15px] lg:gap-[45px] lg:-ml-[20px]">
//             <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px]">
//               <p className="font-urw text-[10px] lg:text-[20px] text-white">26</p>
//               <p className="text-[8px] lg:text-[18px] text-white font-urw leading-[12px] lg:leading-[26px]">
//                 ( 26.12.21 ) <br />
//                 <span className="text-[9px] lg:text-[20px]">William declared his love</span>
//               </p>
//             </div>
//             <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px]">
//               <p className="font-urw text-[10px] lg:text-[20px] text-white">9</p>
//               <p className="text-[8px] lg:text-[18px] text-white font-urw leading-[12px] lg:leading-[26px]">
//                 ( 9.1.22 ) <br />
//                 <span className="text-[9px] lg:text-[20px] lg:leading-[20px]">
//                   The true beginning, <br />
//                   When hearts aligned
//                 </span>
//               </p>
//             </div>
//             <div className="flex flex-col items-center justify-center leading-none gap-[7px] lg:gap-[20px]">
//               <p className="font-urw text-[10px] lg:text-[20px] text-white">9,1,26</p>
//               <p className="text-[8px] lg:text-[18px] text-white font-urw leading-[12px] lg:leading-[26px]">
//                 ( 9.1.22 to 19.9.26 )<br />
//                 <span className="text-[9px] lg:text-[20px] lg:leading-[20px]">
//                   The true beginning, <br />
//                   When hearts aligned
//                 </span>
//               </p>
//             </div>
//           </div>

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const Quote = () => {
//   return (
//     <section>
//       <div className="relative w-full">
//         <img
//           src="/images/quote/Bg-Quote.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
//         />
//         <div className="absolute inset-0 bg-black/45 pointer-events-none" />
//         <div className="relative pt-[41px] pb-[54px] flex flex-col items-center text-center justify-center leading-none gap-[37px]">
//           <p className="font-averne text-[12px] text-white">
//             GOD KNEW OUR HEARTS NEED EACH OTHER
//           </p>
//           <p className="font-athelas text-[10px] text-white leading-[15px]">
//             With joyful hearts and hopeful eyes, we’re stepping <br />
//             into the next chapter. This wedding isn’t just a celebration of a
//             day - <br />
//             it’s a celebration of a journey, a promise, and the love we’re lucky{" "}
//             <br />
//             enough to call our own
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Quote;
