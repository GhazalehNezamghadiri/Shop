"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function Slider() {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
  ];

  return (
    <div
      style={{
        maxWidth: "60%",
        paddingTop:'100px',
        margin: "0 auto",
        overflow: "hidden",
        position: "relative", 
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={5} 
        slidesPerView={5} 
        navigation 
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i}`}
              style={{
                width: "130px",
                height: "120px", 
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

     
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}