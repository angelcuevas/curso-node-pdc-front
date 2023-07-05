import { API_BASE_PATH } from "@/config/constants"
import { apiDelete, apiPost, apiPut } from "./Api"

export const saveUser = (request:any)=>{
    return apiPost(`${API_BASE_PATH}/users`, request)
}

export const updateUser = (request:any)=>{
    return apiPut(`${API_BASE_PATH}/users`, request)
}

export const deleteUser = (id:string)=>{
    return apiDelete(`${API_BASE_PATH}/users/${id}`)
}