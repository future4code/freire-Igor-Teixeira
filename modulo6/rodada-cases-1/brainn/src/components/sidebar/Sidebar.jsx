import { ContainerName, TextDraw, DateDraw } from "./styled";

export const Sidebar = () => {
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
      <TextDraw>
        <select name="concurso" id="">
          <option value="concurso">concurso</option>
        </select>
        <h1>MEGA SENA</h1>
        <DateDraw>
          <p>Concurso</p>
          <p>456-26/06/55</p>
        </DateDraw>
      </TextDraw>
    </ContainerName>
  );
};
