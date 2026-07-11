import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile">
      <div className="relative w-full bg[#F9FBFA] lg:min-h-[944px]">
        <img
          src="/images/profile/Layer-Bunga.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none lg:hidden"
        />
        <img
          src="/images/profile/LayerBunga2.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden lg:block"
        />
        <div className="relative pt-[25.90vw] pb-[25.90vw] lg:pt-[146px] lg:pb-[145px] flex flex-col items-center justify-center leading-none">
          <div className="flex flex-col items-center text-center justify-center leading-none">
            <h3 className="font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.46vw] lg:leading-[22px]">
              MR. TOMI TANUDJAJA (†)
              <br />
              MRS. KO KOEY FAH
            </h3>
            <p className="pt-[4.62vw] lg:pt-[19px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071]">
              together with
            </p>
            <h3 className="pt-[4.3vw] lg:pt-[19px] font-athelas text-[3.08vw] lg:text-[18px] text-[#717071] leading-[3.59vw] lg:leading-[22px]">
              MR. EDIH SUTISNA
              <br />
              MRS. INA MARINA
            </h3>
          </div>
          <p className="pt-[5.5vw] lg:pt-[40px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#717071]">
            Cordially invite you to celebrate the wedding reception of
          </p>
          <div className="pt-[2vw] lg:pt-[30px]  flex flex-col items-center text-center justify-center leading-none">
            <Image
              src="/images/profile/William.webp"
              alt="William"
              width={247}
              height={92}
              className="h-auto w-[63.33vw] lg:w-[291px]"
            />
            <h3 className="-mt-[2.82vw]  lg:-mt-[17px] lg:pl-[22px] font-averne text-[4.62vw] lg:text-[24px] text-[#50473F]">
              CHRISTIAN TANUDJAJA
            </h3>
            <Image
              src="/images/profile/Maria.webp"
              alt="William"
              width={247}
              height={92}
              className="-mt-[0.5vw] lg:pt-[11px] h-auto w-[63.33vw] lg:w-[291px]"
            />
            <h3 className="-mt-[5.5vw] lg:pt-[58px] font-averne text-[4.62vw] lg:text-[24px] text-[#50473F]">
              LAWRENA
            </h3>
          </div>
          <div className="pt-[7.5vw] lg:pt-[35px] flex flex-col items-center text-center justify-center leading-none">
            <p className="font-athelas text-[3.08vw] lg:text-[18.55px] text-[#717071]">
              SATURDAY, <span className="font-urw">19</span> SEPTEMBER 2026
            </p>
            <p className="pt-[4.5vw] lg:pt-[22px] font-athelas text-[3.08vw] lg:text-[19.88px] text-[#717071] leading-[4.10vw] lg:leading-[19.5px]">
              INTERCONTINENTAL HOTEL BANDUNG <br />
              <span className="italic lg:text-[15.9px]">
                Jl. Resor Dago Pakar Raya 2B, Bandung
              </span>
            </p>
            <p className="pt-[7.69vw] lg:pt-[59px] font-athelas italic text-[3.08vw] lg:text-[15.9px] text-[#717071] leading-[3.85vw] lg:leading-[19px]">
              Our joy will be complete with your presence <br />
              and blessing at our celebration of love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

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
