import React from "react";
import { Sidebar } from "../../sidebar/Sidebar";
import { ContainerMain, ContainerNumbers  } from "./styled";

export const MainBackground = (props) => {
  return (
    <ContainerMain>
        <Sidebar/>
      <ContainerNumbers>
        <div>1</div>
        <div>26</div>
        <div>66</div>
        <div>84</div>
        <div>36</div>
        <div>96</div>
      </ContainerNumbers>
    </ContainerMain>
  );
};
