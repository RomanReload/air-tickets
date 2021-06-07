import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="col-12 btn-group mb-1 mt-1"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          onClick={() =>
            dispatch({ type: "LOW-COST-FAST-AIRPLANE", payload: "LOW-COST" })
          }
          className="btn btn-primary bs"
        >
          <strong>САМЫЙ ДЕШЕВЫЙ</strong>
        </button>
        &nbsp;
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "LOW-COST-FAST-AIRPLANE",
              payload: "FAST-AIRPLANE",
            })
          }
          className="btn btn-primary bs"
        >
          <strong>САМЫЙ БЫСТРЫЙ</strong>
        </button>
      </div>
    </>
  );
};
export default Buttons;
