import React from "react";
import Image from "next/image";

const Thankyou = () => {
  return (
    <section className="">
      <div className="pt-[656px] pb-[31px] lg:pt-[673px] lg:pb-[65px]">
        <div className="flex flex-col items-center justify-center leading-none">
          <h1 className="font-duende text-[16.41vw] lg:text-[96px] text-white">Thank You</h1>
          <p className="pt-[12px] lg:pt-[23px] font-athelas italic text-[3.08vw] lg:text-[18px] text-white leading-[4.10vw] lg:leading-[22px]">
            Having you with us on our special day would <br />
            make our celebration even more meaningful.
          </p>
          <Image
            src="/images/thankyou/Logo.png"
            alt="William"
            width={250}
            height={92}
            className="mt-[33px] lg:mt-[55px] h-auto w-[64.62vw] lg:w-[361px]"
          />
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
