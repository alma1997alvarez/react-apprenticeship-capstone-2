import styled from "styled-components";

const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 200;

  @media (max-width: 1100px) {
    font-size: 3rem;
  }

  @media (max-width: 850px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export { Heading, LayoutContainer };
