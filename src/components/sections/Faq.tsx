"use client";
import React from "react";
import { useState } from "react";
import { faqData } from "../data/faq";
import { motion } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <>
      <section className="w-full  bg[#F9FBFA]">
        <div className="max-w-[311px] lg:max-w-[720px] mx-auto pb-[93px] lg:py-28">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="uppercase text-center text-[#51483F] font-averne text-[32px] md:text-[46px] lg:text-[52px] mb-[9px] lg:mb-[24px]"
          >
            FAQ
          </motion.h2>

          <div className=" lg:max-h-none  lg:overflow-visible">
            {/* RENDER FAQ */}
            {faqData.map((section, sIndex) => (
              <div key={sIndex} className="mt-[15px] lg:mt-[36px]">
                {/* JUDUL FAQ */}
                <motion.h3
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className="text-center text-[#51483F] font-athelas text-[16px] md:text-[22px] lg:text-[26px] uppercase"
                >
                  {section.judul}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3,
                  }}
                  className="border-t border-t-[2px] border-[#707071] mt-[12px] lg:mt-[20px]"
                >
                  {section.items.map((item, iIndex) => {
                    const key = `${sIndex}-${iIndex}`;
                    const isOpen = openIndex === key;

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.4,
                        }}
                        key={key}
                        className="border-[#707071] border-b-[2px]"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex justify-between items-center py-[2px] lg:py-[18px] text-left text-[#51483F]"
                        >
                          <span className="text-[12px] md:text-[18px] lg:text-[19px] text-[#51483F] font-athelas pr-4">
                            {item.pertanyaan}
                          </span>

                          <span className="text-[24px] lg:text-[30px] font-athelas text-[#717071] shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="pb-3 lg:pb-6 space-y-3 lg:space-y-4">
                            {item.jawaban.map((paragraf, pIndex) => (
                              <p
                                key={pIndex}
                                className="text-[12px] md:text-[17px] lg:text-[17px] font-athelas text-[#51483F] whitespace-pre-line lg:leading-relaxed"
                              >
                                {paragraf}
                              </p>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;


// MOBILE NYA SEBELUM DI KONVERT KE VW
// "use client";
// import React from "react";
// import { useState } from "react";
// import { faqData } from "../data/faq";
// import { motion } from "framer-motion";

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState<string | null>(null);

//   const toggle = (key: string) => {
//     setOpenIndex(openIndex === key ? null : key);
//   };

//   return (
//     <>
//       <section className="w-full  bg[#F9FBFA]">
//         <div className="max-w-[311px] mx-auto pb-[93px] lg:py-28">
//           <motion.h2
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 1.5,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="uppercase text-center text-[#51483F] font-averne text-[32px] md:text-[46px] lg:text-[46px] mb-[9px]"
//           >
//             FAQ
//           </motion.h2>

//           <div className=" lg:max-h-none  lg:overflow-visible">
//             {/* RENDER FAQ */}
//             {faqData.map((section, sIndex) => (
//               <div key={sIndex} className="mt-[15px]">
//                 {/* JUDUL FAQ */}
//                 <motion.h3
//                   initial={{ opacity: 0, y: 80 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 1.5,
//                     ease: [0.22, 1, 0.36, 1],
//                     delay: 0.2,
//                   }}
//                   className="text-center text-[#51483F] font-athelas text-[16px] md:text-[22px] lg:text-[24px] uppercase"
//                 >
//                   {section.judul}
//                 </motion.h3>

//                 <motion.div
//                   initial={{ opacity: 0, y: 80 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 1.5,
//                     ease: [0.22, 1, 0.36, 1],
//                     delay: 0.3,
//                   }}
//                   className="border-t border-t-[2px] border-[#707071] mt-[12px]"
//                 >
//                   {section.items.map((item, iIndex) => {
//                     const key = `${sIndex}-${iIndex}`;
//                     const isOpen = openIndex === key;

//                     return (
//                       <motion.div
//                         initial={{ opacity: 0, y: 80 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           duration: 1.5,
//                           ease: [0.22, 1, 0.36, 1],
//                           delay: 0.4,
//                         }}
//                         key={key}
//                         className="border-[#707071] border-b-[2px]"
//                       >
//                         <button
//                           onClick={() => toggle(key)}
//                           className="w-full flex justify-between items-center py-[2px] text-left text-[#51483F]"
//                         >
//                           <span className="text-[12px] md:text-[18px] lg:text-[18px] text-[#51483F] font-athelas">
//                             {item.pertanyaan}
//                           </span>

//                           <span className="text-[24px] font-athelas text-[#717071]">
//                             {isOpen ? "−" : "+"}
//                           </span>
//                         </button>

//                         {isOpen && (
//                           <div className="pb-3 space-y-3">
//                             {item.jawaban.map((paragraf, pIndex) => (
//                               <p
//                                 key={pIndex}
//                                 className="text-[12px] md:text-[17px] lg:text-[17px] font-athelas text-[#51483F] whitespace-pre-line"
//                               >
//                                 {paragraf}
//                               </p>
//                             ))}
//                           </div>
//                         )}
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Faq;
