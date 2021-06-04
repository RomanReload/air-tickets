import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Buttons from "./Buttons";
import CheckBoxBlock from "./checkBoxes";
import { ADD_ALL_TCKETS } from "../reducer";
import Tickets from "../Tickets";
import Loader from "../loader/Loader.jsx";

const MainBlock = () => {
  const loader = useSelector(({ tickets: { loader } }) => loader);
  const [errors, errorInfo] = useSelector(
    ({
      tickets: {
        errors: { status, info },
      },
    }) => [status, info]
  );

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
        .catch((err) => {
          dispatch({
            type: "ERROR",
          });
          console.log("ОШИБКА - ", err);
        });
      dispatch({
        type: ADD_ALL_TCKETS,
        payload: dataTickets,
      });
      setTimeout(() => {
        dispatch({ type: "LOADER-OFF" });
      }, 1000);
    };

    asyncFoo();
  }, [dispatch]);

  return (
    <div className="row">
      {errors ? (
        <div className="col-12 text-center">{errorInfo}</div>
      ) : loader ? (
        <Loader />
      ) : (
        <>
          <CheckBoxBlock />
          <div className="col-12 col-sm-8">
            <Buttons />
            <Tickets />
          </div>
        </>
      )}
    </div>
  );
};

export default MainBlock;
