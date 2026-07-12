import React from "react";
import Image from "next/image";

const Quote = () => {
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

        <div className="relative pt-[10.51vw] pb-[13.85vw] lg:pt-[43px] lg:pb-[108px] flex flex-col items-center text-center justify-center leading-none gap-[10.5vw] lg:gap-[10px]">
          <p className="font-averne text-[3.08vw] text-white lg:hidden tracking-wide">
            GOD KNEW OUR HEARTS NEED EACH OTHER
          </p>
          <p className="font-athelas text-[2.56vw] text-white leading-[3.85vw]">
            With joyful hearts and hopeful eyes, we’re stepping <br />
            into the next chapter. This wedding isn’t just a celebration of a
            day - <br />
            it’s a celebration of a journey, a promise, and the love we’re lucky{" "}
            <br />
            enough to call our own
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;

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
