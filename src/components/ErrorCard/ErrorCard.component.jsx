import React from "react";
import { ErrorParagraph } from "./ErrorCard.styled";

const ErrorCard = ({ message }) => {
  return <ErrorParagraph>ERROR: {message}</ErrorParagraph>;
};

export default ErrorCard;
