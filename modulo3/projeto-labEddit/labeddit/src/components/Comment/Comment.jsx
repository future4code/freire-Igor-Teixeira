import { useForm } from "../../hoocks/UseForm"
import { Button, TextField } from "@mui/material"
import {CreateComment} from '../../services/CreatPost'
import {GlobalStateContext} from '../../Global/GlobalStateContext'
import { useContext } from "react"
import{GetPostComments } from '../../services/PostRequest'
import {CardComment,Container,User,Text,Form,Reactions,Vote} from './Styled'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { CreateCommentVote} from '../../services/VoteRequest'
import {ChangeCommentVote} from '../../services/PutVoteRequest'
import {DeleteCommentVote} from '../../services/DeleteVoterequest'



export const Comment = (props) =>{
    const{comment} = useContext(GlobalStateContext)
    const { form ,onChange,clear} = useForm({
        body:"",
           
    })
   
    GetPostComments(props.id)

    const submit = (event) =>{
        const id = props.id
        event.preventDefault()
        CreateComment(form,id,clear)
        
    }
    
 
    const listComment = comment && comment.map((com)=>{
        return(
            <CardComment key={com.id}>
                <User><AccountCircleIcon/>{com.username}</User>
                <Text>{com.body}</Text>
                <Reactions>
                    <p><ThumbUpIcon color={com.userVote > 0 ? "success" : "Secundary"} onClick={()=>{com.userVote > 0 ? DeleteCommentVote(com.id) : CreateCommentVote(com.id)}}/></p> 

                    {com.voteSum  ? <Vote>{com.voteSum}</Vote> : null }

                    <p>
                        <ThumbDownIcon color={com.userVote < 0 ? "error" : "Secundary"} onClick={()=>{com.userVote < 0 ? DeleteCommentVote(com.id) : ChangeCommentVote(com.id)}}/>
                        </p>
                </Reactions>
                   
            </CardComment>
        )
    })
  
    return(
        <Container>
            <Form onSubmit={submit}>
                <TextField
               id="outlined-multiline-flexible"
                placeholder="Digite seu comentario ..."
                multiline
                size={"small"}
                name={"body"}
                onChange={onChange}
                value={form.body}
                required
                />
                <Button type={"submit"}><SendOutlinedIcon/></Button>
            </Form>

            {listComment}
        </Container>

    )
}