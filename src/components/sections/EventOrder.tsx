import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";
import ResponsivePicture from "@/hooks/ResponsivePicture";

const EventOrder = () => {
  return (
    <section id="eventorder" className="bg[#F4F4F5]">
      <div className="pt-[20.51vw] lg:pt-[116px]">
        {/* <div className="relative left-1/2 -translate-x-1/2 w-[28.46vw] lg:w-[189px] h-auto">
          <Image
            src="/images/eventorder/LogoD.webp"
            alt="Provite Logo"
            width={450}
            height={450}
            className="w-full"
          />
        </div> */}
        <div className="relative left-1/2 -translate-x-1/2 w-[28.46vw] lg:w-[189px] h-auto">
        <motion.div
         variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}>
          <img
            src="/images/eventorder/LogoD.webp"
            alt="Provite Logo"
            className="w-full h-auto"
          />
          </motion.div>

        </div>

        <div className="pt-[10.51vw] lg:pt-[45px] flex flex-col items-center justify-center leading-none">
          <div className="flex flex-col items-center text-center justify-center leading-none">
            <motion.h1 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="font-averne text-[8.21vw] lg:text-[48px] text-[#51483F] leading-[7.18vw] lg:leading-none [-webkit-text-stroke:0.2px_#51483F] lg:[-webkit-text-stroke:0.8px_#51483F]">
              HOLY <br className="lg:hidden" />
              MATRIMONY
            </motion.h1>
            <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[2.5vw] lg:pt-[29px] font-athelas text-[3.59vw] lg:text-[20px] text-[#717071] tracking-wide">
              <span className="italic">at</span>{" "}
              <span className="font-urw italic">9.00</span> AM
            </motion.p>
            <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[2.2vw] lg:pt-[21px] font-duende text-[10.77vw] lg:text-[64px] text-[#51483F]">
              Putting Garden
            </motion.h2>
            <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[3.5vw] lg:pt-[19px] font-athelas text-[3.59vw] lg:text-[20px] text-[#717071]">
              DRESS CODE
            </motion.p>
            <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[0.7vw] lg:pt-[6px] font-athelas italic text-[3.59vw] lg:text-[18px] text-[#717071] leading-[4.87vw] lg:leading-[23px]">
              Neutral Colors <br />( No Batik )
            </motion.p>
            <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            >
            <ResponsivePicture
              mobileSrc="/images/eventorder/Dresscode1.webp"
              desktopSrc="/images/eventorder/DresscodeD.png"
              alt="William"
              fill={false}
              width={250}
              height={92}
              className="mt-[4.87vw] h-auto w-[58.97vw] lg:mt-[23px] lg:w-[308px]"
            />
            </motion.div>
            <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[3.59vw] lg:pt-[21.5px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#717071]">
              don’t forget your sunnies!
            </motion.p>
          </div>

          <div className="pt-[15.90vw] lg:pt-[62px] flex flex-col items-center text-center justify-center leading-none">
            <motion.h1 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="font-averne text-[8.21vw] lg:text-[48px] text-[#51483F] leading-[7.18vw] lg:leading-none tracking-wide lg:tracking-normal [-webkit-text-stroke:0.2px_#51483F] lg:[-webkit-text-stroke:0.8px_#51483F]">
              DINNER <br className="lg:hidden" />
              RECEPTION
            </motion.h1>
            <motion.p 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[2.5vw] lg:pt-[31px] font-athelas text-[3.59vw] lg:text-[20px] text-[#717071] tracking-wide">
              <span className="italic">at</span>{" "}
              <span className="font-urw italic">6.00</span> PM
            </motion.p>
            <motion.p 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}className="pt-[2.8vw] lg:pt-[18px] font-athelas text-[3.59vw] lg:text-[14px] text-[#717071] tracking-wide">
              GRAND BALLROOM
            </motion.p>
            <motion.h2 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[1.3vw] lg:pt-[2px] font-duende text-[10.26vw] lg:text-[64px] text-[#51483F] leading-[7.95vw] lg:leading-none">
              <span>Intercontinental</span>
              <span className="ml-[8px] lg:ml-[10px]">Hotel</span>
              <span className="block lg:inline lg:ml-[10px]">Bandung</span>
            </motion.h2>

            <motion.div  variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}>
            <a
              href="https://maps.app.goo.gl/itNvPF8tGYZR4Whq9"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[6.15vw] w-[45.64vw] lg:h-[31px] lg:w-[268px] bg-[#878787] hover:bg-[#51483F] active:scale-95 transition-all duration-200 text-white flex items-center justify-center text-[2.31vw] lg:text-[17.5px] rounded-[5px] lg:rounded-[7px] font-averne  gap-[0.7vw] lg:gap-[8px] mt-[6.41vw] lg:mt-[18px] lg:italic lg:font-athelas lg:pt-[1.5px] tracking-wide"
            >
              <Image
                src="/images/eventorder/Peta.png"
                alt="Logo Wa"
                width={550}
                height={550}
                className="object-contain w-[5.13vw] h-[4.62vw] lg:w-[29px] lg:h-[26px]"
              />
              NAVIGATE TO LOCATION
            </a>
            </motion.div>
          </div>

          <div
            id="dresscode"
            className="pt-[11vw] lg:pt-[65px] flex flex-col items-center text-center justify-center leading-none"
          >
            <motion.h1 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="font-averne text-[8.21vw] lg:text-[48px] text-[#51483F] [-webkit-text-stroke:0.2px_#51483F] lg:[-webkit-text-stroke:0.8px_#51483F]">
              DRESS CODE
            </motion.h1>
            <motion.p 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[3vw] lg:pt-[25px] font-athelas italic text-[3.08vw] lg:text-[16px] text-[#717071] leading-[3.85vw] lg:leading-[20px] tracking-[3%]">
              We kindly encourage our guest to dress <br />
              as follows on our special day
            </motion.p>
            <motion.div 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[7.18vw] lg:pt-[25px] flex flex-col items-center justify-center leading-none">
              <p className="font-athelas text-[4.62vw] lg:text-[24px] text-[#717071]">
                GENTLEMEN
              </p>
              <p className="pt-[1vw] lg:pt-[1.5px] font-athelas italic text-[3.59vw] lg:text-[18px] text-[#717071] leading-[4.62vw] lg:leading-[23px]">
                Black Suits & Tie <br />( No Batik )
              </p>
            </motion.div>
            <motion.div 
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="pt-[4vw] lg:pt-[16px] flex flex-col items-center justify-center leading-none">
              <p className="font-athelas text-[4.62vw] lg:text-[24px] text-[#717071]">
                WOMAN
              </p>
              <p className="pt-[1vw] lg:pt-[2px] font-athelas italic text-[3.59vw] lg:text-[18px] text-[#717071] leading-[4.87vw] lg:leading-[23px] tracking-[3%]">
                Formal Long Dresses <br />
                in Shades of Navy or Black
              </p>
            </motion.div>

            <motion.div
             variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            >
            <ResponsivePicture
              mobileSrc="/images/eventorder/Dresscode2.webp"
              desktopSrc="/images/eventorder/DCHBD.png"
              alt="William"
              fill={false}
              width={250}
              height={92}
              className="mt-[5.13vw] h-auto w-[23.59vw] lg:mt-[23px] lg:w-[172px]"
            />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;

// SEBELUM DIBERIKAN LOGIC DOWNLOAD
// import React from "react";
// import Image from "next/image";

// const EventOrder = () => {
//   return (
//     <section id="eventorder" className="bg[#F9FBFA]">
//       <div className="pt-[20.51vw] lg:pt-[116px]">
//         {/* <div className="relative left-1/2 -translate-x-1/2 w-[28.46vw] lg:w-[189px] h-auto">
//           <Image
//             src="/images/eventorder/LogoD.webp"
//             alt="Provite Logo"
//             width={450}
//             height={450}
//             className="w-full"
//           />
//         </div> */}
//         <div className="relative left-1/2 -translate-x-1/2 w-[28.46vw] lg:w-[189px] h-auto">
//           <img
//             src="/images/eventorder/LogoD.webp"
//             alt="Provite Logo"
//             className="w-full h-auto"
//           />
//         </div>

//         <div className="pt-[10.51vw] lg:pt-[45px] flex flex-col items-center justify-center leading-none">
//           <div className="flex flex-col items-center text-center justify-center leading-none">
//             <h1 className="font-averne text-[8.21vw] lg:text-[48px] text-[#51483F] leading-[7.18vw] lg:leading-none [-webkit-text-stroke:0.2px_#51483F] lg:[-webkit-text-stroke:0.5px_#51483F]">
//               HOLY <br className="lg:hidden" />
//               MATRIMONY
//             </h1>
//             <p className="pt-[2.5vw] lg:pt-[23px] font-athelas text-[3.59vw] lg:text-[20px] text-[#717071] tracking-wide">
//               <span className="italic">at</span>{" "}
//               <span className="font-urw italic">9.00</span> AM
//             </p>
//             <h2 className="pt-[2.2vw] lg:pt-[24px] font-duende text-[10.77vw] lg:text-[64px] text-[#51483F]">
//               Putting Garden
//             </h2>
//             <p className="pt-[3.5vw] lg:pt-[19px] font-athelas text-[3.59vw] lg:text-[20px] text-[#717071]">
//               DRESS CODE
//             </p>
//             <p className="pt-[0.7vw] lg:pt-[5px] font-athelas italic text-[3.59vw] lg:text-[18px] text-[#717071] leading-[4.87vw] lg:leading-[23px]">
//               Neutral Colors <br />( No Batik )
//             </p>
//             <Image
//               src="/images/eventorder/Dresscode1.webp"
//               alt="William"
//               width={250}
//               height={92}
//               className="mt-[4.87vw] h-auto w-[58.97vw] lg:hidden"
//             />
//             <Image
//               src="/images/eventorder/DresscodeD.png"
//               alt="William"
//               width={250}
//               height={92}
//               className="mt-[23px] h-auto w-[308px] hidden lg:block"
//             />
//             <p className="pt-[3.59vw] lg:pt-[20px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#717071]">
//               don’t forget your sunnies!
//             </p>
//           </div>

//           <div className="pt-[15.90vw] lg:pt-[65px] flex flex-col items-center text-center justify-center leading-none">
//             <h1 className="font-averne text-[8.21vw] lg:text-[48px] text-[#51483F] leading-[7.18vw] lg:leading-none tracking-wide [-webkit-text-stroke:0.2px_#51483F] lg:[-webkit-text-stroke:0.5px_#51483F]">
//               DINNER <br className="lg:hidden" />
//               RECEPTION
//             </h1>
//             <p className="pt-[2.5vw] lg:pt-[31px] font-athelas text-[3.59vw] lg:text-[20px] text-[#717071] tracking-wide">
//               <span className="italic">at</span>{" "}
//               <span className="font-urw italic">6.00</span> PM
//             </p>
//             <p className="pt-[2.8vw] lg:pt-[20px] font-athelas text-[3.59vw] lg:text-[14px] text-[#717071] tracking-wide">
//               GRAND BALLROOM
//             </p>
//             <h2 className="pt-[1.3vw] lg:pt-[5px] font-duende text-[10.26vw] lg:text-[64px] text-[#51483F] leading-[7.95vw] lg:leading-none">
//               <span>Intercontinental</span>
//               <span className="ml-[8px] lg:ml-[10px]">Hotel</span>
//               <span className="block lg:inline lg:ml-[10px]">Bandung</span>
//             </h2>

//             <a
//               href="https://maps.app.goo.gl/itNvPF8tGYZR4Whq9"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[6.15vw] w-[45.64vw] lg:h-[31px] lg:w-[268px] bg-[#878787] hover:bg-[#51483F] active:scale-95 transition-all duration-200 text-white flex items-center justify-center text-[2.31vw] lg:text-[18px] rounded-[5px] lg:rounded-[7px] font-averne gap-[0.7vw] lg:gap-[8px] mt-[6.41vw] lg:mt-[18px] lg:italic lg:font-athelas"
//             >
//               <Image
//                 src="/images/eventorder/Peta.png"
//                 alt="Logo Wa"
//                 width={550}
//                 height={550}
//                 className="object-contain w-[5.13vw] h-[4.62vw] lg:w-[29px] lg:h-[26px]"
//               />
//               NAVIGATE TO LOCATION
//             </a>
//           </div>

//           <div className="pt-[11vw] lg:pt-[65px] flex flex-col items-center text-center justify-center leading-none">
//             <h1 className="font-averne text-[8.21vw] lg:text-[48px] text-[#51483F] [-webkit-text-stroke:0.2px_#51483F] lg:[-webkit-text-stroke:0.5px_#51483F]">
//               DRESS CODE
//             </h1>
//             <p className="pt-[3vw] lg:pt-[25px] font-athelas italic text-[3.08vw] lg:text-[16px] text-[#717071] leading-[3.85vw] lg:leading-[20px] tracking-[3%]">
//               We kindly encourage our guest to dress <br />
//               as follows on our special day
//             </p>
//             <div className="pt-[7.18vw] lg:pt-[25px] flex flex-col items-center justify-center leading-none">
//               <p className="font-athelas text-[4.62vw] lg:text-[24px] text-[#717071]">
//                 GENTLEMEN
//               </p>
//               <p className="pt-[1vw] lg:pt-[2px] font-athelas italic text-[3.59vw] lg:text-[18px] text-[#717071] leading-[4.62vw] lg:leading-[23px]">
//                 Black Suits & Tie <br />( No Batik )
//               </p>
//             </div>
//             <div className="pt-[4vw] lg:pt-[18px] flex flex-col items-center justify-center leading-none">
//               <p className="font-athelas text-[4.62vw] lg:text-[24px] text-[#717071]">
//                 WOMAN
//               </p>
//               <p className="pt-[1vw] lg:pt-[2px] font-athelas italic text-[3.59vw] lg:text-[18px] text-[#717071] leading-[4.87vw] lg:leading-[23px] tracking-[3%]">
//                 Formal Long Dresses <br />
//                 in Shades of Navy or Black
//               </p>
//             </div>
//             <Image
//               src="/images/eventorder/Dresscode2.webp"
//               alt="William"
//               width={250}
//               height={92}
//               className="mt-[5.13vw] h-auto w-[23.59vw] lg:hidden"
//             />
//             <Image
//               src="/images/eventorder/DCHBD.png"
//               alt="William"
//               width={250}
//               height={92}
//               className="mt-[23px] h-auto w-[172px] hidden lg:block"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventOrder;

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const EventOrder = () => {
//   return (
//     <section id="eventorder" className="bg-[#F4F4F5]">
//       <div className="pt-[80px]">
//         <div className="relative left-1/2 -translate-x-1/2 w-[111px] h-auto">
//           <Image
//             src="/images/eventorder/Logo.svg"
//             alt="Provite Logo"
//             width={250}
//             height={250}
//             className="w-full"
//           />
//         </div>

//         <div className="pt-[41px] flex flex-col items-center justify-center leading-none">
//           <div className="flex flex-col items-center text-center justify-center leading-none">
//             <h1 className="font-averne text-[32px] text-[#51483F] leading-[28px]">
//               HOLY <br />
//               MATRIMONY
//             </h1>
//             <p className="pt-[7px] font-athelas text-[14px] text-[#717071]">
//               <span className="italic">at</span>
//               <span className="font-urw">9.00</span> AM
//             </p>
//             <h2 className="pt-[12px] font-duende text-[42px] text-[#51483F]">
//               Putting Garden
//             </h2>
//             <p className="pt-[18px] font-athelas text-[14px] text-[#717071]">
//               DRESS CODE
//             </p>
//             <p className="pt-[1px] font-athelas italic text-[14px] text-[#717071] leading-[19px]">
//               Neutral Colors <br />( No Batik )
//             </p>
//             <Image
//               src="/images/eventorder/Dresscode1.webp"
//               alt="William"
//               width={250}
//               height={92}
//               className="mt-[19px] h-auto w-[230px]"
//             />
//             <p className="pt-[14px] font-athelas italic text-[12px] text-[#717071]">
//               don’t forget your sunnies!
//             </p>
//           </div>

//           <div className="pt-[62px] flex flex-col items-center text-center justify-center leading-none">
//             <h1 className="font-averne text-[32px] text-[#51483F] leading-[28px] tracking-wide">
//               DINNER <br />
//               RECEPTION
//             </h1>
//             <p className="pt-[7px] font-athelas text-[14px] text-[#717071]">
//               <span className="italic">at</span>
//               <span className="font-urw">6.00</span> PM
//             </p>
//             <p className="pt-[10px] font-athelas text-[14px] text-[#717071]">
//               GRAND BALLROOM
//             </p>
//             <h2 className="pt-[2px] font-duende text-[40px] text-[#51483F] leading-[31px] tracking-wide">
//               Intercontinental Hotel <br />
//               Bandung
//             </h2>

//             <a
//               href="https://maps.app.goo.gl/itNvPF8tGYZR4Whq9"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[24px] w-[178px] bg-[#878787] hover:bg-[#51483F] active:scale-95 transition-all duration-200 text-white flex items-center justify-center font-averne text-[9px] rounded-[5px] gap-[5px]  mt-[25px]"
//             >
//               <Image
//                 src="/images/eventorder/Peta.webp"
//                 alt="Logo Wa"
//                 width={550}
//                 height={550}
//                 className="object-contain w-[20px] h-[18px]"
//               />
//               NAVIGATE TO LOCATION
//             </a>
//           </div>

//           <div className="pt-[45px] flex flex-col items-center text-center justify-center leading-none">
//             <h1 className="font-averne text-[32px] text-[#51483F]">
//               DRESS CODE
//             </h1>
//             <p className="pt-[11px] font-athelas italic text-[12px] text-[#717071] leading-[15px]">
//               We kindly encourage our guest to dress <br />
//               as follows on our special day
//             </p>
//             <div className="pt-[28px] flex flex-col items-center justify-center leading-none">
//               <p className="font-athelas text-[18px] text-[#717071]">
//                 GENTLEMEN
//               </p>
//               <p className="pt-[3px] font-athelas italic text-[14px] text-[#717071] leading-[18px]">
//                 Black Suits & Tie <br />( No Batik )
//               </p>
//             </div>
//             <div className="pt-[11px] flex flex-col items-center justify-center leading-none">
//               <p className="font-athelas text-[18px] text-[#717071]">WOMAN</p>
//               <p className="pt-[3px] font-athelas italic text-[14px] text-[#717071] leading-[19px]">
//                 Formal Long Dresses <br />
//                 in Shades of Navy or Black
//               </p>
//             </div>
//             <Image
//               src="/images/eventorder/Dresscode2.webp"
//               alt="William"
//               width={250}
//               height={92}
//               className="mt-[20px] h-auto w-[92px]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventOrder;
