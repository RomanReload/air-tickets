import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Buttons from "./Buttons";
import CheckBoxBlock from "./checkBoxes";
import { ADD_ALL_TCKETS } from "../reducer";
import Tickets from "../Tickets";

const FiltersMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncFoo = async () => {
      const getId = await axios
        .get("https://front-test.beta.aviasales.ru/search")
        .then((response) => response.data.searchId)
        .catch((err) => console.log(err, " ERROR "));
      const dataTickets = await axios
        .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${getId}`)
        .then((data) => data)
        .catch((err) => console.log(err, "ERROR "));
      dispatch({
        type: ADD_ALL_TCKETS,
        payload: dataTickets,
      });
    };

    asyncFoo();
  }, [dispatch]);

  return (
    <div className="row">
      <CheckBoxBlock />
      <div className="col-12 col-sm-8">
        <Buttons />
        <Tickets />
      </div>
    </div>
  );
};

export default FiltersMain;
