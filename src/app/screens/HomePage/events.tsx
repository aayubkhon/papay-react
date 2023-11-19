import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);
const Events = () => {
  const events_list = [
    {
      title: "Boyin Foodga marhamat",
      desc: "Yangicha Uslubda Yangicha Tam va Yangicha his",
      author: "Abdurahmon Mufid",
      date: "2022/09/01",
      location: "Toshkent,Nurafshon ko'cha",
      img: "/restaurant/burger.jpeg",
    },
    {
      title: "Pizza da katta chegirma marhamat",
      desc: "Faqat 25 ~ 31- iyul kunlari antiqa Pitsa",
      author: "M.R Pissa",
      date: "2022/09/01",
      location: "Toshkent,Qoylik",
      img: "/restaurant/pizza.jpeg",
    },
    {
      title: "Boyin Foodga marhamat",
      desc: "Hali his qilmagan tamdi his qilin",
      author: "Bellissimo",
      date: "2022/09/01",
      location: "Toshkent,Chilonzor",
      img: "/restaurant/boyinfood.png",
    },
    {
      title: "Chichendi yemapsiz dunyoga kemapsiz",
      desc: "Yangicha Uslubda tayorlangan ",
      author: "Food City",
      date: "2022/09/01",
      location: "Toshken,Svorskiy",
      img: "/restaurant/chicken.jpeg",
    },
  ];
  return (
    <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className="events_main">
          <Box className="events_text">
            <span className="category_title">Hodisalar</span>
          </Box>
          <Box className="prev_next_frame">
            <img
              src="/icons/arrow-right.svg"
              style={{ transform: "rotate(-180deg)" }}
              alt=""
              className="swiper-button-prev"
            />
            <div className="dot_frame_pagination swiper-pagination"></div>
            <img
              src="/icons/arrow-right.svg"
              className="swiper-button-next"
              alt=""
            />
          </Box>
          <Swiper
            className="events_info swiper-wrapper"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={25}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
          >
            {events_list.map((value, id) => {
              return (
                <SwiperSlide key={id} className="events_info_frame">
                  <div className="events_img">
                    <img src={value.img} className="events_img" alt="" />
                  </div>
                  <Box className="events_desc">
                    <Box className="events_bott">
                      <Box className="bott_left">
                        <div className="event_title_speaker">
                          <strong>{value.title}</strong>
                          <div className="event_organizator">
                            <img
                            alt=""
                              src="/icons/speaker.svg"
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            <p className="spec_text_author">{value.author}</p>
                          </div>
                        </div>
                        <p className="text_desc" style={{ marginTop: "10px" }}>
                          {" "}
                          {value.desc}{" "}
                        </p>
                        <div
                          className="bott_info"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="bott_info_main">
                            <img
                            alt=""
                              src="/icons/calendar.svg"
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className="bott_info_main">
                            <img
                            alt=""
                              src="/icons/location.svg"
                              style={{ marginRight: "10px" }}
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
};

export default Events;
