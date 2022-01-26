import React from "react";
//import defaultThumbnail from "../../defaultPOD.jpeg";
import {
  Thumbnail,
  Description,
  PictureTitle,
  MediaCardContainer,
} from "./MediaCard.styled";

const MediaCard = ({
  mediaDetails: {
    title = "",
    explanation = "",
    thumbnail_url = "",
    url = "",
  } = {},
}) => {
  return (
    <MediaCardContainer>
      <PictureTitle>{title}</PictureTitle>
      <Thumbnail src={thumbnail_url ? thumbnail_url : url} />
      <Description>{explanation}</Description>
    </MediaCardContainer>
  );
};

export default MediaCard;
