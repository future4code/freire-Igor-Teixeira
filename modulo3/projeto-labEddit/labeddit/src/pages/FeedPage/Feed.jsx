import { GetPost } from "../../services/PostRequest";
import {Card} from '../../components/Card/Card'
import {Container,StyledButton,ButtonNavigate} from './Styled'
import {Button} from '@mui/material'
import {CreatePostVote} from '../../services/VoteRequest'
import {goToPost,goToFeed} from '../../routes/Coordinator'
import { useNavigate,useLocation } from "react-router-dom";
import {useProtectedPage} from '../../hoocks/UseProtectPage'
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Loader} from '../../components/Loader/Loader'
import {ChangePostVote} from '../../services/PutVoteRequest'
import { DeletePostVote } from "../../services/DeleteVoterequest";
import {PaginationControlled} from '../../components/Pagination/Pagination'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



export const FeedPage = () => {
    useProtectedPage()
    const {loader} = useContext(GlobalStateContext)
    const location = useLocation()
    const navigate = useNavigate()
    const allPosts = GetPost()
    const listPost = allPosts && allPosts.map((item,index)=>{
        return <Card key={index}
            userVote={item.userVote}
            id={item.id}
            title={item.title}
            username={item.username}
            body={item.body}
            voteSum={item.voteSum}
            commentCount={item.commentCount}
            button={()=>CreatePostVote(item.id)}
            buttonPut={()=>ChangePostVote(item.id)}
            buttonDel={()=>DeletePostVote(item.id)}/>
           
    })

 

    return (

        <Container>
        
          <ButtonNavigate onClick={() => {window.scrollTo(0, 0) }}>
              <KeyboardArrowUpIcon color={"secondary"}/>
          </ButtonNavigate>
          
          {location.pathname === "/feedPage" ? (
            <StyledButton
              onClick={() => goToPost(navigate)}
              type={"submit"}
              variant="contained"
              color="primary"
              style={{
                background:
                  "linear-gradient(to right, #EC5F6F, #EF796D,#F2956C,#F5B166",
              }}
            >
              Criar post
            </StyledButton>
          ) : (
            <StyledButton
              onClick={() => goToFeed(navigate)}
              type={"submit"}
              variant="contained"
              color="primary"
              style={{
                background:
                  "linear-gradient(to right, #EC5F6F, #EF796D,#F2956C,#F5B166",
              }}
            >
              Feed
            </StyledButton>
          )}
          {listPost}
          {!loader && <Loader />}
          <PaginationControlled />
        
        
        </Container>

    );
}