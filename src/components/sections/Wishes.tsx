"use client";

import { dummyPesan } from "@/components/data/wishes";
import { useState, useEffect } from "react";
import Image from "next/image";
import WishesCard from "@/components/popup/WishesCard";
import NotifModal from "@/components/popup/NotifModal";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

type ModalType = string | null;

const Wishes = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );
  const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
    if (typeof window === "undefined") return dummyPesan;
    const saved = localStorage.getItem("pesan");
    return saved ? JSON.parse(saved) : dummyPesan;
  });
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleSubmit = (): void => {
    if (!nama || !pesan) {
      setModalType("incomplete_wishes");
      return;
    }

    const newPesan: PesanItem = {
      id: Date.now(),
      nama,
      pesan,
    };

    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  useEffect(() => {
    localStorage.setItem("pesan", JSON.stringify(pesanList));
  }, [pesanList]);

  return (
    <>
      <section
        id="wishes"
        className="w-full flex flex-col items-center pt-[26vw] pb-[18.72vw] lg:pt-[124px] lg:pb-[25px] leading-none"
      >
        <h2 className="font-averne text-[8.21vw] lg:text-[48px] text-white">
          YOUR WISHES
        </h2>

        <div className="w-full max-w-[72.82vw] lg:max-w-[368px] mx-auto mt-[7.3vw] lg:mt-[28px]">
          <div className="flex flex-col gap-[20px]">
            <input
              type="text"
              value={nama}
              placeholder="Desy (Tester)"
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-[#51483F] font-athelas text-[3.08vw] lg:text-[14.5px] bg-[#F9FBFA] border border-white px-[2.56vw] lg:px-[15px] h-[8.46vw] lg:h-[40px] rounded-[5px] lg:rounded-[7px] outline-none placeholder:text-[#51483F]/50"
            />

            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="w-full text-[#51483F] font-athelas text-[3.08vw] lg:text-[14.5px] bg-[#F9FBFA] border border-white px-[2.56vw] lg:px-[15px] py-[1.28vw] lg:py-[10px] h-[28.97vw] lg:h-[140px] rounded-[5px] lg:rounded-[7px] outline-none placeholder:text-[#51483F]/50"
            />

            <button
              onClick={handleSubmit}
              className="bg-[#535353] hover:bg-[#51483F] active:scale-95 transition-all duration-200 w-full rounded-[5px] lg:rounded-[7px] h-[8.46vw] lg:h-[40px] text-[3.08vw] lg:text-[14.5px] font-athelas uppercase flex items-center justify-center gap-1.5 lg:gap-1.5 text-[#FFFFFF] tracking-widest"
            >
              <Image
                src="/images/wishes/Panah.png"
                alt="Kirim"
                width={20}
                height={20}
                className="object-contain w-[4.62vw] lg:w-[20px] transition-all duration-200"
              />
              Send
            </button>

            <div
              className={`w-full rounded-[5px] lg:rounded-[7px] h-[81.79vw] lg:h-[380px] overflow-y-auto scrollbar-hide ${
                showAll ? "bg-transparent rounded-none" : "bg-[#535353]"
              }`}
            >
              {!showAll ? (
                <div>
                  <div className="sticky top-0 w-full h-[3.08vw] lg:h-[15px] bg-[#535353] z-10" />

                  <div className="px-[2.56vw] lg:px-[26px]">
                    {pesanList.map((item, index, array) => (
                      <div key={item.id}>
                        <p className="text-white font-athelas text-[3.08vw] mb-[2.56vw] lg:text-[14.5px] lg:mb-[12px]">
                          {item.nama}
                        </p>

                        <p className="text-white font-athelas text-[3.08vw] lg:text-[14.5px] tracking-wide mb-[3.33vw] lg:mb-[16px] break-words leading-[3.33vw] lg:leading-[18.24px]">
                          {item.pesan}
                        </p>

                        {index !== array.length - 1 && (
                          <div className="border-t border-white mb-[3.85vw] lg:mb-[19px]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="sticky bottom-0 w-full h-[3.08vw] lg:h-[5px] bg-[#535353] z-10" />
                </div>
              ) : (
                <div className="w-full px-[1.28vw] lg:px-[10px] py-[20px] lg:py-[20px]">
                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-[2.56vw] lg:gap-[18px]">
                    {pesanList.map((item) => {
                      const initials = item.nama
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2);

                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedMessage(item)}
                          className="group relative overflow-hidden rounded-[15px] border border-[#51483F]/15 bg-[#F9FBFA] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-[#51483F]/30 active:scale-95"
                        >
                          {/* Decorative top accent */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#51483F]/60 via-[#51483F]/30 to-transparent" />

                          {/* Content area */}
                          <div className="p-[2vw] lg:p-[20px] flex-1 flex flex-col justify-between">
                            {/* Quotation mark */}
                            <p className="text-[21vw] lg:text-[56px] font-duende text-[#51483F]/20 leading-none group-hover:text-[#51483F]/30 transition-colors -ml-[10px]">
                              "
                            </p>

                            {/* Message */}
                            <p className="font-athelas italic text-[3.08vw] lg:text-[15px] text-[#51483F]/85 text-left line-clamp-4 leading-[4.36vw] lg:leading-[22px] -mt-[30px] lg:-mt-[20px] mb-4">
                              {item.pesan}
                            </p>

                            {/* Accent line */}
                            <div className="w-8 h-0.5 bg-[#51483F]/20 rounded-full" />
                          </div>

                          {/* Avatar + Name footer */}
                          <div className="bg-[#51483F] px-[3.08vw] lg:px-[16px] py-[2.56vw] lg:py-[14px] flex items-center gap-[2.05vw] lg:gap-[12px]">
                            <div className="w-[6.15vw] h-[6.15vw] lg:w-[36px] lg:h-[36px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20">
                              <p className="text-white text-[2.56vw] lg:text-[13px] font-athelas font-bold">
                                {initials}
                              </p>
                            </div>

                            <p className="text-white text-[2.56vw] lg:text-[14px] font-athelas uppercase truncate flex-1 tracking-wide">
                              {item.nama}
                            </p>
                          </div>

                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <WishesCard
              data={selectedMessage}
              onClose={() => setSelectedMessage(null)}
            />

            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#535353] hover:bg-[#51483F] active:scale-95 transition-all duration-200 w-full rounded-[5px] lg:rounded-[7px] h-[8.46vw] lg:h-[40px] text-[3.08vw] lg:text-[14.5px] font-athelas uppercase flex items-center justify-center gap-2 text-white tracking-widest"
            >
              <Image
                src="/images/wishes/Pesan.png"
                alt="Pesan"
                width={20}
                height={20}
                className="object-cover w-[5.13vw] lg:w-[20px] group-hover:invert transition-all duration-200"
              />
              {showAll ? "BACK" : "VIEW ALL MESSAGES"}
            </button>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-[24px]">
            <div className="relative overflow-hidden rounded-[28px] border border-[#51483F]/20 bg-[#F9FBFA] shadow-lg w-full max-w-[84.62vw] lg:max-w-[420px]">
              <div className="absolute top-0 left-0 w-full h-[1.54vw] lg:h-[8px] bg-[#51483F]" />

              <div className="px-[7.18vw] lg:px-[40px] pt-[9.23vw] lg:pt-[48px] pb-[7.18vw] lg:pb-[40px] flex flex-col items-center text-center">
                <div className="w-[18.46vw] h-[18.46vw] lg:w-[96px] lg:h-[96px] rounded-full bg-[#51483F] border border-[#51483F]/15 flex items-center justify-center mb-[5.13vw] lg:mb-[28px]">
                  <Image
                    src="/images/wishes/Pesan.png"
                    alt="Success"
                    width={34}
                    height={34}
                    className="object-contain w-[10.72vw] h-[10.72vw] lg:w-[44px] lg:h-[44px]"
                  />
                </div>

                <h3 className="font-duende text-[8.21vw] lg:text-[40px] text-[#51483F]">
                  Thank You
                </h3>

                <div className="w-[17.95vw] lg:w-[90px] h-[1px] bg-[#51483F]/30 my-[4.10vw] lg:my-[22px]" />

                <p className="font-athelas italic text-[3.08vw] lg:text-[16px] leading-[5.64vw] lg:leading-[26px] text-[#51483F]/85 max-w-[61.54vw] lg:max-w-[320px]">
                  Your wishes and prayers mean so much to us. Thank you for
                  sharing your kind words on our special day.
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-[7.18vw] lg:mt-[36px] bg-[#51483F] hover:bg-[#51483F]/85 active:scale-95 transition-all duration-300 text-white font-athelas uppercase text-[2.82vw] lg:text-[14px] tracking-[0.13vw] lg:tracking-[0.6px] px-[8.21vw] lg:px-[40px] h-[9.74vw] lg:h-[48px] rounded-full"
                >
                  Close
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[1.28vw] lg:h-[6px] bg-[#51483F]" />
            </div>
          </div>
        )}
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={() => setModalType(null)}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Wishes;

// SEBELUM DI KE VW KAN
// "use client";

// import { dummyPesan } from "@/components/data/wishes";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import WishesCard from "@/components/popup/WishesCard";
// import NotifModal from "@/components/popup/NotifModal";

// type PesanItem = {
//   id: number;
//   nama: string;
//   pesan: string;
// };

// type ModalType = string | null;

// const Wishes = () => {
//   const [nama, setNama] = useState<string>("");
//   const [pesan, setPesan] = useState<string>("");
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [showAll, setShowAll] = useState<boolean>(false);
//   const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
//     null,
//   );
//   const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
//     if (typeof window === "undefined") return dummyPesan;
//     const saved = localStorage.getItem("pesan");
//     return saved ? JSON.parse(saved) : dummyPesan;
//   });
//   const [modalType, setModalType] = useState<ModalType>(null);

//   const handleSubmit = (): void => {
//     if (!nama || !pesan) {
//       setModalType("incomplete_wishes");
//       return;
//     }

//     const newPesan: PesanItem = {
//       id: Date.now(),
//       nama,
//       pesan,
//     };

//     setPesanList((prev) => [newPesan, ...prev]);
//     setShowPopup(true);
//     setNama("");
//     setPesan("");
//   };

//   useEffect(() => {
//     localStorage.setItem("pesan", JSON.stringify(pesanList));
//   }, [pesanList]);

//   return (
//     <>
//       <section
//         id="wishes"
//         className="w-full flex flex-col items-center pt-[104px] pb-[73px] lg:pt-[236px] lg:pb-[35px] leading-none"
//       >

//         <h2 className="font-averne text-[32px] text-white">
//           YOUR WISHES
//         </h2>

//         <div className="w-full max-w-[284px] lg:max-w-[583px] mx-auto mt-[38px] lg:mt-[65px]">
//           <div className="flex flex-col gap-[20px]">
//             <input
//               type="text"
//               value={nama}
//               placeholder="Desy (Tester)"
//               onChange={(e) => setNama(e.target.value)}
//               className="w-full text-[#51483F] font-athelas text-[12px] lg:text-[18px] bg-[#F9FBFA] border border-white px-[10px] lg:px-[23px] h-[33px] lg:h-[40px] rounded-[5px] outline-none placeholder:text-[#51483F]/50"
//             />

//             <textarea
//               value={pesan}
//               onChange={(e) => setPesan(e.target.value)}
//               className="w-full text-[#51483F] font-athelas text-[12px] lg:text-[18px] bg-[#F9FBFA] border border-white px-[10px] lg:px-[23px] py-[5px] lg:py-[10px] h-[113px] lg:h-[261px] rounded-[5px] outline-none placeholder:text-[#51483F]/50"
//             />

//             <button
//               onClick={handleSubmit}
//               className="bg-[#535353] hover:bg-[#51483F] active:scale-95 transition-all duration-200 w-full rounded-[5px] h-[33px] lg:h-[40px] text-[12px] lg:text-[18px] font-athelas uppercase flex items-center justify-center gap-0.5 lg:gap-1 text-[#FFFFFF] tracking-widest"
//             >
//               <Image
//                 src="/images/wishes/Panah.png"
//                 alt="Kirim"
//                 width={20}
//                 height={20}
//                 className="object-contain w-[18px] lg:w-[25px] transition-all duration-200"
//               />
//               Send
//             </button>

//             <div
//               className={`w-full rounded-[5px] h-[319px] lg:h-[519px] overflow-y-auto scrollbar-hide ${
//                 showAll ? "bg-transparent rounded-none" : "bg-[#535353]"
//               }`}
//             >
//               {!showAll ? (
//                 <div>
//                   <div className="sticky top-0 w-full h-[12px] lg:h-[15px] bg-[#535353] z-10" />

//                   <div className="px-[10px] lg:px-[23px]">
//                     {pesanList.map((item, index, array) => (
//                       <div key={item.id}>
//                         <p className="text-white font-athelas text-[12px] mb-[10px] lg:text-[18px] lg:mb-[16px]">
//                           {item.nama}
//                         </p>

//                         <p className="text-white font-athelas text-[12px] lg:text-[18px] tracking-wide mb-[13px] lg:mb-[17px] break-words leading-[13px] lg:leading-[22px]">
//                           {item.pesan}
//                         </p>

//                         {index !== array.length - 1 && (
//                           <div className="border-t border-white mb-[15px] lg:mb-[19px]" />
//                         )}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="sticky bottom-0 w-full h-[12px] lg:h-[5px] bg-[#535353] z-10" />
//                 </div>
//               ) : (
//                 <div className="w-full px-[5px] lg:px-[10px] py-[20px] lg:py-[20px]">
//   <div className="grid grid-cols-2 lg:grid-cols-2 gap-[10px] lg:gap-[18px]">
//     {pesanList.map((item) => {
//       const initials = item.nama
//         .split(" ")
//         .map((n) => n[0])
//         .join("")
//         .toUpperCase()
//         .slice(0, 2);

//       return (
//         <div
//           key={item.id}
//           onClick={() => setSelectedMessage(item)}
//           className="group relative overflow-hidden rounded-[15px] border border-[#51483F]/15 bg-[#F9FBFA] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-[#51483F]/30 active:scale-95"
//         >
//           {/* Decorative top accent */}
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#51483F]/60 via-[#51483F]/30 to-transparent" />

//           {/* Content area */}
//           <div className="p-[14px] lg:p-[20px] flex-1 flex flex-col justify-between">
//             {/* Quotation mark */}
//             <p className="text-[48px] lg:text-[56px] font-duende text-[#51483F]/20 leading-none mb-1 group-hover:text-[#51483F]/30 transition-colors">
//               "
//             </p>

//             {/* Message */}
//             <p className="font-athelas italic text-[12px] lg:text-[15px] text-[#51483F]/85 text-left line-clamp-4 leading-[17px] lg:leading-[22px] mb-4">
//               {item.pesan}
//             </p>

//             {/* Accent line */}
//             <div className="w-8 h-0.5 bg-[#51483F]/20 rounded-full" />
//           </div>

//           {/* Avatar + Name footer */}
//           <div className="bg-[#51483F] px-[12px] lg:px-[16px] py-[10px] lg:py-[14px] flex items-center gap-[8px] lg:gap-[12px]">
//             <div className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20">
//               <p className="text-white text-[10px] lg:text-[13px] font-athelas font-bold">
//                 {initials}
//               </p>
//             </div>

//             <p className="text-white text-[10px] lg:text-[14px] font-athelas uppercase truncate flex-1 tracking-wide">
//               {item.nama}
//             </p>
//           </div>

//           {/* Hover effect overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
//         </div>
//       );
//     })}
//   </div>
// </div>
//               )}
//             </div>

//             <WishesCard
//               data={selectedMessage}
//               onClose={() => setSelectedMessage(null)}
//             />

//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="bg-[#535353] hover:bg-[#51483F] active:scale-95 transition-all duration-200 w-full rounded-[5px] h-[33px] lg:h-[40px] text-[12px] lg:text-[18px] font-athelas uppercase flex items-center justify-center gap-1.5 text-white tracking-widest"
//             >
//               <Image
//                 src="/images/wishes/Pesan.png"
//                 alt="Pesan"
//                 width={20}
//                 height={20}
//                 className="object-cover w-[20px] lg:w-[25px] group-hover:invert transition-all duration-200"
//               />
//               {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//             </button>
//           </div>
//         </div>
//        {showPopup && (
//   <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-[24px]">
//     <div className="relative overflow-hidden rounded-[28px] border border-[#51483F]/20 bg-[#F9FBFA] shadow-lg w-full max-w-[330px]">
//       <div className="absolute top-0 left-0 w-full h-[6px] bg-[#51483F]" />

//       <div className="px-[28px] pt-[36px] pb-[28px] flex flex-col items-center text-center">
//         <div className="w-[72px] h-[72px] rounded-full bg-[#51483F]/10 border border-[#51483F]/15 flex items-center justify-center mb-[20px]">
//           <Image
//             src="/images/wishes/Pesan.svg"
//             alt="Success"
//             width={34}
//             height={34}
//             className="object-contain w-[34px] h-[34px]"
//           />
//         </div>

//         <h3 className="font-duende text-[32px] text-[#51483F]">
//           Thank You
//         </h3>

//         <div className="w-[70px] h-[1px] bg-[#51483F]/30 my-[16px]" />

//         <p className="font-athelas italic text-[12px] leading-[22px] text-[#51483F]/85 max-w-[240px]">
//           Your wishes and prayers mean so much to us. Thank you for
//           sharing your kind words on our special day.
//         </p>

//         <button
//           onClick={() => setShowPopup(false)}
//           className="mt-[28px] bg-[#51483F] hover:bg-[#51483F]/85 active:scale-95 transition-all duration-300 text-white font-athelas uppercase text-[11px] tracking-[0.5px] px-[32px] h-[38px] rounded-full"
//         >
//           Close
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#51483F]" />
//     </div>
//   </div>
// )}
//       </section>

//       {modalType && (
//         <NotifModal
//           type={modalType}
//           onClose={() => setModalType(null)}
//           onConfirm={() => setModalType(null)}
//           waNumber="6281234567890"
//         />
//       )}
//     </>
//   );
// };

// export default Wishes;
