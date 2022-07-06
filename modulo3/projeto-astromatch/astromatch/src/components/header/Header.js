import { Container } from "./style";
import { RiUserShared2Fill } from "react-icons/ri";
import { RiUserReceived2Fill } from "react-icons/ri";

export const Header = (props) => {
  return (
    <Container>
      <button onClick={props.home}>
        <RiUserReceived2Fill fontSize="25px" color="white" />
      </button>
      <h1>Astromatch</h1>
      <button onClick={props.matches}>
        <RiUserShared2Fill fontSize="25px" color="white" />
      </button>
    </Container>
  );
};
