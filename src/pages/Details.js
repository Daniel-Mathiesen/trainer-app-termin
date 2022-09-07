import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Stars from "../components/lib/stars";

// icons
import { HiMenuAlt3 } from "react-icons/hi";
import { FiArrowLeft } from "react-icons/fi";

// Components
import CurtainMenu from "../components/menu/curtainMenu";
import TrainerDetailPage from "../components/search/trainerDetails";
import RatingPopUp from "../components/lib/ratingPop";

const DetailPage = () => {
  const { classId } = useParams();
  const [Class, SetClass] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    Axios.get(`http://localhost:4000/api/v1/classes/${classId}`).then((res) => {
      console.log(res.data);
      SetClass(res.data);
    });
  }, []);

  return (
      <div className="detail_main__wrapper">
        <div
          className="class_image w-screen bg-cover bg-no-repeat bg-center h-[28rem]"
          style={{
            backgroundImage: `url(${
              Class.asset ? Class.asset.url : "https://via.placeholder.com/500"
            })`,
          }}
        >
          <div className="wrapper_details px-5">
            <header className="flex items-center justify-between py-5 text-3xl">
              <div className="header_text__wrapper flex gap-4">
                <Link to="/home">
                  <FiArrowLeft className="text-white text-4xl" />
                </Link>
              </div>
              <HiMenuAlt3 className="text-white" />
              <CurtainMenu />
            </header>
            <div className="class_ratingTitle__wrapper translate-y-40">
              <h1 className="text-[#f1c40e] text-4xl font-bold">
                {Class.className}
              </h1>
              <div className="flex items-center justify-between pt-10">
                <div className="flex flex-row items-center gap-5">
                  <Stars length="50" color="#f1c40e" />
                  <p className="text-[#f1c40e]">5/5</p>
                </div>
                <button
                  className="border-4 border-[#f1c40e] text-[#f1c40e] font-bold uppercase py-5 px-10 rounded-full"
                  onClick={() => setButtonPopup(true)}
                >
                  Rate
                </button>
                <RatingPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <p className="text-sm font-bold mb-5">Rate the {Class.className} class</p>
                    <div className="flex justify-center flex-col items-center mb-5">
                        <Stars length="30" color="#f1c40e" />
                        <p className="mt-2">Your rating: 5/5</p>
                    </div>
                  <input type="range" name="" id="" min="0" max="5" className="mb-5" />
                </RatingPopUp>
              </div>
            </div>
          </div>
        </div>
        <div className="class_info__wrapper mt-5 px-5">
          <h2 className="font-bold text-xl">
            {Class.classDay + " - " + Class.classTime}
          </h2>
          <p className="mt-5 font-bold text-lg">{Class.classDescription}</p>
          <h1 className="font-bold text-3xl mt-10">Trainer</h1>
          <TrainerDetailPage />
          <button className="border-2 border-transparent outline-none p-4 mt-4 w-full rounded-full uppercase font-semibold bg-[#f1c40e]">
            Sign up
          </button>
        </div>
      </div>
  );
};

export default DetailPage;
