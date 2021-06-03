import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";

const CheckBoxes = (props) => {
  return (
    <>
      <ul className="checkbox-block rounded p-2">
        <h5>Количество пересадок</h5>
        <li>
          <Field name="all" component="input" type="checkbox" />
          <label htmlFor="all">Все</label>
        </li>
        <li>
          <Field name="without" component="input" type="checkbox" />
          <label htmlFor="without">Без пересадок</label>
        </li>
        <li>
          <Field name="one" component="input" type="checkbox" />
          <label htmlFor="one">1 пересадка</label>
        </li>
        <li>
          <Field name="two" component="input" type="checkbox" />
          <label htmlFor="two">2 пересадки</label>
        </li>
        <li>
          <Field name="three" component="input" type="checkbox" />
          <label htmlFor="three">3 пересадки</label>
        </li>
      </ul>
    </>
  );
};

const CheckBoxRedux = reduxForm({
  form: "contact",
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
