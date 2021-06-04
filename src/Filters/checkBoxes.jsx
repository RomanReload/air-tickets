import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import InputReduxComponent from "./InputRedux";

const CheckBoxes = (props) => {
  return (
    <>
      <ul className="checkbox-block rounded p-2">
        <h5>
          <strong>Количество пересадок</strong>
        </h5>
        <li>
          <Field
            type={"checkbox"}
            name={"all"}
            text={"Все"}
            component={InputReduxComponent}
          />
        </li>
        <li>
          <Field
            type={"checkbox"}
            name={"without"}
            text={"Без пересадок"}
            component={InputReduxComponent}
          />
        </li>
        <li>
          <Field
            type={"checkbox"}
            name={"one"}
            text={"1 пересадка"}
            component={InputReduxComponent}
          />
        </li>
        <li>
          <Field
            type={"checkbox"}
            name={"two"}
            text={"2 пересадки"}
            component={InputReduxComponent}
          />
        </li>
        <li>
          <Field
            type={"checkbox"}
            name={"three"}
            text={"3 пересадки"}
            component={InputReduxComponent}
          />
        </li>
      </ul>
    </>
  );
};

const CheckBoxRedux = reduxForm({
  form: "checkboxes",
})(CheckBoxes);

const CheckBoxBlock = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch({
      type: "CHECKBOX-FILTER",
      payload: values,
    });
  };
  return (
    <div className="col-12 col-sm-4 mt-5">
      <CheckBoxRedux onChange={onSubmit} />
    </div>
  );
};

export default CheckBoxBlock;
