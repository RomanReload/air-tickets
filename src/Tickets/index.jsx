import { useState } from "react";
import { useSelector } from "react-redux";
import showedTickets from "./functions";

const Tickets = () => {
  const [countOftickets, setCountofTickets] = useState(5);
  const handleClick = (e) => {
    e.preventDefault();
    setCountofTickets(countOftickets + 5);
  };
  let allTickets = useSelector(({ tickets: { airTickets } }) => airTickets);
  return (
    <div className="col-12 justify-content-end">
      {showedTickets(allTickets, countOftickets)}
      <div className="col-12">
        <button onClick={handleClick} className="btn btn-primary w-100 bs">
          More tickets
        </button>
      </div>
    </div>
  );
};

export default Tickets;
