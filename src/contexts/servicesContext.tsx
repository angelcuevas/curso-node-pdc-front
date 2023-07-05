
import useServiceCall, { IUseServiceCall } from "@/hooks/useServiceCall";
import { login } from "@/services/auth";
import { getAllChatrooms, getOneChatroom } from "@/services/chatroom";
import { deleteUser, saveUser, updateUser } from "@/services/user";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

interface IServicesProvider {
    loginService: IUseServiceCall
    userCreationService: IUseServiceCall
    userUpdateService: IUseServiceCall
    chatRoomListService: IUseServiceCall
    chatRoomService: IUseServiceCall
    userDeleteService: IUseServiceCall
}

export const ServicesContext = createContext<IServicesProvider>(null)


export const ServicesProvider = ({children}:any)=>{

    const loginService = useServiceCall(login)
    const userCreationService = useServiceCall(saveUser)
    const userUpdateService = useServiceCall(updateUser)
    const userDeleteService = useServiceCall(deleteUser)
    const chatRoomListService = useServiceCall(getAllChatrooms)
    const chatRoomService = useServiceCall(getOneChatroom)

    return <ServicesContext.Provider value={{loginService, userCreationService, userUpdateService, userDeleteService, chatRoomListService, chatRoomService}}>
        {children}
    </ServicesContext.Provider>
}

