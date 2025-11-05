"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { CertificateItem } from "../certifications/page";

import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
const projectsSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/images/thumb1.jpg",
        },
        {
          title: "title",
          path: "/images/thumb2.jpg",
        },
        {
          title: "title",
          path: "/images/thumb3.jpg",
        },
        {
          title: "title",
          path: "/images/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/images/thumb4.jpg",
        },
        {
          title: "title",
          path: "/images/thumb1.jpg",
        },
        {
          title: "title",
          path: "/images/thumb2.jpg",
        },
        {
          title: "title",
          path: "/images/thumb3.jpg",
        },
      ],
    },
  ],
};
function CerificationsSlider({
  certifications,
}: {
  certifications: CertificateItem[];
}) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[300px] sm:h-[400px] w-full"
    >
      {certifications.map((cert, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center text-center text-white">
            <div className="w-full h-full relative mb-4">
              <Image
                src={cert.image}
                alt={cert.title}
                height={100}
                width={100}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-accent">{cert.title}</h3>
            <p className="text-white/70 text-sm">{cert.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CerificationsSlider;
