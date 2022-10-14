import { ContainerName, TextDraw, DateDraw, Title, Select } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { URL_BASE } from "../../contantes/URL_BASE";
import { useContext, useEffect, useState } from "react";
import megasena from "../../assets/sena.png";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import axios from "axios";

export const Sidebar = (props) => {
  const { contest, setContest, loader, setLoader } = useContext(GlobalStateContext);
  const [name, setName] = useState("");
  const [lotterie, setLotterie] = useState();
  const [numContest, setNumContest] = useState();

  const lotteries = useRequestData([], `${URL_BASE}/loterias`);
  const numberContest = useRequestData([], `${URL_BASE}/loterias-concursos`);

  const onChange = (event) => {
    setLotterie(event.target.value);
    setLoader(true);
  };

  const getContest = () => {
    axios
      .get(`${URL_BASE}/concursos/${numContest}`)
      .then((res) => {
        setLoader(false);
        setContest(res.data);
      })
      .catch((error) => console.log(error.response.statusText));
  };

  useEffect(() => {
    getContest();
  }, [numContest]);
 

  useEffect(() => {
    for (const nameLotteties of lotteries.data) {
      if (String(nameLotteties.id) === lotterie) {
        setName(nameLotteties.nome);
        for (const getNumContest of numberContest.data) {
          if (String(getNumContest.loteriaId) === lotterie) {
            setNumContest(getNumContest.concursoId);
          }
        }
      }
    }
  }, [lotterie]);

  const currentDateFormatted = (date) => {
    let newDate = new Date(date);
    const newFormattedDate =
      newDate.getDate() +
      "/" +
      (newDate.getMonth() + 1) +
      "/" +
      newDate.getFullYear();
    return newFormattedDate;
  };

  return (
    <ContainerName>
      <svg
        id="svg-name"
        viewBox="0 0 613 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
          fill="#6BEFA3"
        />
      </svg>
      :
      <TextDraw>
        <Select name="concursos" id="consursos" onChange={onChange}>
          <option value="Concursos">Concursos</option>
          {lotteries?.data?.map((lotteries) => {
            return (
              <option key={lotteries.id} value={lotteries.id}>
                {lotteries.nome}
              </option>
            );
          })}
        </Select>
        {loader ? (
          <p>Loading ...</p>
        ) : (
          <Title>
            <img src={megasena} alt="" />
            {!name ? "Concursos" : name.toUpperCase()}
          </Title>
        )}

        {window.screen.width > "480" ? (
          <DateDraw>
            <p>Concurso</p>{loader ? <p>loading...</p> : (<p>{numContest}{!contest.data? "0000-0000-00-00" :currentDateFormatted(contest.data)}
              </p>
            )}
          </DateDraw>
        ) : (
          <p>CONSURSO N° {numContest}</p>
        )}
      </TextDraw>
    </ContainerName>
  );
};
