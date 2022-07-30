import { Button, TextField } from "@mui/material";
import React from "react";
import {Form,Container} from './Styled'
import {useForm} from '../../hoocks/UseForm'
import { CreatePost } from "../../services/CreatPost";
import {FeedPage} from '../../pages/FeedPage/Feed'
import {useProtectedPage} from '../../hoocks/UseProtectPage'


export const PostPage = () => {
    useProtectedPage()
   
    const {form,onChange,clear} = useForm({
        title: "",
        body: "",
    })
    
    const submit = (event) =>{
        event.preventDefault()
        CreatePost(form,clear)
    }
    console.log(form)


    return(
        <Container>
            <Form onSubmit={submit}>
                <TextField
                label="Titulo"
                variant="outlined"
                name={"title"}
                onChange={onChange}
                value={form.title}
                required
                />
                <TextField
                id="outlined-multiline-static"
                label="Post"
                placeholder="Digite seu post ..."
                multiline
                rows={4}
                name={"body"}
                onChange={onChange}
                value={form.body}
                required
                />
                <Button type={"submit"} variant="contained" color="primary" style={{ background: 'linear-gradient(to right, #FE5D5D, #FE6D6B,#FCAAA3),#FAC1B8'}}>Postar</Button>
            </Form>
            <FeedPage/>

            
  
        </Container>
    )
}