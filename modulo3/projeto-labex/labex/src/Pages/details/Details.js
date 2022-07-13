import React, { useEffect, useState } from "react";
import { url_base } from "../../Constants/URL_BASE";
import axios from "axios";

export const Details = () => {
  const [details, setDetails] = useState([]);
  // const [candidate,setCandidate] = useState([])
  const token = localStorage.getItem("token");

  const getTripDetail = () => {
    axios
      .get(`${url_base}/trip/cYaWTDlLI28cnAgmRyrT`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setDetails(res.data.trip);

        console.log("deu boa ", res.data.trip);
      })
      .catch((error) => {
        alert(error);
        console.log("deu erro ", error);
      });
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  // const listDetails= details.map((item) => {
  //     return (
  //     <li key={item.id}>
  //         <h3>{item.name}</h3>
  //         </li>)
  //    })

  return (
    <div>
      <h1>{details.name}</h1>
      <h1>detalhes</h1>
      <button>voltar</button>
      <button>criar viajem</button>
      <button>sair</button>
      {/* <div>{listDetails}</div> */}
    </div>
  );
};
