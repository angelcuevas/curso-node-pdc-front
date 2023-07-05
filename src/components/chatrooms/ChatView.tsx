import { ServicesContext } from '@/contexts/servicesContext'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import ChatTextBox from './ChatTextBox';
import MessageList from './MessageList';
import UserList from './UserList';
import { io } from 'socket.io-client';
//import { socket } from '../../../socket';
import { API_BASE_PATH } from '@/config/constants';
import { IUseUserAuthentication } from '@/hooks/useUserAuthentication';

interface IProps {
    userAuthentication: IUseUserAuthentication
}

const ChatView = ({userAuthentication}:IProps) => {
    let { id } = useParams();
    const { chatRoomService } = useContext(ServicesContext);
    const chatroom = chatRoomService.data ? chatRoomService.data.payload : null;
    const socket = useMemo(()=>{
        return io(API_BASE_PATH, { transports : ['websocket'] })
    },[])

    const [messages, setMessages] = useState<any[]>([])
    const [userList, setUserList] = useState<any[]>([])


    useEffect(() => {


        chatRoomService.call(id)
        
        socket.on('connect', ()=>{
            console.log('connected')
        })
        socket.emit('entered-chatroom', {chatroomId: id, username: userAuthentication.user.username} )
        socket.on('new-message', (msg)=>{
            if(msg.chatroomId == id){
                setMessages(prev=>[...prev, msg])
            }
        })
        socket.on('user-list', (msg)=>{
            console.log("USER LIST", msg)
            if(msg.chatroomId == id){
                setUserList(msg.usernames.map((obj:any)=>obj.username))
            }
        })

        return ()=>{socket.disconnect()}
    }, [])

    if (!chatRoomService.data) {
        return null;
    }

    return <>
        <h4>{chatroom.name}</h4>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <UserList users={userList}/>
                </div>
                <div className="col-md-10">
                    <MessageList messages={messages} ownUserName={userAuthentication.user.username} />
                    <ChatTextBox onSend={(message:string)=>socket.emit('new-message',{chatroomId:id, message, username:userAuthentication.user.username})}/>
                </div>
            </div>
        </div>
    </>
}

export default ChatView