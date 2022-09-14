export const baseUrl = "https://labeddit-2.herokuapp.com"

export const token = {
    headers:{
        Authorization:localStorage.getItem("token")
    }
}

