// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// type OpeningProps = {
//   setStart: (v: boolean) => void;
//   namaTamu?: string;
// };

// const blurVariants = {
//   exit: {
//     backdropFilter: "blur(0px)",
//     backgroundColor: "rgba(0,0,0,0)",
//     transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
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
//           <motion.div
//             variants={blurVariants}
//             initial={{
//               backdropFilter: "blur(6px)",
//               backgroundColor: "rgba(0,0,0,0.5)",
//             }}
//             animate={{
//               backdropFilter: "blur(6px)",
//               backgroundColor: "rgba(0,0,0,0.5)",
//             }}
//             exit="exit"
//             className="absolute inset-0 z-[10]"
//             style={{ transform: "translateZ(0)" }}
//           />

//           {/* CONTENT CARD */}
//           <motion.div
//             variants={cardVariants}
//             initial={{ opacity: 1, scale: 1, y: 0 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit="exit"
//             className="relative bg-[#F2F1E8] rounded-xl md:rounded-2xl overflow-hidden w-[290px] md:w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
//           >
//             {/* FOTO */}
//             <div className="relative w-full h-[190px] md:h-[220px] overflow-hidden z-10 lg:hidden">
//               <Image
//                 src="/images/opening/Opening-Mobile.webp"
//                 alt="prewed"
//                 fill
//                 className="object-cover object-[50%_50%]"
//               />
//             </div>

//             <div className="relative w-full h-[225px] overflow-hidden z-10 hidden lg:block -mt-[5px]">
//               <Image
//                 src="/images/opening/Opening-Dekstop.webp"
//                 alt="prewed"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* KONTEN TEXT */}
//             <div className=" flex flex-col items-center text-center px-4 pt-[30px] mb-[33px] lg:pt-[34px] lg:mb-[33px] flex-1 leading-none">
//               <p className="text-[10px] lg:text-[14px] text-[#191A2A] font-helvetica font-regular tracking-widest">
//                 THE WEDDING OF
//               </p>
//               <h1 className="text-[28px] lg:text-[36px] text-[#191A2A] pt-[5px] lg:pt-[11px] font-montreal font-regular">
//                 Nicholas & Clara
//               </h1>
//               <p className="text-[10px] lg:text-[14px] text-[#191A2A] font-helvetica font-regular pt-[16px] md:pt-[30px]">
//                 Dear
//               </p>
//               <p className="text-[14px] lg:text-[18px] text-[#191A2A] font-helvetica font-regular pt-[14px] md:pt-[17px] break-words max-w-full">
//                 {namaTamu}
//               </p>
//               <p className="text-[8px] lg:text-[12px] text-[#191A2A] font-helvetica font-regular leading-[1.6] pt-[15px] md:pt-[23px] tracking-wide">
//                 We sincerely apologize
//                 <br />
//                 for any misspelling of names or titles.
//               </p>
//               <button
//                 onClick={handleOpen}
//                 className="bg-[#B7B7B7] flex items-center justify-center text-[#FFFFFF] w-[184px] h-[33px] md:w-[220px] md:h-[40px] rounded-full uppercase font-montreal text-[12px] lg:text-[18px] mt-[16px] md:mt-[15px]"
//               >
//                 <span>VIEW Invitation</span>
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Opening;