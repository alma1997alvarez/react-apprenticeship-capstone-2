import React from "react";
import MainContainer from "../MainContainer/MainContainer.component";
import MediaCard from "../MediaCard/MediaCard.component";
import DatePicker from "../DatePicker/DatePicker.component";

function App() {
  return (
    <MainContainer heading="PICTURE OF THE DAY">
      <MediaCard></MediaCard>
      <DatePicker />
    </MainContainer>
  );
}

export default App;
