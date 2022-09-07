import React from "react";
import axios from "axios";
import Stars from "../lib/stars";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";

export default class LargeClass extends React.Component {
  state = {
    classes: [],
  };

// Get all classes 
  
  componentDidMount() {
    axios.get(`http://localhost:4000/api/v1/classes`).then((res) => {
      console.log(res.data);
      this.setState({ classes: res.data });
    });
  }

  
// Choose Class 

//   componentDidMount() {
//     axios.get(`http://localhost:4000/api/v1/classes/1`).then((res) => {
//       console.log(res.data);
//       const classes = [res.data, ""]
//       this.setState({ classes });
//     });
//   }

  render() {
    return (
      <div className="Wrapper__smallClasses flex flex-row justify-evenly">
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        freeMode={true}
        modules={[FreeMode]}
      >
        {this.state.classes.map((Class) => (
        <SwiperSlide>
          <a href={`/details/${Class.id}`}>
          <div
            key={Class.id}
            className="flex flex-col-reverse h-48 w-48 rounded-2xl mb-12)] bg-cover bg-center bg-no-repeat mb-10"
            style={{ backgroundImage: `url("${Class.asset.url}")` }}
          >
            <div className="bg-[#f1c40e] flex flex-col justify-center items-start text-xs font-bold px-3 h-1/3 w-full rounded-tr-[50px] rounded-bl-2xl">
              <p className="pb-2">{Class.className}</p>
              <Stars length="50"/>
            </div>
          </div>
          </a>
        </SwiperSlide>
        ))}
        </Swiper>
      </div>
    );
  }
}