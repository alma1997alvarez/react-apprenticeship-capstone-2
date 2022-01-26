import styled from "styled-components";

const MediaCardContainer = styled.div`
  width: 90vw;
  max-width: 900px;
  text-align: center;
`;

const PictureTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-weight: 390;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 0;
`;

const Description = styled.p`
  margin-top: -10px;
  background-color: #dce4f7;
  padding: 1rem;
  width: 100%;
  border-radius: 0 0 35px 0;
`;

export { Thumbnail, Description, PictureTitle, MediaCardContainer };
