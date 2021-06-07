import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import getShowedTickets from "./functions";

const mapToState = (state) => {
  return state;
};
const mapToDispatch = (dispatch) => {
  return {
    dispatchMoreTickets: () => dispatch({ type: "SHOW-MORE-THICKETS" }),
  };
};

const Tickets = (props) => {
  const {
    tickets: { showedTickets, airTickets },
  } = props;
  const { dispatchMoreTickets } = props;
  // let allTickets = useSelector(({ tickets: { airTickets } }) => airTickets);
  // AUTO SCROLL EFFECT
  useEffect(() => {
    const scrollHandler = (e) => {
      const displayScrollHeight = e.target.documentElement.scrollHeight;
      const scrollTop = e.target.documentElement.scrollTop;
      const innerHeight = window.innerHeight;
      if (displayScrollHeight - (scrollTop + innerHeight) < 10) {
        dispatchMoreTickets();
      }
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [dispatchMoreTickets]);

  const memoizedTickets = useMemo(
    () => getShowedTickets(airTickets, showedTickets),
    [airTickets, showedTickets]
  );

  const handleClick = (e) => {
    e.preventDefault();
    dispatchMoreTickets();
  };

  return (
    <div className="col-12 justify-content-end">
      {memoizedTickets}
      <div className="col-12">
        <button onClick={handleClick} className="btn btn-primary w-100 bs">
          More tickets
        </button>
      </div>
    </div>
  );
};

export default connect(mapToState, mapToDispatch)(Tickets);
