import { API_BASE_PATH } from "@/config/constants"
import { apiGet } from "./Api"

export const getAllChatrooms = ()=>{
    return apiGet(`${API_BASE_PATH}/chatrooms`)
}

export const getOneChatroom = (id:string)=>{
    return apiGet(`${API_BASE_PATH}/chatrooms/${id}`)
}