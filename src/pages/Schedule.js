import { Link } from "react-router-dom";

// icons
import { HiMenuAlt3 } from "react-icons/hi";
import { FiArrowLeft} from "react-icons/fi";

// Components
import CurtainMenu from "../components/menu/curtainMenu";

const Schedule = () => {
  return (
    <div className="wrapper_search px-5">
      <header className="flex items-center justify-between my-5 text-3xl">
        <div className="header_text__wrapper flex gap-4">
          <Link to="/home">
            <FiArrowLeft className="text-[#9e9e9e] text-4xl" />
          </Link>
          <h1 className="font-semibold">My Schedule</h1>
        </div>
        <HiMenuAlt3 className="text-[#9e9e9e]" />
        <CurtainMenu />
      </header>

        <div className="schedule_class__component border-2 p-5 rounded-2xl flex items-start flex-col gap-3">
            <h1 className="font-bold text-xl">Yoga Flow Workout</h1>
            <h2 className="font-semibold text-lg">Monday - 19:30</h2>
        </div>

    </div>
  );
};

export default Schedule;
