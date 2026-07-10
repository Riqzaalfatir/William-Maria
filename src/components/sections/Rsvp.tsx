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
      <section className="bg-[#F4F4F5]">
        <div className="pt-[100px] pb-[100px]">
          <h1 className="font-averne text-[32px] text-[#51483F] flex justify-center">
            RSVP
          </h1>
          <div className="flex flex-col items-center text-center justify-center leading-none">
            <p className="pt-[18px] font-athelas font-bold italic text-[12px] text-[#51483F]">
              Mr./Mrs./Ms.
            </p>
            <p className="pt-[6px] font-athelas font-bold text-[16px] text-[#51483F]">
              NAMA & PARTNER
            </p>
            <p className="pt-[18px] font-athelas italic text-[12px] text-[#51483F] leading-[20px]">
              Please confirm your attendance before <br />
              <span className="font-bold">Sunday, 16 August 2026</span>
            </p>

            <div className="pt-[18px] flex items-center justify-center gap-[8px]">
              <button
                onClick={() =>
                  setPilihan(pilihan === "hadir" ? null : "hadir")
                }
                className={`h-[20px] w-[74px] flex items-center justify-center font-athelas text-[12px] rounded-[5px] transition-colors duration-200 ${
                  pilihan === "hadir"
                    ? "bg-[#878787] text-white"
                    : "border border-[0.5px] border-[#878787] bg-[#E2DEDF] text-[#51483F]"
                }`}
              >
                ATTEND
              </button>

              <button
                onClick={() =>
                  setPilihan(pilihan === "maybe" ? null : "maybe")
                }
                className={`h-[20px] w-[74px] flex items-center justify-center font-athelas text-[12px] rounded-[5px] transition-colors duration-200 ${
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
                className={`h-[20px] w-[135px] flex items-center justify-center font-athelas text-[12px] rounded-[5px] transition-colors duration-200 ${
                  pilihan === "tidak_hadir"
                    ? "bg-[#878787] text-white"
                    : "border border-[0.5px] border-[#878787] bg-[#E2DEDF] text-[#51483F]"
                }`}
              >
                UNABLE TO ATTEND
              </button>
            </div>

            <p className="pt-[43px] font-athelas text-[12px] text-[#51483F]">
              {pilihan === "tidak_hadir" ? "ARE YOU SURE?" : "Confirm your selection?"}
            </p>

            <button
              onClick={handleConfirm}
              className="h-[20px] w-[149px] bg-[#878787] hover:bg-[#191A2A] text-white flex items-center justify-center font-athelas text-[12px] rounded-[5px] mt-[13px] transition-colors duration-200"
            >
              CONFIRM
            </button>

            <p className="pt-[24px] font-athelas italic text-[10px] text-[#51483F]">
              having trouble with RSVP?
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[24px] w-[149px] bg-[#12877B] hover:bg-[#0F6B61] text-white flex items-center justify-center font-athelas text-[12px] rounded-[5px] gap-[5px] mt-[20px] transition-colors duration-200"
            >
              <Image
                src="/images/rsvp/Wa.png"
                alt="Logo Wa"
                width={550}
                height={550}
                className="object-contain w-[13px] h-[13px]"
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
