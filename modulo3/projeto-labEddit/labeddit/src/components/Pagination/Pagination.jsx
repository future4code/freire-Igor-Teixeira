import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";

import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Container } from "./Styled";

export const PaginationControlled = () => {
  const { page, setPage } = useContext(GlobalStateContext);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Pagination
        color="primary"
        count={10}
        page={page}
        onChange={handleChange}
      />
    </Container>
  );
};
