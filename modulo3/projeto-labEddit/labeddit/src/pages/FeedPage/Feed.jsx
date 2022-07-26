import { GetPost } from "../../services/PostRequest";
import {Card} from '../../components/Card/Card'
import axios from 'axios'
import { baseUrl,token } from "../../constants/BaseUrl";
import {Container} from './Styled'




export const FeedPage = () => {

        const CreatePostVote = (id) => {
        const body = {
            direction: 1
        }
        axios.post(`${baseUrl}/posts/${id}/votes`,body,token)
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            alert(err)
            console.log(err.response.data)
        })  
    }

    // const GetPostComments = (id) => {
    //     axios.get(`${baseUrl}/posts/${id}/comments`,token)
    // }




    const allPosts = GetPost()
    console.log(allPosts)
    const listPost = allPosts && allPosts.map((item,index)=>{
        return <Card key={index}
            title={item.title}
            username={item.username}
            body={item.body}
            voteSum={item.voteSum}
            commentCount={item.commentCount}
            button={()=>{CreatePostVote(item.id)}}/>
    })

    return(
        <Container>
            {listPost}
        </Container>
    )
}