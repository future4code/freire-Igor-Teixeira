import { OCreatePostDTO, Post } from "../models/Post"
import {DataBase} from "./DataBase"

export class PostData extends DataBase {
    protected TABLE_NAME = "Post_labook"
    Create = async (input:Post) => {
        const userDB:OCreatePostDTO = {
            id:input.getId(),
            photo:input.getPhoto(),
            description:input.getDescription(),
            create_date:input.getCreateDate(),
            type_post:input.getTypePost(),
            user_id:input.getUserId()
        }
        await this.getConnection()
        .from(this.TABLE_NAME)
        .insert(userDB)
        return "successfully created"
    }

    getPostById = async (id:string) => {
        const result:OCreatePostDTO[] = await this.getConnection()
        .from(this.TABLE_NAME)
        .select()
        .where("id","LIKE",`${id}`)
        return result
    }

    getFeed = async(id:string) => {
        this.getConnection()
    }

    getPostByType = async () => {
        this.getConnection()
    }
}