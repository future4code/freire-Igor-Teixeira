import {DataBase} from "./DataBase"

export class PostActionsData extends DataBase {

    like = async () => {
        this.getConnection()
    }

    disLike = async () => {
        this.getConnection()
    }

    comments = async () => {
        this.getConnection()
    }
}