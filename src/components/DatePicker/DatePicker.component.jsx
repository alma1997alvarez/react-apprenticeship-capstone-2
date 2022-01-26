import React from "react";
import { DateInput, ShowButton, InputLabel } from "./DatePicker.styled";

const DatePicker = ({ clickHandler, date, selectedDate, setDate }) => {
  const changeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <>
      <InputLabel htmlFor="picture-date">SELECT A DATE</InputLabel>
      <DateInput
        type="date"
        name="picture-date"
        max={date}
        onChange={changeHandler}
        value={selectedDate}
      />
      <ShowButton onClick={clickHandler}>Show picture</ShowButton>
    </>
  );
};

export default DatePicker;
