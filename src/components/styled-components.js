import styled from "styled-components";

export const LogoAstroMatch = styled.img`
  width: 35%;
  padding-top: 10px;

  @media (max-width: 499px) {
    width: 50%;
  }
`;

export const MainContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #000;
  height: auto;
  width: 30%;
  margin: 1% auto 0 auto;

  @media (max-width: 499px) {
    width: 80%;
  }
`;

export const TextDetail = styled.div`
  h3 {
    color: #fff;
    font-size: 1.3em;
    text-shadow: black 0.1em 0.1em 0.2em;
  }

  p {
    text-align: left;
    margin: 0 0.8em;
  }
`;

export const PerfilePhoto = styled.img`
  border-radius: 5px;
  width: 80%;
  height: 45vh;
`;

export const ContainerDetailMatch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  margin: 1em;

  p {
    font-size: 1em;
    font-weight: normal;
    padding: 2em;
  }
`;

export const PerfilePhotoDetail = styled.img`
  width: 7vw;
  height: 15vh;
  border-radius: 50%;

  @media (max-width: 499px) {
    width: 30%;
    height: 12vh;
  }
`;

export const OptionsIcon = styled.img`
  height: 60px;

  &:hover {
    height: 70px;
  }
`;

export const OptionsButton = styled.button`
  margin: 1rem 2em 1rem 2em;
  border: 1px transparent;
  border-radius: 50%;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const ShowListButton = styled.button`
  margin-bottom: 2%;
  height: 5vh;
  background: #008000;
  border: transparent;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;

  &:hover {
    cursor: pointer;
    background: #009000;
    opacity: 0.8;
    transition: 300ms;
  }
`;

export const GridButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ClearButton = styled.button`
  width: 20%;
  margin-bottom: 2%;
  background: transparent;
  border: none;

  img {
    width: 100%;

    @media (max-width: 499px) {
      width: 80%;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const BackButton = styled.button`
  width: 20%;
  margin-bottom: 2%;
  background: transparent;
  border: none;
  border: transparent;

  img {
    width: 90%;

    @media (max-width: 499px) {
      width: 80%;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
