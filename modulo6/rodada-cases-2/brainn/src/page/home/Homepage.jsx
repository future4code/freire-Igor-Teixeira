import styled from "styled-components"
import { MainBackground } from "../../components/MainBackground/MainBackground"
import { Sidebar } from "../../components/sidebar/Sidebar"
import {Container} from "./styled"

export const HomePage = () =>{
    return(
        <Container>
            <Sidebar/>
            <MainBackground/>
        </Container>
    )
}