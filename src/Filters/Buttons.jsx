import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-12 text-center mb-1">
        <button
          onClick={() =>
            dispatch({ type: "LOW-COST-FAST-AIRPLANE", payload: "LOW-COST" })
          }
          className="btn btn-primary w-40 m-1"
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "LOW-COST-FAST-AIRPLANE",
              payload: "FAST-AIRPLANE",
            })
          }
          className="btn btn-primary w-40"
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </div>
    </>
  );
};
export default Buttons;
