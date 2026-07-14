
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";
import ResponsivePicture from "@/hooks/ResponsivePicture";


const galleryImage = "/images/gallery/Pengantin.webp";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section id="gallery" className="w-full bg[#F4F4F5] flex justify-center py-[25.64vw] lg:py-[138px]">
        <div
          className="relative w-full flex items-center justify-center"
          onClick={() => setLightboxOpen(true)}
        >
          <motion.div
          
           variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}>
           <ResponsivePicture
            mobileSrc={galleryImage}
            desktopSrc="/images/gallery/PengantinD.webp"
            alt="Gallery"
            fill={false}
            width={1200}
            height={1600}
            className="w-[87.18vw] h-auto object-cover lg:w-[1098px]"
            unoptimized
          />
          </motion.div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: galleryImage }]}
        plugins={[Zoom]}
        noScroll={{ disabled: true }}
      />
    </>
  );
};

export default Gallery;

// SEBELUM DIBERIKAN OGIC DOWNLOAD
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Lightbox from "yet-another-react-lightbox";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/styles.css";

// const galleryImage = "/images/gallery/Pengantin.webp";

// const Gallery = () => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);

//   return (
//     <>
//       <section className="w-full bg[#F9FBFA] flex justify-center py-[25.64vw] lg:py-[138px]">
//         <div
//           className="relative w-full flex items-center justify-center"
//           onClick={() => setLightboxOpen(true)}
//         >
//           <Image
//             src={galleryImage}
//             alt="Gallery"
//             width={1200}
//             height={1600}
//             sizes="100vw"
//             className="w-[87.18vw] h-auto object-cover lg:hidden"
//           />
//           <Image
//             src="/images/gallery/PengantinD.webp"
//             alt="Gallery"
//             width={1200}
//             height={1600}
//             sizes="100vw"
//             className="w-[1098px] h-auto object-cover hidden lg:block"
//           />
//         </div>
//       </section>

//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         slides={[{ src: galleryImage }]}
//         plugins={[Zoom]}
//         noScroll={{ disabled: true }}
//       />
//     </>
//   );
// };

// export default Gallery;

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
//   "/images/gallery/Pengantin7.webp",
//   "/images/gallery/Pengantin8.webp",
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
//       <section className="bg[#F9FBFA] w-full flex justify-center py-[25.64vw] lg:py-[120px]">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-[3.46vw] lg:gap-[20px]">
//           {images.map((src, i) => (
//             <div
//               key={i}
//               className={`relative w-[41.79vw] h-[56.41vw] lg:w-[273px] lg:h-[360px] cursor-pointer ${
//                 i >= 6 ? "hidden lg:block" : ""
//               }`}
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