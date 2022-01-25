import styled from "styled-components";

const DateInput = styled.input`
  text-align: center;
  border: none;
  background-color: #dde4eb;
  font-family: "Red Hat Display", sans-serif;
  line-height: 2.5rem;
  cursor: pointer;
  width: 250px;
  margin: 2rem 0;

  &:focus {
    outline: none;
  }
`;

const ShowButton = styled.button`
  border: none;
  background-color: #3d6cd9;
  font-family: "Red Hat Display", sans-serif;
  line-height: 2.5rem;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 5px 15px;
  margin: 0 0 2rem 0;

  &:hover {
    background-color: #3961bd;
  }
`;

export { DateInput, ShowButton };
