import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";
import ResponsivePicture from "@/hooks/ResponsivePicture";

const Profile = () => {
  return (
    <section id="profile">
      <div className="relative w-full bg-[#F4F4F5] lg:min-h-[944px]">
        <ResponsivePicture
          mobileSrc="/images/profile/Layer-BM.png"
          desktopSrc="/images/profile/LayerBunga3.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          unoptimized
        />
        {/* pt mobile 26.04 */}
        <div className="relative pt-[25.5vw] pb-[25.64vw] lg:pt-[146px] lg:pb-[145px] flex flex-col items-center justify-center leading-none">
          <div className="flex flex-col items-center text-center justify-center leading-none">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              className="font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.46vw] lg:leading-[22px] tracking-[2%]"
            >
              MR. TOMI TANUDJAJA (†)
              <br />
              MRS. KO KOEY FAH
            </motion.h3>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              className="pt-[4.62vw] lg:pt-[19px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071]"
            >
              together with
            </motion.p>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              className="pt-[4.62vw] lg:pt-[19px] font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.59vw] lg:leading-[22px] tracking-[2%]"
            >
              MR. EDIH SUTISNA
              <br />
              MRS. INA MARINA
            </motion.h3>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
            className="pt-[5.0vw] lg:pt-[40px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#717071] tracking-[2%]"
          >
            Cordially invite you to celebrate the wedding reception of
          </motion.p>

          <div className="pt-[1.79vw] lg:pt-[32px]  flex flex-col items-center text-center justify-center leading-none lg:-ml-[8px]">
            <div className="flex flex-col items-center text-center justify-center leading-none">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  src="/images/profile/William.webp"
                  alt="William"
                  width={247}
                  height={92}
                  className="h-auto w-[63.33vw] lg:w-[291px]"
                  unoptimized
                />
                <h3
                  className="-mt-[2.7vw]  lg:-mt-[17px] ml-[3px] lg:ml-[15px] lg:pl-[22px] font-averne font-medium text-[4.62vw] lg:text-[24px] text-[#50473F] tracking-[3%]"
                  style={{ WebkitTextStroke: "0.3px #51483F" }}
                >
                  CHRISTIAN TANUDJAJA
                </h3>
              </motion.div>
            </div>

            <div className="-mt-[0.51vw] flex flex-col items-center text-center justify-center leading-none">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  src="/images/profile/Maria.webp"
                  alt="William"
                  width={247}
                  height={92}
                  className="pt-[0vw] lg:pt-[11px] h-auto w-[63.33vw] lg:w-[291px]"
                />
                <h3
                  className="-mt-[5.5vw] lg:pt-[58px] font-averne text-[4.62vw] lg:text-[24px] text-[#50473F] tracking-[3%]"
                  style={{ WebkitTextStroke: "0.3px #51483F" }}
                >
                  LAWRENA
                </h3>
              </motion.div>
            </div>
          </div>

          <div className="pt-[7.44vw] lg:pt-[35px] flex flex-col items-center text-center justify-center leading-none">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              className="font-athelas text-[3.08vw] lg:text-[18.55px] text-[#717071] tracking-[2%]"
            >
              SATURDAY, <span className="font-urw">19</span> SEPTEMBER{" "}
              <span className="font-urw">2026</span>
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              className="pt-[4.1vw] lg:pt-[22px] font-athelas text-[3.08vw] lg:text-[19.88px] text-[#717071] leading-[4.10vw] lg:leading-[23px] tracking-[2%]"
            >
              INTERCONTINENTAL HOTEL BANDUNG <br />
              <span className="italic lg:text-[15.9px]">
                Jl. Resor Dago Pakar Raya 2B, Bandung
              </span>
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
              className="pt-[7.69vw] lg:pt-[59px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071] leading-[3.85vw] lg:leading-[23px] tracking-[3%]"
            >
              Our joy will be complete with your presence <br />
              and blessing at our celebration of love
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

// SEBELUM DI BERIKAN LOGIC DOWNLOAD
// import React from "react";
// import Image from "next/image";

// const Profile = () => {
//   return (
//     <section id="profile">
//       <div className="relative w-full bg[#F9FBFA] lg:min-h-[944px]">
//         <img
//           src="/images/profile/Layer-BM.png"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full  object-cover pointer-events-none lg:hidden"
//         />
//         <img
//           src="/images/profile/LayerBunga2.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden lg:block"
//         />

//         {/* pt mobile 26.04 */}
//         <div className="relative pt-[25.5vw] pb-[25.64vw] lg:pt-[146px] lg:pb-[145px] flex flex-col items-center justify-center leading-none">
//           <div className="flex flex-col items-center text-center justify-center leading-none">
//             <h3 className="font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.46vw] lg:leading-[22px] tracking-[2%]">
//               MR. TOMI TANUDJAJA (†)
//               <br />
//               MRS. KO KOEY FAH
//             </h3>
//             <p className="pt-[4.62vw] lg:pt-[19px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071]">
//               together with
//             </p>
//             <h3 className="pt-[4.62vw] lg:pt-[19px] font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.59vw] lg:leading-[22px] tracking-[2%]">
//               MR. EDIH SUTISNA
//               <br />
//               MRS. INA MARINA
//             </h3>
//           </div>
//           <p className="pt-[5.0vw] lg:pt-[40px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#717071] tracking-[2%]">
//             Cordially invite you to celebrate the wedding reception of
//           </p>

//           <div className="pt-[1.79vw] lg:pt-[33px]  flex flex-col items-center text-center justify-center leading-none">
//             <div className="flex flex-col items-center text-center justify-center leading-none">
//               <Image
//                 src="/images/profile/William.webp"
//                 alt="William"
//                 width={247}
//                 height={92}
//                 className="h-auto w-[63.33vw] lg:w-[291px]"
//               />
//               <h3 className="-mt-[2.7vw]  lg:-mt-[17px] -ml-[4px] lg:ml-[15px] lg:pl-[22px] font-averne font-medium text-[4.62vw] lg:text-[24px] text-[#50473F] tracking-[3%]" style={{ WebkitTextStroke: "0.3px #51483F" }}>
//                 CHRISTIAN TANUDJAJA
//               </h3>
//             </div>

//             <div className="-mt-[0.51vw] flex flex-col items-center text-center justify-center leading-none">
//               <Image
//                 src="/images/profile/Maria.webp"
//                 alt="William"
//                 width={247}
//                 height={92}
//                 className="pt-[0vw] lg:pt-[11px] h-auto w-[63.33vw] lg:w-[291px]"
//               />
//               <h3 className="-mt-[5.5vw] lg:pt-[58px] font-averne text-[4.62vw] lg:text-[24px] text-[#50473F] tracking-[3%]" style={{ WebkitTextStroke: "0.3px #51483F" }}>
//                 LAWRENA
//               </h3>
//             </div>
//           </div>
//           <div className="pt-[7.44vw] lg:pt-[35px] flex flex-col items-center text-center justify-center leading-none">
//             <p className="font-athelas text-[3.08vw] lg:text-[18.55px] text-[#717071] tracking-[2%]">
//               SATURDAY, <span className="font-urw">19</span> SEPTEMBER <span className="font-urw">2026</span>
//             </p>
//             <p className="pt-[4.1vw] lg:pt-[22px] font-athelas text-[3.08vw] lg:text-[19.88px] text-[#717071] leading-[4.10vw] lg:leading-[23px] tracking-[2%]">
//               INTERCONTINENTAL HOTEL BANDUNG <br />
//               <span className="italic lg:text-[15.9px]">
//                 Jl. Resor Dago Pakar Raya 2B, Bandung
//               </span>
//             </p>
//             <p className="pt-[7.69vw] lg:pt-[59px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071] leading-[3.85vw] lg:leading-[23px] tracking-[3%]">
//               Our joy will be complete with your presence <br />
//               and blessing at our celebration of love
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

// SUDAH FIX TAPI MASIH PX
// import React from "react";
// import Image from "next/image";

// const Profile = () => {
//   return (
//     <section id="profile">
//       <div className="relative w-full bg[#F9FBFA] lg:min-h-[944px]">
//         <img
//           src="/images/profile/Layer-BM.png"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full  object-cover pointer-events-none lg:hidden"
//         />
//         <img
//           src="/images/profile/LayerBunga2.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden lg:block"
//         />

//         <div className="relative pt-[101.5px] pb-[100px] lg:pt-[146px] lg:pb-[145px] flex flex-col items-center justify-center leading-none">
//           <div className="flex flex-col items-center text-center justify-center leading-none">
//             <h3 className="font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.46vw] lg:leading-[22px]">
//               MR. TOMI TANUDJAJA (†)
//               <br />
//               MRS. KO KOEY FAH
//             </h3>
//             <p className="pt-[18px] lg:pt-[19px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071]">
//               together with
//             </p>
//             <h3 className="pt-[18px] lg:pt-[19px] font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.59vw] lg:leading-[22px]">
//               MR. EDIH SUTISNA
//               <br />
//               MRS. INA MARINA
//             </h3>
//           </div>
//           <p className="pt-[19.5px] lg:pt-[40px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#717071]">
//             Cordially invite you to celebrate the wedding reception of
//           </p>

//           <div className="pt-[7px] lg:pt-[33px]  flex flex-col items-center text-center justify-center leading-none">
//             <div className="flex flex-col items-center text-center justify-center leading-none">
//               <Image
//                 src="/images/profile/William.webp"
//                 alt="William"
//                 width={247}
//                 height={92}
//                 className="h-auto w-[63.33vw] lg:w-[291px]"
//               />
//               <h3 className="-mt-[2.7vw]  lg:-mt-[17px] -ml-[4px] lg:-ml-[0px] lg:pl-[22px] font-averne font-medium text-[4.62vw] lg:text-[24px] text-[#50473F]">
//                 CHRISTIAN TANUDJAJA
//               </h3>
//             </div>

//             <div className="-mt-[2px] flex flex-col items-center text-center justify-center leading-none">
//               <Image
//                 src="/images/profile/Maria.webp"
//                 alt="William"
//                 width={247}
//                 height={92}
//                 className="pt-[0vw] lg:pt-[11px] h-auto w-[63.33vw] lg:w-[291px]"
//               />
//               <h3 className="-mt-[5.5vw] lg:pt-[58px] font-averne text-[4.62vw] lg:text-[24px] text-[#50473F]">
//                 LAWRENA
//               </h3>
//             </div>
//           </div>
//           <div className="pt-[29px] lg:pt-[35px] flex flex-col items-center text-center justify-center leading-none">
//             <p className="font-athelas text-[3.08vw] lg:text-[18.55px] text-[#717071]">
//               SATURDAY, <span className="font-urw">19</span> SEPTEMBER <span className="font-urw">2026</span>
//             </p>
//             <p className="pt-[16px] lg:pt-[22px] font-athelas text-[3.08vw] lg:text-[19.88px] text-[#717071] leading-[4.10vw] lg:leading-[19.5px]">
//               INTERCONTINENTAL HOTEL BANDUNG <br />
//               <span className="italic lg:text-[15.9px]">
//                 Jl. Resor Dago Pakar Raya 2B, Bandung
//               </span>
//             </p>
//             <p className="pt-[30px] lg:pt-[59px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071] leading-[3.85vw] lg:leading-[19px]">
//               Our joy will be complete with your presence <br />
//               and blessing at our celebration of love
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

// MOBILE SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const Profile = () => {
//   return (
//     <section id="profile">
//       <div className="relative w-full bg-[#F4F4F5]">
//         <img
//           src="/images/profile/Layer-Bunga.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
//         />
//         <div className="relative pt-[101px] pb-[101px] flex flex-col items-center justify-center leading-none">
//           <div className="flex flex-col items-center text-center justify-center leading-none">
//             <h3 className="font-athelas text-[12px] text-[#717071] leading-[13.5px]">
//               MR. TOMI TANUDJAJA (†)
//               <br />
//               MRS. KO KOEY FAH
//             </h3>
//             <p className="pt-[18px] font-athelas italic text-[12px] text-[#717071]">
//               together with
//             </p>
//             <h3 className="pt-[19.5px] font-athelas text-[12px] text-[#717071] leading-[14px]">
//               MR. EDIH SUTISNA
//               <br />
//               MRS. INA MARINA
//             </h3>
//           </div>
//           <p className="pt-[20px] font-athelas italic text-[12px] text-[#717071]">
//             Cordially invite you to celebrate the wedding reception of
//           </p>
//           <div className="pt-[9px] flex flex-col items-center text-center justify-center leading-none">
//             <Image
//               src="/images/profile/William.webp"
//               alt="William"
//               width={247}
//               height={92}
//               className="h-auto w-[247px]"
//             />
//             <h3 className="-mt-[11px] font-averne text-[18px] text-[#50473F]">
//               CHRISTIAN TANUDJAJA
//             </h3>
//             <Image
//               src="/images/profile/Maria.webp"
//               alt="William"
//               width={247}
//               height={92}
//               className="h-auto w-[247px]"
//             />
//             <h3 className="-mt-[23px] font-averne text-[18px] text-[#50473F]">LAWRENA</h3>
//           </div>
//           <div className="pt-[27.5px] flex flex-col items-center text-center justify-center leading-none">
//             <p className="font-athelas text-[12px] text-[#717071]">
//               SATURDAY, <span className="font-urw">19</span> SEPTEMBER 2026
//             </p>
//             <p className="pt-[16px] font-athelas text-[12px] text-[#717071] leading-[16px]">
//               INTERCONTINENTAL HOTEL BANDUNG <br />
//               <span className="italic">
//                 Jl. Resor Dago Pakar Raya 2B, Bandung
//               </span>
//             </p>
//             <p className="pt-[30px] font-athelas italic text-[12px] text-[#717071] leading-[15px]">
//               Our joy will be complete with your presence <br />
//               and blessing at our celebration of love
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

// import React from "react";
// import Image from "next/image";

// const Profile = () => {
//   return (
//     <section id="profile">
//       <div className="relative w-full bg[#F9FBFA] lg:min-h-[944px]">
//         <img
//           src="/images/profile/Layer-Bunga.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover  pointer-events-none lg:hidden"
//         />
//         <img
//           src="/images/profile/LayerBunga2.webp"
//           alt="Nicholas & Clara"
//           className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden lg:block"
//         />
//         <div className="relative pt-[22.7vw] pb-[25.90vw] lg:pt-[146px] lg:pb-[145px] flex flex-col items-center justify-center leading-none">
//           <div className="flex flex-col items-center text-center justify-center leading-none">
//             <h3 className="font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.85vw] lg:leading-[22px]">
//               MR. TOMI TANUDJAJA (†)
//               <br />
//               MRS. KO KOEY FAH
//             </h3>
//             <p className="pt-[7vw] lg:pt-[19px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071]">
//               together with
//             </p>
//             <h3 className="pt-[6.2vw] lg:pt-[19px] font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.85vw] lg:leading-[22px]">
//               MR. EDIH SUTISNA
//               <br />
//               MRS. INA MARINA
//             </h3>
//           </div>

//           <p className="pt-[6.5vw] lg:pt-[40px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#717071]">
//             Cordially invite you to celebrate the wedding reception of
//           </p>

//           <div className="mt-[5.5vw] lg:pt-[33px]  flex flex-col items-center text-center justify-center leading-none">
//             <Image
//               src="/images/profile/William.webp"
//               alt="William"
//               width={247}
//               height={92}
//               className="h-auto w-[63.33vw] lg:w-[291px]"
//             />
//             <div className="relative -top-[2vw] lg:-top-[17px]">
//               <h3 className="-ml-[7px] lg:-ml-[0px] lg:pl-[22px] font-averne font-medium text-[4.62vw] lg:text-[24px] text-[#50473F]">
//                 CHRISTIAN TANUDJAJA
//               </h3>
//             </div>
//             <div className="relative -top-[2.5vw] lg:-top-[11px]">
//               <Image
//                 src="/images/profile/Maria.webp"
//                 alt="William"
//                 width={247}
//                 height={92}
//                 className="h-auto w-[63.33vw] lg:w-[291px]"
//               />
//             </div>
//             <div className="relative -top-[8vw] lg:top-0">
//               <h3 className="font-averne text-[4.62vw] lg:text-[24px] text-[#50473F]">
//                 LAWRENA
//               </h3>
//             </div>
//           </div>

//           <div className="pt-[1vw] lg:pt-[35px] flex flex-col items-center text-center justify-center leading-none">
//             <p className="font-athelas text-[3.08vw] lg:text-[18.55px] text-[#717071]">
//               SATURDAY, <span className="font-urw">19</span> SEPTEMBER 2026
//             </p>
//             <p className="pt-[4.5vw] lg:pt-[22px] font-athelas text-[3.08vw] lg:text-[19.88px] text-[#717071] leading-[4.10vw] lg:leading-[19.5px]">
//               INTERCONTINENTAL HOTEL BANDUNG <br />
//               <span className="italic lg:text-[15.9px]">
//                 Jl. Resor Dago Pakar Raya 2B, Bandung
//               </span>
//             </p>
//             <div className="relative top-[2.5vw] lg:-top-[10px]">
//               <p className="pt-[15vw] lg:pt-[59px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071] leading-[3.85vw] lg:leading-[19px]">
//                 Our joy will be complete with your presence <br />
//                 and blessing at our celebration of love
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

// // MOBILE SEBELUM DI VW KAN
// // import React from "react";
// // import Image from "next/image";

// // const Profile = () => {
// //   return (
// //     <section id="profile">
// //       <div className="relative w-full bg-[#F4F4F5]">
// //         <img
// //           src="/images/profile/Layer-Bunga.webp"
// //           alt="Nicholas & Clara"
// //           className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
// //         />
// //         <div className="relative pt-[101px] pb-[101px] flex flex-col items-center justify-center leading-none">
// //           <div className="flex flex-col items-center text-center justify-center leading-none">
// //             <h3 className="font-athelas text-[12px] text-[#717071] leading-[13.5px]">
// //               MR. TOMI TANUDJAJA (†)
// //               <br />
// //               MRS. KO KOEY FAH
// //             </h3>
// //             <p className="pt-[18px] font-athelas italic text-[12px] text-[#717071]">
// //               together with
// //             </p>
// //             <h3 className="pt-[19.5px] font-athelas text-[12px] text-[#717071] leading-[14px]">
// //               MR. EDIH SUTISNA
// //               <br />
// //               MRS. INA MARINA
// //             </h3>
// //           </div>
// //           <p className="pt-[20px] font-athelas italic text-[12px] text-[#717071]">
// //             Cordially invite you to celebrate the wedding reception of
// //           </p>
// //           <div className="pt-[9px] flex flex-col items-center text-center justify-center leading-none">
// //             <Image
// //               src="/images/profile/William.webp"
// //               alt="William"
// //               width={247}
// //               height={92}
// //               className="h-auto w-[247px]"
// //             />
// //             <h3 className="-mt-[11px] font-averne text-[18px] text-[#50473F]">
// //               CHRISTIAN TANUDJAJA
// //             </h3>
// //             <Image
// //               src="/images/profile/Maria.webp"
// //               alt="William"
// //               width={247}
// //               height={92}
// //               className="h-auto w-[247px]"
// //             />
// //             <h3 className="-mt-[23px] font-averne text-[18px] text-[#50473F]">LAWRENA</h3>
// //           </div>
// //           <div className="pt-[27.5px] flex flex-col items-center text-center justify-center leading-none">
// //             <p className="font-athelas text-[12px] text-[#717071]">
// //               SATURDAY, <span className="font-urw">19</span> SEPTEMBER 2026
// //             </p>
// //             <p className="pt-[16px] font-athelas text-[12px] text-[#717071] leading-[16px]">
// //               INTERCONTINENTAL HOTEL BANDUNG <br />
// //               <span className="italic">
// //                 Jl. Resor Dago Pakar Raya 2B, Bandung
// //               </span>
// //             </p>
// //             <p className="pt-[30px] font-athelas italic text-[12px] text-[#717071] leading-[15px]">
// //               Our joy will be complete with your presence <br />
// //               and blessing at our celebration of love
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Profile;
