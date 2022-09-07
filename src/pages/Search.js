import { Link } from "react-router-dom";

// icons
import { HiMenuAlt3 } from "react-icons/hi";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

// Components
import CurtainMenu from "../components/menu/curtainMenu";
import HomeSmallClass from "../components/home/homeSmallClasses";
import SearchTrainer from "../components/search/trainers"

const SearchPage = () => {
  return (
    <div className="wrapper_search px-5">
      <header className="flex items-center justify-between my-5 text-3xl">
        <div className="header_text__wrapper flex gap-4">
        <Link to="/home"><FiArrowLeft className="text-[#9e9e9e] text-4xl" /></Link>
          <h1 className="font-semibold">Search</h1>
        </div>
        <HiMenuAlt3 className="text-[#9e9e9e]" />
        <CurtainMenu />
      </header>
      <div className="input_search__wrapper">
        <FiSearch className="text-[#9e9e9e] text-2xl absolute translate-x-4 translate-y-10" />
        <input
          type="text"
          className="outline-none border-2 py-4 pl-14 mt-5 rounded-full w-full text-lg"
          placeholder="Search classes"
        ></input>
      </div>
      <div className="flex items-start pt-10 pb-8">
        <h1 className="font-bold text-3xl">Popular classes</h1>
      </div>
      <HomeSmallClass />
      <div className="flex items-start pt-10 pb-8">
        <h1 className="font-bold text-3xl">Popular Trainers</h1>
      </div>
      <SearchTrainer/>
    </div>
  );
};

export default SearchPage;
