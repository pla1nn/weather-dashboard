import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import s from './Gallery.module.css';

export default function Gallery({ images }) {
  return (
    <section className={s.gallerySection}>
      <h2 className={s.title}>Beautiful nature</h2>
      <Swiper
        modules={[EffectCoverflow]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        effect={'coverflow'}
        coverflowEffect={{
          depth: 100,
          modifier: 6,
          rotate: 0,
          slideShadows: true,
          stretch: 0,
        }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <img
              className={s.imageSwiper}
              src={image.webformatURL}
              alt="nature"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
