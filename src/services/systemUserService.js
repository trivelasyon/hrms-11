import axios from "axios";

export default class systemUserService{
    getSystemUser(){
        return axios.get("http://localhost:8080/api/SystemUsers/getUsers")
    }
}