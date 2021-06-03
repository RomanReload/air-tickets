import { useSelector } from "react-redux";
import showedTickets from "./functions";

const Tickets = () => {
  let allTickets = useSelector(({ tickets: { airTickets } }) => airTickets);
  return (
    <div className="col-12 justify-content-end">
      {showedTickets(allTickets)}
    </div>
  );
};

export default Tickets;
