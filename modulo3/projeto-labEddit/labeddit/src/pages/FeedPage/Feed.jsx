import { GetPost } from "../../services/PostRequest";
import {Card} from '../../components/Card/Card'
import {Container} from './Styled'
import {Button} from '@mui/material'
import {CreatePostVote} from '../../services/VoteRequest'
import {goToPost,goToFeed} from '../../routes/Coordinator'
import { useNavigate,useLocation } from "react-router-dom";
import {useProtectedPage} from '../../hoocks/UseProtectPage'
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Loader} from '../../components/Loader/Loader'
import {ChangePostVote} from '../../services/PutVoteRequest'

export const FeedPage = () => {
    useProtectedPage()
    const {loader} = useContext(GlobalStateContext)
    const location = useLocation()
    const navigate = useNavigate()
    const allPosts = GetPost()
    const listPost = allPosts && allPosts.map((item,index)=>{
        return <Card key={index}
        
            id={item.id}
            title={item.title}
            username={item.username}
            body={item.body}
            voteSum={item.voteSum}
            commentCount={item.commentCount}
            button={()=>CreatePostVote(item.id)}
            buttonPut={()=>ChangePostVote(item.id)}/>
           
    })
    

    return(
        <Container>
           {location.pathname === "/feedPage" ? <Button onClick={()=>goToPost(navigate)} type={"submit"}variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>Criar post</Button> :
           <Button onClick={()=>goToFeed(navigate)} type={"submit"}variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>Feed</Button> }
            
            {listPost} 
            {!loader && <Loader/>}
        </Container>
    )
}