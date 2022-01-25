import React, { useState } from "react";
import { DateInput, ShowButton } from "./DatePicker.styled";
import useFetchPOD from "../../hooks/useFetchPOD";

const DatePicker = () => {
  let date = new Date().toISOString().substr(0, 10);

  const [selectedDate, setSelectedDate] = useState(date);

  const showPicHandler = () => {
    console.log(selectedDate);
    const data = useFetchPOD(selectedDate);
    console.log(data);
  };

  const changeHandler = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <DateInput
        type="date"
        name="picture-date"
        max={date}
        onChange={changeHandler}
        value={selectedDate}
      />
      <ShowButton onClick={showPicHandler}>Show picture</ShowButton>
    </>
  );
};

export default DatePicker;
