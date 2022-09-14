import {Container,Reactions,Send,Title,Text} from './Styled'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Badge } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from 'react';
import { Comment } from '../Comment/Comment';


 
export const Card = (props) => {

     const[commentSection,setCommentSection] = useState(false)

     const comment = () =>{
        setCommentSection(!commentSection) 
     }
    
    return(
        <Container >
            
               {/* <a href={`https://www.linkedin.com/shareArticle?mini=true&${window.location.href}=`}>
                   <ThumbUpIcon />
               </a> */}

                <Send>Enviado por: <u>{props.username}</u></Send>
                <Title>{props.title}</Title>
                
                <Text>{props.body}</Text>  

               
               <Reactions>
                   <Badge color={'primary'} badgeContent={props.voteSum > 0 ? props.voteSum : 0}>

                   <ThumbUpIcon color={props.userVote > 0 ? "success" : "Secundary"} onClick={props.userVote > 0 ? props.buttonDel : props.button}/>

                    </Badge>

                    <Badge color={'primary'}  badgeContent={props.voteSum < 0 ? props.voteSum : 0}>

                    <ThumbDownIcon color={props.userVote < 0 ? "error" : "Secundary"}  onClick={props.userVote < 0 ? props.buttonDel : props.buttonPut}/>

                    </Badge>


                    <Badge color={"primary"} badgeContent={props.commentCount}><ChatIcon onClick={comment}/></Badge>
                    
               </Reactions>
               {commentSection ? <Comment id={props.id}  /> : null}





        </Container >
    )
}