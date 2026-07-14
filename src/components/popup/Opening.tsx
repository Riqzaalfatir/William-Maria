"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ResponsivePicture from "@/hooks/ResponsivePicture";

type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
};

const bgVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const cardVariants = {
  exit: {
    opacity: 0,
    scale: 0.93,
    y: 30,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
  },
};

const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOpen = (): void => {
    setOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setStart(true);
    }, 600);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center px-4">
          {/* BACKGROUND IMAGE — cuma 1 yang ke-download sesuai breakpoint */}
          <motion.div
            variants={bgVariants}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit="exit"
            className="absolute inset-0 z-0"
          >
            <ResponsivePicture
              mobileSrc="/images/opening/OpeningBackground.webp"
              desktopSrc="/images/opening/OpeningBackgroundD.webp"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover object-top"
              priority
            />
          </motion.div>

          {/* CONTENT CARD */}
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit="exit"
            className="relative rounded-[20px] lg:rounded-4xl overflow-hidden w-[290px] lg:w-[452px] flex flex-col z-[100] bg-[#463931C2]/70 [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            <div className="bg-[#463931]/76 flex flex-col items-center text-center px-4 pt-[56px] lg:pt-[87px] flex-1 leading-none">
              <p className="text-[12px] lg:text-[18px] text-white font-athelas italic tracking-[5%]">
                we invite you to celebrate
              </p>
              <Image
                src="/images/opening/Wil-Mar.webp"
                alt="Provite Logo"
                width={290}
                height={120}
                className="w-[181px] h-[76px] lg:w-[281px] lg:h-[118px] pt-[4px] lg:mt-[9px]"
                priority
              />
              <p className="text-[12px] lg:text-[18px] text-white font-averne pt-[10px] lg:pt-[11px] tracking-[2%]">
                SATURDAY, 19 SEPTEMBER 2026
              </p>
              <p className="text-[12px] lg:text-[18px] text-white font-athelas font-bold italic mt-[36px] lg:pt-[14px] md:pt-[48px] tracking-[2%]">
                Mr. /Mrs. / Ms.
              </p>
              <p className="text-[16px] lg:text-[24px] text-white font-athelas font-bold pt-[7px] md:pt-[6px] break-words max-w-full">
                NAMA & PARTNER
              </p>
              <p className="text-[12px] lg:text-[18px] text-white/90 font-athelas leading-[20px] lg:leading-[31px] pt-[14px] md:pt-[21px] tracking-[5%] italic">
                we sincerely apologize <br />
                for any misspelling of names or titles
              </p>
              <div className="mb-[41px] lg:mb-[67px]">
                <button
                  onClick={handleOpen}
                  className="bg-[#878787] flex items-center justify-center text-[#FFFFFF] w-[162px] h-[22px] lg:w-[253px] lg:h-[31px] rounded-[6px] lg:rounded-[9px] uppercase font-athelas italic text-[12px] lg:text-[18px] mt-[18px] md:mt-[34px]"
                >
                  <span>OPEN</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Opening;

// /SEBELUM MENGGUNAKAN LOGIC DOWNLOAD
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// type OpeningProps = {
//   setStart: (v: boolean) => void;
//   namaTamu?: string;
// };

// const bgVariants = {
//   exit: {
//     opacity: 0,
//     transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const },
//   },
// };

// const cardVariants = {
//   exit: {
//     opacity: 0,
//     scale: 0.93,
//     y: 30,
//     transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
//   },
// };

// const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
//   const [open, setOpen] = useState<boolean>(true);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const handleOpen = (): void => {
//     setOpen(false);
//     document.body.style.overflow = "auto";
//     setTimeout(() => {
//       setStart(true);
//     }, 600);
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {open && (
//         <div className="fixed inset-0 z-[100] flex justify-center items-center px-4">
//           {/* BACKGROUND IMAGE */}
//           <motion.div
//             variants={bgVariants}
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit="exit"
//             className="absolute inset-0 z-0"
//           >
//             <Image
//               src="/images/opening/OpeningBackground.webp"
//               alt="background"
//               fill
//               className="object-cover object-top lg:hidden"
//               priority
//             />
//             <Image
//               src="/images/opening/OpeningBackgroundD.webp"
//               alt="background"
//               fill
//               className="object-cover object-top hidden lg:block"
//               priority
//             />
//           </motion.div>

//           {/* CONTENT CARD */}
//           <motion.div
//             variants={cardVariants}
//             initial={{ opacity: 1, scale: 1, y: 0 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit="exit"
//             className="relative rounded-[20px] lg:rounded-4xl overflow-hidden w-[290px] lg:w-[452px] flex flex-col z-[100] bg-[#463931C2]/70 [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
//           >
//             <div className="bg-[#463931]/76 flex flex-col items-center text-center px-4 pt-[56px] lg:pt-[87px] flex-1 leading-none">
//               <p className="text-[12px] lg:text-[18px] text-white font-athelas italic tracking-[5%]">
//                 we invite you to celebrate
//               </p>
//               <Image
//                 src="/images/opening/Wil-Mar.webp"
//                 alt="Provite Logo"
//                 width={450}
//                 height={450}
//                 className="w-[181px] lg:w-[281px] pt-[4px] lg:mt-[9px]"
//               />
//               <p className="text-[12px] lg:text-[18px] text-white/90 font-averne pt-[10px] lg:pt-[11px] tracking-[2%]">
//                 SATURDAY, 19 SEPTEMBER 2026
//               </p>
//               <p className="text-[12px] lg:text-[18px] text-white font-athelas font-bold italic mt-[36px] lg:pt-[14px] md:pt-[48px] tracking-[2%]">
//                 Mr. /Mrs. / Ms.
//               </p>
//               <p className="text-[16px] lg:text-[24px] text-white font-athelas font-bold pt-[7px] md:pt-[6px] break-words max-w-full">
//                 NAMA & PARTNER
//               </p>
//               <p className="text-[12px] lg:text-[18px] text-white/90 font-athelas leading-[20px] lg:leading-[31px] pt-[14px] md:pt-[21px] tracking-[5%] italic">
//                 we sincerely apologize <br />
//                 for any misspelling of names or titles
//               </p>
//               <div className="mb-[41px] lg:mb-[67px]">
//                 <button
//                   onClick={handleOpen}
//                   className="bg-[#878787] flex items-center justify-center text-[#FFFFFF] w-[162px] h-[22px] lg:w-[253px] lg:h-[31px] rounded-[6px] lg:rounded-[9px] uppercase font-athelas italic text-[12px] lg:text-[18px] mt-[18px] md:mt-[34px]"
//                 >
//                   <span>OPEN</span>
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Opening;
