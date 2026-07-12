import React from "react";
import Image from "next/image";

const Thankyou = () => {
  return (
    <section className="">
      <div className="pt-[656px] pb-[31px] lg:pt-[673px] lg:pb-[65px]">
        <div className="flex flex-col items-center justify-center leading-none">
          <h1 className="font-duende text-[16.41vw] lg:text-[96px] text-white">
            Thank You
          </h1>
          <p className="pt-[16px] lg:pt-[23px] font-athelas italic text-[3.08vw] lg:text-[18px] text-white leading-[4.10vw] lg:leading-[22px] tracking-wide">
            Having you with us on our special day would <br />
            make our celebration even more meaningful.
          </p>
          <div className="pt-[31px] lg:pt-[48px] flex items-center justify-center gap-[20px] lg:gap-[25px]">
            <div className="flex items-center justify-center gap-[4px]">
              <p className="font-athelas text-white text-[6.89px] lg:text-[9.87px]">
                Specially Design by
              </p>
              <Image
                src="/images/thankyou/Peletin.png"
                alt="William"
                width={250}
                height={252}
                className="h-auto w-[44px] lg:w-[62px]"
              />
            </div>
            <div className="flex items-center justify-center gap-[4px]">
              <p className="font-athelas text-white text-[6.89px] lg:text-[9.87px]">
              Reservation System by
              </p>
              <Image
                src="/images/thankyou/Provite.png"
                alt="William"
                width={250}
                height={252}
                className="mt-[4.5px] lg:mt-[5px] h-auto w-[62px] lg:w-[89px]"
              />
            </div>
          </div>

          {/* <Image
            src="/images/thankyou/Logo.png"
            alt="William"
            width={250}
            height={92}
            className="mt-[33px] lg:mt-[55px] h-auto w-[64.62vw] lg:w-[361px]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Thankyou;

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const Thankyou = () => {
//   return (
//     <section className="">
//       <div className="pt-[656px] pb-[31px]">
//         <div className="flex flex-col items-center justify-center leading-none">
//           <h1 className="font-duende text-[64px] text-white">Thank You</h1>
//           <p className="pt-[12px] font-athelas italic text-[12px] text-white leading-[16px]">
//             Having you with us on our special day would <br />
//             make our celebration even more meaningful.
//           </p>
//           <Image
//             src="/images/thankyou/Logo.png"
//             alt="William"
//             width={250}
//             height={92}
//             className="mt-[33px] h-auto w-[252px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Thankyou;
