import React, { useState, useEffect } from "react";
import axios from "axios";
import Matches from "./Matches";
import { baseUrl, axiosConfig } from "./parameters";
import {
  PerfilePhoto,
  TextDetail,
  OptionsIcon,
  OptionsButton,
  ShowListButton,
} from "./styled-components";
import IconLike from "../img/like-pink.png";
import IconRemove from "../img/remove.jpg";
import Match from "../img/match.png";
import Loading from "../img/loading.gif";

export default function Home() {
  const [showPerfile, setShowPerfile] = useState([]);
  const [showPage, setShowPage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    if (showPerfile == "") {
      getProfileToChoose();
    }
  });

  const changePage = () => {
    setShowPage(!showPage);
  };

  if (showPage) {
    return <Matches />;
  } else if (showPage !== showPage) {
    return <Home />;
  }

  const getProfileToChoose = () => {
    axios
      .get(`${baseUrl}/${axiosConfig}/person`)
      .then((response) => {
        setShowPerfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const yesMatch = () => {
    const body = {
      id: showPerfile.id,
      choice: true,
    };

    setIsLoading(true)
    axios
      .post(`${baseUrl}/${axiosConfig}/choose-person`, body)
      .then((response) => {
        getProfileToChoose();
        setIsLoading(false);
        alert("Deu match!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const noMatch = () => {
    const body = {
      id: showPerfile.id,
      choice: false,
    };

    setIsLoading(true)
    axios
      .post(`${baseUrl}/${axiosConfig}/choose-person`, body)
      .then((response) => {
        getProfileToChoose();
        setIsLoading(false);
        alert("Que pena, você não curtiu :(");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
    {isLoading && (
        <div
          src={Loading}
          alt="GIF loading"
          style={{
            display: "flex",
            flexGrow: "1",
            justifyContent: "center",
            alignSelf: "center",
            justifyItems: "center",
          }}
        />
    )}
    <TextDetail>
      <PerfilePhoto src={showPerfile.photo} alt="Foto perfil" />
      <h3>
        {showPerfile.name}, {showPerfile.age} anos
      </h3>
      <p>{showPerfile.bio}</p>
      <div>
        <OptionsButton>
          <OptionsIcon
            onClick={() => noMatch(showPerfile.id)}
            src={IconRemove}
            alt="Ícone de remover"
          />
        </OptionsButton>
        <OptionsButton>
          <OptionsIcon
            onClick={() => yesMatch(showPerfile.id)}
            src={IconLike}
            alt="Ícone de like"
          />
        </OptionsButton>
        <div>
          <ShowListButton onClick={changePage}>Mostrar Matches</ShowListButton>
        </div>
      </div>
    </TextDetail>
    </>
  );
}
