import welcomeCenter from '../assets/welcomeCenter.jpg'
import { Link } from "react-router-dom";

const welcomePage = () => {
  return (
    <div className="welcome w-screen h-screen flex items-start flex-col justify-evenly">
      <div className="welcome_text__wrapper">
        <h1 className="text-left font-bold text-6xl ml-14 pb-8 text-[#f1c40e]">
          Believe
          <br />
          Yourself
        </h1>
        <div className="flex items-center gap-6">
          <hr className="w-14 border-t-4" />
          <h2 className="text-white text-3xl font-bold">Train like a pro</h2>
        </div>
      </div>
      <div className="wrapper__img">
        <img
          className="absolute h-80 -translate-y-40"
          src={welcomeCenter}
          alt=""
        />
      </div>
      <div className="wrapper__button w-full absolute flex justify-center items-center">
        <button className="absolute uppercase p-3 px-5 font-medium rounded-full bg-[#f1c40e]  translate-y-[23rem]">
        <Link to="/home">
          Start training
        </Link>
        </button>
      </div>
    </div>
  );
};

export default welcomePage;
