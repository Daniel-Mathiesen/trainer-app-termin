import { FaStar } from "react-icons/fa";
const Stars = ({ length, color }) => {
  return (
    <div
      id="Stars"
      className="flex justify-between"
      style={{ width: length + "%" }}
    >
      <FaStar size={"0.8rem"} color={color} />
      <FaStar size={"0.8rem"} color={color} />
      <FaStar size={"0.8rem"} color={color} />
      <FaStar size={"0.8rem"} color={color} />
      <FaStar size={"0.8rem"} color={color} />
    </div>
  );
};

export default Stars;