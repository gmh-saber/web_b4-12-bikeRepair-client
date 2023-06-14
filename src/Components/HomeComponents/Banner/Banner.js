import React from "react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import entry from "../../../images/b1.jpg";
import gear from "../../../images/b7.jpg";
import helMate from "../../../images/b3.jpg";
import liloPistol from "../../../images/b4.jpg";
import paint from "../../../images/b5.jpg";
import silencer from "../../../images/b6.jpg";
import sitCover from "../../../images/b2.jpg";
import wheel from "../../../images/b8.jpg";
import SingleMember from "../OurTeam/SingleMember";

SwiperCore.use([EffectCoverflow, Pagination]);

const teamSlide = [
  {
    id: 1,

    img: entry,
  },
  {
    id: 2,

    img: gear,
  },
  {
    id: 3,

    img: helMate,
  },
  {
    id: 4,

    img: liloPistol,
  },
  {
    id: 5,

    img: paint,
  },
  {
    id: 6,

    img: silencer,
  },
  {
    id: 7,

    img: sitCover,
  },
  {
    id: 8,

    img: wheel,
  },
];

const Baner = () => {
  return (
    <section className="team-container" id="about">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {teamSlide.map((team) => {
          return (
            <SwiperSlide key={team.id}>
              <SingleMember key={team.id} team={team} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h3 className="mt-5">Your Bike, Our responsebility</h3>
      <p>
        <small>
          Lets meet our experts . we have some good teem members here.
        </small>
      </p>
    </section>
  );
};

export default Baner;
