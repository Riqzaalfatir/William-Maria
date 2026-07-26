"use client";

import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animation";
import ResponsivePicture from "@/hooks/ResponsivePicture";

const galleryImages = [
  { mobile: "/images/gallery/Pengantin.webp", desktop: "/images/gallery/PengantinD.webp" },
  { mobile: "/images/gallery/Pengantin2.webp", desktop: "/images/gallery/Pengantin2D.webp" },
  { mobile: "/images/gallery/Pengantin3.webp", desktop: "/images/gallery/Pengantin3D.webp" },
  { mobile: "/images/gallery/Pengantin4.webp", desktop: "/images/gallery/Pengantin4D.webp" },
];

const AUTO_SLIDE_INTERVAL = 4000; // ms, ganti sesuai kebutuhan

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (lightboxOpen) return; // pause pas lightbox lagi kebuka
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [lightboxOpen]);

  return (
    <>
      <section
        id="gallery"
        className="w-full bg[#F4F4F5] flex justify-center py-[25.64vw] lg:py-[138px]"
      >
        <div
          className="relative w-full flex items-center justify-center"
          onClick={() => setLightboxOpen(true)}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
            className="relative w-[87.18vw] lg:w-[1098px]"
            style={{ aspectRatio: "340 / 700" }}
          >
            <AnimatePresence>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <ResponsivePicture
                  mobileSrc={galleryImages[current].mobile}
                  desktopSrc={galleryImages[current].desktop}
                  alt="Gallery"
                  fill={true}
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={current}
        slides={galleryImages.map((img) => ({ src: img.mobile }))}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        noScroll={{ disabled: true }}
      />
    </>
  );
};

export default Gallery;







// "use client";

// import React, { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/styles.css";
// import { motion, AnimatePresence, PanInfo } from "framer-motion";
// import { fadeUp } from "@/lib/animation";
// import ResponsivePicture from "@/hooks/ResponsivePicture";

// const galleryImages = [
//   { mobile: "/images/gallery/Pengantin.webp", desktop: "/images/gallery/PengantinD.webp" },
//   { mobile: "/images/gallery/Pengantin2.webp", desktop: "/images/gallery/Pengantin2D.webp" },
//   { mobile: "/images/gallery/Pengantin3.webp", desktop: "/images/gallery/Pengantin3D.webp" },
//   { mobile: "/images/gallery/Pengantin4.webp", desktop: "/images/gallery/Pengantin4D.webp" },
// ];

// const SWIPE_THRESHOLD = 50; // px

// const Gallery = () => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [current, setCurrent] = useState(0);

//   const handleDragEnd = (
//     _: MouseEvent | TouchEvent | PointerEvent,
//     info: PanInfo
//   ) => {
//     if (info.offset.x < -SWIPE_THRESHOLD) {
//       setCurrent((prev) => (prev + 1) % galleryImages.length);
//     } else if (info.offset.x > SWIPE_THRESHOLD) {
//       setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
//     }
//   };

//   return (
//     <>
//       <section
//         id="gallery"
//         className="w-full bg[#F4F4F5] flex justify-center py-[25.64vw] lg:py-[138px]"
//       >
//         <div className="relative w-full flex items-center justify-center">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
//           >
//             <motion.div
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={0}
//               onDragEnd={handleDragEnd}
//               onClick={() => setLightboxOpen(true)}
//               className="relative w-[87.18vw] lg:w-[1098px]"
//               style={{ aspectRatio: "340 / 700" }}
//             >
//               <AnimatePresence>
//                 <motion.div
//                   key={current}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.25, ease: "easeOut" }}
//                   className="absolute inset-0"
//                 >
//                   <ResponsivePicture
//                     mobileSrc={galleryImages[current].mobile}
//                     desktopSrc={galleryImages[current].desktop}
//                     alt="Gallery"
//                     fill={true}
//                     className="object-cover"
//                     unoptimized
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         index={current}
//         slides={galleryImages.map((img) => ({ src: img.mobile }))}
//         plugins={[Zoom]}
//         noScroll={{ disabled: true }}
//       />
//     </>
//   );
// };

// export default Gallery;

// // "use client";

// // import React, { useState } from "react";
// // import Image from "next/image";
// // import Lightbox from "yet-another-react-lightbox";
// // import Zoom from "yet-another-react-lightbox/plugins/zoom";
// // import "yet-another-react-lightbox/styles.css";
// // import { motion } from "framer-motion";
// // import { fadeUp } from "@/lib/animation";
// // import ResponsivePicture from "@/hooks/ResponsivePicture";

// // const galleryImage = "/images/gallery/Pengantin.webp";

// // const Gallery = () => {
// //   const [lightboxOpen, setLightboxOpen] = useState(false);

// //   return (
// //     <>
// //       <section
// //         id="gallery"
// //         className="w-full bg[#F4F4F5] flex justify-center py-[25.64vw] lg:py-[138px]"
// //       >
// //         <div
// //           className="relative w-full flex items-center justify-center"
// //           onClick={() => setLightboxOpen(true)}
// //         >
// //           <motion.div
// //             variants={fadeUp}
// //             initial="hidden"
// //             whileInView="show"
// //             viewport={{ once: true, amount: 0.3 }}
// //             transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
// //           >
// //             <ResponsivePicture
// //               mobileSrc={galleryImage}
// //               desktopSrc="/images/gallery/PengantinD.webp"
// //               alt="Gallery"
// //               fill={false}
// //               width={1200}
// //               height={1600}
// //               className="w-[87.18vw] h-auto object-cover lg:w-[1098px]"
// //               unoptimized
// //             />
// //           </motion.div>
// //         </div>
// //       </section>

// //       <Lightbox
// //         open={lightboxOpen}
// //         close={() => setLightboxOpen(false)}
// //         slides={[{ src: galleryImage }]}
// //         plugins={[Zoom]}
// //         noScroll={{ disabled: true }}
// //       />
// //     </>
// //   );
// // };

// // export default Gallery;