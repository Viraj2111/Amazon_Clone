import React from "react";
import "./Home.css";
import banner from "./Assets/banner.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={banner} alt="" className="home_image" />
        <div className="home_row">
          <Product
            id="12321341"
            title="The lean startup"
            image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_SS130_.jpg"
            price={19.99}
            rating={5}
          />
          <Product
            id="49538094"
            title="Femora Borosilicate Glass Microwave Safe All-Purpose Mixing Bowl (Transparent, X-Large, 2100 Ml, 2650 Ml, 3600 Ml) - Set of 3"
            image="https://m.media-amazon.com/images/I/51mrwG+VT3L._SX425_.jpg"
            price={239.99}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular"
            image="	https://m.media-amazon.com/images/I/41DlOnhQv2L._SY445_SX342_QL70_FMwebp_.jpg"
            price={29900}
            rating={5}
          />
          <Product
            id="94777333"
            title="Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 512GB) - Silver (6th Generation)"
            image="	https://m.media-amazon.com/images/I/814P0ojHArL._SX679_.jpg"
            price={157900}
            rating={4}
          />
          <Product
            id="90364772"
            title="LEOTUDE Men's Regular Fit Matty Polo T-Shirt Combo (Pack of 2)"
            image="	https://m.media-amazon.com/images/I/71Hg3RVldoL._UX679_.jpg"
            price={644}
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id="37299493"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X80K (Black)"
            image="https://m.media-amazon.com/images/I/81L7xr3NeHL._AC_UF894,1000_QL80_FMwebp_.jpg"
            price={99740}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
