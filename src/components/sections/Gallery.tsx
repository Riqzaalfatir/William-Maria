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
          >
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