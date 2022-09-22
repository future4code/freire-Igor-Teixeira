import { IPostDb, OCreatePostDTO, Post } from "../models/Post"
import {DataBase} from "./DataBase"

export class PostData extends DataBase {
    protected TABLE_NAME = "Post_labook"
    Create = async (input:Post) => {
        const userDB:IPostDb = {
            id:input.getId(),
            content:input.getContent(),
            create_date:input.getCreateDate(),
            user_id:input.getUserId(),
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