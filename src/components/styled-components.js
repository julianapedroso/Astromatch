import styled from "styled-components";

export const LogoAstroMatch = styled.img`
  width: 50%;
  padding-top: 0.625rem;

  @media (max-width: 499px) {
    width: 50%;
  }
`;

export const MainContainer = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 30%;
  margin: 2% auto 0 auto;

  @media (max-width: 499px) {
    width: 80%;
  }
`;

export const TextDetail = styled.div`
  background: #ededed;
  height: auto;
  width: 94%;
  margin: 0 auto;
  padding: 0.5rem 0 1.5rem 0;
  position: relative;
  bottom: 2rem;
  /* background: #ededed;
  height: auto;
  padding: 0.5rem 1rem 1.5rem 1rem;
  width: 20vw;
  margin-left: 2rem;
  position: absolute;
  bottom: 23.75rem;
  border-radius: 0 0 5px 5px; */

  @media (min-width: 1281px) {
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    /* width: 21vw;
    margin-left: 0.75rem;
    position: absolute;
    bottom: 14.9rem; */
  }

  h3 {
    color: #fff;
    font-size: 1.3em;
    text-shadow: black 0.1em 0.1em 0.2em;
  }

  p {
    text-align: left;
    margin: 0 1em;
  }
`;

export const PerfilePhoto = styled.img`
  border-radius: 5px;
  width: 23.75rem;
  height: 45vh;
  margin-top: 3%;

  @media (min-width: 1025px) and (max-width: 1440px) {
    /* width: 20rem; */
  }
`;

export const ContainerDetailMatch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  margin: 1em;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1.5em;
  }
`;

export const PerfilePhotoDetail = styled.img`
  width: 20%;
  height: 11vh;
  border-radius: 50%;

  @media (max-width: 499px) {
    width: 30%;
    height: 12vh;
  }
`;

export const OptionsIcon = styled.img`
  height: 3.75rem;

  &:hover {
    height: 4.375rem;
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

export const NoMatches = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1.5em;
`;

export const ClearButton = styled.button`
  width: 18%;
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
  width: 18%;
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
