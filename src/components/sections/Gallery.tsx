"use client";

import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

const images = [
  "/images/gallery/Pengantin1.webp",
  "/images/gallery/Pengantin2.webp",
  "/images/gallery/Pengantin3.webp",
  "/images/gallery/Pengantin4.webp",
  "/images/gallery/Pengantin5.webp",
  "/images/gallery/Pengantin6.webp",
  "/images/gallery/Pengantin7.webp",
  "/images/gallery/Pengantin8.webp",
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const scrollPosRef = useRef<number>(0);

  const handleImageClick = useCallback((index: number) => {
    scrollPosRef.current = window.scrollY;
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleClose = () => {
    setLightboxOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosRef.current, behavior: "instant" });
    }, 10);
  };

  return (
    <>
      <section className="bg[#F9FBFA] w-full flex justify-center py-[25.64vw] lg:py-[120px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[3.46vw] lg:gap-[20px]">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative w-[41.79vw] h-[56.41vw] lg:w-[273px] lg:h-[360px] cursor-pointer ${
                i >= 6 ? "hidden lg:block" : ""
              }`}
              onClick={() => handleImageClick(i)}
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={handleClose}
        index={lightboxIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  );
};

export default Gallery;



// SEBELUM DI VW KAN
// "use client";

// import React, { useState, useCallback, useRef } from "react";
// import Image from "next/image";
// import Lightbox from "yet-another-react-lightbox";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Counter from "yet-another-react-lightbox/plugins/counter";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import "yet-another-react-lightbox/plugins/counter.css";

// const images = [
//   "/images/gallery/Pengantin1.webp",
//   "/images/gallery/Pengantin2.webp",
//   "/images/gallery/Pengantin3.webp",
//   "/images/gallery/Pengantin4.webp",
//   "/images/gallery/Pengantin5.webp",
//   "/images/gallery/Pengantin6.webp",
// ];

// const Gallery = () => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);
//   const scrollPosRef = useRef<number>(0);

//   const handleImageClick = useCallback((index: number) => {
//     scrollPosRef.current = window.scrollY;
//     setLightboxIndex(index);
//     setLightboxOpen(true);
//   }, []);

//   const handleClose = () => {
//     setLightboxOpen(false);
//     setTimeout(() => {
//       window.scrollTo({ top: scrollPosRef.current, behavior: "instant" });
//     }, 10);
//   };

//   return (
//     <>
//       <section className="bg-[#F4F4F5] w-full flex justify-center py-[100px]">
//         <div className="grid grid-cols-2 gap-[13.5px]">
//           {images.map((src, i) => (
//             <div
//               key={i}
//               className="relative w-[163px] h-[220px] cursor-pointer"
//               onClick={() => handleImageClick(i)}
//             >
//               <Image
//                 src={src}
//                 alt={`Gallery ${i + 1}`}
//                 fill
//                 className="object-cover pointer-events-none"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       <Lightbox
//         open={lightboxOpen}
//         close={handleClose}
//         index={lightboxIndex}
//         slides={images.map((src) => ({ src }))}
//         plugins={[Thumbnails, Zoom, Counter]}
//         noScroll={{ disabled: true }}
//       />
//     </>
//   );
// };

// export default Gallery;