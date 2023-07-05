import { ServicesContext } from '@/contexts/servicesContext'
import React, { useContext, useEffect } from 'react'
import ChatRoomList from './ChatRoomList'

const ChatroomsOverView = () => {

    const {chatRoomListService} = useContext(ServicesContext);

    useEffect(()=>{
        chatRoomListService.call()
    },[])

    return <>
        <h3 className="m-2">ChatRooms</h3>
        <ChatRoomList list={chatRoomListService.data?.payload || [] } />
    </>
}

export default ChatroomsOverView