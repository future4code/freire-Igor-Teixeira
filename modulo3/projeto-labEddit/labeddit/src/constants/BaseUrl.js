export const baseUrl = "https://labeddit.herokuapp.com"

export const token = {
    headers:{
        Authorization:localStorage.getItem("token")
    }
}

