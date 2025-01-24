import React from "react";
import Container from "../../Components/Container/Container";
import Slide from "../../Components/Slide/Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Home.module.css'
import one from '../../../public/banner-1.jpg'
import two from "../../../public/banner-2.jpg";
import three from "../../../public/banner-3.jpg";
import Product from "../NewProduct/Product";


function Home() {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  const slideData = [
    {
      id: 0,
      img: one,
      title: "Trending Item1",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: two,
      title: "Trending Item2",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$15",
    },
    {
      id: 2,
      img: three,
      title: "Trending Item3",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$35",
    },
  ];

  return (
    <Container>
      <div>
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>

      <div className={style.HomeDivv}>
        <div>
          <h1 className={style.hhh}>NEW PRODUCT</h1>
          <Product/>
        </div>
      </div>
    </Container>
  );
}

export default Home;
