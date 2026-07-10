import React from "react";
import Image from "next/image";

const Quote = () => {
  return (
    <section>
      <div className="relative w-full">
        <img
          src="/images/quote/Bg-Quote.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="relative pt-[10.51vw] pb-[13.85vw] flex flex-col items-center text-center justify-center leading-none gap-[9.49vw]">
          <p className="font-averne text-[3.08vw] text-white">
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