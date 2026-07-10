import React from "react";
import Image from "next/image";

const EventOrder = () => {
  return (
    <section id="eventorder" className="bg-[#F4F4F5]">
      <div className="pt-[20.51vw]">
        <div className="relative left-1/2 -translate-x-1/2 w-[28.46vw] h-auto">
          <Image
            src="/images/eventorder/Logo.svg"
            alt="Provite Logo"
            width={250}
            height={250}
            className="w-full"
          />
        </div>

        <div className="pt-[10.51vw] flex flex-col items-center justify-center leading-none">
          <div className="flex flex-col items-center text-center justify-center leading-none">
            <h1 className="font-averne text-[8.21vw] text-[#51483F] leading-[7.18vw]">
              HOLY <br />
              MATRIMONY
            </h1>
            <p className="pt-[1.79vw] font-athelas text-[3.59vw] text-[#717071]">
              <span className="italic">at</span>
              <span className="font-urw">9.00</span> AM
            </p>
            <h2 className="pt-[3.08vw] font-duende text-[10.77vw] text-[#51483F]">
              Putting Garden
            </h2>
            <p className="pt-[4.62vw] font-athelas text-[3.59vw] text-[#717071]">
              DRESS CODE
            </p>
            <p className="pt-[0.26vw] font-athelas italic text-[3.59vw] text-[#717071] leading-[4.87vw]">
              Neutral Colors <br />( No Batik )
            </p>
            <Image
              src="/images/eventorder/Dresscode1.webp"
              alt="William"
              width={250}
              height={92}
              className="mt-[4.87vw] h-auto w-[58.97vw]"
            />
            <p className="pt-[3.59vw] font-athelas italic text-[3.08vw] text-[#717071]">
              don’t forget your sunnies!
            </p>
          </div>

          <div className="pt-[15.90vw] flex flex-col items-center text-center justify-center leading-none">
            <h1 className="font-averne text-[8.21vw] text-[#51483F] leading-[7.18vw] tracking-wide">
              DINNER <br />
              RECEPTION
            </h1>
            <p className="pt-[1.79vw] font-athelas text-[3.59vw] text-[#717071]">
              <span className="italic">at</span>
              <span className="font-urw">6.00</span> PM
            </p>
            <p className="pt-[2.56vw] font-athelas text-[3.59vw] text-[#717071]">
              GRAND BALLROOM
            </p>
            <h2 className="pt-[0.51vw] font-duende text-[10.26vw] text-[#51483F] leading-[7.95vw] tracking-wide">
              Intercontinental Hotel <br />
              Bandung
            </h2>

            <a
              href="https://maps.app.goo.gl/itNvPF8tGYZR4Whq9"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[6.15vw] w-[45.64vw] bg-[#878787] hover:bg-[#51483F] active:scale-95 transition-all duration-200 text-white flex items-center justify-center font-averne text-[2.31vw] rounded-[5px] gap-[1.28vw] mt-[6.41vw]"
            >
              <Image
                src="/images/eventorder/Peta.webp"
                alt="Logo Wa"
                width={550}
                height={550}
                className="object-contain w-[5.13vw] h-[4.62vw]"
              />
              NAVIGATE TO LOCATION
            </a>
          </div>

          <div className="pt-[11.54vw] flex flex-col items-center text-center justify-center leading-none">
            <h1 className="font-averne text-[8.21vw] text-[#51483F]">
              DRESS CODE
            </h1>
            <p className="pt-[2.82vw] font-athelas italic text-[3.08vw] text-[#717071] leading-[3.85vw]">
              We kindly encourage our guest to dress <br />
              as follows on our special day
            </p>
            <div className="pt-[7.18vw] flex flex-col items-center justify-center leading-none">
              <p className="font-athelas text-[4.62vw] text-[#717071]">
                GENTLEMEN
              </p>
              <p className="pt-[0.77vw] font-athelas italic text-[3.59vw] text-[#717071] leading-[4.62vw]">
                Black Suits & Tie <br />( No Batik )
              </p>
            </div>
            <div className="pt-[2.82vw] flex flex-col items-center justify-center leading-none">
              <p className="font-athelas text-[4.62vw] text-[#717071]">WOMAN</p>
              <p className="pt-[0.77vw] font-athelas italic text-[3.59vw] text-[#717071] leading-[4.87vw]">
                Formal Long Dresses <br />
                in Shades of Navy or Black
              </p>
            </div>
            <Image
              src="/images/eventorder/Dresscode2.webp"
              alt="William"
              width={250}
              height={92}
              className="mt-[5.13vw] h-auto w-[23.59vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;


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
