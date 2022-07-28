import { GetPost } from "../../services/PostRequest";
import {Card} from '../../components/Card/Card'
import axios from 'axios'
import { baseUrl,token } from "../../constants/BaseUrl";
import {Container} from './Styled'
import {Button} from '@mui/material'
import {CreatePostVote} from '../../services/VoteRequest'
import {goToPost,goToFeed} from '../../routes/Coordinator'
import { useNavigate,useLocation } from "react-router-dom";

export const FeedPage = () => {
    
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
            button={()=>{CreatePostVote(item.id)}}/>
    })
    

    return(
        <Container>
           {location.pathname == "/feedPage" ? <Button onClick={()=>goToPost(navigate)} type={"submit"}variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>Criar post</Button> :
           <Button onClick={()=>goToFeed(navigate)} type={"submit"}variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>Feed</Button> }
            
            {listPost} 
        </Container>
    )
}