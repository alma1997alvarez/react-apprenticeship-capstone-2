import React from "react";
import defaultThumbnail from "../../defaultPOD.jpeg";
import {
  Thumbnail,
  Description,
  PictureTitle,
  MediaCardContainer,
} from "./MediaCard.styled";

const MediaCard = () => {
  return (
    <MediaCardContainer>
      <PictureTitle>Black star</PictureTitle>
      <Thumbnail src={defaultThumbnail} />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Description>
    </MediaCardContainer>
  );
};

export default MediaCard;
