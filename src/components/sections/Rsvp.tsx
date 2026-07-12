"use client";

import { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";

type Pilihan = "hadir" | "maybe" | "tidak_hadir" | null;
type ModalType = string | null;

const Rsvp = () => {
  const [pilihan, setPilihan] = useState<Pilihan>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleConfirm = (): void => {
    if (!pilihan) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(null);
    if (pilihan === "hadir") {
      setModalType("rsvp_confirmed_hadir");
    } else if (pilihan === "maybe") {
      setModalType("rsvp_confirmed_maybe");
    } else {
      setModalType("rsvp_confirmed_tidak_hadir");
    }
  };

  return (
    <>
      <section className="bg[#F9FBFA]">
        <div className="pt-[23vw] pb-[24vw] lg:pt-[105px] lg:pb-[120px]">
          <h1 className="font-averne text-[8.21vw] lg:text-[48px] text-[#51483F] flex justify-center">
            RSVP
          </h1>
          <div className="flex flex-col items-center text-center justify-center leading-none">
            <p className="pt-[1.3vw] lg:pt-[20px] font-athelas font-bold italic text-[3.08vw] lg:text-[16px] text-[#51483F]">
              Mr./Mrs./Ms.
            </p>
            <p className="pt-[1.6vw] lg:pt-[48px] font-athelas font-bold text-[4.10vw] lg:text-[18px] text-[#51483F]  break-words max-w-[90%]">
              NAMA & PARTNER
            </p>
            <p className="pt-[5.13vw] lg:pt-[48px] font-athelas italic text-[3.08vw] lg:text-[18px] text-[#51483F] leading-[3.85vw] lg:leading-[26px]">
              Please confirm your attendance before <br />
              <span className="font-bold">Sunday, 16 August 2026</span>
            </p>

            <div className="pt-[4.62vw] lg:pt-[47px] flex items-center justify-center gap-[2.05vw] lg:gap-[24px]">
              <button
                onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
                className={`h-[5.13vw] w-[18.97vw] lg:h-[40px] lg:w-[172px] flex items-center justify-center font-athelas text-[3.08vw] rounded-[5px] lg:text-[18px] lg:rounded-[7px] transition-colors duration-200 ${
                  pilihan === "hadir"
                    ? "bg-[#878787] text-white"
                    : "border border-[0.5px] border-[#878787] bg-[#E2DEDF] text-[#51483F]"
                }`}
              >
                ATTEND
              </button>

              <button
                onClick={() => setPilihan(pilihan === "maybe" ? null : "maybe")}
                className={`h-[5.13vw] w-[18.97vw] lg:h-[40px] lg:w-[172px] flex items-center justify-center font-athelas text-[3.08vw] rounded-[5px] lg:text-[18px] lg:rounded-[7px] transition-colors duration-200 ${
                  pilihan === "maybe"
                    ? "bg-[#878787] text-white"
                    : "border border-[0.5px] border-[#878787] bg-[#E2DEDF] text-[#51483F]"
                }`}
              >
                MAYBE
              </button>

              <button
                onClick={() =>
                  setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")
                }
                className={`h-[5.13vw] w-[34.62vw] lg:h-[40px] lg:w-[172px] flex items-center justify-center font-athelas text-[3.08vw] rounded-[5px] lg:text-[18px] lg:rounded-[7px] transition-colors duration-200 ${
                  pilihan === "tidak_hadir"
                    ? "bg-[#878787] text-white"
                    : "border border-[0.5px] border-[#878787] bg-[#E2DEDF] text-[#51483F]"
                }`}
              >
                NOT TO ATTEND
              </button>
            </div>

            <p className="pt-[11.5vw] lg:pt-[43px] font-athelas text-[3.08vw] lg:text-[18px] text-[#51483F]">
              {pilihan === "tidak_hadir"
                ? "ARE YOU SURE?"
                : "Confirm your selection?"}
            </p>

            <button
              onClick={handleConfirm}
              className="h-[5.13vw] w-[38.21vw] lg:h-[40px] lg:w-[368px] bg-[#878787] hover:bg-[#51483F] active:scale-95 transition-all duration-200 text-white flex items-center justify-center font-athelas text-[3.08vw] rounded-[5px] lg:text-[18px] lg:rounded-[7px] mt-[4.87vw] lg:mt-[42px]"
            >
              CONFIRM
            </button>

            <p className="pt-[6.4vw] lg:pt-[67px] font-athelas italic text-[2.56vw] lg:text-[16px] text-[#51483F]">
              having trouble with RSVP?
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[6.15vw] w-[38.21vw] lg:h-[40px] lg:w-[212px] bg-[#12877B] hover:bg-[#0F6B61] text-white flex items-center justify-center font-athelas text-[3.08vw] rounded-[5px] gap-[1.28vw] lg:text-[18px] lg:rounded-[7px] mt-[5.6vw] lg:mt-[50px] transition-colors duration-200"
            >
              <Image
                src="/images/rsvp/Wa.png"
                alt="Logo Wa"
                width={550}
                height={550}
                className="object-contain w-[3.33vw] h-[3.33vw] lg:w-[20px] lg:h-[20px]"
              />
              CHAT SUPPORT
            </a>
          </div>
        </div>
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Rsvp;

// KONSEP NO LOGIC
// import React from "react";
// import Image from "next/image";

// const Rsvp = () => {
//   return (
//     <section className="bg-[#F4F4F5]">
//       <div className="pt-[100px] pb-[100px]">
//         <h1 className="font-averne text-[32px] text-[#51483F] flex justify-center">
//           RSVP
//         </h1>
//         <div className="flex flex-col items-center text-center justify-center leading-none">
//           <p className="pt-[18px] font-athelas font-bold italic text-[12px] text-[#51483F]">
//             Mr./Mrs./Ms.
//           </p>
//           <p className="pt-[6px] font-athelas font-bold text-[16px] text-[#51483F]">
//             NAMA & PARTNER
//           </p>
//           <p className="pt-[18px] font-athelas italic text-[12px] text-[#51483F] leading-[20px]">
//             Please confirm your attendance before <br />
//             <span className="font-bold">Sunday, 16 August 2026</span>
//           </p>

//           <div className="pt-[18px]  flex items-center justify-center gap-[8px]">
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[20px] w-[74px] bg-[#878787] text-white flex items-center justify-center font-athelas text-[12px] rounded-[5px]"
//             >
//               ATTEND
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[20px] w-[74px] border border-[0.5px] border-[#878787] bg-[#E2DEDF] text-white flex items-center justify-center font-athelas text-[12px] rounded-[5px]"
//             >
//               MAYBE
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="h-[20px] w-[135px] border border-[0.5px] border-[#878787] bg-[#E2DEDF] text-white flex items-center justify-center font-athelas text-[12px] rounded-[5px]"
//             >
//               UNABLE TO ATTEND
//             </a>
//           </div>

//           <p className="pt-[43px] font-athelas text-[12px] text-[#51483F]">
//             ARE YOU SURE?
//           </p>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="h-[20px] w-[149px] bg-[#878787] text-white flex items-center justify-center font-athelas text-[12px] rounded-[5px] mt-[13px]"
//           >
//             CONFIRM
//           </a>
//           <p className="pt-[24px] font-athelas italic text-[10px] text-[#51483F]">
//             having trouble with RSVP?
//           </p>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="h-[24px] w-[149px] bg-[#12877B] text-white flex items-center justify-center font-athelas text-[12px] rounded-[5px] gap-[5px] mt-[20px] "
//           >
//             <Image
//               src="/images/rsvp/Wa.png"
//               alt="Logo Wa"
//               width={550}
//               height={550}
//               className="object-contain w-[13px] h-[13px]"
//             />
//             CHAT SUPPORT
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rsvp;
