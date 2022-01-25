import React, { useEffect, useState } from "react";
import MainContainer from "../MainContainer/MainContainer.component";
import MediaCard from "../MediaCard/MediaCard.component";
import DatePicker from "../DatePicker/DatePicker.component";
import useFetchPOD from "../../hooks/useFetchPOD";
import ErrorCard from "../ErrorCard/ErrorCard.component";

function App() {
  const { fetchPOD, fetchedMedia, errorMessage, setErrorMessage } =
    useFetchPOD();

  let date = new Date().toISOString().substr(0, 10);
  const [selectedDate, setSelectedDate] = useState(date);

  const showPicHandler = () => {
    setErrorMessage("");
    fetchPOD(selectedDate);
  };

  useEffect(() => {
    fetchPOD(selectedDate);
  }, []);

  return (
    <MainContainer heading="PICTURE OF THE DAY">
      {errorMessage ? (
        <ErrorCard message={errorMessage} />
      ) : (
        <MediaCard mediaDetails={fetchedMedia} />
      )}
      <DatePicker
        clickHandler={showPicHandler}
        date={date}
        selectedDate={selectedDate}
        setDate={setSelectedDate}
      />
    </MainContainer>
  );
}

export default App;
