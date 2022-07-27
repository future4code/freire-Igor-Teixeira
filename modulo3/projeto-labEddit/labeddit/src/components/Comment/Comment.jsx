import { useForm } from "../../hoocks/UseForm"
import { Button, TextField } from "@mui/material"
import {CreateComment} from '../../services/CreatPost'
import {GlobalStateContext} from '../../Global/GlobalStateContext'
import { useContext, useEffect } from "react"
import{GetPostComments } from '../../services/PostRequest'
import {CardComment,Container,User,Text} from './Styled'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





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
    console.log(comment)
    const listComment = comment && comment.map((com)=>{
        return(
            <CardComment>
                <User><AccountCircleIcon/>{com.username}</User>
                <Text>{com.body}</Text>
            </CardComment>
        )
    })
    console.log(comment)

    return(
        <Container>
            <form onSubmit={submit}>
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
                <Button type={"submit"}>bot</Button>
            </form>

            {listComment}


        </Container>

    )
}