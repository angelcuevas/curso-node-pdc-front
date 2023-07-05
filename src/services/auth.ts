import { API_BASE_PATH } from "@/config/constants"
import { apiPost } from "./Api"

export const login = (request:{email:string, password:string})=>{
    return apiPost(`${API_BASE_PATH}/auth/login`, request)
}