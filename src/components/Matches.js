import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import { baseUrl, axiosConfig } from "./parameters";
import {
  ContainerDetailMatch,
  PerfilePhotoDetail,
  GridButtons,
  ClearButton,
  BackButton,
} from "./styled-components";

export default function Matches() {
  const [showPerfile, setShowPerfile] = useState([]);
  const [matches, setMatches] = useState([]);
  const [showPage, setShowPage] = useState("");

  useEffect(() => {
    getMatches();
  }, [showPerfile]);

  const getMatches = () => {
    axios
      .get(`${baseUrl}/${axiosConfig}/matches`)
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatchs = () => {
    axios
      .put(`${baseUrl}/${axiosConfig}/clear`)
      .then((response) => {
        alert("Seus matches foram removidos com sucesso!");
        getMatches();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changePage = () => {
    setShowPage(!showPage);
  };

  if (showPage) {
    return <Home />;
  } else if (showPage !== showPage) {
    return <Matches />;
  }

  return (
    <div>
      {matches.length === 0 ? (
        <p>Nenhum match para listar :(</p>
      ) : (
        matches.map((match) => {
          return (
            <ContainerDetailMatch>
              <PerfilePhotoDetail src={match.photo} />
              <p>{match.name}</p>
            </ContainerDetailMatch>
          );
        })
      )}

      <GridButtons>
        <ClearButton
          onClick={() => {
            if (
              window.confirm(
                "Tem certeza que deseja limpar a sua lista de matches?"
              )
            ) {
              clearMatchs(showPerfile.id);
            }
          }}
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/zake-miscellaneous-005/64/broom_clear-512.png"
            alt="Ícone de limpeza"
          />
        </ClearButton>

        <BackButton onClick={changePage}>
          <img
            src="https://img.icons8.com/nolan/64/back.png"
            alt="Ícone de voltar"
          />
        </BackButton>
      </GridButtons>
    </div>
  );
}
