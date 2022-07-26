import { GetPost } from "../../services/PostRequest";
import { Badge } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {Card} from './Styled'
export const FeedPage = () => {
   
    

    const allPosts = GetPost()
    console.log(allPosts)
    const listPost = allPosts && allPosts.map((item,index)=>{
        return(
            <Card key={index}>
                <h3>{item.username}</h3>
                <p>{item.body}</p>  

               <Badge color={'primary'} badgeContent={item.voteSum}>
                <ThumbUpIcon/>
                </Badge> 

                <Badge color={'primary'} badgeContent={item.voteSum}>
                <ThumbDownIcon/>
                </Badge> 


            </Card >
        )
    })
    return(
        <div>
            oi
            {listPost}
        </div>
    )
}