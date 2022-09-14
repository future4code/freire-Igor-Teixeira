import { Recipe } from "../models/Recipe"
import {DataBase} from "./DataBase"

export class RecipeData extends DataBase {

    async createRecipe(recipe:Recipe){
        try {
            await this.getConnection()
            .from("Recipes")
            .insert({
                id:recipe.getId(),
                title:recipe.getTitle(),
                description:recipe.getDescription(),
                created:recipe.getCreated(),
                user_id:recipe.getUserId()
            })
            return "Receita criado com sucesso"
        } catch (error) {
            return error.sqlMessage || error.message
        }
    }

    async getRecipe(id:string){
        try {
           const result = await this.getConnection()
            .select("id","title","description","created")
            .from("Recipes")
            .where("id","LIKE",`%${id}%`)
            return result
        } catch (error) {
            return error.sqlMessage
        }
    }

    async updateRecipe(){
        try {
            await this.getConnection()
        } catch (error) {
            return error.sqlMessage
        }
    }

    async deletRecipe(){
        try {
            await this.getConnection()
        } catch (error) {
            return error.sqlMessage
        }
    }
}