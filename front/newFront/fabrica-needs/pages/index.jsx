import { useDispatch, useSelector } from "react-redux";
import { populate } from "../slices/needsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const needs = useSelector((state) => state.needs.value);

  return (
    <div className="dark h-screen text-white bg-gray-900">
      {needs}
      <button onClick={() => dispatch(populate(["joao", "roberto"]))}>
        INCREMENT
      </button>
    </div>
  );
};

export default Home;
