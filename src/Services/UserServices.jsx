import axios from "axios";

export default class UserService {
    constructor(){
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN
        })
    }

    async (date){
        const {data} = this.axios.post('/login' , date )

        if(data){
            localStorage.setItem("nome",data.user.name)
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("token",data.user.token)

            return true
        }

        return
    }

}