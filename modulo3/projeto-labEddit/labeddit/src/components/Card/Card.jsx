import {Container,Reactions,Send,Title,Text} from './Styled'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Badge } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
 
export const Card = (props) => {
    return(
        <Container >
                <Send>Enviado por: <u>{props.username}</u></Send>
                <Title>{props.title}</Title>
                
                <Text>{props.body}</Text>  
               <Reactions>
                   <Badge color={'primary'} badgeContent={props.voteSum > 0 ? props.voteSum : 0}>
                    <ThumbUpIcon onClick={props.button}/>
                    </Badge>
                    <Badge color={'primary'} badgeContent={props.voteSum < 0 ? props.voteSum : 0}>
                    <ThumbDownIcon/>
                    </Badge>
                    <Badge color={"primary"} badgeContent={props.commentCount}><ChatIcon/></Badge>
                    

               </Reactions>



        </Container >
    )
}